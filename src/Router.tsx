import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import CurrentEmployee from './pages/CurrentEmployee/CurrentEmployee'
import React, { createContext, useState } from "react";

type User = {
  Id: number;
  FirstName: string;
  LastName: string;
  DateOfBirth:  Date;
  StartDate: Date;
  Street: string;
  City: string;
  State: string;
  ZipCode: number;
  Department: string;
};

type UsersContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export const UsersContext = createContext<UsersContextType | undefined>(undefined);

function Router() {
    const [users, setUsers] = useState<User[]>([]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CurrentEmployee" element={<CurrentEmployee />} />
        </Routes>
      </BrowserRouter>
    </UsersContext.Provider>
  );
}
export default Router;