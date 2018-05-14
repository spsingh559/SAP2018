import React from 'react';
import EachPendingWithMeList from './EachPendingWithMeList';

export default class PendingWithMe extends React.Component{

    render(){

        let newData= this.props.pendingData.map((data,i)=>{
            return(
                <EachPendingWithMeList 
                key={i}
                data={data}
                />
            )
        })
        // console.log('inside ')
        return(
<div>
   
    {newData}
   
    </div>            


        )
    }
}