const express = require('express');
const router = express.Router();
const Doge = require('../models/doge');

router.get('/', (req, res) => {
    Doge.findAll({ raw: true })
        .then(doggos => {
            res.render('card', { doggos });
        })
        .catch(err => console.log(`Error: ${err}`))
});

router.get('/create', (req, res) => {
    res.render('create_main', { layout: 'create', fun: 69 });
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    Doge.findByPk(id)
        .then(doge => {
            res.render('edit_main', {
                layout: 'edit',
                title: doge.title,
                description: doge.description,
                fun: doge.fun,
                id
            });
        });
});

router.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const { title, description, fun } = req.body;

    if (!title) {
        res.render('edit_main', { layout: 'edit', error: 'Title can\'t be empty!', description, fun, id });
    } else {
        Doge.update({
            title,
            description,
            fun
        }, { where: { id } })
            .then(() => {
                res.redirect('/doggos');
                Doge.findAll({ raw: true })
                    .then(doggos => {
                        res.render('doggos', { doggos });
                });
            });
    }
});

router.post('/create', (req, res) => {
    const { title, description, fun } = req.body;

    if (!title) {
        res.render('create_main', { layout: 'create', error: 'Title can\'t be empty!', description, fun });
    } else {
        Doge.create({
            title,
            description,
            fun
        });
        res.render('create_main', { layout: 'create', error: '', fun: 69 });
    }
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;

    Doge.destroy({ where: { id } })
        .then(() => {
            res.redirect('/doggos');
            Doge.findAll({ raw: true })
                .then(doggos => {
                res.render('doggos', { doggos });
            });
        });
});

module.exports = router;