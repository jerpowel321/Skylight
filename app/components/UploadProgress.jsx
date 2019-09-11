const React = require('react');

class UploadProgress extends React.Component {
  onChangeHandler(event) {
    console.log(event.target.files.length)
  }
  
  render() {
    const { complete, uploads } = this.props
    return <div>
      <h1>{ complete ? 'All Finished!' : 'Uploading...' }</h1>
      { uploads.map((upload) => {
          return <div>
            <h1>hello world</h1>
          </div>
        })
      }  
    </div>;
  };
}

module.exports = UploadProgress;