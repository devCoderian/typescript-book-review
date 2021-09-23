import { Row, Col, Input, Button} from "antd"
import styles from "./Signin.module.css"
import { useRef } from "react";
import { LoginReqType } from '../types'
interface SigninProps{
    login: (reaData: LoginReqType) => void;
}
const Signin: React.FC<SigninProps> = ({login}) =>{

    const emailRef = useRef<Input>(null);
    const passwordRef = useRef<Input>(null);
    return (
     <Row align = "middle" className = {styles.signin_row}>
         <Col span = {24} >
                    <Row>
                        <Col span = {12}></Col>
                        <Col span = {12}>
                            <div>My Books</div>
                            <div>Please Note Your Opinion</div>
                            <div />
                            <div>Email
                                <span>*</span>
                            </div>
                            <div>
                                <Input
                                placeholder = "Email"
                                autoComplete = "email"
                                name = "email" 
                                ref = {emailRef} />
                            </div>
                            <div>Password
                                <span>*</span>
                            </div>
                            <div>
                                <Input
                                type = "password"
                                autoComplete = "current-password"
                                name = "password" 
                                ref = {passwordRef} />
                            </div>
                            <div>
                                <Button size = "large" onClick = {click}>Sign in</Button>
                            </div>
                        </Col>
                    </Row>
         </Col>
     </Row>
    );
    function click(){
        const email = emailRef.current!.state.value; //null을 제외한 인풋
        const password = passwordRef.current!.state.value;

        login({email, password});
    }
}

export default Signin