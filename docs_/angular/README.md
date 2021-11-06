# Angular 10, 11

Podemos entrar a la web oficial de [Angular](https://angular.io/)<br>
Podemos entrar a la web oficial de [Angular CLI](https://angular.io/cli)<br>
Podemos entrar a la web oficial de [Node](https://nodejs.org/es/)<br>
Podemos entrar a la web oficial de [npm](https://www.npmjs.com/)

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

* [Instalamos Angular](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13239438#overview) ---> Master en webs Full Stack: Angular, Node, Laravel, Symfony +
* [Instalamos Angular](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13666344#overview) & [Instalar Angular 7 paso a paso - Victor Robles](https://victorroblesweb.es/2018/11/20/instalar-angular-7-paso-a-paso/) ---> Master en webs Full Stack: Angular, Node, Laravel, Symfony +
* [Instalamos Angular](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10311524#overview) ---> Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
* [¿Cual es la version de angular que tengo instalada?](https://es.stackoverflow.com/questions/205257/cual-es-la-version-de-angular-que-tengo-instalada)
* [Problema al desinstalar Angular CLI](https://www.it-swarm-es.com/es/node.js/no-se-puede-desinstalar-angular-cli/831387397/#:~:text=Si%20tiene%20problemas%20con%20angular,con%20su%20nombre%20de%20usuario.)
* [Reemplazar HTML Entities con JavaScript](https://victorroblesweb.es/2019/01/20/reemplazar-html-entities-con-javascript/)
* [Jquery en Angular](https://victorroblesweb.es/2016/12/26/como-usar-jquery-en-angular-2/)
* [Variables en TypeScript](https://www.cosmiclearn.com/lang-es/typescript-variables.php)
* [¿Cuál es la opción --save para la instalación de npm?](https://www.it-swarm-es.com/es/node.js/cual-es-la-opcion-save-para-la-instalacion-de-npm/1043235520/#:~:text=A%20partir%20de%20npm%205.0,save%20ya%20no%20es%20necesaria.)
* [Guía de Estilo para Angular](https://angular.io/guide/styleguide)
* [Guía de Estilo para JavaScript](http://developinginspanish.com/2018/03/31/guia-de-estilo-javascript-de-google/)
* [Lista de compatibilidad para Angular - Referencia StackOverflow](https://stackoverflow.com/questions/60248452/is-there-a-compatibility-list-for-angular-angular-cli-and-node-js)
* [Lista de compatibilidad para Angular - Referencia Github](https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3)
* [Versiones de Angular](https://angular.io/docs)
* [Versiones de Node](https://nodejs.org/es/download/releases/)

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
npm install -g npm@latest (Lo mejor no es usar este comando, sino actualizar desde el ejecutable de la web e instalar la versión LTS)
npm cache clean --force 
npm cache verify & npm cache clear --force
npm set audit false
```

2. Desinstalar versiones anteriores de **Angular CLI**, borramos cache
```
npm uninstall -g angular-cli 
npm uninstall -g @angular/cli
npm cache clean --force (Borramos de nuevo la cache para eliminar todos los posibles conflictos que tengamos con npm)
npm cache verify & npm cache clear --force (Borramos la cache, se verifico y se comprimio, se elimino lo que se tuvo que eliminar / Para asegurarnos, borramos la cache, y borramos los paquetes antiguos, borramos lo que tenga que borrar)

ng --version (Verificar desinstalación de Angular CLI)
which ng (Si aun obtenemos angular-cli, ejecutar el siguiente comando para obtener la ruta ng y repetir el proceso)
```

3. Instalamos **Angular CLI** en su ultima version
```
npm install -g @angular/cli (Intalar la ultima version de angular-cli)
npm install -g @angular/cli@10.2.0 (Instalar version especifica de angular-cli, esta es la version mas estable que encontre, no se instalo la version @angular/cli@10.2.5 debido a que aparece el mensaje indicando que no se encuentra dicha versión) 

ng --version (Verificar instalación de Angular CLI, se puede ejecutar en la consola sin una ruta especifica o en una carpeta dentro de un proyecto de Angular)
```

### blog-angular

::: warning Notas de la instalación de blog-angular
Cuando cree este proyecto lo hice con Angular CLI: 10.2.0, esto debido a que cuando instale la ultima version de Angular CLI, tuve problemas al instalar el Froala, no podia instalarlo
:::

* [Instalamos Jquery](https://www.npmjs.com/package/jquery)
* [Instalamos bootstrap](https://www.npmjs.com/package/bootstrap)
* [Instalamos angular-froala-wysiwyg](https://www.npmjs.com/package/angular-froala-wysiwyg)
* [Instalamos angular-file-uploader](https://www.npmjs.com/package/angular-file-uploader)
* [Problema de compatibilidad entre angular-froala-wysiwyg y ngModel](https://github.com/froala/angular-froala-wysiwyg/issues/4)

::: warning Respuesta con la solución
Se soluciono usando input tipo hidden
:::

* [Problema con dependencia al ejecutar npm-update o crear nuevo proyecto](https://stackoverflow.com/questions/68339098/when-i-run-ng-new-npm-has-a-dependency-problem)

::: warning Respuesta con la solución
Tuve este mismo problema con un proyecto nuevo, etc.

En el generado package.json, debería ver una línea que dice "jasmine-core": "~3.7.0"pero parece que otras dependencias (creo que karma según la salida de error aquí) requieren jasmine-core3.8.0 o superior. Simplemente edite la línea que dice "jasmine-core": "~3.7.0",ser "jasmine-core": "~3.8.0",y luego ejecútela manualmente npm install y debería tener éxito.

A continuación, debería poder ejecutar ng serve --open desde el mismo directorio y hacerlo funcionar correctamente.
:::

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
ng g component components/profile
ng g component components/post-list
```

### master-javascript

::: warning Notas de la instalación de blog-angular
Cuando cree este proyecto lo hice con Angular CLI: 10.2.0, esto debido a que el proyecto blog-angular ya lo habia utilizado
:::

* [Error angular: el tipo genérico 'ModuleWithProviders' requiere 1 argumento de tipo](https://stackoverflow.com/questions/62755093/angular-error-generic-type-modulewithproviderst-requires-1-type-arguments)

::: warning Respuesta con la solución
La solución para el mismo error en mi versión Angular 10.1.3 fue cambiar el parámetro de exportación a.

Con error:
```typescript
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
```

Después del cambio:
```typescript
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
```
:::

* [Web de pruebas para hacer peticiones REST (https://reqres.in/)](https://reqres.in/)

```
ng new master-javascript (Creamos el proyecto)
ng serve (Levantamos el proyecto)
ng serve --open (Levantamos el proyecto y abrimos en navegador)

Dependencias
Las dependencias siempre estan instaladas en packgage.json del proyecto

npm update (Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan)
```