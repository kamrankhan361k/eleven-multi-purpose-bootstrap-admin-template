import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

import Link from "next/link";

const Signup = () => (
  <div className="d-flex flex-column justify-content-center align-items-center px-3 bg-white min-vh-100">
    <div className="w-100 auth-card">
      <Card className="shadow-none">
        <CardBody>
          <div className="text-center mb-5">
            <svg width={24} height={24} className="d-block m-auto">
              <use xlinkHref="#logo-icon"></use>
            </svg>
            <h4 className="mb-0 mt-3">Sign up</h4>
            <p className="text-muted">to continue using your account</p>
          </div>

          <Form>
            <FormGroup className="mb-4">
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Full name"
              />
            </FormGroup>

            <FormGroup className="mb-4">
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
            </FormGroup>

            <FormGroup className="mb-4">
              <Label for="password" className="d-flex">
                Password
              </Label>

              <Input placeholder="Password" id="password" />
            </FormGroup>

            <Button className="mb-3" color="primary" block size="lg">
              Sign up
            </Button>

            <div className="text-center">
              <small className="text-muted text-center">
                <span>Already have an account?</span>{" "}
                <Link href="/signin" as={`${process.env.baseUrl}signin`}>
                  <a>Login Now!</a>
                </Link>
              </small>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  </div>
);

export default Signup;
