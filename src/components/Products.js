import React, {Component} from 'react'

class Products extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/products')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({products: data});
                console.log(this.state);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-12 text-center">
                    {this.state.products.map(product => {
                            return (
                                <div className="row">
                                    <div className="col-sm-2">
                                        Image
                                    </div>
                                    <div className="col-sm-10">
                                        <h2>{product.name}</h2>
                                        <p>{product.description}</p>
                                    </div>
                                </div>);
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default Products;
