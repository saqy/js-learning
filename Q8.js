function checkCentury(year){
    const century = 100;
    const yearStr = year.toString();
    const slice = yearStr.substring(0,2);
    if((year % century) !== 0){
        console.log(Number(slice) + 1);
    }
    else{
        console.log(slice);
    }
}

checkCentury(1905);
checkCentury(1700);
checkCentury(1800);
checkCentury(1656);
checkCentury(1025);