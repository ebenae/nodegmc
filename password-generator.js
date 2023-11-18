var generator = require('generate-password');

var passwords = generator.generateMultiple(3, {
	length: 10,
	uppercase: true,
    numbers: true,
    lowercase: true
});

// [ 'hnwulsekqn', 'qlioullgew', 'kosxwabgjv' ]
console.log(passwords);