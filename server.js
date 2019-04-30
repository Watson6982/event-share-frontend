const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.header('host')}${req.url}`)
      else
        next()
    })
}

app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);