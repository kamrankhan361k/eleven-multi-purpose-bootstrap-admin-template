import { Button, Form, FormGroup, Input } from "reactstrap";

import Link from "next/link";

const Lockscreen = () => (
  <div className="d-flex flex-column justify-content-center align-items-center px-3 min-vh-100">
    <div className="w-100 auth-card">
      <div className="text-center">
        <img
          alt="John Doe"
          src={`${process.env.baseUrl}images/face1.jpg`}
          width="100"
          height="100"
          className="shadow rounded-circle"
        ></img>
        <p className="text-muted my-3">John Doe</p>
      </div>

      <Form>
        <FormGroup className="mb-4">
          <Input placeholder="Password" id="password" />
        </FormGroup>

        <Button className="mb-3" color="primary" block size="lg">
          Unlock
        </Button>

        <div className="text-center">
          <small className="text-muted text-center">
            <span>Not your account?</span>{" "}
            <Link href="/signin" as={`${process.env.baseUrl}signin`}>
              <a>Signin here!</a>
            </Link>
          </small>
        </div>
      </Form>
    </div>
  </div>
);

export default Lockscreen;
