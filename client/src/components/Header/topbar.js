import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import { withRouter, Link } from 'react-router-dom'

const TopBar = props => {
  const pathname = props.location.pathname

  const twitterUrl = '#'
  const facebookUrl = '#'
  const githubUrl = '#'
  const linkedInUrl = '#'

  return (
    <Navbar fluid className="topbar">
      <ul className="social-list list-unstyled list-inline">
        <li className="list-inline-item">
          <a href={twitterUrl} target="_blank">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href={facebookUrl} target="_blank">
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href={githubUrl} target="_blank">
            <i className="fa fa-github-alt" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href={linkedInUrl} target="_blank">
            <i className="fa fa-linkedin" />
          </a>
        </li>
      </ul>
      <Navbar.Toggle />
      <Navbar.Collapse className="pull-right">
        <Nav>
          <NavItem
            componentClass={Link}
            href="/"
            to="/"
            active={pathname === '/'}
          >
            About Me
          </NavItem>
          <NavItem
            componentClass={Link}
            href="/blog"
            to="/blog"
            active={pathname === '/blog'}
          >
            Blog
          </NavItem>
          <NavItem
            componentClass={Link}
            href="/projets"
            to="/projects"
            active={pathname === '/projects'}
          >
            My Project
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(TopBar)
