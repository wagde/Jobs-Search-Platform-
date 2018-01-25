mod.service('userApply', userApply)

function userApply() {

    this.userapplyerfind = function (jobs) {
        allUser = [];
        for (job of jobs) {
            for (user of job.apply_id[0]) {
                allUser.push(user);
            }
        }
        return allUser;
    }



}
mod.component('userapplyComponent', {
    templateUrl: '/userapplier/userapplier.html',
    controller: ['userApply', 'getDataService', 'ProfileServer', function (userApply, getDataService, ProfileServer) {
        this.userApply = userApply;
        ctrl = this;
        email = ProfileServer.user.email;
        json = { email };
        var myjobs;
        getDataService.userJobs(json, function (response) {
            myjobs = response.data;
            console.log("12312312312312312")
            var users = userApply.userapplyerfind(myjobs);
            json = { users }
            if (users) {
                getDataService.getApplyierUser(json, function (response) {
                    ctrl.users = response.data;
                    console.log(response.data)
                })
            }
        });

    }]
});