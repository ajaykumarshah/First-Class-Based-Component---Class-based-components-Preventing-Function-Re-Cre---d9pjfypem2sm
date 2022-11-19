import React from 'react'
import '../styles/App.css';

class App extends React.Component {
    handleclick() {

        this.setState({ age: this.state.age + 1 });

    }
    constructor(props) {
        super(props);
        this.state = { name: "John Doe", enrollmentNo: "12345678", age: 34 };
        this.handleclick = this.handleclick.bind(this);
    }



    render() {

        return <div>
            Hello, my name is <h1>{this.state.name}</h1> and 'I am <p>{this.state.age}</p> years old and my enrollment no is <p>{this.state.enrollmentNo} </p>
            <button onClick={this.handleclick} >inrease age</button>
        </div>
    }
}


export default App;
