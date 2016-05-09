module.exports = function(LoginService, GameService){
    if(!LoginService.checkLogin()){
        window.location.replace("#/login");
    }else{
        var self = this;
        self.title = "Game";
        self.game = {};
        
        self.fillGame = function(data){
            self.game = data;
        };
        
        GameService.getGame(null, self.fillGame, null);
    }
};