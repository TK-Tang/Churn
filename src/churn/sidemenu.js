import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function LeftSideBar() {
    const history = useNavigate();

    return (
        <Sidebar as={Menu} 
            direction="left" 
            icon="labeled" 
            width="thin" 
            inverted 
            vertical 
            visible={true}
            className="sidemenu"
        >
            <Menu.Item as="a" onClick={() => history("/")}>
                <Icon name="sitemap"/>
                Home
            </Menu.Item>
            <Menu.Item as="a" onClick={() => history("/commune")}>
                <Icon name="home"/>
                Commune
            </Menu.Item>
            <Menu.Item as="a" onClick={() => history("/compound")}>
                <Icon name="chart line"/>
                Compound
            </Menu.Item>
        </Sidebar>
    );
}

export default LeftSideBar;