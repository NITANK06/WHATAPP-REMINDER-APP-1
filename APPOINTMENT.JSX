 loadappointments();

 [];

return(
    <div>
        <h1>Appointment reminder

        </h1>
        <AppointmentForm onAppointmentCreated={loadappointments} />
        <AppointmentList appointments={appointments} />

    </div>
);


export default App;

