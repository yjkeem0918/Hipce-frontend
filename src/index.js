import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import "./Styles/common.scss";
import "./Styles/reset.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);


