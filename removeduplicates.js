let a = ["abul","Abul","kabul","kabul","rubel","selim","amin","now","then"];

function uniqueper(arr){
    unique = [];
    for (element of arr) {
      lowerCaseElement = element.toLowerCase();
      if (unique.includes(lowerCaseElement) === false) {
        unique.push(lowerCaseElement);
      }
    }
    return unique;
}

console.log(uniqueper(a));