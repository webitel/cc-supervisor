const getTimeFromDuration = (duration) => {
    if (!duration) return '00:00:00';
    return new Date(duration * 1000).toISOString().substr(11, 8);
};

export default getTimeFromDuration;
