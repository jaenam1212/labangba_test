function SplitCount(number) {
    const koreanUnits = ['', '만', '억', '조'];
    let answer = '';
    let unit = 10000;
    let index = 0;
    let division = Math.pow(unit, index);
  
    while (Math.floor(number / division) > 0) {
      const mod = Math.floor(number % (division * unit) / division);
      if(mod) {
        const modToString = mod.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '');
        answer = `${modToString}${`.`}${+ answer.slice( 0, -6)}${koreanUnits[index]} `;
      }
      division = Math.pow(unit, ++index);
    }
    return answer;
    //slice( 0, -6)
    //replace(/(.?0+$)/, '')
    //toFixed(2)
  }
  

export default SplitCount
