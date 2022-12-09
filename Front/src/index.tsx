import React from "react"
import ReactDOM from "react-dom/client";
import { App } from "./App"
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { ChangeProvider } from "./contexts/Change/ChangeProvider";
import './global/styles.css'

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
