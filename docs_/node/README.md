# NodeJS

Podemos entrar a la web oficial de [Node](https://nodejs.org/es/)<br>
Podemos entrar a la web oficial de [npm](https://www.npmjs.com/)


## ¿Qué es Node?

::: tip Aviso
* Podemos entrar a la [documentación creada por Bluuweb sobre Node](https://bluuweb.github.io/node/)
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Enlaces Utiles de Angular](/angular/#enlaces-utiles) => Podremos ver como se instala Node antes de instalar AngularCLI
* [¿Qué es REST? Conoce su potencia](https://openwebinars.net/blog/que-es-rest-conoce-su-potencia/) => [133. El cliente REST](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13616188#notes) ---> Master en webs Full Stack: Angular, Node, Laravel, Symfony +
* [Handlebars](https://handlebarsjs.com/) => No parece tan util

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos Node
Instalamos [Node](https://nodejs.org/es/) desde su web
```
node -v
npm -v
```

### 1_blogbluuweb
* [EJS](https://ejs.co/) => 1_blogbluuweb

```
npm init -y (Crear package.json)
node app (Ejecutar el proyecto)
node app.js (Ejecutar el proyecto)

Dependencias
Las dependencias siempre estan instaladas en packgage.json del proyecto

npm i (Puedes recuperar la carpeta node_modules con el archivo package.json)
npm install (Puedes recuperar la carpeta node_modules con el archivo package.json)
npm update (Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan)
npm update -g (Actualiza todos las dependencias globales)

npm i cowsay (Instalamos cowsay localmente)
npm i cowsay -g (Instalamos cowsay globalmente)
npm i express (Instalamos express localmente)
npm i ejs (Instalamos motor de plantilla EJS)
```

### 2_up_stacks
* [Sequelize](https://sequelize.org/)
* [webpack](https://webpack.js.org/)
* [ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/)
* [SweetAlert2](https://sweetalert2.github.io/)
* [axios](https://github.com/axios/axios)
* [PUG](https://pugjs.org/api/getting-started.html)
* [HTML to JADE/PUG](https://html2jade.org/) => 2_up_stacks
* [Diferencia entre let, var, const](https://platzi.com/discusiones/1099-fundamentos-javascript-2017/32001-cual-es-la-diferencia-entre-var-let-y-const/)
* [body-parser DeprecationWarning](https://www.npmjs.com/package/body-parser)
* [operatorsAliases DeprecationWarning](https://stackoverflow.com/questions/58593200/deprecationwarning-a-boolean-value-was-passed-to-options-operatorsaliases-this)
* [next is not defined](https://github.com/expressjs/express/issues/1638)
* [Usar method put](https://stackoverflow.com/questions/46907914/put-is-not-working-in-express-js/47462376)
* [Problema con hasMany, belongsTo](https://stackoverflow.com/questions/44070808/hasmany-called-with-something-thats-not-an-instance-of-sequelize-model)

```
npm init -y (Crear package.json)
node index (Ejecutar el proyecto)
node index.js (Ejecutar el proyecto)

npm run dev (Ejecuta el proyecto)
npm run watch (Ejecuta webpack)
npm run start (Ejecuta todo)

Dependencias
Las dependencias siempre estan instaladas en packgage.json del proyecto

npm i (Puedes recuperar la carpeta node_modules con el archivo package.json)
npm install (Puedes recuperar la carpeta node_modules con el archivo package.json)
npm update (Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan)
npm update -g (Actualiza todos las dependencias globales)

npm install --save express (Instalamos express)
npm install --save-dev nodemon (Instalamos nodemon, --save para indicarle que sea dependencia del proyecto y -dev para indicarle que sea dependencia de desarrollo)
npm install --save pug (Instalamos el motor de plantilla PUG)
npm install --save mysql2 (Instalamos dependencia para conectarnos a mysql)
npm install --save sequelize (Instalamos dependencia de ORM)
npm install --save express-validator (Instalamos express validator)
npm install --save slug (Para formatear url)
npm install --save shortid (Para agregar id unico al final de url)
npm install --save method-override (Para usar method put)
npm install -D babel-loader @babel/core @babel/preset-env webpack (Instalamos webpack)
npm install --save concurrently (Para ejecutar simultaneamente scripts)
npm install --save axios sweetalert2 jquery (Instalamos Axios, SweetAlert2 y Jquery|)
```

### 3_node_api
* [Mongoose](https://mongoosejs.com)
* [Como diseñar una base de datos con DIA - Victor Robles](https://victorroblesweb.es/2016/02/20/disenar-una-base-datos-dia/)
* [¿Qué es REST? Conoce su potencia](https://openwebinars.net/blog/que-es-rest-conoce-su-potencia/)

```
npm init (Crear package.json personalizandolo)
node index (Ejecutar el proyecto)
node index.js (Ejecutar el proyecto)

npm run start (Comando configurado en package.json)
npm start (Comando configurado en package.json, tambien se puede ejecutar de este modo)
```
<img width="800px" src="npm init.png">

```
Dependencias
Las dependencias siempre estan instaladas en packgage.json del proyecto

npm i (Puedes recuperar la carpeta node_modules con el archivo package.json)
npm install (Puedes recuperar la carpeta node_modules con el archivo package.json)
npm update (Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan)
npm update -g (Actualiza todos las dependencias globales)

bcrypt-nodejs (Actualmetne esta desactualizado)              => Revisar en: https://www.npmjs.com/package/bcrypt-nodejs. Nota: Esta url recomienda usar bcrypt, ya que bcrypt-nodejs esta desactualizada
npm i bcrypt (Instalamos bcrypt)                             => Para hashear contraseñar
npm i body-parser (Instalamos body-parser)                   => Se encarga de recibir una peticion HTTP normal, se encarga tomar toda esa información, la informacion del body y convertirla a JSON
npm i connect-multiparty (Instalamos connect-multiparty)     => Permite subir archivos al backend
npm i express (Instalamos express)                           => Framework que funciona sobre NodeJS, que se encarga de todas las peticiones HTTP, framework backend que se encarga de hacerlo todo, si queremos hacer una API o una aplicacion completa con Node, necesitamos Express
npm i jwt-simple (Instalamos jwt-simple)                     => Nos permite generar Token y decodificar Token
npm i moment (Instalamos moment)                             => Procesar fechas, limpiarlas, darle un formato concreto, etc
npm i mongoose (Instalamos mongoose)                         => Es un ORM, una herramienta de modelado de objetos, diseñada para trabajar con MongoDB
npm i mongoose-paginate-v2 (Instalamos mongoose-paginate-v2) => Paginacion con mongoose
npm i validator (Instalamos validator)                       => Validar datos, validar email, string, numero, cosas asi

npm install --save-dev nodemon (Instalamos nodemon, --save para indicarle que sea dependencia del proyecto y -dev para indicarle que sea dependencia de desarrollo)
```