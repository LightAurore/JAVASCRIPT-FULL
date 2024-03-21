

const homeController = {
	index: async(req, res) => {
		res.render('home/index')
	},

	dictionnaire: async (req, res) =>{
		res.render('home/dictionnaire')
	},

	litterature: async (req, res) => {
		res.render('home/litterature')
	},

	magazine: async (req, res) => {
		res.render('home/magazine')
	},

	economie: async (req, res) =>{
		res.render('home/economie')
	}

}

module.exports = homeController;