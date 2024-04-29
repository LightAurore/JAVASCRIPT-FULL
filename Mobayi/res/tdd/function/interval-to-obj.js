const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR ;


function intervalToObj(ms) {
    let minutes = 0;
    let seconds = 0;
    let hours = 0;
    let days= 0;

    if(ms >= DAY){   
        days = Math.floor(ms / DAY);
        ms -= days * DAY;

    }

    if(ms >= HOUR){   
        hours = Math.floor(ms / HOUR);
        ms -= hours * HOUR;
    }

    if(ms > MINUTE) {
        minutes = Math.floor(ms / MINUTE);
        ms -= minutes * MINUTE

    }

    seconds = Math.round(ms / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    }
}

module.exports = intervalToObj;
