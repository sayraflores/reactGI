import React, { Component } from 'react';

class PersonalInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            person: {        
                name: props.name,
                age: props.age,
                dateOfBirth: props.dateOfBirth,
                number: props.number}
            
         };
    }
    
    render() {
        return (
            <div className="person">
                <h1>{this.state.person.name}</h1>
                <p><em>Age:</em> {this.state.person.age}</p>
                <p><em>Birth:</em>  {this.state.person.dateOfBirth}</p>
                <p> <em>Phone Number: </em>{this.state.person.number}</p>
            </div>
        );
    }
};
export default PersonalInfo;