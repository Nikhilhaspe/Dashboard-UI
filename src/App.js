import Header from "./components/Header/Header.component";
import LeftContainer from "./containers/LeftContainer/LeftContainer.component";
import RightContainer from "./containers/RightContainer/RightContainer.component";
import MiddleContainer from "./containers/MiddleContainer/MiddleContainer.component";
import { Container } from "./App.styles";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <LeftContainer />
        <div id="vertical_seprator" />
        <MiddleContainer />
        <RightContainer />
      </Container>
    </div>
  );
}

export default App;
