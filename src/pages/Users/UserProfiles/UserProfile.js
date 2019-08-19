import React, { Component } from 'react';
import axios from '../../../axios';
import { Link, Route, NavLink, Switch, Router } from 'react-router-dom'
import UserInf from './General/UserInf';
import Orders from './Orders/Orders';

class UserProfile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("loaded")

    }

    changeGeneralData() {

    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    {/* px-1 */}
                    <div class="col-3 position-fixed left-slider" id="sticky-sidebar" style={{ padding: "0px" }}>
                        <ul class="list-group list-group-flush" style={{ width: "100%" }}>
                            <NavLink to={`/profile`} class="list-group-item list-group-item-action active" value="Вся продукция" >Общее</NavLink>
                            <NavLink to={`/profile/orders`} class="list-group-item list-group-item-action" style={{ marginRight: "0px" }} >Заказы</NavLink>
                            <li class="list-group-item list-group-item-action" >Выход</li>
                        </ul>
                    </div>
                    <div class="col offset-3 grid" id="main">
                        <div className="container">
                            {/* <Route
                                exact
                                path="/profile"
                                render={({ match: { url } }) => (
                                    <>
                                        <Route path={`${url}/`} component={Orders} exact />
                                        <Route path={`${url}/orders`} component={UserInf} exact />
                                    </>
                                )}
                            /> */}
                            <Route  path="/profile/orders" component={Orders} exact/>

                            <Route  path="/profile" component={UserInf} exact/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default UserProfile;