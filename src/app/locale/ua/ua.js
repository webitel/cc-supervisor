export default {
  auth: {
    register: 'Створити',
    login: 'Вхід',
    registerReset: 'Скинути пароль',
    detailsSubtitle: 'Введіть свої дані',
    resetPasswordLink: 'Забули пароль?',
    user: 'Ім\'я користувача',
    password: 'Пароль',
    confirmPassword: 'Повторити пароль',
    key: 'Ліцензійний ключ',
    registerSubmit: 'Зареєструватися',
    resetSubmit: 'Скинути',
    loginSubmit: 'Увійти',
  },
  callState: {
    end: 'Завершено',
    missed: 'Пропущено',
    disconnect: 'Роз\'єднано',
  },
  nav: {
    queue: 'Черга',
    agents: 'Оператори',
    activeCalls: 'Активні дзвінки',
  },
  defaults: {
    search: 'Пошук',
    exportCSV: 'Експорт CSV',
    add: 'Додати',
    close: 'Закрити',
    save: 'Зберегти',
  },
  filters: {
    from: 'Від',
    to: 'До',
    time: 'Час',
    team: 'Команда',
    queue: 'Черга',
    queueType: 'Тип черги',
    status: 'Статус',
    utilization: 'Прогрес по утилізації',
    callNow: 'Розмовляє',
    direction: 'Напрям',
    agent: 'Оператор',
    user: 'Користувач',
    gateway: 'Шлюз',
    skill: 'Навичка',
    supervisor: 'Супервізор',
    auditor: 'Аудитор',
    region: 'Розміщення',
  },
  pages: {
    queue: {
      title: 'Черги',
      columns: {
        queue: 'Черга',
        agents: 'Оператори',
        free: 'Вільних',
        team: 'Команда',
        members: 'В обробці/Очікують',
        count: 'Кількість дзвінків',
        bridged: 'З\'єднано',
        transferred: 'Переведено',
        abandoned: 'Пропущено',
        sumBillSec: 'Розмова',
        avgWrapSec: 'Постобробка',
        avgAsaSec: 'ASA',
        avgAwtSec: 'AWT',
        avgAhtSec: 'AHT',
      },
    },
    agent: {
      title: 'Оператори',
      columns: {
        name: 'Черга',
        status: 'Статус',
        statusDuration: 'Тривалість статусу',
        team: 'Команда',
        queues: 'Черги',
        utilization: 'Утилізація',
        callTime: 'Час у дзвінках',
        chatTime: 'Час у чатах',
        transferred: 'Переведено',
        missed: 'Пропущено',
      },
    },
    card: {
      callAgent: 'Подзвонити',
      progressiveCount: 'Кількість одночасних дзвінків',
      chatCount: 'Кількість одночасних чатів',
      general: {
        title: 'Головна',
        pauseCause: {
          columns: {
            name: 'Причина паузи',
            duration: 'Прогрес',
            limit: 'Ліміт',
          },
        },
      },
      calls: {
        title: 'Журнал',
        columns: {
          cause: 'Причина завершення',
          direction: 'Напрям',
          duration: 'Тривалість',
          from: 'Номер від',
          to: 'Номер кому',
          createdAt: 'Дата і час',
          gateway: 'Шлюз',
          queue: 'Черга',
          team: 'Команда',
          type: 'Тип',
          user: 'Користувач',
          date: 'Дата',
          time: 'Час',
          answeredAt: 'Час з\'єднання',
          bridgedAt: 'Час відповіді',
          queueBridgedAt: 'Час відповіді в черзі',
          joinedAt: 'Час з\'єднання в черзі',
          leavingAt: 'Час виходу з черги',
          hangupAt: 'Час завершення',
          reportingAt: 'Час постобробки',
          extension: 'Номер співробітника',
          destination: 'Номер на',
          member: 'Абонент',
          hangupBy: 'Ініціатор завершення',
          tags: 'Теги',
          display: 'Номер для відображення',
          holdSec: 'Час утримання',
          waitSec: 'Час очікування',
          billSec: 'Тривалість розмови',
          reportingSec: 'Тривалість постобробки',
          queueWaitSec: 'Тривалість очікування в черзі',
          queueDurationSec: 'Тривалість в черзі',
          result: 'Результат',
          sipCode: 'SIP-код',
        },
      },
      statusHistory: {
        title: 'Історія статусів',
        states: {
          online: 'Онлайн',
          offline: 'Офлайн',
          pause: 'Пауза',
          breakOut: 'Примусова перерва',
          waiting: 'Очікування',
          offering: 'Розподілення',
          answered: 'Прийнятий',
          active: 'Активний',
          bridged: 'З\'єднаний',
          hold: 'Утримання',
          missed: 'Пропущений',
          wrapTime: 'Постобробка',
          processing: 'Обробка',
        },
        columns: {
          state: 'Статус',
          from: 'Початок',
          to: 'Кінець',
          duration: 'Тривалість',
        },
      },
      skills: {
        title: 'Навички',
        skills: 'Навичка | Навички',
        capacity: 'Потенціал',
        columns: {
          enabled: 'Стан',
        },
      },
    },
    activeCall: {
      title: 'Активні дзвінки',
      columns: {
        createdAt: 'Почався о',
        direction: 'Напрям',
        duration: 'Тривалість',
        from: 'Від',
        agent: 'Оператор',
        to: 'Кому',
        destination: 'Номер на',
        extension: 'Внутрішній номер',
        queue: 'Черга',
        state: 'Результат',
        user: 'Користувач',
        dtmf: 'DTMF',
      },
    },
  },
  page404: {
    title404: 'Здається, ви загубились',
    text404: 'Вибачте, я не можу знайти те, що ви шукаєте',
    btn404: 'Повернутись назад',
  },
  callWindow: {
    client: 'Абонент',
    call: 'Дзвінок',
    agent: 'Оператор',
    duration: 'Тривалість',
    mute: 'Mute',
    prompter: 'Prompter',
    conference: 'Conference',
  },
  packages: {
    agentStatus: {
      online: 'Онлайн',
      offline: 'Офлайн',
      pause: 'Пауза',
      breakOut: 'Примусова пауза',
    },
    agentStatusSelect: {
      pauseCausePopup: {
        title: 'Оберіть причину паузи',
        min: 'Хв.',
        unlimited: 'Безліміт',
      },
    },
  },
};