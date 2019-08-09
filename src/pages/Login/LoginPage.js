import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="container border rounded p-4" style={{maxWidth:"400px;"}}>
                            <form action="login/" method="post">
                                <h3 className="h3 text-center my-4">Войти</h3>

                                <div className="form-group">

                                    <div className="input-group my-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUserCircle} />
                                                {/* <i className="fas fa-user-circle"></i> */}
                                                </span>
                                        </div>
                                        <input type="text" name="email" id="" className="form-control" placeholder="логин" />
                                    </div>

                                    <div className="input-group">
                                        <div class="input-group-prepend">
                                            <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUnlockAlt} />
                                                {/* <i class="fas fa-unlock-alt"></i> */}
                                                </span>
                                        </div>
                                        <input type="password" name="password" id="" class="form-control" placeholder="пароль" />
                                    </div>

                                </div>
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                <input type="submit" className="btn btn-info btn-block" value="Войти" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default LoginPage;