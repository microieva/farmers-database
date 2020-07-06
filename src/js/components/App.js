import React from "react";
import List from "./List";
import Form from "./Form";
import Farmer from "./Farmer";
import SearchBar from "./SearchBar";


const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div>
          <h2>Member Database</h2>
        </div>
      </div>
      <div className="flex-top">
        <Form />
        <List/>
      </div>
      <div className="flex-bottom">
        <SearchBar/>
        <Farmer/>
      </div>
    </div>
  )  
};
 
export default App;
