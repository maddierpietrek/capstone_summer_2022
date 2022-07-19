const opportunitiesTable = ({ opportunities }) => {
  return (
    <table className="table" bgcolor="white">
      <thead>
        <tr>
          <th scope="col">Relationship</th>
          <th scope="col">Product Type</th>
          <th scope="col">Stage</th>
          <th scope="col">Sales Stage</th>
          <th scope="col">Revenue</th>
          <th scope="col">Date Closed</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {opportunities.map((op) => {
          return (
            <tr key={op.id}>
              <td style={{ padding: "24px" }}>{op.clientName}</td>
              <td style={{ padding: "24px" }}>{op.clientName}</td>
              <td style={{ padding: "24px" }}>{op.productType}</td>
              <td style={{ padding: "24px" }}>{op.stage}</td>
              <td style={{ padding: "24px" }}>{op.salesStage}</td>
              <td style={{ padding: "24px" }}>{op.revenue}</td>
              <td style={{ padding: "24px" }}>{op.dateClosed}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default opportunitiesTable;
