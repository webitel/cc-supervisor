const getTimeFromDuration = (duration) => {
    if (!duration) return '';
    return new Date(duration * 1000).toISOString().substr(11, 8);
    // const tmpArr = new Date(+duration * 1000).toUTCString().split(' ');
    // return tmpArr[tmpArr.length - 2];
};

export default getTimeFromDuration;
