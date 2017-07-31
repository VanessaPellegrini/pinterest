PINTEREST - Proyecto Final Laboratoria - Autor : Vanessa Pellegrini - Versión 0.1
------------------------------------------------------------------------------------------------------
**Detalles Técnicos**
-----------------------------
**Dependencias de desarrollo**
  1. Gulp : Task Runner basado en Node.js y npm, para automatizar tareas repetitivas, en este caso pemitió la correcta compilación,
  concatenación, minificación y optimización del código, a través de sus diferentes utilidades.
  2. Sass : Metalenguaje anidado de hojas de estilos que permite crear variables, mixin, nesting (anidamiento) y herencia de los selectores.
 **versiones instaladas:
   - "gulp": "^3.9.1",
   - "gulp-concat": "^2.6.1",
   - "gulp-minify-css": "^1.2.4",
   - "gulp-sass": "^3.1.0",
   - "gulp-uglify": "^3.0.0",
   - "gulp-webserver": "^0.9.1"
-------------------------------------------------------------------
 **Dependencias de producción
-------------------------------------------------------------------
  1. Jquery: Biblioteca multiplataforma de javascript, que permite simplificar la interacción con los documentos HTML al manipular DOM y
  manejar eventos.
            1.1 Jquery-Modal: Plugin de jquery que permite mostrar de forma simple el modal.
  2. Bootstrap: conjunto de herramientas para el diseño de sitios, contiene plantillas de botones, cuadros y menús de navegación.
  
**versiones instaladas:
- "bootstrap": "^3.3.7",
-  "jquery": "^3.2.1",
-  "jquery-modal": "^0.8.2"
-------------------------------------------------------------------
**Para este proyecto la pauta fue la siguiente:
-------------------------------------------------------------------
* Desarrollar vista principal en versión destok(tamaño grande y extragrande)
* Diagramación fluida, sin respetar columnas
* Se deben cargar 20 imágenes inicialmente, al hacer scroll hasta el final se cargarán las siguientes 20.
* Imágenes, título, descripción, hashtag y usuario deben ser traídas desde Json.
* Al hacer clic en la imágen se debe desplegar un modal con el diseño entregado (ver en assets/docs)
* La información de los datos requeridos deben ser extraídos de JSON.
--------------------------------------------------------------------
**BUGS - Los siguientes se corregirán en las próximas versiones
--------------------------------------------------------------------
* Proyecto solo válido para navegador Google Chrome Versión 59.0.3071.115.
* Las fotografías se acomodan de forma fluida pero se forma un espacio entre ellas.
* El nav pierde la forma en otros navegadores.
* Las 20 imágenes se cargan correctamente, pero las siguientes 20 hacen un salto en la navegación, esto podría ser una acción por omisión ocasionada por alguna etiqueta, botón o input, una propagación de un evento que realiza una ejecución o un
listener que interfiera desde DOM. 
---------------------------------------------------------------------
**Soluciones implementadas - próximamente
---------------------------------------------------------------------

  
