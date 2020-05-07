import download from '../../utils/downloadFile';

export default {
  data: () => ({
    isCSVLoading: false,
  }),

  methods: {
    downloadCSV({ fields, items }) {
      this.isCSVLoading = true;
      let csv = 'data:text/csv;charset=utf-8,';
      csv += `${fields.join(',')}\n`;
      items.forEach((item) => {
        let result = '';
        fields.forEach((key) => {
          let value = item[key] || '';
          if (typeof value === 'object') value = value.name || '';
          result += `${value},`;
        });
        csv += `${result}\n`;
      });
      download(encodeURI(csv), 'result.csv');
      this.isCSVLoading = false;
      // return csv;
    },
  },
};
