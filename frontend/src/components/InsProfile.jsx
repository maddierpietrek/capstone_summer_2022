import InsTextWithLabel from "./InsTextWithLabel";

const InsProfile = ({ profile }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
        padding: "20px",
        boxShadow: "1px 2px 9px #ccc",
      }}
    >
      <img src={profile.avatar} alt={profile.name} style={{ width: "80px" }} />
      <InsTextWithLabel
        textSize="sm"
        position="top"
        label="Name"
        text={profile.name}
      />
      <InsTextWithLabel
        textSize="sm"
        position="top"
        label="Hire Date"
        text={profile.hireDate}
      />
      <InsTextWithLabel
        textSize="sm"
        position="top"
        label="Role"
        text={profile.role}
      />
      <InsTextWithLabel
        textSize="sm"
        position="top"
        label="Manager"
        text={profile.manager}
      />
    </div>
  );
};

export default InsProfile;
