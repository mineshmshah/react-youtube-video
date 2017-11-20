// Pull off the Component as a variable called Component - ES6
import React, { Component } from 'react';
// We need to import React for all our components as JSX calls React.createElement;

// This is a functional component - We need a class based component to store internal logic and be aware of its state
// const SearchBar = () =>{
//   return <input />
// };

// Create class called SearchBar and give it all the functionality that React.Component has
class SearchBar extends Component {
    // All js classes have special classes called constructor
    //
    constructor(props){
        super(props);

        // we initialise new state object and assign to this.state
        // object we pass will have properties we want to record on the state, in this case we want to store the property 'term' on state
        // We will only ever have this.state in the constructor
        this.state = {term: ''}
    }
    // must have render method or error
    render(){
        //on change is a react defined property
        // we could have the onInputChange as a function outside and call this.onInputChange
        //with es6 can call function directly and as it is one line don't need curly braces
        //we can even omit the leading braces around the event argument as there is only one
      return(
          <div className="search-bar">
              <input
                  value = {this.state.term}
                  onChange={event => this.onInputChange(event.target.value)} />
              {/*Value of the input : {this.state.term}*/}
          </div>

      ) ;
    }

 onInputChange(term){
     this.setState({term});
     this.props.onSearchTermChange(term)
 }
}


// It is critical you export the right search function
export default SearchBar;