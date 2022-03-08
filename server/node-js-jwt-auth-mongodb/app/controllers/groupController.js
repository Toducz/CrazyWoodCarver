const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const Group = db.group

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.joinGroup = (req, res) => {

  const memberUserId = req.userId;
  const groupCode = req.body.groupCode;

  console.log(groupCode)

  Group.findOne({ groupCode }, (err, group) => {

    if (err) {
      console.log("Valami hiba történt.")
    }

    if (group) {

      console.log(group)

      const members = group.members;

      if (!members.includes(memberUserId)) {
        members.push(memberUserId)

        group.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
        })

        res.status(200).send("Beraktam.");
      } else {
        res.status(200).send({
          message:"Tartalmazza ezt a személyt."
        });
      }

    } else {
      res.status(404).send({
        message: "Nincs, ilyen group!"
      });
    }
  })
};


const isValidValue = (value) => {
  if(!value){
    return false
  }

  return true
}

exports.createGroup = (req, res) => {

  const groupCode = req.body.groupCode
  const owner = req.userId
  console.log(req.body.startDate)
  const startDate = Date.parse(req.body.startDate)
  const endDate = Date.parse(req.body.endDate)
  const dateObjectStart = new Date(startDate);
  const dateObjectEnd = new Date(endDate);
 

  console.log(groupCode)
  console.log(owner)
  console.log(startDate)  
  console.log(endDate)

  if(
    !(isValidValue(groupCode) &&
    isValidValue(owner) &&
    !isNaN(startDate) &&
    !isNaN(endDate) &&
    startDate < endDate
  )
  ){
      res.status(200).send("Rossz adat!")
      return
  }

  Group.findOne({ groupCode }, (err, group) => {
    if (err) {
      res.status(500).send("Server oldali hiba")
      return
    }

    if (group) {
      res.status(200).send("Van már ilyen csoport")
      return
    }

    const newGroup = new Group({
      groupCode,
      owner,
      startDate: dateObjectStart,
      endDate: dateObjectEnd
    })

    newGroup.save(err => {
      if (err) {
        res.status(200).send("Valami hiba tortent!")
        return
      }
      res.status(200).send("Mentve a group!")
      return 
    })
  })

  console.log("Create group proba!")
}