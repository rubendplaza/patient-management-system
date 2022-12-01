const { addPatient, getAllPatients, getPatient, updatePatient, getPatientsDoctor } = require("../../models/patients/patients.model");

async function httpGetAllPatients(req, res) {
  return res.status(200).json(await getAllPatients());
}

async function httpGetPatientById(req, res)
{
  // Get the id parameter from the http url
  id = req.params.patientid;
  // Check if the required field is present
  if (!id)
  {
    return res.status(400).json({
      error: "Missing id.",
    });
  }
  try
  {
    // Fetch the user from the db
    patient = await getPatient(id);

    // Check if we found a patient
    if(!patient._id)
    {
      // If not, error out
      return res.status(400).json({
        error: "Couldn't find patient.",
      });
    }

    // If so, return the patient
    return res.status(200).json(patient);
  }
  catch (err)
  {
    return res.status(500).json({
      error: "Error searching patient.\n" + err.message,
    });
  }
}

async function httpUpdatePatient(req, res)
{
  // Get the updated patient info
  patientUpdateInfo = req.body;
  // Check the patient info is valid
  if(!patientUpdateInfo._id)
  {
    return res.status(400).json({
      error: "Missing patient info.",
    });
  }

  // Try to update the patient
  try
  {
    // Try to update the user
    updatedPatient = await updatePatient(patientUpdateInfo);
    // Return the patient
    return res.status(200).json(updatedPatient);
  }
  catch (err)
  {
    return res.status(500).json({
      error: "Error updating patient.\n" + err.message,
    });
  }
}

async function httpGetPatientsDoctor(req, res)
{
  // Get the patient info
  patient = await getPatient(req.params.patientid);
  // Check the patient info is valid
  if(!patient._id)
  {
    return res.status(400).json({
      error: "No patient with that ID.",
    });
  }

  if(!patient.doctorId)
  {
    return res.status(400).json({
      error: "Patient has no doctor.",
    });
  }

  // Try to get the patient's doctor
  try
  {
    // Try to get the doctor
    patientsDoctor = await getPatientsDoctor(patient);
    // Return the doctor
    return res.status(200).json(patientsDoctor);
  }
  catch (err)
  {
    return res.status(500).json({
      error: "Error getting the doctor.\n" + err.message,
    });
  }
}

module.exports = {
  httpGetAllPatients,
  httpGetPatientById,
  httpUpdatePatient,
  httpGetPatientsDoctor
};
