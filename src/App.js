import React from 'react';
import Card from "./components/Card";
import CreateCar from "./components/CreateCar";
import CardItem from "./components/CardItem";
import {useSelector} from "react-redux";
import Spinner from "./components/Spinner";

function App() {
    const cars = useSelector((state) => state.cars);
    const loading = useSelector((state) => state.loading);
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="navbar-brand">
                    Redux Hooks
                </div>
            </nav>
            <div className="container p-3">
                <div className="row">
                    <div className="col-md-8">
                        <CreateCar/>
                        <div className="row justify-center">
                            {
                                loading ?
                                    <Spinner/>
                                    :
                                    cars.map(car => <Card key={car.id} car={car}/>)
                            }
                        </div>


                    </div>
                    <div className="col-md-4 bg-white">
                        <div className="container cart">
                            {cars.map(car => car.added ? <CardItem key={car.id} car={car}/> : null)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
