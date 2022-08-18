import Footer from "./components/footer/footer.component";
import Visualization from "./components/visualization-container/visualization-container";
import GlobalStyle from "./theme/global-styles.styles";

function App() {
	return (
		<>
			<GlobalStyle />
			<Visualization />
			<Footer />
		</>
	);
}

export default App;
