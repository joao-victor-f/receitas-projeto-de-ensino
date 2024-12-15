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
app.post("/upload", upload.array("images", 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'Nenhum arquivo enviado!' });
  }

  const fileUrls = req.files.map((file) => ({
    name: file.originalname,
    url: `http://localhost:3000/uploads/${file.filename}`,
  }));

  res.json({
    message: 'Upload realizado com sucesso!',
    files: fileUrls,
  });
});

// Servidor ouvindo na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});