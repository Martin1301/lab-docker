// Esto va a actuar como si fuera una base de local
// en verdad es un array de objetos

const cliente = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Peres",
  },
];
/**
 * 
 Vamos a enviarle al cliente el siguiente
 en res podemos el statis res.status(200).json()
  {
    ok: // true || false esto va a indicar y si la peticion es success o error
    data: // Sera el cuerpo de nuestra respuesta esto va a tener un mensaje con los datos o un mensaje de error
  }
 */

// Listar
// METHOD: GET
export const list = (req, res) => {
  // lista los cliente

  return res.status(200).json({
    ok: true,
    data: cliente,
  });
};

// Crear
// METHOD: POST
export const store = (req, res) => {
  // crea un story
  // note: Recurden que el estado de creacion es 201
  const body = req.body;
  body.id = cliente.length + 1;
  cliente.push(body);

  return res.status(201).json({
    ok: true,
    data: "Store Success",
  });
};

// Editar
// METHOD: PUT
export const update = (req, res) => {
    let i =  req.params.id - 1;
  const {nombre, apellido} = req.body;
  try{

  const datos = cliente[i];
  datos.nombre = nombre;
  datos.apellido = apellido;

  res.json(datos);
  }catch(error){
    return res.status(500).send(error.message);
  }
};

// Eliminar
// METHOD: DELETE
export const destroy = (req, res) => {
  let i =  req.params.id - 1;
  cliente.splice(i, 1);
  res.json(cliente);
};
