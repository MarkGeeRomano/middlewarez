import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import moxios from 'moxios'
import App from 'components/App'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'a' }, { name: 'b' }, { name: 'c' }]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  wrapped.find('.fetchster').simulate('click')

  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(3)
    done()

    wrapped.unmount()
  })
})