import { useState, useEffect } from "react";

const DisplayData = ({data}) => {
    const [values, setValues] = useState([]);
    useEffect(() => {
        let items = [...data];
        if(items.length > 0) {
            let val = items.sort((a, b) => a.lastName.localeCompare(b.lastName));
            setValues(val);
            
        }
    }, [data]);
    console.log('values', values);
    return (
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {values.map((item, idx) => (
                <tr key={idx}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
            </tbody>  
 
        </table>
    )
}

export default DisplayData;
