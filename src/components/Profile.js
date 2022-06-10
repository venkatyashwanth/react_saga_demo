import React from 'react'
import {useSelector,useDispatch} from 'react-redux';


export default function Profile() {
    const {name} = useSelector((state)=>state)
    const dispatch = useDispatch();
  return (
    <div>
        <h3>User Details</h3>
        <p>Name is {name}</p>
        <input type="button" value="update" onClick={() => dispatch({type: "UPDATE_NAME"})}/>
    </div>
  )
}
