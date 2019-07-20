import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import '../css/main.css';

const Index = () => {
  return <Router />
};

render(<Index />, document.getElementById('app'));
