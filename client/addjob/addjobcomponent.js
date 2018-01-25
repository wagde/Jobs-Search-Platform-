mod.service('addjobServer', addjobServer)
function addjobServer(getDataService, ProfileServer) {
    this.skillslist = [];
    var serv = this;
    getDataService.getSkills(function (response) {
        serv.skills = response.data;
    });


    var checkEmptyInput = function (json) {
        for (var x in json) {
            if (!json[x]) {
                alert(" Some Of You Filed Empty")
                return false;
            }
        }
        return true
    }

    var getDate = function () {
        date = new Date();
        month = parseInt(date.getMonth()) + 1;
        day = date.getDate();
        year = date.getFullYear();
        return day + '/' + month + '/' + year;
    }
    this.addJob = function (jobname, description, location) {
        var pub_date = getDate();
        var pub_id = ProfileServer.user.email;
        var skills = serv.skillslist;
        var apply_id=[];
        var json = { jobname, pub_date, pub_id, description, location, skills,apply_id};
        if (checkEmptyInput(json)) {
            getDataService.addJob(json, function (response) {
                window.location.href = "http://localhost:3000/#/myjob";

                console.log(response.data)


            });
        }
    }

    this.addskill = function (skill) {
        skill = parseInt(skill)
        this.skillslist.push(skill);
        console.log(this.skillslist)
    }

    this.deleteSkill = function (index) {
        this.skillslist.splice(index, 1);
    }
}


mod.component('addjobComponent', {
    templateUrl: '/addjob/addjobtemplate.html',
    controller: ['addjobServer','autoComp', function (addjobServer,autoComp) {
        this.addjobServer = addjobServer;
        this.$onInit = function () {
           autoComp.aoutocomp();
        }
    }]

});