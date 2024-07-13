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
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from "reactstrap";

import Activity from "../public/animated-icons/activity/activity.json";
import AnimatedIcon from "./core/AnimatedIcon";
import Heart from "../public/animated-icons/heart/heart.json";
import Like from "../public/animated-icons/thumb/thumb.json";
import PostCard from "./core/PostCard";
import Sound from "../public/animated-icons/online/online.json";
import StatCard from "./core/StatCard";
import WeatherCard from "./core/WeatherCard";
import fetch from "../lib/fetch";
import useSWR from "swr";

defaults.global.defaultFontFamily = "Arimo";

const Dashboard = () => {
  const { data, error } = useSWR(`${process.env.baseUrl}api/dashboard`, fetch);
  const iconSize = 22;

  if (error) return <div>Failed to load dashboard data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader className="d-flex justify-content-between align-items-center">
              <div>
                <span>Sale Analytics</span>
                <small className="d-block text-muted">
                  Percentage change <span className="text-danger">▼95.87%</span>
                </small>
              </div>
              <div>
                <ButtonGroup size="sm" className="button-shadow">
                  <Button outline color="secondary">
                    24 Hours
                  </Button>
                  <Button outline color="secondary">
                    7 Days
                  </Button>
                  <Button outline color="secondary">
                    1 Month
                  </Button>
                </ButtonGroup>
              </div>
            </CardHeader>
            <CardBody>
              <div className="d-none d-sm-flex justify-content-between pb-4">
                <div className="text-success">
                  <h5 className="mb-0">
                    <strong> 34.45B </strong>
                  </h5>
                  <small>Aggregate Income</small>
                </div>
                <div className="d-sm-flex justify-content-around">
                  <div className="pr-5">
                    <h5 className="mb-0">
                      <strong>92.83</strong>
                    </h5>
                    <small>Average impressions</small>
                  </div>
                  <div className="pr-5 text-danger">
                    <h5 className="mb-0">
                      <strong>45.08%</strong>
                    </h5>
                    <small>Engagement rate</small>
                  </div>
                  <div>
                    <h5 className="mb-0">
                      <strong>783</strong>
                    </h5>
                    <small>Growth Rate</small>
                  </div>
                </div>
              </div>
              <Line
                data={data.chart.data}
                height={data.chart.height}
                options={data.chart.options}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={6} md={3}>
          <StatCard
            title="Users"
            value={"576K"}
            icon={<AnimatedIcon animationData={Heart} size={iconSize} />}
            type={"primary"}
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Uptime"
            value={"99.99%"}
            icon={<AnimatedIcon animationData={Sound} size={iconSize} />}
            type={"secondary"}
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Visitors"
            value={"465K"}
            icon={<AnimatedIcon animationData={Activity} size={iconSize} />}
            type={"warning"}
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
        <Col sm={6} md={3}>
          <StatCard
            title="Likes"
            value={"7,578"}
            icon={<AnimatedIcon animationData={Like} size={iconSize} />}
            type={"danger"}
            clickHandler={() => alert("Campaign stat button clicked")}
          />
        </Col>
      </Row>

      <Row>
        {data.charts.map((chart, index) => (
          <Col sm={12} md={4} key={index}>
            <Card>
              <CardHeader className="d-flex justify-content-between">
                <div>
                  <span>{chart.title}</span>
                </div>
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

      <Row>
        <Col sm={12} md={6}>
          <WeatherCard city="harare" country="zw" days={7} />
        </Col>

        <Col sm={12} md={6}>
          <PostCard
            title="Shrimp and Chorizo Paella"
            subtitle="Yesterday"
            images={[
              `${process.env.baseUrl}images/unsplash/1.jpg`,
              `${process.env.baseUrl}images/unsplash/15.jpg`
            ]}
            imageHeight={294}
            text="Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
          />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
