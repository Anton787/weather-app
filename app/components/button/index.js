import Component from '../../core/Component.js';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const btn = document.createElement('button');

    btn.textContent = this.props.text;

    return btn;
  }
}

export default Button;