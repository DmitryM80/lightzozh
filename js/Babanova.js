var Babanova = (function() {

    // ключевые даты: [номер месяца относительно начала периода, дата этого месяца, цена ПОСЛЕ этой даты]
    var key_days = [[0, 13, 2900], [1, 1, 2900], [1, 9, 3400], [1, 11, 4500], [1, 13, 4900]];

    var months_list = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    var now = new Date();

    var current_date  = now.getDate();
    var current_month = now.getMonth();
    var current_year  = now.getFullYear();

    /* Если сейчас первая половина месяца, значи период начался в прошлом месяце 
    - от него и ведем отсчёт */
    var month_shift = current_date >= key_days[0][1] ? 0 : -1;

    var key_dates = [];

    var computeDate = function (day_shift, day) {  
        /* превращаем относительную дату в абсолютную */

        var month = current_month + month_shift + day_shift;
        var year = current_year;

        if(month < 0) // перескочили на предыдущий год
        {
            month = 11;
            --year;
        }
        // return new Date(year+'-'+(month+1)+'-'+day);
        return new Date(year+'/'+(month+1)+'/'+day); // для Сафари
    }

    // превращает ДАННУЮ дату в строку
    function from(date)
    {   
        return date.getDate() + ' ' + months_list[date.getMonth()];
    }

    // превращает ПРЕДЫДУЩУЮ дату в строку
    function before(date)
    {
        date = new Date(date.getTime() - 24*60*60*1000); 

        return date.getDate() + ' ' + months_list[date.getMonth()];
    }

    for(var i in key_days)
        key_dates[i] = computeDate(key_days[i][0], key_days[i][1]);

    var names = ['Begin', 'First', 'Second', 'Start', 'End'];

    var w = function(v) 
    { 
        return function() { document.write(v); }; 
    }

    var str_dates = ({});


    var nextDateNum = 4;

    for (var j=key_dates.length-1; j >0 ; --j)
        if(now < key_dates[j] )
        { 
            console.log(j, now, key_dates[j]);
            nextDateNum = j;
        }

    // console.log(now, key_dates[j]);

    var timerNextDate = key_dates[nextDateNum];
    var priceNextDate = key_days[nextDateNum][2];
    var titleNextDate = from(key_dates[nextDateNum]);


    var me = {
        timerNextDate: timerNextDate,
        titleNextDate: w(titleNextDate),
        priceNextDate: w(priceNextDate),
        frstprise:     w(key_days[1][2]),
        scdprise:      w(key_days[2][2]),
        thrdprice:     w(key_days[3][2]),
        frtprise:      w(key_days[4][2]),
    };

    for (var i = 0; i < names.length; i++) 
    {
        var from_name   = 'from'  + names[i];
        var before_name = 'before'+ names[i];

        str_dates[from_name] = from (key_dates[i]);
        str_dates[before_name] = before (key_dates[i]);

        me[from_name  ] = w(str_dates[from_name]);
        me[before_name] = w(str_dates[before_name]);
    }

    return me;
})();

