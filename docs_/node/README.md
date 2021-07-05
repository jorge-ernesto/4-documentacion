# Node

Podemos entrar a la web oficial de [Node](https://nodejs.org/es/)<br>
Podemos entrar a la web oficial de [npm](https://www.npmjs.com/)


## ¿Qué es Node?

::: warning Aviso
* Podemos entrar a la [documentación creada por Bluuweb sobre Node](https://bluuweb.github.io/node/)
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Sequelize](https://sequelize.org/)
* [webpack](https://webpack.js.org/)
* [ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/)
* [SweetAlert2](https://sweetalert2.github.io/)
* [axios](https://github.com/axios/axios)
* [HTML2Jade](https://html2jade.org/)

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos Node
Instalamos [Node](https://nodejs.org/es/) desde su web
```
node -v
npm -v
```

### blogbluuweb
```
node app (Ejecutar el proyecto)
node app.js (Ejecutar el proyecto)
npm init -y (Crear package.json)
npm i cowsay (Instalamos cowsay localmente)
npm i cowsay -g (Instalamos cowsay globalmente)

npm i (Puedes recuperar la carpeta node_modules con el archivo package.json)
npm update (Actualiza todos los modulos locales)
npm update -g (Actualiza todos los modulos globales)

npm i -g nodemon (Instalamos nodemos globalmente)
npm i express (Instalamos express localmente)
npm i ejs
npm install 
npm run dev (Ejecuta el proyecto)
npm run watch (Ejecuta webpack)
npm run start (Ejecuta todo)
```

### up_stacks
* [Diferencia entre let, var, const](https://platzi.com/discusiones/1099-fundamentos-javascript-2017/32001-cual-es-la-diferencia-entre-var-let-y-const/)
* [body-parser DeprecationWarning](https://www.npmjs.com/package/body-parser)
* [operatorsAliases DeprecationWarning](https://stackoverflow.com/questions/58593200/deprecationwarning-a-boolean-value-was-passed-to-options-operatorsaliases-this)
* [next is not defined](https://github.com/expressjs/express/issues/1638)
* [Usar method put](https://stackoverflow.com/questions/46907914/put-is-not-working-in-express-js/47462376)
* [Problema con hasMany, belongsTo](https://stackoverflow.com/questions/44070808/hasmany-called-with-something-thats-not-an-instance-of-sequelize-model)

```
Dependencias
npm install --save express (Instalamos express, -- para que sea una dependencia del proyecto)
npm install --save-dev nodemon (Instalamos nodemon, -- para que sea dependencia del proyecto y -dev para que sea dependencia de desarrollo)
npm install --save pug (Instalamos el motor de plantilla pug)
npm install --save mysql2 (Instalamos dependencia para conectarnos a mysql)
npm install --save sequelize (Instalamos dependencia de ORM)
npm install --save express-validator (Instalamos express validator)
npm install --save slug (Para formatear url)
npm install --save shortid (Para agregar id unico al final de url)
npm install --save method-override (Para usar method put)
npm install -D babel-loader @babel/core @babel/preset-env webpack (Instalamos webpack)
npm install --save concurrently (Para ejecutar simultaneamente scripts)
npm install --save axios sweetalert2 jquery
```