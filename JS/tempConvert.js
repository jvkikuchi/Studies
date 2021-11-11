// Create a function that convert F to C, or C to F. The function must identifie if the degree
// Is in F or C. The function parameter is a string. Creat an error message if not C or F

function convertDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Degree is not F or C')
    }

    //F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C'

    //C -> F
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32;
        degreeSign = 'F'

    } 
    
    return formula(updatedDegree) + degreeSign

    
}

try {
    console.log(convertDegree('50F'));
    console.log(convertDegree('10C'));
    console.log(convertDegree('50Z'));
} catch (error) {
    console.log(error.message)
}