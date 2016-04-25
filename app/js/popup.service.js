module.exports = function($http, $mdDialog) {
	var self = this;
    
    self.alert = function (title, message){
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title(title)
                .textContent(message)
                .ok('Got it!')
        );
    };

	return {
        alert: self.alert
	};
};