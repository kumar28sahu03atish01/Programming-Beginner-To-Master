db.UserDetail.insertOne({
	'name':'UserName1',
	'age':'24',
	'mail':'username1@mail.com',
})

db.UserDetail.insertMany([
	{
		'name':'UserName2',
		'age':'23',
		'mail':'username2@mail.com',
	},
	{
		'name':'UserName3',
		'age':'22',
		'mail':'username3@mail.com',
	},
	{
		'name':'UserName4',
		'age':'21',
		'mail':'username4@mail.com',
	},
])

db.UserDetail.insertMany([
	{
		'name':'UserName5',
		'age':'22',
		'mail':'username5@mail.com',
	},
	{
		'name':'UserName6',
		'age':'21',
		'mail':'username6@mail.com',
	},
	{
		'name':'UserName7',
		'age':'24',
		'mail':'username7@mail.com',
	},
	{ordered: false},
])