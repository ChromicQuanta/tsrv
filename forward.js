console.log("ee")
ws = require("ws")
console.log("ff")
war = []
S = new ws.Server({port:80})
pws = {send:()=>{}}
S.on("connection",(ws)=>{
  war.id=war.push(ws)-1
  ws.hasPaired = 0
  ws.onmessage=(d)=>{
    if(d.data=="prime"){
      pws = d.target
    }
    if(d.data=="client"){
      sws.send("Client "+d.target.id)
    }

      if(d.target.hasPaired){
war[d.target.pair].send(d.data)
      }
    if(d.data.startsWith("server")){
      id = +d.data.split(" ")[1]
      war[id].pair = d.target.id
      d.target.pair = id
      war[id].hasPaired = 1
      d.target.hasPaired = 2
    }
    

    
  }
  
  
  ws.send()
})
