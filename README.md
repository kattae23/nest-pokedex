<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar el repositorio
2. Ejecutar 
```
yarn install
```
3. Tener nest-cli instalado
```
npm i -g @nest/cli
```
4. levantar la base de datos
```
docker-compose up -d
```
5. Clone file __.env.template__ and rename the copy to __.env__

6. Fill the env variables defined in ```env```

7. Execute the app in dev:
```
yarn start:dev
```

8. Rebuild the DB with the seed (only in dev)
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest

 