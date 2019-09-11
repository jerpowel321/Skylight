const React = require('react');

const UploadForm = require('../components/UploadForm.jsx');
const UploadProgress = require('../components/UploadProgress.jsx');

const UPLOAD_BUCKET = 'https://skylight-react-interview-project.s3.amazonaws.com'

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
    // Start the file upload process
    // for an individual file
    console.log(file)
    let xhr = new XMLHttpRequest()
    let uploadUrl = `${ UPLOAD_BUCKET }/${ file.name }`
    xhr.open('PUT', uploadUrl)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) { 
          console.log(file.sourceURL)
          console.log('reached 100')
        }
      }
    }      
    xhr.upload.onprogress = function (e) {        
      var percentComplete = Math.ceil((e.loaded / e.total) * 100); 
      console.log(file.sourceURL)
      console.log(percentComplete)
    }      
    xhr.setRequestHeader('Content-Type', file.mime)
    xhr.ontimeout = (e) => {     
      xhr.abort()
      console.log(file.sourceURL)
      console.log('failed')
    }
    xhr.send({ uri: file.sourceURL, type: file.mime })
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