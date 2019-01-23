import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'
import Root from 'Root'

let wrapped
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach(() => wrapped.unmount())

it('has a text area and 2 buttsters', () => {
  expect(wrapped.find('button').length).toEqual(2)
  expect(wrapped.find('textarea').length).toEqual(1)
})

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', { target: { value: 'hehe' } })
    wrapped.update()
  })

  it('has a textarea ppl can writ in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('hehe')
  })

  it('dumps text when submitted', () => {
    wrapped.find('button').at(0).simulate('submit')
    wrapped.update()

    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})