import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import menu from "./data.js";
import Buttons from "./Buttons";
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [buttons, setButtons] = useState(menu);

  const displayMenus = (itemCategory) => {
    // Filtrer les éléments du menu en fonction de la catégorie
    const filteredMenu = menu.filter((item) => {
      return item.category === itemCategory || itemCategory === "all";
    });

    // Mettre à jour les éléments du menu
    setMenuItems(filteredMenu);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Buttons buttons={buttons} displayMenus={displayMenus} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
