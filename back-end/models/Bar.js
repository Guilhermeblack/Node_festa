const mongoose = require('mongoose')
const produt = require("../models/Produtos")

const esquema = mongoose.Schema({
   produto: {
      type: String,
      // opçoes a aprtir no nome de produtos
      enum: [produt.nome],
      required: true
   },
   quantidade: {
      type: Number,
      required: true,
      default: 1
   },
   qnt_fichas: {
      type: Number,
      required: true,
   },
   cliente: {
      type: mongoose.ObjectId,
      ref: 'Ingressos', // Nome do model referenciado
      required: true
   }

})

module.exports = mongoose.model('Bar', esquema, 'bar')