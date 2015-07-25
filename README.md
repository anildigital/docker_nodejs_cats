## Cats

- Sample Node.js app to demonstrate use of Docker containers


## Run

### Run mongo container


```
docker run -d --name db -p 37017:27017 mongo
```

### Run docker_nodejs_cats

```
docker run -d -p 3009:3000 --link db:db docker_nodejs_cats
```


