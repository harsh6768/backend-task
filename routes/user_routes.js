const express = require('express');
const Router = express.Router();


const OrderController = require('../controller/order_controller');

Router.get('/order',OrderController.get);
Router.get('/order/updateNoOfOrder',OrderController.updateNoOfOrder);

module.exports = Router;
