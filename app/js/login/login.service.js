module.exports = function($http) {
	var self = this;    
    self.api = {
        url: "http://mahjongmayhem.herokuapp.com"
    };
    
    self.user = {
        username: null,
        password: null
    };
    
    self.login = function(data, onSucces, onFail) {
        if(data.username === "admin" && data.password ==="admin"){
            self.user.username = data.username;
            self.user.password = data.password;
            onSucces();
        }else{
            onFail();
        }
	};
    
    self.checkLogin = function(){
        if(self.user.username && self.user.password){
            return true;
        }  
    };

	return {
        login: self.login,
        checkLogin: self.checkLogin
	};
};