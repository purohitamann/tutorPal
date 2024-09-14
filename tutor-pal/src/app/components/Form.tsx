import React from 'react'

export default function Form() {
    return (
        <table className="form">
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="student-name">Student Name</label>
                    </td>
                    <td>
                        <input type="text" id="student-name" name="student-name" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="student-email">Student Email</label>
                    </td>
                    <td>
                        <input type="email" id="student-email" name="student-email" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="student-id">Student ID</label>
                    </td>
                    <td>
                        <input type="text" id="student-id" name="student-id" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="course">Course</label>
                    </td>
                    <td>
                        <input type="text" id="course" name="course" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="course-level">Course Level</label>
                    </td>
                    <td>
                        <input type="text" id="course-level" name="course-level" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="course-type">Course Type</label>
                    </td>
                    <td>
                        <input type="text" id="course-type" name="course-type" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="date">Session Date</label>
                    </td>
                    <td>
                        <input type="date" id="date" name="date" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="comment">Comment</label>
                    </td>
                    <td>
                        <input type="text" id="comment" name="comment" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="session-type">Session Type</label>
                    </td>
                    <td>
                        <input type="text" id="session-type" name="session-type" />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
