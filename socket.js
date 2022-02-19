let io;

module.exports = {
  init: (http) => {
    io = require("socket.io")(http, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
      },
    });
    return io;
  },
  getIo: () => {
    if (!io) throw new Error("Socket tidak terinisialisasi");
    return io;
  },
};
