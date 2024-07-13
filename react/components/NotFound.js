import { Button } from "reactstrap";
import HTTPStatus from "http-status";
import Link from "next/link";

const NotFound = ({ code }) => {
  const title =
    code === 404
      ? "This page could not be found"
      : HTTPStatus[code] || "An unexpected error has occurred";

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 w-100 text-center error-card">
      <div className="w-100">
        <h1
          className={`${
            code === 404 ? "text-warning" : "text-danger"
          } display-1 mb-0 font-weight-bolder`}
        >
          ERROR {code}
        </h1>
        <h6 className="mt-0 mb-2 text-body">Sorry! {title} </h6>
        <Link href="/" as={`${process.env.baseUrl}`}>
          <Button color="primary">Go back home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
