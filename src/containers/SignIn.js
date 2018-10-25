import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGithubSignIn,
    userGoogleSignIn,
    userSignIn,
    userTwitterSignIn
} from "actions/Auth";
import {ON_SHOW_LOADER, SIGNIN_USER_SUCCESS, SIGNIN_ERROR, HIDE_MESSAGE} from '../constants/ActionTypes';
import {validateState, validateEmail} from '../util/Validations';
import {SignUp} from '../constants/ApiEndPoints';
import axios from 'axios';
import {Alert} from 'reactstrap';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidUpdate() {
        if (this.props.showMessage) {
            setTimeout(() => {
                window.alert(this.props.alertMessage)
                this.props.hideMessage()    
            }, 100)
        }
        if (this.props.authUser !== null) {
            this.props.history.push('/');
        }
    }
    getValidationObject = () => {
        const {email, password} = this.state;
        return {
            "Email": validateEmail(email),
            "Password": password.length > 0
        }
    }
    validateAndCallService = () => {

        const validatedObj = this.getValidationObject();
        const error = validateState(validatedObj);
        const {email, password} = this.state;
        error == "" ? this.props.userSignIn(email, password) : window.alert(error);
    }

    render() {
        const {
            email,
            password
        } = this.state;
        const {showMessage, loader, alertMessage} = this.props;
        return (
            <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                <div className="app-login-main-content">
                    <div className="app-logo-content d-flex align-items-center justify-content-center" style={{backgroundColor: 'primary'}}>
                        <Link className="logo-lg" to="/" title="Jambo">
                            <img src="https://media.licdn.com/dms/image/C510BAQHKDV_VgJa-Lg/company-logo_200_200/0?e=2159024400&v=beta&t=vJ9TQeEwusMDrc6nCrfeQ2d_EEX0ez4VToJGC9NfrOs" alt="jambo" title="jambo"/>
                        </Link>
                    </div>

                    <div className="app-login-content">
                        <div className="app-login-header mb-4">
                            <h1><IntlMessages id="appModule.email"/></h1>
                        </div>

                        <div className="app-login-form">
                            <form>
                                <fieldset>
                                    <TextField
                                        label={<IntlMessages id="appModule.email"/>}
                                        fullWidth
                                        onChange={(event) => this.setState({email: event.target.value})}
                                        defaultValue={email}
                                        margin="normal"
                                        className="mt-1 my-sm-3"
                                    />
                                    <TextField
                                        type="password"
                                        label={<IntlMessages id="appModule.password"/>}
                                        fullWidth
                                        onChange={(event) => this.setState({password: event.target.value})}
                                        defaultValue={password}
                                        margin="normal"
                                        className="mt-1 my-sm-3"
                                    />

                                    <div className="mb-3 d-flex align-items-center justify-content-between">
                                        <Button onClick={() => {
                                            this.validateAndCallService()
                                        }} variant="raised" color='primary'>
                                            <IntlMessages id="appModule.signIn"/>
                                        </Button>

                                        <Link to="/signup">
                                            <IntlMessages id="signIn.signUp"/>
                                        </Link>
                                    </div>

                                </fieldset>
                            </form>
                        </div>
                    </div>

                </div>
                {
                    loader &&
                    <div className="loader-view">
                        <CircularProgress/>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {loader, alertMessage, showMessage, authUser} = auth;
    return {loader, alertMessage, showMessage, authUser}
};
const mapDispatchToProps = (dispatch) => {
    return {
        userSignIn: (email, password) => {
            dispatch({type: ON_SHOW_LOADER})
            axios.post(SignUp, {
                'userName': email,
                'password': password
            })
            .then((response) => {
                const {id} = response.data;
                debugger;
                localStorage.setItem('user_id', id);
                dispatch({type: SIGNIN_USER_SUCCESS, payload: id})
            })
            .catch((error) => {
                console.log(error)
                dispatch({type: SIGNIN_ERROR})
            }) 
        } ,

        hideMessage: () => {
            dispatch({type: HIDE_MESSAGE})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
/*    userSignIn,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn
*/
