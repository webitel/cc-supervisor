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
  },
  pages: {
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
        name: 'Очередь',
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
          sipCode: 'SIP-код',
        },
      },
      statusHistory: {
        title: 'История статусов',
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
          state: 'Статус',
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
  },
  page404: {
    title404: 'Похоже, вы потерялись',
    text404: 'Извините, я не могу найти то, что вы ищете',
    btn404: 'Вернуться назад',
  },
  callWindow: {
    client: 'Абонент',
    call: 'Звонок',
    agent: 'Оператор',
    duration: 'Длительность',
    mute: 'Mute',
    prompter: 'Prompter',
    conference: 'Conference',
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
