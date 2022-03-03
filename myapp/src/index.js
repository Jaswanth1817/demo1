import React from 'react';
import ReactDOM from 'react-dom';



class Classone extends React.Component{

  render(){
       return <h1> Hello {this.props.topic}</h1>
              
            
  }
  }

ReactDOM.render(<Classone topic="success" />,document.getElementById("root"));