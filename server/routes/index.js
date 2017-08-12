var express = require('express');
var router = express.Router();

require('dotenv').config()
console.log(process.env.SENDGRID_KEY)
var sg = require('sendgrid')(process.env.SENDGRID_KEY);



/* GET home page. */
router.post('/email', function(req, res, next) {
 let email = req.body.email;
 console.log(req.body.email)

        let base64Email = Buffer.from(email).toString('base64');
        var request = sg.emptyRequest()
          request.body = [
          {
            "email": email,

          },
          
        ];
          request.method = 'POST'
          request.path = '/v3/contactdb/recipients'
          sg.API(request, function (error, response) {

            if(error) {
              console.log(JSON.stringify(error))
              res.status(400).send({"status":"ERR", "MSG": error})
            }
      
              var request2 = sg.emptyRequest()
              request2.method = 'POST'
              request2.path = '/v3/contactdb/lists/1766685/recipients/' + base64Email;
              sg.API(request2, function (error2, response2) {
                
                if (error2) {
                  console.log(JSON.stringify(error2))
                   res.status(400).send({"status":"ERR", "MSG": error2})
                }
              })
                 res.status(200).send({"status":"OK"})
          })

       
});

module.exports = router;
