const { MyMath } = require('./MyMath.js');

class Component {
  constructor(props) {
    this.props = props;
  }

  render() {
    return 'I rendered';
  }
}

const data = 1;

console.log('component');

exports.ExportedComponent = Component;

// console.log(exports);
