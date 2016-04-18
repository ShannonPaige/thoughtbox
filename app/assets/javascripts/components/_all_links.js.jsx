var AllLinks = React.createClass({
  handleEdit() {
    console.log('you are in edit!');
  },

  onUpdate(link) {
    this.props.handleUpdate(link);
  },

  render() {
    var links = this.props.links.map((link) => {
      return (
        <div key={link.id}>
          <Link link={link}
                 handleUpdate={this.onUpdate}/>
        </div>
      )
    });

    return (
      <div>
        {links}
      </div>
    )
  }
});
