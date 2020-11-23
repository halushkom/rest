const {Router} = require('express')
const router = Router()
const reservation = require('../models/reservation')
const {check, validationResult} = require('express-validator')

router.post(
    '/reservation',
    [
      check('email', 'Не вірний e-mail').isEmail(),
      check('name', 'Мінімальна довжина імені 3 символи')
          .isLength({min: 3})
    ],
    async (request, response)=>{
    try {
        const errors = validationResult(request)
        if (!errors.isEmpty()){
             return response.status(400).json({
                 errors: errors.array()
             })
        }
        const {email, name} = request.body // дані отримуємо з фронта з форми
        const reserv = new reservation({email, name})
        await reserv.save()
        res.status(201).json({message: 'Столик зарезервовано'})
    }catch (e) {
        response.status(500).json({message: 'Введіть правильне значення'})
    }
})


module.exports = router