# build and start apc client project
build will be done by APC jenkins
therefore the resulting artefact with static html is going to be published in nexus repo

-> but for now just use
apc-ui.tar.gz

## build image
docker build -t apc .

## start container
docker run -dp 8080:80 apc

visit http://localhost:8080/

# build and start api-mock to test api calls

additional Dockerfile in api-mock folder

cd to api-mock folder

## build image
docker build -t api-mock .

## run api-mock
docker run -itp 3000:3000 api-mock



