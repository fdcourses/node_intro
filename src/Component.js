class Component {
  constructor(props) {
    this.props = props;
  }

  render() {
    return 'I rendered';
  }
}

const data = 1;

// console.log(module.exports);

module.exports.Component = Component;
module.exports.data = data;