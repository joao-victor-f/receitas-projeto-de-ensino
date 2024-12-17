export const data = {
  "categorias": [
    {
      "titulo": "Acompañamiento",
      "imagemURL": "/imagens/categorias/acompanhamento.png",
      "descricao": "Opciones como puré de papas, papas el horno, ensaladas mixtas, arroz pilaf y verduras grilladas.",
      "path": "/receitas/acompanhamento",
      "fullImagemURL": "/imagens/receitas/acompanhamentos.jpg",
    },
    {
      "titulo": "Bebidas",
      "imagemURL": "/imagens/categorias/bebidas.png",
      "descricao": "Clásicos como el mate, tereré, clericó y licuados de frutas frescas.",
      "path": "/receitas/bebidas",
      "fullImagemURL": "/imagens/receitas/bebidas.jpg",
    },
    {
      "titulo": "Carnes",
      "imagemURL": "/imagens/categorias/carnes.png",
      "descricao": "Delicias como asado, churrasco, vacío, entraña, bondiola y matambre a la pizza.",
      "path": "/receitas/carnes",
      "fullImagemURL": "/imagens/receitas/carnes.jpg",
    },
    {
      "titulo": "Entradas",
      "imagemURL": "/imagens/categorias/entradas.png",
      "descricao": "Picadas y aperitivos tradicionales como provoleta, empanadas, croquetas, bruschettas y fiambre variados.",
      "path": "/receitas/entradas",
      "fullImagemURL": "/imagens/receitas/entradas.jpg",
    },
    {
      "titulo": "Galletas y Dulces",
      "imagemURL": "/imagens/categorias/doces.png",
      "descricao": "Postres típicos como alfajores, facturas, churros, pasta frolla y tortas.",
      "path": "/receitas/doces",
      "fullImagemURL": "/imagens/receitas/doces.jpg",
    },
    {
      "titulo": "Panes y Empanadas",
      "imagemURL": "/imagens/categorias/empanadas.png",
      "descricao": "Una sección dedicada a panes caseros como pan de campo, chipá, medialunas y empanadas de carne, pollo o queso.",
      "path": "/receitas/empanadas",
      "fullImagemURL": "/imagens/receitas/panesyempanadas.jpg",
    },
    {
      "titulo": "Platos Principales",
      "imagemURL": "/imagens/categorias/pratos_principais.png",
      "descricao": "Favoritos como milanesa, locro, guiso de lentejas, carbonada y cazuela de mariscos.",
      "path": "/receitas/pratosprincipais",
      "fullImagemURL": "/imagens/receitas/pratos_principais.jpg",
    },
    {
      "titulo": "Salsas y Aderezos",
      "imagemURL": "/imagens/categorias/molhos.png",
      "descricao": "Chimichurri, salsa criolla, alioli, mayonesa casera y vinagretas aromáticas.",
      "path": "/receitas/molhos",
      "fullImagemURL": "/imagens/receitas/molhos.jpg",
    },
    {
      "titulo": "Vegetariano",
      "imagemURL": "/imagens/categorias/vegetariano.png",
      "descricao": "Platos como empanadas de humita, milanesas de berenjena, guiso de quinoa, tartas de verduras y ensaladas frescas.",
      "path": "/receitas/vegetariano",
      "fullImagemURL": "/imagens/receitas/vegetarianos.jpg",
    }
  ],
  "receitas": [
    {
      "id": 1,
      "nome": "Locro Criollo",
      "categoria": {
        "titulo": "Platos Principales",
        "imagemURL": "/imagens/categorias/pratos_principais.png",
        "descricao": "Favoritos como milanesa, locro, guiso de lentejas, carbonada y cazuela de mariscos.",
        "path": "/receitas/pratosprincipais",
        "fullImagemURL": "/imagens/receitas/pratos_principais.jpg",
      },
      "descricao": "Un guiso tradicional argentino a base de maíz blanco, zapallo y carne, perfecto para días fríos.",
      "ingredientes": [
        { "ingrediente": { "id": 1, "nome": "Maíz blanco", "imagemURL": "/imagens/ingredientes/maiz_blanco.jpeg" }, "quantidade": 1, "medicao": "taza" },
        { "ingrediente": { "id": 2, "nome": "Zapallo", "imagemURL": "/imagens/ingredientes/zapallo.jpeg" }, "quantidade": 500, "medicao": "gramo" },
        { "ingrediente": { "id": 3, "nome": "Carne de cerdo", "imagemURL": "/imagens/ingredientes/carne_de_cerdo.jpeg" }, "quantidade": 300, "medicao": "gramo" },
        { "ingrediente": { "id": 4, "nome": "Chorizo", "imagemURL": "/imagens/ingredientes/chorizo.jpg" }, "quantidade": 2, "medicao": "unidad" },
        { "ingrediente": { "id": 5, "nome": "Cebolla", "imagemURL": "/imagens/ingredientes/cebolla.jpg" }, "quantidade": 1, "medicao": "unidad" }
      ],
      "imagensURL": ["/imagens/receitas/locro-criollo.png"],
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
      "videoId": '',
    },
    {
      "id": 2,
      "nome": "Empanadas",
      "categoria": {
        "titulo": "Panes y Empanadas",
        "imagemURL": "/imagens/categorias/empanadas.png",
        "descricao": "Una sección dedicada a panes caseros como pan de campo, chipá, medialunas y empanadas de carne, pollo o queso.",
        "path": "/receitas/empanadas",
        "fullImagemURL": "/imagens/receitas/panesyempanadas.jpg",
      },
      "descricao": "Empanadas argentinas clásicas con relleno de carne y condimentos tradicionales.",
      "ingredientes": [
        { "ingrediente": { "id": 6, "nome": "Carne molida", "imagemURL": "/imagens//ingredientes/carne_molida.jpeg" }, "quantidade": 500, "medicao": "gramo" },
        { "ingrediente": { "id": 5, "nome": "Cebolla", "imagemURL": "/imagens/ingredientes/cebolla.jpg" }, "quantidade": 2, "medicao": "unidad" },
        { "ingrediente": { "id": 7, "nome": "Aceitunas verdes", "imagemURL": "/imagens/ingredientes/aceituna.jpeg" }, "quantidade": 100, "medicao": "gramo" },
        { "ingrediente": { "id": 8, "nome": "Tapas para empanadas", "imagemURL": "/imagens/ingredientes/tapas_para_empanadas.jpeg" }, "quantidade": 12, "medicao": "unidad" },
        { "ingrediente": { "id": 9, "nome": "Comino", "imagemURL": "/imagens/ingredientes/comino.jpeg" }, "quantidade": 1, "medicao": "cucharadita" }
      ],
      "imagensURL": ["/imagens/receitas/empanadas.png"],
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
      "videoId": '',
    },
    {
      "id": 3,
      "nome": "Parrilla",
      "categoria": {
        "titulo": "Carnes",
        "imagemURL": "/imagens/categorias/carnes.png",
        "descricao": "Delicias como asado, churrasco, vacío, entraña, bondiola y matambre a la pizza.",
        "path": "/receitas/carnes",
        "fullImagemURL": "/imagens/receitas/carnes.jpg",
      },
      "descricao": "Una selección de cortes de carne asados a la perfección en la parrilla.",
      "ingredientes": [
        { "ingrediente": { "id": 10, "nome": "Costilla de res", "imagemURL": "/imagens/ingredientes/costilla_de_res.jpeg" }, "quantidade": 1, "medicao": "kg" },
        { "ingrediente": { "id": 4, "nome": "Chorizo", "imagemURL": "/imagens/ingredientes/chorizo.jpg" }, "quantidade": 4, "medicao": "unidad" },
        { "ingrediente": { "id": 11, "nome": "Morcilla", "imagemURL": "/imagens/ingredientes/morcilla.jpg" }, "quantidade": 2, "medicao": "unidad" },
        { "ingrediente": { "id": 12, "nome": "Sal gruesa", "imagemURL": "/imagens/ingredientes/sal_gruesa.jpeg" }, "quantidade": 2, "medicao": "cucharada" }
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
      "videoId": '0slJ0JckFTg',
    },
    {
      "id": 4,
      "nome": "Alfajor Saludable",
      "categoria": {
        "titulo": "Galletas y Dulces",
        "imagemURL": "/imagens/categorias/doces.png",
        "descricao": "Postres típicos como alfajores, facturas, churros, pasta frolla y tortas.",
        "path": "/receitas/doces",
        "fullImagemURL": "/imagens/receitas/doces.jpg",
      },
      "descricao": "El alfajor argentino tiene una historia que se remonta a siglos atrás, con raíces probablemente en la tradición musulmana que llevó dulces similares a la Península Ibérica. Durante la colonización de América Latina, los españoles introdujeron el alfajor en la región, donde se popularizó y adaptó a los ingredientes locales. En el caso de Argentina, el alfajor fue perfeccionado con sabores y técnicas únicas, especialmente en la región de Córdoba, donde se convirtió en un símbolo de la cultura culinaria del país. Hoy en día, es un dulce icónico de Argentina, tradicionalmente hecho con dos galletas suaves rellenas de dulce de leche y cubiertas con chocolate o azúcar glas. Es un verdadero tesoro de la gastronomía argentina, consumido en diversas ocasiones, desde festividades tradicionales hasta como un sabroso tentempié.",
      "ingredientes": [
        { "ingrediente": { "id": 17, "nome": "Harina de avena", "imagemURL": "/imagens/ingredientes/farinha-aveia.png", "path": "/ingrediente/farinha_aveia9012391" }, "quantidade": 1, "medicao": "taza" },
        { "ingrediente": { "id": 15, "nome": "Harina de arroz", "imagemURL": "/imagens/ingredientes/farinha-arroz.png", "path": "/ingrediente/harina_arroz" }, "quantidade": 0.5, "medicao": "taza" },
        { "ingrediente": { "id": 13, "nome": "Cacao en polvo 100%", "imagemURL": "/imagens/ingredientes/cacao-en-polvo-100.jpg", "path": "/ingrediente/cacao_en_polvo" }, "quantidade": 3, "medicao": "cucharada" },
        { "ingrediente": { "id": 18, "nome": "Miel", "imagemURL": "/imagens/ingredientes/mel.jpg", "path": "/ingrediente/miel912031" }, "quantidade": 0.25, "medicao": "taza" },
        { "ingrediente": { "id": 14, "nome": "Huevo", "imagemURL": "/imagens/ingredientes/huevos.jpeg", "path": "/ingrediente/huevo19201" }, "quantidade": 2, "medicao": "unidade" },
        { "ingrediente": { "id": 16, "nome": "Esencia de vainilla", "imagemURL": "/imagens/ingredientes/esencia-vainilla.png", "path": "/ingrediente/esencia_vainilla91029" }, "quantidade": 1, "medicao": "cucharadita" },
        { "ingrediente": { "id": 19, "nome": "Polvo de hornear", "imagemURL": "/imagens/ingredientes/polvo-de-hornear.jpeg", "path": "/ingrediente/polvo_de_hornear190239120" }, "quantidade": 1, "medicao": "cucharadita" },
        { "ingrediente": { "id": 21, "nome": "Dulce de leche fit", "imagemURL": "/imagens/ingredientes/dulce-de-leche-fit.jpeg", "path": "/ingrediente/dulce_de_leche_fit" }, "quantidade": 120, "medicao": "gramo" },
        { "ingrediente": { "id": 20, "nome": "Tablete de choco 70%", "imagemURL": "/imagens/ingredientes/tablete70.png", "path": "/ingrediente/tablete70" }, "quantidade": 100, "medicao": "gramo" }
      ],
      "passos": [
        "Mezcla la harina de avena, la harina de arroz, el cacao en polvo y el polvo de hornear en un bol grande. En un recipiente separado, bate el huevo, añade la miel y la esencia de vainilla, mezclando bien. Agrega los ingredientes líquidos a la mezcla de harinas y mezcla hasta obtener una masa homogénea. Si la masa está muy seca, añade un poco de agua para ajustarla. Refrigera la masa por 20 minutos.",
        "Precalienta el horno a 180°C. Usa un cortador o un vaso pequeño para cortar los círculos de masa y colócalos en una bandeja de horno forrada con papel manteca o engrasada. Hornea por 8 a 10 minutos o hasta que los bordes estén ligeramente dorados. Deja que las galletas se enfríen completamente.",
        "Coloca una porción del dulce de leche fit sobre una galleta y cubre con otra, presionando ligeramente para que queden unidas. Repite este proceso hasta montar todos los alfajores.",
        "Derrite el chocolate 70% cacao en baño maría o en el microondas en intervalos de 30 segundos, revolviendo cada vez para evitar que se queme. Sumerge cada alfajor en el chocolate derretido y colócalos en una rejilla o en una hoja de papel manteca para que se enfríen y se endurezcan.",
        "Deja que el chocolate se solidifique completamente antes de guardar los alfajores en un recipiente hermético o de servir."
      ],
      "imagensURL": [
        "/imagens/paginaprincipal/alfajor.png",
        "/imagens/receitas/informacaonutricional.png",
        "/imagens/receitas/folder-1-portugues.jpg",
        "/imagens/receitas/folder-2-portugues.jpg",
        "/imagens/receitas/folder-1-espanhol.jpg",
        "/imagens/receitas/folder-2-espanhol.jpg",
      ],
      "tempoDePreparacao": "01:00:00",
      "path": "/receita/alfajor_saludable",
      "substituicoes": [
        "Sustituye el dulce de leche por mermelada, si lo prefieres.",
        "Para un relleno diferente e igualmente saludable, puedes usar pasta de maní o almendras mezcladas con endulzante.",
        "El chocolate puede ser blanco o amargo, según tu preferencia.",
      ],
      "conselhos": [
        "Utiliza un dulce de leche de alta calidad para asegurar el sabor auténtico.",
        "Deja reposar los alfajores antes de servirlos para que queden más tiernos.",
        "Prueba añadir coco rallado en los bordes para un toque especial.",
      ],
      "visaoGeral": "El alfajor argentino tiene una historia que se remonta a siglos atrás, con raíces probablemente en la tradición musulmana que llevó dulces similares a la Península Ibérica. Durante la colonización de América Latina, los españoles introdujeron el alfajor en la región, donde se popularizó y adaptó a los ingredientes locales. En el caso de Argentina, el alfajor fue perfeccionado con sabores y técnicas únicas, especialmente en la región de Córdoba, donde se convirtió en un símbolo de la cultura culinaria del país. Hoy en día, es un dulce icónico de Argentina, tradicionalmente hecho con dos galletas suaves rellenas de dulce de leche y cubiertas con chocolate o azúcar glas. Es un verdadero tesoro de la gastronomía argentina, consumido en diversas ocasiones, desde festividades tradicionales hasta como un sabroso tentempié.",
      "porcoes": 12,
      "videoId": 'ldw_YCjtMfo',
    }
  ],
  "ingredientes": [
    {
      "id": 1,
      "nome": "Maíz blanco",
      "imagemURL": "/imagens/ingredientes/maiz_blanco.jpeg",
      "path": "/ingrediente/maz_blanco216086"
    },
    {
      "id": 2,
      "nome": "Zapallo",
      "imagemURL": "/imagens/ingredientes/zapallo.jpeg",
      "path": "/ingrediente/zapallo574348"
    },
    {
      "id": 3,
      "nome": "Carne de cerdo",
      "imagemURL": "/imagens/ingredientes/carne_de_cerdo.jpeg",
      "path": "/ingrediente/carne_de_cerdo639480"
    },
    {
      "id": 4,
      "nome": "Chorizo",
      "imagemURL": "/imagens/ingredientes/chorizo.jpg",
      "path": "/ingrediente/chorizo560526"
    },
    {
      "id": 5,
      "nome": "Cebolla",
      "imagemURL": "/imagens/ingredientes/cebolla.jpg",
      "path": "/ingrediente/cebolla856410"
    },
    {
      "id": 6,
      "nome": "Carne molida",
      "imagemURL": "/imagens/ingredientes/carne_molida.jpeg",
      "path": "/ingrediente/carne_molida167778"
    },
    {
      "id": 7,
      "nome": "Aceitunas verdes",
      "imagemURL": "/imagens/ingredientes/aceituna.jpeg",
      "path": "/ingrediente/aceitunas_verdes574358"
    },
    {
      "id": 8,
      "nome": "Tapas para empanadas",
      "imagemURL": "/imagens/ingredientes/tapas_para_empanadas.jpeg",
      "path": "/ingrediente/tapas_para_empanadas309469"
    },
    {
      "id": 9,
      "nome": "Comino",
      "imagemURL": "/imagens/ingredientes/comino.jpeg",
      "path": "/ingrediente/comino195860"
    },
    {
      "id": 10,
      "nome": "Costilla de res",
      "imagemURL": "/imagens/ingredientes/costilla_de_res.jpeg",
      "path": "/ingrediente/costilla_de_res810825"
    },
    {
      "id": 11,
      "nome": "Morcilla",
      "imagemURL": "/imagens/ingredientes/morcilla.jpg",
      "path": "/ingrediente/morcilla968482"
    },
    {
      "id": 12,
      "nome": "Sal gruesa",
      "imagemURL": "/imagens/ingredientes/sal_gruesa.jpeg",
      "path": "/ingrediente/sal_gruesa776192"
    },
    {
      "id": 13,
      "nome": "Cacao en polvo 100%",
      "imagemURL": "/imagens/ingredientes/cacao-en-polvo-100.jpg",
      "path": "/ingrediente/cacao_en_polvo",
    },
    {
      "id": 14,
      "nome": "Huevo",
      "imagemURL": "/imagens/ingredientes/huevos.jpeg",
      "path": "/ingrediente/huevo19201",
    },
    {
      "id": 15,
      "nome": "Harina de arroz",
      "imagemURL": "/imagens/ingredientes/farinha-arroz.png",
      "path": "/ingrediente/harina_arroz",
    },
    {
      "id": 16,
      "nome": "Esencia de vainilla",
      "imagemURL": "/imagens/ingredientes/esencia-vainilla.png",
      "path": "/ingrediente/esencia_vainilla91029",
    },
    {
      "id": 17,
      "nome": "Harina de avena",
      "imagemURL": "/imagens/ingredientes/farinha-aveia.png",
      "path": "/ingrediente/farinha_aveia9012391",
    },
    {
      "id": 18,
      "nome": "Miel",
      "imagemURL": "/imagens/ingredientes/mel.jpg",
      "path": "/ingrediente/miel912031",
    },
    {
      "id": 19,
      "nome": "Polvo de hornear",
      "imagemURL": "/imagens/ingredientes/polvo-de-hornear.jpeg",
      "path": "/ingrediente/polvo_de_hornear190239120",
    },
    {
      "id": 20,
      "nome": "Tablete de choco 70%",
      "imagemURL": "/imagens/ingredientes/tablete70.png",
      "path": "/ingrediente/tablete70",
    },
    {
      "id": 21,
      "nome": "Dulce de leche fit",
      "imagemURL": "/imagens/ingredientes/dulce-de-leche-fit.jpeg",
      "path": "/ingrediente/dulce_de_leche_fit",
    },
  ]
}