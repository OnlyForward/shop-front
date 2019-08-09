import React, { Component } from 'react';
import '../Products/ShopPage.css';
import axios from '../../axios';
import Product from '../../components/Product/Product';

class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {}
            ]
        }
    }


    componentDidMount() {
        axios.get('/posts').then(response => {
            console.log(response);
            this.setState({
                lists: response.data.slice(0, 15)
            })
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const copyProducts = this.state.lists.map(item => {
            console.log(item);
            return (<Product key={item.id} id={item.id} title={item.title} description={item.body}></Product>)
        })
        return (
            // <div className="container-fluid">
            //     <div className="row">
            //         <div className="col-2 px-1 bg-dark position-fixed" id="sticky-sidebar">
            //             <p>
            //                 {"djaljdlasjl"}
            //                 </p>
            //         </div>
            //         <div className="col grid" id="main">

            //             {copyProducts}
            //         </div>
            //     </div>
            // </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3 px-1 position-fixed" id="sticky-sidebar" style={{borderRight:"6px solid black",height:"100%"}}>
                        {"djsdjalsdal"}
                    </div>
                    <div class="col offset-3 grid" id="main">
                        {copyProducts}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopPage;