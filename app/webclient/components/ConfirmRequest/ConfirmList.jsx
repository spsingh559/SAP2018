import React from 'react';
import EachConfirmList from './EachConfirmList';

export default class ConfirmList extends React.Component{

    render(){

        let newData= this.props.confirmData.map((data,i)=>{
            return(
                <EachConfirmList 
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