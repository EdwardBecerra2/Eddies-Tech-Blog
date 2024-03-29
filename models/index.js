const User = require('../models/user');
const Post = require('../models/post');
const Comment = require('../models/comment');

Post.belongsto(User, 
    {foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };