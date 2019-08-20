import React, { Component } from 'react';
import '../Products/ShopPage.css';
import axios from '../../axios';
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
            productsLoading: true
        }
    }


    componentDidMount() {
        axios.get('/posts').then(response => {
            console.log(response);
            // this.copyProducts = response.data.slice(0, 15).map(item => {
            //     console.log(item);
            //     return (<Product key={item.id} id={item.id} title={item.title} description={item.body} image={"https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"}></Product>)
            // })
            this.setState({
                lists: response.data.slice(0, 15),
            })

            console.log(this.state);
        }).catch(err => {
            console.log(err);
        })
    }

    componentDidUpdate() {
        if (this.state.productsLoading) {
            console.log('came to update')
            this.copyProducts = this.state.lists.map(item => {
                console.log(item);
                return (<Product key={item.id} id={item.id} title={item.title} description={item.body} image={"https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"}></Product>)
            })
            this.setState({
                productsLoading: false
            })
        }
    }

    sortProducts(event) {
        const name = event.target.innerText;
        event.target.classList.add('active');
        console.log(event.target)
        console.log(name);
        switch (name) {
            case 'Стандарт Бязь':
                break;
            case 'Стандарт Гост':
                break;
            case 'Delux':
                break;
            case 'Премиум':
                break;
            default:
                break;
        }
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 position-fixed left-slider" id="sticky-sidebar">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item list-group-item-action active" value="Вся продукция" onClick={this.sortProducts.bind(this)}>Вся продукция</li>
                            <li className="list-group-item list-group-item-action" value="jdsasakl" onClick={this.sortProducts.bind(this)}>Стандарт Бязь</li>
                            <li className="list-group-item list-group-item-action" style={{ marginRight: "0px" }} onClick={this.sortProducts.bind(this)}>Стандарт Гост</li>
                            <li className="list-group-item list-group-item-action" onClick={this.sortProducts.bind(this)}>Delux</li>
                            <li className="list-group-item list-group-item-action" onClick={this.sortProducts.bind(this)}>Премиум</li>
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