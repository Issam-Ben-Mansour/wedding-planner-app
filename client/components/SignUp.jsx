import React from "react";
import $ from "jquery";

import LogIn from "./Login.jsx";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Intializing states based on the databse schema agreed upon with the group
      users: [],
      firstName: "",
      lastName:"",
      address:"",
      zipCode:"",
      city:"",
      phone:"",
      username: "",
      password: "",
      email:"",
      check: "",
      //firstName, lastName, address, zipCode, city, phone, username,email, password
    };
    this.add = this.add.bind(this);
  }
  add(e) {
    console.log("added");
    // add is used to allocate every state to an input, summarizing everything in the object called newUser
      e.preventDefault()
      const newUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        zipCode: this.state.zipCode,
        city: this.state.city,
        phone: this.state.phone,
        username: this.state.username,
        email:this.state.email,
        password:this.state.password,
      }
    $.post("PUT YOUR URL",newUser)
    // posting is necessary to complete "the add" and reinitializing the states to be able to fill them again
    .then(res => console.log(res.data));
        this.setState({
          firstName: "",
          lastName:"",
          address:"",
          zipCode:"",
          city:"",
          phone:"",
          username: "",
          password: "",
          email:"",
          check:"Login" // the check is a variable that will decide the next step following the multiple forms, a value "login" of a check will lead to a navigation to the "next" compnent
        })
  }
  render() {
    if (this.state.check === "") // this is the initial check condition
     { 
      return (
        <div className=" SignInForm ">
          <form onSubmit={(e) => this.add(e)}>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name "
              value={this.state.firstName}
              onChange={(e) => {
                this.setState({ firstName: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="lastName"
              placeholder="Your lastName name "
              value={this.state.lastName}
              onChange={(e) => {
                this.setState({ lastName: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="address"
              placeholder="Your address "
              value={this.state.address}
              onChange={(e) => {
                this.setState({ address: e.target.value });
              }}
            />
            <br></br>

            <input
              type="number"
              name="zipCode"
              placeholder="zipCode "
              value={this.state.zipCode}
              onChange={(e) => {
                this.setState({ zipCode: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="city"
              placeholder="Your City "
              value={this.state.city}
              onChange={(e) => {
                this.setState({ city: e.target.value });
              }}
            />
            <br></br>

            <input
              type="number"
              name="Phone"
              placeholder="Your Phone "
              value={this.state.phone}
              onChange={(e) => {
                this.setState({ phone: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="username"
              placeholder="Your username "
              value={this.state.username}
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
            <br></br>

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <br></br>

            <input
              type="password"
              name="password"
              placeholder="Your password "
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            <br></br>
            <input type="submit" value="SignUp" />
            <br></br>
          </form>
        </div>
        //multiple forms to add the states
      )
    } else { // the second check condition
      return (
        <div>
          <Login/>
        </div>
      );
    }
  }
}

export default SignUp;
