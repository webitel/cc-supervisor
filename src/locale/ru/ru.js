export default {
  appNavigator: {
    title: 'Приложения Webitel',
    admin: 'Admin',
    agent: 'Agent Workspace',
    supervisor: 'Supervisor Workspace',
    audit: 'Audit',
    history: 'Call History',
  },
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
  settings: {
    settings: 'Настройки',
    changePassword: 'Поменять пароль',
    language: 'Язык',
    autoRefresh: 'Автообновление',
  },
  header: {
    logout: 'Выйти',
    docs: 'Документация',
  },
  nav: {
    queue: 'Очередь',
    agents: 'Агенты',
    activeCalls: 'Активные звонки',
  },
  icon: {
    docs: 'Документация',
    logout: 'Выйти',
    account: 'Аккаунт',
    appNavigator: 'Навигатор приложений',
    settings: 'Настройки',
  },
  validation: {
    email: 'Введите адрес электронной почты',
    required: 'Обязательное поле для заполнения',
    sameAs: 'Неверный пароль',
    gatewayHostValidator: 'Should look like IPv4 or FQDN',
    ipValidator: 'Should look like IPv4',
    macValidator: 'Should look like MAC',
    minValue: 'Значение должно быть не менее',
    maxValue: 'Значение должно быть не слишком большим',
    numeric: 'Должны быть цифры',
    requiredArrayValue: 'Поле не должно быть пустым',
  },
  defaults: {
    search: 'Поиск',
    exportCSV: 'Экспорт CSV',
    add: 'Добавить',
    close: 'Закрыть',
    save: 'Сохранить',
  },
  table: {
    showColumnsTitle: 'Выбрать столбики для отображения:',
  },
  filters: {
    time: 'Время',
    team: 'Команда',
    queue: 'Очередь',
    type: 'Тип очереди',
    status: 'Статус',
    utilization: 'Прогресс по утилизации',
    callNow: 'В разговоре',
    direction: 'Направление',
    agent: 'Оператор',
    user: 'Пользователь',
    gateway: 'Шлюз',
  },
  pages: {
    queue: {
      title: 'Очереди',
      columns: {
        name: 'Очередь',
        agents: 'Операторы',
        team: 'Команда',
        members: 'Обработка/Ожидание',
        count: 'Количество',
        answer: 'Отвечено',
        abandone: 'Пропущено',
        talk: 'Разговор',
        wrapUpTime: 'Постобработка',
        asa: 'ASA',
        awt: 'AWT',
        aht: 'AHT',
      },
    },
    agent: {
      title: 'Операторы',
      columns: {
        name: 'Очередь',
        status: 'Статус',
        teams: 'Команды',
        queues: 'Очереди',
        utilization: 'Утилизация',
        call: 'Звонок',
      },
    },
    agentItem: {
      calls: {
        columns: {
          call: 'Звонок',
          talk: 'Разговор',
          hold: 'Удержание',
          client: 'Абонент',
          number: 'Номер телефона',
          rating: 'Рейтинг',
        },
      },
    },
    activeCall: {
      title: 'Активные звонки',
      columns: {
        start: 'Начало',
        direction: 'Направление',
        duration: 'Длительность',
        from: 'От',
        agent: 'Оператор',
        to: 'Кому',
        destination: 'Номер на',
        extention: 'Внутренний номер',
        queue: 'Очередь',
        result: 'Результат',
        user: 'Пользователь',
        dtmf: 'DTMF',
      },
    },
  },
  page404: {
    title404: 'Похоже, вы потерялись',
    text404: 'Извините, мы не можем найти то, что вы ищете',
    btn404: 'Вернуться назад',
  },
  callWindow: {
    client: 'Абонент',
    call: 'Звонок',
  },
};
