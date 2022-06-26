# **Template básico para crear un sitio web estático**

En este repositorio encontrarás un entorno de desarrollo creado para construir sitios web estáticos de forma sencilla y automatizada. Puedes usarlo libremente y hacerle las modificaciones que consideres convenientes.<br><br>

## Herramientas implementadas:

<br><br>

<img src="src/images/yarn-icon.svg" width="100px">
Cómo gestor de dependencias, se hace uso de [**Yarn**](https://yarnpkg.com/ "Sitio oficial").

<br><br>

<img src="src/images/webpack-icon.svg" width="100px" style="margin: 0 auto">
Para el flujo de trabajo y empaquetamiento de módulos, se implementó [**Webpack**](https://webpack.js.org/ "Sitio oficial").

<br><br>

<img src="src/images/pugjs-icon.svg" width="100px">
Como motor de plantillas se utilizará [**Pug**](https://webpack.js.org/ "Sitio oficial") (aunque no es forsozo).

<br><br>

<img src="src/images/sass-icon.svg" width="100px">
Para aplicar estilos, se hace uso de la sintaxis de [**Sass**](https://sass-lang.com/ "Sitio oficial"), pero también puedes usar vanilla CSS.

<br><br>

<img src="src/images/javascript-icon.svg" width="100px">
Utilizarás JavaScript para darle dinamismo a tu sitio aplicando el último estándar sin remoridmientos de compatibilidad con la mayoría de navegadores.

<br><br>

<img src="src/images/git-icon.svg" width="100px">
Para la gestión de todo tu proyecto, puedes utilizar Git.

<br><br>

---
### ***Observaciones***
---

Aunque este entorno de desarrollo, hasta cierto punto es simple, es importante considerar que deberás tener conocimientos suficientes en el manejo de las herramientas que se han detallado (JS, PUG, SASS, WEBPACK, YARN y GIT)
<br><br><br>

---
---
## ***Configuraciones iniciales***
---
---
<br>

### **NODEJS**
El primer paso es tener instalado NodeJS en tu equipo y con la **versión 16.10** como mínimo, esto es fundamental ya que Yarn funcionará mejor a partir de esta versión de Node. Para descargar la última versión, da click [aquí](https://nodejs.org/ "Sitio oficial").
Una vez que lo hayas instalado, puedes verificar la versión actuak en tu equipo (recerda que debes tener una version 16.10 o superior) con:
```
$ node --version | $ node -v
```
### **IMPLEMENTAR ESTE TEMPLATE EN TU EQUIPO**
Para poder usar este template y su flujo de trabajo con Webpack, tienes dos opciones:
1. CLONAR EL REPOSITORIO<br>
   Utiliza la opción de "clonar" este repositorio para descargarlo a tu equipo.
	 ```
	 $ git clone https://github.com/githubUserName/repositoryName.git
	 ```
2. DESCARGAR EL TEMPLATE<br>
   Descarga el archivo .zip y descomprímelo.<br><br>

### **CREAR CARPETA FICHERO DE TRABAJO**
Si te decidiste por clonar este repositorio, se creo la carpeta con el nombre por defecto (aunque sin problemas lo puedes cambiar). En caso de descargar el archivo .zip, puedes crear la carpeta con el nombre que quieras y descomprime los archivos en esta ruta.<br><br>

### **INSTALAR LA ÚLTIMA VERSIÓN DE YARN**
**Yarn** se ha actualizado y para que implementes la última versión, abre la terminal de tu equipo y posicionate en la carpeta de tu proyecto:<br>
Por ejemplo, debes ver algo así:
```
userName@PC-Name ~/Desktop/projectFolderName
$ |
```
Una vez hayas verificado esto, ejecuta lo siguiente:

```
$ yarn set version stable
```
Esto definirá en el archivo ***package.json*** la versión más reciente de Yarn.<br><br>

### **INSTALAR TODAS LAS DEPENDENCIAS**
Cómo estas usando Yarn, para instalar todas las dependencias necesarias (que ya están definidas en el archivo ***package.json***), ejecuta el siguiente comando en tu terminal:
```
yarn install
```
<br>

### **PRIMERAS PRUEBAS**
Si todo ha marchado bien, ahora ya podrás realizar las primeras pruebas para comenzar a construir tu propio sitio web. Para comenzar el proceso trabajo y utilizar la modalidad de *desarollo* (development), ejecuta en tu terminal lo siguiente:
```
yarn start
```
Esto abrirá el navegador que tengas definido como predeterminado y verás la pagina de bienvenida de este template.

Ahora realiza las pruebas iniciales dentro del archivo test.pug o de los archivos de estilos y verás en tiempo real en tu navegador dichos cambios.

<br>

### **ACCESO DISPOSITIVOS EXTERNOS**
Una de las grandes ventajas de este entorno de desarrollo, es que te permite visualizar tu proyecto desde dispositivos externos tales como smartphones, tablets, otras PC, etc. Pero para que esto sea posible, los equipos externos deben estar conectados a la misma red local, o lo que es lo mismo, conectados a la misma señal de internet (WiFi), ya que de no ser así, no podrás tener acceso al proyecto.

Esto es muy útil, ya que podrás visualizar en tiempo real, como se ve tu sitio web en tu smartphone o tablet, e ir haciendo las modificaciones necesarias para que tu proyecto tenga el mejor comportamiento y presentación en otros tamaños de pantallas.

<br>

### **FLUJO DE TRABAJO**
Este template implementa el uso de tecnologías como Pug y/o Sass, aunque no es forzoso utilizarlos, simplemente has las configuraciones necesarias en tu proyecto y si así lo deseas, puedes utilizar HTML y CSS "puros". Lo recomendable, es hacer uso de herramientas que te ayuden a acelerar y simplificar tu proceso de trabajo.

Modificación para pruebas del comando `git push`
