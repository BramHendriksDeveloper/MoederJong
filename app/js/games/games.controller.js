module.exports = function(LoginService, GamesService){
    if(!LoginService.checkLogin()){
        window.location.replace("#/login");
    }else{
        var self = this;
        self.games = {
            playable: [],
            mine: []
        };
        self.templates = [];
        self.input = {
            template: "Shanghai",
            min: 1,
            max: 32
        };
        
        self.fillPlayable = function(data){
            self.games.playable = data;
        };
        
        self.fillTemplates = function(data){
            self.templates = data;
        };
        
        self.join = function(id){
            console.log(id);
        };
        
        self.play = function(id){
            console.log(id);
        };
        
        self.create = function(){
            console.log(self.input.template);
            console.log(self.input.min);
            console.log(self.input.max);
        };
        
        self.games.mine = GamesService.getMine();
        GamesService.getPlayable(self.fillPlayable, function(){console.log("getPlayable failed")});
        GamesService.getTemplates(self.fillTemplates, function(){console.log("getTemplates failed")});
    }
};