# MongoDB

Podemos entrar a la web oficial de [MongoDB](https://www.mongodb.com/es)<br>
Podemos entrar a la web oficial de [RoboMongo / Robo 3T](https://robomongo.org/)

## ¿Qué es MongoDB?

::: warning Aviso
<b>Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS</b>
* Podemos entrar al [video  "207. Introducción a MongoDB" creado por Victor Robles sobre MongoDB](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10332142#overview)

<b>Curso de MongoDB - Aprende bases de datos NoSQL + API NodeJS</b>
* Podemos entrar al [video  "1. Introducción" creado por Victor Robles sobre MongoDB](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7065424#overview)

<b>Master en webs Full Stack: Angular, Node, Laravel, Symfony +</b>
* Podemos entrar al [video  "121. MongoDB - ¿Que haremos?" creado por Victor Robles sobre MongoDB](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13841890#overview)
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

### Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
* [208. Teoría de MongoDB / Diferencia entre NoSQL y SQL](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10113424#overview)<br>
	Explicacion de como almacena la información MongoDB:
	* En una BD no relacional ya no tenemos un esquema, tenemos colecciones
	* En las colecciones tenemos documentos, con una estructura JSON, no tenemos tablas
	* En lugar de registros, tenemos los datos del documentos
<img width="500px" :src="$withBase('/mongodb/1 Base de Datos - Coleccion.png')">
* [209. Instalamos MongoDB](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10113414#overview)
* [211. Administrador visual de MongoDB: RoboMongo / Robo3T](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10113420#overview)

### Curso de MongoDB - Aprende bases de datos NoSQL + API NodeJS
* [2. Diferencias entre las bases de datos SQL y NoSQL. Teoría](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859586#overview)
* [3. Instalar MongoDB](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859670#overview)
* [4. Instalar Robo3T](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859678#overview)
* [5. Conexión y arranque de la base de datos](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859682#overview)
* [6. Comandos de ayuda](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859714#overview)
* [7. Listar base de datos](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859724#overview)

### Master en webs Full Stack: Angular, Node, Laravel, Symfony +
* [122. Bases de datos SQL vs NoSQL](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13546616#overview)
* [123. Instalar MongoDB](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13416810#overview)
* [125. Crear base de datos en Mongo DB](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13416812#overview)
* [126. Instalar Robo 3T](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13416816#overview)

#### Otros
* [Cree una base de datos en MongoDB](https://www.mongodb.com/es/basics/create-database)

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos MongoDB
Instalamos [MongoDB](https://www.mongodb.com/try/download/community) desde su web

1. Descargar MongoDB localmente<br>
<img width="500px" src="2 Descargar MongoDB localmente.png">

2. Account MongoDB (Configuración de MongoDB)<br>
<img width="500px" src="3 Account MongoDB.png">

### Ejecutamos MongoDB
1. Recordar ejecutar `mongod.exe` (Debemos tenerlo en 2do plano siempre, es el demonio de MongoDB, ubicado en `C:\Program Files\MongoDB\Server\5.0\bin`) 
2. Recordar ejecutar `mongo.exe` (Sirve para ejecutar consultas por consola, ubicado en `C:\Program Files\MongoDB\Server\5.0\bin`) 

### Conexión en Robo3T
<img width="500px" src="4 Conexion Robo3T.png">

### Aprendiendo MongoDB
#### Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
```
help      (Revisamos comandos de MongoDB)
db.help() (Comando de Ayuda para DB)
show dbs  (Mostramos Bases de Datos)

use curso_master_javascript;                                     (Creamos Base de Datos)
db.bookmarks.insert({id:1, title:'Curso Master en JavaScript'}); (Solo insertando una coleccion hacemos commit a la creacion de BD)

db.getCollection('bookmarks').find({});     (Buscamos en coleccion "bookmarks")
db.getCollection('bookmarks').find({id:1}); (Buscamos en coleccion "bookmarks" el documento con el campo/dato del documento id:1)

--Alternativas
db.bookmarks.find();
db.bookmarks.find({id:1});
```

#### Curso de MongoDB - Aprende bases de datos NoSQL + API NodeJS
```
help      (Revisamos comandos de MongoDB)
db.help() (Comando de Ayuda para DB)
show dbs  (Mostramos Bases de Datos)

use curso_mongo;                                       (Creamos Base de Datos)
db.frutas.insert({nombre:'Naranja', color:'naranja'}); (Solo insertando una coleccion hacemos commit a la creacion de BD)
manzana = {nombre:'Manzana', color:'verde'};           (Creamos variable, las variables solo persisten en la consola que se utilizan)
db.frutas.insert(manzana);                             (Insertamos coleccion usando variable)

db.getCollection('frutas').find({}); (Buscamos en coleccion "frutas")

--Alternativas
db.frutas.find();
```