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

export default class EachPendingWithMeList extends React.Component{

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  applyLoan=()=>{
    // let obj={
    //   regID:this.props.data.regID,
    //   ppd:this.props.data.ppd,
    // }
    // let data="/applyLoan/"+{this.props.data.regID}
    this.context.router.push("/applyLoan/"+ this.props.data.regID+"/"+this.props.data.ppd);
  }

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
            <Col xs={6} style={{background:"white", height:"70px"}}>
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
    </Grid>
  </div>

  <div className="panel-footer" style={{backgroundColor:"white", color:"black", height:"50px"}}>
  <Col xs={4}>
    <RaisedButton label="Approve" primary={true} fullWidth={true}/>
  </Col>
  <Col xs={4} >
  <RaisedButton label="Negotiate" fullWidth={true} 
  backgroundColor="black"
  labelColor="white" />
  </Col>
  <Col xs={4}>
   <RaisedButton label="Reject" secondary={true} fullWidth={true} />
  </Col>
 </div>
 
</div>
</Grid>
        
           
        )
    }
}