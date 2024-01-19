# Setup Guide

> This guide will help you setup Sunaar on your local machine.

---

<details>
<summary>Instructions</summary>

### Node.js (Frontend)

- [ ] Node.js v16.14.2
  - [Download Node.js](https://nodejs.org/en/download/)

### Golang (Backend)

- [ ] Go v1.19
  - [Download Go](https://go.dev/doc/install)

### Clone the repository

- [ ] Clone the repository

```bash
git clone https://github.com/TechAtikiN/sunaar
```

### Set up the environment variables

<details>
<summary>Frontend</summary>

- [ ] Navigate to the `/client` directory

```bash
cd client
```

- [ ] Rename the `.env.example` file to  `.env.local` file in the `client` directory

- [ ] Fill in with the relevant environment variables 

</details>

<details>
<summary>Backend</summary>

- [ ] Navigate to the `/server` directory

```bash
cd server
```

- [ ] Rename the `.env.example` file to  `app.env` file in the `server` directory

- [ ] Fill in with the relevant environment variables 

</details>

### Running Frontend

- [ ] Install pnpm (Package Manager)

> You can use `npm` or `yarn` as well, but I have used `pnpm`

```bash
npm install -g pnpm
```

- [ ] Install dependencies

```bash
cd client
pnpm install
```

- [ ] Run the development server

```bash
pnpm dev
```

- [ ] Open the browser and go to `http://localhost:3000`

> If you encounter a browser error, it will be resolved upon starting the backend server.

> Kindly refresh the page once the backend server is up and running.

- [ ] To stop the server, Press `Ctrl + C` in the terminal where the server is running

### Running Backend
> Make sure you have installed Golang from the above provided link
>
- [ ] Install dependencies

```bash
cd server
go mod download
```

- [ ] Run the development server

```bash
air
```

- [ ] Open the browser and go to `http://localhost:8000`

> If you encounter a browser error, it will be resolved upon starting the backend server.

> Kindly refresh the page once the backend server is up and running.

- [ ] To stop the server, Press `Ctrl + C` in the terminal where the server is running
