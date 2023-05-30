import SupervisorSections from '@webitel/ui-sdk/src/enums/WebitelApplications/SupervisorSections.enum';

export default {
  auth: {
    register: 'Создать',
    login: 'Вход',
    registerReset: 'Скинуть пароль',
    detailsSubtitle: 'Введите свои данные',
    resetPasswordLink: 'Забыли пароль?',
    user: 'Имя пользователя',
    password: 'Пароль',
    confirmPassword: 'Повторить пароль',
    key: 'Лицензионный ключ',
    registerSubmit: 'Зарегистрироваться',
    resetSubmit: 'Скинуть',
    loginSubmit: 'Войти',
  },
  callState: {
    end: 'Окончено',
    missed: 'Пропущено',
    disconnect: 'Разъединено',
  },
  defaults: {
    search: 'Поиск',
    exportCSV: 'Экспорт CSV',
    add: 'Добавить',
    close: 'Закрыть',
    save: 'Сохранить',
  },
  filters: {
    from: 'От',
    to: 'До',
    time: 'Время',
    team: 'Команда',
    queue: 'Очередь',
    queueType: 'Тип очереди',
    status: 'Статус',
    utilization: 'Прогресс по утилизации',
    callNow: 'В разговоре',
    direction: 'Направление',
    agent: 'Оператор',
    user: 'Пользователь',
    gateway: 'Шлюз',
    skill: 'Навык',
    supervisor: 'Супервизор',
    auditor: 'Аудитор',
    region: 'Площадка',
    result: 'Результат',
    period: {
      options: {
        today: 'Сегодня',
        h: '{h} час | {h} часов',
        m: '{m} минута | {m} минут',
      },
    },
    rated: {
      title: 'Оцененные',
      options: {
        yes: 'Да',
        no: 'Нет',
      },
    },
    ratedBy: 'Оценены кем',
  },
  pages: {
    shared: {
      columns: {
        blindTransfer: 'Слепой перевод',
      },
    },
    queue: {
      title: 'Очереди',
      columns: {
        queue: 'Очередь',
        agents: 'Операторы',
        free: 'Свободно',
        team: 'Команда',
        members: 'В обработке/Ожидают',
        count: 'Количество звонков',
        bridged: 'Соединено',
        transferred: 'Переведено',
        abandoned: 'Пропущено',
        sumBillSec: 'Разговор',
        avgWrapSec: 'Постобработка',
        avgAsaSec: 'ASA',
        avgAwtSec: 'AWT',
        avgAhtSec: 'AHT',
        sl20: 'SL/20',
        sl30: 'SL/30',
      },
    },
    agent: {
      title: 'Операторы',
      columns: {
        name: 'Имя',
        status: 'Статус',
        statusDuration: 'Длительность статуса',
        team: 'Команда',
        queues: 'Очереди',
        utilization: 'Утилизация',
        callTime: 'Время в звонках',
        chatTime: 'Время в чатах',
        transferred: 'Переведено',
        missed: 'Пропущено',
        occupancy: 'Занятость',
      },
    },
    card: {
      callAgent: 'Позвонить',
      progressiveCount: 'Количество одновременных звонков',
      chatCount: 'Количество одновременных чатов',
      ratedCalls: 'Оцененные звонки',
      score: 'Рейтинг',
      general: {
        title: 'Главная',
        pauseCause: {
          columns: {
            name: 'Причина паузы',
            duration: 'Прогресс',
            limit: 'Лимит',
          },
        },
      },
      calls: {
        title: 'Журнал',
        columns: {
          cause: 'Причина завершения',
          direction: 'Направление',
          duration: 'Длительность',
          from: 'Номер от',
          to: 'Номер кому',
          createdAt: 'Дата и время',
          gateway: 'Шлюз',
          queue: 'Очередь',
          team: 'Команда',
          type: 'Тип',
          user: 'Пользователь',
          date: 'Дата',
          time: 'Время',
          answeredAt: 'Время соединения',
          bridgedAt: 'Время ответа',
          queueBridgedAt: 'Время ответа в очереди',
          joinedAt: 'Время соединения в очереди',
          leavingAt: 'Время выхода из очереди',
          hangupAt: 'Время завершения',
          reportingAt: 'Время постобработки',
          extension: 'Номер сотрудника',
          destination: 'Номер на',
          member: 'Абонент',
          hangupBy: 'Инициатор завершения',
          tags: 'Теги',
          display: 'Номер отображения',
          holdSec: 'Время удержания',
          waitSec: 'Время ожидания',
          billSec: 'Длительность разговора',
          reportingSec: 'Длительность постобработки',
          queueWaitSec: 'Длительность ожидания в очереди',
          queueDurationSec: 'Длительность в очереди',
          result: 'Результат',
          ratedBy: 'Кем оценен',
          score: 'Оценка',
          sipCode: 'SIP-код',
        },
      },
      statusHistory: {
        title: 'История состояний',
        states: {
          online: 'Онлайн',
          offline: 'Офлайн',
          pause: 'Пауза',
          breakOut: 'Принудительный перерыв',
          waiting: 'Ожидание',
          offering: 'Распределение',
          answered: 'Отвечен',
          active: 'Активный',
          bridged: 'Соединён',
          hold: 'Удержание',
          missed: 'Пропущен',
          wrapTime: 'Постобработка',
          processing: 'Обработка',
          chat: 'Чат',
        },
        columns: {
          state: 'Состояние',
          from: 'Начало',
          to: 'Конец',
          duration: 'Длительность',
        },
      },
      skills: {
        title: 'Навыки',
        skills: 'Навык | Навыки',
        capacity: 'Потенциал',
        columns: {
          enabled: 'Состояние',
        },
      },
    },
    activeCall: {
      title: 'Активные звонки',
      columns: {
        createdAt: 'Начался в',
        direction: 'Направление',
        duration: 'Длительность',
        from: 'От',
        agent: 'Оператор',
        to: 'Кому',
        destination: 'Номер на',
        extension: 'Внутренний номер',
        queue: 'Очередь',
        state: 'Результат',
        user: 'Пользователь',
        dtmf: 'DTMF',
      },
    },
    startPage: {
      [SupervisorSections.QUEUES]: {
        name: 'Очереди',
        text: 'В этом разделе можно следить за очередями.',
      },
      [SupervisorSections.AGENTS]: {
        name: 'Операторы',
        text: 'В этом разделе можна контролировать работу операторов, отслеживать их статусы и историю звонков, а также управлять их навыками.',
      },
      [SupervisorSections.ACTIVE_CALLS]: {
        name: 'Активные звонки',
        text: 'В этом разделе можно следить за активными звонками и иметь возможность подключится к ним.',
      },
    },
  },
  callWindow: {
    client: 'Абонент',
    call: 'Звонок',
    agent: 'Оператор',
    duration: 'Длительность',
    mute: 'Mute',
    prompter: 'Prompter',
    conference: 'Conference',
    copied: 'Скопировано!',
  },
  packages: {
    agentStatus: {
      online: 'Онлайн',
      offline: 'Офлайн',
      pause: 'Пауза',
      breakOut: 'Принудительный перерыв',
    },
    agentStatusSelect: {
      pauseCausePopup: {
        title: 'Выберите причину паузы',
        min: 'Мин.',
        unlimited: 'Безлимит',
      },
    },
  },
};
