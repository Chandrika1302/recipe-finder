import React, { Component } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Container } from '@material-ui/core';

class ItemModel extends Component {
  
    state = {  }
changeColor=()=>{
    let value=document.querySelector("#changeColor");
    value.classList.toggle("text-red-500")
}
   
    render() { 
        return ( 
           
            <React.Fragment>
                <div className="bg-yellow-200 text-3xl font-medium w-full flex justify-between py-4 px-96">
                    <div className="mr-34">{this.props.dishname}</div>
                    <div id="changeColor" onClick={this.changeColor}><FavoriteBorderIcon className="ml-64 cursor-pointer"></FavoriteBorderIcon></div>
                    </div>
                   
                <div className="flex items-start justify-around mx-32">
                   <div className="border-4 border-black"> <img  src={this.props.image} className=" w-96 h-96 mr-96 " alt="dish item"></img></div>
                    <div className="ml-32">
                    <div className="italic font-medium text-lg">Category of Meal: <span className="not-italic font-normal">{this.props.category}</span></div>
                    <div className="italic font-medium text-lg">Area of the Meal: <span className="not-italic font-normal">{this.props.area}</span></div><br/>
                    <div className="italic font-medium text-lg">Ingredients:</div>
                    <div className="bg-yellow-50 mb-6 mt-2 p-6 overflow-y-auto h-36">
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
                    <div className=" mb-12 flex items-center justify-center flex-col text-justify italic font-medium text-lg">Recipes:<div className="bg-yellow-50 my-4 p-6"><div className="not-italic font-normal">{this.props.instructions}</div></div></div>
                    </div>
                </div>
            </React.Fragment>
    
         );
    }
}
 
export default ItemModel;
