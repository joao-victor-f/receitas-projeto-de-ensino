export const data = {
    "categorias": [
      {
        "titulo": "Acompañamiento",
        "imagemURL": "/categorias/acompanhamento.png",
        "descricao": "Opciones como puré de papas, papas el horno, ensaladas mixtas, arroz pilaf y verduras grilladas.",
        "path": "/categorias/acompanhamento",
      },
      {
        "titulo": "Bebidas",
        "imagemURL": "/categorias/bebidas.png",
        "descricao": "Clásicos como el mate, tereré, clericó y licuados de frutas frescas.",
        "path": "/categorias/bebidas",
      },
      {
        "titulo": "Carnes",
        "imagemURL": "/categorias/carnes.png",
        "descricao": "Delicias como asado, churrasco, vacío, entraña, bondiola y matambre a la pizza.",
        "path": "/categorias/carnes",
      },
      {
        "titulo": "Entradas",
        "imagemURL": "/categorias/entradas.png",
        "descricao": "Picadas y aperitivos tradicionales como provoleta, empanadas, croquetas, bruschettas y fiambre variados.",
        "path": "/categorias/entradas",
      },
      {
        "titulo": "Galletas y Dulces",
        "imagemURL": "/categorias/doces.png",
        "descricao": "Postres típicos como alfajores, facturas, churros, pasta frolla y tortas.",
        "path": "/categorias/doces",
      },
      {
        "titulo": "Panes y Empanadas",
        "imagemURL": "/categorias/empanadas.png",
        "descricao": "Una sección dedicada a panes caseros como pan de campo, chipá, medialunas y empanadas de carne, pollo o queso.",
        "path": "/categorias/empanadas",
      },
      {
        "titulo": "Platos Principales",
        "imagemURL": "/categorias/pratos_principais.png",
        "descricao": "Favoritos como milanesa, locro, guiso de lentejas, carbonada y cazuela de mariscos.",
        "path": "/categorias/pratosprincipais",
      },
      {
        "titulo": "Salsas y Aderezos",
        "imagemURL": "/categorias/molhos.png",
        "descricao": "Chimichurri, salsa criolla, alioli, mayonesa casera y vinagretas aromáticas.",
        "path": "/categorias/molhos",
      },
      {
        "titulo": "Vegetariano",
        "imagemURL": "/categorias/vegetariano.png",
        "descricao": "Platos como empanadas de humita, milanesas de berenjena, guiso de quinoa, tartas de verduras y ensaladas frescas.",
        "path": "/categorias/molhos",
      }
    ],
    "receitas": [
      {
        "nome": "Locro Criollo",
        "categoria": {
          "titulo": "Platos Principales",
          "imagemURL": "/categorias/pratos_principais.png"
        },
        "descricao": "Un guiso tradicional argentino a base de maíz blanco, zapallo y carne, perfecto para días fríos.",
        "ingredientes": [
          { "nome": "Maíz blanco", "quantidade": 1, "medicao": { "nome": "taza" } },
          { "nome": "Zapallo", "quantidade": 500, "medicao": { "nome": "gramo" } },
          { "nome": "Carne de cerdo", "quantidade": 300, "medicao": { "nome": "gramo" } },
          { "nome": "Chorizo colorado", "quantidade": 2, "medicao": { "nome": "unidad" } },
          { "nome": "Cebolla", "quantidade": 1, "medicao": { "nome": "unidad" } }
        ],
        "imagemURL": "/receitas/locro-criollo.png",
        "tempoDePreparacao": "02:00:00",
        "passos": [
          "Dejar el maíz en remojo durante 12 horas.",
          "Cortar el zapallo y la carne en trozos pequeños.",
          "En una olla grande, cocinar el maíz y el zapallo con agua.",
          "Añadir la carne, el chorizo y la cebolla picada.",
          "Cocinar a fuego lento hasta que los ingredientes estén tiernos."
        ]
      },
      {
        "nome": "Empanadas",
        "categoria": {
          "titulo": "Panes y Empanadas",
          "imagemURL": "/categorias/empanadas.png"
        },
        "descricao": "Empanadas argentinas clásicas con relleno de carne y condimentos tradicionales.",
        "ingredientes": [
          { "nome": "Carne molida", "quantidade": 500, "medicao": { "nome": "gramo" } },
          { "nome": "Cebolla", "quantidade": 2, "medicao": { "nome": "unidad" } },
          { "nome": "Aceitunas verdes", "quantidade": 100, "medicao": { "nome": "gramo" } },
          { "nome": "Tapas para empanadas", "quantidade": 12, "medicao": { "nome": "unidad" } },
          { "nome": "Comino", "quantidade": 1, "medicao": { "nome": "cucharadita" } }
        ],
        "imagemURL": "/receitas/empanadas.png",
        "tempoDePreparacao": "01:00:00",
        "passos": [
          "Cortar la cebolla en cubos pequeños y saltear en aceite.",
          "Añadir la carne molida y cocinar hasta que esté dorada.",
          "Agregar las aceitunas picadas y el comino, mezclar bien.",
          "Rellenar las tapas para empanadas con la mezcla de carne.",
          "Cerrar las empanadas y hornear a 180°C durante 20 minutos."
        ]
      },
      {
        "nome": "Parrilla",
        "categoria": {
          "titulo": "Carnes",
          "imagemURL": "/categorias/carnes.png"
        },
        "descricao": "Una selección de cortes de carne asados a la perfección en la parrilla.",
        "ingredientes": [
          { "nome": "Costilla de res", "quantidade": 1, "medicao": { "nome": "kg" } },
          { "nome": "Chorizo", "quantidade": 4, "medicao": { "nome": "unidad" } },
          { "nome": "Morcilla", "quantidade": 2, "medicao": { "nome": "unidad" } },
          { "nome": "Sal gruesa", "quantidade": 2, "medicao": { "nome": "cucharada" } }
        ],
        "imagemURL": "/receitas/parrila.png",
        "tempoDePreparacao": "01:30:00",
        "passos": [
          "Preparar el fuego en la parrilla hasta obtener brasas.",
          "Sazonar los cortes de carne con sal gruesa.",
          "Colocar la carne, el chorizo y la morcilla en la parrilla.",
          "Asar a fuego lento, dando vuelta los cortes hasta el término deseado.",
          "Servir acompañado de chimichurri."
        ]
      }
    ]
}