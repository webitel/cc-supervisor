import valueFilterMixin from '../valueFilterMixin';

export const SortSymbols = Object.freeze({
  ASC: 'asc',
  DESC: 'desc',
  NONE: null,
});

const sortOrder = (sort) => {
  switch (sort) {
    case SortSymbols.NONE:
      return SortSymbols.ASC;
    case SortSymbols.ASC:
      return SortSymbols.DESC;
    case SortSymbols.DESC:
      return SortSymbols.NONE;
    default:
      return SortSymbols.ASC;
  }
};

const encodeSortQuery = ({ column, order }) =>
  // FIXME UNCOMMENT WHEN IMPLEMENTING MULTIPLE COLUMNS SORT
  // const value = this.headers
  //   .filter((item) => item.show && item.sort)
  //   .map((item) => `${item.value}=${item.sort}`)
  //   .join(',');
  // eslint-disable-next-line implicit-arrow-linebreak
  (order ? `${column.value}=${order}` : '');

const decodeSortQuery = ({ value }) => {
  const valArr = value.split('=');
  const sortedColumns = {
    [valArr[0]]: valArr[1],
  };
  // FIXME UNCOMMENT WHEN IMPLEMENTING MULTIPLE COLUMNS SORT
  // sort.split(',')
  //   .forEach((colStr) => {
  //     const col = {
  //       value: colStr.split('=')[0],
  //       order: colStr.split('=')[1],
  //     };
  //     sortedColumns[col.value] = col.order;
  //   });
  return sortedColumns;
};

export default {
  mixins: [valueFilterMixin],
  methods: {
    sort(column) {
      const order = sortOrder(column.sort);
      this.setValue({
        column,
        order,
      });
    },

    setValue({ column, order }) {
      const filterQuery = 'sort';
      this.headers.find((col) => col === column).sort = order;
      const value = encodeSortQuery({
        column,
        order,
      });
      this.setQueryValue({
        value,
        filterQuery,
      });
    },

    restoreValue({ value }) {
      const sortedColumns = decodeSortQuery({ value });
      this.headers = this.headers.map((header) => ({
        ...header,
        sort: sortedColumns[header.value] || null,
      }));
    },
  },
};
