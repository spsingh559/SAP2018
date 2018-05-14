import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Row, Col, Grid, Table } from 'react-bootstrap';
import ActionHome from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import ShowHistroy from './ShowHistroy';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};


export default class TxHistory extends React.Component {
    state={
        contractID:'',
        historyData:[],
        viewHistoryStatus:false
    }

    handleChangeContract=(event, index, value) => this.setState({contractID:value});

    // state={
    
    // }

    showHistroy=()=>{
        const data=[
            {   txid:"Tx12391082",
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
          {txid:"Tx12391082",
            cid:"sdfkl12315",
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
            timeStamp:"14th May, 2018 at 10:32:15"
          },
          {txid:"Tx12391082",
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
          {txid:"Tx12391082",
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

        this.setState({historyData:data,viewHistoryStatus:true});
        
    }

    goBack = () => {
        let retrievedUserDetails = JSON.parse(sessionStorage.getItem('userLoginDetails'));
        if (retrievedUserDetails.roleType == "Lender") {
            this.context.router.push('/');
        } else if (retrievedUserDetails.roleType == "Borrower") {
            this.context.router.push('/borrower');
        } else if (retrievedUserDetails.roleType == "Auditor") {
            this.context.router.push('/audit');
        } else {
            this.context.router.push('/login');
        }

    }

    render() {
        let history;

        if(this.state.viewHistoryStatus==true){
           history=[
            <ShowHistroy historyData={this.state.historyData}/>
           ]
        }else{
            history=null;
        }
        return (
            <div style={{ marginTop: "60px" }}>
                
                <div style={{backgroundColor:"black", color:"white", height:"70px", padding:"10px 5px"}}>
                <center> <h5> <span onTouchTap={this.goBack}><ActionHome color="white" style={{marginRight:"10px"}} /></span>Transaction History </h5> </center>
          </div>

<Col xs={8}>
            <SelectField name="Select Contract"
           hintText="Contract Name"
          floatingLabelText="Contract Name"
          value={this.state.contractID}
          onChange={this.handleChangeContract}
          fullWidth={true}
        >
          <MenuItem value="CR12345" primaryText="CR12345" />
          <MenuItem value="CR12346" primaryText="CR12346" />
          <MenuItem value="CR1234567" primaryText="CR1234567" />      
        </SelectField>
        </Col>
        <Col xs={4} style={{marginTop:"30px"}}>
        <RaisedButton label="Show History" primary={true} onTouchTap={this.showHistroy} />
        </Col>
       <Grid>
          {history}
           </Grid>
             </div>
        )
    }
}