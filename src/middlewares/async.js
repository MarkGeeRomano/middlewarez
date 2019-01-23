export default ({ dispatch }) => (next) => async (action) => {
  if (!action.payload || !action.payload.then) {
    return next(action)
  } else {
    const payload = await action.payload
    dispatch({ ...action, payload })
  }
}