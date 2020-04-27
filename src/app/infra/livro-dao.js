class LivroDao {
    constructor(bd) {
        this._bd = bd; 
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._bd.all('SELECT * FROM livros', 
            function(error, results) {
                if (error) return reject('Não foi possível lista os livros');

                return resolve(results)
            })
        })
        
    }
}

module.exports = LivroDao;