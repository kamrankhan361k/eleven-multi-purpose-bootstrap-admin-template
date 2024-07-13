import {
  Bar,
  Bubble,
  Doughnut,
  HorizontalBar,
  Line,
  Pie,
  Polar,
  Radar,
  defaults
} from "react-chartjs-2";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

import fetch from "../lib/fetch";
import useSWR from "swr";

defaults.global.defaultFontFamily = "Arimo";

const Charts = () => {
  const { data, error } = useSWR(`${process.env.baseUrl}api/chart`, fetch);

  if (error) return <div>Failed to load chart data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Row>
      {data.map((chart, index) => (
        <Col xs={12} sm={6} md={6} lg={4} key={index}>
          <Card className="mb-3">
            <CardHeader>
              {chart.title} {chart.subtitle}
            </CardHeader>
            <CardBody>
              {chart.type === "bar" && (
                <Bar
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              )}
              {chart.type === "horizontalbar" && (
                <HorizontalBar
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              )}
              {chart.type === "line" && (
                <Line
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              )}
              {chart.type === "bubble" && (
                <Bubble
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              )}
              {chart.type === "doughnut" && (
                <Doughnut
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              )}
              {chart.type === "pie" && (
                <Pie
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              )}
              {chart.type === "polar" && (
                <Polar
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              )}
              {chart.type === "radar" && (
                <Radar
                  data={chart.data}
                  height={chart.height}
                  options={chart.options}
                />
              )}
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Charts;
