import Signin from "../components/Signin"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { login as LoginStart} from "../redux/modules/auth";
import React from "react";


export default function SigninContainer(){
    const dispatch = useDispatch();
    const login = useCallback((reqData) => {
        dispatch(LoginStart(reqData))
    }, [dispatch])
    return <Signin login= {login}/>
    //  <Signin />
}