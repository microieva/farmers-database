import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/store";
import App from "./js/components/App";
import style from "./styles/styles.css"

ReactDOM.render(
		<Provider store={store}>
				<App style={style}/>
		</Provider>,
		document.getElementById("root")
);
