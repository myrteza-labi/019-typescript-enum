enum Month {
    Jan, 
    Fev, 
    Mar, 
    Avr, 
    Mai, 
    Jun, 
    Jul, 
    Aou, 
    Sep, 
    Oct, 
    Nov, 
    Dec
}; 

const isItSummer = (month:Month) => {
    let isSummer : boolean; 
    switch (month) {
        case Month.Jun: 
        case Month.Jul: 
        case Month.Aou: 
            isSummer = true; 
        break; 
        default : 
            isSummer = false; 
    };
    return isSummer;  
}; 

console.log(isItSummer(Month.Aou))

enum ApprovalStatus {
    draft,
    submited, 
    approved, 
    rejected
}; 

const projectX = {
    id: 1, 
    name: "x", 
    status : ApprovalStatus.approved
}; 

if(projectX.status === ApprovalStatus.approved) {
    console.log('Thank you for your approval'); 
}; 




