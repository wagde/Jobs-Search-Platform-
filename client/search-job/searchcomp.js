mod.service('searchserv', searchserv)
mod.component('searchComponent', {
    templateUrl: '/search-job/search-template.html',
    controller: ['searchserv', function (searchserv) {
        this.searchserv = searchserv;
    }]
});