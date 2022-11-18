const { getAllDoctors, addDoctor, getDoctorPatients, getDoctor } = require("../../models/doctors/doctors.model");

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

async function httpGetDoctorById(req, res)
{
  // Get the body of the http request
  info = req.body;
  // Check if the required field is present
  if (!info.id)
  {
    return res.status(400).json({
      error: "Missing id.",
    });
  }
  try
  {
    // Fetch the user from the db
    const id = info.id;
    doctor = await getDoctor(id);

    // Check if we found a patient
    if(!doctor._id)
    {
      // If not, error out
      return res.status(400).json({
        error: "Couldn't find doctor.",
      });
    }

    // If so, return the patient
    return res.status(200).json(doctor);
  }
  catch (err)
  {
    return res.status(500).json({
      error: "Error searching doctor." + " " + err,
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
  httpGetAllDoctors, httpAddDoctor, httpGetDoctorPatients, httpGetDoctorById
};
