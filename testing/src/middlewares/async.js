export default ({ dispatch }) => (next) => (action) => {
  // Check to see if the action
  // has a promise its 'payload' property
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // If it does, then wait for it to resolve
  // We want to wait for the promise to resolve with that data and dispatch it
  action.payload.then(function (response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
