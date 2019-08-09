import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Link } from 'react-router-dom'
import ShopPage from '../pages/Products/ShopPage';
import ProductDescription from './Products/SingleProductDescription/ProductDescription';
import  SignUpPage from '../pages/SignUp/SignUp';
import LoginPage from '../pages/Login/LoginPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Basket from './Users/Basket/Basket';
import functIndexPage from '../pages/Index/IndexPage'

class IndexPage extends Component {

    state = {

    }

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // axios.get().then(response => {
        //     console.log(response);
        // }).catch(err => {
        //     console.log(err);
        // })
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
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/products'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/" tabIndex="-1">Link to another</Link>
                            </li>
                        </ul>
                    </div>
                    <ul class="navbar-nav ml-auto">
                    <Link className="btn btn-link" to="/basket"><FontAwesomeIcon icon={faShoppingCart} style={{color:"white"}}/></Link>
            <Link to="/signup" className="btn btn-outline-primary nav-link">Зарегестрироваться</Link>
            <Link to="/login" className="btn btn-outline-primary nav-link">Войти</Link>
            {/* <form action="logout/" method="POST">
                <input type="hidden" name="_csrf" value="<%= csrfToken %>">
                <input type="submit" class="btn btn-outline-primary nav-link" value="Выйти">
            </form> */}
        </ul>
                </nav>
                <div className="container-100">
                    <Route path='/' exact component={functIndexPage} />
                    <Route path='/products/:id' exact component={ProductDescription} />
                    <Route path='/products' exact component={ShopPage} />
                    <Route path='/login' exact component={LoginPage} />
                    <Route path='/signup' exact component={SignUpPage} />
                    <Route path='/basket' exact component={Basket} />


                    {/* <button onClick={this.takeOne.bind(this, 1)}></button> */}
                </div>
            </div>
        );
    }
}

export default IndexPage;