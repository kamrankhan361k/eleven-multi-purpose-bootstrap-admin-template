import { Button, Card, Col, Row } from "reactstrap";

import fetch from "../lib/fetch";
import { formatPrice } from "../lib/helpers";
import invoice from "../pages/api/invoice";
import useSWR from "swr";

const Invoice = () => {
  const { data, error } = useSWR(`${process.env.baseUrl}api/invoice`, fetch);
  const tax = 15;
  const getSubTotal = () =>
    data
      ? data.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
      : 0;

  const getCalculatedTax = () => (tax * getSubTotal()) / 100;

  const getTotal = () => getSubTotal() + getCalculatedTax();

  if (error) return <div>Failed to load media data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} className="m-auto">
        <div className="text-monospace">
          <Card>
            <div className="bg-dark text-light rounded-top p-5">
              <div className="p-5">
                <h1 className="font-weight-bold">{data.receiver.company}</h1>
                <div className="d-md-flex">
                  <div className="mr-auto">
                    <ul className="list-unstyled">
                      <li>{data.receiver.name}</li>
                      <li>{data.receiver.email}</li>
                    </ul>
                    <ul className="list-unstyled">
                      <li>
                        {data.receiver.location.street.number}{" "}
                        {data.receiver.location.street.name}
                      </li>
                      <li>{data.receiver.location.city}</li>
                      <li>{data.receiver.location.state}</li>
                      <li>{data.receiver.location.country}</li>
                      <li>{data.receiver.location.postcode}</li>
                    </ul>
                    <ul className="list-unstyled">
                      <li>Invoice #{data.id}</li>
                      <li>{data.createdAt}</li>
                    </ul>
                  </div>
                  <div className="text-right">
                    <ul className="list-unstyled">
                      <li>{data.sender.company}</li>
                      <li>{data.sender.name}</li>
                      <li>{data.sender.email}</li>
                    </ul>
                    <ul className="list-unstyled">
                      <li>
                        {data.sender.location.street.number}{" "}
                        {data.sender.location.street.name}
                      </li>
                      <li>{data.sender.location.city}</li>
                      <li>{data.sender.location.state}</li>
                      <li>{data.sender.location.country}</li>
                      <li>{data.sender.location.postcode}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-bottom p-5">
              <div className="p-5">
                <div className="d-flex py-2 text-muted  border-bottom border-top align-items-center border-light">
                  <div className="mr-auto">
                    <small>Description</small>
                  </div>
                  <div className="text-right">
                    <small>Amount</small>
                  </div>
                </div>

                {data.items.map((item, index) => (
                  <div
                    className="d-flex py-4 border-bottom align-items-center border-light"
                    key={index}
                  >
                    <div className="mr-auto">
                      <span>{item.title}</span>
                      <small className="d-block text-muted">
                        {item.subtitle}
                        {item.quantity && (
                          <span>
                            &nbsp;*&nbsp;
                            {item.quantity}
                          </span>
                        )}
                      </small>
                    </div>
                    <div className="text-right">
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                ))}

                <div className="d-flex">
                  <div
                    className="d-block ml-auto w-100"
                    style={{ maxWidth: "400px" }}
                  >
                    <div className="d-flex py-4 border-bottom border-top align-items-center border-light">
                      <small className="mr-auto text-muted">Subtotal</small>
                      <span className="text-right">
                        {formatPrice(getSubTotal())}
                      </span>
                    </div>
                    <div className="d-flex py-4 border-bottom border-top align-items-center border-light">
                      <small className="mr-auto text-muted">Tax</small>
                      <span>
                        <small className="text-muted">@ {tax}% - </small>
                        <span>{formatPrice(getCalculatedTax())}</span>
                      </span>
                    </div>
                    <div className="d-flex py-4 border-bottom border-top align-items-center border-light">
                      <small className="mr-auto text-muted">Discount</small>
                      <span>
                        <small className="text-muted">0% off - </small>
                        <span>{formatPrice(0)}</span>
                      </span>
                    </div>
                    <div className="d-flex py-4 border-bottom border-top align-items-center border-primary">
                      <small className="mr-auto text-muted">Total</small>
                      <strong>{formatPrice(getTotal())}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="my-5 text-center">
            <Button color="primary" className="py-2 px-4 mx-2">
              Pay Now
            </Button>
            <Button color="danger" className="py-2 px-4 mx-2">
              Cancel
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Invoice;
