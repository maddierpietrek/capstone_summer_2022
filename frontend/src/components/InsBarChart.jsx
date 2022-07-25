import { InsHighcharts } from "./InsHighcharts";
import { formatNumber } from "../utilities";

const testData = {
  id: 1,
  loan_prod_y1: 455167.57,
  loan_prod_y2: 579098.78,
  dep_growth_y1: 348379.44,
  dep_growth_y2: 382682.86,
  tm_growth_y1: 322704.73,
  tm_growth_y2: 400572.22,
  new_clients_y1: 3,
  new_clients_y2: 4,
};

// Highcharts options
// 1. chart
// 2. title
// 3. xAxis / categories
// 4. yAxis / min
// 5. yAxis / title
// 6. series

const InsBarChart = ({ title, categories, seriesData }) => {
  const options = {
    title: {
      text: title,
    },
    chart: {
      type: "bar",
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      visible: false,
    },
    series: [
      {
        name: "Year 1",
        data: [
          formatNumber(455167.57),
          formatNumber(348379.44),
          formatNumber(322704.73),
          { y: 3, color: "red" },
        ],
      },
      {
        name: "Year 2",
        data: [
          formatNumber(579098.78),
          formatNumber(382682.86),
          formatNumber(400572.22),
          4,
        ],
      },
    ],
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
  };

  return <InsHighcharts options={options} />;
};

export default InsBarChart;
