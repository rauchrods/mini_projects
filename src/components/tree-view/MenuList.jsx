import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return <div className="menu-list-container">
    <ol>
    {
      list && list.length && list.map((listItem,index)=>(
        <MenuItem item={listItem} key={index}/>
      ))
    }
    </ol>
  </div>;
}
export default MenuList;
