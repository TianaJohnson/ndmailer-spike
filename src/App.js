import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      notes:'',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()

    const { name, email, notes } = this.state
  }

render(){
return (
  <div className="App">
    <header className="App-header">
      <br/>
    <h1>I am attempting to spike nodemailer.</h1>
    <Form onSubmit={this.handleSubmit}>
    <FormGroup>
        <Label>Name: </Label>
        <Input type="Name" 
               name="name" 
               id="exampleName" 
               placeholder="Full Name"
               onChange={this.handleChange} />
      </FormGroup>
    <FormGroup>
        <Label>Email: </Label>
        <Input type="email" 
               name="email" 
               id="exampleEmail" 
               placeholder="Email Address"
               onChange={this.handleChange}  />
      </FormGroup>
      <br/>
      <FormGroup>
        <Input type="textarea"
               name="notes"
               id="exampleText"
               onChange={this.handleChange} 
               style={{ height: 200, width: 300 }} />  
      </FormGroup>
    </Form>
    <br/>
    <Button>Yeah!</Button>
    <br/>
    </header>
   
  </div>

);
}
}

export default App;
