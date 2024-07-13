import NavbarExample from "../examples/Navbar";
import NavbarTogglerExample from "../examples/NavbarToggler";
import SectionTitle from "../UI/SectionTitle";

export default class NavsPage extends React.Component {
  render() {
    return (
      <div>
        <div className="docs-example">
          <NavbarExample />
        </div>

        <SectionTitle>NavbarToggler</SectionTitle>
        <p>
          Place the <code>NavbarToggler</code> <b>after</b>{" "}
          <code>NavbarBrand</code> to have it appear on the right (typical
          setup). Reverse the order to have it appear on the left
        </p>
        <div className="docs-example">
          <NavbarTogglerExample />
        </div>
      </div>
    );
  }
}
