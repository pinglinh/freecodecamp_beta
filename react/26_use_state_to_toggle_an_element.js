class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.makeTextVisible = this.makeTextVisible.bind(this);
    this.makeTextNotVisible = this.makeTextNotVisible.bind(this);
    
  }
  makeTextVisible() {
    this.setState({
      visibility: true
    })
  }
  
  makeTextNotVisible() {
    this.setState({
      visibility: false
    })
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.makeTextNotVisible}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.makeTextVisible}>Click Me</button>
        </div>
      );
    }
  }
};



