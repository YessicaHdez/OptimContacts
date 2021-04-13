import Table from 'react-bootstrap/Table'
import Contact from './Contact'
import img1 from '../img/perro-feliz.jpg'
import img2 from '../img/perro2.jpg'
import img3 from '../img/perro3.jpg'

export default function ContactList(props){

return (
    <Table striped bordered hover>
    <thead>
        <tr>
        <th></th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        <Contact image={img1} name = "Persona 1" address = "somewhere" email="anonimo@anomimus.com" phone="6135156667" ></Contact>
        <Contact image={img2} name = "Jack" address = "Mexico" email="jack@gmail.com" phone="6141234567" ></Contact>
        <Contact image={img3} name = "carlos" address = "chihuahua" email="yo@hotmail.com" phone="6141234567" ></Contact>
    </tbody>
    </Table> 
) }