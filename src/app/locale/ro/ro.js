import SupervisorSections from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';

export default {
  auth: {
    register: 'Înregistrare',
    login: 'Autentificare',
    registerReset: 'Resetează parola',
    detailsSubtitle: 'Introduceți detaliile dvs.',
    resetPasswordLink: 'Ați uitat parola?',
    user: 'Utilizator',
    password: 'Parolă',
    confirmPassword: 'Repetă parola',
    key: 'Cheie de licență',
    registerSubmit: 'Înregistrare',
    resetSubmit: 'Resetează',
    loginSubmit: 'Autentificare',
  },
  callState: {
    end: 'Încheiat',
    missed: 'Pierdut',
    disconnect: 'Deconectat',
  },
  defaults: {
    search: 'Căutare',
    exportCSV: 'Exportă CSV',
    add: 'Adaugă',
    close: 'Închide',
    save: 'Salvează',
  },
  filters: {
    from: 'De la',
    to: 'Până la',
    time: 'Timp',
    team: 'Echipă',
    queue: 'Coada',
    queueType: 'Tip coadă',
    status: 'Stare',
    utilization: 'Progres utilizare',
    callNow: 'În apel',
    direction: 'Direcție',
    agent: 'Agent',
    user: 'Utilizator',
    gateway: 'Gateway',
    skill: 'Competență',
    supervisor: 'Supervizor',
    auditor: 'Auditor',
    region: 'Locație',
    result: 'Rezultat',
    period: {
      options: {
        today: 'Astăzi',
        h: '{h} oră | {h} ore',
        m: '{m} minut | {m} minute',
      },
    },
    rated: {
      title: 'Evaluat',
      options: {
        yes: 'Da',
        no: 'Nu',
      },
    },
    ratedBy: 'Evaluat de',
  },
  pages: {
    shared: {
      columns: {
        blindTransfer: 'Transfer orb',
      },
    },
    queue: {
      title: 'Cozi',
      columns: {
        queue: 'Coada',
        agents: 'Agenți',
        free: 'Liber',
        team: 'Echipă',
        members: 'Membri în procesare/În așteptare',
        activities: 'Activități',
        bridged: 'Răspuns',
        transferred: 'Transferat',
        abandoned: 'Abandonat',
        sumBillSec: 'Convorbire',
        avgWrapSec: 'Timp wrap-up',
        avgAsaSec: 'ASA',
        avgAwtSec: 'AWT',
        avgAhtSec: 'AHT',
        sl20: 'SL/20',
        sl30: 'SL/30',
      },
    },
    agent: {
      title: 'Agenți',
      columns: {
        name: 'Nume',
        status: 'Stare',
        statusDuration: 'Durata stării',
        team: 'Echipă',
        queues: 'Cozi',
        utilization: 'Utilizare',
        callTime: 'Timp apel',
        chatTime: 'Timp chat',
        transferred: 'Transferat',
        missed: 'Pierdut',
        occupancy: 'Ocupare',
      },
    },
    card: {
      callAgent: 'Apel',
      progressiveCount: 'Număr apeluri progresive',
      chatCount: 'Număr chat-uri progresive',
      ratedCalls: 'Apeluri evaluate',
      score: 'Scor',
      general: {
        title: 'General',
        pauseCause: {
          columns: {
            name: 'Motiv pauză',
            duration: 'Progres',
            limit: 'Limită',
          },
        },
      },
      calls: {
        title: 'Jurnal de lucru',
        columns: {
          cause: 'Cauză închidere',
          direction: 'Direcție',
          duration: 'Durată',
          from: 'De la',
          to: 'Până la',
          createdAt: 'Dată și oră',
          gateway: 'Gateway',
          queue: 'Coada',
          team: 'Echipă',
          type: 'Tip',
          user: 'Utilizator',
          date: 'Dată',
          time: 'Timp',
          answeredAt: 'Răspuns la',
          bridgedAt: 'Conectat la',
          queueBridgedAt: 'Conectat la coadă',
          joinedAt: 'Alăturat la',
          leavingAt: 'Părăsit la',
          hangupAt: 'Închis la',
          reportingAt: 'Raportat la',
          extension: 'Extensie',
          destination: 'Destinație',
          member: 'Membru',
          hangupBy: 'Închis de',
          tags: 'Etichete',
          display: 'Afișare',
          holdSec: 'Ținut',
          waitSec: 'Așteptare',
          billSec: 'Facturare',
          reportingSec: 'Raportare',
          queueWaitSec: 'Așteptare coadă',
          queueDurationSec: 'Durată coadă',
          result: 'Rezultat',
          ratedBy: 'Evaluat de',
          score: 'Scor',
          sipCode: 'Cod SIP',
        },
      },
      statusHistory: {
        title: 'Istoric stare',
        states: {
          online: 'Online',
          offline: 'Offline',
          pause: 'Pauză',
          breakOut: 'Pauză forțată',
          waiting: 'Așteptare',
          offering: 'Oferire',
          answered: 'Răspuns',
          active: 'Activ',
          bridged: 'Conectat',
          hold: 'Ținut',
          missed: 'Pierdut',
          wrapTime: 'Timp wrap-up',
          processing: 'Procesare',
          chat: 'Chat',
        },
        columns: {
          state: 'Stare',
          from: 'Start',
          to: 'Sfârșit',
          duration: 'Durată',
        },
      },
      skills: {
        title: 'Competențe',
        skills: 'Competență | Competențe',
        capacity: 'Capacitate',
        columns: {
          enabled: 'Stare',
        },
      },
    },
    activeCall: {
      title: 'Apeluri active',
      columns: {
        createdAt: 'Început la',
        direction: 'Direcție',
        duration: 'Durată',
        from: 'De la',
        to: 'Până la',
        agent: 'Agent',
        destination: 'Destinație',
        extension: 'Extensie',
        queue: 'Coada',
        state: 'Rezultat',
        user: 'Utilizator',
        dtmf: 'DTMF',
      },
      empty: {
        workspace: 'Nu există apeluri active în acest moment',
        resultSearch: 'Vă rugăm să verificați filtrul',
      },
    },
    startPage: {
      [SupervisorSections.QUEUES]: {
        name: 'Cozi',
        text: 'În această secțiune puteți monitoriza cozile.',
      },
      [SupervisorSections.AGENTS]: {
        name: 'Agenți',
        text: 'În această secțiune puteți controla activitatea agenților, urmări stările și istoricul apelurilor și gestiona competențele acestora.',
      },
      [SupervisorSections.ACTIVE_CALLS]: {
        name: 'Apeluri active',
        text: 'În această secțiune puteți monitoriza apelurile active și vă puteți conecta la apel.',
      },
    },
  },
  callWindow: {
    client: 'Client',
    call: 'Apel',
    agent: 'Agent',
    duration: 'Durată',
    mute: 'Mute',
    prompter: 'Sufleur',
    conference: 'Conferință',
    copied: 'Copiat în clipboard!',
  },
  packages: {
    agentStatus: {
      online: 'Online',
      offline: 'Offline',
      pause: 'Pauză',
      breakOut: 'Pauză forțată',
    },
    agentStatusSelect: {
      pauseCausePopup: {
        title: 'Alegeți un motiv de pauză',
        min: 'Min',
        unlimited: 'Nelimitat',
      },
    },
  },
};
