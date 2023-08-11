import { sections } from "./sections";
import { pizzas } from "./pizzas";
import { advertinsings } from "./advertinsings";
import { burguers } from "./burguers";
import { sideDishes } from "./sideDishes";
import { milkShakes } from "./milkShakes";
import { drinks } from "./drinks";

const items = [...pizzas, ...burguers, ...sideDishes, ...milkShakes, ...drinks];

items.forEach((item, index) => {
  item.id = index;
});

export {
  sections,
  items,
  advertinsings,
  pizzas,
  burguers,
  sideDishes,
  milkShakes,
  drinks,
};
