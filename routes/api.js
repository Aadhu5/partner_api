
var express = require('express');
const mysqlconn = require("../connection");
var router = express.Router();

/***************************************************************DEFAULT */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/***************************************************************CHECK EXIST */
router.get('/checkExist/:fr_add/:to_add', (req, res) => {
  var qry_1 = 'SELECT COUNT(*) AS ac_count FROM block_data WHERE fr_add = ? AND to_add = ?';
  mysqlconn.query(qry_1, [req.params.fr_add, req.params.to_add], (err, rows, fields) => {
      if(!err)
      {
        if(rows[0].ac_count>=1)
        {
          json = [{ isExist : true }];
        } else {
          json = [{ isExist : false }];
        }
        output = { status : '0', message : 'Data fetching success', data : json };
      } else {
        output = { status : '1', message : 'Server side error, Do after some hours'};
      }
      res.send(output);
  })
});
/***************************************************************INSERT DETAILS */
router.post('/insert_from', (req, res) => {
  let ins = req.body;
  var qry_2 = "INSERT INTO block_data (fr_add, to_add, fr_hash, fr_time, details) VALUES ?";
  var values = [
    [ins.fr_add, ins.to_add, ins.fr_hash, ins.fr_time, ins.details]
  ];
  mysqlconn.query(qry_2, [values], (err, rows, fields) => {
    if (!err)
    {
      json = [{ insertId : rows.insertId }];
      output = { status : '0', message : 'Data successfully inserted', data : json };
    } else {
      output = { status : '1', message : 'Server side error, Do after some hours'};
    }
    res.send(output);
  })
});
/***************************************************************SELECT REQ */
router.get('/new_request/:address/:status', (req, res) => {
  var qry_3 = 'SELECT * FROM block_data WHERE to_add = ? AND status = ?';
  mysqlconn.query(qry_3, [req.params.address, req.params.status], (err, rows, fields) => {
    if(!err)
    {
      json = [{ list : rows }];
      output = { status : '0', message : 'List is ready', data : json };
    } else {
      output = { status : '1', message : 'Server side error, Do after some hours'};
    }
    res.send(output);
  })
});
/***************************************************************ACCEPT REQ */
router.get('/accept_request/:address/:status', (req, res) => {
  var qry_3 = 'SELECT * FROM block_data WHERE to_add = ? AND status = ? OR fr_add = ?';
  mysqlconn.query(qry_3, [req.params.address, req.params.status, req.params.address], (err, rows, fields) => {
    if(!err)
    {
      json = [{ list : rows }];
      output = { status : '0', message : 'List is ready', data : json };
    } else {
      output = { status : '1', message : 'Server side error, Do after some hours', data : err};
    }
    res.send(output);
  })
});
/***************************************************************PARTICULAR REQ */
router.get('/req_details/:id', (req, res) => {
  var qry_4 = 'SELECT * FROM block_data WHERE id = ?';
  mysqlconn.query(qry_4, [req.params.id], (err, rows, fields) => {
    if(!err)
    {
      json = [{ details : rows }];
      output = { status : '0', message : 'Details are ready', data : json };
    } else {
      output = { status : '1', message : 'Server side error, Do after some hours'};
    }
    res.send(output);
  })
});
/***************************************************************ACCEPT REQ */
router.post('/req_accept', (req, res) => {
  let upd = req.body;
  var qry_5 = "UPDATE block_data SET to_hash =? , to_time =? , status =?  WHERE id = ?";
  mysqlconn.query(qry_5, [upd.to_hash, upd.to_time, upd.status, upd.req_id], (err, rows, fields) => {
      if(!err)
      {
        output = { status : '0', message : 'Details are updated'};
      } else {
        output = { status : '1', message : 'Server side error, Do after some hours'};
      }
      res.send(output);
  })
});
/***************************************************************IGNORE REQ */
router.get('/req_ignore/:status/:req_id', (req, res) => {
  var qry_6 = "UPDATE block_data SET status =?  WHERE id = ?";
  mysqlconn.query(qry_6, [req.params.status, req.params.req_id], (err, rows, fields) => {
      if(!err)
      {
        output = { status : '0', message : 'Request rejected successfully'};
      } else {
        output = { status : '1', message : 'Server side error, Do after some hours'};
      }
      res.send(output);
  })
});
/*************************************************************** */
module.exports = router;