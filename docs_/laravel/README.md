# Laravel 7.x

Podemos entrar a la web oficial de [Laravel](https://laravel.com/)<br>
Podemos entrar a la web oficial de [Composer](https://getcomposer.org/)

## ¿Qué es Laravel?

::: warning Aviso
Podemos entrar a la [documentación creada por Bluuweb sobre Laravel](https://bluuweb.github.io/tutorial-laravel/)
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Instalamos Laravel 7.x](https://laravel.com/docs/7.x#installing-laravel)
* [GitHub - Laraveles/spanish: Repositorio de idioma de Laravel 5.](https://github.com/Laraveles/spanish)
* [Anexo:Códigos de estado HTTP - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/Anexo:Códigos_de_estado_HTTP)
* [Crear helpers en Laravel 5 | Victor Robles](https://victorroblesweb.es/2018/01/18/crear-helpers-en-laravel-5/)
* [Cabeceras HTTP en PHP para permitir el acceso CORS - Victor Robles | Victor Robles](https://victorroblesweb.es/2017/04/23/cabeceras-http-php-permitir-acceso-cors/)
* [Evitar error CORS Access-Control-Allow-Origin con AJAX - Victor Robles | Victor Robles](https://victorroblesweb.es/2016/01/20/evitar-error-cors-access-control-allow-origin-con-ajax/)
* [como instalar una version anterior de laravel con composer ? ejemplo la version 5.1](https://platzi.com/comunidad/aa351770-2d96-4841-8e0c-e5528dd53558/)
* [Saber la versión de Laravel que tengo instalada](https://desarrolloweb.com/faq/saber-version-laravel-instalada)
* [Establecer puerto para php artisan.php serve](https://qastack.mx/programming/17990820/set-port-for-php-artisan-php-serve)
* [Laravel: Soporte PHP 8 - El Blog de Laravel](https://blog.laravel.com/laravel-php-8-support)

## Apuntes varios

En esta seccion pondremos enlaces utiles:

### Instalamos Laravel 7.x
Instalamos [Composer](https://getcomposer.org/) desde su web
```
composer global require laravel/installer
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
* [Problema con migraciones al trabajar con con una versión inferior de Mysql v5.7.7](https://bluuweb.github.io/tutorial-laravel/bases-datos/#migraciones)
* [Problema con ->groupBy, 'mysql' => false](https://stackoverflow.com/questions/40917189/laravel-syntax-error-or-access-violation-1055-error)
* [Crear controllers](https://laravel.com/docs/7.x/controllers#resource-controllers)
* [Eloquent ORM](https://laravel.com/docs/7.x/eloquent)
* [Validacion unique](https://laraveles.com/foro/viewtopic.php?id=1957)
* [Validacion unique](https://es.stackoverflow.com/questions/80943/error-al-actualizar-un-campo-unique)
* [Muchos a muchos, users, roles, y role_user](https://laravel.com/docs/7.x/eloquent-relationships#many-to-many)
* [Localization](https://laravel.com/docs/7.x/localization)
* [Hashing](https://laravel.com/docs/7.x/hashing)
::: warning Notas
* Laravel proporciona Hash::make y Hash::check que es el equivalente a usar password_hash y password_verify en funciones ordinarias de PHP
* Ver el archivo [http://localhost/hash.php](http://localhost/hash.php)
```php
<?php 

// Creamos hash de contraseña usando algorito MD5
$pwd = Hash("MD5", "admin");
echo "MD5: {$pwd} <br>";
echo "Caracteres: ".strlen($pwd)."<br><br>";

// Creamos hash de contraseña usando algorito SHA256
$pwd = Hash("SHA256", "admin");
echo "SHA256: {$pwd} <br>";
echo "Caracteres: ".strlen($pwd)."<br><br>";

// Creamos hash de contraseña usando algorito PASSWORD_BCRYPT
$pwd = password_hash("admin", PASSWORD_BCRYPT, ['cost' => 4]);
echo "PASSWORD_BCRYPT: {$pwd} <br>";
echo "Caracteres: ".strlen($pwd)."<br><br>";

// Verificar contraseña
$pwdvrf = password_verify("admin", $pwd);
if($pwdvrf) {
   echo '¡La contraseña es válida!';
} else {
    echo 'La contraseña no es válida.';
}
```
:::

* [findOrFail or where](https://laracasts.com/discuss/channels/eloquent/non-static-method-illuminatedatabaseeloquentmodelupdate-should-not-be-called-statically)
* [findOrFail() / where('id', $id)->first() / where('id', $id)->get()](https://stackoverflow.com/questions/30888527/findorfail-laravel-5-function-for-specific-field)

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
php artisan make:controller ClienteController --resource
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