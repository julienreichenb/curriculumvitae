module.exports = {
    publicPath: '/curriculumvitae/',
    css: {
        loaderOptions: {
          sass: {
            prependData: `@import "@/assets/styles/_variables.scss";`
          }
        }
      },
    
      pluginOptions: {
        i18n: {
          locale: "fr",
          fallbackLocale: "fr",
          localeDir: "locales",
          enableInSFC: false
        }
      }
  }