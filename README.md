# FINANCE MANAGEMENT

This is the project that will be my finance management. It is based on the [Next.js](https://nextjs.org/) framework.


## Getting Started

### Dependencies

#### Node v18.19.0

The project uses node version 18.19.0. To install this version, we recommend using a version manager.

##### Node version manager

To make it easier to manage node versions on the machine, we use a version manager. **NVM** is recommended for this project.

 **Linux version (Ubuntu) and MAC** [Documentation](https://github.com/nvm-sh/nvm)
 ```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
#OR
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
 ```
**Windows version** [Documentation](https://github.com/coreybutler/nvm-windows)

#### Node package manager

In the Node ecosystem there are several tools for managing packages, the standard one being `npm`.

This project recommends the use of `pnpm` due to the better control of packages on the machine, instead of making a separate download of each package, `pnpm` makes a single download and then uses a symbolic link. [PNPM documentation](https://pnpm.io/motivation)

```bash
$ npm install -g pnpm
```

#### Code editor

##### VScode (recommended)

Because the project is already configured with some extensions to aid development.

[VScode download](https://code.visualstudio.com/download)

## Run This Project Locally (Development)

### Clone project

<!-- ```bash
# SSH
$ git clone git@github.com:bolder-three/quemfaz-ui.git

#HTTP
$ git clone https://github.com/bolder-three/quemfaz-ui.git
``` -->

### Install Node

```bash
$ nvm install v18.19.0 && nvm use v18.19.0
```

### Install dependencies

```bash
$ pnpm i
```

### Environment variables

The environment variables are already in the project in the file `.env.local`.


### Start local

```bash
# PNPM
$ pnpm dev

#MAKE
$ make dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## More information

 - [Changelog](./Changelog.md)
 - [Contributing](.Contributing.md)
