import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="h-screen bg-lime-100 px-4 tracking-widest flex justify-center items-center text-3xl text-lime-900 font-semibold flex-col"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="text-blue-900 text-xl font-semibold underline font-italic"
      >
        Go back to homepage
      </Link>
    </div>
  );
}
