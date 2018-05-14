
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

export default class Landing extends React.Component{

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
    render(){

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
          <Link to ="/login">Login</Link>
          </MenuItem>
          <MenuItem onTouchTap={this.handleClose}>
          <Link to ="/verification">Register</Link>
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
    
            </div>
    
            )
    }
}