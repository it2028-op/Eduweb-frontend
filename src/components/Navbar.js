import React from 'react';
import { Nav, Container, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from '../utils/queries';


export const Navline = () => {
    const { loading, error } = useQuery(CATEGORIES)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/category">Hledání pomocí kategorií</Nav.Link>
                <Nav.Link href="/animal-card">Seznam článků</Nav.Link>
                <NavDropdown title="Dokumenty" id="collasible-nav-dropdown">
                    Not yet
                </NavDropdown>
                </Nav>
                <Form action="/animal-card" className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Hledej"
                        className="me-2"
                        aria-label="Search"
                        name="search"
                    />
                    <Button type="submit" variant="outline-warning"
                        onSubmit={(e) => { console.log('pokus') } }
                    >
                        Hledej
                    </Button>
                </Form>                
            </Navbar.Collapse>
        </Container>
        </Navbar>        
    );
}