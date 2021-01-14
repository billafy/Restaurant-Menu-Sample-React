import React, {useState} from 'react';
import CategoryTab from './CategoryTab';
import FoodItem from './FoodItem';
import data from './data';

const fullCategories = ['all',...new Set(data.map((item) => item.category))];
const fullMenu = data; 

const Menu = () => {
	const [menu,setMenu] = useState(fullMenu);
	const [categories,setCategories] = useState(fullCategories);
	const changeMenu = (category) => {
		if(category==='all')
		{
			setMenu(fullMenu);
			return;
		}
		const newMenu = fullMenu.filter((foodItem) => foodItem.category===category)
		setMenu(newMenu);
	}
	return (
		<>
			<h1 className='heading'>Our Menu</h1>
			<CategoryTab categories={categories} changeMenu={changeMenu}/>
			<div className='foodItems'>
				{menu.map((foodItem) => {
					return <FoodItem key={foodItem.id} {...foodItem}/>
					})}
			</div>
		</>
	);
}

export default Menu;