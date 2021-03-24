module.exports = function createDreamTeam(members) {
  
  if(!Array.isArray(members)){
  return false;
  }
  let mass = [];
  for(let i = 0; i< members.length; i++){

  
    if((typeof(members[i])=='string')){
    mass[i] = (members[i]).replace(/\s+/gmi,"").toLowerCase().split('').shift();
    }
  }
  return mass.sort().join('').toUpperCase();
};
