# Pizza Burguer

This project is a online menu for a imaginary restaurant named Pizza Burguer, with automatic chatbot via whatsapp

## Live Application

```bash
https://pizzaburguer.ispapps.com
```

## Preview

![Preview](./public/preview.png)

## Used Technologies

- React
- Next
- Typescript
- Chakra UI
- React Router Dom
- Framer Motion
- Numeral
- Axios
- Postgres

## Main Concepts Applied

- JSX
- React Hooks
- List Items
- Dynamic Routes
- Atomic Design
- Mobile Responsive
- SSR with Next
- GetStaticProps
- SQL Query
- Next Api Routes

## Requirements to Run

- Node [nodejs.org](https://nodejs.org/en)
- Whatsapp API [github.com](https://github.com/IgorSprovieri/whatsapp-api)

## Getting Started

1- Clone the Repo:

```bash
git clone https://github.com/IgorSprovieri/pizza-burguer
```

2- Install Dependencies:

```bash
cd pizza-burguer
npm install
```

3- Create DB on Docker:

```bash
docker run --name pizza-burguer-db -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -p 5432:5432 -d -t postgres
```

4- Create .env File Following Example:

```bash
NEXT_PUBLIC_POSTGRES_USER=docker
NEXT_PUBLIC_POSTGRES_DB=docker
NEXT_PUBLIC_POSTGRES_PASSWORD=docker
NEXT_PUBLIC_POSTGRES_HOST=localhost
NEXT_PUBLIC_POSTGRES_PORT=5432

NEXT_PUBLIC_BASE_URL=http://localhost:3000/wpp
NEXT_PUBLIC_API_URL=http://localhost:3000/api

NEXT_PUBLIC_WPP_API_URL=https://api.wpp.ispapps.com
NEXT_PUBLIC_WPP_NUMBER=+5511989444841
```

5- Create Tables:

```bash
npm run db:create
npm run db:insert
```

6- Run the Project:

```bash
npm run dev
```

## Author

<img src="https://avatars.githubusercontent.com/u/72152106?v=4" alt="Igor Sprovieri" style="width: 30%; border-radius: 50px;"/>

### _Igor Sprovieri_

---

After working as a Unity developer for 3 years, I migrated to the web development area and currently have Fullstack and Mobile knowledge with React, React Native and Node.
