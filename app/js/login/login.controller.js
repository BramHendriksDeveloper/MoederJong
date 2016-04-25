module.exports = function(LoginService, PopupService){
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
        PopupService.alert('Login Failed', 'Wrong password and username combination.')
    };
    
    self.login = function(){
        LoginService.login(self.input, private.loginSucces, private.loginFailed);
    };
};