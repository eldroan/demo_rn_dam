# Demo App React Native

Esta demo app utiliza
* [React Native v0.63.3](https://reactnative.dev/blog/2020/07/06/version-0.63)
* [React Navigation 5](https://reactnavigation.org/docs/getting-started)


## Troubleshooting
### No me marca errores en mi codigo
Instalar las extensiones [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) y [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)


Luego de instalar `Prettier ESLint` ir a algun archivo `.js`, abrirlo y presionar click derecho sobre el editor y luego presionar `Format Document With...` -> `Configure Default Formatter` -> `Prettier ESLint`

Ahora al presionar `Shift + Alt + F` se formateara el codigo segun las reglas de `ESLint`

>Opcional: Si queresmos que nuestro codigo se formatee al guardar podemos ir a `File` -> `Preferences` -> `Settings` y en la barra de busqueda tipear `Format On Save` para luego tildar la opcion. Luego, al apretar `Ctrl + S` en nuestros archivos automaticamente seran formateados segun las reglas de linteo.


### No me sugiere imports
Para agregar sugerencias en los imports es necesario crear el archivo `jsconfig.json` con los siguientes contenidos
```
{
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "allowSyntheticDefaultImports": true,
        "resolveJsonModule": true,
        "checkJs": true,
        "jsx": "react-native"
    },
    "exclude": [
        "node_modules"
    ]
}
```

Ademas instalar la extension [Auto Import - ES6, TS, JSX, TSX](https://marketplace.visualstudio.com/items?itemName=NuclleaR.vscode-extension-auto-importv)

> NOTA: Puede que sea necesario que reinicies vs code para ver los cambios


### ERROR: Unable to run script [...] 
Este error suele aparecer porque instalamos nuevos packages nuevos mientras teniamos el metro bundler abierto. Para solucionarlo solo hay que cerrarlo y volver a ejecutar `npx react-native run-android`


### Borrar node_modules en Windows
Instalar Rimraf
```
npm install rimraf -g
```

Ejecutar 
```
rimraf node_modules
```