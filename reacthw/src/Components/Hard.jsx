import React from "react";
import Personal from "./Medium";

const Friends = () => {
    const FriendsBusiness = [

        {name: "sayra",
        age: "22",
        dateOfBirth: "12/19/1999",
        number: "704-231-8319",
        },

        {name: "sarah",
        age: "19",
        dateOfBirth: "05/02/1984",
        number: "234-932-1199",
        },

        {name: "david",
        age: "20",
        dateOfBirth: "12/20/2001",
        number: "980-559-4322",
        },

        {name: "carlos",
        age: "23",
        dateOfBirth: "12/20/1998",
        number: "980-636-3143",
        }

    ]; 

    return (
        <div className="List">
            {FriendsBusiness.map((info) => (
                <Personal 
                    name={info.name} 
                    age={info.age} 
                    dateOfBirth={info.dateOfBirth} 
                    number={info.number} 
                />
            ))}
        </div>
    );

};

export default Friends;