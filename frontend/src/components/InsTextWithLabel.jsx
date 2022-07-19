const InsTextWithLabel = ({ label, text, position, textSize }) => {
  let fontSize = "40px";

  if (textSize === "xxl") {
    fontSize = "62px";
  } else if (textSize === "xl") {
    fontSize = "50px";
  } else if (textSize === "lg") {
    fontSize = "40px";
  } else if (textSize === "md") {
    fontSize = "30px";
  } else if (textSize === "sm") {
    fontSize = "18px";
  } else if (textSize === "xsm") {
    fontSize = "16px";
  }

  const textStyle = { fontSize: fontSize };

  if (position === "top") {
    return (
      <div style={{ marginBottom: "16px", paddingTop: "16px" }}>
        <div>
          <span style={{ color: "#808080" }}>{label}</span>
        </div>
        <div style={{ fontWeight: "bold" }}>
          <span style={textStyle}>{text}</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ fontWeight: "bold", paddingTop: "16px" }}>
        <span style={textStyle}>{text}</span>
      </div>
      <div>
        <span style={{ color: "#808080" }}>{label}</span>
      </div>
    </div>
  );
};

export default InsTextWithLabel;
