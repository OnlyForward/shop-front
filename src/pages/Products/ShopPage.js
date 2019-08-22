import React, { Component } from 'react';
import '../Products/ShopPage.css';
import axios from '../../axios';
import { NavLink } from 'react-router-dom';
import Product from '../../components/Product/Product';
import Loader from '../../components/Loader/Loader';

class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.copyProducts = [];
        this.state = {
            lists: [
                {}
            ],
            currentSort: '',
            productsLoading: true,
            element: 0
        }
    }


    componentDidMount() {
        axios.get('/posts').then(response => {
            console.log(response);
            // this.copyProducts = response.data.slice(0, 15).map(item => {
            //     console.log(item);
            //     return (<Product key={item.id} id={item.id} title={item.title} description={item.body} image={"https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"}></Product>)
            // })
            let data = (response.data.slice(0, 15)).map((item, index) => {
                item.sortElement = index % 2 === 0 ? 'Стандарт Гост' : 'Премиум'
                return item;
            })
            this.setState({
                lists: data,
            })

            console.log(this.state);
        }).catch(err => {
            console.log(err);
        })
    }

    componentDidUpdate() {
        if (this.state.productsLoading) {
            console.log('came to update')
            this.copyProducts = this.state.lists.map((item, index) => {
                console.log(item);
                return (<Product key={item.id} id={item.id} title={item.title} description={item.body} image={"https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"}></Product>)
            })
            this.setState({
                productsLoading: false
            })
        }
    }

    prepapareProducts = ()=>{
        this.copyProducts = this.state.lists.map((item, index) => {
            console.log(item);
            return (<Product key={item.id} id={item.id} title={item.title} description={item.body} image={"https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"}></Product>)
        })

        return this.copyProducts;
    }

    sortProducts(event) {
        const name = event.target.innerText;
        // event.target.classList.add('active');
        console.log(event);
        console.log(name);
        switch (name) {
            case 'Стандарт Бязь':
                this.setState({ element: 1 });
                break;
            case 'Стандарт Гост':
                this.copyProducts = this.state.lists.map((item, index) => {
                    console.log(item);
                    if (item.sortElement === 'Стандарт Гост') {
                        return (<Product key={item.id} id={item.id} title={item.title} description={item.body} image={"https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"}></Product>)
                    }
                    return null;
                })
                this.setState({ element: 2 });
                break;
            case 'Delux':
                this.setState({ element: 3 });
                break;
            case 'Премиум':
                this.copyProducts = this.state.lists.map((item, index) => {
                    console.log(item);
                    if (item.sortElement === 'Премиум') {
                        return (<Product key={item.id} id={item.id} title={item.title} description={item.body} image={"https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"}></Product>)
                    }
                    return null;
                })
                this.setState({ element: 4 });
                break;
            default:
                this.copyProducts = this.state.lists.map((item, index) => {
                    console.log(item);
                    return (<Product key={item.id} id={item.id} title={item.title} description={item.body} image={"https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"}></Product>)
                })
                this.setState({ element: 0 });
                break;
        }
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 position-fixed left-slider" id="sticky-sidebar">
                        <ul className="list-group list-group-flush">
                            <li className={this.state.element == 0 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} value="Вся продукция" onClick={this.sortProducts.bind(this)}>Вся продукция</li>
                            <li className={this.state.element == 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} value="Стадрт бязь" onClick={this.sortProducts.bind(this)}>Стандарт Бязь</li>
                            <li className={this.state.element == 2 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} value="Стандарт Гост" style={{ marginRight: "0px" }} onClick={this.sortProducts.bind(this)}>Стандарт Гост</li>
                            <li className={this.state.element == 3 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} value="Delux" onClick={this.sortProducts.bind(this)}>Delux</li>
                            <li className={this.state.element == 4 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} value="Премиум" onClick={this.sortProducts.bind(this)}>Премиум</li>
                        </ul>
                    </div>
                    <div className="col offset-3 grid" id="main">
                        {this.state.productsLoading && (
                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Loader />
                            </div>
                        )}
                        {this.state.productsLoading || this.copyProducts}

                    </div>
                </div>
            </div>
        );
    }
}

export default ShopPage;