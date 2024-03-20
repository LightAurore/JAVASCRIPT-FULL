

const homeController = {
	index: async(req, res) => {
		res.render('home/index')
	},

	about: async (req, res) => {
		res.render('home/about')
	},

	faq: async (req, res) => {
		res.render('home/faq')

	},

	contact: async (req, res) => {
		res.render('home/contact')

	}

}

module.exports = homeController;