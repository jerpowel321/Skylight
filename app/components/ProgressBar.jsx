const React = require('react');

class ProgressBar extends React.Component {
  render() {
    return <div>
      <p>cats.gif</p>
      <div style={{
          width: '100%',
            background: 'gray',
            height: '50px' }}>
        <div style={{
            background: 'green',
            width: '75%',
            height: '50px' }}></div>
      </div>
    </div>
  }
}

module.exports = ProgressBar;