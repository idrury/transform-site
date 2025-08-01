import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import {
  AlertType,
  PopAlertFn,
  SharedContextProps,
} from "./data/CommonTypes";
import Alert from "./presentation/elements/Alert";
import { useEffect, useState } from "react";
import { supabase } from "./database/SupabaseClient";
import { Session } from "@supabase/supabase-js";
import { NavBar } from "./presentation/elements/NavBar";
import { HeaderBar } from "./presentation/HeaderBar";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function HydrateFallback() {
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="col middle center"
    >
      Loading...
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [alert, setAlert] = useState<AlertType>({ active: false });
  const [session, setSession] = useState<Session | null>();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (_event == "SIGNED_IN" || _event == "TOKEN_REFRESHED") {
        //Perform sign in actions here
      }
      setSession(session);
    });
  }, []);

  /** Activate the saved popup box */
  const popAlert: PopAlertFn = (header, body, isError = false) => {
    setAlert({
      active: true,
      header: header,
      body: body,
      state: isError ? "fail" : "success",
    });
  };

  return (
    <>
    <HeaderBar/>
      <Outlet
        context={
          {
            popAlert: popAlert,
            session,
            navigate,
          } as SharedContextProps
        }
      />

      <Alert
        header={alert.header}
        body={alert.body}
        active={alert.active}
        onClose={() => setAlert({ active: false })}
        state={alert.state}
      />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
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
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
