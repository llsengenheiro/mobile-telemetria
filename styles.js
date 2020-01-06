import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #fff;

    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #03f;
    margin-bottom: 35px;
`;

export const Publisher = styled.View`
    background: #666;
    width: 200;
    height: 200;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const TextPublisher = styled.Text`
    font-size: 15px;
    color: #FFF;
`;

export const Subscriber = styled.View`
    background: #666;
    width: 200;
    height: 200;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const TextSubscriber = styled.Text`
    font-size: 15px;
    color: #FFF;
`;

export const PublicButton = styled.TouchableOpacity`
    padding: 10px;
    background-color: #03f;
`;

export const TextButton = styled.Text`
    font-size: 15px;
    color: #0ab;
`;
