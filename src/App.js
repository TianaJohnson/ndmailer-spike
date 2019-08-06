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
               name="email" 
               id="exampleName" 
               placeholder="Full Name" />
      </FormGroup>
    <FormGroup>
        <Label>Email: </Label>
        <Input type="email" 
               name="email" 
               id="exampleEmail" 
               placeholder="Email Address" />
      </FormGroup>
      <br/>
      <FormGroup>
        <Input type="textarea"
               name="text"
               id="exampleText"
               style={{ height: 200, width: 300 }} />  
      </FormGroup>
    </Form>
    <br/>
    <Button>Yeah!</Button>
    </header>
    <Form>
      <Input>
      </Input>

    </Form>
    <br/>
    <Button>Yeah!</Button>
  </div>

);
}
}

export default App;
