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

const Forgot = () => (
  <div className="d-flex flex-column justify-content-center align-items-center px-3 bg-white min-vh-100">
    <div className="w-100 auth-card">
      <Card className="shadow-none">
        <CardBody>
          <div className="text-center mb-5">
            <svg width={24} height={24} className="d-block m-auto">
              <use xlinkHref="#logo-icon"></use>
            </svg>
            <h4 className="mb-0 mt-3">Recover your password</h4>
            <p className="text-muted">
              Enter your email and we'll send you instructions on how to reset
              your password.
            </p>
          </div>

          <Form>
            <FormGroup className="mb-4">
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
            </FormGroup>

            <Button className="mb-3" color="primary" block size="lg">
              Reset password
            </Button>

            <div className="text-center">
              <small className="text-muted text-center">
                <span>Don't have an account yet?</span>{" "}
                <Link href="/signup" as={`${process.env.baseUrl}signup`}>
                  <a>Create one now!</a>
                </Link>
              </small>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  </div>
);

export default Forgot;
