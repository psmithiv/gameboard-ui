/**
 * Created by Paul on 8/18/2015.
 */
define([
        'angularAMD',
        'js/service/route.service',
        'js/service/init.service',
        'js/model/game.model',
        'js/model/app.model'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('appController', [
            '$scope',
            'routeService',
            'initService',
            'gameModel',
            'appModel',

            function($scope, routeService, initService, gameModel, appModel) {
                /**
                 *
                 */
                var selectedGameChanged = function(game) {
                    console.log('appController::selectedGameChanged: ', game);
                    gameModel.selectedGame = game;
                    routeService.gotoRoute(game.route);
                };

                /**
                 * @private
                 */
                var initComplete = function() {
                    setTimeout(function() {
                        $scope.loading = false;

                        routeService.gotoInitialRoute();
                    }, 3000);
                };

                /**
                 * constructor
                 */
                (function() {
                    console.log('app.controller::constructor');

                    initService.init()
                        .then(initComplete);
                }());

                $scope.appModel = appModel;
                $scope.loading = true;
                $scope.games = gameModel;
                $scope.selectedGameChanged = selectedGameChanged;
            }
        ])
    }
);