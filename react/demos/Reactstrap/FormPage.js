import CustomControlsExample from '../examples/CustomControls';
import FormExample from '../examples/Form';
import FormFeedbackExample from '../examples/FormFeedback';
import FormGridExample from '../examples/FormGrid';
import FormGridFormRowExample from '../examples/FormGridFormRow';
import FormInlineExample from '../examples/FormInline';
import InlineCheckboxesExample from '../examples/InlineCheckboxes';
import InputGridSizingExample from '../examples/InputGridSizing';
import InputSizingExample from '../examples/InputSizing';
import InputTypeExample from '../examples/InputType';
import LabelHiddenExample from '../examples/LabelHidden';
import { PrismCode } from 'react-prism';
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import SectionTitle from '../UI/SectionTitle';

const FormExampleSource = require('!!raw-loader!../examples/Form');

const FormGridExampleSource = require('!!raw-loader!../examples/FormGrid');

const FormGridFormRowExampleSource = require('!!raw-loader!../examples/FormGridFormRow');

const FormInlineExampleSource = require('!!raw-loader!../examples/FormInline');

const FormFeedbackExampleSource = require('!!raw-loader!../examples/FormFeedback');

const InputTypeExampleSource = require('!!raw-loader!../examples/InputType');

const InlineCheckboxesExampleSource = require('!!raw-loader!../examples/InlineCheckboxes');

const InputSizingExampleSource = require('!!raw-loader!../examples/InputSizing');

const InputGridSizingExampleSource = require('!!raw-loader!../examples/InputGridSizing');

const LabelHiddenExampleSource = require('!!raw-loader!../examples/LabelHidden');

const CustomControlsExampleSource = require('!!raw-loader!../examples/CustomControls');

export default class FormPage extends React.Component {
  render() {
    return (
      <div>
        <div className="docs-example">
          <FormExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">{FormExampleSource}</PrismCode>
        </pre>

        <SectionTitle>Properties</SectionTitle>
        <pre>
          <PrismCode className="language-jsx">
            {`Input.propTypes = {
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
  valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
  invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

CustomInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired, // radio, checkbox, select, range, switch, file.
  label: PropTypes.string, // used for checkbox and radios
  inline: PropTypes.bool,
  valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
  invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
  bsSize: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]), // for type="select"
  // innerRef would be referenced to select node or input DOM node, depends on type property
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ])
};

Form.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'form'
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

FormFeedback.propTypes = {
  children: PropTypes.node,
  // Pass in a Component to override default element
  tag: PropTypes.string, // default: 'div'
  className: PropTypes.string,
  cssModule: PropTypes.object,
  valid: PropTypes.bool, // default: undefined
  tooltip: PropTypes.bool
};

FormGroup.propTypes = {
  children: PropTypes.node,
  // Applied the row class when true, does nothing when false
  row: PropTypes.bool,
  // Applied the form-check class when true, form-group when false
  check: PropTypes.bool,
  inline: PropTypes.bool,
  // Applied the disabled class when the check and disabled props are true, does nothing when false
  disabled: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.string, // default: 'div'
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

FormText.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'small'
  color: PropTypes.string, // default: 'muted'
  className: PropTypes.string,
  cssModule: PropTypes.object,
};`}
          </PrismCode>
        </pre>

        <SectionTitle>Form Grid</SectionTitle>
        <div className="docs-example">
          <FormGridExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormGridExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Form Grid with Form Row</SectionTitle>
        <div className="docs-example">
          <FormGridFormRowExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormGridFormRowExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Inline Form</SectionTitle>
        <div className="docs-example">
          <FormInlineExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormInlineExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Form Validation</SectionTitle>
        <div className="docs-example">
          <FormFeedbackExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {FormFeedbackExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Input Types</SectionTitle>
        <div className="docs-example">
          <InputTypeExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputTypeExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Inline checkboxes</SectionTitle>
        <div className="docs-example">
          <InlineCheckboxesExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InlineCheckboxesExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Input Sizing</SectionTitle>
        <div className="docs-example">
          <InputSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputSizingExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Input Grid Sizing</SectionTitle>
        <div className="docs-example">
          <InputGridSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {InputGridSizingExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Hidden Labels</SectionTitle>
        <div className="docs-example">
          <LabelHiddenExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LabelHiddenExampleSource}
          </PrismCode>
        </pre>

        <SectionTitle>Custom Inputs</SectionTitle>
        <div className="docs-example">
          <CustomControlsExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CustomControlsExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
