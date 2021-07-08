const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "testing out the comments",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "another test",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Where in the world is waldo",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
