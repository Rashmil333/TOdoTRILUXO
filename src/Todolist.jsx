import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Todolist= (props) =>{
	return(<li class="todoli"><button class="crossbutton" onClick={()=>{props.onSelect(props.id)}}><DeleteIcon style={{marginLeft:'-7px',marginTop:'2px'}}/></button><span style={{marginLeft:'10px'}}>{props.text}</span></li>);
}

export default Todolist;