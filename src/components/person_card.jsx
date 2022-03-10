import React, {Component} from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            
            count: this.props.age
        }
    }
    // ageCount = (e) => {
    //     const count = this.state.count
    //     this.setState(prev => ({age: prev.count + 1 }));
    // }
    render(){
        const {lastName, firstName, age, hairColor} = this.props
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.count}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={()=> this.setState({count: this.state.count+1})}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}
export default PersonCard;