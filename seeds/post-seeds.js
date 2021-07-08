const { Post } = require('../models');

const postData = [
  {
    title: 'test',
    post_text: 'this is a test post',
    user_id: 1,
  },
  {
    title: 'another post',
    post_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    user_id: 2,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
