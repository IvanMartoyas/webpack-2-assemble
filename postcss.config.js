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
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          }
        }
      ]
    })
  ]
}
// module.exports = {
//   plugins: [
//     require('autoprefixer'),
//     require('postcss-nested')
//   ]
// }