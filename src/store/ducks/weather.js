export const Types = {
  GET_REQUEST: 'weather/GET_REQUEST',
  GET_SUCCESS: 'weather/GET_SUCCESS'
};

const INITIAL_STATE = {
  cities: [],
  selected: null,
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, selected: action.payload.city };
    case Types.GET_SUCCESS:
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
  getRequest: city => ({
    type: Types.GET_REQUEST,
    payload: { city }
  }),
  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};
