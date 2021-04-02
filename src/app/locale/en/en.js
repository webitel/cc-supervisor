export default {
  reusable: {
    total: 'Total',
    ok: 'Ok',
  },
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
  callState: {
    end: 'End',
    missed: 'Missed',
    disconnect: 'Disconnect',
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
    minValue: 'Value should be at least',
    maxValue: 'Value should be not much',
    numeric: 'Should be numeric',
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
    queueType: 'Queue Type',
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
        queue: 'Queue',
        agents: 'Agents',
        free: 'Free',
        team: 'Team',
        members: 'Members Processing/Waiting',
        count: 'Calls count',
        bridged: 'Answered',
        transferred: 'Transferred',
        abandoned: 'Abandoned',
        sumBillSec: 'Talk',
        avgWrapSec: 'Wrap up time',
        avgAsaSec: 'ASA',
        avgAwtSec: 'AWT',
        avgAhtSec: 'AHT',
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
        callTime: 'Call',
      },
    },
    agentPage: {
      callAgent: 'Call',
      team: 'Team',
      calls: {
        title: 'Calls',
        columns: {
          date: 'Date',
          time: 'Time',
          direction: 'Direction',
          call: 'Call',
          billSec: 'Talk',
          holdSec: 'Hold',
          client: 'Client',
          phoneNumber: 'Phone number',
        },
      },
    },
    activeCall: {
      title: 'Active calls',
      columns: {
        createdAt: 'Started at',
        direction: 'Direction',
        duration: 'Duration',
        from: 'From',
        to: 'To',
        agent: 'Agent',
        destination: 'Destination',
        extension: 'Extension',
        queue: 'Queue',
        state: 'Result',
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
    mute: 'Mute',
    prompter: 'Prompter',
    conference: 'Conference',
  },
  packages: {
    agentStatusSelect: {
      pauseCausePopup: {
        title: 'Select a pause cause',
      },
    },
  },
};
