import React from 'react';
import Rental from './components/Rental'
import { renderHook, render, fireEvent, getByTestId } from '@testing-library/react-hooks';
import {useForm, useFetch} from './customHooks'
import { fakeServer } from 'sinon';


describe('The useForm hook', () => {

  it('should have no values on render', () => {
    const { result } = renderHook(() => useForm());
    expect (result.current.values).toEqual({});
  });

  it('should change state on input change', () => {
    const { container } = render(<Rental />)
    const firstName = getByTestId(container, "firstName")
    const lastName = getByTestId(container, "lastName")
    const email = getByTestId(container, "email")
    const pickUpDate = getByTestId(container, "pickUpDate")
    const dropOffDate = getByTestId(container, "dropOffDate")
    const car = getByTestId(container, "car") 
    const submit = getByTestId(container, "submit")
  
    fireEvent.change(firstName, {
      target: {
        value: "mockname"
      }
    })

    fireEvent.change(lastName, {
      target: {
        value: "mockname"
      }
    })

    fireEvent.change(email, {
      target: {
        value: "mock@email.com"
      }
    })

    fireEvent.change(pickUpDate, {
      target: {
        value: "2020-12-12"
      }
    })
  
    fireEvent.change(dropOffDate, {
      target: {
        value: "2020-12-12"
      }
    })
  
    fireEvent.change(car, {
      target: {
        value: "Bus"
      }
    })
  
    fireEvent.click(submit)
    
    expect(window.localStorage).toEqual({'firstName':'mockname','lastName':'mockname','email':'mock@email.com','pickUpDate':'2020-12-12','dropOffDate':'2020-12-12','car':'Bus'});
    });
});


describe('The useFetch hook', () => {
  let server;

  beforeEach(() => {
    server = fakeServer.create();
  });

  afterEach(() => {
    server.restore();
  });

  it('returns proper initial states', () => {
    const url = '/foo/bar';
    const { result } = renderHook(() =>
      useFetch({ url })
    );
  
    expect(result.current.isLoading).toEqual(true);
    expect(result.current.response).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('GETs data from server', async () => {
    const url = '/foo/bar';
    const expectedData = { some: 'data' };

    server.respondWith('GET', url, [
      200,
      {},
      JSON.stringify(expectedData)
    ]);
  
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(url, {})
    );
    
    server.respond();
  
    await waitForNextUpdate();

    expect(result.current.response).toEqual(expectedData);
    expect(result.current.error).toBeNull();
  });
});