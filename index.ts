enum Month {
    Jan, 
    Fev, 
    Mar, 
    Avr, 
    Mai, 
    Jun, 
    Jui, 
    Aou, 
    Sep, 
    Oct, 
    Nov, 
    Dec
}; 

const isItSummer = (month: Month) => {
    let isSummer : boolean; 
    switch (month) {
        case Month.Jun: 
        case Month.Jui: 
        case Month.Aou: 
            isSummer = true; 
            break; 
        default: 
            isSummer = false; 
            break; 
    };
    return isSummer; 
};

console.log(isItSummer(Month.Fev)); 