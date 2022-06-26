# **Entorno de desarrollo para crear un sitio web estático**

En este repositorio encontrarás un ***entorno de desarrollo*** creado para construir sitios web estáticos de forma sencilla y automatizada. Puedes usarlo libremente y hacerle las modificaciones que consideres convenientes.

Puedes utilizarlo tanto para el desarrollo de un sitio web estático profesional o para que realices tus ejercicios si estás iniciando tu aprendizaje en esta maravillosa profesión del desarrollo web.
<br><br>

## Herramientas implementadas:

<br><br>

<img src="src/images/yarn-icon.svg" width="100px">

Como gestor de dependencias, se hace uso de [**Yarn**](https://yarnpkg.com/ "Sitio oficial").

<br><br>

<img src="src/images/webpack-icon.svg" width="100px" style="margin: 0 auto">

Para el flujo de trabajo y empaquetamiento de módulos, se implementó [**Webpack**](https://webpack.js.org/ "Sitio oficial").

<br><br>

<img src="src/images/pugjs-icon.svg" width="100px">

Como motor de plantillas se utiliza [**Pug**](https://webpack.js.org/ "Sitio oficial") (aunque no es forsozo, puedes utilizar HTML "nativo").

<br><br>

<img src="src/images/sass-icon.svg" width="100px">

Para aplicar estilos, se hace uso de la sintaxis de [**Sass**](https://sass-lang.com/ "Sitio oficial"), pero también puedes usar CSS "nativo".

<br><br>

<img src="src/images/javascript-icon.svg" width="100px">

Utilizarás JavaScript para darle dinamismo a tu sitio aplicando el último estándar sin remoridmientos de compatibilidad, ya que el resultado final será altamente entendible por la gran mayoría de navegadores gracias a Webpack + Babel.

<br><br>

<img src="src/images/git-icon.svg" width="100px">

Para la gestión de todo tu proyecto, puedes utilizar (altamente recomendable) [**Git**](https://git-scm.com/ "Sitio oficial").

<br><br>

---
### ***Observaciones***
---

Aunque este entorno de desarrollo, hasta cierto punto es simple, es importante considerar que deberás tener conocimientos suficientes en el manejo de las herramientas que se han detallado (JS, PUG, SASS, WEBPACK, YARN y GIT)
<br><br><br>

---
## ***Configuraciones iniciales***
---
<br><br>

### **NODEJS**
El primer paso es tener instalado NodeJS en tu equipo y con la **versión 16.10** como mínimo, esto es fundamental ya que **Yarn** funcionará mejor a partir de esta versión de Node. Para descargar la última versión, da click [aquí](https://nodejs.org/ "Sitio oficial").
Una vez que lo hayas instalado, puedes verificar la versión de Node en tu equipo (recerda que debes tener una version 16.10 o superior) con:
```
$ node --version | $ node -v
```
<br>

### **CREAR CARPETA/FICHERO DE TRABAJO**
Te recomiendo crear una carpeta para que ahí sea donde se "instale" o descargue este entorno de trabajo.

<br>

### **IMPLEMENTAR ESTE TEMPLATE EN TU EQUIPO**
Para poder usar este template y su flujo de trabajo con Webpack, tienes dos opciones:
1. CLONAR ESTE REPOSITORIO<br>
   Abre tu terminal asegurándote de estar posicionado en la ubicación donde desees "clonar" este entorno de trabajo. Utiliza el comando `git clone` para realizar la descarga:
	 ```
	 $ git clone https://github.com/githubUserName/repositoryName.git
	 ```
2. DESCARGAR EL TEMPLATE<br>
   Descarga el archivo .zip y descomprímelo en la carpeta que usarás para llevar a cabo el proceso de creación de tu sitio web.

<br>

### **SI CLONASTE ESTE REPOSITORIO**
Si te decidiste por *clonar* este repositorio, dentro de la carpeta que seleccionaste, se creó otra carpeta llamada ***static-website-workflow*** (aunque sin problemas lo puedes cambiar).
Ahora en tu terminal deberas *moverte* a esta carpeta ejecutando el siguiente comando:
```
$ cd static-website-workflow
```
*En caso de descargar el archivo .zip, puedes crear la carpeta con el nombre que quieras y descomprime los archivos en esta ruta.*

<br>

### **INSTALAR LA ÚLTIMA VERSIÓN DE YARN**
Asegurate que en tu terminal estes posicionado en la carpeta donde se descargó el repositorio (por defecto: static-website-workflow). Por ejemplo, debes ver algo así:
```
userName@PC-Name ~/Desktop/cloneTest/static-website-workflow
$ |
```
Una vez hayas verificado esto, tienes que implementar la última versión de **Yarn**, para ello, ejecuta lo siguiente:
```
$ yarn set version stable
```
Esto definirá en el archivo ***package.json*** la versión más reciente de Yarn.

<br>

### **INSTALAR TODAS LAS DEPENDENCIAS**
Estás a un sólo paso de comenzar tu sitio web de forma práctica y automatizada. Cómo estas usando Yarn, para instalar todas las dependencias necesarias (que ya están definidas en el archivo ***package.json***), ejecuta el siguiente comando en tu terminal:
```
yarn install
```
<br>

### **PRIMERAS PRUEBAS**
¡¡¡ Listo !!! Si todo ha marchado bien, ahora ya podrás realizar las primeras pruebas para comenzar a construir tu propio sitio web. Para comenzar el proceso trabajo y utilizar la modalidad de *desarollo* (development), ejecuta en tu terminal lo siguiente:
```
yarn start
```
Esto abrirá el navegador que tengas definido como predeterminado y verás la pagina de bienvenida de este template.

Ahora realiza las pruebas iniciales dentro del archivo test.pug o de los archivos de estilos y verás en tiempo real en tu navegador dichos cambios.

Crea tu propio flujo de archivos, considerando importaciones y configuraciones necesarios para que tu sitio web funcione correctamente.

<br>

### **ACCESO DISPOSITIVOS EXTERNOS**
Una de las grandes ventajas de este entorno de desarrollo, es que te permite visualizar tu proyecto desde dispositivos externos tales como smartphones, tablets, otras PC, etc. Pero para que esto sea posible, los equipos externos deben estar conectados a la misma red local, o lo que es lo mismo, conectados a la misma señal de internet (WiFi), ya que de no ser así, no podrás tener acceso al proyecto.

Una vez que ejecutas tu proyecto, en tu terminal tienes que ver algo como esto (también visible en la barra de direcciones de tu navegador que se abrió al ejecutar tu proyecto):
```
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.100.133:3000/
```
Ingresa en la barra de direcciones del navegador de tu smartphone (o cualquier otro dispositivo con navegador) la dirección desde ***http***, esto deberá mostrar la ejecución de tu proyecto en tu smartphone y cada que realices un cambio y lo confirmes, automáticamente se actualizará tanto en el navegador de tu PC como en el de tu smartphone.

Esto es muy útil, ya que podrás visualizar en tiempo real, como se ve tu sitio web en tu smartphone o tablet, e ir haciendo las modificaciones necesarias para que tu proyecto tenga el mejor comportamiento y apriencia en los diversos tamaños de pantallas.

<br>

### **FLUJO DE TRABAJO**
Este template implementa el uso de tecnologías como Pug y/o Sass, aunque no es forzoso utilizarlos, simplemente implementa las configuraciones necesarias en tu proyecto y si así lo deseas, puedes utilizar HTML y CSS "puros". Lo recomendable, es hacer uso de herramientas que te ayuden a acelerar y simplificar tu proceso de trabajo.

<br>

### **MODALIDAD DE PRODUCCIÓN**
Una vez que hayas creado tu sitio web como lo planificaste y con las funcionalidades que decidiste tener, es hora de crear la carperta que contendrá todos los archivos necesarios y suficientes para que sin ningún problema, puedas subir tu proyecto ya sea a un hosting gratuito o un hosting privado junto a tu propio nombre de dominio.

Para ello, ejecuta en tu terminal:
```
$ yarn run build
```
Esto creará en tu directorio la carpeta ***dist/***, que contendrá todos los archivos necesarios para implementarlos en tu hosting y poner tu sitio web en línea.

No es necesario esperar hasta que termines tu proyecto por completo en el modo "desarrollo", puedes hacer una prueba para ver como es la estructura de la carperta ***dist/*** e indagar un poco la salida de las carpetas y archivos.

<br>

### **ACTUALIZACIONES**
Aún falta implementar algunas mejoras, como el manejo de errores ***"404"*** mediante archivos .httaccess, implementación de formularios mediante el uso y validación con **PHP**, entre otros. Este proyecto puede ser colaborativo, es decir, puedes mandar tus observaciones y mejoras mediante los medios que Git y Github ofrecen.

Este repositorio se irá actualizando conforme se integren mejoras. Espero te sea útil.
