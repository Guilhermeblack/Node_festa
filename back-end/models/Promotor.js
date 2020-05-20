const mongoose = require('mongoose')

const esquema = mongoose.Schema({

   nome: {
      type: String,
      required:true
   },

   artistas: {
      type: String,
      required: true
   },
   telefone: {
      type: Number,
      required: true
   },
   Estrutura: {
      type: String,
   },

})

module.exports = mongoose.model('Promotor', esquema, 'promotor')