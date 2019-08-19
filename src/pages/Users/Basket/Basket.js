import React, { Component } from 'react';
import axios from '../../../axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Basket.css';

class Basket extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    listOfOrders() {
        let mas = [];

        for (let i = 0; i < 15; i++) {
            mas.push((
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4 mx-righ">
                            <img src="https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg" alt="Responsive image" className="img-fluid"
                                style={{ maxHeight: "120px" }} />
                        </div>

                        <div className="col-7 my-auto">
                            {"некоторое описание продукта"}
                        </div>

                        <div className="col-1 my-auto">
                            <span className="badge badge-primary badge-pill">count {"12"}</span>
                        </div>
                    </div>
                </li>
            ))
        }

        return mas;
    }

    render() {
        return (
            <div className="container-fluid">
                <div class="row">
                    <div class="col" id="main">
                        <div className="container my-3">
                            <ul className="list-group">
                                {this.listOfOrders()}
                            </ul>
                        </div>
                    </div>
                    <div className="offset-3"></div>
                    <div class="col-3 position-fixed offset-9 right-slider" id="sticky-sidebar" style={{ padding: "0px" }}>
                        <div className="container my-5">
                            <form action="makeOrder/" method="post">
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                <input type="submit" value="Заказать" className="btn btn-outline-primary" />
                            </form>
                        </div>
                    </div>
                </div>
                {/* 

                <div className="container mt-5">
                    
                </div> */}
                {/* <!-- <h1 className="display-4 m-3">Цена: </h1> --> */}
            </div>
        );
    }
}

export default Basket;