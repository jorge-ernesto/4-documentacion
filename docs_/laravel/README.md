# Laravel 7.x

Podemos entrar a la web oficial de [Laravel](https://laravel.com/)<br>
Podemos entrar a la web oficial de [Composer](https://getcomposer.org/)<br>
Podemos entrar a la web oficial de [SQL Power Architect](http://www.bestofbi.com/page/architect_download_os) y [Maven](https://mvnrepository.com/) para el diseño de Bases de Datos

## ¿Qué es Laravel?

::: warning Aviso
Podemos entrar a la [documentación creada por Bluuweb sobre Laravel](https://bluuweb.github.io/tutorial-laravel/) creado en VuePress

Según [Juan Carlos Arcila Díaz (Ver vídeo dando click acá)](https://www.youtube.com/watch?v=Zj0pshSSlEo&list=PLZPrWDz1MolrxS1uw-u7PrnK66DCFmhDR&index=1): 
* **Laravel es un framework de código abierto** para desarrollar aplicaciones y servicios web con PHP. 
* Fue creado en 2011, Laravel propone en el desarrollo usar **'Routes with Clousures'** en lugar de un MVC tradicional con el objetivo de hacer el código más claro.

[¿Por qué Laravel? (Ver vídeo dando click acá)](https://www.youtube.com/watch?v=Zj0pshSSlEo&list=PLZPrWDz1MolrxS1uw-u7PrnK66DCFmhDR&index=1)
* **Eloquent-ORM (nada de SQL):** Mediante este ORM podemos acceder a los registros de la BD como si fueran objetos de PHP y no tener que ejecutar codigo SQL
* **Motor de Plantillad (Blade):** Podemos generar un layout que contenga todos los elementos comunes de todos nuestro sitio web y asi escribir menos codigo HTML
* **Excelente Documentación:** [Laravel](https://laravel.com/)
* **Despliegue:** El despliegue es muy sencillo, podemos desplegar nuestra aplicacion en un servidor compartido, sin ningun problema y con un costo minimo

[Eloquent (Ver vídeo dando click acá)](https://www.youtube.com/watch?v=OyXKttR7y6c&list=PLZPrWDz1MolrxS1uw-u7PrnK66DCFmhDR&index=4)
* Eloquent es un ORM (Object-Relational mapping).
* Es una forma de mapear los datos que se encuentran en la base de datos almacenados en un lenguaje de script SQL a objetos de PHP y viceversa.
* Teniendo un código portable con el que no tengamos la necesidad de usar lenguaje SQL dentro de nuestras clases de PHP

[Modelo (Ver vídeo dando click acá)](https://www.youtube.com/watch?v=OyXKttR7y6c&list=PLZPrWDz1MolrxS1uw-u7PrnK66DCFmhDR&index=4)
* Eloquent hace uso de los modelos para recibir o enviar la información a la base de datos.
* Los modelos hacen uso de PSR-4 y namespaces, un modelo nos ayuda a definir que tabla, atributos se pueden llenar y que otros se deben mantener ocultos.

**Para implementar Modelos en Laravel debemos tener en cuenta algunas consideraciones:**
* El nombre de los modelos se escriben en singular, en contraste con las tablas de la BD que se escriben en plural.
* Usan notación UpperCamelCase para sus nombres.

[Rutas (Ver vídeo dando click acá)](https://www.youtube.com/watch?v=OyXKttR7y6c&list=PLZPrWDz1MolrxS1uw-u7PrnK66DCFmhDR&index=4)
* Petición HTTP que hace el usuario cuando ingresa una direccion URL.
* Esta ruta será procesada por un controlador, y este interacionará con el modelo en caso sea necesario recuperar información de la BD; luego invocará a una vista para mostrar información en el navegador.

[Controladores (Ver vídeo dando click acá)](https://www.youtube.com/watch?v=cvpr50f9o5Y&list=PLZPrWDz1MolrxS1uw-u7PrnK66DCFmhDR&index=5)
* Controladores pueden agrupar las peticiones HTTP relacionada con la manipulación lógica en una clase. Los controladores normalmente se almacenan en el directorio de la aplicación ``app/Http/Controllers/``.

Un controller usualmente trabaja asociando las peticiones con los métodos:
GET   : index, create, show, edit
POST  : store
PUT   : update
DELETE: destroy
PATCH : update

El tipo de ruta:
``Route::resource('almacen/categoria', 'CategoriaController');``

Nos creara un grupo de rutas de recursos con las peticiones: index, create, show, edit, store, update, destroy

[Motor de Plantillas Blade](https://www.youtube.com/watch?v=pYNpjqVRnKc&list=PLZPrWDz1MolrxS1uw-u7PrnK66DCFmhDR&index=6)
* Las plantillas tienen los segmentos de código que se repiten en mas de una vista, como por ejemplo head del HTML, menú de opciones, etc. y como deben de estar prácticamente presentes en todos lados, no tien sentido estarlos repitiendo en todas las vistas.
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Instalamos Laravel 7.x](https://laravel.com/docs/7.x#installing-laravel)
* [Saber la versión de Laravel que tengo instalada](https://desarrolloweb.com/faq/saber-version-laravel-instalada)
* [como instalar una version anterior de laravel con composer ? ejemplo la version 5.1](https://platzi.com/comunidad/aa351770-2d96-4841-8e0c-e5528dd53558/)
* [Establecer puerto para php artisan.php serve](https://qastack.mx/programming/17990820/set-port-for-php-artisan-php-serve)
* [GitHub - Laraveles/spanish: Repositorio de idioma de Laravel 5.](https://github.com/Laraveles/spanish)
* [Anexo:Códigos de estado HTTP - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/Anexo:Códigos_de_estado_HTTP)
* [Crear helpers en Laravel 5 | Victor Robles](https://victorroblesweb.es/2018/01/18/crear-helpers-en-laravel-5/)
* [Cabeceras HTTP en PHP para permitir el acceso CORS - Victor Robles | Victor Robles](https://victorroblesweb.es/2017/04/23/cabeceras-http-php-permitir-acceso-cors/)
* [Evitar error CORS Access-Control-Allow-Origin con AJAX - Victor Robles | Victor Robles](https://victorroblesweb.es/2016/01/20/evitar-error-cors-access-control-allow-origin-con-ajax/)
* [Laravel: Soporte PHP 8 - El Blog de Laravel](https://blog.laravel.com/laravel-php-8-support)

## Apuntes varios

En esta seccion pondremos enlaces utiles:

### Instalamos Composer
Instalamos [Composer](https://getcomposer.org/) desde su web
```
composer --version
```

### Instalamos Laravel 7.x
```
composer global require laravel/installer (Descargamos e instalamos el instalador de Laravel)
laravel --version (Verificar versión del instalador de Laravel)
php artisan --version (Verificar versión de Laravel en proyectos)
```

### fundamentos_blogbluuweb 
```
Creamos el proyecto
laravel new fundamentos_blogbluuweb (Creamos el proyecto)
php artisan serve (Levantamos el proyecto)

Modelos 
php artisan make:model Nota --m (Creamos el modelo Nota y su migración)

Controladores
php artisan make:controller PagesController
php artisan make:controller NotasController

Migraciones
php artisan migrate:reset (Revertira todas las migraciones)
php artisan migrate (Ejecuta migraciones pendientes)
php artisan migrate:refresh (Revertir y migrar en un solo comando)

Rutas
php artisan route:list (Te muestra todas las rutas de web.php)
php artisan list (Lista de comandos)
```

### curso_laravel
::: warning Notas
* Laravel proporciona Hash::make y Hash::check que es el equivalente a usar [password_hash](https://www.php.net/manual/es/function.password-hash.php) y [password_verify](https://www.php.net/manual/es/function.password-verify.php) que son funciones de PHP
* Usamos Hash::make y Hash::check en [api-rest-laravel](/laravel/#api-rest-laravel)
* Ver el archivo [http://localhost/KKK/1%20util/hash.php](http://localhost/KKK/1%20util/hash.php)
:::
* [Problema con migraciones al trabajar con con una versión inferior de Mysql v5.7.7](https://bluuweb.github.io/tutorial-laravel/bases-datos/#migraciones)
* [findOrFail($id) / find($id) / where('id', $id)->firstOrFail() / where('id', $id)->first() / where('id', $id)->get()](https://stackoverflow.com/questions/30888527/findorfail-laravel-5-function-for-specific-field)
* [Problema con ->groupBy ---> strict => false](https://stackoverflow.com/questions/40917189/laravel-syntax-error-or-access-violation-1055-error)
* [Crear controllers](https://laravel.com/docs/7.x/controllers#resource-controllers)
* [Eloquent ORM](https://laravel.com/docs/7.x/eloquent)
* [Validacion unique](https://laraveles.com/foro/viewtopic.php?id=1957)
* [Validacion unique](https://es.stackoverflow.com/questions/80943/error-al-actualizar-un-campo-unique)
* [Muchos a muchos, users, roles, y role_user](https://laravel.com/docs/7.x/eloquent-relationships#many-to-many)
* [Localization](https://laravel.com/docs/7.x/localization)
* [Hashing](https://laravel.com/docs/7.x/hashing)

```
Creamos el proyecto
laravel new curso_laravel 
php artisan serve 

Modelos
php artisan make:model Categoria 
php artisan make:model Articulo
php artisan make:model Persona
php artisan make:model Ingreso
php artisan make:model Venta

Controladores
php artisan make:controller CategoriaController --resource 
php artisan make:controller ArticuloController --resource
php artisan make:controller ClienteController --resourcehttp://localhost/KKK/1%20util/hash.php
php artisan make:controller ProveedorController --resource
php artisan make:controller IngresoController --resource
php artisan make:controller VentaController --resource
php artisan make:controller UserController --resource
php artisan make:controller RoleController --resource
php artisan make:controller ModuleController --resource

Migraciones
php artisan migrate:reset (Revertira todas las migraciones)
php artisan migrate (Ejecuta migraciones pendientes)
php artisan migrate:refresh (Revertir y migrar en un solo comando)

Rutas
php artisan route:list
php artisan list
```

### laravel_master
* [Validation](https://laravel.com/docs/7.x/validation#manually-creating-validators)
* [Redirect](https://laravel.com/docs/7.x/responses#redirects)
* [Para el editor usaremos croppr.js](https://programadorwebvalencia.com/javascript-recortar-y-previsualizar-imagen/)
* [380. Formatear Fechas](https://www.udemy.com/course/master-en-php-sql-poo-mvc-laravel-symfony-4-wordpress/learn/lecture/11934452?components=buy_button,discount_expiration,gift_this_course,purchase,deal_badge,redeem_coupon&couponCode=M1ESPECIAL#overview)
* [Clase Helpers en web de Victor Robles](https://victorroblesweb.es/2018/01/18/crear-helpers-en-laravel-5/)
* [Service Injection](https://laravel.com/docs/7.x/blade#service-injection)
* [Hacer que se vea el nombre de la imagen en custom-file](https://es.stackoverflow.com/questions/256682/bootstrap-4-input-file-no-se-ve-en-el-label-el-nombre-del-fichero-subido)
* [Translating or customizing the strings with SCSS](https://getbootstrap.com/docs/4.5/components/forms/#translating-or-customizing-the-strings-with-scss)
* [Para correr laravel mix, escribir "npm install" y "npm run dev". El archivo de configuración se llama webpack.mix.js, alli esta especificado las rutas "resources/js/app.js" y "resources/sass/app.scss"](https://laravel.com/docs/7.x/mix#running-mix)

```
Creamos el proyecto
laravel new laravel_master
php artisan serve

Modelos
php artisan make:model Image
php artisan make:model Comment
php artisan make:model Like

Controladores
php artisan make:controller UserController --resource
php artisan make:controller ImageController --resource 
php artisan make:controller CommentController --resource
php artisan make:controller LikeController --resource
```

### api-rest-laravel
* [Providers](https://laravel.com/docs/7.x/providers)
* [Middleware](https://laravel.com/docs/7.x/middleware)

```
Creamos el proyecto
laravel new api-rest-laravel
php artisan serve

Modelos
php artisan make:model Category
php artisan make:model Post

Controladores
php artisan make:controller UserController --resource
php artisan make:controller CategoriaController --resource 
php artisan make:controller PostController --resource
```

#### Instalar libreria para JWT ---> [23. Instalar Librería para JWT](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13144876#overview)
```
Ver video "23. Instalar libreria para JWT" de Victor Robles

Pasos
1. Luego de actualizar composer.json con "firebase/php-jwt": "3.0.0"
2. Ejecutar "composer update"
```

#### Provider ---> [24. Creando sistema de autenticación con JWT](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13144882#overview)
```
php artisan make provider JwtAuthServiceProvider (Para ver como configurarlo revisar el video "24. Creando sistema de autenticacion con JWT" de Victor Robles)

Pasos
1. Creamos este provider con "php artisan make provider JwtAuthServiceProvider" para que funcione es necesario agregarlo en config/app.php
2. Configuramos config/app.php para registrar el Provider
3. Creamos helper app/Helpers/JwtAuth.php

Si no registramos el provider la linea $jwtAuth = new JwtAuth(); en la function login de UserController no funcionara
```

#### Middleware ---> [30. Middleware de autenticación](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13154952#content)
```
php artisan make:middleware ApiAuthMiddleware (Para ver como configurarlo revisar el video "30. Middleware de autenticacion" de Victor Robles)

Pasos
1. Creamos este middleware con "php artisan make:middleware ApiAuthMiddleware" para que funcione es necesario agregarlo en app/Http/Kernel.php
2. Configuramos app/Http/Kernel.php para registrar el Middleware
3. Usamos el middleware en las funciones update y upload de UserController, tambien se puede usar en los constructores del controlador
```