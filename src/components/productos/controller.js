// Esto va a actuar como si fuera una base de local
// en verdad es un array de objetos

const producto = [
  {
    id: 1,
    nombre: "Tv Smart",
    precio: "1500",
    cantidad: "2",
  },
  {
    id: 2,
    nombre: "Celular LG",
    precio: "780",
    cantidad: "1",
  },
  {
    id: 3,
    nombre: "Laptop Asus",
    precio: "5000",
    cantidad: "2",
  },
];
/**
 * 
 Vamos a enviarle al producto el siguiente
 en res podemos el statis res.status(200).json()
  {
    ok: // true || false esto va a indicar y si la peticion es success o error
    data: // Sera el cuerpo de nuestra respuesta esto va a tener un mensaje con los datos o un mensaje de error
  }
 */

// Listar
// METHOD: GET
export const list = (req, res) => {
  // lista los producto

  return res.status(200).json({
    ok: true,
    data: producto,
  });
};

// Crear
// METHOD: POST
export const store = (req, res) => {
  // crea un story
  // note: Recurden que el estado de creacion es 201
  const body = req.body;
  body.id = producto.length + 1;
  producto.push(body);

  return res.status(201).json({
    ok: true,
    data: "Store Success",
  });
};

// Editar
// METHOD: PUT
export const update = (req, res) => {
    let i =  req.params.id - 1;
  const {nombre, precio, cantidad} = req.body;
  try{

  const datos = producto[i];
  datos.nombre = nombre;
  datos.precio = precio;
  datos.cantidad = cantidad;

  res.json(datos);
  }catch(error){
    return res.status(500).send(error.message);
  }
};

// Eliminar
// METHOD: DELETE
export const destroy = (req, res) => {
  let i =  req.params.id - 1;
  producto.splice(i, 1);
  res.json(producto);
};
