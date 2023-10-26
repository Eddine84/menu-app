import { useState } from "react";

const Buttons = ({ buttons, displayMenus }) => {
  const CategoriesObj = buttons.map((menuItem) => menuItem.category);
  const CategoriesArray = [...new Set(CategoriesObj), "all"];

  return (
    <div className="btn-container">
      {CategoriesArray.map((category) => (
        <button
          className="btn"
          key={category}
          onClick={() => {
            displayMenus(category);
          }}
        >
          {" "}
          {category}{" "}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
