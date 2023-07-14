const express = require('express');
const appRouter = express.Router();
const {Data} = require("../model/data.model");
const {User} = require("../model/user.model")
const pageSize = 15; // Number of items per page

appRouter.get('/', async (req, res) => {
  try {
    const page = req.query.page || 1; // Current page number
    const skip = (page - 1) * pageSize;
    const type= req.query.type;
    let query = {};
    const searchQuery = req.query.q; // Search query for movie title or cast
    if (searchQuery) {
        // Create a regular expression pattern for case-insensitive search
        const searchPattern = new RegExp(`\\b${searchQuery}\\b`, 'i');
        // Add search condition to the query
        query = {
          $or: [
            { title: searchPattern }, // Search by movie title
            { cast: searchPattern } // Search by cast
          ]
        };
      }
      if (type) {
        // Add item type condition to the query
        query.type = type;
      }
    console.log(query)
    const movies = await Data.find(query).skip(skip).limit(pageSize);
    const user= await User.find({_id:req.body.user})
    const filteredMovies = user.age < 18 ? movies.filter(movie => movie.rating !== 'R') : movies;
    // Count the total number of movies/TV shows in the collection
    const totalCount = await Data.countDocuments();

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalCount / pageSize);

    res.status(200).json({
      Data: filteredMovies,
      currentPage: page,
      totalPages,
      pageSize,
      totalCount,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' });
  }
});


appRouter.get('/:id', async (req, res) => {
    try {
      const itemId = req.params.id;
      
      // Retrieve the item details from the database based on the ID
      const item = await Data.findById(itemId);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).send(item)
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
});



module.exports={
    appRouter
}

//Routes
// localhost:4500/data/?page=1&pageSize=15&type=Movie