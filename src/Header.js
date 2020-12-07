import React, { useContext } from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { handleSearchContext, setUserSearchContext, userSearchContext } from './UserInput'

function Header() {

    const handleSearch = useContext(handleSearchContext)
    const userSearch = useContext(userSearchContext)
    const setUserSearch = useContext(setUserSearchContext)

    return (
        <>
           <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">MOV-E</Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
                    <Nav.Link href="#about" className="mx-3">About</Nav.Link>
                    <Nav.Link href="#contact" className="mx-3">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" 
                        onChange={(e) => setUserSearch(e.target.value)}
                        value={userSearch}
                    />
                    <Button 
                        variant="outline-info" 
                        onClick={handleSearch}>Search</Button>
                </Form>
            </Navbar>
            <br></br>
            <br></br> 
        </>
    )
}

export default Header
