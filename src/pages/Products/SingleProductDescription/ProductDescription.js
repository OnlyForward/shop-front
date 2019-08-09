import React, { Component } from 'react';
import axios from '../../../axios';
import { withRouter } from 'react-router-dom';

class ProductDescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {

            }
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

    render() {
        let copyData = {};
        Object.assign(copyData, this.state.product);
        return (
            <div>
                { copyData.title }
            </div>
        )
    }
}

export default withRouter(ProductDescription)