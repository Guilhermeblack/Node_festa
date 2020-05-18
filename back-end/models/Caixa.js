const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   qnt_fichas: {
      type: Number,
      required: true,
      min:1 // Atributo obrigatório
   },
   vlr_recebido: {
      type: Number,
      required: true
   },
   forma_pag: {
      type: String,
      // DI = dinheiro
      // CH = cheque
      // CC = cartão de crédito
      // CD = cartão de débito
      enum: ['DI', 'CH', 'CC', 'CD'],
      required: true
   },
   troco: {
      type: Number,
   },
   cliente: {
      type: mongoose.ObjectId,
      ref: 'Ingressos', // Nome do model referenciado
      required: true,
   }

})

module.exports = mongoose.model('Caixa', esquema, 'caixa')