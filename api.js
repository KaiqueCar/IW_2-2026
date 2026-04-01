import express from 'express';
import cors from 'cors'; 
import Crud from './index.js';

const app = express();
app.use(cors());
app.use(express.json());

/* =========================
   GET - LISTAR TODOS
========================= */
app.get('/autors', (req, res) => { 
  Crud.selecionar((dados) => {
    res.json(dados);
  });
});

/* =========================
   GET - POR ID
========================= */
app.get('/autors/:id', (req, res) => {
  const id = req.params.id;

  Crud.selecionaPorId(id, (autor) => {
    if (!autor) {
      return res.status(404).json({ erro: 'autor não encontrado' });
    }
    res.json(autor);
  });
});

/* =========================
   POST - INSERIR
========================= */
app.post('/autors', (req, res) => {
  const autor = req.body;

  Crud.inserir(autor, (novoautor) => {
    res.status(201).json(novoautor);
  });
});

/* =========================
   PUT - ATUALIZAR
========================= */
app.put('/autors/:id', (req, res) => {
  const autor = req.body;
  autor.id = req.params.id;

  Crud.atualizar(autor, (autorAtualizado) => {
    res.json(autorAtualizado);
  });
});

/* =========================
   DELETE - REMOVER
========================= */
app.delete('/autors/:id', (req, res) => {
  const autor = { id: req.params.id };

  Crud.apagar(autor, () => {
    res.status(204).send();
  });
});

/* =========================
   SERVER
========================= */
app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});