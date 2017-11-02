console.log('Should equals true : ', isMorning('morning'));

function isMorning(time) {

  if(!time) return false;

  if(time === 'morning') {
    return true;
  }
  else {
    return false;
  }
}
