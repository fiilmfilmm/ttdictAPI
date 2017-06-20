angular.module('ttdict', ['ngRoute'])
    //---------------
    // Services
    //---------------
    .factory('ttdictService', function ($q, $timeout, $http) {
        var getWords = function (word) {
            var deferred = $q.defer();

            // connect to API
            $http({
                method: 'GET',
                url: '/api/words/' + word
            }).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject
            });

            return deferred.promise;
        };

        return {
            getWords: getWords
        };
    })
    //---------------
    // Controllers
    //---------------
    .controller('ttdictController', ['$scope', 'ttdictService', function ($scope, ttdictService) {
        $scope.searchfor = function () {
            ttdictService.getWords($scope.word).then(function (data) {
                $scope.datas = data;
            });
        };
    }])
    //---------------
    // Routes
    //---------------
    // .config(['$routeProvider', function ($routeProvider) {
    //     $routeProvider
    //         .when('/', {
    //             templateUrl: '../../views/index.html',
    //             controller: 'ttdictController'
    //         })
    //         .when('/:id', {
    //             templateUrl: '/todoDetails.html',
    //             controller: 'TodoDetailCtrl'
    //         });
    // }]);