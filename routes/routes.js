'use strict';

module.exports = function(app, io) {
   app.use('/pos/login/', require("../server/controller/login/"));
   app.use('/pos/admin/', require("../server/controller/admin/createEmployee"));
}