
# Setup
```
sudo dnf nodejs

npm install express
express --view=pug valentines

npm nodemon
in package.json scripts - "dev": "DEBUG=valentines:* nodemon ./bin/www"
npm run dev
```

# Versions
```
"node": "v20.10.0"

Dependicies in package.json
"cookie-parser": "~1.4.4",
"debug": "~2.6.9",
"express": "~4.16.1",
"http-errors": "~1.6.3",
"morgan": "~1.9.1",
"nodemon": "^3.0.3",
"pug": "2.0.0-beta11"
```