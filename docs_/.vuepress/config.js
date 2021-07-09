/**
 * base:
 * En desarrollo: /carpetas_compiladas_vuepress/4-documentacion/
 * En producción: /4-documentacion/
 */

 module.exports = {
  title: 'Documentación',
  description: 'Documentacion para las tecnologías estudiadas',
  base: '/4-documentacion/',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Guía', link: '/' },
      // { text: 'Guia', link: '/docs/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
    ],
    sidebar:[
        '/',
        '/vuepress/',
        '/git/',
        '/php/',    
        '/laravel/',
        '/autenticacion-en-laravel/',
        '/angular/',
        '/node/',
        '/portafolio/',
      ]
  }
 
}