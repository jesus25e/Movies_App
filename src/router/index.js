import { Router } from "express"
import { TraerPeliculas } from "../public/services/conexion.js"

const router = Router()

router.get('/' , (req,res) => res.render('index',{title:'Index'}))
router.get('/about' , (req,res) => res.render('about',{title: 'Contactanos'})),
router.get('/contact' , (req,res) => res.render('contact',{title: 'Sobre Nosotros'}))

router.get('/api/get-peliculas',async(req,res)=>{
    const peliculas = await TraerPeliculas()
    res.status(200).json(peliculas)
})
export default router;