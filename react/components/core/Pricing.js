import AnimatedIcon from "./AnimatedIcon";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

const Pricing = ({ title, subtitle, price, features, icon }) => (
  <>
    <div className="d-flex align-items-center justify-content-center mb-5 text-primary price-icon">
      <AnimatedIcon animationData={icon} size={64} />
    </div>

    <div className="mb-5">
      <h5 className="mb-0">{title}</h5>
      <small className="mb-0 text-muted">{subtitle}</small>
    </div>

    <ul className="list-inline pricing mb-5">
      {features.map((feature, index) => (
        <li className="list-inline-item" key={index}>
          {feature.title}
        </li>
      ))}
    </ul>

    <p className="mb-5 text-muted">
      Perfect for small startups that have less than 10 team members
    </p>

    <div className="mt-auto">
      <p className="price text-monospace">
        <span className="symbol">$</span>
        <span>{price}</span>
      </p>

      <Button color="primary" className="px-4 py-2">
        Choose plan
      </Button>
    </div>
  </>
);

Pricing.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      available: PropTypes.bool
    })
  )
};

export default Pricing;
