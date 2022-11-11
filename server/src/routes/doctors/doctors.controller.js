const { getAllDoctors, addDoctor, getDoctorPatients } = require("../../models/doctors/doctors.model");

async function httpAddDoctor(req, res) {
  const doctorInfo = req.body;

  // Check that all doctor information is given
  if (!doctorInfo.name) {
    return res.status(400).json({
      error: "Missing required doctor information.",
    });
  }

  try {
    const doctor = {
      name: doctorInfo.name,
      id: doctorInfo.id,
    };

    await addDoctor(doctor);
    return res.status(201).json({ success: true, name: doctorInfo.name, id: doctorInfo.id });
  } catch (err) {
      return res.status(500).json({
        error: "Could not add doctor.",
      });
  }
}


async function httpGetAllDoctors(req, res) {
  //let doctors = await getAllDoctors();
  //return doctors;
  try {
    return res.status(200).json(await getAllDoctors());
  } catch (err) {
    return res.status(500).json({
      error: "Could not find any doctors.",
    });
  }
  
}

async function httpGetDoctorPatients(req, res) {
  try {
    return res.status(200).json(await getDoctorPatients());
  } catch (err) {
    return res.status(500).json({
      error: "Could not find doctor's patients.",
    });
  }
}

module.exports = {
  httpGetAllDoctors, httpAddDoctor, httpGetDoctorPatients
};
