module.exports = function($http) {
	var self = this;    
    self.api = {
        url: "http://mahjongmayhem.herokuapp.com",
        games: {
            url: "/Games",
            filters: {
                playable: "?state=open"
            }
        },
        templates: {
            url: "/GameTemplates"
        }
    };

	self.getGame = function(id, onSucces, onFail) {
        var data = {
            'title': 'Game2',
            'created': new Date('April 4, 2016 11:13:00'),
            'players': [
                {
                    'name': 'Bram'
                },
                {
                    'name': 'Stijn'
                }
            ]
        };
        
        onSucces(data);
	};

	return {
        getGame: self.getGame
	};
};