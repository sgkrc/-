import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  // ...

  const login = async (userData) => {
    try {
      // Send a POST request to your server for user authentication
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const user = await response.json();
        setUser(user);
        // Notify the user of a successful login
        alert("Login successful");
      } else {
        // Handle authentication error here
        console.error("Authentication failed");
        alert("Login failed");
      }
    } catch (error) {
      console.error("An error occurred while logging in", error);
      alert("An error occurred while logging in");
    }
  };

  const logout = () => {
    // Log the user out by setting the user to null
    setUser(null);
    alert("Logout successful");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
