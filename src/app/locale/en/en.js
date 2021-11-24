import SupervisorSections
  from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';

export default {
  auth: {
    register: 'Register',
    login: 'Login',
    registerReset: 'Reset password',
    detailsSubtitle: 'Enter your details',
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
    end: 'Ended',
    missed: 'Missed',
    disconnect: 'Disconnected',
  },
  // DEPRECATED: these locales should be moved to "reusable"
  defaults: {
    search: 'Search',
    exportCSV: 'Export CSV',
    add: 'Add',
    close: 'Close',
    save: 'Save',
  },
  filters: {
    from: 'From',
    to: 'To',
    time: 'Time',
    team: 'Team',
    queue: 'Queue',
    queueType: 'Queue Type',
    status: 'Status',
    utilization: 'Utilization progress',
    callNow: 'On a call',
    direction: 'Direction',
    agent: 'Agent',
    user: 'User',
    gateway: 'Gateway',
    skill: 'Skill',
    supervisor: 'Supervisor',
    auditor: 'Auditor',
    region: 'Location',
    result: 'Result',
    period: {
      options: {
        today: 'Today',
        h: '{h} hour | {h} hours',
        m: '{m} minute | {m} minutes',
      },
    },
  },
  pages: {
    queue: {
      title: 'Queues',
      columns: {
        queue: 'Queue',
        agents: 'Agents',
        free: 'Free',
        team: 'Team',
        members: 'Members processing/Waiting',
        count: 'Calls count',
        bridged: 'Answered',
        transferred: 'Transferred',
        abandoned: 'Abandoned',
        sumBillSec: 'Talk',
        avgWrapSec: 'Wrap up time',
        avgAsaSec: 'ASA',
        avgAwtSec: 'AWT',
        avgAhtSec: 'AHT',
        sl20: 'SL/20',
        sl30: 'SL/30',
      },
    },
    agent: {
      title: 'Agents',
      columns: {
        name: 'Name',
        status: 'Status',
        statusDuration: 'Status duration',
        team: 'Team',
        queues: 'Queues',
        utilization: 'Utilization',
        callTime: 'Call time',
        chatTime: 'Chat time',
        transferred: 'Transferred',
        missed: 'Missed',
        occupancy: 'Occupancy',
      },
    },
    card: {
      callAgent: 'Call',
      progressiveCount: 'Progressive call count',
      chatCount: 'Progressive chat count',
      general: {
        title: 'General',
        pauseCause: {
          columns: {
            name: 'Reason of pause',
            duration: 'Progress',
            limit: 'Limit',
          },
        },
      },
      calls: {
        title: 'Work log',
        columns: {
          cause: 'Hangup cause',
          direction: 'Direction',
          duration: 'Duration',
          from: 'From',
          to: 'To',
          createdAt: 'Date & time',
          gateway: 'Gateway',
          queue: 'Queue',
          team: 'Team',
          type: 'Type',
          user: 'User',
          date: 'Date',
          time: 'Time',
          answeredAt: 'Answered at',
          bridgedAt: 'Bridged at',
          queueBridgedAt: 'Queue bridged at',
          joinedAt: 'Joined at',
          leavingAt: 'Leaving at',
          hangupAt: 'Hangup at',
          reportingAt: 'Reporting at',
          extension: 'Extension',
          destination: 'Destination',
          member: 'Member',
          hangupBy: 'Hangup by',
          tags: 'Tags',
          display: 'Display',
          holdSec: 'Hold',
          waitSec: 'Wait',
          billSec: 'Billing',
          reportingSec: 'Reporting',
          queueWaitSec: 'Queue wait',
          queueDurationSec: 'Queue duration',
          result: 'Result',
          sipCode: 'SIP code',
        },
      },
      statusHistory: {
        title: 'Statuses history',
        states: {
          online: 'Online',
          offline: 'Offline',
          pause: 'Pause',
          breakOut: 'Break out',
          waiting: 'Waiting',
          offering: 'Offering',
          answered: 'Answered',
          active: 'Active',
          bridged: 'Bridged',
          hold: 'Hold',
          missed: 'Missed',
          wrapTime: 'Wrap up time',
          processing: 'Processing',
          chat: 'Chat',
        },
        columns: {
          state: 'Status',
          from: 'Start',
          to: 'End',
          duration: 'Duration',
        },
      },
      skills: {
        title: 'Skills',
        skills: 'Skill | Skills',
        capacity: 'Capacity',
        columns: {
          enabled: 'State',
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
    startPage: {
      [SupervisorSections.QUEUES]: {
        name: 'Queues',
        text: 'In this section, you can monitor queues.',
      },
      [SupervisorSections.AGENTS]: {
        name: 'Agents',
        text: 'In this section you can control agents work, track their statuses and call history and manage their skills.',
      },
      [SupervisorSections.ACTIVE_CALLS]: {
        name: 'Active calls',
        text: 'In this section, you can monitor active calls and connect to the call.',
      },
    },
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
    agentStatus: {
      online: 'Online',
      offline: 'Offline',
      pause: 'Pause',
      breakOut: 'Break Out',
    },
    agentStatusSelect: {
      pauseCausePopup: {
        title: 'Choose a reason of pause',
        min: 'Min',
        unlimited: 'Unlimited',
      },
    },
  },
};
