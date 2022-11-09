//import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from "../src/App/routes";
import { AuthGoogleProvider } from "./App/contexts/authGoogle";


export const App = () => {
  return (
    <div className="ef-glow">
      <Routes />
    </div>
  );
}

