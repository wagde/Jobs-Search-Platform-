mod.component('jobComponent', {
    templateUrl: '/jobs/jobtemp.html',
    controller: ['$rootScope', '$scope', 'testService', 'searchserv', 'ProfileServer', "getDataService", 'maps', function ($rootScope, $scope, testService, searchserv, ProfileServer, getDataService, maps) {
        this.testService = testService;
        this.maps = maps;
        // this.order=;
        maps.runmap()
        var self = this;
        this.showapply = true;
        if (ProfileServer.user != undefined) {
            self.showapply = false;

        }

        

            this.get = function (val) {
                testService.filterPlace();
                filterdjobs = [];

                for (x of testService.jobs) {
                    console.log(x.distance)
                    console.log(val)
                    if (x.distance < val) {
                        filterdjobs.push(x);
                    }
                }
                // console.log(filterdjobs)
                self.message = filterdjobs;
            }

        
        getDataService.getJobs(function (res) {
            self.message = res.data;
            testService.jobs = res.data;
            console.log(res.data)
        })


        $rootScope.showsearch = function (searchresult) {
            self.message = searchresult;
            console.log(searchresult)
        }
        $rootScope.showapplyfun = function (data) {
            self.showapply = false;
        };





    }]
});
