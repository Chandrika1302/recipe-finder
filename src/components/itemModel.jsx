import React, { Component } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

class ItemModel extends Component {
  
    state = {  }

   
    render() { 
        return ( 
           
            <React.Fragment>
                <div className="bg-yellow-200 text-2xl w-full flex justify-between py-4 px-96">
                    <div className="mr-34">{this.props.dishname}</div>
                    <div id="changeColor"><FavoriteBorderIcon className="ml-64 cursor-pointer"></FavoriteBorderIcon></div>
                    </div>
                   
                <div className="flex items-start justify-around mx-32">
                   <div> <img  src={this.props.image} className=" w-96 h-96 mr-96 " alt="dish item"></img></div>
                    <div className="ml-32">
                    <div>Category of Meal: {this.props.category}</div>
                    <div>Area of the Meal: {this.props.area}</div><br/>
                    <div>Ingredients:</div>
                    <div className="bg-yellow-50 mb-6 mt-2 p-6">
                    <div>{this.props.ingredientName1}-----{this.props.measure1}</div>
                    <div> {this.props.ingredientName2}-----{this.props.measure2}</div>
                    <div> {this.props.ingredientName3}-----{this.props.measure3}</div>
                    <div> {this.props.ingredientName4}-----{this.props.measure4}</div>
                    <div> {this.props.ingredientName5}-----{this.props.measure5}</div>
                    <div> {this.props.ingredientName6}-----{this.props.measure6}</div>
                    <div> {this.props.ingredientName7}-----{this.props.measure7}</div>
                    <div> {this.props.ingredientName8}-----{this.props.measure8}</div>
                    <div> {this.props.ingredientName9}-----{this.props.measure9}</div>
                    </div>
                    <div className=" mb-12 flex items-center justify-center flex-col text-justify">Recipes:<div className="bg-yellow-50 my-4">{this.props.instructions}</div></div>
                    </div>
                </div>
            </React.Fragment>
    
         );
    }
}
 
export default ItemModel;
