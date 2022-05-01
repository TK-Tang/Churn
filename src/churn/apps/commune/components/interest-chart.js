import { React } from "react";
import { Input, Label, Menu, Segment } from "semantic-ui-react";
import CanvasJSReact from '../../../../canvasjs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function InterestChart(props) {
    var data = props.data;

    let options = {
        title: {
            text: "Basic Column Chart"
        },
        data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Apple",  y: 10  },
                    { label: "Orange", y: 15  },
                    { label: "Banana", y: 25  },
                    { label: "Mango",  y: 30  },
                    { label: "Grape",  y: 28  }
                ]
            }
        ]
    }
     
    return  <Segment
                color={"red"}
                className="home-segment"
            >
                <Label as="a" color="yellow" ribbon>Total Interest Paid</Label>
                <Menu pointing>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Segment>
                    <CanvasJSChart options = {options} />
                </Segment>
            </Segment>
}

export default InterestChart;