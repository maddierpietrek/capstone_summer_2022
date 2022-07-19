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

const tempData = [
  {
    name: "Stage 1",
    year1: 4000,
    year2: 2400,
  },
  {
    name: "Stage 2",
    year1: 3000,
    year2: 1398,
  },
  {
    name: "Stage 3",
    year1: 2000,
    year2: 9800,
  },
  {
    name: "Stage 4",
    year1: 2780,
    year2: 3908,
  },
  {
    name: "Booked YTD",
    year1: 1890,
    year2: 4800,
  },
];

const barchart = ({ data }) => {
  return (
    <div
      style={{
        margin: "24px 0",
        height: "350px",
        backgroundColor: "#fff",
        padding: "24px",
      }}
    >
      <h5>Current vs Same Time Last Year</h5>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={tempData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="year1" fill="#8884d8" />
          <Bar dataKey="year2" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default barchart;
