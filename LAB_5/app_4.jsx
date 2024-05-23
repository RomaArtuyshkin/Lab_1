import React from "react"; 
import ReactDOM from "react-dom"; 

// Обновляем это
const navlinkItems = [];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));