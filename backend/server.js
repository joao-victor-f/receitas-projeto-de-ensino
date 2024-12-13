const express = require('express');
const multer = require('multer');
const path = require("path");
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Configuração do multer para salvar no diretório "uploads"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Diretório onde os arquivos serão salvos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Servir arquivos estáticos do diretório /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Endpoint para upload de imagem
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Erro ao salvar a imagem.");
  }
    const imageURL = `http://localhost:3000/uploads/${req.file.filename}`;
    res.json({imageURL: imageURL});
});

// Servidor ouvindo na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});