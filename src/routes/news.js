const express = require('express');
const newsRouter = express.Router();


const axios = require('axios');



newsRouter.get('/', async (req, res) => {
	// console.log('news');
	// res.render('news');

	try {
		const newsapi = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8ef188e3e44b4cb186fab1faa29b013f');

		res.render('news', {
			articles: newsapi.data.articles
		});

	} catch (err) {

		console.log(err);
		console.log(':(');
		if (err.response) {
			res.render('news', {
				articles: null
			})

		} else {
			res.render('news', {
				articles: null
			})
			console.error('Error', err.message)
		}
	}
});
newsRouter.get('/INDIA', async (req, res) => {
	// console.log('news');
	// res.render('news');s		

	try {
		const newsapi = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=8ef188e3e44b4cb186fab1faa29b013f');

		res.render('INDIA', {
			articles: newsapi.data.articles
		});

	} catch (err) {

		console.log(err);
		console.log(':(');
		if (err.response) {
			res.render('news', {
				articles: null
			})

		} else {
			res.render('news', {
				articles: null
			})
			console.error('Error', err.message)
		}
	}
});
newsRouter.get('/techNews', async (req, res) => {
	// console.log('news');
	// res.render('news');

	try {
		const newsapi = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8ef188e3e44b4cb186fab1faa29b013f');

		res.render('TechNews', {
			articles: newsapi.data.articles
		});

	} catch (err) {

		console.log(err);
		console.log(':(');
		if (err.response) {
			res.render('news', {
				articles: null
			})

		} else {
			res.render('news', {
				articles: null
			})
			console.error('Error', err.message)
		}
	}
});
newsRouter.post('', async (req, res) => {

	let search = req.body.search
	console.log(search);
	try {
		const newsAPI = await axios.get(`http://newsapi.org/v2/everything?q=${search}&apiKey=8ef188e3e44b4cb186fab1faa29b013f`)
		res.render('newsSearch', {
			articles: newsAPI.data.articles
		})
	} catch (err) {
		if (err.response) {
			res.render('newsSearch', {
				articles: null
			})

		} else {
			res.render('newsSearch', {
				articles: null
			})
			console.error('Error', err.message)
		}
	}
});

module.exports = newsRouter;