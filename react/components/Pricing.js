import { Card, CardBody, Col, CustomInput, Row } from "reactstrap";

import PricingTable from "./core/Pricing";
import fetch from "../lib/fetch";
import useSWR from "swr";

const Pricing = () => {
  const { data, error } = useSWR(`${process.env.baseUrl}api/pricing`, fetch);
  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} className="m-auto">
        <div className="text-center my-5">
          <h1 className="font-weight-bold">Simple, predictable pricing.</h1>
          <h6>
            Get started with the free tier and upgrade anytime, commitment free.
          </h6>
          <div className="d-flex align-items-center justify-content-center">
            Monthly&nbsp;
            <CustomInput
              type="switch"
              id="exampleCustomSwitch"
              name="customSwitch"
              label="&nbsp;Yearly Save 10%"
            />
          </div>
        </div>

        <Card>
          <CardBody>
            <div className="d-md-flex flex-md-nowrap">
              {data.map((item, index) => (
                <div
                  className={`d-flex flex-column align-items-stretch text-center px-3 py-5 ${
                    data.length - 1 !== index ? "border-right border-light" : ""
                  }`}
                  key={index}
                >
                  <PricingTable
                    title={item.title}
                    subtitle={item.subtitle}
                    price={item.price}
                    features={item.features}
                    icon={item.icon}
                  />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Pricing;
