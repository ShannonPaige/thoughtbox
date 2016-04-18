var AllLinks = React.createClass({
  getInitialState() {
    return { sort: 'nil' }
  },

  onUpdate(link) {
    this.props.handleReadUpdate(link);
  },

  handleSort(order_type) {
    this.state.sort = order_type;
    this.props.sortStatus(this.state.sort);
  },

  render() {
    var links = this.props.links.map((link) => {
      return (
        <div key={link.id}>
          <Link link={link}
                 handleReadUpdate={this.onUpdate}
                 handleLinkUpdate={this.onUpdate}/>
        </div>
      )
    });

    return (
      <div className="links">
      <table className="table">
        <tbody>
          <tr>
          <td></td>
            <td>Title <button type="button" onClick={this.handleSort.bind(this, 'alpha')}>
                (sort)</button></td>
            <td>URL</td>
            <td>Read? <button type="button" onClick={this.handleSort.bind(this, 'read_status')}>
                (sort)</button></td>
            <td></td>
          </tr>
        </tbody>
      </table>
        {links}
      </div>
    )
  }
});
