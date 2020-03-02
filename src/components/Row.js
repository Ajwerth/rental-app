import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const tableCellStyle = {
  padding: 5
};

const Row = props => {
  const { data } = props;

  if (data === undefined){
    return null;
  }
  
  const RowRendered = data.map(item => {
    return (
      <tr key={item.id}>
        <td style={tableCellStyle}>{item.make}</td>
        <td style={tableCellStyle}>{item.model}</td>
        <td style={tableCellStyle}>{item.year}</td>
        <td style={tableCellStyle}>{item.rental_price}</td>
      </tr>
    );
  });

  return RowRendered;
};

export default Row;
