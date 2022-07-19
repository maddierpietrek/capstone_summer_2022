import InsTextWithLabel from "./InsTextWithLabel";
const InsSummary = ({ summary }) => {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "white",
        fontSize: "14px",
        boxShadow: "1px 2px 9px #ccc",
      }}
    >
      <div
        className="col"
        style={{
          borderRightStyle: "solid",
          borderColor: "lightgrey",
        }}
      >
        <InsTextWithLabel
          textSize="sm"
          label="TTM Avg Loan Balance"
          text={summary.avgLoan}
        />
      </div>
      <div
        className="col"
        style={{ borderRightStyle: "solid", borderColor: "lightgrey" }}
      >
        <InsTextWithLabel
          textSize="sm"
          label="TTM Avg Credit Commitments"
          text={summary.avgCredit}
        />
      </div>
      <div className="col">
        <InsTextWithLabel
          textSize="sm"
          label="TTM Deposit Balance"
          text={summary.depositBal}
        />
      </div>
    </div>
  );
};

export default InsSummary;
