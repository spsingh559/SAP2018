import React from 'react';
import {Row, Col, Grid,Table} from 'react-bootstrap';
import ActionHome from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Paper from 'material-ui/Paper';  

import LenderListGrid from './LenderListGrid';
import BorrowerListGrid from './BorrowerListGrid';

const lenderData=[
    {
        regID:"L12344",
        ppd:1,
        balance:100000,
        rating:4,
        ranking:100
    },
    {
        regID:"L12345",
        ppd:2,
        balance:10000,
        rating:3,
        ranking:378

    },
    {
        regID:"L12346",
        ppd:3,
        balance:1000000,
        rating:2,
        ranking:500
    },
    {
        regID:"L12347",
        ppd:3,
        balance:1000,
        rating:5,
        ranking:1
    }
]

export default class LenderList extends React.Component{

    state={
        borrowerData:[
            {
                cid:"sdfkl12312",
                borrowerid:"BR12423",
                lenderid:"L2342343",
                requestdate:"1st March, 2018",
                duedate:"17th Oct, 2018",
                approveddate:"1st May, 2018",
                amount:10000,
                status:"Pending",
                totalamount:100090,
                amountpaid:4500,
                ppd:1,
                timeStamp:"14th May, 2018 at 10:32:15",
          },
          {
            cid:"sdfkl12315",
            borrowerid:"BR12423",
            lenderid:"L2342343",
            requestdate:"1st March, 2018",
            duedate:"17th Oct, 2018",
            approveddate:"1st May, 2018",
            amount:10000,
            status:"Confirmed",
            totalamount:100090,
            amountpaid:4500,
            ppd:1,
            timeStamp:"14th May, 2018 at 10:32:15"
          },
          {
            cid:"sdfkl12312",
            borrowerid:"BR12423",
            lenderid:"L2342343",
            requestdate:"1st March, 2018",
            duedate:"17th Oct, 2018",
            approveddate:"1st May, 2018",
            amount:10000,
            status:"Confirmed",
            totalamount:100090,
            amountpaid:4500,
            ppd:1,
            timeStamp:"14th May, 2018 at 10:32:15"
          },
          {
            cid:"sdfkl12312",
            borrowerid:"BR12423",
            lenderid:"L2342343",
            requestdate:"1st March, 2018",
            duedate:"17th Oct, 2018",
            approveddate:"1st May, 2018",
            amount:10000,
            status:"Confirmed",
            totalamount:100090,
            amountpaid:4500,
            ppd:1,
            timeStamp:"14th May, 2018 at 10:32:15"
          }
          ]
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

    render(){
        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
        if(retrievedUserDetails.roleType=="Lender"){
        return(
                
            <div style={{marginTop:"60px"}}>
             <div style={{backgroundColor:"black", color:"white", height:"70px", padding:"10px 5px"}}>
                <center> <h3> <span onTouchTap={this.goBack}><ActionHome color="white" style={{marginRight:"10px"}} /></span>Borrower Pool  </h3> </center>
          </div>
           <Grid>
               <BorrowerListGrid borrowerData={this.state.borrowerData} />
               </Grid>
                </div>
                
        )
    }
    else{
        return(
            <div style={{marginTop:"60px"}}>
            <div style={{backgroundColor:"black", color:"white", height:"70px", padding:"10px 5px"}}>
               <center> <h3> <span onTouchTap={this.goBack}><ActionHome color="white" style={{marginRight:"10px"}} /></span>Lenders Pool  </h3> </center>
         </div>
          <Grid>
              <LenderListGrid lenderData={lenderData} />
              </Grid>
               </div>
           
                
        )
    }
}
}