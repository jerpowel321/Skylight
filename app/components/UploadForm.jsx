const React = require('react');

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler(event) {
    const { handleUpload } = this.props;
    let i = 0;
    while (i < event.target.files.length) {    
      handleUpload(event.target.files[i]);
      i ++; 
    }
  }
  
  render() {
    return (<div className="pb-5">
      <h1 style={{fontFamily: "'Lora', serif"}} className="text-center pt-5 pb-2">Let's Pick Some Photos!</h1>
      <p style={{fontFamily: "'Lora', serif", fontSize: "18px"}}>Click on "Choose Files" and then use "Command" on a Mac or CTRL on Windows to select multiple files.</p>
      <input type='file' name='file' multiple onChange={this.onChangeHandler} />
    </div>
    )
  };
}

module.exports = UploadForm;