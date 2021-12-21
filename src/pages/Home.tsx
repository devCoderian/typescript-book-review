import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom"
import { logout } from '../redux/modules/auth';
import { RootState } from '../types'

const Home = () => {
    const token = useSelector<RootState, string | null>((state) => state.auth.token);
    const dispatch = useDispatch();
    if(token === null){
        return <Redirect to ="/signin"/>
    }

    return (
        <div>
            Home 
            <button onClick = {click}>logout</button>
        </div>
    )

    function click(){
        dispatch(logout());
    }
}

export default Home
