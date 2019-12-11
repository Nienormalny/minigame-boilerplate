# minigame-boilerplate
My HTML/CSS/JS based boilerplate.

![Minigame Boilerplate Preview](https://nienormalny.org/boilerplate/images/minigame-boilerplate.png)

### To run
1. `npm install`
2. `npm start`
3. Local server will start on port **3001** - `http://localhost:3001 / http://127.0.0.1:3001`

### What the hack is going on?
- All important files are inside `src` directory.
- You don't need to add `<html> / <head> / <body>`, because all is done with `webpack`.
- To change your minigame web title and other metadata:
  Inside `webpack.config.js` you will find from line **10** to **19** all important informations.
  
- Main edit `HTML` file: `/src/index.html`
- Main edit `JS` file: `/src/app.js`
- Main edit `SCSS` file: `/src/styles/styles.scss`
- Define your own colors here: `/src/styles/colors.scss`
- Add responsive rules inside: `/src/styles/responsive.scss`
