Simple demo application with an angular frontend and node backend build and run with docker and docker-compose.

# build api-mock image to test api calls

additional Dockerfile in api-mock folder

## build image
```
cd api-mock
docker build -t api-mock .
```

# build apc client project
artefact build will be done by APC jenkins
therefore the resulting artefact with static html is going to be published in nexus repo

-> but for now tarball is provided:
apc-ui.tar.gz

## build image
```
cd <project-root>
docker build -t apc-ui .
```

## start container
```
docker-compose up
```

visit http://localhost:8080/





