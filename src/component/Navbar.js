import React from 'react';

class Navbar extends React.Component {
    state = {  } 
    render() { 
        // use html to jsx converter to change ur code into jsx before pasting here 
        // also always return component into small opne closed brackets

        return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MyCart
          </a>
        </div>
      </nav>
      );
    }
}
 
export default Navbar;