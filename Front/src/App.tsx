//import { BrowserRouter, Route } from 'react-router-dom';
import { FormProvider } from './contexts/formContext/index';
import { Routes } from "./routes";


export const App = () => {
  return (
    <div className="ef-glow">
      <FormProvider>
      <Routes />
      </FormProvider>
    </div>
  );
}

