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
// import { Row, Col, Grid, Table } from 'react-bootstrap';
export default class EachHistoryList extends React.Component{

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
            
            <tr style={{color:"black"}}>
               
            <td>
               
            {this.props.data.txid}
            
            </td>
            <td>
            {this.props.data.status}
            </td>
            <td>
            {this.props.data.amountpaid}
            </td>
            <td>
            {this.props.data.amount-this.props.data.amountpaid}
            </td>
            
            </tr>
        
           
        )
    }
}