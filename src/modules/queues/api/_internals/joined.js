const parseJoined = (time = 'today') => {
	const end = new Date();
	let start;

	const hour = 60 * 60 * 1000;
	const min = 60 * 1000;

	switch (time) {
		case '6hour':
			start = new Date(end.getTime() - 6 * hour);
			break;
		case '3hour':
			start = new Date(end.getTime() - 3 * hour);
			break;
		case '1hour':
			start = new Date(end.getTime() - hour);
			break;
		case '30min':
			start = new Date(end.getTime() - 30 * min);
			break;
		case '15min':
			start = new Date(end.getTime() - 15 * min);
			break;
		case 'today':
		default:
			start = new Date(end);
			start.setHours(0, 0, 0, 0);
			break;
	}
	return {
		joinedAtFrom: start.getTime(),
		joinedAtTo: end.getTime(),
	};
};

export default parseJoined;
