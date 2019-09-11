const React = require('react');

class UploadForm extends React.Component {
  onChangeHandler(event) {
    console.log(event.target.files.length)
  }
  
  render() {
    return (<div>
      <h1>Pick Multiple Photos</h1>
      <input type='file' name='file' multiple onChange={this.onChangeHandler} />
    </div>);
  };
}

module.exports = UploadForm;