const React = require("react");

const UploadForm = require("../components/UploadForm.jsx");
const UploadProgress = require("../components/UploadProgress.jsx");

const UPLOAD_BUCKET =
  "https://skylight-react-interview-project.s3.amazonaws.com";

class UploaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      files: {},
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(file) {
    this.setState({
      uploading: true,
    });
    let xhr = new XMLHttpRequest();
    let uploadUrl = `${UPLOAD_BUCKET}/${file.name}`;
    xhr.upload.addEventListener("progress", (e) => {
        var pc = parseInt((e.loaded / e.total) * 100);
        var fileName = file.name;
        let fileObject = this.state.files;
        fileObject[fileName] = pc;
        this.setState({
          files: fileObject,
        });
      },
      false
    );
    xhr.open("PUT", uploadUrl);
    xhr.overrideMimeType(file.type);
    xhr.send(file);
  }
  
  render() {
    const { uploading } = this.state;
    if (uploading) {
      return (
        <div className="container">
          <UploadForm handleUpload={this.handleUpload} />
          <UploadProgress info={this.state} />
        </div>
      )
    } else {
      return <div className="container">
        <UploadForm handleUpload={this.handleUpload} />
        </div>
    }
  }
}

module.exports = UploaderContainer;
