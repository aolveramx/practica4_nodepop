# NODEPOP

###### V 1.0

Es una aplicación de compra y venta de artículos de segunda mano diseñada para trabajar en un cliente web (navegador) en su versión gráfica y una segunda versión por medio de peticiones API para los diferentes dispositivos y plataformas existentes en el mundo tecnológico.

### Estructura de la aplicación

\*Motor de base de datos: Mongo DB

\*Motor de vistas: ejs

\*Tipo de base de datos: No relacional

\*Modelo de construcción: MVC

\*Organización de módulos: es recomendable utilizar express-generator por su sencillez, en este caso de hizo paso a paso la construcción del modelo de organización para entender mejor la estructura y otrganizarlo de una manera mas intuitiva.

-Librerias utilizadas:

-expressJS: facilita manejo de nodeJS con llamados al servidor.

-mongoose: facilita manejo de base datos.

-axios: para consumir el api en la interfaz gráfica.

-cross-env: traduciión de variables entre sistemas operativos linux,mac,windows.

-dotenv: facilita y organiza la carga de variables para configurar el sistema, en este caso para organizar mejor los datos de la conexión a la base de datos.

-ejs: motor de vistas.

-morgan: incluido en express, facilita la informaición al usuario al pintar por consola los procesos que esta realizando.

-nodemon: reinicia el servidor local cada vez que guardamos para incrementar la productividad.

-body-parser: parsea los llamados a req.body en middlewares.

-Utilidades de libería para validación de datos: express-validator

### Aplicaciones de terceros recomendadas para usar la aplicación

-Navegador: Google Chrome V86 o posterior

-Cliente API: Postman

-Cliente servidor base de datos: MongoDB Community Server

-Cliente gráfico base de datos: MongoDB Compass

### Una vez descargada

1. instalar las depedencias necesarias para producción.

```
npm install
```

2. Agrega un archivo .dotenv con el puerto por defecto para arrancar localhost, además de una variable llamada MONGO_URI especificando la ruta de la base de datos.

```
PORT: 3000
MONGO_URI = mongodb://localhost/nodepopAds
```

3. Inicia Mongo DB Compass, agrega una nueva base de datos llamada nodepop, crea una nueva colección llamada ads. En la pestaña "ADD DATA" da clic y finalmente importa el siguiente archivo JSON:

```
install_db_ads.json
```

4. Ejecuta una nueva terminal para arrancar la aplicación con el siguiente comando:

```
npm run dev
```

5. Ejecuta una segunda terminal para arrancar el servidor de la base de datos, (ubicado en la carpeta donde hayas descargado/guardado la aplicación _MongoDB Community Server_):

```
./bin/mongod --dbpath ./data/db
```

6. En caso de querer interactuar con la base de datos por medio de la consola, puedes arrancar una tercer temrinal con el siguiente comando:

```
./bin/mongo
```

### Aplicación gráfica

1. Ve a la siguiente ruta en tu barra de navegación del navegador:

```
http://localhost:3000
```

Observaras la pantalla de inicio con los anuncios cargados previamente.

2. Comienza a agregar, editar y borrar los anuncios que desees.
