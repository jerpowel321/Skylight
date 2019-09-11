const React = require('react');

class ProgressBar extends React.Component {
  render() {
    const { upload } = this.props
    return <div>
      <p>{ upload.filename }</p>
      <div style={{
          width: '100%',
            background: 'gray',
            height: '50px' }}>
        <div style={{
            background: 'green',
            width: `${ upload.progressPercent }%`,
            height: '50px' }}></div>
      </div>
    </div>
  }
}

module.exports = ProgressBar;