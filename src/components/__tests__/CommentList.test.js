import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import CommentList from 'components/CommentList'

let wrapped
beforeEach(() => {
  const initialState = { comments: ['a', 'bee', 'c'] }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('creates one li per comment', () => {
  expect(wrapped.find('li').length).toEqual(3)
})

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('a')
  expect(wrapped.render().text()).toContain('bee')
  expect(wrapped.render().text()).toContain('c')
})