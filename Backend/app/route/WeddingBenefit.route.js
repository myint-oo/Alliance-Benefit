<<<<<<< HEAD
module.exports = function (app) {

    
    const wedding_benefit = require('../controller/wedding_benefit');
    const upload = require('../config/wedding_benefit_multer_config');

    app.post("/wedding_benefit/saveWeddingBenefit", upload.array('uploadfile', 5), wedding_benefit.saveWeedingBenefit);
=======
module.exports = function (app) {

    
    const wedding_benefit = require('../controller/wedding_benefit');
    const upload = require('../config/wedding_benefit_multer_config');

    app.post("/wedding_benefit/saveWeddingBenefit", upload.array('uploadfile', 5), wedding_benefit.saveWeedingBenefit);
>>>>>>> rtdev/master
}