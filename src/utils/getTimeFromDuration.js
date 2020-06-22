const getTimeFromDuration = (duration) => {
    if (!duration) return '';
    const tmpArr = new Date(+duration * 1000).toUTCString().split(' ');
    return tmpArr[tmpArr.length - 2];
};

export default getTimeFromDuration;
