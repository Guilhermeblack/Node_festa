const mongoose = require('mongoose')
const produt = require("../models/Produtos")

const esquema = mongoose.Schema({
   produto_nome: {
      type: String,
      // opçoes a aprtir no nome de produtos
      // aqui quero por um caixa de seleçao no front

      enum: [produt.nome],
      required: true
   },
   quantidade_produto: {
      type: Number,
      required: true,
      default: 1
   },
   entrada_fichas: {
      type: Number,
      required: true,
   },
   troco: {
      type: Number,
   },
   ingresso_vinc: {
      type: mongoose.ObjectId,
      ref: 'Ingresso', // Nome do model referenciado
      required: true
   }

})

module.exports = mongoose.model('Bar', esquema, 'bar')