var express = require('express');
var router = express.Router();

const options = {
    verbose: console.debug
};

const db = require('better-sqlite3')('articles.sqlite', options);


router.get("/", function (req, res, next) {
   const articles = db.prepare('SELECT * FROM articles').all();
    res.send(articles);
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    console.debug(req.params);
    if (id) {
        const article = db.prepare('SELECT * FROM articles WHERE id = ?').get(id);
        res.send(article);
    } else {
        res.send("Not Found");
    }
});
    // router.get('/:id', (req, res, next) => {
    //     const id = req.params.id
    //     console.debug(req.params);
    //     if (id) {
    //         const article = articles.find((a) => a.id === Number.parseInt(id));
    //         res.send(article);
    //     } else {
    //         res.send("Not Found");
    //     }
    // });

    router.post('/', (req, res, next) => {
        const body = req.body;
        const article = {
            image: body.image,
            title: body.title,
            date: new Date().toISOString(),
            text:body.text
        };
      const stm = db.prepare("INSERT INTO articles (image, title, date, text) VALUES (?, ?, ?, ?)");
       stm.run(Object.values(article))
        res.send(article);


});
router.patch("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id
    console.debug(req.params);
    if (id) {
        const article = db.prepare('SELECT *FROM articles WHERE articles.id = ?').get(id);
        if(article){
            Object.assign(article, body);
           const stm = db.prepare('UPDATE articles SET image = ?, title = ?, date = ?, text = ? WHERE articles.id = ?');
          console.debug(article);
         const info = stm.run(article.image,  article.title, article.date, article.text,parseInt(id))
            res.sendStatus(200)
        }
        else{
            res.sendStatus(404)
        }
        res.send(article);
    } else {
        res.sendStatus(404);
    }
});

router.delete("/:id", (req, res) => {

    const id = req.params.id;
    if (id) {
         db.prepare("DELETE FROM articles WHERE id = ?").run(id);
        res.sendStatus(200);
    }else{
    res.sendStatus(404);
    }
})
module.exports = router;
