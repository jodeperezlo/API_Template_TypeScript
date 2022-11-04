# Folder structure 📁

```md
└───src
    ├───api
    │   └───v1
    │       ├───controllers
    │       ├───models
    │       ├───routes
    │       └───services
    ├───config
    ├───socket
    └───swagger
```

# Iniciar el proyecto. 🚀

### Instalar dependencias 📦

Importante ejecutar el comando al descargar el proyecto. En caso de algún problema, borrar la carpeta local de node_modules y package-lock.json, y volver a ejecutar el comando.

```console
npm i
```

### Ejecutar el proyecto en desarrollo 🚀

Siempre que se trabaje en desarrollo, se debe de levantar el servidor con el comando que está a continuación, y no con `npm run dev `.

```console
npm run dev
```

### Construir el proyecto para producción 🏗️

```console
npm run build
```

### Ejecutar el proyecto en producción 🚀

```console
npm run start
```
