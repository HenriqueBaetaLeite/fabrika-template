import React from "react";

const Table = ({ header, data }) => {
  return (
    <table className="table table-dark table-striped table-bordered table-hover table-sm">
      <thead className="thead-light">
        <tr>
          {header.map((element) => (
            <th key={element}>{element}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((element) => (
          <tr key={element}>
            <td>{element.name}</td>
            <td>{element.title}</td>
            <td>{element.last}</td>
            <td>
              <button>{element.name}</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
