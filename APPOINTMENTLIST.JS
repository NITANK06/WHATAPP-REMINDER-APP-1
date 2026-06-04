export default function AppointmentList() {
    AppointmentList,
}{
return (
    <table>
        <thead>
            <tr>
                <th>Appointment Time</th>
                <th>Patient Name</th>
                <th>Doctor Name</th>
            </tr>
        </thead>
        <tbody>
            {/* Appointment rows will be rendered here */}
        </tbody>
    </table>
);
}
{
    AppointmentList.map( (a) => (
        <tr key={a._id}>
            <td>{new Date(a.appointmentTime).toLocaleString()}</td>
            <td>{a.customerName}</td>
            <td>{a.doctorName}</td>
        </tr>
    ))
    {
        new Date(a.appointmentTime).toLocaleString()
    }
    
    
}
