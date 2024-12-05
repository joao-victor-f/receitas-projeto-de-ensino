export const data = {
    "categorias": [
      {
        "titulo": "Acompañamiento",
        "imagemURL": `/categorias/acompanhamento.png`,
      },
      {
        "titulo": "Bebidas",
        "imagemURL": `/categorias/bebidas.png`,
      },
      {
        "titulo": "Carnes",
        "imagemURL": `/categorias/carnes.png`,
      },
      {
        "titulo": "Entradas",
        "imagemURL": `/categorias/entradas.png`,
      },
      {
        "titulo": "Galletas y Dulces",
        "imagemURL": `/categorias/doces.png`,
      },
      {
        "titulo": "Panes y Empanadas",
        "imagemURL": `/categorias/empanadas.png`,
      },
      {
        "titulo": "Platos Principales",
        "imagemURL": `/categorias/pratos_principais.png`,
      },
      {
        "titulo": "Salsas y Aderezos",
        "imagemURL": `/categorias/molhos.png`,
      }
    ],
    "receitas": [
      {
        "nome": "Arroz con Verduras",
        "categoria": {
          "titulo": "Acompañamiento",
          "imagemURL": "https://example.com/arroz_legumes.jpg"
        },
        "descricao": "Arroz suelto acompañado de verduras frescas, perfecto para acompañar carnes.",
        "ingredientes": [
          {
            "nome": "Arroz",
            "quantidade": 1,
            "medicao": {
              "nome": "taza"
            }
          },
          {
            "nome": "Agua",
            "quantidade": 2,
            "medicao": {
              "nome": "taza"
            }
          },
          {
            "nome": "Zanahoria",
            "quantidade": 1,
            "medicao": {
              "nome": "unidad"
            }
          },
          {
            "nome": "Guisante",
            "quantidade": 0.5,
            "medicao": {
              "nome": "taza"
            }
          }
        ],
        "imagemURL": "https://example.com/arroz_legumes_final.jpg",
        "tempoDePreparacao": "00:30:00",
        "passos": [
          "Lavar el arroz hasta que el agua salga limpia.",
          "Cortar la zanahoria en cubos pequeños.",
          "En una olla, agregar el agua y dejar hervir.",
          "Agregar el arroz y la zanahoria, cocinar hasta que el arroz esté listo.",
          "Agregar los guisantes en los últimos minutos de cocción."
        ]
      },
      {
        "nome": "Jugo Natural de Naranja",
        "categoria": {
          "titulo": "Bebidas",
          "imagemURL": "https://example.com/suco_laranja.jpg"
        },
        "descricao": "Jugo refrescante de naranja natural, ideal para cualquier momento del día.",
        "ingredientes": [
          {
            "nome": "Naranja",
            "quantidade": 4,
            "medicao": {
              "nome": "unidad"
            }
          },
          {
            "nome": "Azúcar",
            "quantidade": 2,
            "medicao": {
              "nome": "cucharada"
            }
          },
          {
            "nome": "Agua",
            "quantidade": 1,
            "medicao": {
              "nome": "taza"
            }
          }
        ],
        "imagemURL": "https://example.com/suco_laranja_final.jpg",
        "tempoDePreparacao": "00:10:00",
        "passos": [
          "Exprimir las naranjas para obtener el jugo.",
          "Agregar el azúcar y mezclar bien.",
          "Diluir con el agua hasta obtener la consistencia deseada.",
          "Servir frío."
        ]
      },
      {
        "nome": "Bife a la Parrilla",
        "categoria": {
          "titulo": "Carnes",
          "imagemURL": "https://example.com/bife_parmegiana.jpg"
        },
        "descricao": "Plato clásico de carne asada a la parrilla, acompañado de una salsa especial.",
        "ingredientes": [
          {
            "nome": "Bife de carne vacuna",
            "quantidade": 2,
            "medicao": {
              "nome": "unidad"
            }
          },
          {
            "nome": "Sal",
            "quantidade": 1,
            "medicao": {
              "nome": "cucharadita"
            }
          },
          {
            "nome": "Pimienta",
            "quantidade": 0.5,
            "medicao": {
              "nome": "cucharadita"
            }
          },
          {
            "nome": "Aceite de oliva",
            "quantidade": 2,
            "medicao": {
              "nome": "cucharada"
            }
          }
        ],
        "imagemURL": "https://example.com/bife_parmegiana_final.jpg",
        "tempoDePreparacao": "00:20:00",
        "passos": [
          "Sazonar los bifes con sal y pimienta.",
          "Calentar el aceite de oliva en una parrilla o sartén.",
          "Asar los bifes hasta el término deseado.",
          "Servir acompañado de salsa y ensalada."
        ]
      },
      {
        "nome": "Galletas de Chocolate",
        "categoria": {
          "titulo": "Galletas y Dulces",
          "imagemURL": "https://example.com/biscoitos_chocolate.jpg"
        },
        "descricao": "Galletas crujientes con trozos de chocolate, perfectas para una merienda dulce.",
        "ingredientes": [
          {
            "nome": "Harina de trigo",
            "quantidade": 1.5,
            "medicao": {
              "nome": "taza"
            }
          },
          {
            "nome": "Mantequilla",
            "quantidade": 0.5,
            "medicao": {
              "nome": "taza"
            }
          },
          {
            "nome": "Azúcar",
            "quantidade": 0.75,
            "medicao": {
              "nome": "taza"
            }
          },
          {
            "nome": "Chocolate amargo",
            "quantidade": 100,
            "medicao": {
              "nome": "gramo"
            }
          }
        ],
        "imagemURL": "https://example.com/biscoitos_chocolate_final.jpg",
        "tempoDePreparacao": "00:40:00",
        "passos": [
          "Precalentar el horno a 180°C.",
          "Mezclar la mantequilla con el azúcar hasta obtener una crema suave.",
          "Añadir la harina de trigo y mezclar hasta formar una masa.",
          "Incorporar el chocolate picado.",
          "Formar bolitas con la masa y colocar en una bandeja para hornear.",
          "Hornear durante 12-15 minutos."
        ]
      }
    ]
}