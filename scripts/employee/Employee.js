const Employee = (employeeObject) => {
    return `
        <section>
            <article>
                <p>${employeeObject.id}</p>
                <p>First Name: ${employeeObject.firstName}</p>
                <p>Last Name: ${employeeObject.lastName}</p>
                <p>Job: ${employeeObject.jobTitle}</p>
                <p>Schuduled Hours: ${employeeObject.hoursScheduled}</p>
            </article>
        </section>
    `
}


export default Employee