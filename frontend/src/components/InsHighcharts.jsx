import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export function InsHighcharts({ options }) {
  // https://github.com/highcharts/highcharts-react
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
