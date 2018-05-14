import React from 'react';
import {Row, Col, Grid,Table,Panel} from 'react-bootstrap';
import ActionHome from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Paper from 'material-ui/Paper';  
// import { Divider } from 'material-ui';
// import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
// import {Col, Row} from 'react-bootstrap';
import Divider from 'material-ui/Divider/Divider';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';

export default class EachConfirmList extends React.Component{

  
    render(){
        return(
            
<Grid>

<div className="panel panel-primary" style={{marginTop:"5px"}}>
  <div className="panel-heading">
    <h3 className="panel-title" style={{textAlign:"center"}}>Contract ID {this.props.data.cid}</h3>
  </div>
  <div className="panel-body" style={{backgroundColor:"grey"}}>
  <Grid>
  <Row>
            <Col xs={6} style={{background:"white", height:"70px",bottom:"0px"}}>
               <center>
            <h5>{this.props.data.amount} Jc</h5>
            <span>   Loan Coin </span>
              </center>
            
               </Col>
            <Col xs={6} style={{background:"rgb(0, 188, 212)",height:"70px", color:"white"}}>
            <center>
            <h5>
            {this.props.data.ppd} PPHPD
            </h5>
                <span> Interest Rate</span>
             </center>
                </Col>
</Row>
<Row style={{marginTop:"10px"}}>
<Col xs={6} style={{background:"white", height:"70px",bottom:"0px"}}>
               <center>
            <h5>{this.props.data.lenderid} </h5>
            <span>  Lender Name </span>
              </center>
            
               </Col>
            <Col xs={6} style={{background:"rgb(0, 188, 212)",height:"70px", color:"white"}}>
            <center>
            <h5>
            {this.props.data.approveddate} - {this.props.data.duedate}
            </h5>
                <span> Duration</span>
             </center>
                </Col>
    
    </Row>
    <Row style={{marginTop:"10px"}}>
<Col xs={6} style={{background:"white", height:"70px",bottom:"0px"}}>
               <center>
            <h5>{this.props.data.amountpaid} Coin</h5>
            <span>  Repaid Coin </span>
              </center>
            
               </Col>
            <Col xs={6} style={{background:"rgb(0, 188, 212)",height:"70px", color:"white"}}>
            <center>
            <h5>
            {this.props.data.amount - this.props.data.amountpaid} coin
            </h5>
                <span> Balance Coin </span>
             </center>
                </Col>
    
    </Row>
    </Grid>
  </div>

  <div className="panel-footer" style={{backgroundColor:"white", color:"black", height:"50px"}}>
  <Col xs={12}>
    <RaisedButton label="Repay Loan" primary={true} fullWidth={true}/>
  </Col>
 </div>
 
</div>
</Grid>
        
           
        )
    }
}