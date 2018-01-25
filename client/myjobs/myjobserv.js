mod.service('MyjobsService', MyjobsService)


function MyjobsService(loginserv, ProfileServer, getDataService) {

    
}

mod.component('myjobComponent', {
    templateUrl: '/myjobs/myjobstemp.html',
    controller: ['MyjobsService', 'getDataService','ProfileServer', function (MyjobsService, getDataService, ProfileServer) {
        // this.MyjobsService = MyjobsService;

        ctrl = this;
        email = ProfileServer.user.email;
        json = { email };
        getDataService.userJobs(json, function (response) {
            ctrl.myjobs = response.data;
        });

        this.deletejob = function (index, id) {
            var json = { id };
            ctrl.myjobs.splice(index, 1);
            getDataService.deletejob(json, function (response) {
                

            });
        }




    }]
});


