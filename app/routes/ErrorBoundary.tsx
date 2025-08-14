import { isRouteErrorResponse, useNavigate } from "react-router";
import { Route } from "../+types/root";
import { Icon } from "~/presentation/elements/Icon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "" }, { name: "description", content: "" }];
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const navigate = useNavigate();
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="vh100 middle center col">
      <h1 className="mb2" style={{ color: "var(--primaryColor)" }}>
        {message}
      </h1>
      <div className="row middle center">
        <Icon
          name="information-circle"
          className="mr1"
          color="var(--primaryColor)"
          size={15}
        />
        <p>{details}</p>
      </div>
      <button
        className="mt3 accentButton row middle center"
        onClick={() => navigate("/")}
      >
        <Icon
          name="home"
          size={12}
          color="var(--text)"
          className="mr1"
        />
        Home
      </button>

      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
