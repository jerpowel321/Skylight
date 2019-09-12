const React = require('react');

const ProgressBar = require('./ProgressBar.jsx');

class UploadProgress extends React.Component {  
  render() {
    return (<div>
      <h1>Uploading...</h1>
      <ProgressBar />
      <ProgressBar />
    </div>);
  };
}

module.exports = UploadProgress;