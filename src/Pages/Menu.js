import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "./MenuItem";
import '../styles/Menu.css'

function Menu() {
  return (
    <div className="menu">
      <h2 className="menuTitle">Our Menu</h2>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              name={menuItem.name}
              image={menuItem.image}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Menu;
