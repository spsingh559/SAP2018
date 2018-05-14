import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ActionHome from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Content from 'material-ui/svg-icons/content/add';
import Send from 'material-ui/svg-icons/content/send';
import Delete from 'material-ui/svg-icons/action/delete'

import Paper from 'material-ui/Paper';  
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
// import RaisedButton from 'material-ui/RaisedButton';


const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
    borderRadius:"10px"
  };

export default class ApplyLoan extends React.Component{

    state={
        amount:"",
        days:"",
        ppd:"",
        successStatus:false,
        newRequestStatus:false,
        open: false,
    }
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
      handleOk=()=>{
        this.setState({open: false});
        this.setState({successStatus:true,newRequestStatus:true});
      }

    createRequest=()=>{
        this.setState({open:true})       

    }

    goBack=()=>{
        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
        if(retrievedUserDetails.roleType=="Lender"){
        this.context.router.push('/');
        }else if(retrievedUserDetails.roleType=="Borrower"){
            this.context.router.push('/borrower');
        }else if(retrievedUserDetails.roleType=="Auditor"){
            this.context.router.push('/audit');
        }else{
            this.context.router.push('/login');
        }

    }

    deleteRequest=()=>{


    }

    newRequest=()=>{
        this.setState({newRequestStatus:false})
    }

    render(){
        let title=<div style={{height:"50px", width:"100%", backgroundColor:"black", color:"white", textAlign:"center", padding:"10px 0px"}}>Loan Confirmation 
          </div>
        

        const actions = [
            <div>
                <Divider />
            <FlatButton
              label="Are you Ok?"
              primary={true}
              onClick={this.handleOk}
            />
            <FlatButton
              label="No Cancel It"
              primary={true}
              onClick={this.handleClose}
            />
            </div>
          ];

let successStatusView;

let calculateLoanAmount;
let amountBalance= this.state.amount/100;
let payAmount=amountBalance*this.props.params.ppd*this.state.days;

if(this.state.successStatus==true){
    successStatusView=[
        <Grid>
    <Paper zDepth={1} style={{fontSize:"14pt", marginTop:"30px", }}>
    <div>
    Mr {" "} BR12309123,
    Your Loan Request LR3212345 has been created for {this.state.amount} Rs  with rate of {' '} {this.props.params.ppd} ppdh for {" "} {this.state.days} Days. 
    </div>
    <div style={{backgroundColor:"rgb(0, 188, 212)", color:"white", height:"50px", padding:"10px 2px"}}
     onTouchTap={this.deleteRequest}>
                <center> 
                <span><Delete color="white" style={{marginRight:"10px"}} />
                </span>
                Delete Request  </center>
          </div>
    </Paper>
    </Grid>
    ]

}else{
    successStatusView=null;
}

if(this.state.newRequestStatus==true){
    return(
        <div style={{marginTop:"60px", fontSize:"14pt",backgroundColor:"#F1F1ED", height:"100%"}}>
        <div style={{backgroundColor:"black", color:"white", height:"70px", padding:"10px 5px"}}>
        <center> <h3> <span onTouchTap={this.goBack}><ActionHome color="white" style={{marginRight:"10px"}} /></span>Create Loan Request </h3> </center>
  </div>
  {successStatusView}
<Grid>
    <div style={{backgroundColor:"black", color:"white", height:"50px", padding:"10px 2px", marginTop:"50px"}}
     onTouchTap={this.newRequest}>
                <center> 
                     <span><Content color="white" style={{marginRight:"10px"}} />
                </span>
                Looking for Another Loan  </center>
                
          </div>
          </Grid>
          </div>
    )
}else{

        return(
            <div style={{marginTop:"60px", backgroundColor:"#F1F1ED", height:"100%"}}>
            <div style={{backgroundColor:"black", color:"white", height:"70px", padding:"10px 5px"}}>
                <center> <h3> <span onTouchTap={this.goBack}><ActionHome color="white" style={{marginRight:"10px"}} /></span>Loan Request </h3> </center>
          </div>
<Grid>
           <Paper zDepth={1} style={{fontSize:"14pt",marginTop:"10px", }}>
           <div style={{padding:"0px 5px"}}> Hi  {this.props.params.lenderID} ,
        </div>
           <div  style={{padding:"0px 5px"}}>
               I want a loan of {" "}{" "}
               <TextField
      
      hintText="Enter Amount"
      floatingLabelText="Amount in Rs"
      onChange = {(event,newValue) => this.setState({amount:newValue})}
    />
    Rs for {" "}{" "}
    <TextField
      
      hintText="Enter Days"
      floatingLabelText="Duration in Days"
      onChange = {(event,newValue) => this.setState({days:newValue})}
    />
    Days with rate of  {" "}{" "}
    <TextField
      value={this.props.params.ppd}
      disabled={true}
    />
     <div style={{backgroundColor:"rgb(0, 188, 212)", color:"white", height:"50px", padding:"10px 2px"}}
     onTouchTap={this.createRequest}>
                <center> 
                <span><Send color="white" style={{marginRight:"10px"}} />
                </span>
                    Send Request  </center>
          </div>
    </div>

   

           </Paper>
           <br />
           <Dialog
          title={title}
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
          autoDetectWindowHeight={true}
        >
         <div style={{marginTop:"10px"}}>
           Total Coin to be paid after {this.state.days} days with rate of {this.props.params.ppd} is : {payAmount} Coin
          
           </div>
        </Dialog>
          
</Grid>
                </div>
        )
    }
    }
}