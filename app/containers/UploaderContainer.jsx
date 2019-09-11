const React = require('react');

const UploadForm = require('../components/UploadForm.jsx');
const UploadProgress = require('../components/UploadProgress.jsx');

class UploaderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uploading: false,
      allUploadsComplete: false,
      
      //// fileUploads should become an array of objects
      //// that look like this:
      // { progressPercent: 50, filename: 'dogs.png' }      
      fileUploads: []
      
    }
    this.startUpload = this.startUpload.bind(this)
  }
  
  startUpload(file) {
    console.log('starting!')
    console.log(file)
  }
  
  render() {
    const { uploading, allUploadsComplete, fileUploads } = this.state
    if (uploading) {
      return <UploadProgress
               complete={allUploadsComplete}
               uploads={fileUploads} />; 
    } else {
      return <UploadForm startUpload={this.startUpload} />;
    }
  }
}

module.exports = UploaderContainer;