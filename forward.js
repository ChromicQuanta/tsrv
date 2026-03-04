console.log("ee")
ws = require("ws")
console.log("ff")
S = new ws.Server({port:80})
sws = {send:()=>{}}
S.on("connection",(ws)=>{
  ws.onmessage
  ws.send()
})
