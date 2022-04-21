const express = require('express')
const router = express.Router()
const {
  getAppointments,
  setAppointment,
  updateAppointment,
  deletetAppointment,
} = require('../controllers/aptController')

router.get('/', getAppointments)

router.post('/', setAppointment)
router.put('/:id', updateAppointment)
router.delete('/:id', deletetAppointment)

module.exports = router
