# can build server docker (isolated backend)

##

### backend

- insert 2 of same flag  2 warnings found (use docker --debug to expand): (is ok)

docker build --build-arg PROJECT=server --build-arg NODE_VERSION=18.18.0 -t my-node-app .
docker run -it --rm -p 8080:8080 my-node-app
docker run -it --rm --entrypoint sh my-node-app

### frontend
[//]there is a port default value if not specified
docker build --build-arg PROJECT=web --build-arg NODE_VERSION=18.18.0 --build-arg PORT=3000 -t my-node-view .
docker run -it --rm -p 3000:3000 my-node-app
docker run -it --rm --entrypoint sh my-node-app