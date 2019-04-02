import service from '../../services/weather';

export const Types = {
  START_REQUEST: 'weather/START_REQUEST',
  REQUEST_SUCCESS: 'weather/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'weather/REQUEST_FAILURE'
};

const INITIAL_STATE = {
  cities: [],
  selected: null,
  loading: false,
  error: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.START_REQUEST:
      return { ...state, loading: true, selected: action.payload.city };
    case Types.REQUEST_SUCCESS:
      return {
        ...state,
        cities: [
          ...state.cities.filter(
            city => city.name !== action.payload.data.name
          ),
          action.payload.data
        ],
        loading: false
      };
    default:
      return state;
  }
}

export const Actions = {
  startRequest: city => ({
    type: Types.START_REQUEST,
    payload: { city }
  }),
  requestSuccess: data => ({
    type: Types.REQUEST_SUCCESS,
    payload: { data }
  }),
  requestFailure: error => ({
    type: Types.REQUEST_FAILURE,
    payload: { error }
  })
};

export const Thunks = {
  getWeather: city => async dispatch => {
    dispatch(Actions.startRequest(city));
    try {
      const { data } = await service.getWeather(city);
      dispatch(Actions.requestSuccess(data));
    } catch (e) {
      dispatch(Actions.requestFailure('Erro ao recuperar dados'));
    }
  }
};
