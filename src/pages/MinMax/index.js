import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button';

const MinMax = ({ history: { goBack }, minMax }) => {
  return (
    <div>
      <div className="btn-container">
        <Button onClick={goBack}>Voltar</Button>
      </div>
      {minMax ? (
        <div>
          <p>Mínima: {`${minMax.min.city}: ${minMax.min.temp}°C`}</p>
          <p>Máxima: {`${minMax.max.city}: ${minMax.max.temp}°C`}</p>
        </div>
      ) : (
        <div>Não há cidades requisitadas</div>
      )}
    </div>
  );
};

const findMinAndMax = cities => {
  if (!cities.length) return null;

  let min = { temp: null, city: '' };
  let max = { temp: null, city: '' };
  cities.forEach(city => {
    if (!min.temp || city.main.temp_min < min.temp) {
      min = { temp: city.main.temp_min, city: city.name };
    }
    if (!max.temp || city.main.temp_max < max.temp) {
      max = { temp: city.main.temp_max, city: city.name };
    }
  });
  return { min, max };
};

const mapStateToProps = state => ({
  minMax: findMinAndMax(state.weather.cities)
});

export default connect(mapStateToProps)(MinMax);
