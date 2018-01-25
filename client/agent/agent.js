mod.service('agentService', agentService)

function agentService(ProfileServer, getDataService) {

    var getDate = function () {
        date = new Date();
        month = parseInt(date.getMonth()) + 1;
        day = date.getDate();
        year = date.getFullYear();
        return day + '/' + month + '/' + year;
    }

    var date = getDate();
    var skills = ProfileServer.user.skills;
    json = { date, skills };

    getDataService.agentGet(json, function (res) {
        console.log(res.data)
    })



}


mod.component('agentComponent', {
    templateUrl: '/agent/agent.html',
    controller: ['ProfileServer', 'agentService', 'getDataService', function (ProfileServer, agentService, getDataService) {
        this.agentService = agentService;





    }]
});

