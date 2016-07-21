/**
 * Created by psmit on 7/20/2016.
 */
define([
    'angularAMD' ],

    function(angularAMD) {
        'use strict';

        angularAMD.directive('wifiSignal', [
            function() {
                return {
                    restrict: 'E',
                    scope: {
                        network: '=?network'
                    },
                    template:   '<div class="wifi-signal">' +
                                    '<div class="bar1"></div>' +
                                    '<div class="bar2"></div>' +
                                    '<div class="bar3"></div>' +
                                    '<div class="bar4"></div>' +
                                    '<div class="bar5"></div>' +
                                    '<div class="network-name">{{network.name}}</div>' +
                                    '<div class="network-secure">{{network.secure ? "Secured" : "Unprotected"}}</div>' +
                                '</div>',
                    replace: true,
                    link: function (scope, element, attributes) {

                        var setBars = function() {
                            if(scope.network.signalStrength > 0)
                                element.find('.bar1').css({opacity: 1});

                            if(scope.network.signalStrength > 20)
                                element.find('.bar2').css({opacity: 1});

                            if(scope.network.signalStrength > 40)
                                element.find('.bar3').css({opacity: 1});

                            if(scope.network.signalStrength > 60)
                                element.find('.bar4').css({opacity: 1});

                            if(scope.network.signalStrength > 80)
                                element.find('.bar5').css({opacity: 1});
                        };

                        /**
                         * @constructor
                         */
                        (function() {
                            console.log('nav.directive::constructor');
                            setBars();
                        }())
                    }
                }
            }
        ])
    }
);