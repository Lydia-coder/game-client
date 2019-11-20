export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case "ROOMS":
      return action.payload;
    case "ROOM":
      return [action.payload];
    default:
      return state;
  }
}
