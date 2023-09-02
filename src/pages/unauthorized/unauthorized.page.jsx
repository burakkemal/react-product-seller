import { Link } from "react-router-dom";

const UnAuthorizedPage = () => {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center row">
        <div class=" col-md-6">
          <img
            src="https://zuziko.com/wp-content/uploads/Fix-WordPress-401-Error.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class=" col-md-6 mt-5">
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <Link to="/home" class="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export { UnAuthorizedPage };
