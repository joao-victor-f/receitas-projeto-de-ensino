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
          { "ingrediente": {"nome": "Maíz blanco", "imagemURL": "exemplo.com"}, "quantidade": 1, "medicao": "taza" },
          { "ingrediente": {"nome": "Zapallo", "imagemURL": "exemplo.com"}, "quantidade": 500, "medicao": "gramo"  },
          { "ingrediente": {"nome": "Carne de cerdo", "imagemURL": "exemplo.com"}, "quantidade": 300, "medicao": "gramo"  },
          { "ingrediente": {"nome": "Chorizo colorado", "imagemURL": "exemplo.com"}, "quantidade": 2, "medicao": "unidad"  },
          { "ingrediente": {"nome": "Cebolla", "imagemURL": "exemplo.com"}, "quantidade": 1, "medicao": "unidad" }
        ],
        "imagemURL": "/receitas/locro-criollo.png",
        "tempoDePreparacao": "02:00:00",
        "passos": [
          "Dejar el maíz en remojo durante 12 horas.",
          "Cortar el zapallo y la carne en trozos pequeños.",
          "En una olla grande, cocinar el maíz y el zapallo con agua.",
          "Añadir la carne, el chorizo y la cebolla picada.",
          "Cocinar a fuego lento hasta que los ingredientes estén tiernos."
        ],
        "path": "/receita/locro_criollo",
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
          { "ingrediente": {"nome": "Carne molida", "imagemURL":"exemplo.com"}, "quantidade": 500, "medicao": "gramo" },
          { "ingrediente": {"nome": "Cebolla", "imagemURL": "exemplo.com"}, "quantidade": 2, "medicao": "unidad" },
          { "ingrediente": {"nome": "Aceitunas verdes", "imagemURL": "exemplo.com"}, "quantidade": 100, "medicao": "gramo" },
          { "ingrediente": {"nome": "Tapas para empanadas", "imagemURL": "exemplo.com"}, "quantidade": 12, "medicao": "unidad" },
          { "ingrediente": {"nome": "Comino", "imagemURL": "exemplo.com"}, "quantidade": 1, "medicao": "cucharadita" }
        ],
        "imagemURL": "/receitas/empanadas.png",
        "tempoDePreparacao": "01:00:00",
        "passos": [
          "Cortar la cebolla en cubos pequeños y saltear en aceite.",
          "Añadir la carne molida y cocinar hasta que esté dorada.",
          "Agregar las aceitunas picadas y el comino, mezclar bien.",
          "Rellenar las tapas para empanadas con la mezcla de carne.",
          "Cerrar las empanadas y hornear a 180°C durante 20 minutos."
        ],
        "path": "/receita/empanadas",
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
          { "ingrediente": {"nome": "Costilla de res", "imagemURL": "exemplo.com"}, "quantidade": 1, "medicao": "kg" },
          { "ingrediente": {"nome": "Chorizo", "imagemURL": "exemplo.com"}, "quantidade": 4, "medicao": "unidad" },
          { "ingrediente": {"nome": "Morcilla", "imagemURL": "exemplo.com"}, "quantidade": 2, "medicao": "unidad" },
          { "ingrediente": {"nome": "Sal gruesa", "imagemURL": "exemplo.com"}, "quantidade": 2, "medicao": "cucharada" }
        ],
        "imagemURL": "/receitas/parrila.png",
        "tempoDePreparacao": "01:30:00",
        "passos": [
          "Preparar el fuego en la parrilla hasta obtener brasas.",
          "Sazonar los cortes de carne con sal gruesa.",
          "Colocar la carne, el chorizo y la morcilla en la parrilla.",
          "Asar a fuego lento, dando vuelta los cortes hasta el término deseado.",
          "Servir acompañado de chimichurri."
        ],
        "path": "/receita/parrila",
      }
    ]
}