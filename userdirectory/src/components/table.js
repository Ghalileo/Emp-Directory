import React from "react";

function Table() {
return (
    <table className="table">
        <thead>
            <tr>
                <th scope = "col">Name</th>
                <th scope = "col">Position</th>
                <th scope = "col">EmployeeNumber</th>
                <th scope = "col">email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Joseph Black</td>
                <td>Business Analyst</td>
                <td>033</td>
                <td>jblizzy@live.com</td>
            </tr>
            <tr>
                <td>Kanye East</td>
                <td>Engineer</td>
                <td>808</td>
                <td>themrkeast@gmail.com</td>
            </tr>
            <tr>
                <td>Prince Henry</td>
                <td>Manager</td>
                <td>001</td>
                <td>royalrumblehenry@gmail.com</td>
            </tr>
        </tbody>
    </table>
)
}

export default Table;