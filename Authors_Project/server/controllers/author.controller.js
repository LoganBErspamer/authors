const author = require ("./../models/author.model")

// Get all
module.exports.allauthor = (req, res)=>{
    author.find()
        .then(prod=>res.json(prod))
        .catch(err=>console.log(err))
}

// Get one
module.exports.oneauthor = (req, res)=>{
    author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err=>console.log(err))
}

// create
module.exports.createauthor = (req, res)=>{
    const newauthor= req.body
    author.create(newauthor)
        .then(author=>res.json(author))
        .catch(err=>res.status(400).json(err))
}

// update
module.exports.updateauthor = (req, res)=>{
    author.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(author=>res.json(author))
        .catch(err=>res.status(400).json(err))
}

// delete
module.exports.deleteauthor = (req, res)=>{
    author.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>console.log(err))
}