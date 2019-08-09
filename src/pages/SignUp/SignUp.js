import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUserCircle, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'

class SignUpPage extends Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }
    

    render(){
        return (
            <div className="container h-100">
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
                                <input type="email" name="mail" id="mail" className="form-control" placeholder="почта"/>
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