const mongoose = require('mongoose');
mongoose
	.connect(
		'mongodb+srv://octivia:786Hh%40786@octivia.8rlek.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.info('Connected to Database');
	})
	.catch(() => {
		console.error('Could not establish connection with Database');
	});

mongoose.set('useFindAndModify', false);

module.exports = mongoose;
