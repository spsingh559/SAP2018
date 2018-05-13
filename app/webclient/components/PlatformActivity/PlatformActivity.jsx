import React from 'react';
import {Row, Col, Grid,Table} from 'react-bootstrap';
import ActionHome from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Paper from 'material-ui/Paper';  
export default class PlatformActivity extends React.Component{

    state={
        platFormData:[
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

    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
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
        let arr=[];
        this.state.platFormData.forEach((data,i)=>{
            arr.push(<tr>
                <td>
                             {data.lenderid}
                         </td>
                         <td>
                         {data.borrowerid}
                         </td>
                         <td>
                             {data.amount}
                         </td>
                         <td>
                             {data.ppd} pphpd
                         </td>
                         <td>
                             {data.timeStamp} 
                         </td>
                    </tr>)
        })

        return(
            <div style={{marginTop:"60px"}}>
          <div style={{backgroundColor:"black", color:"white", height:"70px", padding:"10px 5px"}}>
                <center> <h3> <span onTouchTap={this.goBack}><ActionHome color="white" style={{marginRight:"10px"}} /></span>Platfrom Activity </h3> </center>
          </div>
            
         
               <Col xs={12}>
               <Paper zDepth={1}>
               <Table striped bordered condensed hover style={{marginTop:"20px"}}>
            <thead style={{backgroundColor:"rgb(0, 188, 212)", color:"white"}}>
              <tr>
                <th>Lender ID</th>
                <th>Borrower ID</th>
                <th>Amount</th>
                <th> Interest Rate</th>
                <th> Time</th>
              </tr>
            </thead>
            <tbody>
            {arr}
            </tbody>
          </Table>
          </Paper>

               
               </Col>
              

                </div>
        )
    }
}