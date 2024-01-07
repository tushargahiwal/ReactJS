import React from "react";

import UserContext from "./UserContext";

const UserContextProvider =({children}) => {
    const [user,SetUser] =React.useState(null);
  return(
    <>
     {/* it can pass user and setuser 
     with the help of setuser we can add the new values */}
    <UserContext.Provider value={{user,SetUser}}>
        {children}
    </UserContext.Provider>
    
    
      
    
    </>
  )
}

export default UserContextProvider;