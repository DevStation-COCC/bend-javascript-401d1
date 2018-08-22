import './_dashboard-container.scss'

import React from 'react'
import NoteCreateForm from '../note-create-form'
import NoteList from '../note-list'

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="dashboard">
        <h1>Notes App Demo - Code Fellows: 401d18</h1>
        <NoteCreateForm app={this.props.app}/>
        <NoteList notes={this.props.app.state.notes} app={this.props.app}/>
      </section>
    )
  }
}

export default DashboardContainer