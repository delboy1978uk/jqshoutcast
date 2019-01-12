/*!
 * Copyright (C) 2019 Derek Stephen McLean
 *
 * This work is licensed under the MIT License.
 * See the LICENSE file
 *
 * When using this software you use it at your own risk. We hold
 * no responsibility for any damage caused by using this plugin
 * or the documentation provided.
 */
(function ($) {
    $.streamInfo = function (options) {

        var defaults = {
            host: 'europa.shoutca.st',
            protocol: 'https',
            station: 'your-username',
        };
        var options = $.extend(defaults, options);

        let baseUrl = options.protocol + '://' + options.host;

        let streamDetailsUrl = baseUrl + '/rpc/' + options.station + '/streaminfo.get';
        let recentlyPlayedUrl = baseUrl + '/recentfeed/' + options.station + '/json/';

        $.get(streamDetailsUrl, function(e){
            let data = e.data;
            console.log(data);
        });

        $.get(recentlyPlayedUrl, function(e){
            let data = e.data;
            console.log(data);
        });
    };
})(jQuery);

