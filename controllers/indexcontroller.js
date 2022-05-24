const { crudTask } = require('../models/indexmodel');

function index (request, response) {
      crudTask.find({}, 'name course year', function(err, records){
            if (err) console.log(err);
            response.json({
                  status: "completed",
                  records
       });
      });
}

 function handlePost (request, response){
       const { name, course, year} = request.body;
       const addRecord = new crudTask({
             name,
             course,
             year
       });
       addRecord.save(function(err, newRecord){
             if (err) console.log(err);

             response.json({
                  status: "completed",
                  newRecord
            });
       });
   
  }

  module.exports = { index, handlePost }
