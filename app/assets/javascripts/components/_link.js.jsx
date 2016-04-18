var Link = React.createClass({
  getInitialState() {
    return { editable: false, read_status: this.props.link.read_status }
  },

  onUpdateReadStatus(action) {
    let link = {id: this.props.link.id, read_status: 'true' }
    this.state.read_status = 'true'
    this.props.handleReadUpdate(link);
  },

  render() {
    var title       = this.props.link.title;
    var url         = this.props.link.url;
    var read_status = this.props.link.read_status;

    return (
      <div className={this.state.read_status} >
        <table className="table">
          <tbody>
            <tr>
              <td>{title}</td>
              <td>{url}</td>
              <td>{read_status}</td>
              <td><button type="button" onClick={this.onUpdateReadStatus.bind(this, 'read')}>
                  Mark As Read</button></td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
});
