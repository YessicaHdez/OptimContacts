import Button from 'react-bootstrap/Button'

export default function Contact(props){

    return ( 
        <tr>
            <td> <img src={props.image}alt="" width="80" height="80" /></td>
            <td>{props.name}</td>
            <td>{props.address}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td><Button variant="warning">Edit</Button>{' '}</td>
            <td><Button variant="danger">Remove</Button> </td>
        </tr>
    )
}