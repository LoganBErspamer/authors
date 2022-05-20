const authorController = require("./../controllers/author.controller")

//after route the modelNameController.controller function name you made
//you can makes routes whatever, but follow this format for ease of use
module.exports = (app) => {
    app.get("/api/author", authorController.allauthor)
    app.get("/api/author/:id", authorController.oneauthor)
    app.post("/api/author", authorController.createauthor)
    app.put("/api/author/:id", authorController.updateauthor)
    app.delete("/api/author/:id", authorController.deleteauthor)
}