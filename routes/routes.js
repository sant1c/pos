'use strict';

module.exports = function(app, io) {
   app.use('/pos/dashboard/', require("../server/controller/dashboard/"));
   app.use('/pos/admin/', require("../server/controller/admin/createEmployee"));
}