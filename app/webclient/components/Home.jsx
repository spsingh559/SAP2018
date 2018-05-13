
import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import {Grid} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

import Paper from 'material-ui/Paper';
import Balance from './Dashboard/Balance';
// import PendingTx from './Dashboard/PendingTx';
import Transaction from './Dashboard/Transaction';
import ActiveSummary from './Dashboard/ActiveSummary';
import DefaulterList from './Dashboard/DefaulterList';

// Component End
const summaryData=[
  {
  contractID:"2378423",
  interestDate:"1 pphpd",
  amount:"3000",
  dueDate:"1st July, 2018"
},
{
  contractID:"2378424",
  interestDate:"1 pphpd",
  amount:"1000",
  dueDate:"1st Aug, 2018"
},
{
  contractID:"2378425",
  interestDate:"1 pphpd",
  amount:"10000",
  dueDate:"1st Nov, 2018"
},
{
  contractID:"2378423",
  interestDate:"1 pphpd",
  amount:"6000",
  dueDate:"1st Oct, 2018"
}
]

const defaultData=[
  {
  contractID:"2378423",
  amount:"10000",
  balanceAmount:"2000",
  dueDate:"1st Feb, 2018"
},
{
  contractID:"2378424",
  balanceAmount:"2000",
  amount:"10500",
  dueDate:"1st July, 2018"
},
{
  contractID:"2378425",
  balanceAmount:"2000",
  amount:"11000",
  dueDate:"1st April, 2018"
},
{
  contractID:"2378423",
  balanceAmount:"2000",
  amount:"6000",
  dueDate:"1st March, 2018"
}
]

// Allocation data






export default class Home extends React.Component {
  
  render() {
  
      return (
        <div style={{marginTop:"40px"}} className="homeBackground">
       <Grid>

         
           <Balance />   
           <Row>
             </Row>

          
           <Transaction />
          
           
           <Row>
             </Row>
             <Row>
             </Row>
           
           
             <center>
             <h4 style={{color:"white"}} > Active Profile Summary</h4>
             </center>
          <Paper>
           <ActiveSummary summaryData={summaryData}/>
           </Paper>
         
           
           <Row>
             </Row>
             <Row>
             </Row>
           
           
             <center>
             <h4 style={{color:"white"}} > Default Loan Summary</h4>
             </center>
          <Paper>
           <DefaulterList defaultData={defaultData}/>
           </Paper>
         

         </Grid>
       
          </div>
      )
    }
  }



