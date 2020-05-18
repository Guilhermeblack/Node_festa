const mongoose = require('mongoose')

const esquema = mongoose.Schema({

   nome: {
      type: String,
      required:true
   },
   setores: {
      type: String,
   },
   artistas: {
      type: String,
      required: true
   },
   telefone: {
      type: String,
      required: true
   },
   Estrutura: {
      type: String,
   },
   horarios: {
      type: String,
   }
})

module.exports = mongoose.model('Promotor', esquema, 'promotor')