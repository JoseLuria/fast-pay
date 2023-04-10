<div align='center'>
  <h1>🤖 FastPay | WebApp 💻</h1>
  <img width='400px' style='margin-bottom: 1.5rem;' src='./public/otg.webp' />
</div>

## 📕 Acerca de FastPay

FastPay es una plataforma que permite enviar tickets a tus contactos mediante correo electrónico y recibir pagos a través de PayPal de manera sencilla y eficiente.

## 🚀 ¿Como usar?

🚨 _Es recomendable usar la versión de node **v18.14.2**, así como debes crear un archivo **.env** con las variables de entorno necesarias._

Primero clona el repositorio desde GitHub:

```shell
git clone https://github.com/JoseLuria/fast-pay
```

Muévete a la carpeta del proyecto:

```shell
cd fast-pay
```

Instala las dependencias con el siguiente comando:

```shell
npm install
```

Inicia la aplicación de **desarrollo** usando el siguiente comando:

```shell
npm run dev
```

## 💾 Configurando la base de datos con Docker (Opcional)

_Para realizar este paso es obligatorio tener [Docker](https://www.docker.com/products/docker-desktop/) instalado, de igual forma puedes usar tu propia base de datos local._

Debes usar el siguiente comando para levantar una base de datos de forma local con el archivo **docker-compose.yml**:

```shell
docker-compose up -d
```

La base de datos se iniciara en el puerto _5432_ y la información de la base de datos se almacenara en la carpeta **database**.

El string de conexión ya está incluido en el archivo **.env.example** y se ve así:

```text
DATABASE_URL='postgresql://postgres:admin@localhost:5432/fastpay-db?schema=public'
```

🚨 Puedes abrir el archivo **.env.example** para ver un ejemplo con todas las variables de entorno, recuerda que debes crear tu propio archivo **.env** con tus varibles de entorno.

Puedes acceder a la base de datos usando el siguiente comando:

```shell
npx prisma studio
```

## ⚙️ Esta aplicación fue construida usando las siguientes tecnologías

- [ESLint](https://www.npmjs.com/package/eslint)
- [Prettier](https://www.npmjs.com/package/prettier)
- [Next Js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Next Auth](https://next-auth.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Sonner](https://sonner.emilkowal.ski/)
- [Zod](https://zod.dev/)
- [Prisma](https://www.prisma.io/)
- [PostgresSQL](https://www.postgresql.org/)

## 📄 Licencia

[MIT](https://opensource.org/licenses/MIT)
