import React, { Component } from 'react';
import MqttService from './src/core/services/MqttService';

import {
    Container,
    Title,
    Publisher,
    TextPublisher,
    Subscriber,
    TextSubscriber,
    PublicButton,
    TextButton,

} from './styles';

export default class App extends Component {

    state = {
        isConnected: false,
        message: 'Mensagem inicial',
    };

    componentDidMount() {
        console.log('try connected to mqtt');
         MqttService.connectClient(
         this.mqttSuccessHandler,
             this.mqttConnectionLostHandler
     );
 }

 onWORLD = message => {
     this.setState({
         message,
     });
 };

 mqttSuccessHandler = () => {
     console.log('connected to mqtt');

     MqttService.subscribe('WORLD', this.onWORLD);

     this.setState({
         isConnected: true,
     });
 };

 mqttConnectionLostHandler = () => {
     this.setState({
         isConnected: false,
     });
 };

 onPublish = () => {
     MqttService.publishMessage('TestPublish', 'Hello from the app');
   };


    render() {
        const { isConnected, message } = this.state;
        return (
         <Container>
            <Title>CLIENT MQTT</Title>
            <Publisher>
        <TextPublisher>Conexão: {!isConnected? 'Desconectado' :'Conectado'}</TextPublisher>
            </Publisher>
            <Subscriber>
        <TextSubscriber>Message: {message}</TextSubscriber>
            </Subscriber>

            <PublicButton onPress={this.onPublish}>
               <TextButton>Send</TextButton>
            </PublicButton>

        </Container>
        );
    }
}

/**
 *
 */
