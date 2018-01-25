mod.component('loginComponent', {
    templateUrl: '/login/logintemp.html',
    controller: ["$rootScope", "$scope", 'loginserv', 'ProfileServer', function ($rootScope, $scope, loginserv, ProfileServer) {
        this.loginserv = loginserv;
        this.click = function (user, pass) {
            loginserv.loginauth(user, pass).then(function (response) {
            console.log(response.data.message)
                if (response.data.message == "true") {
                    loginserv.showall = false;
                      loginserv.show=false;
                    ProfileServer.user = response.data.result;
                     $rootScope.showapplyfun("asdasd");
                    console.log(ProfileServer.user);
                }
                if (response.data.message == "false") {
                    alert("Your Password Wrong")

                }
            });
        }
    }]
});