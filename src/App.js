import Header from "./components/Header/Header.component";
import { Container } from "./App.styles";
import LeftContainer from "./containers/LeftContainer/LeftContainer.component";
import RightContainer from "./containers/RightContainer/RightContainer.component";
import MiddleContainer from "./containers/MiddleContainer/MiddleContainer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <LeftContainer />
        <MiddleContainer />
        <RightContainer />
      </Container>
    </div>
  );
}

export default App;
