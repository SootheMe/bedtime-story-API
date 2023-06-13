const express = require('express');
const router = express.Router();
const Story = require('../models/story');

router.get('/', async(req, res) => {
  try {
    const stories = await Story.findAll();
    res.json(stories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
    try {
        const story = await Story.findByPk(req.params.id);
        
        if (story) {
            res.status(200).json(story);
        } else {
            res.status(404).json({ msg: 'Story not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});


router.post('/', async (req, res) => {
  try {
    const { title, author, description, content, cover } = req.body;

    const story = await Story.create({
      title,
      author,
      description,
      content,
      cover
    });

    res.status(201).json(story);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
