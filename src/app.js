// En app.js se va a instaciar exprees
import express from "express";
// import productos from "./productos/network.js";
import { productos, clientes } from "./components";

// por ende por ahora esta archivo solo va a exportar app
export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", productos);
app.use("/clientes", clientes);
// las rutas deberian tener un archivo decidado para ellas
