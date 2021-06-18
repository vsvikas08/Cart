import React from 'react';

// class CartItem extends React.Component{
const CartItem = (props) => {
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		price: 999,
	// 		title: 'Mobile Phone',
	// 		qty: 1,
	// 		img: ''
	// 	}
	// }

	// increaseQuantity = () => {
	// 	// this.state.qty += 1;
	// 	// console.log("this ",this.state);
	// 	// setState form 1
	// 	// this.setState({
	// 	// 	qty: this.state.qty + 1
	// 	// });
	// 	// setState form 2
	// 	this.setState((prevState)=>{
	// 		return{
	// 			qty: prevState.qty + 1
	// 		}
	// 	});
	// }
	// decreaseQuantity = () =>{
	// 	const {qty} = this.state;
	// 	if(qty === 0){
	// 		return;
	// 	}
	// 	this.setState((prevState) => {
	// 		return{
	// 			qty: prevState.qty - 1
	// 		}
	// 	})
	// }
	// render(){
		// console.log('this.props',this.props);
		// const {price,title,qty} = this.props.product;
		// After converting in functional component no need 'this' keyword
		const {price,title,qty} = props.product;
		// const {onDeleteProduct} = this.props;
		const {product,onDeleteProduct} = props;
		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.image} src={product.img}/>
				</div>
				<div className="right-block">
					<div style={{fontSize: 25}}>{title}</div>
					<div style={{color: '#777'}}>Rs {price}</div>
					<div style={{color: '#777'}}>Qty: {qty}</div>
					<div className="cart-item-actions">
						{/* Buttons */}
						<img 
							alt="increase"
							className="action-icons" 
							src="https://image.flaticon.com/icons/png/512/992/992651.png" 
							onClick={() => props.onIncreaseQuantity(props.product)}
						/>
						<img 
							alt="decrease" 
							className="action-icons" 
							src="https://image.flaticon.com/icons/png/512/992/992683.png" 
							onClick={() => props.onDecreaseQuantity(props.product)}
						/>
						<img 
							alt="delete" 
							className="action-icons" 
							src="https://image.flaticon.com/icons/png/512/1214/1214428.png	" 
							onClick={ () => onDeleteProduct(props.product.id)}
						/>
					</div>
				</div>
			</div>
		);
	// }
}

const styles = {
	image: {
		height: 110,
		width: 110,
		borderRadius: 4,
		background: '#ccc'
	}
}


export default CartItem;