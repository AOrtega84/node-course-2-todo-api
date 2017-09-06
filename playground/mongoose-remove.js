const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findOneAndRemove({_id: '59af893bf0f18196a5115603'}).then((todo) => {
	
});

Todo.findByIdAndRemove('59af893bf0f18196a5115603').then((todo) => {
	console.log(todo);
});