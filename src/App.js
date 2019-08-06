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

render(){
return (
  <div className="App">
    <header className="App-header">
    <h1>I am attempting to spike nodemailer.</h1>
    <Form>
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
    </header>
   
  </div>

);
}
}

export default App;
