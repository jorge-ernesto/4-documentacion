# MongoDB

Podemos entrar a la web oficial de [MongoDB](https://www.mongodb.com/es)<br>
Podemos entrar a la web oficial de [RoboMongo / Robo 3T](https://robomongo.org/)


## ¿Qué es MongoDB?

::: warning Aviso
* Podemos entrar al [video  "Introducción a MongoDB" creado por Victor Robles sobre MongoDB](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10332142#overview) 
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Teoría de MongoDB / Diferencia entre NoSQL y SQL](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10113424#overview) ---> Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS 
* [Instalamos MongoDB](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10113414#overview) ---> Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
* [Administrador visual de MongoDB: RoboMongo / Robo3T](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10113420#overview) ---> Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
* [Cree una base de datos en MongoDB](https://www.mongodb.com/es/basics/create-database)

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos MongoDB
Instalamos [MongoDB](https://www.mongodb.com/try/download/community) desde su web

1. Descargar MongoDB localmente<br>
<img src="/mongodb/1 Descargar MongoDB localmente.png">

2. Account MongoDB<br>
<img src="/mongodb/2 Account MongoDB.png">

3. Recordar ejecutar `mongod.exe` (Debemos tenerlo en 2do plano siempre, es el demonio de MongoDB, ubicado en `C:\Program Files\MongoDB\Server\5.0\bin`) 
4. Recordar ejecutar `mongo.exe` (Sirve para ejecutar consultas por consola, ubicado en `C:\Program Files\MongoDB\Server\5.0\bin`) 

### MongoDB
```
help (Revisamos comandos de MongoDB)

show dbs (Mostramos Bases de Datos)
use curso_master_javascript (Creamos Base de Datos)
db.bookmarks.save({id: 1, title: 'Curso Master en JavaScript'}); (Solo insertando registro hacemos commit a la creacion de BD)

db.bookmarks.find(); (Buscamos en coleccion "bookmarks")
db.bookmarks.find({id:1}); (Buscamos en coleccion "bookmarks" el documento con el campo/dato del documento id:1)
```

Explicacion de como almacena la información MongoDB, de todos modos ver los videos de la sección [¿Que es MongoDB?](#¿que-es-mongodb) y [Enlaces utiles](#enlaces-utiles)
<img src="/mongodb/3 Base de Datos - Coleccion.png">