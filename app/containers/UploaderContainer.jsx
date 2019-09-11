const React = require('react');

const UploadForm = require('../components/UploadForm.jsx');
const UploadProgress = require('../components/UploadProgress.jsx');

class UploaderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uploading: false,
      allUploadsComplete: false,
      fileUploads: []
    }
  }
  
  getUploadUrl() {
    
  }
  
  uploadFileToUrl() {
    
  }

  render() {
    const { uploading, allUploadsComplete, fileUploads } = this.state
    if (uploading) {
      return <UploadProgress
               complete={allUploadsComplete}
               uploads={fileUploads} />; 
    } else {
      return <UploadForm />;
    }
  }
}

module.exports = UploaderContainer;