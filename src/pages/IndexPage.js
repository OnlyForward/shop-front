import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link, NavLink } from 'react-router-dom'
import ShopPage from '../pages/Products/ShopPage';
import ProductDescription from './Products/SingleProductDescription/ProductDescription';
import SignUpPage from '../pages/SignUp/SignUp';
import LoginPage from '../pages/Login/LoginPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Basket from './Users/Basket/Basket';
import functIndexPage from '../pages/Index/IndexPage';
import "../pages/IndexPage.css";
import Logo from '../images/logo.png'
import Profile from '../pages/Users/UserProfiles/UserProfile'
import Footer from '../components/Footer/Footer';

class IndexPage extends Component {

    state = {

    }

    constructor(props) {
        super(props);
    }

    takeOne(id) {
        axios.get().then(response => {
            console.log(response);
        }).catch(err => {

        });
    }

    render() {
        return (
            <div>
                <div className="sticky-top" style={{ backgroundColor: "white", boxShadow: "0 2px 8px black" }}>

                    <nav className="navbar navbar-expand-lg navbar-ligth">
                        <Link className="navbar-brand" to="/"><img src={Logo} style={{ height: "4rem" }} /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/'>Главная</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/products'>Каталог</NavLink>
                                </li>
                            </ul>
                        </div>
                        <ul class="navbar-nav ml-auto">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" list={[1, 2, 3, 4, 5]} aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <NavLink className="btn btn-link" to="/basket"><FontAwesomeIcon icon={faShoppingCart} style={{ color: "blue" }} /></NavLink>
                            <NavLink className="btn btn-link" to="/profile"><FontAwesomeIcon icon={faUserCircle} style={{ color: "blue" }} /></NavLink>
                            <NavLink to="/signup" className="btn btn-outline-primary nav-link mx-2">Регистрация</NavLink>
                            <NavLink to="/login" className="btn btn-outline-primary nav-link">Войти</NavLink>
                            {/* <form action="logout/" method="POST">
                <input type="hidden" name="_csrf" value="<%= csrfToken %>"/>
                <input type="submit" class="btn btn-outline-primary nav-link" value="Выйти"/>
            </form> */}
                        </ul>
                    </nav>
                </div>
                {/* <div className="container-fluid my"> */}
                <Route path='/' exact component={functIndexPage} />
                <Route path='/products/:id' exact component={ProductDescription} />
                <Route path='/products' exact component={ShopPage} />
                <Route path='/login' exact component={LoginPage} />
                <Route path='/signup' exact component={SignUpPage} />
                <Route path='/basket' exact component={Basket} />
                {/* <Route path='/profile' exact component={Profile} /> */}
                <Route
                    
                    path="/profile"
                    render={({ match: { url } }) => (
                        <>
                            <Route path={`${url}/`} component={Profile} exact />
                            <Route path={`${url}/orders`} component={Profile} exact />
                        </>
                    )}
                />


                {/* <button onClick={this.takeOne.bind(this, 1)}></button> */}
                {/* </div> */}
                {/* sticky */}
            </div>
        );
    }
}

export default IndexPage;


