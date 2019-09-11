const React = require('react');

const ProgressBar = require('./ProgressBar.jsx');

class UploadProgress extends React.Component {  
  render() {
    const { complete, uploads } = this.props;
    return (<div>
      <h1>{ complete ? 'All Finished!' : 'Uploading...' }</h1>
      { uploads.map((upload) => <ProgressBar upload={upload} />) }
    </div>);
  };
}

module.exports = UploadProgress;