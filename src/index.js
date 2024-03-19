const express = require("express");
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const pacienteRoutes = require('./routes/pacientes')
const app = express();

// Configurar CORS antes de las rutas
const corsOptions = {
    origin: 'http://localhost:4200', // o ['http://example1.com', 'http://example2.com'] para múltiples orígenes
    methods: ['GET', 'POST'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
};

app.use(cors(corsOptions));

//middlewares
app.use(express.text());
app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);
app.use(pacienteRoutes);

//settings
app.set("Nombre" , "Ozuna");

app.listen(3000 , () => {
    console.log('Servidor corriendo')
});
