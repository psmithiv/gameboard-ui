/**
 * Created by Paul on 8/18/2015.
 */
define([
        'angularAMD' ],

    function(angularAMD) {
        'use strict';

        angularAMD.factory('gameModel', function() {
            var games;
            var selectedGame;

            return {
                games: games,
                selectedGame: selectedGame
            }
        })
    }
);