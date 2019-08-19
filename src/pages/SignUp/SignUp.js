import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUserCircle, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { required, length, email } from '../../utils/validator';
import '../SignUp/SignUp.css';
import axios from 'axios';
class SignUpPage extends Component{

    state = {
        signupForm: {
          email: {
            value: '',
            valid: false,
            touched: false,
            validators: [required, email]
          },
          password: {
            value: '',
            valid: false,
            touched: false,
            validators: [required, length({ min: 5 })]
          },
          name: {
            value: '',
            valid: false,
            touched: false,
            validators: [required]
          },
          formIsValid: false
        }
      };

    constructor(props){
        super(props);
    }


    signupHandler = (event, authData) => {
        event.preventDefault();
        this.setState({ authLoading: true });
        fetch('http://localhost:8080/auth/signup', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: authData.signupForm.email.value,
            password: authData.signupForm.password.value,
            login: authData.signupForm.name.value
          })
        })
          .then(res => {
            if (res.status === 422) {
              throw new Error(
                "Validation failed. Make sure the email address isn't used yet!"
              );
            }
            if (res.status !== 200 && res.status !== 201) {
              console.log('Error!');
              throw new Error('Creating a user failed!');
            }
            return res.json();
          })
          .then(resData => {
            console.log(resData);
            this.setState({ isAuth: false, authLoading: false });
            this.props.history.replace('/');
          })
          .catch(err => {
            console.log(err);
            this.setState({
              isAuth: false,
              authLoading: false,
              error: err
            });
          });
      };

    componentDidMount(){
        
    }
    

    render(){
        return (
            <div className="container-fluid" style={{height:"75vh"}}>
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-12">
                <div className="container border rounded p-4" style={{maxWidth: "400px;"}}>
                    <form action="regestration/" method="post">
        
                        <h3 className="h3 text-center my-4">Регистрация</h3>
        
                        <div className="form-group">
        
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon={faPaperPlane}/>
                                        {/* <i className="fas fa-paper-plane"></i> */}
                                        </span>
                                </div>
                                <input type="email" name="email" id="mail" className="form-control" placeholder="почта"/>
                            </div>
        
                            <div className="input-group my-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUserCircle}/>
                                        {/* <i className="fas fa-user-circle"></i> */}
                                        </span>
                                </div>
                                <input type="text" name="login" id="" className="form-control" placeholder="логин"/>
                            </div>
        
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUnlockAlt}/>
                                        {/* <i className="fas fa-unlock-alt"></i> */}
                                        </span>
                                </div>
                                <input type="password" name="password1" id="" className="form-control" placeholder="пароль"/>
                            </div>
        
                            <div className="input-group my-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUnlockAlt}/>
                                        {/* <i className="fas fa-unlock-alt"></i> */}
                                        </span>
                                </div>
                                <input type="password" name="password2" id="" className="form-control" placeholder="пароль"/>
                            </div>
        
                        </div>
                        <input type="hidden" name="_csrf" value="<%= csrfToken %>"/>
                        <input type="submit" className="btn btn-info btn-block" value="Зарегестрироваться"/>
                    </form>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default SignUpPage;