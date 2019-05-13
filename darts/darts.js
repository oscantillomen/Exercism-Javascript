export const solve = (x, y) => {
  if(!isNaN(x) && !isNaN(y)){
    const distance = pythagorean(x, y);
    if(distance >= 0 && distance <= 1) return 10;
    else if(distance > 1 && distance <= 5) return 5;
    else if(distance > 5 && distance <= 10) return 1;
    else return 0;
  }
  return null;
}

const pythagorean = (x, y) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));