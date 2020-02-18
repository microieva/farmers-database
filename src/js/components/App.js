import React from "react";
import List from "./List";
import Form from "./Form";
import Farmer from "./Farmer";
import SearchBar from "./SearchBar";
require("../../styles/styles.css");


const App = () => (
  
    <table>
      <tbody>
        <tr>
          <td>
            <div className="">
              <h2>Add New Farmer</h2>
              <hr/>
              <Form />
            </div>
          </td>
          <td>
            <div className="list">
              <h2>All Farmers:</h2>
              <hr/>
              <List />
            </div>
          </td> 
        </tr>
        <tr>
          <td>
            <div className="search">
              <h2>Search Farmers</h2>
              <hr/>
              <SearchBar />
            </div>
          </td>
          <td>
            <div className="details">
              <h2>Farmer Details:</h2>
              <hr/>
              <Farmer />
            </div>
          </td>
        </tr>
      </tbody>
    </table>    
);
 
export default App;
