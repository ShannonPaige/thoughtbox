var Link = React.createClass({
  getInitialState() {
    return { editable: false, read_status: this.props.link.read_status }
  },

  onUpdateReadStatus(action) {
    let link = {}
    if (this.state.read_status === 'false'){
      link = {id: this.props.link.id, read_status: 'true' }
      this.state.read_status = 'true'
    } else {
      link = {id: this.props.link.id, read_status: 'false' }
      this.state.read_status = 'false'
    }
    this.props.handleReadUpdate(link);
  },

  onUpdateLink(action) {
    if (this.state.editable) {
      let link   = { id: this.props.link.id,
                    title: this.refs.title.value,
                    url: this.refs.url.value }

      this.props.handleLinkUpdate(link);
    }

    this.setState({ editable: !this.state.editable })
  },

  render() {
    var title = this.state.editable ? <input type='text'
                                             ref='title'
                                             defaultValue={this.props.link.title} />
                                   : this.props.link.title

    var url = this.state.editable ? <textarea type='text'
                                              ref='url'
                                              defaultValue={this.props.link.url}>
                                        </textarea>
                                  : this.props.link.url

    var read_status = this.props.link.read_status;
    var edit_button_message = this.state.editable ? 'Submit' : 'Edit'
    var read_button_message = ''
    if (read_status === 'true'){
      read_button_message = 'Mark as unread'
    }else{
      read_button_message = 'Mark as read'
    }

    return (
      <div className={this.state.read_status} >
        <table className="table">
          <tbody>
            <tr>
            <td><button type="button" onClick={this.onUpdateLink}>
                {edit_button_message}</button></td>
              <td>{title}</td>
              <td>{url}</td>
              <td>{read_status}</td>
              <td><button type="button" onClick={this.onUpdateReadStatus}>
                  {read_button_message}</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});
