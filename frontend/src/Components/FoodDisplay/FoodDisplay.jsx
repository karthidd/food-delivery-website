import React, { useContext, useEffect } from 'react'
import "../FoodDisplay/FoodDisplay.css"
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  useEffect(() => {
    console.log('Food List:', food_list)
    console.log('Category:', category)
  }, [food_list, category])

  const filteredFoodList = food_list.filter(item => category = "All" || category === item.category)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodList.map(item => (
          <FoodItem 
            key={item._id} 
            id={item._id} 
            name={item.name}  
            description={item.description} 
            price={item.price} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay
