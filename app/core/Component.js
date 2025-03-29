class Component {
  constructor(props = {} ) {
    this.props = this._makeReactive(props);
    this.element = this.render();
  }

  render() {
    throw new Error("Метод должен быть переопределен");
  }

  update() {
    const newElement = this.render();
    this.element.replaceWith(newElement);
    this.element = newElement;
  }

  _makeReactive(props) {
    const component = this;

    return new Proxy(props, {
      set(target, prop, val) {
        if (target[prop] !== val) {
          target[prop] = val;
          component.update();
        }
        return true;
      }
    })
  }
}

export default Component;