for(let y=2000; y<=2025; y++){
    if(y%4000==0){
        console.log("%d is a Leap Year",y);
    }
    else if(y%4==0){
        if(y%100!=0){
            console.log("%d is a Leap Year", y);
        }
    }
    else{
        console.log("%d is not a Leap Year", y);
    }
}

const computer ={
    brand: "lenovo",
    price: "10000",
    monitor: "HP"
}
key = Object.keys(computer);
console.log(key);
console.log(Object.values(computer));

const sentence = "I am Adward.";
splArr = sentence.split('');
console.log(splArr);
revSplArr = splArr.reverse();
console.log(revSplArr);
reversedSentence = revSplArr.join('');
console.log(reversedSentence);
console.log(sentence.toLowerCase());


// sort

const persons = ["Rana", "Niloy", "Ramjan", "Emon", "Nabil"];
const sortedPersons = persons.sort();
console.log(sortedPersons);

