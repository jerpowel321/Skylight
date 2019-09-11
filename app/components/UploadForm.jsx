const React = require('react');

class UploadForm extends React.Component {
  onChangeHandler(event) {
    const { startUpload } = this.props
    event.target.files.forEach(startUpload)
  }
  
  render() {
    return (<div>
      <h1>Pick Multiple Photos</h1>
      <p>Click on "Choose Files" and then use "command" on a Mac or CTRL on Windows to select multiple files.</p>
      <input type='file' name='file' multiple onChange={this.onChangeHandler} />
    </div>);
  };
}

module.exports = UploadForm;