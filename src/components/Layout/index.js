import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;
const LeftPane = styled.div`
  flex-basis: 20rem;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  background-color: #0e131f;
`;

const RightPane = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SideMenu = styled.nav`
  padding: 1rem;

  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & ul li a {
    color: white;
    text-decoration: none;
  }

  & ul li a:hover {
    color: #ede5a6;
  }
`;

const TopMenu = styled.nav`
  display: flex;
  justify-content: flex-end;

  & > ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  & > ul li {
    padding: 1rem;
  }
`;

const Content = styled.div`
  padding: 1rem;
  flex-grow: 1;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <LeftPane>
        <SideMenu>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/backlog">Backlog</Link>
            </li>
            <li>
              <Link to="/board">Board</Link>
            </li>
          </ul>
        </SideMenu>
      </LeftPane>
      <RightPane>
        <TopMenu>
          <ul>
            <li>
              <Link to="/notifications" disabled>
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/profile" disabled>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/logout" disabled>
                Logout
              </Link>
            </li>
          </ul>
        </TopMenu>
        <Content>
          <Outlet />
        </Content>
      </RightPane>
    </LayoutContainer>
  );
};

export default Layout;
