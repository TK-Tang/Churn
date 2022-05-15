import { Label, List, Segment, Divider, Grid } from "semantic-ui-react";

function LinksAndInfo() {
    return  <Segment
                color={"violet"}
                className="home-segment"
                style={main_css}
            >
                <Label as="a" color="violet" ribbon>External Links</Label>

                <Divider/>

                <Grid >
                    <Grid.Column width={8}>
                        <List>
                            <List.Item>
                                <List.Icon name="users" />
                                <List.Content>
                                    <a href="https://en.wikipedia.org/wiki/Intentional_community">Wikipedia Article: Intentional Community</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="bed" />
                                <List.Content>
                                    <a href="https://en.wikipedia.org/wiki/Co-living">Wikipedia Article: Co-Living</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="money bill alternate" />
                                <List.Content>
                                    <a href="https://en.wikipedia.org/wiki/Mortgage_loan">Wikipedia Article: Mortgage Loan</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="reddit" />
                                <List.Content>
                                    <a href="https://www.reddit.com/r/AusFinance/">Reddit: /r/AusFinance</a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <List>
                            <List.Item>
                                <List.Icon name="laptop" />
                                <List.Content>
                                    <a href="https://reactjs.org/docs/getting-started.html">ReactJS Official Documentation: Getting Started</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="area graph" />
                                <List.Content>
                                    <a href="https://canvasjs.com/">CanvasJS Site: Used for the graphs</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="book" />
                                <List.Content>
                                    <a href="https://react.semantic-ui.com/">Semantic UI React: Official Site</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="youtube" />
                                <List.Content>
                                    <a href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA">Fireship: Great YouTube Channel</a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
                
               
            </Segment>;
}


const main_css = {
    height: "260px"
}


export default LinksAndInfo;