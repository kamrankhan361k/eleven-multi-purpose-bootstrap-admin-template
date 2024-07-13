import { Col, Row } from "reactstrap";

import CardAlignmentExample from "../examples/CardAlignment";
import CardBackgroundsExample from "../examples/CardBackgrounds";
import CardColumnsExample from "../examples/CardColumns";
import CardContentExample from "../examples/CardContentTypes";
import CardDecksExample from "../examples/CardDecks";
import CardExample from "../examples/Card";
import CardGroupsExample from "../examples/CardGroups";
import CardHeaderFooterExample from "../examples/CardHeaderFooter";
import CardImageCapsExample from "../examples/CardImageCaps";
import CardImageOverlayExample from "../examples/CardImageOverlay";
import CardOutlineExample from "../examples/CardOutline";
import CardSizingExample from "../examples/CardSizing";
import SectionTitle from "../UI/SectionTitle";

export default class CardPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12" lg={{ size: 10, offset: 1 }}>
          <Row>
            <Col xs={12} sm={6}>
              <SectionTitle>Basic card</SectionTitle>
              <div className="mb-4">
                <CardExample />
              </div>

              <SectionTitle>Content Types</SectionTitle>
              <div className="mb-4">
                <CardContentExample />
              </div>

              <SectionTitle>Sizing</SectionTitle>
              <div className="mb-4">
                <CardSizingExample />
              </div>

              <SectionTitle>Text alignment</SectionTitle>
              <div className="mb-4">
                <CardAlignmentExample />
              </div>

              <SectionTitle>Header and Footer</SectionTitle>
              <div className="mb-4">
                <CardHeaderFooterExample />
              </div>
            </Col>

            <Col xs={12} sm={6}>
              <SectionTitle>Image overlays</SectionTitle>
              <div className="mb-4">
                <CardImageOverlayExample />
              </div>

              <SectionTitle>Background variants</SectionTitle>
              <div className="mb-4">
                <CardBackgroundsExample />
              </div>

              <SectionTitle>Outline variants</SectionTitle>
              <div className="mb-4">
                <CardOutlineExample />
              </div>
            </Col>
          </Row>

          <SectionTitle>Image caps</SectionTitle>
          <div className="mb-4">
            <CardImageCapsExample />
          </div>

          <SectionTitle>Groups</SectionTitle>
          <div className="mb-4">
            <CardGroupsExample />
          </div>

          <SectionTitle>Decks</SectionTitle>
          <div className="mb-4">
            <CardDecksExample />
          </div>

          <SectionTitle>Columns</SectionTitle>
          <div className="mb-4">
            <CardColumnsExample />
          </div>
        </Col>
      </Row>
    );
  }
}
