import axios from 'axios';
import { Component } from 'react';
const RECIPE_ITEMS="https://www.themealdb.com/api/json/v1/1/search.php?s=";
class ItemService extends Component {

getItem=(itemName)=>{

    return axios.get(`${RECIPE_ITEMS}${itemName}`);
}
  
}
 
export default new ItemService();