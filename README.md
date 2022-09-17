# react-todo

Sample Front-end application for my developer portfolio, it is not intended to be used in production. If you still want to do so, than you are free to do it on your own risk.

## Requirements

In order to run the app you will need Node.js installed on your system, and the Golang back-end that pairs with this application.

## Installation

Start by cloning the back-end first.

```bash  
git clone https://github.com/bigpaulie/go-todo.git
```

Clone the front-end

```bash  
cd go-todo/ && git clone https://github.com/bigpaulie/react-todo.git ./frontend
```

Append the following to your docker-compose.yml

```yml  
frontend: 
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - '80:80'
    networks:
      - backend
```

Start the application

```bash  
docker-compose up -d --build
```

## Test

One your favorite browser and navigate to [http://localhost](http://localhost)

## Third-party libraries

* Create React App [go to page](https://create-react-app.dev)
* Tailwind CSS [go to page](https://tailwindcss.com/)
* Axios [go to page](https://axios-http.com/docs/intro)
