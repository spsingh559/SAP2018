import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Grid,Row,Col,Carousel,Panel} from 'react-bootstrap';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
// import {Link} from 'react-router';
// import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {Image} from 'react-bootstrap';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import restUrl from '../restUrl';

const userInfo=[
    {
    username: "Lender",
    password: "123456",
    roleType: 'Lender' 
  },
  {
    username: "Borrower",
    password: "123456",
    roleType: 'Borrower'
  },
  {
    username: "Auditor",
    password: "123456",
    roleType: 'Auditor'
  }
]

const style = {
  labelStyle: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
     labelStyle1: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      marginLeft:"-100px",
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
  buttonBorder:{
    width: '167px',
    height: '48px',
    radius: '6px',
    margin: '8px',
    border: 'solid 1px #ffffff',
    color:'#FFFFFF'
  }
} ;

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      userContactSignUp:'',
      userEmailSignUp:'',
      userPwdSignUp:'',
      signUpStatus:false,     
        openDrawer:false,
        loginStatus:false,
        registerStatus:false,
        aadhar:'',
        otpWindowStatus:false,
        otp:'',
        registerViewStatus:false,
        jioPassword:'',
        lender:"Lender"
    }
    this.handleUsername=this.handleUsername.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleUsername(e){
    this.setState({ username: e.target.value });
  }
  handlePassword(e){
    this.setState({ password: e.target.value });
  }

  handleUserEmailignUp=(e)=>{
    this.setState({userEmailSignUp:e.target.value});
  }

  handlePasswordSignUp=(e)=>{
    this.setState({userPwdSignUp:e.target.value});
  }
  handleUserConatctSignUp=(e)=>{
    this.setState({userContactSignUp:e.target.value});
  }
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }
  handleClick(e) {
    this.context.router.push('/');
    // let data={userName:this.state.Id,userPassword:this.state.password};
    // Axios({
    //   method:'post',
    //   url:'/api/v1/user/',
    //   data:data
    // })
    // .then((data1) => {
    //   console.log('Login details connected to server for post');
    //   console.log(data1.data.message);
    //   if(data1.data.message=='success'){
    //     this.context.router.push('/dashboard');
    //     alert('Successfully logged in!!!');
    //   }else{
    //     alert('Please enter valid Credentials!!!');
    //   }
// console.log(data1);
// })
//     .catch((error) => {
//       console.log(error);
//       console.log(error+"error in Login data for post");
//     });
  }

  signUp=()=>{
    this.setState({signUpStatus:true});
  }

  handleSignUpClick=()=>{
    let signUpObj={
      _id:Date.now(),
      userEmailSignUp:this.state.userEmailSignUp,
      userPwdSignUp:this.state.userPwdSignUp,
      userContactSignUp:this.state.userContactSignUp
    }
    // Axios({
    //   method:'post',
    //   url:'/api/v1/user/signUp',
    //   data:signUpObj
    // })
    // .then((data1) => {
    //   console.log('Login details connected to server for post');
    //   console.log(data1.data.message);
    //   alert('Signup Successfully');
    //   this.setState({signUpStatus:false});
    // })
    // .catch((error) => {
    //   console.log(error);
    //   console.log(error+"error in Login data for post");
    // });

  }

  loginClick=()=>{
    

    // userInfo.forEach((data)=>{
    //   if(data.username==this.state.username && data.password==this.state.password){
    //     alert('Successfully Login');
    //     sessionStorage.setItem('userLoginDetails',JSON.stringify(data));
    //     if(data.roleType=="Lender" ){
    //     this.context.router.push('/');
    //     }else if(data.roleType=="Auditor"){
    //       this.context.router.push('/Audit');
    //     }else if(data.roleType=="Borrower" ){
    //       this.context.router.push('/'); 
    //     }
    //   }
    // })
    let obj={
      name:this.state.username,
      password:this.state.password
    }

    Axios({
      method:'post',
      url:restUrl+'/api/login',
      data:obj
    })
    .then((data) => {
     console.log(data)
      
      if(data.data.response=="Succes"){
        sessionStorage.setItem('userLoginDetails',JSON.stringify(data.data));
        this.context.router.push('/');
      }else{
        alert('login Failed');
      }
  
    })
    .catch((error) => {
      console.log(error);
      console.log(error+"error in Login data for post");
    });
   
  }

  navigationLandingPage=()=>{
    this.context.router.push('/landingPage');
  }

  handleClose = () => this.setState({openDrawer: false});
  handleToggle = () => this.setState({openDrawer: !this.state.openDrawer});
  login=()=>{
    this.setState({loginStatus:true})
  }

  Register=()=>{
    console.log('register');
    this.setState({registerStatus:true});
  }

  home=()=>{
    this.setState({loginStatus:false,registerStatus:false});
  }




  render() {
  
     return(
      <div className="background">
      <AppBar
  title="Jio Login"
  iconClassNameRight="muidocs-icon-navigation-expand-more"
  onLeftIconButtonTouchTap={this.handleToggle}
/>


   <Drawer
        docked={false}
        width={200}
        open={this.state.openDrawer}
        style={{backgroundColor:"rgb(0, 188, 212)"}}
        onRequestChange={(openDrawer) => this.setState({openDrawer})}
        >
<center>
      <Image src="../images/jiologo.png" 
      style={{width:'100px',height:'100px'}} circle/>
      </center>
      <Divider />
      <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/login">Login</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/verification">Register</Link>
          </MenuItem>
        
      </Drawer>
       <Grid>
         <Row style={{marginTop: '150px',color:"white"}}>
           <center>
       {/* <h2 style={{marginTop: '150px',color:"white"}}>
       Jio Login 
        </h2><br/> */}
        <TextField
      
      hintText="User Name"
      hintStyle={{color:"white"}}
      inputStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
      floatingLabelText="Enter User Name"
      onChange = {(event,newValue) => this.setState({username:newValue})}
    /><br />
    <TextField
      hintText=" Password"
      inputStyle={{color:"white"}}
      hintStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
      type="password"
      onChange = {(event,newValue) => this.setState({password:newValue})}
      floatingLabelText="Enter Password"
    /><br />
        <div style={{marginTop:"50px"}}>
        <RaisedButton label="Login" primary={true}  onTouchTap={this.loginClick}/>
       
        </div>
        </center>
       </Row>
       
       </Grid> 
       </div>
     )
   
    }
  }