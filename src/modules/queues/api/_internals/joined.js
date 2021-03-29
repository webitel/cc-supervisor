const parseJoined = (time = 'today') => {
  let start;
  let end;
  switch (time) {
    case '6hour': {
      start = new Date();
      end = new Date(start);
      start.setHours(start.getHours() - 6);
      break;
    }
    case '3hour': {
      start = new Date();
      end = new Date(start);
      start.setHours(start.getHours() - 3);
      break;
    }
    case '1hour': {
      start = new Date();
      end = new Date(start);
      start.setHours(start.getHours() - 1);
      break;
    }
    case '30min': {
      start = new Date();
      end = new Date(start);
      start.setMinutes(start.getMinutes() - 30);
      break;
    }
    case '15min': {
      start = new Date();
      end = new Date(start);
      start.setMinutes(start.getMinutes() - 15);
      break;
    }
    case 'today': {
      end = new Date();
      start = new Date(end.getFullYear(), end.getMonth(), end.getDate());
      break;
    }
    default:
      end = new Date();
      start = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  }
  return {
    jointedAtFrom: start.getTime(),
    joinedAtTo: end.getTime(),
  };
};

export default parseJoined;
