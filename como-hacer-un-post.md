# pdep-lunes bitacora

## 📖 ¿Cómo hacer un post?

1.  **Nuevo archivo**

    Para crear un nuevo post es necesario crear un nuevo archivo bajo la carpeta `content/blog/` con un nombre y la extensión `.md` (markdown).

    _Nota: si se pone dentro de otra carpeta (dentro de /blog) esa carpeta va a formar parte de la url. Por ejemplo: si creamos el post `clase-01.md` entonces la url va a ser `https://pdep-lunes.github.io/bitacora/funcional/clase-01`._

2.  **Respetar los headers de metadata**

    Todos los posts tienen que respetar este formato al comienzo para poder dar contexto sobre su contenido.

    ```yaml
    ---
    title: Titulo de la clase
    date: 'AAAA-MM-DD'
    description: 'Una descripción mas detallada sobre la clase'
    tags: [un-tag, otro-tag-que-relacione]
    ---

    ```

    - La fecha es útil para ordenar los posts
    - La descripción es lo que se ve en la página principal debajo del titulo

    _Nota: tener en cuenta que los tags dependen de su nombre para tener algun estilo especial que tiene que declararse en el archivo `tags.css` que se encuentra dentro de la carpeta `src/css/`._

3.  **Escribir en markdown**

    El post `nueva-clase.md` se tiene que escribir en markdown se puede ver una guía de como escribir markdown [acá](https://guides.github.com/features/mastering-markdown/).

4.  **Hacer un PR (pull request)**

    La idea es hacer un PR con los cambios que probablemente sean solo el markdown del post o algun cambio en tags.

    Pedir alguna review para validar que esta todo ok (recontra opcional).
