'use strict';

module.exports = function(app, io) {
   app.use('/pos/login/', require("../server/controller/login/"));
   app.use('/pos/admin/', require("../server/controller/admin/createEmployee"));
   app.use('/pos/getTables/', require("../server/controller/employee/tables"));
   app.use('/pos/calculation/', require("../server/controller/employee/calculation"));
}