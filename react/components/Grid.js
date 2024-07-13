import { Col, Row } from "reactstrap";

import fetch from "../lib/fetch";
import useSWR from "swr";

const Grid = () => {
  const { data, error } = useSWR(`${process.env.baseUrl}api/media`, fetch);

  if (error) return <div>Failed to load media data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Row>
      {data.map(id => (
        <Col lg={3} sm={6} key={id}>
          <figure className="figure" style={{ height: "300px" }}>
            <span
              className="image"
              style={{
                backgroundImage: `url(${process.env.baseUrl}images/unsplash/${id}.jpg)`
              }}
            ></span>
            <figcaption>
              <h5 className="title">
                Media <strong>{id}</strong>
              </h5>
            </figcaption>
          </figure>
        </Col>
      ))}
    </Row>
  );
};

export default Grid;
