import React from 'react'
import { useSelector } from 'react-redux'
import SigninContainer from '../containers/SigninContainer'
import { RootState } from '../types'
import { Redirect } from "react-router-dom"
const Signin = () => {

    const token = useSelector<RootState, string | null>((state) => state.auth.token);
    
    if(token !== null){
        return <Redirect to ="/"/>
    }
    return <SigninContainer />

}

export default Signin
