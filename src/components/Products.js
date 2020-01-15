import React, {Component} from 'react'

class Products extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            products: [{id: 0, name: '', price: 0, description: ''}],
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
                <div className="h1">Products</div>
                <div className="col-sm-12 text-center">
                    {this.state.products.map(product => {
                            const img = "http://localhost:8080/images/" + product.id + ".jpg";
                            return (
                                <div className="row">
                                    <div className="col-sm-2">
                                        <img src={img} className="img-size" alt=""/>
                                    </div>
                                    <div className="col-sm-10">
                                        <h2 className="text-sm-center ">{product.name} | {product.price} PLN</h2>
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
