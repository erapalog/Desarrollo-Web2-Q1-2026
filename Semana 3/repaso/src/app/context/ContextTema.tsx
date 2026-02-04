//estado que almacena el tema de la aplicacion (claro u oscuro)
// metodo que permite cambiar el tema

import { createContext } from "react";

export const ContextTema =createContext ({
  tema: "light",
  cambiarTema: () => {},
});
