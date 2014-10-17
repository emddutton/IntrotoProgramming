/**
 * Created by emddutton on 10/16/2014.
 */
function isSpeeding(speed,isBirthday) {
    var infraction = 0;
    if(isBirthday) {
        speed -= 5;
    }

    if (speed <= 60) {
        infraction = 0;
    } else if( speed > 60 && speed <= 80) {
        infraction = 1;
    } else {
        infraction = 2;
    }
    return infraction;
}


console.log(isSpeeding(60));