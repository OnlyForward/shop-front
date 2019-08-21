import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
// import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import ShopPage from '../pages/Products/ShopPage';
import ProductDescription from './Products/SingleProductDescription/ProductDescription';
import SignUpPage from '../pages/SignUp/SignUp';
import LoginPage from '../pages/Login/LoginPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import Basket from './Users/Basket/Basket';
import functIndexPage from '../pages/Index/IndexPage';
import "../pages/IndexPage.css";
import Logo from '../images/logo.png'
import Profile from '../pages/Users/UserProfiles/UserProfile'

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
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" style={{ outline: "none" }}>
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <FontAwesomeIcon icon={faBars} style={{ color: "blue" }} />
                        </button>
                        <Link className="navbar-brand" to="/"><img src={Logo} style={{ height: "4rem" }} alt="Logo" /></Link>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/'>Главная</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/products'>Каталог</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                                {this.props.isAuth || <NavLink className="btn btn-link" to="/auth/basket"><FontAwesomeIcon icon={faShoppingCart} style={{ color: "blue" }} /></NavLink>}
                                {this.props.isAuth || <NavLink className="btn btn-link" to="/profile"><FontAwesomeIcon icon={faUserCircle} style={{ color: "blue" }} /></NavLink>}
                                {this.props.isAuth || <NavLink to="/auth/signup" className="btn btn-outline-primary nav-link mx-2">Регистрация</NavLink>}
                                {this.props.isAuth || <NavLink to="/auth/login" className="btn btn-outline-primary nav-link">Войти</NavLink>}
                                {this.props.isAuth && <button className="btn btn-outline-primary nav-link mx-2" onClick={this.props.logout}>Выйти</button>}
                            </ul>
                        </div>

                    </nav>
                </div>
                <Switch>
                <Route path='/' exact component={functIndexPage} />
                <Route path='/products/:id' exact component={ProductDescription} />
                <Route path='/products' exact component={ShopPage} />
                {this.props.isAuth || <Route path='/auth/login' exact component={LoginPage} />}
                {this.props.isAuth || <Route path='/auth/signup' exact component={SignUpPage} />}
                {this.props.isAuth || <Route path='/auth/basket' exact component={Basket} />}
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

                <Route render ={ ()=><h1>Eror</h1>} />
                </Switch>

                {/* <button onClick={this.takeOne.bind(this, 1)}></button> */}
                {/* </div> */}
                {/* sticky */}
            </div>
        );
    }
}

export default IndexPage;


