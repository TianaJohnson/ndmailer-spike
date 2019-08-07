import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';
import axios from'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      notes:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, notes } = this.state

    const Form = await axios.post('/api/form', {
      name,
      email,
      notes,
    })
  }

render(){
return (
  <div className="App">
    <header className="App-header">
      <br/>
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
    <Button
    onClick = {this.handleSubmit}
    >Yeah!</Button>
    <br/>
    </header>
   
  </div>

);
}
}

export default App;
