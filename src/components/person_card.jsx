import React from 'react'

// class PersonCard extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
            
//             count: this.props.age
//         }
//     }
    // ageCount = (e) => {
    //     const count = this.state.count
    //     this.setState(prev => ({age: prev.count + 1 }));
    // }
    // render(){
    //     const {lastName, firstName, age, hairColor} = this.props
const PersonCard = props => {
        return(
            <div>
                <h1>{props.lastName}, {props.firstName}</h1>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.hairColor}</p>
            </div>
        );
        }



export default PersonCard;