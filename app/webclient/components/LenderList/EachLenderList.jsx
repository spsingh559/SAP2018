// import React from 'react';
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';

// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     display: 'flex',
//     flexWrap: 'nowrap',
//     overflowX: 'auto',
//   },
//   titleStyle: {
//     color: "white",
   
//   },
// };


// export default class EachLenderList extends React.Component{
//     // regID:"L12347",
//     // ppd:"3 pphpd",
//     // balance:1000,
//     // rating:5
//     state = {
//         open: false,
//       };
    
//       handleOpen = () => {
//         this.setState({open: true});
//       };
    
//       handleClose = () => {
//         this.setState({open: false});
//       };

//     showDetail=()=>{
//         this.setState({open: true});
//     }
//     render(){
// let title=[
//     <div   onTouchTap={this.showDetail}>
//     <p>
//     {this.props.data.regID + " - "+ this.props.data.balance+" - Rate -"+ this.props.data.ppd}
//     </p>
   
//         </div>
// ]
// const actions = [
//     <FlatButton
//       label="Cancel"
//       primary={true}
//       onClick={this.handleClose}
//     />,
//     <FlatButton
//       label="Submit"
//       primary={true}
//       disabled={true}
//       onClick={this.handleClose}
//     />,
//   ];

//         return(
//             <GridTile

//             style={{width:"300px"}}
          
//           title={title}
//           actionIcon={<p>{this.props.data.rating}</p>}
//           titleStyle={styles.titleStyle}
//           titleBackground="black"
//         >
//         <Dialog
//           title="Dialog With Actions"
//           actions={actions}
//           modal={true}
//           open={this.state.open}
//         >
//           Only actions can close this dialog.
//         </Dialog>
//          <img src=" https://www.xing.com/assets/frontend_minified/img/users/nobody_m.1024x1024.jpg">
         
//          </img>
         
//         </GridTile>
//         )
//     }
// }
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

export default class EachLenderList extends React.Component{

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
            


<div className="panel panel-primary" style={{marginTop:"5px"}}>
  <div className="panel-heading">
    <h3 className="panel-title" style={{textAlign:"center"}}>Lender Name : {this.props.data.regID}</h3>
  </div>
  <div className="panel-body" style={{backgroundColor:"grey"}}>
  <Grid>
  <Row>
            <Col xs={6} style={{background:"white", height:"70px",bottom:"0px"}}>
               <center>
            <h5>{this.props.data.balance} Jc</h5>

              <LinearProgress mode="indeterminate" />
            <span>   Jio Coin </span>
              </center>
            
               </Col>
            <Col xs={6} style={{background:"rgb(0, 188, 212)",height:"70px", color:"white"}}>
            <center>
            <h5>
            {this.props.data.ppd} PPHPD
            </h5>
                
            <LinearProgress mode="indeterminate" />
                <span> Interest Rate</span>
             </center>
                </Col>
</Row>
<Row style={{marginTop:"10px"}}>
<Col xs={6} style={{background:"white", height:"70px",bottom:"0px"}}>
               <center>
            <h5>{this.props.data.rating} Star</h5>

              <LinearProgress mode="indeterminate" />
            <span>  Rating </span>
              </center>
            
               </Col>
            <Col xs={6} style={{background:"rgb(0, 188, 212)",height:"70px", color:"white"}}>
            <center>
            <h5>
            {this.props.data.ranking}
            </h5>
                
            <LinearProgress mode="indeterminate" />
                <span> Lender Ranking</span>
             </center>
                </Col>
    </Row>
    </Grid>
  </div>
  <div className="panel-footer" style={{backgroundColor:"black", textAlign:"center", color:"white", fontSize:"14pt"}} onTouchTap={this.applyLoan}>
  Apply for Loan</div>
</div>
            
       
           
        )
    }
}