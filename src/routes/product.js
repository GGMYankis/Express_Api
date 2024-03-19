const express = require("express");
const router = express.Router();


var productos = [
  {
    id: 1,
    nombre: "Camisa",
    categoria: "Ropa",
    precio: 25.99,
    stock: 50,
  },
  {
    id: 2,
    nombre: "Pantalón",
    categoria: "Ropa",
    precio: 39.99,
    stock: 30,
  },
  {
    id: 3,

    nombre: "Zapatos",
    categoria: "Calzado",
    precio: 59.99,
    stock: 20,
  },
  {
    id: 4,

    nombre: "Teléfono",
    categoria: "Electrónica",
    precio: 299.99,
    stock: 10,
  },
];

router.get("/products", (req, res) => {
  res.json([...productos, { cantidad: productos.length + 1 }]);
});

router.post("/products", (req, res) => {
  productos.push({ ...req.body, id: 3 });
  res.send("producto creado");
});

router.get("/products/:id", (req, res) => {
  const product = productos.find((p) => p.id == req.params.id);
  res.json({ ...product });
});

router.delete("/products/:id", (req, res) => {
  productos = productos.filter((p) => p.id !== parseInt(req.params.id));
  res.send("producto eliminado producto");
});


module.exports = router;