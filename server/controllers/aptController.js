//@desc get appoinments
//@route GET/api/appoinemts
//access Private
const getAppointments = async (req, res) => {
  res.status(200).json({ message: 'GET APT' })
}
//@desc set appoinment
//@route GET/api/appoinemts
//access Private
const setAppointment = async (req, res) => {
  res.status(200).json({ message: 'SET APT' })
}
//@desc update appoinment
//@route PUT/api/appoinemts
//access Private
const updateAppointment = async (req, res) => {
  res.status(200).json({ message: `UPDATE APT ${req.params.id}` })
}
//@desc delete appoinment
//@route DELETE/api/appoinemts
//access Private
const deletetAppointment = async (req, res) => {
  res.status(200).json({ message: `DELETE APT ${req.params.id}` })
}

module.exports = {
  getAppointments,
  setAppointment,
  updateAppointment,
  deletetAppointment,
}
