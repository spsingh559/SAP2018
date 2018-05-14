import React from 'react';
import EachLenderList from './EachLenderList';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop:"20px",
    color:"white"
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

export default class LenderListGrid extends React.Component{
   
    render(){

        let newData= this.props.lenderData.map((data,i)=>{
            return(
                <EachLenderList 
                key={i}
                data={data}
                />
            )
        })
        console.log('inside ')
        return(
<div>
   
    {newData}
   
    </div>            


        )
    }
}