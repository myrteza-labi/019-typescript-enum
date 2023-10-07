var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Fev"] = 1] = "Fev";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Avr"] = 3] = "Avr";
    Month[Month["Mai"] = 4] = "Mai";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
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
        case Month.Jul:
        case Month.Aou:
            isSummer = true;
            break;
        default:
            isSummer = false;
    }
    ;
    return isSummer;
};
console.log(isItSummer(Month.Aou));
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["draft"] = 0] = "draft";
    ApprovalStatus[ApprovalStatus["submited"] = 1] = "submited";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var projectX = {
    id: 1,
    name: "x",
    status: ApprovalStatus.approved
};
if (projectX.status === ApprovalStatus.approved) {
    console.log('Thank you for your approval');
}
;
