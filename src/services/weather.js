import axios from './api';

const apiToken = '99e42f1529cba027d98dc1afb0a1089d';

export default {
  getWeather: city =>
    axios.get(`weather?q=${city}&appId=${apiToken}&units=metric`)
};
