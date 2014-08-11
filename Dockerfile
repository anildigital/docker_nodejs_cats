FROM ubuntu:14.04

RUN  apt-get update
# Install Node.js and npm
RUN  apt-get install -y nodejs
RUN  apt-get install -y npm

# Bundle app source
ADD . /src

RUN npm config set registry http://registry.npmjs.org/
RUN cd /src; npm install
RUN  mv /usr/bin/nodejs /usr/bin/node

EXPOSE  3000

CMD ["/src/bin/www"]
