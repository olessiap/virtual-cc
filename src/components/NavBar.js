import React from 'react'

import { Link } from "react-router-dom"
import { Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/create">Create a Club</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/join">Join a Club</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="profile">Profile</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavBar