module.exports = function(LoginService){
    var self = this;
    var private = {};
    
    self.input = {
        username: "",
        password: ""
    };
    
    private.loginSucces = function(){
        window.location.replace("#/games");
    };
    
    private.loginFailed = function(){
        alert("login failed");
    };
    
    self.login = function(){
        LoginService.login(self.input, private.loginSucces, private.loginFailed);
    };
};