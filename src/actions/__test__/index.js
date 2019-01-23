import { saveComment } from 'actions'
import { SAVE_COMMENT} from 'actions/types'

describe('save comment', () => {
  it('has correct type', () => {
    const action = saveComment()

    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has correct payload', () => {
    const action = saveComment('commie')

    expect(action.payload).toEqual('commie')
  })
})

