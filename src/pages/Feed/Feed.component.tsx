import { Card } from '../../components/Card/Card.component';
import { Header } from '../../components/Header/Header.component';
import { UserInfo } from '../../components/UserInfo/UserInfo.component';
import { Container, Column, Title, TitleHighlight } from './Feed.style';

export default function Feed() {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                    <UserInfo nome='Pablo Henrique' image='https://avatars.githubusercontent.com/u/45184516?v=' percentual={25} />
                    <UserInfo nome='Pablo Henrique' image='https://avatars.githubusercontent.com/u/45184516?v=' percentual={65} />
                    <UserInfo nome='Pablo Henrique' image='https://avatars.githubusercontent.com/u/45184516?v=' percentual={45} />
                    <UserInfo nome='Pablo Henrique' image='https://avatars.githubusercontent.com/u/45184516?v=' percentual={72} />
                </Column>
            </Container>
        </>
    );
}
