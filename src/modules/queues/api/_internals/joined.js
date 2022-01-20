const parseJoined = (time = 'today') => {
  let start;
  const end = new Date();
  switch (time) {
    case '6hour': {
      start = new Date(end).setHours(end.getHours() - 6);
      break;
    }
    case '3hour': {
      start = new Date(end).setHours(end.getHours() - 3);
      break;
    }
    case '1hour': {
      start = new Date(end).setHours(end.getHours() - 1);
      break;
    }
    case '30min': {
      start = new Date(end).setMinutes(end.getMinutes() - 30);
      break;
    }
    case '15min': {
      start = new Date(end).setMinutes(end.getMinutes() - 15);
      break;
    }
    case 'today': {
      start = new Date(end).setHours(0, 0, 0, 0);
      break;
    }
    default:
      start = new Date(end).setHours(0, 0, 0, 0);
  }
  return {
    joinedAtFrom: start,
    joinedAtTo: end.getTime(),
  };
};

export default parseJoined;
