import React from 'react'
import { connect } from 'react-redux'
import requireAuth from 'components/requireAuth'
import * as actions from 'actions'

class CommentBox extends React.Component {
  state = { comment: '' }

  handleChange = ({ target }) => this.setState({ comment: target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a commy</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>ad meh</button>
        </div>
      </form>
      <button className="fetchster" onClick={this.props.fetchComments}>fetch commies</button>
      </div>
    )
  }
}


export default connect(null, actions)(requireAuth(CommentBox))