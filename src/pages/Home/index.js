import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';
import weatherService from '../../services/weather';
import { Actions as WeatherActions } from '../../store/ducks/weather';

import WeatherInfo from '../../components/WeatherInfo';
import Button from '../../components/Button';

class Home extends Component {
  state = {
    cities: ['Campinas', 'São Carlos', 'São Paulo']
  };

  getCity = async city => {
    const { getRequest, getSuccess } = this.props;
    try {
      getRequest(city);
      const response = await weatherService.getWeather(city);
      getSuccess({ ...response.data, name: city });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { cities } = this.state;
    const { data, loading } = this.props;
    return (
      <div>
        <div>
          <div className="btn-container">
            {cities.map(city => (
              <Button key={city} onClick={() => this.getCity(city)}>
                {city}
              </Button>
            ))}
          </div>
          {loading ? (
            <div>Carregando...</div>
          ) : data ? (
            <WeatherInfo data={data} />
          ) : (
            <div>Selecione uma cidade</div>
          )}
          <div className="btn-container">
            <Link className="button" to="/min-max">
              Mostrar min/max
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.weather.cities.find(
      city => city.name === state.weather.selected
    ),
    selected: state.weather.selected,
    loading: state.weather.loading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(WeatherActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
