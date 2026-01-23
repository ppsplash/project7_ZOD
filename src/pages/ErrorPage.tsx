import { isRouteErrorResponse, useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <h1>
        {error.status}
        {error.statusText}
      </h1>
    );
  }
}

export default ErrorPage;
