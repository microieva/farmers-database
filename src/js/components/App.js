import React from "react";
import List from "./List";
import Form from "./Form";
import Farmer from "./Farmer";
import SearchBar from "./SearchBar";


const App = () => {
  return (
    <div className="wrapper">
      <div className="grid">
        <Form />
        <List/>
        <SearchBar/>
        <Farmer/>
      </div>
    </div>
  )  
};
 
export default App;
