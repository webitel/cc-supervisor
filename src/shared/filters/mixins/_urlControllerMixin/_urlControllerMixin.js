export default {
  methods: {
    /**
     * replaces $router with updated query params
     * @Function
     * @private
     * @param {Object} payload
     * @param {String} payload.filterQuery updated query property name
     * @param {String} payload.value updated query property value,
     */
    changeRouteQuery({ filterQuery, value }) {
      const query = { ...this.$route.query };
      query[filterQuery] = value;
      return this.$router.replace({
        name: this.$router.currentRoute.name,
        query,
      });
    },

    /**
     * Sets simple string query to url, calls filter function
     * @Function
     * @public
     * @param {Object} payload
     * @param {String} payload.filterQuery updated query property name
     * @param {String} payload.value updated query property value,
     */
    setValueToQuery({ filterQuery, value }) {
      if (this.$route.query[filterQuery] !== value) {
        this.changeRouteQuery({
          value,
          filterQuery,
        });
      }
    },

    /**
     * Sets query value to data property
     * Called by query param watcher in components
     * @Function
     * @public
     * @param {Object} payload
     * @param payload.value prop value,
     * @returns parsed value from query
     */
    getValueFromQuery({ filterQuery }) {
      const value = this.$route.query[filterQuery];
      if (value) return value;
      return '';
    },

    /**
     * Sets array value query to url, calls filter function
     * @Function
     * @public
     * @param {Object} payload
     * @param {String} payload.filterQuery updated query property name
     * @param {Array} payload.value updated query property value,
     * @param {String} [payload.storedProp = 'value'] value property to set and retrieve from url
     * @param {String} [payload.separator = '|'] separates array values in url
     */
    setValueArrayToQuery({
                    filterQuery,
                    value,
                    storedProp = 'id',
                    separator = '|',
                  }) {
      const filter = value.map((item) => item[storedProp])
        .join(separator);
      if (this.$route.query[filterQuery] !== filter) {
        this.changeRouteQuery({
          value: filter,
          filterQuery,
        });
      }
    },

    /**
     * Sets query array value to data property
     * Called by query param watcher in components
     * @Function
     * @public
     * @param {Object} payload
     * @param {Array} payload.value prop value,
     * @param {String} [payload.storedProp = 'value'] value property to set and retrieve from url
     * @param {String} [payload.separator = '|'] separates array values in url
     * @returns parsed value from query, converted to array or empty array
     */
    getValueArrayFromQuery({
                      filterQuery,
                      separator = '|',
                    }) {
      const value = this.$route.query[filterQuery];
      if (value) {
        return value.split(separator);
      }
      return [];
    },

    // /**
    //  * Gets value from url query by its filterQuery
    //  * @Function
    //  * @private
    //  * @returns value from query, converted to array or empty array
    //  */
    // getValueByQuery({ filterQuery }) {
    //   return this.$route.query[filterQuery];
    // },
  },
};
