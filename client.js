const { IP, PORT} = require("./constants");

const connect = function() {
  const net = require("net");
  const conn = net.createConnection({

    host: IP,
    port: PORT
  });


  conn.setEncoding("utf8");


  conn.on("data", (data) => { 
    console.log(data);
  })

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    
  });

  conn.on("connect", () => {
    conn.write("Name: AMH")

    });


  return conn;

};

module.exports = {
  connect,
};