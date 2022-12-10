import React from "react"
import ReactDOM from "react-dom/client";
import { App } from "./App"
import './global/styles.css'
import { AuthProvider } from "./shared/contexts/Auth/AuthProvider";
import { ChangeProvider } from "./shared/contexts/Change/ChangeProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ChangeProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
    </ChangeProvider>
  </React.StrictMode>
);
