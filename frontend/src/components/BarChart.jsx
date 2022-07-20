import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const barColors = ["#1f77b4", "#ff7f0e", "#2ca02c"];

const barchart = ({ data, years }) => {
  return (
    <div
      style={{
        margin: "24px 0",
        height: "350px",
        backgroundColor: "#fff",
        padding: "24px",
      }}
    >
      <h5 style={{ textAlign: "center", fontWeight: "bold" }}>
        Opportunities by Stage
      </h5>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="stage" />
          <YAxis />
          <Tooltip />
          <Legend />
          {years.map((year, index) => {
            return <Bar key={year} dataKey={year} fill={barColors[index]} />;
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default barchart;
