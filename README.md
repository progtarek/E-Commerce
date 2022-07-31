# E-Commerce (MERN Stack)

Simple E-commerce End-to-End app with CRUD operations to

- List out produdcts.
- Create single product.
- Edit specific product.
- Delete a product.

## Tech

E-commerce uses a number of open source projects to work properly:

- [React] - A JavaScript library for building user interfaces.
- [Redux Toolkit] - A store management system for handling system state.
- [Redux Toolkit] - A lightweight, fully-featured routing library for the React JavaScript library.
- [Styled Components ] - A component styling UI library.
- [Nest.JS] - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [node.js] - evented I/O for the backend
- [MongoDB] - Non relational database for storing Data.
- [Mongoose] - Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, ...
- [Cloudinary] - A Platform Powering Your Media ; Image and Video API for Powerful Visual Experiences.

and much more, of course this app itself is open source with a public repository on GitHub.

## Get started

App requires [Docker & Docker Compose](https://www.docker.com/) to run.

App is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

- Clone the repo
- Rename `.env.sample` to `.env`
- Inside the app E-commerce directory type the following.

```sh
docker-compose up
```

> Note: You migth need to run the above command with `sudo`.

## License

MIT

[node.js]: http://nodejs.org
[react]: https://reactjs.org/
[redux toolkit]: https://redux-toolkit.js.org/
[styled components]: https://styled-components.com/
[redux toolkit]: https://v5.reactrouter.com/web/guides/quick-start
[nest.js]: https://nestjs.com/
[mongodb]: https://www.mongodb.com
[mongoose]: https://mongoosejs.com
[cloudinary]: https://cloudinary.com/
