import React, { useState } from "react";
import InsBarChart from "./InsBarChart";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const InsMetrics = () => {
  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "Outcome Metrics", value: "1" },
    { name: "Behavior Metrics", value: "2" },
  ];

  const getTitle = () => {
    if (radioValue === "1") {
      return "Outcome Metrics Title";
    }

    return "Behavior Metrics Title";
  };
  const getCategories = () => {
    if (radioValue === "1") {
      return [
        "Loan Production (in K)",
        "Deposit Growth (in K)",
        "Tm Growth (in K)",
        "New Clients",
      ];
    }

    return [
      "Avg Overall RM Satisfaction",
      "Client Calls",
      "Prospect Calls",
      "Strategies Uploaded",
    ];
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginBottom: "12px",
        }}
      >
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-primary" : "outline-primary"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>

      <div>
        {radioValue === "1" ? (
          <InsBarChart title={getTitle()} categories={getCategories()} />
        ) : null}
        {radioValue === "2" ? (
          <InsBarChart title={getTitle()} categories={getCategories()} />
        ) : null}
      </div>
    </>
  );
};

export default InsMetrics;
