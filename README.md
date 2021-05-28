# color-translator

El traductor funciona de Español a Ingles y por el momento traduce diez colores:

- Rojo
- Naranja
- Amarillo
- Verde
- Cian
- Azul
- Magenta
- Negro
- Gris
- Blanco

## Uso

Al introducir un color en español este sera traducido al ingles, ademas, el texto donde se muestra la traduccion cambiara de color segun la traduccion y el fondo tambien cambiara para hacer contraste al color.

## Sugerencias de cambio

1. Agregar nuevos colores en `js/main.js` en la funcion `traducir()`, simplemente hace falta agregar nuevos casos y colocar los valores rgb de ese color en la llamada de funcion `aplicarColor()`, por ejemplo:

    ```js
    case 'nuevo-color':
        $('#color-en').text('Traduccion')
        aplicarColor(#r, #g, #b)
        break;
    ```

2. Agregar nuevas opciones de input en `index.html`. Para agregar nuevas opciones tenemos que agregar una etiqueta `<option value="Nuevo-Color">` como se muestra a continuacion:

    ```html
    <label for="color-es" class="form-label">Traducir del español</label>
    <input class="form-control" list="datalistOptions" id="color-es" placeholder="Escribe a traducir...">
    <datalist id="datalistOptions">
        <option value="Rojo">
        <option value="Naranja">
        <option value="Amarillo">
        <option value="Verde">
        <option value="Cian">
        <option value="Azul">
        <option value="Magenta">
        <option value="Negro">
        <option value="Gris">
        <option value="Blanco">
        <option value="Nuevo-Color">
    </datalist>
    ```

3. Puedes cambiar que el color de fondo cambie segun la traduccion y el texto cambie para hacer contraste modificando las siguientes instrucciones en `js/main.js` en la funcion `aplicarColor()`

- Antes
    ```js
        $('#color-en').css("color", `rgb(${r}, ${g}, ${b})`)


        network.run(entrada).color > .5 ? $('#color-en').css("background", "white") : $('#color-en').css("background", "black");
    }
    ```
- Despues
    ```js
        $('#color-en').css("background", `rgb(${r}, ${g}, ${b})`)


        network.run(entrada).color > .5 ? $('#color-en').css("color", "white") : $('#color-en').css("color", "black");
    }
    ```
## Dependencias
Las dependencias se encuentran por CDN, si se requieren locales los links a las respectivas webs son:

- [jquery](https://jquery.com)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Brain.js](https://brain.js.org/#/)
- [SweetAlert 2](https://sweetalert2.github.io/)
