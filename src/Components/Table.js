import React from "react";

function Table() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Time Table</h2>
      <table
        style={{
          margin: "auto",
          borderCollapse: "collapse", // ✅ join borders
          width: "80%",
        }}
      >
        <thead>
          <tr>
            <th style={cellStyle}>Day</th>
            <th style={cellStyle}>9:00 - 10:00</th>
            <th style={cellStyle}>10:00 - 11:00</th>
            <th style={cellStyle}>11:00 - 12:00</th>
            <th style={cellStyle}>12:00 - 1:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>Monday</td>
            <td style={cellStyle}>Math</td>
            <td style={cellStyle}>English</td>
            <td style={cellStyle}>Science</td>
            <td style={cellStyle}>History</td>
          </tr>
          <tr>
            <td style={cellStyle}>Tuesday</td>
            <td style={cellStyle}>Physics</td>
            <td style={cellStyle}>Chemistry</td>
            <td style={cellStyle}>Biology</td>
            <td style={cellStyle}>Sports</td>
          </tr>
          <tr>
            <td style={cellStyle}>Wednesday</td>
            <td style={cellStyle}>Computer</td>
            <td style={cellStyle}>Math</td>
            <td style={cellStyle}>English</td>
            <td style={cellStyle}>Geography</td>
          </tr>
          <tr>
            <td style={cellStyle}>Thursday</td>
            <td style={cellStyle}>Science</td>
            <td style={cellStyle}>History</td>
            <td style={cellStyle}>Math</td>
            <td style={cellStyle}>Drawing</td>
          </tr>
          <tr>
            <td style={cellStyle}>Friday</td>
            <td style={cellStyle}>English</td>
            <td style={cellStyle}>Physics</td>
            <td style={cellStyle}>Chemistry</td>
            <td style={cellStyle}>Games</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ✅ reusable style for all cells
const cellStyle = {
  border: "1px solid black",
  padding: "10px",
  textAlign: "center",
};

export default Table;