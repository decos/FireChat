# Firechat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# SECCION 12 - APLICACIÓN #7: FireChat - AngularFire2

## INICIANDO EL PROYECTO FireChat
	
	Recursos:
		- https://github.com/angular/angularfire2
		- http://getbootstrap.com/docs/4.0/getting-started/introduction/
		- https://console.firebase.google.com/project/firechat-54ee7/overview

1. Ejecutar los siguientes comandos:
	- ng new firechat

2. Reemplazar el archivo `styles.css` que se encuentra en el directorio `src` con
el archivo adjunto.

## INSTALACIÓN DE AngularFire2 - USO DE LA LIBRERÍA

	Recursos:
		- https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
		- https://console.firebase.google.com/project/firechat-54ee7/overview

1. Instalar Angular-CLI

2. Crear un nuevo proyecto (firechat)

3. Instalar AngularFire y Firebase 
	- npm install angularfire2 firebase --save

4. Agregar la configuración de Firebase a la variable de enviroment de Angular
	- src/environments/environment.ts

5. Añadir Firebase a la aplicación web

6. Agregar en la fichero `app.module.ts` las siguientes lineas, para usar la configuracion
de firebase:
	- import { AngularFireModule } from 'angularfire2';
	- import { environment } from '../environments/environment';
	- AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
	
7. Agregar en la fichero `app.module.ts` los siguientes modulos individuales:
	- import { AngularFirestoreModule } from 'angularfire2/firestore';
	- import { AngularFireAuthModule } from 'angularfire2/auth';
	- AngularFirestoreModule, // imports firebase/firestore, only needed for database features
	- AngularFireAuthModule, // imports firebase/auth, only needed for auth features

8. Inyectar AngularFirestore al fichero `src/app/app.component.ts`
	- import { AngularFirestore } from 'angularfire2/firestore';
	- constructor(db: AngularFirestore) {}

9. Hacer un enlace del objeto `items` al html
	- import { Observable } from 'rxjs/Observable';
	- public items: Observable<any[]>;
	- this.items = db.collection('items').valueChanges();
	
10. Agregar a la vista principal o al fichero `src/app/app.component.html` las siguientes lineas:
	<ul>
	   <li class="text" *ngFor="let item of items | async">
	       {{item.name}}
	   </li>
	</ul>

11. Ir a la siguiente URL y habilitar el `Cloud Firestore BETA`
	- https://console.firebase.google.com/project/firechat-54ee7/database/firechat-54ee7/data

12. Hacer clic en `Añadir Colección` y agregar la colección `chats`

13. Agregar dos `documentos` uno con el valor `Hola Mundo` y el otro con `Saludos!`

14. Ir a la siguiente URL para modoficar las reglas
	- https://console.firebase.google.com/project/firechat-54ee7/database/firestore/rules

15. Modificar la siguiente linea para evitar la autenticacion
	- allow read, write: if true;

16. Modificar los siguientes ficheros y adaptarlo a la nueva coleccion creada `chats`
	- src/app/app.component.ts
	- src/app/app.component.html

17. Ahora nuestra aplicación esta pendiente de cualquier cambio hecho en `Firebase`

## COMPONENTE DEL CHAT

1. Crear un nuevo componente
	- ng g c components/chat -is --spec=false
	- Especifica si el estilo sera creado en el componente: -is
	- Especifica si el archivo de pruebas sera creado o no: --spec=false

2. Modificar la vista principal
	- src/app/app.component.html

3. Modificar la vista del componente `chat`
	- src/app/components/chat/chat.component.html

4. Añadir la función `enviar_mensaje` en el componente `chat` 

5. Importar `FormsModule` al componente principal
	
## SERVICIOS PARA CONTROLAR LAS ACCIONES DEL CHAT

1. Crear un servicio
	- ng g s providers/chat --spec=false

2. Agregar er servicio o `provider`al modulo principal de proyecto

	Colecciones: Nos va permitir retornar a nosotros registros en forma de arreglo.

3. Codear el provider `ChatService` y crear el metodo `cargarMensajes`

4. Inyectar el provider `ChatService` en el componente `Chat` y codear el constructor

## CARGAR Y AGREGAR MENSAJES AL CHAT

1. Crear una interfaz llamada `Mensaje`

2. Importar la nueva interfaz en el `provider` y modificar la función `cargarMensajes`

3. Modificar la vista del componente `chat` para leer los mensasjes devueltos por el `provider`

4. Codear el servicio `agregarMensaje`

5. Codear la funcion `enviar_mensaje` en el componente `chat`

## DESPLEGAR MENSAJES EN LA CAJA DEL CHAT CORRECTAMENTE

1. Eliminar todos los documentos de la base de datos

2. Ordernar por fecha de ingreso los mensajes, modificando el servicio `cargarMensajes`

3. Obtener el elemento `app-mensajes` para trabajar con el `scroll` utilizando `ngOnInit`

4. Usar el elemento en el constructor

## AUTENTICACIÓN CON GOOGLE

	Recursos:
		- https://console.firebase.google.com/project/firechat-54ee7/authentication/users
		- https://github.com/angular/angularfire2/blob/master/docs/auth/getting-started.md

1. Crear un nuevo componente llamado `login`
	- ng g c components/login -is --spec=false

2. Codear la vista del componente `login`

3. Codear la funcion `ingresar` del componente `login`

4. Autenticación de Google:
	- Ir al primer recurso
	- Seleccionar `Método de Acceso`
	- Seleccionar `Google`
	- Seleccionar `Habilitar`
	- Hacer clic en el botón `Guardar`
	
- Eso seria todo, para permitir que conexiones de google sean aceptadas en nuestra app de firebase

5. Empezar con a autenticación de Firebase, ir al segundo recurso

6. Importar las siguientes clases en el `servicio`
	- import { AngularFireAuth } from 'angularfire2/auth';
	- import * as firebase from 'firebase/app';

7. Inyectar la clase `AngularFireAuth` en el constructor del `servicio`
	- public afAuth: AngularFireAuth

8. Añadir las funciones `login` y `logout`

9. Llamar a los nuevos servicios desde el componente `login`
	- Importar el servicio
	- Inyectar el servicio en el constructor

10. Crear un nuevo campo en el servicio llamado `usuario` de tipo `any`

11. Codear en el constructor, suscribirse a un observable.

## AUTENTICACIÓN CON TWITTER
	
	Recursos:
		- https://console.firebase.google.com/project/firechat-54ee7/authentication/providers
		- https://firebase.google.com/docs/auth/web/twitter-login?authuser=0
		- https://apps.twitter.com/

1. Codear en la vista principal el boton `Salir`

2. Importar el `servicio`en el componente principal e inyectarlo en el constructor

3. Codear la función `logout` para que limpie el atributo `usuario` al llamar a la función

4. Codear en la vista principal, cuando debe aparecer los botones `Salir` y para `Autenticarse`

5. Autenticación de Google:
	- Ir al tercer recurso
	- Crear una nueva aplicación
	- Copiar el callback URL de el primer recurso y pegarlo en el campo de texto `Callback URL`
	- Hacer clic en el boton `Crear`
	- En la pestaña `Permisos` seleccionar la opción `Read Only`

6. Modificar la funcion login para que proveedor sea `google` o `twitter`

7. Probar

## TOQUES FINALES A NUESTRO CHAT

	Recursos:
		- https://console.firebase.google.com/project/firechat-54ee7/database/firestore/data~2F

1. Codear la vista principal para mostrar el chat solo si el usuario esta autenticado

2. Modificar la funcion `agregarMensaje` del servicio

3. Modificar la vista del componente `chat`

4. Probar con una cuenta de Twitter y Google al mismo tiempo

