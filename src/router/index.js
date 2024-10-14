import { Router } from "express"
const router = Router()

router.get('/' , (req,res) => res.render('index',{title:'Index'}))
router.get('/about' , (req,res) => res.render('about',{title: 'Contactanos'})),
router.get('/contact' , (req,res) => res.render('contact',{title: 'Sobre Nosotros'}))

export default router