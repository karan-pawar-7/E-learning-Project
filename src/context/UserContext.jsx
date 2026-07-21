import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [student, setStudent] = useState({
    subTitle: "Master in-demand skills with world-class instructors.",
    subTitle1:
      "Build your future with curated courses designed for modern professionals.",
  });

  return (
    <UserContext.Provider value={{ student, setStudent }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;