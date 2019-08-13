import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      notes: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    // const { name, email, notes } = this.state
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const notes = document.getElementById('notes').value;

    axios({
                  method: "POST", 
                  url:"http://localhost:3002/send", 
                  data: {
                      name: name,   
                      email: email,  
                      notes: notes
                  }
              }).then((response)=>{
                  if (response.data.msg === 'success'){
                      alert("Message Sent."); 
                      this.resetForm()
                  }else if(response.data.msg === 'fail'){
                      alert("Message failed to send.")
                  }
              })
          

    // const form = await axios.post('/api/form', {
    //   name,
    //   email,
    //   notes,
    // })
  }

  /// reset form
  resetForm() {
    document.getElementById('contact-form').reset();
}

  // just to add something, more to come. im gunna get it.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br />
          <h1>I am attempting to spike nodemailer.</h1>
          <Form className="formMain">
            <FormGroup>
              <Label>Name: </Label>
              <Input type="Name"
                name="name"
                id="exampleName"
                placeholder="Full Name"
                value={this.state.name}
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label>Email: </Label>
              <Input type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleChange} />
            </FormGroup>
            <br />
            <FormGroup>
              <Input type="textarea"
                name="notes"
                id="exampleText"
                value={this.state.notes}
                onChange={this.handleChange}
                style={{ height: 200, width: 300 }} />
            </FormGroup>
          </Form>
          <br />
          <Button
            onClick={this.handleSubmit}
          >Yeah!</Button>
          <br />
        </header>

      </div>

    );
  }
}

export default App;
