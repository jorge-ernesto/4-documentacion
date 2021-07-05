# Autenticación en Laravel
* [Problema con autenticación, no me guarda remember_token, SI ME GUARDABA, NO ERA ERROR, SOLO SE DEBE SELECCIONAR CHECK "REMEMBER ME" EN EL LOGIN](https://laraveles.com/foro/viewtopic.php?id=757)
* [Listar routes](https://tecnato.com/listar-todas-nuestras-rutas-de-laravel-5-1-con-git-bash)
* [Desactivar routes](https://stackoverflow.com/questions/42695917/laravel-5-4-disable-register-route)
* [Limpiar cache en Laravel](https://laraveles.com/foro/viewtopic.php?id=6033)
* [Luego de eliminar migracion se muestra el mensaje 'Migration not found'](https://stackoverflow.com/questions/49570823/after-deleting-the-file-for-migration-i-am-left-with-this-message-migration-not)
* [Para correr laravel mix, escribir "npm install" y "npm run dev". El archivo de configuración se llama webpack.mix.js, alli esta especificado las rutas "resources/js/app.js" y "resources/sass/app.scss"](https://laravel.com/docs/7.x/mix#running-mix)

### Autenticación Inicio rapido
* [Autenticacion Inicio rapido](https://laravel.com/docs/7.x/authentication#authentication-quickstart)
* [Auth Bootstrap](https://www.itsolutionstuff.com/post/laravel-7-auth-example-laravel-7-make-auth-commandexample.html)
```
composer require laravel/ui:^2.4
php artisan ui bootstrap --auth
npm install && npm run dev (Instala y compila las dependencias)
```

### Configuración
```php
//Cambiamos la ruta HOME en app/Providers/RouteServiceProvider.php para que al loguearse se redireccione a esa ruta
public const HOME = '/home';

//Cambiamos en routes/web.php la ruta raiz para que redireccione a login
Route::get('/', function () {
    $auth = Auth::user();
 
    if(!empty($auth)){
        return view('home');
    }else{
        return view('auth.login');
    }
});

//Desactivamos routes en routes/web.php
Auth::routes([
            'register' => false, 
            'reset' => false, 
            'confirm' => false
            ]);

//En los controladores generamos la autenticacion para que solo se pueda acceder logueado
public function __construct(){
    $this->middleware('auth');
}
```

### Gestion de Roles
* [Relacion muchos a muchos](https://laravel.com/docs/7.x/eloquent-relationships#many-to-many)<br>

```
Creamos el modelo Role y su migracion
php artisan make:model Role -m

Creamos la migracion para la tabla role_user
php artisan make:migration create_role_user_table
```

```php
//Creamos relacion de muchos a muchos en el modelo User y modelo Role
//Modelo User.php
public function roles(){
    return $this->belongsToMany('App\Role')->withTimeStamps();
}

//Modelo Role.php
public function users(){
    return $this->belongsToMany('App\User')->withTimeStamps();
}
```

```
Creamos el modelo Permission y su migracion
php artisan make:model Permission -m

Creamos la migracion para la tabla permission_role
php artisan make:migration create_permission_role_table
```

```php
//Creamos relacion de muchos a muchos en el modelo Role y modelo Permission
//Modelo Role.php
public function permissions(){
    return $this->belongsToMany('App\Permission')->withTimeStamps();
}

//Modelo Permission.php
public function roles(){
    return $this->belongsToMany('App\Role')->withTimeStamps();
}
```

```
Creamos el modelo Module y su migracion
php artisan make:model Module -m 

Migramos tablas necesarias para la autenticacion
php artisan migrate:reset (Revertira todas las migraciones)
php artisan migrate (Ejecuta migraciones pendientes)
php artisan migrate:refresh (Revertir y migrar en un solo comando)

Ejecutamos seed para completar datos en tablas roles, permissions, permission_role
seed.php
```

```php
//Probamos relacion de muchos a muchos en routes/web.php
Route::get('/test', function () {
    $roles = App\User::find(1)->roles()->get();     
    echo $roles;
});
```

### Autorización en template Blade
* [Autorizacion en template Blade](https://laravel.com/docs/7.x/authorization#via-blade-templates)