// module.exports = {
//   plugins: [
//     require('autoprefixer'),
//     require('cssnano')({
//       preset: [
//         'default',
//         {
//           discardComments: {
//             removeAll: true// удаляет коментарии из кода
//           }
//         }
//       ]
//     })
//   ]
// }
/*
  postcss-import позволяет делать import (подключать) css файлов  в другие 
  пример @import "normalize.css"; /* == @import "../node_modules/normalize.css/normalize.css"; 
  
  postcss-focus Добавляет псеводэлемент :focus ко всем селекторам, где используется :hover.
  postcss-color-short сокращает запись цветов из #000000 в #00
  postcss-pxtorem превращает px в rem
  autoprefixer дописывает префиксы
  postcss-flexbugs-fixes исправляет баги для flexbox
  CSS Mqpacker Группирует медиазапросы и помещает их в конец CSS документа.
  cssnano позволяет сжимать css более продвинуто
*/

module.exports = {
  plugins: [
    require("postcss-import"),
    require('postcss-focus'),
    require('postcss-color-short'),
    require('postcss-pxtorem'),
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('css-mqpacker'),
    require('postcss-preset-env')({
      stage: 4
    }),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true, //удалять коментарии
          }
        }
      ]
    }),
  ]
}
// module.exports = {
//   plugins: [
//     require('autoprefixer'),
//     require('postcss-nested')
//   ]
// }