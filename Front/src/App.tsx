//import { BrowserRouter, Route } from 'react-router-dom';
import { FormProvider } from './App/contexts/A_formContext/index';
import { Routes } from "../src/App/routes";


export const App = () => {
  return (
    <div className="ef-glow">
      <FormProvider>
      <Routes />
      </FormProvider>
    </div>
  );
}

