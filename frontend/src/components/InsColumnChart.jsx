import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { InsHighcharts } from "./InsHighcharts";

const testData = [
  {
    year: 2019,
    stage_1: 372050.67,
    stage_2: 536387.01,
    stage_3: 271575.97,
    stage_4: 337246.07,
    booked_ytd: 474257.6,
  },
  {
    year: 2020,
    stage_1: 540201.94,
    stage_2: 430330.59,
    stage_3: 472829.73,
    stage_4: 333774.16,
    booked_ytd: 442231.25,
  },
  {
    year: 2021,
    stage_1: 406553.17,
    stage_2: 570885.83,
    stage_3: 565137.2,
    stage_4: 424641.14,
    booked_ytd: 414977.1,
  },
];

// Highcharts options
// 1. chart
// 2. title
// 3. xAxis / categories
// 4. yAxis / min
// 5. yAxis / title
// 6. series

const InsColumnChart = () => {
  const chartTitle = "Opportunities by Year";
  const options = {
    title: {
      text: chartTitle,
    },
    chart: {
      type: "column",
    },
    xAxis: {
      categories: ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Booked YTD"],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Revenue (MM)",
      },
    },
    series: [
      {
        name: "2020",
        data: [372050.67, 536387.01, 271575.97, 337246.07, 474257.6],
      },
      {
        name: "2021",
        data: [540201.94, 430330.59, 472829.73, 333774.16, 442231.25],
      },
      {
        name: "2022",
        data: [406553.17, 570885.83, 565137.2, 424641.14, 414977.1],
      },
    ],
  };

  return <InsHighcharts options={options} />;
};

export default InsColumnChart;
