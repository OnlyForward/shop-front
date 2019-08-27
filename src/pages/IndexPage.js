import React, { Component, Suspense } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Link, NavLink, Switch, withRouter } from 'react-router-dom'
import ShopPage from '../pages/Products/ShopPage';
import ProductDescription from './Products/SingleProductDescription/ProductDescription';
// import SignUpPage from '../pages/SignUp/SignUp';
import LoginPage from '../pages/Login/LoginPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import Basket from './Users/Basket/Basket';
import functIndexPage from '../pages/Index/IndexPage';
import "../pages/IndexPage.css";
import Logo from '../images/logo.png'
import Loader from '../components/Loader/Loader'
import Profile from '../pages/Users/UserProfiles/UserProfile'
import LazyLoad from '../hoc/asyncComponent';

class IndexPage extends Component {

    state = {
        search: ''
    }

    constructor(props) {
        super(props);
        console.log(props);
        console.log(localStorage.getItem('token'))
    }

    AsyncRegister = LazyLoad(() => import('../pages/SignUp/SignUp'))
    AsyncRegister1 = React.lazy(() => import('../pages/SignUp/SignUp'));

    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate() {
        console.log('came to did update in index');
        console.log(this.props.isAuth)
    }

    searchProducts = (event) => {
        
    }

    searchEdit = (event) => {
        this.setState({ search: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="sticky-top" style={{ backgroundColor: "white", boxShadow: "0 2px 8px black", width: "100%" }}>

                    <nav className="navbar navbar-expand-lg navbar-ligth">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" style={{ outline: "none" }}>
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
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.search} onChange={this.searchEdit.bind(this)} />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.searchProducts.bind(this)}>Search</button>
                                </form>
                                {this.props.isAuth && <NavLink className="btn btn-link" to="/basket"><FontAwesomeIcon icon={faShoppingCart} style={{ color: "blue" }} /></NavLink>}
                                {this.props.isAuth && <NavLink className="btn btn-link" to="/profile"><FontAwesomeIcon icon={faUserCircle} style={{ color: "blue" }} /></NavLink>}
                                {this.props.isAuth || <NavLink to="/auth/signup" className="btn btn-outline-primary nav-link mx-2">Регистрация</NavLink>}
                                {this.props.isAuth || <NavLink to="/auth/login" className="btn btn-outline-primary nav-link">Войти</NavLink>}
                                {this.props.isAuth && <NavLink className="btn btn-outline-primary nav-link mx-2" onClick={this.props.logout}>Выйти</NavLink>}
                            </ul>
                        </div>

                    </nav>
                </div>
                <Switch>
                    <Route path='/' exact component={functIndexPage} />
                    {this.props.isAuth && <Route path='/basket' exact component={Basket} />}

                    <Route path='/products/:id' exact component={ProductDescription} />
                    <Route path='/products' exact component={ShopPage} />
                    {/* LazyLoad(()=>import('../pages/Login/LoginPage')) */}
                    {this.props.isAuth || <Route path='/auth/login' exact render={(props) => <LoginPage {...props} login={this.props.login} />} />}
                    <Suspense fallback={Loader}>
                        {this.props.isAuth || <Route path='/auth/signup' exact component={this.AsyncRegister1} />}
                    </Suspense>

                </Switch>
                {this.props.isAuth &&
                    <Route
                        path="/profile"
                        render={({ match: { url } }) => (
                            <>
                                <Route path={`${url}/`} component={Profile} exact />
                                <Route path={`${url}/orders`} component={Profile} exact />
                            </>
                        )}
                    />
                }
                {/* <Route render={() => <h1>Eror</h1>} /> */}
                {/* </Switch> */}
            </div>
        );
    }
}

export default IndexPage;


