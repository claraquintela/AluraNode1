const bd = require('../../config/database');
const LivroDao = require('../infra/livro-dao');

module.exports = (app) => {
  app.get("/", function (req, res) {
    res.send(`
          <html>
              <head>
                  <meta charset="utf-8">
              </head>
              <body>
                  <h1> Casa do Código </h1>
              </body> 
          </html> `);
  });

  app.get('/livros', function(req, resp) {

    const livroDao = new LivroDao(bd);
    livroDao.lista().then(livros => resp.marko(
            require('../views/livros/lista.marko'),
            {
                livros: livros
            }
        ))
        .catch(erro => console.log(erro))
    });
};
