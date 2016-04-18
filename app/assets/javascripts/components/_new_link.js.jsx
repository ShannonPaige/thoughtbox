var NewLink = React.createClass({
  handleClick() {
    var title = this.refs.title.value;
    var url   = this.refs.url.value;

    $.ajax({
      url: '/api/v1/links',
      type: 'POST',
      data: { link: { title: title, url: url } },
      success: (link) => {
        this.props.handleSubmit(link);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='title' placeholder='Title' />
        <input ref='url' placeholder='URL' />
        <button onClick={this.handleClick}>Submit Link</button>
      </div>
    )
  }
});
