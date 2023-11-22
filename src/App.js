import * as S from './styles/App.styles';
import { AppRoutes } from './routes';
function App() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.StyLeGlobal />
                <AppRoutes />
            </S.Container>
        </S.Wrapper>
    );
}

export default App;
