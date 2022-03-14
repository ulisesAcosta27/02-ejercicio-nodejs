//contractor
const json1 = "./files/FirstGroup.json",
  json2 = "./files/SecondGroup.json",
  json3 = "./files/ThirdGroup.json",
  json4 = "./files/FourthGroup.json",
  json5 = "./files/FifthGroup.json";

const fs = require("fs");

const p1 = new Promise((resolve, reject) => {
  fs.readFile(json1, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});
const p2 = new Promise((resolve, reject) => {
  fs.readFile(json2, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});
const p3 = new Promise((resolve, reject) => {
  fs.readFile(json3, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});
const p4 = new Promise((resolve, reject) => {
  fs.readFile(json4, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});
const p5 = new Promise((resolve, reject) => {
  fs.readFile(json1, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});
const create = (datos) => {
  fs.writeFile("./demo/listStudents.json", datos, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
Promise.all([p1, p2, p3, p4, p5])
  .then((data) => create(JSON.stringify(data, null, 2)))
  .catch((err) => console.log(err));
