import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions of SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'a commie'
  }

  const newState = commentsReducer([], action)
  
  expect(newState).toEqual(['a commie'])
})

it('hanldes actions with unknown type', () => {
  const newState = commentsReducer([], {})

  expect(newState).toEqual([])
})