import React from 'react';

const CategoryTab = ({categories,changeMenu}) => {
	return (
		<div className='categoryTab'>
			{categories.map((category) => {
				return <button key={category} type='button' onClick={()=>changeMenu(category)}>{category}</button>;
				})}
		</div>
	);
}

export default CategoryTab;