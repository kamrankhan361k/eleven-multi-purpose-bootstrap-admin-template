import { Col, Row } from "reactstrap";

import Timeline from "./core/Timeline";
import fetch from "../lib/fetch";
import useSWR from "swr";

const TimelineComponent = () => {
  const { data, error } = useSWR(
    `${process.env.baseUrl}api/timeline`,
    fetch
  );
  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} className="m-auto">
        <Timeline title="Period ending 2017" timeline={data} />
      </Col>
    </Row>
  );
};

export default TimelineComponent;
