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

	self.getMine = function() {
        return [
            {
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
            },
            {
                'title': 'Game3',
                'created': new Date('April 6, 2016 11:13:00'),
                'players': [
                    {
                        'name': 'ROBOT'
                    },
                    {
                        'name': 'Bram'
                    }
                ]
            },
            {
                'title': 'Game5',
                'created': new Date('April 14, 2016 11:13:00'),
                'players': [
                    {
                        'name': 'Bram'
                    },
                    {
                        'name': 'Jelmer'
                    }
                ]
            }
        ];
	};
    
    self.getPlayable = function(onSucces, onFail) {
        $http.get(self.api.url + self.api.games.url + self.api.games.filters.playable)
		.then(function(results) {
			onSucces(results.data);
		}, function(response) {
			onFail(response);
		});
	};
    
    self.getTemplates = function(onSucces, onFail) {
        $http.get(self.api.url + self.api.templates.url)
		.then(function(results) {
			onSucces(results.data);
		}, function(response) {
			onFail(response);
		});
	};
    
    self.postGame = function(data, onSucces, onFail) {
        console.log(data.templateName);
        console.log(data.minPlayers);
        console.log(data.maxPlayers);
	};

	return {
        getMine: self.getMine,
		getPlayable: self.getPlayable,
        getTemplates: self.getTemplates,
        postGame: self.postGame
	};
};