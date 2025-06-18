console.log("Hello World")

const { add } = require("./util/math")

console.log(add(1, 2))

const os = require("os")
const fs = require("fs")
const path = require("path")
const http = require("http")
const EventEmitter = require("events")
const emmiter = new EventEmitter()

const { v4: uuid } = require("uuid")
console.log(uuid())
