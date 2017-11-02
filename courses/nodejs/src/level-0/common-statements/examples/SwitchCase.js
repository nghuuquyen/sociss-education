showMessage('morning');


function showMessage(time) {
  switch (time) {
    case 'morning': {
      console.log('Good Morning.');
      break;
    }

    case 'afternoon': {
      console.log('Good afternoon.');
      break;
    }

    case 'evening': {
      console.log('Good evening.');
      break;
    }

    default: {
      console.log('I dont know.');
    }
  }
}
