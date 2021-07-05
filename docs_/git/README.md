# Git / Github

Podemos entrar a la web oficial de [Git](https://git-scm.com/)<br>
Podemos entrar a la web oficial de [Github](https://github.com/)<br>
Repositorios de Github: [Bluuweb](https://github.com/bluuweb), [Jorge Ernesto](https://github.com/jorge-ernesto)

## ¿Qué es Git y Github?

::: warning Aviso
Podemos entrar a la [documentación creada por Bluuweb sobre Git](https://bluuweb.github.io/tutorial-github/guia/)
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Git
```
git config --global user.name “Monalisa” (Configurar)
git config --global user.name (Mostrar)
git config --global user.email “email@example.com” (Configurar)
git config --global user.email (Mostrar)
```

```
git clone htts://github.com/KKK (Clonar repositorio)
```

```
git init (Inicia git)

git status
git add index.html
git commit -m “Agregando index.html”

git status
git add .
git commit -m “Agregando estructura básica de HTML”

git status
git add index.html
git status
git rm --cached index.html (remove)
git status
```

```
git log (Muestra los commit)
git log --stat (Muestra los commit)
git log --oneline (Muestra la descripción de los commit)
git log --graph (Muestra la descripción de los commit de forma detallada)
git log --oneline --graph --all (Muestra la descripción de los commit de forma detallada)
git diff (Muestra los cambios en el mismo commit)
git diff Se00144 index.html (Muestra los cambios con otro commit)
git log --oneline
git checkout Se00144 (Regresa en el tiempo hasta el commit)
git branch (Muestra ramas)
git checkout master (Regresa el checkout anterior, regresamos a la rama master, regresa el regreso en el tiempo)
```

```
git branch (Muestra ramas)
git checkout -b experimento (Creamos una rama llamada experimento, además cambiamos a esa rama, a la rama Experimento)
git branch 
git status
git add .
git commit -m “Agregamos texto a la rama Exprimento”
git log --oneline (Muestra la descripción de los commit)
```

```
git branch (Muestra ramas)
git checkout master (Regresamos a la rama Master)
git branch
git merge experimento (Fusionamos las ramas, si hubiera algun conflicto el editor de codigo nos avisa)
git branch -d experimento (Eliminamos la rama)
```

```
git push (Hacemos push en nuestro repositorio de GitHub)
git push origin master
git pull (Hacemos pull en nuestro repositorio de GitHub)
git pull origin master
```

```
git push sistemaweb
```

### Heroku
```
cd C:\xampp\htdocs\2 Bootstrap\4 Bootstrap 4- El Curso Completo, Práctico y Desde Cero\bootstrap

heroku login (Nos logueamos con Heroku)
heroku git:clone -a jorge-cywdt (Clonamos el repositorio de git al repositorio de heroku)

git add .
git commit -m “make it better”
git push heroku master (Pusheamos al repositorio a Heroku)
```