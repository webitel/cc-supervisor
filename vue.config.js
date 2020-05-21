process.env.VUE_APP_API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'https://dev.webitel.com/api';
process.env.VUE_APP_AUTH_MODULE_URL = process.env.NODE_ENV === 'production' ? '/app/auth' : 'https://dev.webitel.com/app/auth';

process.env.VUE_APP_ADMIN_URL = process.env.NODE_ENV === 'production' ? '/' : 'https://dev.webitel.com/';
process.env.VUE_APP_AGENT_URL = process.env.NODE_ENV === 'production' ? '/workspace' : 'https://dev.webitel.com/workspace';
process.env.VUE_APP_SUPERVISOR_URL = process.env.NODE_ENV === 'production' ? '/supervisor' : 'https://dev.webitel.com/supervisor';
process.env.VUE_APP_AUDIT_URL = process.env.NODE_ENV === 'production' ? '/audit' : 'https://dev.webitel.com/audit';
process.env.VUE_APP_HISTORY_URL = process.env.NODE_ENV === 'production' ? '/history' : 'https://dev.webitel.com/history';

module.exports = {
  // publicPath: '',
  // lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/css/main.scss";
        @import "@/assets/css/objects/objects.scss";
        @import "@/assets/css/media.scss";
      `,
      },
    },
  },
  configureWebpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.devtool = 'source-map';
  },
};
