var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Fev"] = 1] = "Fev";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Avr"] = 3] = "Avr";
    Month[Month["Mai"] = 4] = "Mai";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jui"] = 6] = "Jui";
    Month[Month["Aou"] = 7] = "Aou";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
var isItSummer = function (month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jui:
        case Month.Aou:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    ;
    return isSummer;
};
console.log(isItSummer(Month.Fev));
