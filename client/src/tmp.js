<Router>
  <div>
    <ul>
      <li>
        <Link>Doctor:</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/patient">Patient</Link>
      </li>
      <li>
        <Link to="/patients">Patients</Link>
      </li>
    </ul>

    <ul>
      <li>
        <Link>Patient:</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/reports">Reports</Link>
      </li>
    </ul>

    <hr />

    {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
        */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </div>
</Router>;
