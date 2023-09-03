
/*******************DESCRIPTION****************************/

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  
    let bmi = weight / (height ** 2)
  if (bmi !== ""){ 
  
  if (bmi <= 18.5  ){
      bmi = "Underweight"
  }
  if (bmi <= 25.00 ){
      bmi = "Normal"
  }
  if (bmi <= 30.00 ){
      bmi = "Overweight"
  }
  if (bmi > 30.00 ){
      bmi = "Obese"
  }
  
  }
    return console.log(bmi);
  }
  
  bmi(80, 1.80)