import { Col, Row } from "reactstrap";

import ModalBackdropExample from "../examples/ModalBackdrop";
import ModalCustomCloseButtonExample from "../examples/ModalCustomCloseButton";
import ModalCustomCloseIconExample from "../examples/ModalCustomCloseIcon";
import ModalCustomTimeoutExample from "../examples/ModalCustomTimeout";
import ModalDestructuringExample from "../examples/ModalDestructuring";
import ModalExample from "../examples/Modal";
import ModalExternalExample from "../examples/ModalExternal";
import ModalFadelessExample from "../examples/ModalFadeless";
import ModalFocusAfterClose from "../examples/ModalFocusAfterClose";
import ModalNestedExample from "../examples/ModalNested";
import SectionTitle from "../UI/SectionTitle";

const ModalsPage = () => {
  return (
    <Row>
      <Col sm="12" lg={{ size: 10, offset: 1 }}>
        <div className="btn-group">
          <div className="btn">
            <ModalExample buttonLabel="Launch Modal" />
          </div>
          <div className="btn">
            <ModalExample
              buttonLabel="Launch Modal with custom className"
              className="my-custom-modal"
            />
          </div>
        </div>

        <div className="btn-group">
          <div className="btn">
            <ModalBackdropExample buttonLabel="Launch Modal" />
          </div>
        </div>

        <div className="btn-group">
          <div className="btn">
            <ModalNestedExample buttonLabel="Launch Modal w/ Nested Example" />
          </div>
        </div>

        <div className="btn-group">
          <div className="btn">
            <ModalCustomTimeoutExample buttonLabel="Launch Modal with Custom Transition Timeouts Example" />
          </div>
        </div>

        <div className="btn-group">
          <div className="btn">
            <ModalFadelessExample buttonLabel="Launch Modal without Fade Effect Example" />
          </div>
        </div>

        <div className="btn-group">
          <div className="btn">
            <ModalExternalExample buttonLabel="Launch Modal with external close button" />
          </div>
        </div>

        <div className="btn-group">
          <div className="btn">
            <ModalCustomCloseIconExample buttonLabel="Launch Modal with custom close Icon" />
          </div>
        </div>

        <div className="btn-group">
          <div className="btn">
            <ModalCustomCloseButtonExample buttonLabel="Launch Modal with custom close button" />
          </div>
        </div>

        <div className="btn-group">
          <div className="btn">
            <ModalDestructuringExample buttonLabel="Launch Modal" />
          </div>
        </div>

        <div className="btn-group">
          <div className="btn">
            <ModalFocusAfterClose />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ModalsPage;
