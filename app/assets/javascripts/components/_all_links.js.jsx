var AllLinks = React.createClass({
  onUpdate(link) {
    this.props.handleReadUpdate(link);
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
        {links}
      </div>
    )
  }
});
