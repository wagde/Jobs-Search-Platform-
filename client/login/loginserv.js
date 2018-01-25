mod.service('loginserv', loginserv)

function loginserv($http, $rootScope) {
    this.show = false;
    this.showall = true;
    this.showfun = function () {
        this.show = !this.show
    }
    serv = this;
    this.loginauth = function (user, pass) {
        json = { user, pass };
        var auth = $http.post('api/users', json)
        return auth;
    }

    this.getdata = function () {

    }


    this.hidelogin = function () {
        this.showall = false;
    }
    this.reload = function () {
        location.href = 'http://localhost:3000/#/'
        alert("BYE")
        setTimeout(function () {
            location.reload();
        }, 2000);

    }
}

