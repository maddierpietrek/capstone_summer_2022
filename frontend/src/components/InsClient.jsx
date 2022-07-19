import InsTextWithLabel from "./InsTextWithLabel";

const InsClient = ({ client }) => {
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
          textSize="lg"
          label="Total Relationships"
          text={client.relationships}
        />
      </div>
      <div
        className="col"
        style={{
          borderRightStyle: "solid",
          borderColor: "lightgrey",
        }}
      >
        <div className="row">
          <InsTextWithLabel
            textSize="sm"
            label="Credit Only Relationships"
            text={client.creditRelationships}
          />
        </div>
        <div className="row">
          <InsTextWithLabel
            textSize="sm"
            label="Relationships with <$25 K TTM Revenue"
            text={client.ttmRevenue}
          />
        </div>
      </div>
      <div className="col">
        <div className="row">
          <InsTextWithLabel
            textSize="sm"
            label="Top Prospects"
            text={client.topProspects}
          />
        </div>
        <div className="row">
          <InsTextWithLabel
            textSize="sm"
            label="Suspects"
            text={client.suspects}
          />
        </div>
      </div>
    </div>
  );
};

export default InsClient;
