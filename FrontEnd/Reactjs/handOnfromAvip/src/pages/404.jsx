import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col gap-3">
      <h1 className="font-bold text-3xl">Opps!</h1>
      <p className="text-xl">Sorry, Unexpected Error Has Occured</p>
      <p className="italic">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
