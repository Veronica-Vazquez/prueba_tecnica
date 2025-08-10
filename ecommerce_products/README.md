Hola, este proyecto es una prueba tecnica de Verónica Vazquez Rojas.

En este archivo encontraras la breve descripción del proyecto, así como los paso fue realizando para su creación.

💪 Reto 1: 

Replicar el diseño de cada pantalla con sus interacciones, 5 en total, las
cuales están en Desing y las 5 interacciones están en prototipado y son los
siguientes:
• Abrir el carrito de compra.
• Visualizar el carrusel de imágenes del producto.
• Agregar al carrito
• Eliminar del carrito
• En versión mobile expandir el menú

🤔 Paso 1: análisis de los requerimientos
a. Se revisa detalldamente la descripción del reto
b. se suben los archivos de figma para revisar su contenido
c. reviso cada página para entender el diseño, revisar los colores, el tipo de fuente y descargo los recursos necesarios para poder comenzar con el proyecto
d. genero un orden para ir haciendo parte por parte de la página


😎 Paso 2: estructura del proyecto

Se crean las siguientes carpetas
-> pages: almanece todas las páginas HTML que se utilizarán en el proyecto
-> modules: almanece el header y footer
-> js: almanecara el archivo main.js que contendrá la importación del header y footere del index.
-> public: almanecena la carpeta img donde se agregaran las imagenes usadas durante el proyecto.
Nota: se crea esta estructura en su suponiendo que se de una puesta en producción pueda ser empaquetado y no se descarten las imagenes. Adicional, al ser un proyecto pequeño se pueden cargar las iamgenes, pero por la naturaleza del ecommerce se sugiere manejar un gestor de imagenes para que el proyecto no sea tan pesado y tenga mejor rendimiento

🖥️ Paso 3: desarrollo del header
Se crea el archivo header.js que contendra el header para que pueda ser dinamico y reducir el código HTML en las páginas.
se realiza la importación en la página products.html y se confirma funcionalidad

🖥️ Paso 4: se añaden los enlaces de Bootstrap, la fuente Kumbh, se añade el css normalizado

🖥️ Paso 5: se empieza el desarrollo del contenido, en figma se ve que se divide en dos secciones, la de las imagenes y otra de la descripción de los productos, por eso uso la clase row para poder manipular los elementos por separado

🎨 Paso 6: empiezo ajustando las escalas de las imagenes para que se muestren alineadas, eso lo realizo usando clases de Bootstrap y CSS para personalizar. Declaro variables para elegir los colores acorde al diseño compartido y no cambiarlos. Cabe mencionar que comento que estilos pertenecen a cada sección para poder localizarlos más rápido en caso de que ser necesario.
Cambie el color del fondo por uno blanco menos puro para no lastimar la vista.

🖥️ Paso 7: empiezo a agregar los textos que viene en figma para posteirormente ajustarlos con los estilos correspondiente. En el caso del % de descuento lo trabaje solo en CSS para tener mejoor control, ya que a veces los estilos de Bootstrap pueden sobreponerse por la jerarquia.

Modifico el botón del carrito de compras para que tenga el tamaño y colores adecuados.

cambio de color la fuente de los botones de -/+ para que también sean naranjas.

🧠 Paso 8: inicio con la parte lógica para probar funcionalidades

Primero agrego la parte lógica de los botones -/+ para que se incrementen o decrementen segun el clic, esto lo realizo con funciones separadas para que en caso de que mantenimeinto o cambios puedan ser modificadas sin inteferir en la funcionalidad.

luego realizo la programación para que el DOM cambie según el articulo seleccionado.

Debido a la estructura modular de la página hago uso de addEventListener, para programar los botones.

Los div.innerHTML se usan para insertar contenido HTML dentro de un elemento div del DOM, para representar el producto en nuestra lista de carrito de compras.

Para eliminar los artículos en el carrito realice una función en donde:
1. Detecta los botones de eliminación (.remove-item)
2. Al hacer clic, identifica el producto por su ID
3. Lo elimina del array 
4. actualiza la interfaz del carrito con renderCart() 





