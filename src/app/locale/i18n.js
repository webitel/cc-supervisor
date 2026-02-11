import { createI18n } from 'vue-i18n';

import en from './en/en';
import kz from './kz/kz';
import ru from './ru/ru';
import uk from './uk/uk';
import es from './es/es';
import pl from './pl/pl';
import uz from './uz/uz';
import vi from './vi/vi';
import ro from './ro/ro';

const messages = {
  en,
  ru,
  uk,
  kz,
  es,
  pl,
  uz,
  vi,
  ro,
};

export default createI18n({
  legacy: false,
  allowComposition: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
