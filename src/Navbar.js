import React from 'react';

const Navbar = (props) => {
	return(
		<div style={styles.nav}>
			<div style={styles.cartIconContainer}>
				<img style={styles.cartIcon} alt="cart-icon" src="https://img-premium.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1623913789~hmac=badb561dd1cfe7ad1f9883366cef033a" />
				<span style={styles.cartCount}>{props.count}</span>
			</div>
		</div>
	);
}

const styles = {
	cartIcon: {
		height: 32,
		marginRight: 20
	},
	nav: {
		height: 70,
		background: '#4267b2',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	cartIconContainer: {
		position: 'relative'
	},
	cartCount: {
		background: 'yellow',
		borderRadius: '50%',
		padding: '3px 8px',
		position: 'absolute',
		right: 0,
		top: -9
	}
};


export default Navbar;