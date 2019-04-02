import React from 'react';

import './styles.css';

const WeatherInfo = ({ data }) => (
  <div className="container">
    <div className="current">
      <p>{data.name}</p>
      <p>{data.main.temp}°C</p>
    </div>
    <div className="min-max">
      <p>Mínima: {data.main.temp_min}°C</p>
      <p>Máxima: {data.main.temp_max}°C</p>
    </div>
  </div>
);

export default WeatherInfo;
