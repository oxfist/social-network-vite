# Social Network + Vite 鈿★笍

Base del proyecto
[Social Network](https://github.com/Laboratoria/bootcamp/tree/main/projects/03-social-network)
del bootcamp de Laboratoria usando [Vite](https://vitejs.dev/) (pronunciado
"vit") para correr la aplicaci贸n localmente y construir el bundle para
producci贸n.

## 馃殌 驴C贸mo comienzo?

1.  **Instalar dependencias.**

    ```shell
    npm install
    ```

2.  **Comenzar desarrollo.**

    ```shell
    npm start
    ```

3.  **Abre el c贸digo en un editor y comienza a hacer cambios!**

    La aplicaci贸n ahora est谩 corriendo en http://localhost:3000!

    Modifica `src/main.js` para ver cambios en tiempo real.

4.  **Ejecutar pruebas unitarias.**

    ```shell
    npm test
    ```

5.  **Desplegar a GitHub Pages.**

    ```shell
    npm run deploy
    ```

6.  **Ejecutar linters.**

    ```shell
    npm run lint
    ```

7.  **Corregir formateo.**

    ```shell
    npm run format
    ```

## Contenidos de este proyecto

- [Vite](https://vitejs.dev/): sirve c贸digo localmente con
  [HMR](https://vitejs.dev/guide/features.html#hot-module-replacement) a
  _incre铆ble velocidad_ y crea bundle de producci贸n.

- [`gh-pages`](https://github.com/tschaub/gh-pages): despliega a GitHub Pages
  con _cero configuraci贸n_.

- [`swc/jest`](https://github.com/swc-project/jest): permite usar Jest con ES
  Modules.

- ESLint + HTMLHint + Stylelint + Prettier: maneja linting y formateo del
  c贸digo.

## Recursos adicionales

- [Documentaci贸n oficial de Vite](https://vitejs.dev/guide/#overview)

- [驴Por qu茅 esbuild es r谩pido?](https://esbuild.github.io/faq/#why-is-esbuild-fast)
  esbuild es el bundler utilizado por Vite.

- [Configurar Jest en Vite con swc](https://hung.dev/jest-vite)
