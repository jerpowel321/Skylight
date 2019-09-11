const React = require('react');

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler(event) {
    const { startUpload } = this.props;
    let i = 0;
    while (i < event.target.files.length) {    
      startUpload(event.target.files[i]);
      i ++; 
    }
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