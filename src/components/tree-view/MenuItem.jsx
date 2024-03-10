import React, { useState } from "react";
import MenuList from "./MenuList";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLevel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLevel]: !displayCurrentChildren[getCurrentLevel],
    });
  }

  return (
    <li >
      <div className="menu-item" >
        <p>{item.label}</p>
        {item.children && item.children.length && (
          <span onClick={() => handleToggleChildren(item.label)}>{
            displayCurrentChildren[item.label]? '-': ' +'
          }</span>
        )}
      </div>

      {item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
