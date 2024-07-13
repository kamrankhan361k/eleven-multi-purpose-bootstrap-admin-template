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

const Signin = () => {
  const hours = new Date().getHours();

  const Greeting = () => {
    let text;
    if (hours < 12) text = "Good Morning";
    else if (hours >= 12 && hours <= 17) text = "Good Afternoon";
    else if (hours >= 17 && hours <= 24) text = "Good Evening";
    return text;
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center px-3 bg-white min-vh-100">
      <div className="w-100 auth-card">
        <Card className="shadow-none">
          <CardBody>
            <div className="text-center mb-5">
              <svg width={24} height={24} className="d-block m-auto">
                <use xlinkHref="#logo-icon"></use>
              </svg>
              <h4 className="mb-0 mt-3">{Greeting()}, please log in</h4>
              <p className="text-muted">to continue using your account</p>
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

              <FormGroup className="mb-4">
                <Label for="password" className="d-flex">
                  <span className="mr-auto">Password</span>
                  <Link href="/forgot" as={`${process.env.baseUrl}forgot`}>
                    <a className="form-text small text-muted">
                      Forgot password?
                    </a>
                  </Link>
                </Label>

                <Input placeholder="Password" id="password" />
              </FormGroup>

              <Button className="mb-3" color="primary" block size="lg">
                Sign in
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
};

export default Signin;
