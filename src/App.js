import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api";

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState( {data: fetchedData});
    }

    render() {
        const { data } = this.state;
        return (
            // To make sure the styles don't clash
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;