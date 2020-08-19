const React = require('react');

const ProgressBar = require('./ProgressBar.jsx');

class UploadProgress extends React.Component {  
  constructor(props) {
    super(props)
    this.state = { 
      info: this.props.info
    }
  }

  render() {
    var progressObject = this.state.info.files
    var progressBars = Object.keys(progressObject).map(key => { 
      return (
        <ProgressBar name={key} pc={progressObject[key]} />
      )
  })

console.log(progressBars.length)
    return (
      <div>
          {progressBars}
        </div> 
    );
    }

  }
module.exports = UploadProgress;

