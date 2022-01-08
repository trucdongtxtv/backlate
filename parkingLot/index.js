const verifyRequest = require("../auth/verifyRequest");

module.exports = (app, pool) => {
  app.post(`/parkingLot/:id/updateMembership`, (req, res) => {
    const { name, spaceCount, address } = req.body;

    verifyRequest(req, pool)
      .then(() => {
        const query = `INSERT INTO ParkingLot (Name, SpaceCount, Address) VALUES (${name}, ${spaceCount}, ${address})`;
        pool.query(query, (err, data) => {
          if (err) {
            res.status(400).json({ message: err });
            return;
          }
          res.json({
            message: "Successful",
          });
        });
      })
      .catch(() => {
        res.status(403).json({ message: "Forbidden" });
      });
  });

  // WIP
  app.get(`/parkingLot/:id/getAllMembership`, (req, res) => {
    const { name, spaceCount, address } = req.body;

    verifyRequest(req, pool)
      .then(() => {
        const query = `INSERT INTO ParkingLot (Name, SpaceCount, Address) VALUES (${name}, ${spaceCount}, ${address})`;
        pool.query(query, (err, data) => {
          if (err) {
            res.status(400).json({ message: err });
            return;
          }
          res.json({
            message: "Successful",
          });
        });
      })
      .catch(() => {
        res.status(403).json({ message: "Forbidden" });
      });
  });

  app.post(`/parkingLot/:id/addMembership`, (req, res) => {
    const { name, spaceCount, address } = req.body;

    verifyRequest(req, pool)
      .then(() => {
        const query = `INSERT INTO ParkingLot (Name, SpaceCount, Address) VALUES (${name}, ${spaceCount}, ${address})`;
        pool.query(query, (err, data) => {
          if (err) {
            res.status(400).json({ message: err });
            return;
          }
          res.json({
            message: "Successful",
          });
        });
      })
      .catch(() => {
        res.status(403).json({ message: "Forbidden" });
      });
  });

  // price, name, etc.
  app.post(`/parkingLot/:id/updateMembership`, (req, res) => {
    const { name, spaceCount, address } = req.body;

    verifyRequest(req, pool)
      .then(() => {
        const query = `INSERT INTO ParkingLot (Name, SpaceCount, Address) VALUES (${name}, ${spaceCount}, ${address})`;
        pool.query(query, (err, data) => {
          if (err) {
            res.status(400).json({ message: err });
            return;
          }
          res.json({
            message: "Successful",
          });
        });
      })
      .catch(() => {
        res.status(403).json({ message: "Forbidden" });
      });
  });

  app.post(`/parkingLot/:id/assignMembership`, (req, res) => {
    const { name, spaceCount, address } = req.body;

    verifyRequest(req, pool)
      .then(() => {
        const query = `INSERT INTO ParkingLot (Name, SpaceCount, Address) VALUES (${name}, ${spaceCount}, ${address})`;
        pool.query(query, (err, data) => {
          if (err) {
            res.status(400).json({ message: err });
            return;
          }
          res.json({
            message: "Successful",
          });
        });
      })
      .catch(() => {
        res.status(403).json({ message: "Forbidden" });
      });
  });
};
