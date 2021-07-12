# Angular 10

Podemos entrar a la web oficial de [Angular](https://angular.io/)<br>
Podemos entrar a la web oficial de [Node](https://nodejs.org/es/)

## ¿Qué es Angular?

::: warning Aviso
Según [Victor Robles](https://victorroblesweb.es/2017/08/05/que-es-angular-y-para-que-sirve/): **Angular es un framework de desarrollo** para JavaScript creado por Google. La finalidad de Angular es facilitarnos el desarrollo de **aplicaciones web SPA** y además darnos herramientas para trabajar con los elementos de una web de una manera más sencilla y optima.
:::

## ¿Qué es Angular CLI?

::: warning Aviso
Según [Desarrollo web](https://desarrolloweb.com/articulos/angular-cli.html): **Angular CLI**, el intérprete de línea de comandos de Angular permite iniciar proyectos y la creación del esqueleto (scaffolding) de todo tipo de artefactos necesarios para el desarrollo de aplicaciones.
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Instalamos Angular](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13239438#overview)
* [¿Cual es la version de angular que tengo instalada?](https://es.stackoverflow.com/questions/205257/cual-es-la-version-de-angular-que-tengo-instalada)
* [Problema al desinstalar Angular CLI](https://www.it-swarm-es.com/es/node.js/no-se-puede-desinstalar-angular-cli/831387397/#:~:text=Si%20tiene%20problemas%20con%20angular,con%20su%20nombre%20de%20usuario.)
* [Reemplazar HTML Entities con JavaScript](https://victorroblesweb.es/2019/01/20/reemplazar-html-entities-con-javascript/)
* [Jquery en Angular](https://victorroblesweb.es/2016/12/26/como-usar-jquery-en-angular-2/)
* [Variables en TypeScript](https://www.cosmiclearn.com/lang-es/typescript-variables.php)

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos Node
Instalamos [Node](https://nodejs.org/es/) desde su web
```
node -v
npm -v
```

### Instalamos Angular
1. Actualizamos **npm** a su ultima versión, borramos cache y desactivamos auditorias
```
npm install -g npm@latest 
npm cache clean --force 
npm set audit false
```

2. Desinstalar versiones anteriores de **Angular CLI**, borramos cache
```
npm unistall -g angular-cli 
npm unistall -g @angular/cli
npm cache clean --force (Borramos de nuevo la cache para eliminar todos los posibles conflictos que tengamos con npm)

ng --version
which ng (Si aun obtenemos angular-cli, ejecutar el siguiente comando para obtener la ruta ng y repetir el proceso)
```

3. Instalamos **Angular CLI** en su ultima version
```
npm install -g @angular/cli (Intalar la ultima version de angular-cli)
npm install -g @angular/cli@10.2.0 (Instalar version especifica de angular-cli, esta es la version mas estable que encontre) 

ng --version
```

### blog-angular
* [Instalamos Jquery](https://www.npmjs.com/package/jquery)
* [Instalamos bootstrap](https://www.npmjs.com/package/bootstrap)
* [Instalamos angular-froala-wysiwyg](https://www.npmjs.com/package/angular-froala-wysiwyg)
* [Problema con angular-froala-wysiwyg](https://github.com/froala/angular-froala-wysiwyg/issues/4)
* [Instalamos angular-file-uploader](https://www.npmjs.com/package/angular-file-uploader)

```
ng new blog-angular (Creamos el proyecto)
ng serve (Levantamos el proyecto)
ng serve --open (Levantamos el proyecto y abrimos en navegador)

Dependencias
Las dependencias siempre estan instaladas en packgage.json del proyecto

npm update (Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan)
npm i jquery (Instalamos Jquery)
npm i bootstrap (Instalamos bootstrap)
npm i angular-froala-wysiwyg (Instalamos angular-froala-wysiwyg)
npm i angular-file-uploader (Instalamos angular-file-uploader)

Componentes
ng g component components/login
ng g component components/register
ng g component components/home
ng g component components/error
ng g component components/category-new
ng g component components/post-new
ng g component components/post-detail
ng g component components/post-edit
ng g component components/category-detail
```