const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo de entrada de tu biblioteca
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida para los archivos generados por Webpack
    filename: 'main.js', // Nombre del archivo de salida generado
    library: 'MyLibrary', // Nombre de tu biblioteca, esto permitirá que los usuarios la importen usando este nombre
    libraryTarget: 'umd', // Configura la forma en que tu biblioteca se exporta (Universal Module Definition)
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Utiliza Babel para transpilar tus archivos JS
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Utiliza SCSS para estilos
      },
    ],
  },
  externals: {
    react: 'react', // Excluye React de tu paquete, para que los usuarios de tu biblioteca usen su propia versión de React.
    'react-dom': 'react-dom', // Excluye ReactDOM de tu paquete.
  },
};
