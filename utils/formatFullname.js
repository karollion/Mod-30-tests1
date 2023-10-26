module.exports = (fullName) => {
  if(typeof content !== 'string') return 'Error';
  
  const [ firstName, lastName ] = fullName.split(' ');
  if(!firstName || !lastName) return false;
  return firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0