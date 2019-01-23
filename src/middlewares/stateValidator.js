import tv4 from 'tv4'

import stateSchema from './stateSchemas'
export default ({ dispatch, getState }) => (next) => (action) => {
  next(action)

  if (tv4.validate(getState(), stateSchema)) {

  } else {
    console.warn('bad datums')
  }
}