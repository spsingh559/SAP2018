import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Row, Col, Grid,Table} from 'react-bootstrap';
import ActionHome from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ConfirmList from './ConfirmList';

export default class ConfirmRequest extends React.Component{

    state={
        confirmData:[
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

        return(
            <div style={{marginTop:"60px"}}>
             <div style={{backgroundColor:"black", color:"white", height:"40px", padding:"2px 0px 5px 0px"}}>
                <center> <h5> <span onTouchTap={this.goBack}><ActionHome color="white" style={{marginRight:"10px"}} /></span> Confirm Loans Request </h5> </center>
          </div>
          <ConfirmList confirmData={this.state.confirmData}/>
                                        </div>
        )
    }
}