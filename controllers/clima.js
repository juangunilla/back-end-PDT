const res = require('express/lib/response');
const { default: mongoose, model } = require('mongoose');
const{climaModel} = require ('../models')

/**
 * Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
   const data = await climaModel.find({});

    res.send({data});
};
/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
}

/**
 * insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req
    console.log(body)
    const data = await climaModel.create(body)
    res.send({data})
};
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {


}
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {};
module.exports = {getItems, getItem, createItem, updateItem, deleteItem};