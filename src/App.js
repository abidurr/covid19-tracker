import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api";

class App extends React.Component {

    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }

    render() {
        return (
            // To make sure the styles don't clash
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;