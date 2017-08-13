var express = require('express');
var router = express.Router();
var pg = require('pg')
const bcrypt = require('bcrypt');

require('dotenv').config()
console.log(process.env.SENDGRID_KEY)
var sg = require('sendgrid')(process.env.SENDGRID_KEY);


const connectionString = process.env.DATABASE_URL


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

router.post('/register', function(req, res) {
    const email = req.body.email;
    const pw = req.body.password;
    const zipcode = req.body.zipcode;

    bcrypt.hash(pw, 10, function(err, hash) {

       pg.connect(connectionString, (err, client, done) => {
          // Handle connection errors
          if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
          }
          // SQL Query > Insert Data
         client.query(' INSERT INTO emails (email, password, zipcode) values($1, $2, $3)' [email, hash, zipcode])
          // SQL Query > Select Data
          // Stream results back one row at a time
          query.on('error', (err) => {
            res.status(400).send({"status":"ERR"})
          });
          // After all data is returned, close connection and return results
          query.on('end', () => {
            done();
            return res.status(200).send({"status":"OK"})
          });
        });
    })
});
    

router.post('/login', function(req, res) {
  const email = req.body.email;
  const pw = req.body.password;

  pg.connect(connectionString, (err, client, done) => {
          if(err) {
            done();
            console.log(err);
            return res.status(400).json({success: false, data: err});
          }
          // SQL Query > Insert Data
          client.query('SELECT password FROM USERS WHERE EMAIL = $1', [email] ,(err, res) => {
            if (err) {
              console.log(err)
              res.status(400).send({"status":"ERR"})
            }
            console.log(res)
            client.end()

            bcrypt.compare(pw, res, function(err, res) {
              console.log(err || res)
            });
          })
         
  });


  
    
});
    

module.exports = router;
