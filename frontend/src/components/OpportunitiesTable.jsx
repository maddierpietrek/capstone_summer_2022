import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import {
  useSort,
  HeaderCellSort,
} from "@table-library/react-table-library/sort";

const OpportunitiesTable = ({ opportunities }) => {
  const nodes = opportunities;
  const data = { nodes };

  const sort = useSort(
    data,
    {
      state: {
        sortKey: "REVENUE",
        reverse: true,
      },
    },
    {
      sortFns: {
        CLIENT_NAME: (array) =>
          array.sort((a, b) => a.clientName.localeCompare(b.clientName)),
        PRODUCT_TYPE: (array) =>
          array.sort((a, b) => a.productType.localeCompare(b.productType)),
        STAGE: (array) => array.sort((a, b) => a.stage.localeCompare(b.stage)),
        SALES_STAGE: (array) =>
          array.sort((a, b) => a.salesStage.localeCompare(b.salesStage)),
        REVENUE: (array) => array.sort((a, b) => a.revenue - b.revenue),
        DATE_CLOSED: (array) =>
          array.sort((a, b) => a.dateClosed.localeCompare(b.dateClosed)),
      },
    }
  );

  return (
    <div>
      <Table data={data} sort={sort} style={{ backgroundColor: "white" }}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort sortKey="CLIENT_NAME">
                  Client Name
                </HeaderCellSort>
                <HeaderCellSort sortKey="PRODUCT_TYPE">
                  Product Type
                </HeaderCellSort>
                <HeaderCellSort sortKey="STAGE">Stage</HeaderCellSort>
                <HeaderCellSort sortKey="SALES_STAGE">
                  Sales Stage
                </HeaderCellSort>
                <HeaderCellSort sortKey="REVENUE">Revenue</HeaderCellSort>
                <HeaderCellSort sortKey="DATECLOSED">
                  Date Closed
                </HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell>{item.clientName}</Cell>
                  <Cell>{item.productType}</Cell>
                  <Cell>{item.stage}</Cell>
                  <Cell>{item.salesStage}</Cell>
                  <Cell>{item.revenue}</Cell>
                  <Cell>{item.dateClosed}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </div>
  );
};

export default OpportunitiesTable;
