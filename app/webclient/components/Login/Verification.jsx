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
export default class Verification extends React.Component{


    state={
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

      handleClose = () => this.setState({openDrawer: false});
      handleToggle = () => this.setState({openDrawer: !this.state.openDrawer});


    aadharLink=()=>{
        console.log(this.state.aadhar);
        event.preventDefault();
        setTimeout(()=>{
          this.setState({otpWindowStatus:true});
        },1500)
        
      }

      static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }


      otpVerify=()=>{
        setTimeout(()=>{
       alert('Verification Successfully, You are redirected for Registration');
                this.context.router.push('/register');
        },2500)
       
      }

    render(){

        let otpMessage;
        if(this.state.otpWindowStatus==true){
          otpMessage=[
        //     <Grid>
        //     <Row style={{marginRight: "-10px",
        // marginLeft: "-10px"}}>
            <div  style={{marginTop:"10px"}}>
              <p>
                OTP has sent to your register Mobile Number. Verfiy it
                </p>
               
                <TextField
           hintStyle={{color:"white"}}
           inputStyle={{color:"white"}}
           floatingLabelStyle={{color:"white"}}
          hintText="Enter OTP"
          floatingLabelText="OTP"
          onChange = {(event,newValue) => this.setState({otp:newValue})}
          fullWidth={true}
        />
        <center>
        <RaisedButton label="Verify OTP" primary={true}  onTouchTap={this.otpVerify}/>
        </center>
              </div>
              // </Row>
              // </Grid>
          ]
        }else{
          otpMessage=null;
        }

        return(
            <div className="background">
            <AppBar
        title="Jio Verification"
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
          <Link to ="/landing">Home</Link>
          </MenuItem>
              
              
            </Drawer>
            <Grid>
              
              
            <div style={{marginTop: '50px',color:"white"}}>
            
           <TextField
         hintText="User Name"
         hintStyle={{color:"white"}}
         inputStyle={{color:"white"}}
         floatingLabelStyle={{color:"white"}}
         hintText="Enter Aadhar Number"
         floatingLabelText="Enter Aadhar Number"
         onChange = {(event,newValue) => this.setState({aadhar:newValue})}
         fullWidth={true}
        />
        <center>
        
        <RaisedButton label=" Verfiy" primary={true}  onTouchTap={this.aadharLink}/>
        </center>
        
        {otpMessage}
      
        
         
          </div>
          
          </Grid> 
          </div>
        )
    }
}