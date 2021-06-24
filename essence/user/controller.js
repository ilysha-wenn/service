const service = require('./service');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.registration = async(req, res) =>{
    try { const error = validationResult(req);
          if(!error.isEmpty()) return res.json(error);
        const newUser = await service.registration(req.body, req.files.picture);
        res.json(newUser);
    }catch (e) { res.status(500).json(e.message)};
}

module.exports.login = async(req, res) =>{
    try { const userLog = await service.login(req.body);
          const token = jwt.sign({id: userLog.id}, config.get('secret'), {expiresIn: "1h"});
          res.json({
              token,
              userLog: {
                  id: userLog.id,
                  username: userLog.username,
                  role: userLog.role,
                  age: userLog.age,
                  picture: userLog.picture
              }
          })
    }catch (e) { res.status(500).json(e.message)};
}