const checkAge = (age) => {
  return age >= 18 ? 'Eligible for vote' : 'Minor';
};

console.log(checkAge(20)); 
console.log(checkAge(16)); 

