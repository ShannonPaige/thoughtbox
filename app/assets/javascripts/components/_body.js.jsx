var Body = React.createClass({
  getInitialState() {
    return { links: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/links.json', (response) => { this.setState({ links: response }) });
  },

  handleSubmit(link) {
    var newState = this.state.links.concat(link);
    console.log(newState)
    this.setState({ links: newState })
  },

  render() {
    return (
      <div>
        <NewLink handleSubmit={this.handleSubmit} />
        <h2>All Links</h2>
        <AllLinks links={this.state.links} />
      </div>
    )
  }
});
