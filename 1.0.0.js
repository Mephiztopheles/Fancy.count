(function () {

    Fancy.require ( {
        jQuery: false,
        Fancy : "1.0.0"
    } );
    var NAME    = "FancyCount",
        VERSION = "1.0.0",
        logged  = false;

    function FancyCount ( element, from, to, time ) {
        var SELF = this;
        if ( !logged ) {
            logged = true;
            Fancy.version ( SELF );
        }

        SELF.element = element;
        SELF.version = VERSION;
        SELF.name    = NAME;
        this.count ( from, to, time );

        return SELF;
    }


    FancyCount.api = FancyCount.prototype = {};
    FancyCount.api.version = VERSION;
    FancyCount.api.name    = NAME;
    FancyCount.api.count   = function ( from, to, time ) {
        var SELF = this,
            interval;
        time     = time | 2500;

        function tick () {
            if ( count < to ) {
                SELF.element.html ( count );
                count += to / timer;
            } else {
                clearInterval ( interval );
                SELF.element.html ( to );
            }
        }

        if ( from == 0 ) {
            var timer = time / to,
                count = from;

            interval = setInterval ( tick, timer );

        } else {

        }
    };
    Fancy.settings[ NAME ] = {};

    Fancy.count     = VERSION;
    Fancy.api.count = function ( from, to, time ) {
        return this.set ( FancyCount, from, to, time );
    };

}) ();