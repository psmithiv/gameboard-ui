/**
 * Created by Paul on 8/18/2015.
 */
define([
        'angularAMD',
        'js/locator/service.locator',
        'js/model/game.model',
        'js/service/route.service'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('gameService', [
            '$q',
            'serviceLocator',
            'gameModel',
            'routeService',

            function($q, serviceLocator, gameModel, routeService) {

                /**
                 * @private
                 */
                var getGames = function() {
                    var deferred = $q.defer();

                    var success = function(result) {
                        gameModel.selectedGame = result.data[0];
                        gameModel.games = result.data;
                        routeService.createRoutes(result.data);

                        deferred.resolve(result.data);
                    };

                    serviceLocator.getGames()
                        .then(success, deferred.reject);

                    return deferred.promise;
                };

                /**
                 * @constructor
                 */
                (function() {
                    // console.log('game.service::constructor');
                }());

                return {
                    getGames: getGames
                }
            }
        ])
    }
);