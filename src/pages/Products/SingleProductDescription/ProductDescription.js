import React, { Component } from 'react';
import axios from '../../../axios';
import { withRouter } from 'react-router-dom';

class ProductDescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {

            },
            count: 1,
            price: 281928,
            totalPrice: 281928
        }
    }

    componentDidMount() {
        axios.get(`posts/${this.props.match.params.id}`).then(response => {
            console.log(response);
            this.setState({
                product: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    IncrementItem = () => {
        this.setState({ count: this.state.count + 1, totalPrice: this.state.totalPrice + this.state.price });
    }

    DecreaseItem = () => {
        if (this.state.count > 1) {
            this.setState({ count: this.state.count - 1, totalPrice: this.state.totalPrice - this.state.price });
        }
    }
    //save or not for non auth user ?

    addToBacket = () => {
        // localStorage.removeItem("backet")
        console.log('we made order');
        let backet = localStorage.getItem("backet");
        if (!backet) {
            backet = [];
            backet.push({
                id: this.props.match.params.id,
                count: 1
            });
        } else {
            backet = JSON.parse(backet);
            let index = backet.findIndex((element) => element.id == this.props.match.params.id);
            console.log(index);
            if (index > -1) {
                backet[index].count += 1;
            } else {
                backet.push({
                    id: this.props.match.params.id,
                    count: 1
                });
            }
        }
        localStorage.setItem("backet", JSON.stringify(backet));
        // axios.post(this.props.match.url,{
        //     userId: 
        // })
        let f = localStorage.getItem("backet");
        console.log(f);
    }

    render() {
        let copyData = {};
        Object.assign(copyData, this.state.product);
        return (
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col">
                        <img src="https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg" style={{ width: "40rem", height: "30rem" }} alt="Product" />

                    </div>
                    <div className="col d-flex flex-column" style={{ fontSize: "16pt" }}>
                        <div className="raw p-3">
                            Товар: Название товара.
                        </div>
                        <div className="raw p-3">
                            цена: {this.state.price}
                        </div>
                        <div className="raw p-3">
                            Общая сумма: {this.state.totalPrice}
                        </div>
                        <div className="raw p-3">
                            Количество {this.state.count}
                            <button className="btn btn-outline-primary" onClick={this.IncrementItem}>
                                +
                        </button>

                            <button className="btn btn-outline-primary" onClick={this.DecreaseItem}>
                                -
                        </button>
                        </div>
                        <div className="raw mt-auto">
                            <button className="btn btn-outline-success p-2" style={{ borderRadius: "2rem", width: "30%" }} onClick={this.addToBacket.bind(this)}>В корзину</button>
                        </div>
                    </div>
                </div>
                <div className="container my-4">
                    <h1>Описание</h1>
                    {copyData.title}
                </div>
            </div>
        )
    }
}

export default withRouter(ProductDescription)