import React from 'react';

const FoodItem = ({id,title,category,price,img,desc}) => {
	return (
		<div className='foodItem'>
			<div className='foodImg'>
				<img src={img}/>
			</div>
			<div className='foodDetails'>
				<h3>{title}</h3>
				<h5>${price}</h5>
				<p>{desc}</p>
			</div>
		</div>
	);
}

export default FoodItem;