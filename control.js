$(document).ready(function() {
    var idTracker = 1;

    $('#text-field').on('keyup', function() {
        var textField = $(this);
        var controlArea = $('#control');
        var contentArea = $('#content');
        var value = textField.val();

        if (value.length > 0) {
            controlArea.addClass('minified');
            contentArea.removeAttr('hidden');
        } else {
            controlArea.removeClass('minified');
            contentArea.attr('hidden', true);
            // contentArea.empty();
        }
    });

    $('button').on('click', function() {
        var textField = $('#text-field');
        var controlArea = $('#control');
        var contentArea = $('#content');
        var value = textField.val();

        if (value.indexOf(' in ') > -1) {
            var cityString = value.split(' in ')[1];
            var theCity = cityString.substring(0, cityString.length - 1);
            var cardID = 'card-' + idTracker.toString();
            contentArea.append('<div class="card" id="'+ cardID + '"><div class="top-content"><img src="http://beautifulpixels.com/wp-content/uploads/2014/12/sun-dribbble-new2.gif" alt="weather" /></div><div class="supporting-text"><div class="title"></div><div class="details grid"><div class="column--md-3 column--xs-12">Temperature</div><div class="column--md-9 column--xs-12"><span class="min-temp"></span> - <span class="max-temp"></span></div><div class="column--md-3 column--xs-12">Description</div><div class="column--md-9 column--xs-12"><span class="description"></span></div><div class="column--md-3 column--xs-12">Humidity</div><div class="column--md-9 column--xs-12"><span class="humidity"></span></div><div class="column--md-3 column--xs-12">Wind Speed</div><div class="column--md-9 column--xs-12"><span class="wind-speed"></span></div><div class="column--md-3 column--xs-12">Sunrise</div><div class="column--md-9 column--xs-12"><span class="sunrise"></span></div><div class="column--md-3 column--xs-12">Sunset</div><div class="column--md-9 column--xs-12"><span class="sunset"></span></div></div></div></div>');
            cardID = '#' + cardID;
            $(cardID).hide();

            $(cardID + ' .min-temp').openWeather({
                key: 'f45064d1a2d2bb096b96b3184f337d6d',
                lang: 'en',
                city: theCity,
                placeTarget: (cardID + ' .title'),
                units: 'c',
                descriptionTarget: (cardID + ' .description'),
                minTemperatureTarget: (cardID + ' .min-temp'),
                maxTemperatureTarget: (cardID + ' .max-temp'),
                windSpeedTarget: (cardID + ' .wind-speed'),
                humidityTarget: (cardID + ' .humidity'),
                sunriseTarget: (cardID + ' .sunrise'),
                sunsetTarget: (cardID + ' .sunset'),
                success: function() {
                    $(cardID).show();
                    idTracker += 1;
                },
                error: function(message) {
                    console.log(message);
                }
            });
        }
    });
});
