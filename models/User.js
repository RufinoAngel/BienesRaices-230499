import {DataTypes} from 'sequelize'
import db from '../db/config.js'

const User=db.define('tbb_users',{
    name:{
        type:DataTypes.STRING,
        allownull:false
    },
    email:{
        type:DataTypes.STRING,
        allownull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allownull:false
    },
    token:DataTypes.STRING,
    confirmed:DataTypes.BOOLEAN
})

export default User;