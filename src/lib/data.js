export const data = {
  "categorias": [
    {
      "titulo": "Acompañamiento",
      "imagemURL": "/categorias/acompanhamento.png",
      "descricao": "Opciones como puré de papas, papas el horno, ensaladas mixtas, arroz pilaf y verduras grilladas.",
      "path": "/receitas/acompanhamento",
      "fullImagemURL": "/receitas/acompanhamentos.jpg",
    },
    {
      "titulo": "Bebidas",
      "imagemURL": "/categorias/bebidas.png",
      "descricao": "Clásicos como el mate, tereré, clericó y licuados de frutas frescas.",
      "path": "/receitas/bebidas",
      "fullImagemURL": "/receitas/bebidas.jpg",
    },
    {
      "titulo": "Carnes",
      "imagemURL": "/categorias/carnes.png",
      "descricao": "Delicias como asado, churrasco, vacío, entraña, bondiola y matambre a la pizza.",
      "path": "/receitas/carnes",
      "fullImagemURL": "/receitas/carnes.jpg",
    },
    {
      "titulo": "Entradas",
      "imagemURL": "/categorias/entradas.png",
      "descricao": "Picadas y aperitivos tradicionales como provoleta, empanadas, croquetas, bruschettas y fiambre variados.",
      "path": "/receitas/entradas",
      "fullImagemURL": "/receitas/entradas.jpg",
    },
    {
      "titulo": "Galletas y Dulces",
      "imagemURL": "/categorias/doces.png",
      "descricao": "Postres típicos como alfajores, facturas, churros, pasta frolla y tortas.",
      "path": "/receitas/doces",
      "fullImagemURL": "/receitas/doces.jpg",
    },
    {
      "titulo": "Panes y Empanadas",
      "imagemURL": "/categorias/empanadas.png",
      "descricao": "Una sección dedicada a panes caseros como pan de campo, chipá, medialunas y empanadas de carne, pollo o queso.",
      "path": "/receitas/empanadas",
      "fullImagemURL": "/receitas/panesyempanadas.jpg",
    },
    {
      "titulo": "Platos Principales",
      "imagemURL": "/categorias/pratos_principais.png",
      "descricao": "Favoritos como milanesa, locro, guiso de lentejas, carbonada y cazuela de mariscos.",
      "path": "/receitas/pratosprincipais",
      "fullImagemURL": "/receitas/pratos_principais.jpg",
    },
    {
      "titulo": "Salsas y Aderezos",
      "imagemURL": "/categorias/molhos.png",
      "descricao": "Chimichurri, salsa criolla, alioli, mayonesa casera y vinagretas aromáticas.",
      "path": "/receitas/molhos",
      "fullImagemURL": "/receitas/molhos.jpg",
    },
    {
      "titulo": "Vegetariano",
      "imagemURL": "/categorias/vegetariano.png",
      "descricao": "Platos como empanadas de humita, milanesas de berenjena, guiso de quinoa, tartas de verduras y ensaladas frescas.",
      "path": "/receitas/vegetariano",
      "fullImagemURL": "/receitas/vegetarianos.jpg",
    }
  ],
  "receitas": [
    {
      "nome": "Locro Criollo",
      "categoria": {
        "titulo": "Platos Principales",
        "imagemURL": "/categorias/pratos_principais.png",
        "descricao": "Favoritos como milanesa, locro, guiso de lentejas, carbonada y cazuela de mariscos.",
        "path": "/receitas/pratosprincipais",
        "fullImagemURL": "/receitas/pratos_principais.jpg",
      },
      "descricao": "Un guiso tradicional argentino a base de maíz blanco, zapallo y carne, perfecto para días fríos.",
      "ingredientes": [
        { "ingrediente": { "nome": "Maíz blanco", "imagemURL": "/ingredientes/maiz_blanco.jpeg" }, "quantidade": 1, "medicao": "taza" },
        { "ingrediente": { "nome": "Zapallo", "imagemURL": "/ingredientes/zapallo.jpeg" }, "quantidade": 500, "medicao": "gramo" },
        { "ingrediente": { "nome": "Carne de cerdo", "imagemURL": "/ingredientes/carne_de_cerdo.jpeg" }, "quantidade": 300, "medicao": "gramo" },
        { "ingrediente": { "nome": "Chorizo", "imagemURL": "/ingredientes/chorizo.jpg" }, "quantidade": 2, "medicao": "unidad" },
        { "ingrediente": { "nome": "Cebolla", "imagemURL": "/ingredientes/cebolla.jpg" }, "quantidade": 1, "medicao": "unidad" }
      ],
      "imagensURL": ["/receitas/locro-criollo.png"],
      "tempoDePreparacao": "02:00:00",
      "passos": [
        "Dejar el maíz en remojo durante 12 horas.",
        "Cortar el zapallo y la carne en trozos pequeños.",
        "En una olla grande, cocinar el maíz y el zapallo con agua.",
        "Añadir la carne, el chorizo y la cebolla picada.",
        "Cocinar a fuego lento hasta que los ingredientes estén tiernos."
      ],
      "path": "/receita/locro_criollo",
      "substituicoes": [
        "Puedes sustituir el maíz blanco por maíz amarillo.",
        "El zapallo puede ser reemplazado por calabaza.",
        "La carne de cerdo puede ser sustituida por carne de res."
      ],
      "conselhos": [
        "Es recomendable dejar reposar el locro durante una hora después de cocinar para intensificar los sabores.",
        "Si deseas un sabor más profundo, agrega un toque de comino o pimentón ahumado al final de la cocción."
      ],
      "visaoGeral": "El locro criollo es un plato tradicional de Argentina que tiene sus raíces en las comidas indígenas de la región andina. A lo largo de los siglos, este guiso fue evolucionando con influencias de la gastronomía española y europea. Es un plato reconfortante que se prepara especialmente en días fríos, y se asocia a celebraciones como el 25 de mayo, cuando se conmemora la Revolución de Mayo. El locro, a base de maíz, zapallo y carne, es un ejemplo de la cocina tradicional argentina, simbolizando la unión de los ingredientes locales en una receta simple pero sabrosa.",
      "porcoes": 6,
    },
    {
      "nome": "Empanadas",
      "categoria": {
        "titulo": "Panes y Empanadas",
        "imagemURL": "/categorias/empanadas.png",
        "descricao": "Una sección dedicada a panes caseros como pan de campo, chipá, medialunas y empanadas de carne, pollo o queso.",
        "path": "/receitas/empanadas",
        "fullImagemURL": "/receitas/panesyempanadas.jpg",
      },
      "descricao": "Empanadas argentinas clásicas con relleno de carne y condimentos tradicionales.",
      "ingredientes": [
        { "ingrediente": { "nome": "Carne molida", "imagemURL": "/ingredientes/carne_molida.jpeg" }, "quantidade": 500, "medicao": "gramo" },
        { "ingrediente": { "nome": "Cebolla", "imagemURL": "/ingredientes/cebolla.jpg" }, "quantidade": 2, "medicao": "unidad" },
        { "ingrediente": { "nome": "Aceitunas verdes", "imagemURL": "/ingredientes/aceituna.jpeg" }, "quantidade": 100, "medicao": "gramo" },
        { "ingrediente": { "nome": "Tapas para empanadas", "imagemURL": "/ingredientes/tapas_para_empanadas.jpeg" }, "quantidade": 12, "medicao": "unidad" },
        { "ingrediente": { "nome": "Comino", "imagemURL": "/ingredientes/comino.jpeg" }, "quantidade": 1, "medicao": "cucharadita" }
      ],
      "imagensURL": ["/receitas/empanadas.png"],
      "tempoDePreparacao": "01:00:00",
      "passos": [
        "Cortar la cebolla en cubos pequeños y saltear en aceite.",
        "Añadir la carne molida y cocinar hasta que esté dorada.",
        "Agregar las aceitunas picadas y el comino, mezclar bien.",
        "Rellenar las tapas para empanadas con la mezcla de carne.",
        "Cerrar las empanadas y hornear a 180°C durante 20 minutos."
      ],
      "path": "/receita/empanadas",
      "substituicoes": [
        "Puedes sustituir la carne molida por carne de pollo o de cerdo.",
        "Las aceitunas verdes pueden ser reemplazadas por aceitunas negras.",
        "Si no tienes tapas para empanadas, puedes usar masa para pizza."
      ],
      "conselhos": [
        "Deja reposar las empanadas unos minutos después de hornearlas, esto mejora su sabor.",
        "Puedes acompañarlas con una salsa picante o chimichurri para un toque extra de sabor."
      ],
      "visaoGeral": "Las empanadas argentinas son un emblema de la gastronomía nacional y tienen una historia que se remonta a la época colonial. Se cree que las empanadas fueron traídas por los españoles, aunque los pueblos originarios ya preparaban alimentos similares. Con el tiempo, las empanadas se adaptaron a las diversas regiones del país, incorporando ingredientes autóctonos y variando en los rellenos. En Argentina, las empanadas son una comida versátil, consumida tanto en celebraciones como en comidas diarias, y son conocidas por su sabroso relleno de carne, pollo, queso, entre otros.",
      "porcoes": 12,
    },
    {
      "nome": "Parrilla",
      "categoria": {
        "titulo": "Carnes",
        "imagemURL": "/categorias/carnes.png",
        "descricao": "Delicias como asado, churrasco, vacío, entraña, bondiola y matambre a la pizza.",
        "path": "/receitas/carnes",
        "fullImagemURL": "/receitas/carnes.jpg",
      },
      "descricao": "Una selección de cortes de carne asados a la perfección en la parrilla.",
      "ingredientes": [
        { "ingrediente": { "nome": "Costilla de res", "imagemURL": "/ingredientes/costilla_de_res.jpeg" }, "quantidade": 1, "medicao": "kg" },
        { "ingrediente": { "nome": "Chorizo", "imagemURL": "/ingredientes/chorizo.jpg" }, "quantidade": 4, "medicao": "unidad" },
        { "ingrediente": { "nome": "Morcilla", "imagemURL": "/ingredientes/morcilla.jpg" }, "quantidade": 2, "medicao": "unidad" },
        { "ingrediente": { "nome": "Sal gruesa", "imagemURL": "/ingredientes/sal_gruesa.jpeg" }, "quantidade": 2, "medicao": "cucharada" }
      ],
      "imagensURL": ["/receitas/parrila.png"],
      "tempoDePreparacao": "01:30:00",
      "passos": [
        "Preparar el fuego en la parrilla hasta obtener brasas.",
        "Sazonar los cortes de carne con sal gruesa.",
        "Colocar la carne, el chorizo y la morcilla en la parrilla.",
        "Asar a fuego lento, dando vuelta los cortes hasta el término deseado.",
        "Servir acompañado de chimichurri."
      ],
      "path": "/receita/parrila",
      "substituicoes": [
        "Puedes sustituir la costilla de res por vacío o entraña.",
        "El chorizo puede ser reemplazado por salchichones o morcilla.",
        "Si prefieres, puedes sazonar con pimienta negra además de sal gruesa."
      ],
      "conselhos": [
        "Es recomendable no mover la carne con frecuencia mientras se asa para que conserve sus jugos.",
        "Si te gusta un sabor más ahumado, puedes agregar madera de quebracho o roble a las brasas."
      ],
      "visaoGeral": "La parrilla argentina es una tradición culinaria que se remonta a los primeros pobladores del país. El asado, como es conocido, tiene sus raíces en la cultura gaucha, los trabajadores rurales que comenzaron a cocinar carne en grandes fogatas durante las jornadas de trabajo. A lo largo del tiempo, la parrilla se ha convertido en una de las formas más representativas de la cocina argentina, conocida por sus cortes de carne de alta calidad, cocidos a la perfección sobre brasas. Es una verdadera celebración de la carne, que no solo se disfruta en reuniones familiares, sino también en encuentros sociales.",
      "porcoes": 8,
    }
  ],
  "ingredientes": [
    {
      "nome": "Maíz blanco",
      "imagemURL": "/ingredientes/maiz_blanco.jpeg",
      "path": "/ingrediente/maz_blanco216086"
    },
    {
      "nome": "Zapallo",
      "imagemURL": "/ingredientes/zapallo.jpeg",
      "path": "/ingrediente/zapallo574348"
    },
    {
      "nome": "Carne de cerdo",
      "imagemURL": "/ingredientes/carne_de_cerdo.jpeg",
      "path": "/ingrediente/carne_de_cerdo639480"
    },
    {
      "nome": "Chorizo",
      "imagemURL": "/ingredientes/chorizo.jpg",
      "path": "/ingrediente/chorizo560526"
    },
    {
      "nome": "Cebolla",
      "imagemURL": "/ingredientes/cebolla.jpg",
      "path": "/ingrediente/cebolla856410"
    },
    {
      "nome": "Carne molida",
      "imagemURL": "/ingredientes/carne_molida.jpeg",
      "path": "/ingrediente/carne_molida167778"
    },
    {
      "nome": "Aceitunas verdes",
      "imagemURL": "/ingredientes/aceituna.jpeg",
      "path": "/ingrediente/aceitunas_verdes574358"
    },
    {
      "nome": "Tapas para empanadas",
      "imagemURL": "/ingredientes/tapas_para_empanadas.jpeg",
      "path": "/ingrediente/tapas_para_empanadas309469"
    },
    {
      "nome": "Comino",
      "imagemURL": "/ingredientes/comino.jpeg",
      "path": "/ingrediente/comino195860"
    },
    {
      "nome": "Costilla de res",
      "imagemURL": "/ingredientes/costilla_de_res.jpeg",
      "path": "/ingrediente/costilla_de_res810825"
    },
    {
      "nome": "Morcilla",
      "imagemURL": "/ingredientes/morcilla.jpg",
      "path": "/ingrediente/morcilla968482"
    },
    {
      "nome": "Sal gruesa",
      "imagemURL": "/ingredientes/sal_gruesa.jpeg",
      "path": "/ingrediente/sal_gruesa776192"
    }
  ]
}