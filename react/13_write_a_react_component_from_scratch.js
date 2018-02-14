class MyComponent extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"))
