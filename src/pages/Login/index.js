import React, { Component, useContext }  from 'react';
import axios from "axios";
import { Link, NavLink } from 'react-router-dom';
import "./index.css"
import { AppContext } from '../../AppContext';

class Login extends Component {

constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
      error:'',
      showPassword: false,
      role:'As pharmacy',

     
		}  
	}
 
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };
  
 handleForm = e => {
  console.log(this.state.role)
  if(this.state.email==="johndoe@example.com"){
    e.preventDefault();
    axios.post(
        "http://192.168.43.218:8000/api/loginAdmin", 
        this.state,
        {headers: {"Accept": "application/json"}}
      )
      
    .then(res => {
      if(res.status){
     localStorage.setItem("isLoggedIn",true);
        localStorage.setItem("userData",JSON.stringify(res.data.token));
          localStorage.setItem("role",JSON.stringify(res.data.user.role));
         console.log(res.data.token)
         console.log(res.data.user.role)
         this.props.history.push('/homepharmacy')

      }
       else {
        // handle error
        console.log(res.data.message);
        this.setState({
          error:res.data.message
        })
      }

    })
    .catch(function (error) {
      console.log(error);
      this.setState({error:"failed email or password!"})
    }.bind(this));
  
  e.preventDefault();
 }
 else if(this.state.role==="As pharmacy"){
  e.preventDefault();
  axios.post(
      "http://192.168.43.218:8000/api/loginpharma", 
       this.state,
      {headers: {"Accept": "application/json"}}
    )
    
    .then(res => {
      if(res.status===200){
        const loginTime=new Date().getTime();
        localStorage.setItem('loginTime',loginTime);
        localStorage.setItem('pharmacyName',JSON.stringify(res.data.pharma.PhName));
     localStorage.setItem("isLoggedIn",true);
        localStorage.setItem("userData",JSON.stringify(res.data.token));
         localStorage.setItem("id",JSON.stringify(res.data.pharma.id));
         localStorage.setItem("role",JSON.stringify(res.data.pharma.role));
         localStorage.setItem("state",JSON.stringify(res.data.pharma.state));
         localStorage.setItem("state1",JSON.stringify(res.data.pharma.state1));
         localStorage.setItem("state2",JSON.stringify(res.data.pharma.state2));
         console.log(localStorage.getItem("role"))
         console.log("Tmaaaaaaaaam")
         console.log(res)
         console.log(res.data.pharma.state)
         console.log(res.data.pharma.state2)
         console.log(res.data.pharma.state3)
         console.log(res.data.token)
         if(res.data.pharma.state=="NotYetDetermined"&& res.data.pharma.state2=="NotYetDetermined" && res.data.pharma.state3=="NotYetDetermined"){
          this.props.history.push('/loadingpage')
          console.log("1")
         }
          else if(res.data.pharma.state=="accept"&& res.data.pharma.state2=="NotYetDetermined" && res.data.pharma.state3=="NotYetDetermined"){
          this.props.history.push('/paypageph')
          console.log("2")
         }
       else if(res.data.pharma.state=="accept"&& res.data.pharma.state2=="accept" && res.data.pharma.state3=="NotYetDetermined"){
          this.props.history.push('/loadingpaypage')
          console.log("3")
         }
        else if(res.data.pharma.state=="accept"&& res.data.pharma.state2=="accept" && res.data.pharma.state3=="accept"){
          this.props.history.push('/homepharmacy')
          console.log("4")
         }
         else if(res.data.pharma.state=="accept"&& res.data.pharma.state2=="accept" && res.data.pharma.state3=="disallow"){
          this.props.history.push('/rejectedpaypage')
          console.log("4")
         }

      } else {
        // handle error
        console.log(res.data.message);
        this.setState({
          error:res.data.message
        })
      }

    })
    .catch(function (error) {
      console.log(error);
      this.setState({error:"failed email or password!"})
    }.bind(this));
  
  e.preventDefault();
 }
 else if(this.state.role==="As Store"){
  e.preventDefault();
  axios.post(
      "http://192.168.43.218:8000/api/loginWarehouse", 
       this.state,
      {headers: {"Accept": "application/json"}}
    )
    
    .then(res => {
     // access res.data in order to check formcarry res
      if(res.status){
        const loginTime=new Date().getTime();
        localStorage.setItem('loginTime',loginTime);
     localStorage.setItem("isLoggedIn",true);
        localStorage.setItem("userData",JSON.stringify(res.data.token));
       localStorage.setItem("id",JSON.stringify(res.data.warehouse.id));
        localStorage.setItem("role",JSON.stringify(res.data.warehouse.role));
        localStorage.setItem("state",JSON.stringify(res.data.warehouse.state));
        localStorage.setItem("state1",JSON.stringify(res.data.warehouse.state1));
        localStorage.setItem("state2",JSON.stringify(res.data.warehouse.state2));
        console.log(localStorage.getItem("role"))
        console.log("Tmaaaaaaaaam")
        console.log(res)
        console.log(res.data.warehouse.state)
        console.log(res.data.warehouse.state2)
        console.log(res.data.warehouse.state3)
        console.log(res.data.token)
        if(res.data.warehouse.state=="NotYetDetermined"&& res.data.warehouse.state2=="NotYetDetermined" && res.data.warehouse.state3=="NotYetDetermined"){
         this.props.history.push('/loadingpage')
         console.log("1")
        }
         else if(res.data.warehouse.state=="accept"&& res.data.warehouse.state2=="NotYetDetermined" && res.data.warehouse.state3=="NotYetDetermined"){
         this.props.history.push('/paypageph')
         console.log("2")
        }
      else if(res.data.warehouse.state=="accept"&& res.data.warehouse.state2=="accept" && res.data.warehouse.state3=="NotYetDetermined"){
         this.props.history.push('/loadingpaypage')
         console.log("3")
        }
       else if(res.data.warehouse.state=="accept"&& res.data.warehouse.state2=="accept" && res.data.warehouse.state3=="accept"){
         this.props.history.push('/homepharmacy')
         console.log("4")
        }
        else if(res.data.warehouse.state=="accept"&& res.data.warehouse.state2=="accept" && res.data.warehouse.state3=="disallow"){
          this.props.history.push('/rejectedpaypage')
          console.log("4")
         }
         else if(res.data.warehouse.state=="accept"&& res.data.warehouse.state2=="NotYetDetermined" && res.data.warehouse.state3=="accept"){
          this.props.history.push('/paypageph')
          console.log("4")
         }
      } else {
        // handle error
        console.log(res.data.message);
        this.setState({
          error:res.data.message
        })
      }

    })
    .catch(function (error) {
      console.log(error);
      this.setState({error:"failed email or password!"})
    }.bind(this));
  
  e.preventDefault();
 } 
        
      }
     
      handleFields =e=> this.setState({ [e.target.name]: e.target.value })
      
      
    render(){
        const { showPassword } = this.state;

       return (
         <div className="Login">
    <div className="wrapper">
      <form onSubmit={this.handleForm} action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" name="email" onChange={this.handleFields} placeholder="Username " id="email" required/>
          <span>
          <i  class="bi bi-envelope mx-2 "></i>
          </span>
        </div>
        <div className="input-box">
          <input type={showPassword ? 'text' : 'password'} name="password" onChange={(e)=>this.handleFields(e)} placeholder="Password" required/>
          {showPassword ?<i onClick={this.togglePasswordVisibility} class="bi bi-eye mx-2" id="togglePassword"></i> : <i onClick={this.togglePasswordVisibility} class="bi bi-eye-slash mx-2" id="togglePassword"></i> }
        </div>

        <div className="remember-forget">
        <a href="#">Forget password?</a>
         <select onChange={(e)=>this.setState({role:e.target.value})} className="select"><option className="opt" value="As pharmacy">As pharmacy</option>
          <option  className="opt" value="As Store">As store</option>
          </select>
         
        </div>

        <button type="onSubmit" className="getstart"  type="submit">login</button>

        <div className="register-link">
          <p>Don't have an account? <Link to="/signup">Register</Link></p>
          <p id="errorlabel">{this.state.error}</p>
          </div>     
          
           </form>
     </div>
     </div>
      
    )

    }
}


export default Login;
