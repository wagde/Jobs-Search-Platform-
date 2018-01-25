function searchserv($http, testService,$rootScope) {
    serv = this;
    this.searchfunction = function (ser,collection) {
        json = { ser: ser,collection:collection };
        console.log(json)
        $http.post('api/searchjobs', json).then(function (response) {
            if (response.data.message == "false") {
                console.log(response.data)
            }
            else {
                  $rootScope.showsearch(response.data);
            }

        });
    }
}