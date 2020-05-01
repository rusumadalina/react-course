import React from 'react';

import { ProductProvider, ProductConsumer } from './ProductContext';

export class Producer extends React.Component {
    state = {
        name: "Cocorico"
    };

    render() {
        return (
            <ProductProvider value={this.state.name}>
                <Store></Store>
            </ProductProvider>
        );
    }
}

const Store = () => {
    return <EndUser></EndUser>
}

const EndUser = () => {
    return <ProductConsumer>{context => <h1>{context}</h1>}</ProductConsumer>
}