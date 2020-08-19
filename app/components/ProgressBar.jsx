const React = require('react');

class ProgressBar extends React.Component {
  render() {
    if(this.props.pc === 100) {
      return (
        <p className="pr-2" style={{fontFamily: "'Neuton', serif", fontSize: 20}}>{this.props.name} <span className="pl-2" style={{color: 'rgb(11, 211, 24'}}>Upload Complete. ☺️</span></p>
      )
    }

    return <div className="d-flex flex-row align-items-center">
      <p className="pr-4" style={{fontFamily: "'Neuton', serif", color: "grey", fontSize: 20, marginBottom: 0}}>Uploading...</p>
      <p className="pr-5" style={{fontFamily: "'Neuton', serif", fontSize: 20, marginBottom: 0}}> {this.props.name}</p>
      <div style={{
          width: '300px',
            background: '#F0F0F0',
            height: '15px' }}>
        <div style={{
            // background: 'rgb(11, 211, 24)',
            background: '#ff5700',
            width: `${this.props.pc}%`,
            height: '15px' }}>
          </div>
      </div>
    </div>
  }
}

module.exports = ProgressBar;

