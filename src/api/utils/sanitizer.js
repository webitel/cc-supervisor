// sanitizer removes unused fields from data
const sanitizer = (item, fieldsToSend) => Object.keys(item)
    .forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      if (fieldsToSend.indexOf(key) === -1) delete item[key];
    });

export default sanitizer;
