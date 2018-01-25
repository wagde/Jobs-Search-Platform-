mod.service('applyservice', applyservice)

function applyservice(testService, ProfileServer) {



}

mod.component('applyjobComponent', {
    templateUrl: '/applyjobslist/applytemplate.html',
    controller: ['applyservice', 'testService', 'ProfileServer', function (applyservice, testService, ProfileServer) {
        serv = this;

        this.applyservice = applyservice;

        jobs = testService.jobs;
        this.myjobs = [];
        for (app of ProfileServer.user.jobapp) {
            for (app1 of jobs) {
                if (app1._id == app) {
                    this.myjobs.push(app1)
                }
            }
        }



        this.deletejob = function (apply_id, id, index) {
            allusers = apply_id;
            console.log("asdasdasdasdasdasdasdasdasdasd")
            this.myjobs.splice(index, 1);
            ProfileServer.user.jobapp.splice(index, 1);
            var theIndex = apply_id.indexOf(ProfileServer.user.email);
            allusers.splice(theIndex, 1)
            testService.applyjob(id,allusers , "notapply");

        }
    }]
});
