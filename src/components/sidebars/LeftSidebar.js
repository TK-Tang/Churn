import React from "react";
import {Sidebar, Menu, Icon} from "semantic-ui-react";

function LeftSideBar(props) {
    return (
        <Sidebar as={Menu} 
            direction="left" 
            icon="labeled" 
            width="thin" 
            inverted 
            vertical 
            visible={true}
        >
            <Menu.Item as="a" onClick={() => props.setAppDisplayed("/")}>
                <Icon name="sitemap"/>
                Home
            </Menu.Item>
            <Menu.Item as="a" onClick={() => props.setAppDisplayed("/commune")}>
                <Icon name="home"/>
                Commune
            </Menu.Item>
            <Menu.Item as="a" onClick={() => props.setAppDisplayed("/compound")}>
                <Icon name="chart line"/>
                Compound
            </Menu.Item>
        </Sidebar>
    );
}

export default LeftSideBar;