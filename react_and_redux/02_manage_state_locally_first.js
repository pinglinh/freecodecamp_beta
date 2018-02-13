class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  
  submitMessage() {
    let newMessages = [...this.state.messages, this.state.input];
    this.setState({
      input: '',
      messages: newMessages
    })
  }
  
  render() {
    let messages = this.state.messages
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} value={this.state.input} type="text"/>
        <button type="submit" value="Submit" onClick={this.submitMessage}>Add message</button>
        <ul>{messages.map((item) => {
            <li>{item}</li>
          })}</ul>
      </div>
    );
  }
};
