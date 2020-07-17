import React, {Component} from 'react';
import {  Container,  Header,  Title,  Content,    Button,    Right,  Body,  Icon,  Text,  ListItem,    input } from 'native-base';

let helperArray= require('./prodList.json');

export default class App extends Component {
  constructor(props)
  {
    supar(props);
    this.state={
      allUsers: helperArray,
      usersFiltered: helperArray,
    };
  }
  searchUser(textTosearch) {
    this.setState({
      usersFiltered: this.state.allUsers.filter(i =>
        i.name.toLowerCase().includes(textTosearch.toLowerCase()),
        ),
    });
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="search" />
            <input 
            placeholder="search User" 
            onChangeText={text => {
              this.searchUser(text);
            } }
            />
          </Item>
        </Header>
        <Content>
          {this.state.usersFiltered.map((item,index) => (
          
          <ListItem avatar>
            {/* <Left>
              <Thumbnail source={{uri: 'item.image'}} />
            </Left> */}
            <Body>
              <Text>{item.name} </Text>
              <Text note>{item.shop}</Text>                
            </Body>                       
          </ListItem>      
          ))} 

          

        </Content>
        
      </Container>
    );
  }
}


















































