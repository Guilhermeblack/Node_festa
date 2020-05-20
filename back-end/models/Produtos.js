const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   nome: {
      type: String,
      required: true,

      // falha minha aqui
      //mais ta rodando

   },
   vlr: {
      type: Number,
      required: true
   },
   tipo: {
      type: String,
      // A - alimento
      // B - bebida
      enum: ['B','A'],
      default: 'B',
      required: true
   },
   barref: {
      type: mongoose.ObjectId,
      ref: 'Bar', // Nome do model referenciado
   },

})

module.exports = mongoose.model('Produtos', esquema, 'produtos')