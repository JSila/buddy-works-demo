export PATH=/root/.nvm/versions/node/v5.9.1/bin:PATH

forever stop index.js
npm install
forever start index.js
