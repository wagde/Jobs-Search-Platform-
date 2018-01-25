mod.service('testService', testService);
mod.service('filterlocation', filterlocation);
function filterlocation(getDataService) {


}



function testService($http, ProfileServer, getDataService) {
    serv = this;
    var job = $http.get('/api/job');
    this.getData = function () {
        return job;
    }
    this.CurrentPage = 1;
    this.next = function () {
        this.CurrentPage = this.CurrentPage + 10;
    }

    this.previous = function () {
        if (this.CurrentPage > 0) {
            this.CurrentPage = this.CurrentPage - 10;
        }
    }
    this.applyjob = function (job_id, apply_id, check) {
        var newuser = ProfileServer.user;
        idAppliers = apply_id;

        if (check == "apply") {
            idAppliers.push(ProfileServer.user.email);
            for (jobid of ProfileServer.user.jobapp) {
                if (jobid == job_id) {
                    alert("you applied for this job before")
                    return;
                }
            }
            newuser.jobapp.push(job_id);
        }
        console.log(apply_id)

        json = { newuser, job_id, idAppliers };
        $http.post('api/applyjob', json).then(function (response) {
            if (check == "apply") {
                alert(response.data.message);
            }
        });

    }


    var getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    findInKMm = function (jobs) {
        var jobs1=jobs;
        var count=0;
        for (x of jobs) {
           var distance = getDistanceFromLatLonInKm(ProfileServer.user.longitude, ProfileServer.user.latitude, x.longitude[0], x.latitude[0]);
            jobs1[count].distance=distance;
            count++;
        }
        console.log(jobs1)
    }


    this.filterPlace = function () {
        if (ProfileServer.user) {
            findInKMm(this.jobs);

        }
    }



}





