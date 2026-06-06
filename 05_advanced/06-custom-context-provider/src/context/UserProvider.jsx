    import React, { useState } from 'react'
    import UserContext from './UserContext'

    // Default user data  
    const initialUser = {
        name: "Ayush",
        role: "Frontend Developer"
    }


    const UserProvider = ({children}) => {   //where {children} => props.children
        
        // Store information in state
        const [user, setUser] = useState(initialUser); //passing initial user data as object


        // // Update user information on button click
        const changeUser = () => {
            if(user.name === "Ayush"){
                setUser({name: "Rahul", role: "Backend Developer"});
            }
            else if(user.name === 'Rahul'){
                setUser({name: 'Ankit', role: 'Database Developer'});
            } 
            else if(user.name === 'Ankit'){
                setUser({name: "Rohit", role: "Data Analyst"});
            }
            else{
                setUser(initialUser);       // Reset user data
            }      
        }  

    return (

        // // Share/Provide "user state" and "functions" globally.
        <UserContext.Provider value={{user, changeUser}}>
        {children}
        </UserContext.Provider>

    )
    }

    export default UserProvider