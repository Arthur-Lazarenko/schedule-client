const initialState = {
  date: /* new Date().toLocaleDateString("en-US")*/ "03/15/2019",
  groupId: 0
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return { ...state, date: action.date };
    case "UPDATE_GROUP":
      return { ...state, groupId: action.groupId };
    default:
      return state;
  }
};
