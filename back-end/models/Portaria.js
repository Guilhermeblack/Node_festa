const mongoose = require('mongoose')
const Ingresso = require('./Ingresso')

const esquema = mongoose.Schema({
   nome: {
      type: String,
      require: () => this.RG //nome só é validado se rg for valido
   },
   RG: {
      type: Number,
      required: true,
      index: {unique: true}
   },

   ingresso_validado: {
      type: Boolean, //verifica se o ingresso é valido
      require: () => this.nome
   },
   validado: {
      type: Boolean,
      validate:{
         validator: function(Ingresso){
            if (this.RG in Ingresso.RG)
               return true
            else
               return false
         }
      },
      message: "RG invalido"
   },
   // vg_oculpadas: {
   //    type: Array,
   //    validate:{
   //       validator: function(Ingresso){
   //          if (this.validado)
   //             print("validou")
   //             let arr =[]
   //             for (let i; i == Ingresso.n_vaga[i]; i++)
   //                arr.push(i)
   //             return arr
   //       }
   //    },
   // },
   promotor: {
      type: mongoose.ObjectId,
      ref: 'Promotor', // Nome do model referenciado
   },
   // ingresso: {
   //    type: mongoose.ObjectId,
   //    ref: 'Ingressos', // Nome do model referenciado
   //    required: true
   // }
   
})

module.exports = mongoose.model('Portaria', esquema, 'portaria')