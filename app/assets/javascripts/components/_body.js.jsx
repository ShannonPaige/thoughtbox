var Body = React.createClass({
  getInitialState() {
    return { links: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/links.json', (response) => { this.setState({ links: response }) });
  },

  handleSubmit(link) {
    var newState = this.state.links.concat(link);
    this.setState({ links: newState })
  },

  handleReadUpdate(link) {
    $.ajax({
      url: `/api/v1/links/${link.id}`,
      type: 'PUT',
      data: { link: link },
      success: (link) => {
        this.updateLinks(link)
      }
    });
  },

  handleSort(order_type) {
    $.ajax({
      url: `/api/v1/links`,
      type: 'GET',
      data: { order_type: order_type },
      success: (links) => {
        this.setState({links: links})
      }
    });
  },

  handleFilter(){
    console.log('filter')
  },

  updateLinks(link) {
    var links = this.state.links.filter((s) => { return s.id != link.id });
    links.push(link);
    this.setState({ links: links });
  },

  render() {
    return (
      <div>
        <h2>Add new link</h2>
        <NewLink handleSubmit={this.handleSubmit} />
        <h2>All Links</h2>
        <AllLinks links={this.state.links}
                  handleReadUpdate={this.handleReadUpdate}
                  sortStatus={this.handleSort}
                  filterLinks={this.handleFilter}/>
      </div>
    )
  }
});
