export default {
  appNavigator: {
    title: 'Webitel applications',
    admin: 'Admin',
    agent: 'Agent Workspace',
    supervisor: 'Supervisor Workspace',
    audit: 'Audit',
    history: 'Call History',
    grafana: 'Grafana',
  },
  auth: {
    register: 'Register',
    login: 'Login',
    registerReset: 'Reset password',
    detailsSubtitle: 'Enter your details below',
    resetPasswordLink: 'Forgot password?',
    user: 'Username',
    password: 'Password',
    confirmPassword: 'Repeat password',
    key: 'License key',
    registerSubmit: 'Register',
    resetSubmit: 'Reset',
    loginSubmit: 'Log in',
  },
  settings: {
    settings: 'Settings',
    changePassword: 'Change password',
    language: 'Language',
    autoRefresh: 'AutoRefresh interval',
  },
  header: {
    logout: 'Log out',
    docs: 'Docs',
  },
  nav: {
    queue: 'Queue',
    agents: 'Agents',
    activeCalls: 'Active Calls',
  },
  icon: {
    docs: 'Docs',
    logout: 'Logout',
    account: 'Account',
    appNavigator: 'App navigator',
    settings: 'Settings',
  },
  validation: {
    email: 'Should look email-like',
    required: 'This field is required',
    sameAs: 'Incorrect password',
    gatewayHostValidator: 'Should look like IPv4 or FQDN',
    ipValidator: 'Should look like IPv4',
    macValidator: 'Should look like MAC',
    minValue: 'Value shoud be at least',
    maxValue: 'Value shoud be not much',
    numeric: 'Should be numberic',
    requiredArrayValue: 'Array should not be empty',
  },
  defaults: {
    search: 'Search',
    exportCSV: 'Export CSV',
    add: 'Add',
    close: 'Close',
    save: 'Save',
  },
  table: {
    showColumnsTitle: 'Select columns to show:',
    rowsPerPage: 'Rows per page:',
  },
  filters: {
    time: 'Time',
    team: 'Team',
    queue: 'Queue',
    type: 'Queue Type',
    status: 'Status',
    utilization: 'Utilization progress',
    callNow: 'Call now',
    direction: 'Direction',
    agent: 'Agent',
    user: 'User',
    gateway: 'Gateway',
  },
  options: {
    online: 'Online',
    offline: 'Offline',
    pause: 'Pause',
    inbound: 'Inbound',
    outbound: 'Outbound',
    today: 'Today',
    hour: 'hour',
    min: 'min',
  },
  pages: {
    queue: {
      title: 'Queues',
      columns: {
        name: 'Queue',
        agents: 'Agents',
        team: 'Team',
        members: 'Members Processing/Waiting',
        count: 'Count',
        answer: 'Answer',
        abandone: 'Abandone',
        talk: 'Talk',
        wrapUpTime: 'Wrap up time',
        asa: 'ASA',
        awt: 'AWT',
        aht: 'AHT',
      },
    },
    agent: {
      title: 'Agents',
      columns: {
        name: 'Name',
        status: 'Status',
        teams: 'Teams',
        queues: 'Queues',
        utilization: 'Utilization',
        call: 'Call',
      },
    },
    agentItem: {
      calls: {
        title: 'Calls',
        columns: {
          call: 'Call',
          talk: 'Talk',
          hold: 'Hold',
          client: 'Client',
          number: 'PhoneNumber',
          rating: 'Rating',
        },
      },
    },
    activeCall: {
      title: 'Active calls',
      columns: {
        start: 'Start',
        direction: 'Direction',
        duration: 'Duration',
        from: 'From',
        agent: 'Agent',
        to: 'To',
        destination: 'Destination',
        extention: 'Extention',
        queue: 'Queue',
        result: 'Result',
        user: 'User',
        dtmf: 'DTMF',
      },
    },
  },
  page404: {
    title404: "Looks like you're lost",
    text404: 'Sorry, we can\'t find the page you want.',
    btn404: 'Go back',
  },
  callWindow: {
    client: 'Client',
    call: 'Call',
    agent: 'Agent',
    duration: 'Duration',
  },
};
