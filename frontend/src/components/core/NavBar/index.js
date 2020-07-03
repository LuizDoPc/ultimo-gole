import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChartLine,
  faListAlt,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from './StyledSideNav';

const navWidthCollapsed = 64;
const navWidthExpanded = 280;

const NavHeader = styled.div`
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  white-space: nowrap;
  background-color: #ffcc28;
  color: #fff;
  > * {
    color: inherit;
    background-color: inherit;
  }
`;

// height: 20px + 10px + 10px = 40px
const NavTitle = styled.div`
  font-size: 2em;
  line-height: 20px;
  padding: 10px 0;
`;

// height: 20px + 4px = 24px;
const NavSubTitle = styled.div`
  font-size: 1em;
  line-height: 20px;
  padding-bottom: 4px;
`;

const NavInfoPane = styled.div`
  float: left;
  width: 100%;
  padding: 10px 20px;
  background-color: #eee;
`;

const Separator = styled.div`
  clear: both;
  position: relative;
  margin: 0.8rem 0;
  background-color: #ddd;
  height: 1px;
`;

const Main = styled.main`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: ${navWidthCollapsed}px;
  overflow: hidden;
  transition: all 0.15s;
  padding: 0 20px;
  background: ${(props) => (props.expanded ? 'rgba(0, 0, 0, .6)' : 'inherit')};
  transition: background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavBar = () => {
  const [selected, setSelected] = useState('/');
  const [expanded, setExpanded] = useState(false);

  const lastUpdateTime = new Date().toISOString();

  const onSelect = (newSelected) => {
    setSelected(newSelected);
    history.push(newSelected);
  };
  const onToggle = (newExpanded) => {
    setExpanded(newExpanded);
  };

  const history = useHistory();

  return (
    <div>
      <SideNav
        style={{ minWidth: expanded ? navWidthExpanded : navWidthCollapsed }}
        onSelect={onSelect}
        onToggle={onToggle}
      >
        <Toggle />
        <NavHeader expanded={expanded}>
          <NavTitle style={{ fontSize: 20 }}>República Último Gole</NavTitle>
          <NavSubTitle>Gestão Interna</NavSubTitle>
        </NavHeader>
        {expanded && (
          <NavInfoPane>
            <div>Time: {lastUpdateTime}</div>
            <div>User: admin</div>
          </NavInfoPane>
        )}
        <Nav defaultSelected={selected}>
          <NavItem eventKey='/'>
            <NavIcon>
              <FontAwesomeIcon icon={faHome} />
            </NavIcon>
            <NavText style={{ paddingRight: 32 }} title='HOME'>
              HOME
            </NavText>
          </NavItem>
          <NavItem eventKey='/rh'>
            <NavIcon>
              <FontAwesomeIcon icon={faChartLine} />
            </NavIcon>
            <NavText style={{ paddingRight: 32 }} title='DEVICES'>
              RH
            </NavText>
          </NavItem>
          <NavItem eventKey='/financeiro'>
            <NavIcon>
              <FontAwesomeIcon icon={faListAlt} />
            </NavIcon>
            <NavText style={{ paddingRight: 32 }} title='REPORTS'>
              FINANCEIRO
            </NavText>
          </NavItem>
          <Separator />
          <NavItem eventKey='logout'>
            <NavIcon>
              <FontAwesomeIcon icon={faPowerOff} />
            </NavIcon>
            <NavText style={{ paddingRight: 32 }} title='SIGN OUT'>
              SIGN OUT
            </NavText>
          </NavItem>
        </Nav>
      </SideNav>
    </div>
  );
};

export default NavBar;
