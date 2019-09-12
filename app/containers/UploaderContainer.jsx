const React = require('react');

const UploadForm = require('../components/UploadForm.jsx');
const UploadProgress = require('../components/UploadProgress.jsx');

const UPLOAD_BUCKET = 'https://skylight-react-interview-project.s3.amazonaws.com'

class UploaderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { uploading: false }
    this.handleUpload = this.handleUpload.bind(this)
  }
  
  handleUpload(file) {
    let xhr = new XMLHttpRequest()
    let uploadUrl = `${ UPLOAD_BUCKET }/${ file.name }`
    xhr.open('PUT', uploadUrl)
    xhr.overrideMimeType(file.type);
    xhr.send(file);
  }
  
  render() {
    const { uploading } = this.state
    if (uploading) {
      return <UploadProgress />;
    } else {
      return <UploadForm handleUpload={this.handleUpload} />;
    }
  }
}

module.exports = UploaderContainer;