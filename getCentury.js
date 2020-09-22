function getCentury(year){
    const cent = 100;
    const yearStr = year.toString();
    const slice = yearStr.substr(0, 2);
 
    if((year % cent) !== 0 ){
 
      console.log(Number(slice) + 1)
      return Number(slice) + 1;
 
    } else {
 
     console.log(slice)
     return slice;
 
    }
 }
 
 const year1 = 1900;
 const year2 = 1700;
 const year3 = 1000;
 const year4 = 1799;
 
 getCentury(year1);
 getCentury(year2);
 getCentury(year3);
 getCentury(year4);