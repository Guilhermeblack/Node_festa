const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   pedido_fichas: {
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

      // o ingresso seria a identificação do cliente que fez a retirada
      // do produto no caso do bar
      //da ficha no caso do caixa
      
      enum: ['DI', 'CH', 'CC', 'CD'],
      required: true
   },
   troco: {
      type: Number,
   },
   ingresso_vinc: {
      type: mongoose.ObjectId,
      ref: 'Ingresso', // Nome do model referenciado
      required: true,
   }

})

module.exports = mongoose.model('Caixa', esquema, 'caixa')