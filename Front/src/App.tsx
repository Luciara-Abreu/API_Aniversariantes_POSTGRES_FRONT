//import { BrowserRouter, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import { Routes } from "./routes";


export const App = () => {
  return (
    <div className="ef-glow">
      <AuthProvider>
      <Routes />
      </AuthProvider>
    </div>
  );
}

