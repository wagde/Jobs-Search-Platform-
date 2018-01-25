mod.service('registService', registService)
function registService($http, getDataService) {
    var serv = this;

    var check = function (username,password,email,location,skilllist) {
       var NewUser = { username, password, email, location, skills:skilllist};
        for (var x in NewUser) {
            if (!NewUser[x]) {
                alert(" Some Of You Filed Empty Or Mail Not Correct")
                return
            }
        }
        $http.post('api/regist', NewUser).then(function (response) {
            alert(response.data.message)
        });

    }

    getDataService.getSkills(function (response) {
        serv.skills = response.data;
    })

    this.GetRegDeatil = function (username, password, email, location) {
        Json = { email: email };
        $http.post('api/RegistAuthentication', Json).then(function (response) {
            if (response.data.message == "true") {
                check(username, password, email, location, serv.skillslist);
            }
            else {
                alert("your mail used")
            }
        })
    }
    this.skillslist = [];
    this.addskill = function (skill) {
        console.log(this.skillslist)
        this.skillslist.push(skill);
    }
    this.deleteSkill = function (index) {
        this.skillslist.splice(index, 1);
    }

}
