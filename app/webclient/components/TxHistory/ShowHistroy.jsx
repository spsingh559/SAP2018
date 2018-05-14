import React from 'react';
import EachHistoryList from './EachHistoryList';
import {Row, Col, Grid,Table,Panel} from 'react-bootstrap';
export default class ShowHistroy extends React.Component{

    render(){
let obj={
    approveddate:"",
    duedate:""
}
        let newData= this.props.historyData.map((data,i)=>{
            
            if(data.status=="Confirmed"){
                obj.approveddate=data.approveddate;
                obj.duedate=data.duedate;
            }
            return(
                <EachHistoryList 
                key={i}
                data={data}
                />
            )
        })

        console.log(this.props.historyData);
         let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
         let lenderInfo;
         if(retrievedUserDetails.roleType=="Lender"){
            lenderInfo=[
                <center>
                <h5>{this.props.historyData[0].borrowerid} </h5>
                <span>  Borrower Name </span>
                  </center>]
                  
            
         }else{
            lenderInfo=[
                <center>
                <h5>{this.props.historyData[0].lenderid} </h5>
                <span>  Lender Name </span>
                  </center>
            ]
         }
        return(
<div>
<div className="panel panel-primary" style={{marginTop:"90px"}}>
  <div className="panel-heading">
    <h3 className="panel-title" style={{textAlign:"center"}}>Contract ID {this.props.historyData[0].cid}</h3>
  </div>
  <div className="panel-body" style={{backgroundColor:"grey"}}>
  <Grid>
  <Row>
            <Col xs={6} style={{background:"white", height:"70px"}}>
               <center>
            <h5>{this.props.historyData[0].amount} Jc</h5>
            <span>   Loan Coin </span>
              </center>
            
               </Col>
            <Col xs={6} style={{background:"rgb(0, 188, 212)",height:"70px", color:"white"}}>
            <center>
            <h5>
            {this.props.historyData[0].ppd} PPHPD
            </h5>
                <span> Interest Rate</span>
             </center>
                </Col>
</Row>
<Row style={{marginTop:"10px"}}>
<Col xs={6} style={{background:"white", height:"70px",bottom:"0px"}}>

              {lenderInfo}
            
               </Col>
            <Col xs={6} style={{background:"rgb(0, 188, 212)",height:"70px", color:"white"}}>
            <center>
            <h5>
            {obj.approveddate} - {obj.duedate}
            </h5>
                <span> Duration</span>
             </center>
                </Col>
    </Row>
    <Row style={{marginTop:"10px"}}>
    <Col xs={6} style={{background:"white",height:"70px", color:"color"}}>
            <center>
            <h5>
            {this.props.historyData[this.props.historyData.length-1].amount - this.props.historyData[this.props.historyData.length-1].amountpaid} coin
            </h5>
                <span> Balance Coin </span>
             </center>
                </Col>
                <Col xs={6} style={{background:"rgb(0, 188, 212)",height:"70px", color:"white"}}>
            <center>
            <h5>
            {this.props.historyData[this.props.historyData.length-1].status} 
            </h5>
                <span> Status </span>
             </center>
                </Col>

                </Row>
    </Grid>

  </div>
  <div className="panel-footer" style={{ color:"white", height:"auto",backgroundColor:"grey"}} >
  <Table striped bordered condensed hover style={{marginTop:"5px"}}>
            <thead style={{backgroundColor:"rgb(0, 188, 212)", color:"white"}}>
              <tr>
               
                <th>Ref ID</th>
                <th>Status</th>
                <th>Paid Amount</th>
                <th>Loan Balance</th>
              </tr>
            </thead>
            <tbody>
              {newData}
            </tbody>
          </Table>
</div>
 
</div>

   
    </div>            


        )
    }
}

