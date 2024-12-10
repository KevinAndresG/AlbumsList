# README - Aplicación CRUD de Álbum en Angular

## Descripción del Proyecto

Esta aplicación en Angular permite gestionar una entidad de tipo Álbum, la cual puede tener uno o más comentarios de un coleccionista. La aplicación incluye funcionalidades de creación, visualización y comentario de álbumes.

### Entidad Álbum

Los datos de la entidad Álbum incluyen:

- Nombre: Nombre del álbum.
- Cubierta: URL de la imagen de la cubierta (ejemplo: http://servidor/imagenalbum.png).
- Fecha de lanzamiento: Fecha de lanzamiento del álbum.
- Descripción: Descripción del álbum.
- Género: Tipo de género musical (opciones: Classical, Salsa, Rock, Folk).
- Disquera: Disquera del álbum (opciones: Sony Music, Discos Fuentes, Elektra, Fania Records).

## Historias de Usuario (HUs)

### HU001: Crear Álbum (Obligatoria)

#### Descripción: Como usuario, quiero poder crear un álbum.

#### Criterios de aceptación:

El formulario debe tener los siguientes campos:
Nombre: Campo de texto.
Cubierta: Campo de texto (URL de la imagen).
Fecha de lanzamiento: Campo de tipo fecha (debe ser válida).
Descripción: Campo de texto.
Género: Lista desplegable con opciones (Classical, Salsa, Rock, Folk).
Disquera: Lista desplegable con opciones (Sony Music, Discos Fuentes, Elektra, Fania Records).
Todos los campos son obligatorios.

### HU002: Listar Álbumes (Obligatoria)

#### Descripción: Como usuario, quiero poder ver una lista de álbumes.

#### Criterios de aceptación:

La lista debe mostrar los siguientes campos:
Nombre
Cubierta
Fecha de lanzamiento
Descripción
Género
Disquera
La lista debe tener una columna de acciones para ver el detalle de un álbum.
La lista debe tener una columna de acciones para agregar un comentario a un álbum.
La paginación de la lista es opcional.

### HU003: Comentar un Álbum (Opcional)

#### Descripción: Como usuario, quiero poder comentar un álbum.

#### Criterios de aceptación:

Al hacer clic en el botón de comentar de un álbum en la lista, el usuario debe poder agregar un comentario.
El método de agregar comentario debe pedir un ID de coleccionista. Se puede usar un ID predeterminado (por ejemplo, 1) y dejarlo hardcodeado en el código.

### HU004: Ver Detalle de un Álbum (Opcional)

#### Descripción: Como usuario, quiero ver los detalles de un álbum.

#### Criterios de aceptación:

Al hacer clic en el botón de detalle de un álbum, se deben mostrar los detalles del álbum.
El detalle debe incluir una lista de comentarios.
Requisitos Adicionales
Prueba unitaria: Se debe incluir al menos una prueba unitaria en la aplicación.

#### Diseño de la interfaz: El diseño es libre y debe adaptarse a la mejor experiencia de usuario posible.

#### Sustentación: La presentación y sustentación virtual se coordinarán para el martes 10 de diciembre por la tarde. La finalización de la prueba debe ser confirmada por correo electrónico.

#### Postman Collection: Se adjunta una colección de Postman con los servicios del backend para facilitar la integración.

### Nota Importante

La entidad Coleccionista no forma parte de la prueba, pero se incluye para una mejor comprensión del proyecto.
