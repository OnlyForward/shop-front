import React, { Component } from 'react';
import axios from '../../../axios';
import 'bootstrap/dist/css/bootstrap.css';

class Basket extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return (
            <div className="container-flexible">
            <div className="container mt-5">
        <ul className="list-group">


            <li className="list-group-item">
                <div className="row">
                    <div className="col-7">
                        {/* <%= item.product.description %> */}
                    </div>
                    <div className="col-md-4 mx-righ">
                        {/* <img src="<%= item.product.imageUrl %>" alt="Responsive image" className="img-fluid"
                            style="max-height: 120px"> */}
                    </div>
                    <div className="col-1">
                        <span className="badge badge-primary badge-pill">{"count"}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    {/* <!-- <h1 className="display-4 m-3">Цена: </h1> --> */}
    <div className="container my-5">
        <form action="makeOrder/" method="post">
            <input type="hidden" name="_csrf" value="<%= csrfToken %>"/>
            <input type="submit" value="Заказать" className="btn btn-outline-primary"/>
        </form>
    </div>
    </div>
        );
    }
}

export default Basket;