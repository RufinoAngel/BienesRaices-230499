import {DataTypes} from 'sequelize'
import db from '../config/db.js'
import { defineArguments } from 'graphql/type/definition'
const Usuario=db.define('usuarios',{
    nombre:{
        type:DataTypes.STRING,
        allownull:false
    },
    email:{
        type:DataTypes.STRING,
        allownull:false
    },
    password:{
        type:DataTypes.STRING,
        allownull:false
    },
    token:DataTypes.STRING,
    confimado:DataTypes.BOOLEAN
})

export default Usuario