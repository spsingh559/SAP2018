

import React from 'react';
import EachPendingWithOtherList from './EachPendingWithOtherList';

export default class PendingWithOther extends React.Component{

    render(){

        let newData= this.props.pendingData.map((data,i)=>{
            return(
                <EachPendingWithOtherList 
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