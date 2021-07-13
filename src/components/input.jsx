import React, { Component } from 'react';
import itemService from '../services/itemService';
import ItemModel from './itemModel';
class Input extends Component {
    state = { 
        meals:[],
        inputValue:''
     }
     getItems = async() =>{
            itemService.getItem(this.state.inputValue).then(({data})=>{
                let {meals}=data;
                this.setState({meals});
        }).catch(()=>{
            let meals=null;
            this.setState({meals});
        }
        )

    };
    handleChange = ({ target }) => {
        const inputValue = target.value;
        this.setState({ inputValue });
        
    };
    render() { 
        let {meals,inputValue}=this.state;
        return (
            <React.Fragment>
                <div className="flex space-x-6 items-center justify-center">
                    <input onChange={this.handleChange} type="text" placeholder="Enter the name of the dish" value={inputValue} className="border-2 rounded  p-2 w-64"/>
                    <button onClick={this.getItems} className="px-3 py-2 bg-gray-700 rounded text-gray-200">Get Ingredients</button>
                </div>
                {inputValue===""?

                <h2 className="font-bold text-2xl" id="h2-title">Type a Dish Name to Search for it's ingredients</h2>
                :
                meals===null?
                <h5 className="font-bold text-2xl" id="h2-title">No data has been found</h5>
:
                
            meals.map((meal)=>{
                return <ItemModel
                key={meal.idMeal}
                dishname={meal.strMeal}
                category={meal.strCategory}
                area={meal.strArea}
                image={meal.strMealThumb}
                ingredientName1={meal.strIngredient1}
                ingredientName2={meal.strIngredient2}
                ingredientName3={meal.strIngredient3}
                ingredientName4={meal.strIngredient4}
                ingredientName5={meal.strIngredient5}
                ingredientName6={meal.strIngredient6}
                ingredientName7={meal.strIngredient7}
                ingredientName8={meal.strIngredient8}
                ingredientName9={meal.strIngredient9}
                measure1={meal.strMeasure1}
                measure2={meal.strMeasure2}
                measure3={meal.strMeasure3}
                measure4={meal.strMeasure4}
                measure5={meal.strMeasure5}
                measure6={meal.strMeasure6}
                measure7={meal.strMeasure7}
                measure8={meal.strMeasure8}
                measure9={meal.strMeasure9}
                instructions={meal.strInstructions}
                />
            })
        }   

            </React.Fragment>
          );
    }
}
 
export default Input;