import { Col, Row } from "reactstrap";

import CarouselCustomTagExample from "../examples/CarouselCustomTag";
import CarouselExample from "../examples/Carousel";
import CarouselUncontrolledExample from "../examples/CarouselUncontrolled";
import SectionTitle from "../UI/SectionTitle";

export default class CarouselPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <div className="mb-4">
            <CarouselExample />
          </div>

          <SectionTitle>Uncontrolled Carousel</SectionTitle>
          <div className="mb-4">
            <CarouselUncontrolledExample />
          </div>

          <SectionTitle>Carousel using a tag and classname</SectionTitle>
          <div className="mb-4">
            <CarouselCustomTagExample />
          </div>
        </Col>
      </Row>
    );
  }
}
