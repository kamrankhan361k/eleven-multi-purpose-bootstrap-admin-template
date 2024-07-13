import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Row,
  TabContent,
  TabPane
} from "reactstrap";

import ActivityStream from "./core/ActivityStream";
import Avatar from "./core/Avatar";
import Divider from "./core/Divider";
import fetch from "../lib/fetch";
import useSWR from "swr";
import { useState } from "react";

const Social = () => {
  const { data, error } = useSWR(`${process.env.baseUrl}api/social`, fetch);
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Row>
        <Col sm="12">
          <Card className="mb-3">
            <CardBody
              className="p-0 border-0 bg-dark rounded-top"
              style={{
                backgroundImage: `url(${process.env.baseUrl}images/unsplash/4.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%"
              }}
            >
              <div className="d-flex justify-content-between align-items-center p-3">
                <div className="d-flex align-items-center">
                  <a href="#" className="widget-icon-xlg">
                    <Avatar
                      size={64}
                      src={`${process.env.baseUrl}images/avatar.jpg`}
                      alt={`avatar`}
                    />
                  </a>
                  <div className="d-inline-block px-3">
                    <h5 className="my-0 text-light">
                      <span className="fw-400">Gerald</span>
                      <b> Morris</b>
                    </h5>
                    <small className="text-light m-r">UX Developer</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button color="light" style={{ borderRadius: "20px" }}>
                    Share
                  </Button>
                  <span className="px-1" />
                  <Button color="secondary" style={{ borderRadius: "20px" }}>
                    Follow
                  </Button>
                </div>
              </div>
            </CardBody>
            <div className="p-2">
              <Nav>
                <NavItem>
                  <NavLink
                    className={`${activeTab === "1" ? "text-primary" : ""}`}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Activity
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`${activeTab === "2" ? "text-primary" : ""}`}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    About me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`${activeTab === "3" ? "text-primary" : ""}`}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Friends
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`${activeTab === "4" ? "text-primary" : ""}`}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    Account & Profile
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg="8">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Card>
                <CardBody>
                  <ActivityStream
                    title="Period ending 2017"
                    stream={data.activity}
                  />
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="2">
              <Card>
                <Divider text="About me" />
                <CardBody>
                  <div className="d-flex mb-2 justify-content-around">
                    <div className="w-50">
                      <small className="d-block text-muted">Mobile</small>
                      <span>+20 0593 4095</span>
                    </div>
                    <div className="w-50">
                      <small className="d-block text-muted">Extension</small>
                      <span>94</span>
                    </div>
                  </div>

                  <div className="d-flex mb-2 justify-content-around">
                    <div className="w-50">
                      <small className="d-block text-muted">Birthday</small>
                      <span>30.09.67</span>
                    </div>
                    <div className="w-50">
                      <small className="d-block text-muted">Country</small>
                      <span>South Africa</span>
                    </div>
                  </div>

                  <div className="d-flex mb-2 justify-content-around">
                    <div className="w-50">
                      <small className="d-block text-muted">Occupation</small>
                      <span>Assistant</span>
                    </div>
                    <div className="w-50">
                      <small className="d-block text-muted">Mobile</small>
                      <span>+23908924</span>
                    </div>
                  </div>

                  <div className="d-flex mb-2 justify-content-around">
                    <div className="w-50">
                      <small className="d-block text-muted">Twitter</small>
                      <span>@mrperkins</span>
                    </div>
                    <div className="w-50">
                      <small className="d-block text-muted">Facebook</small>
                      <span>mrperkins</span>
                    </div>
                  </div>
                </CardBody>
                <Divider text="Quick Bio" />
                <CardBody>
                  <p>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Fusce dapibus, tellus ac
                    cursus commodo, tortor mauris condimentum nibh, ut fermentum
                    massa justo sit amet risus. Donec id elit non mi porta
                    gravida at eget metus. Duis mollis, est non commodo luctus,
                    nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                  </p>
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="3">
              <Card>
                <CardBody>
                  <Row>
                    {data.contacts.map((contact, index) => (
                      <Col xs={6} key={index}>
                        <NavLink className="w-100 d-flex flex-row align-items-center">
                          <Avatar
                            size={48}
                            src={contact.avatar ? contact.avatar : ""}
                            alt={contact.name}
                            status={
                              [
                                "danger",
                                "success",
                                "info",
                                "warning",
                                "secondary"
                              ][Math.floor(Math.random() * 5)]
                            }
                          />
                          <span className="ml-3">
                            <span className="d-block">{contact.name}</span>
                            <small className="text-muted">
                              <span>{contact.status}</span>
                            </small>
                          </span>
                        </NavLink>
                      </Col>
                    ))}
                  </Row>
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="4">
              <Card>
                <Form>
                  <Divider text="Basic information" />
                  <CardBody>
                    <FormGroup row>
                      <Label for="fname" sm={3} className="text-right">
                        First name
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="fname"
                          id="fname"
                          placeholder="First name"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="lname" sm={3} className="text-right">
                        Last name
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="lname"
                          id="lname"
                          placeholder="Last name"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="email" sm={3} className="text-right">
                        Email
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="phone" sm={3} className="text-right">
                        Phone number
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="Phone"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="company" sm={3} className="text-right">
                        Company name
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="company"
                          id="company"
                          placeholder="Company"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="company_site" sm={3} className="text-right">
                        Company website
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="compant_site"
                          id="company_site"
                          placeholder="Company website"
                        />
                      </Col>
                    </FormGroup>
                  </CardBody>
                  <Divider text="Contact information" />
                  <CardBody>
                    <FormGroup row>
                      <Label for="address-line-1" sm={3} className="text-right">
                        Address line
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="address-line-1"
                          id="address-line-1"
                          placeholder="Address line 1"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="address-line-2" sm={3} className="text-right">
                        Address line
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="address-line-2"
                          id="address-line-2"
                          placeholder="Address line 2"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="city" sm={3} className="text-right">
                        City
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="City"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="city" sm={3} className="text-right">
                        State
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="state"
                          id="state"
                          placeholder="State"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="postcode" sm={3} className="text-right">
                        Postcode
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="postcode"
                          id="postcode"
                          placeholder="Postcode"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="country" sm={3} className="text-right">
                        Country
                      </Label>
                      <Col sm={7}>
                        <Input
                          type="text"
                          name="country"
                          id="country"
                          placeholder="Country"
                        />
                      </Col>
                    </FormGroup>
                  </CardBody>

                  <div className="pt-1 pb-3">
                    <FormGroup check row>
                      <Col sm={{ size: 9, offset: 3 }}>
                        <Button color="primary">Submit</Button>
                        <span className="px-1" />
                        <Button>Cancel</Button>
                      </Col>
                    </FormGroup>
                  </div>
                </Form>
              </Card>
            </TabPane>
          </TabContent>
        </Col>
        <Col lg="4">
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="w-50">
                  <h4 className="m-0">
                    <span className="fw-400">Gerald</span> <b>Morris</b>
                  </h4>
                  <small>gerald@morris.com</small>
                  <p className="my-2">UX Developer</p>
                  <a href="#" className="mt-0 d-block">
                    email@contact.com
                  </a>
                  <a href="#" className="mt-1 d-block">
                    www.example.com
                  </a>
                  <a href="#" className="mt-1 d-block">
                    +1234567890
                  </a>
                </div>
                <div className="w-50">
                  <div className="text-center d-flex justify-content-center">
                    <Avatar
                      size={128}
                      src={`${process.env.baseUrl}images/avatar.jpg`}
                      alt={`avatar`}
                    />
                  </div>
                  <div className="m-1 text-center">
                    <p className="mb-1">Account Storage</p>
                    <Progress multi>
                      <Progress bar color="info" value="60">
                        Documents
                      </Progress>
                      <Progress bar color="secondary" value="40">
                        Unused
                      </Progress>
                    </Progress>
                  </div>
                </div>
              </div>
            </CardBody>
            <Divider text="Stats" />
            <CardBody>
              <Row className="text-center">
                <Col>
                  <h2 className="m-0">
                    <b>23,8K</b>
                  </h2>
                  <small>Followers</small>
                </Col>
                <Col>
                  <h2 className="m-0">
                    <b>569</b>
                  </h2>
                  <small>Following</small>
                </Col>
                <Col>
                  <h2 className="m-0">
                    <b>67</b>
                  </h2>
                  <small>Posts</small>
                </Col>
              </Row>
            </CardBody>
            <Divider text="About me" />
            <CardBody>
              <p>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
                Curabitur blandit tempus porttitor. Vestibulum id ligula porta
                felis euismod semper.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Social;
