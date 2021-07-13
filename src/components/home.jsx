import React, { Component } from 'react';
import Input from './input';
class Home extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="flex items-center justify-center flex-col space-y-6">
                    <div className="text-4xl text-gray-700 pt-20">Recipe Finder</div>
                <Input/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Home;