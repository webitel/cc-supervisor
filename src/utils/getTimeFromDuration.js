const getTimeFromDuration = (duration) => {
    if (!duration) return '';
    const tmpArr = new Date(+duration).toUTCString().split(' ');
    return tmpArr[tmpArr.length - 2];
};

export default getTimeFromDuration;
