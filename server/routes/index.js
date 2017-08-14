var express = require('express');
var router = express.Router();
const { Client } = require('pg')
const bcrypt = require('bcrypt');
var Sequelize = require('sequelize');
const sequelize = new Sequelize({dialect:'postgres', url: process.env.DATABASE_URL});

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
    console.log(process.env.DATABASE_URL)

    bcrypt.hash(pw, 10, function(err, hash) {
      
      sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        res.status(400).send({"status":"ERR"})
        console.error('Unable to connect to the database:', err);
      });
    
      sequelize.query(`INSERT INTO emails (email, password, zipcode) values(${email}, ${hash}, ${zipcode})`).spread((results, metadata) => {
        console.log(results, metadata)
        res.status(200).send({"status": "success"})
      })
    })
});
    

router.post('/login', function(req, res) {
  const email = req.body.email;
  const pw = req.body.password;

   sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        res.status(400).send({"status":"ERR"})
        console.error('Unable to connect to the database:', err);
      });
    
      sequelize.query(` SELECT password FROM USERS WHERE EMAIL = ${email}`).spread((results, metadata) => {
        console.log(results, metadata)
          bcrypt.compare(pw, res, function(err, res) {
              //console.log(err || res)
            if (err) {
              res.status(400).send({"status":"error"})
            }
        });
      })
})


       

         



  
    

    

module.exports = router;
