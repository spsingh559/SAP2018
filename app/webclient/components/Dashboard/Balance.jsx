import React from 'react';
import Paper from 'material-ui/Paper';
import {Col, Row} from 'react-bootstrap';
import Divider from 'material-ui/Divider/Divider';
import LinearProgress from 'material-ui/LinearProgress';
export default class Balance extends React.Component{

    render(){

        return(
            <Paper style={{marginTop:"50px", fontSize:"20px"}} zDepth={1} >
           
                {/* <Col xs={6} style={{background:"white"}}>
               
                Balance:
                <Divider />
                10,000 Rs
             </Col> */}
            <Col xs={6} style={{background:"white", height:"100px",bottom:"0px"}}>
               <center>
            <h2>10,000 Jc</h2>

              <LinearProgress mode="indeterminate" />
            <span>   Jio Coin </span>
              </center>s
            
               </Col>
            <Col xs={6} style={{background:"rgb(0, 188, 212)",height:"100px", color:"white"}}>
            <center>
            <h2>
            1 PPHPD
            </h2>
                
            <LinearProgress mode="indeterminate" />
                <span> Interest Rate</span>
             </center>
                </Col>
               
                </Paper>
        )
    }
}