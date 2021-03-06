
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image } from 'react-native';

import {openDrawer} from '../../actions/drawer';
import {popRoute} from '../../actions/route';

import {Container, Header, Title, Content, Button, Icon } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class BlankPage extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor:'#384850'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                        
                        <Title>Blank Page</Title>
                        
                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name="ios-menu" />
                        </Button>
                    </Header>

                    <Content padder style={{backgroundColor: 'transparent'}}>

                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(BlankPage);
