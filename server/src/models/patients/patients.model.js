const { mongoConnect, mongoDisconnect } = require("../../services/mongo");
const patients = require("./patients.mongo");

// IMPLEMENT REQUIRED METHODS HERE

async function addPatient(patient) {
  return await patients.create(patient);
}

// Unfinished functions trying to add data to the mongodb

/* async function savePatient(patient)
{
  try
  {
    await patients.updateOne(
      { name: patient.name },
      {     
        img: patient.img,
        name: patient.name,
        sex: patient.sex,
        age: patient.age,
        bloodType: patient.bloodType,
        knownIllnesses: patient.knownillnesses,
        reports: patient.reports
      },
      { upsert: true }
    );
  }
  catch (err)
  {
    console.error("Could not save patient", err);
  }
} */

/* function loadTestPatientInfo()
{
  const testPatient1Info = {
    img: "/Images/JaneDoe.png",
    name: "Jane Doe",
    sex: "Female",
    age: 21,
    bloodType: "A+",
    knownIllnesses: ["Peanut Allergy", "Test Illness 2"],
    upcomingAppointments: [{
      location: "Women's Hospital",
      purpose: "Ultrasound",
      date: "Thursday, October 5, 2022, 5:00PM"
    }, {
      location: "Scarborough General Hospital",
      purpose: "X-ray",
      date: "Sunday, October 21, 2022, 6:00PM"
    }],
    reports: [{
      type: "Blood Test",
      date: "October 4, 2022",
      notes: "All clear",
      pdf: "placeholder"
    }, {
      type: "Covid-19",
      date: "September 2, 2022",
      notes: "Negative",
      pdf: "placeholder"
    }]
  }
  
  savePatient(testPatient1Info);
} */

async function getAllPatients() {
  return await patients.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function testing() {
  await mongoConnect();
  await loadTestPatientInfo();
  await mongoDisconnect();
}

module.exports = {
  getAllPatients,
  addPatient,
};
