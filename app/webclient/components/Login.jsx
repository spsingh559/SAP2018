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
        jioPassword:''
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
    

    userInfo.forEach((data)=>{
      if(data.username==this.state.username && data.password==this.state.password){
        alert('Successfully Login');
        sessionStorage.setItem('userLoginDetails',JSON.stringify(data));
        if(data.roleType=="Lender" ){
        this.context.router.push('/');
        }else if(data.roleType=="Auditor"){
          this.context.router.push('/Audit');
        }else if(data.roleType=="Borrower" ){
          this.context.router.push('/borrower'); 
        }
      }
    })
    // sessionStorage.setItem('userLoginDetails',JSON.stringify(userLoginDetails));
    //  let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    // console.log(retrievedUserDetails);
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

  // ------------------Registeration Function-----------------

  aadharLink=()=>{
    console.log(this.state.aadhar);
    this.setState({otpWindowStatus:true});
  }

  otpVerify=()=>{
    this.setState({otpWindowStatus:false, registerViewStatus:true});
  }

  registerSuccess=()=>{
    alert('Registration Successful');
    this.setState({loginStatus:true});
  }
  // End -------------------------Registration

  render() {
    /*console.log("----Session ID Login----");
    sessionStorage.setItem("userId", "A100");
    sessionStorage.setItem("emailId", "jitendra.chauhan2@wipro.com");
    let id =sessionStorage.getItem("userId");
    let emailid =sessionStorage.getItem("emailId");
    console.log(id);
    console.log(emailid);*/
  
   if(this.state.loginStatus==true){
      //  ------------------------------------Login----------------------------
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
       
        onRequestChange={(openDrawer) => this.setState({openDrawer})}
        >
<center>
      <Image src="../images/jiologo.png" 
      style={{width:'100px',height:'100px'}} circle/>
      </center>
      <Divider />
        <MenuItem onTouchTap={this.handleClose}>
         <a onTouchTap={this.login}>Login </a>
        </MenuItem>
        <MenuItem onTouchTap={this.handleClose}>
        <a onTouchTap={this.Register}> Register </a>
        </MenuItem>
        <MenuItem onTouchTap={this.handleClose}>
      <a onTouchTap={this.home}> Home </a>
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
   }else if(this.state.registerStatus==true){
    //  ------------------------------------Register-------------------------------
    let otpMessage;
    if(this.state.otpWindowStatus==true){
      otpMessage=[
    //     <Grid>
    //     <Row style={{marginRight: "-10px",
    // marginLeft: "-10px"}}>
        <Paper zDepth={2} style={{marginTop:"10px"}}>
          <p>
            OTP has sent to your register Mobile Number. Verfiy it
            </p>
            <br />
            <TextField
      
      hintText="Enter OTP"
      floatingLabelText="OTP"
      onChange = {(event,newValue) => this.setState({otp:newValue})}
    />
    <br />
    <RaisedButton label="Verify OTP" primary={true}  onTouchTap={this.otpVerify}/>
          </Paper>
          // </Row>
          // </Grid>
      ]
    }else{
      otpMessage=null;
    }
    let regisView;
    // if(this.state.registerViewStatus==true){
    //   regisView=[

    //   ]
    // }
    if(this.state.registerViewStatus==true){

      regisView=[
    //     <Grid>
    //  <Row style={{marginRight: "-10px",
    // marginLeft: "-10px"}}>
      <Paper zDepth={2} style={{marginTop:"10px"}}>
        <h5> Registration Id Genrated Successfully</h5>
        <h6> S32432134 </h6>
        <br />
        <RadioButtonGroup name="shipSpeed" defaultSelected="Lender">
      <RadioButton
        value="Lender"
        label="Lender"

      />
      <RadioButton
        value="Borrower"
        label="Borrower"
       />
      </RadioButtonGroup>
  <br />
  <div style={{align:"left"}}>
  <TextField
      hintText=" Set Password"
      type="password"
      onChange = {(event,newValue) => this.setState({jioPassword:newValue})}
      floatingLabelText="Set password"
    />
    <br />
    <br />
    <RaisedButton label="Submit" primary={true}  onTouchTap={this.registerSuccess}/>
    </div> 

      </Paper>
      // </Row>
      // </Grid>
      ]
    }else{
      regisView=null;
    }
     return(
    <div className="background">
    <AppBar
title="Jio Registration"
iconClassNameRight="muidocs-icon-navigation-expand-more"
onLeftIconButtonTouchTap={this.handleToggle}
/>


 <Drawer
      docked={false}
      width={200}
      open={this.state.openDrawer}
     
      onRequestChange={(openDrawer) => this.setState({openDrawer})}
      >
<center>
    <Image src="../images/jiologo.png" 
    style={{width:'100px',height:'100px'}} circle/>
    </center>
    <Divider />
      <MenuItem onTouchTap={this.handleClose}>
       <a onTouchTap={this.login}>Login </a>
      </MenuItem>
      <MenuItem onTouchTap={this.handleClose}>
      <a onTouchTap={this.Register}> Register </a>
      </MenuItem>
      <MenuItem onTouchTap={this.handleClose}>
      <a onTouchTap={this.home}> Home </a>
      </MenuItem>
      
      
    </Drawer>
    <Grid>
      
      
    <Row style={{marginTop: '50px',color:"white"}}>
    <Paper zDepth={2} style={{marginTop:"10px"}} >
   <TextField
 
 hintText="Enter Aadhar Number"
 floatingLabelText="Enter Aadhar Number"
 onChange = {(event,newValue) => this.setState({aadhar:newValue})}
/><br />
<RaisedButton label="Enter for Verfication" primary={true}  onTouchTap={this.aadharLink}/>
</Paper>
{otpMessage}
{regisView}

 
  </Row>
  
  </Grid> 
  </div>
     )
   }else{
 
    
      return (
        
       
        <div className="background">
        <AppBar
    title="Jio Loan App"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={this.handleToggle}
  />


     <Drawer
          docked={false}
          width={200}
          open={this.state.openDrawer}
         
          onRequestChange={(openDrawer) => this.setState({openDrawer})}
          >
<center>
        <Image src="../images/jiologo.png" 
        style={{width:'100px',height:'100px'}} circle/>
        </center>
        <Divider />
          <MenuItem onTouchTap={this.handleClose}>
           <a onTouchTap={this.login}>Login </a>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <a onTouchTap={this.Register}> Register </a>
          </MenuItem>
          
          
        </Drawer>
 
        <Carousel>
  <Carousel.Item >
    <img width="auto" height={500} alt="900x500" src="../images/jio1.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img width="auto" height={500} alt="900x500" src="../images/jio2.png" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img width="auto" height={500} alt="900x500" src="../images/jio3.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img width="auto" height={500} alt="900x500" src="../images/jio4.jpg" />
    
  </Carousel.Item>
</Carousel>
<Grid>
  <Row>
  <div className="panel panel-primary" style={{marginTop:"50px"}}>
  <div className="panel-heading">Jio Platform</div>
  <div className="panel-body" style={{fontSize:"16"}}>
  Reliance MFB is primarily a financial service institution for the unbanked determined to contribute positively to the nation's economic development by facilitating financial inclusion. The Bank is well positioned to support entrepreneurship and empowerment of the economically disadvantaged individuals, micro, small and medium scale enterprises in achieving their financial goals.
  </div>
  <div className="panel-footer" style={{backgroundColor:"blue", color:"white"}}>Read More</div>
</div>
    </Row>
</Grid>
{/*           
        <Grid>
        <Row>
          <Col xs={6}> */}
{/*         
        <div style={{marginTop:'100px'}}  > */}
        {/* <pap style={{height:'300px',width:'500px',backgroundColor:'white',marginTop:'200px'}}> */}


        {/* <h2 style={{marginTop: '10px',color:"white"}}>
        Project Buddies App
        </h2><br/>
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
      onChange = {(event,newValue) => this.setState({password:newValue})}
      floatingLabelText="Enter Password"
    /><br />
        <div style={{marginTop:"50px"}}>
        <RaisedButton label="Login" primary={true}  onTouchTap={this.loginClick}/>
        <RaisedButton label="Registration" secondary={true}  
        style={{marginLeft:"100px"}}/>
        </div>
        </div>
        </Col>
       </Row>
       </Grid> */}
        </div>

        )
      }
    }
  }