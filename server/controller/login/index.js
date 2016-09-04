/*************************************************************************
Created nikhil :::::::::            
                   ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   :  index.js

description :  dashboard index
****************************************************************************
date        version       auther               Change Description  
***************************************************************************  
8/11/2016     1.0          Nikhil               Created route for getImages.
8/21/2016     1.0.1        Nikhil               Created route for getGameId.
**************************************************************************/
'use strict';

let io;
let express = require('express');
let router = express.Router();
let cors = require('cors');

router.use(cors());
let loginController = require('./login.controller');

// version 1.0

router.post('/login', loginController.getLogin);

module.exports = router;