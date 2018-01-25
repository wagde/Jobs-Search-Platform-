mod.service('ProfileServer', ProfileServer)
mod.service('EditProfile', EditProfile)

function ProfileServer() {

}


function EditProfile(getDataService, ProfileServer) {

    this.skillslist = [];
    var serv = this;
    // serv.skillslist = ProfileServer.user.skills;
    // getDataService.getSkills(function (response) {
    //     serv.skills = response.data;
    //     console.log(serv.skills)
    //     serv.userSkillsShow = getSkillsName(serv.skills, ProfileServer.user.skills);
    // });


    this.addskill = function (skill) {
        serv.skillslist.push(skill);
        console.log(this.skillslist)
    }

    this.deleteSkill = function (index) {
        this.skillslist.splice(index, 1);
    }


    getSkillsName = function (skillsObj, userSkills) {
        skillsName = [];
        for (x of userSkills) {
            console.log(x)
            skillsName.push(skillsObj[x - 1]);
            console.log(skillsName)
        }
        return skillsName;
    }




}

mod.component('profileComponent', {
    templateUrl: '/myprofile/myprofiletemp.html',
    controller: ['ProfileServer', 'EditProfile', 'testService', 'getDataService','autoComp', function (ProfileServer, EditProfile, testService, getDataService,autoComp) {
        var ctrl = this;
        this.user = ProfileServer.user;
        this.ProfileServer = ProfileServer;
        this.EditProfile = EditProfile;
        // EditProfile.userSkills = ProfileServer.user.skills;
        console.log(ProfileServer.user);

         this.$onInit = function () {
           autoComp.aoutocomp();
        }
        this.editmyprofile = function (username, email, password, location) {
            if (username) { ProfileServer.user.firstname = username; }
            if (email) { ProfileServer.user.email = email }
            if (password) { ProfileServer.user.password = password }
            if (location) { ProfileServer.user["location "] = location }
           
            testService.applyjob();
        }

        getDataService.getSkills(function (response) {
            ctrl.skills = response.data;
            ctrl.userSkillsShow = getSkillsName(ctrl.skills, ProfileServer.user.skills);
            EditProfile.skillslist = ProfileServer.user.skills;
        });


    }]
});
