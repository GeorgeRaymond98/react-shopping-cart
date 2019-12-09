import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from "./contexts/ProductContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);


	const { Provider } = ProductContext;

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,  item])
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Provider value={[products, addItem]}>
			<Route
				exact
				path="/"
				componet={Products}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
			</Provider>
		</div>
		
	);
}

export default App;
