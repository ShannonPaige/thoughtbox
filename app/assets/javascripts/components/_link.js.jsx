var Link = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  render() {
    var title       = this.props.link.title;
    var url         = this.props.link.url;
    var read_status = this.props.link.read_status;

    return (
      <div>
        {title}
        {url}
        {read_status}
      </div>
    )
  }
});
