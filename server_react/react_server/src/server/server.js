import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../App'

const app = express()

const PORT = 8080; 

// app.use('^/$', (req, res, next) => {
// 	fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err)
//         return res.status(500).send("Error getting index HTML")
//       }
      
//       return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`))
//     })  
// })

// app.listen(PORT, () => {
//   console.log(`App launched on ${PORT}`);
// })

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });
  
  app.use(express.static('./build'));
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });