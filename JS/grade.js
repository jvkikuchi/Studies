//Function to convert grade from numbers to concepts

function convertGrade(grade){
    let convertedGrade;

    if(grade >= 90){
        convertedGrade = "A";
    } else if(grade >= 80 && grade <=89){
        convertedGrade = "B";
    } else if(grade >= 70 && grade <=79){
        convertedGrade = "C";
    } else if(grade >= 60 && grade <=69){
        convertedGrade = "D";
    } else{
        convertedGrade = "F";
    }

    return "Grade: " + convertedGrade;
}

console.log(convertGrade(90)); // A
console.log(convertGrade(80)); // B
console.log(convertGrade(79)); // C
console.log(convertGrade(69)); // D
console.log(convertGrade(60)); // D
console.log(convertGrade(55)); // F