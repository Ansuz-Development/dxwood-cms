import AuthLogo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: AuthLogo,
    },
    head: {
      favicon: favicon,
    },
    tutorials: false,
    notifications: { release: false },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "DXWood",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
