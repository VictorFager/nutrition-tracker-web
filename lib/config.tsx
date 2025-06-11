import {
  House,
  NotebookPen,
  Soup,
  Carrot,
  SquarePlus,
  Calculator,
} from "lucide-react";

const pages = [
  { title: "Hem", href: "/", icon: House },
  { title: "Dagbok", href: "/log", icon: NotebookPen },
  { title: "Måltider", href: "/meals", icon: Soup },
  { title: "Ingredienser", href: "/ingredients", icon: Carrot },
  { title: "addIngr.", href: "/add-ingredient", icon: SquarePlus }, // TEMP!!
  { title: "calc.", href: "/calculator", icon: Calculator }, //TEMP!!
];

export default pages;
