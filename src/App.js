import React, { useState, useEffect } from "react";
import axios from "axios";

// Importamos imangen de fondo
import imagen from "./cryptomonedas.png";

// Importamos componentes
import Formulario from "./Components/Formularios";
import Spinner from "./Components/Spinner";

//https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR

function App() {
    const [moneda, setMoneda] = useState("");
    const [criptomoneda, setCriptomenda] = useState("");
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        // si no hay moneda no se ejecutará
        if (moneda === "") return;

        const cotizarCriptomoneda = async () => {
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

            const resultado = await axios.get(url);

            console.log(resultado);

            setCargando(true);

            // cambiar despues de tres segundo el valor de cargando
            setTimeout(() => {
              setCargando(false)
            }, 3000);
        };
        cotizarCriptomoneda();
    }, [criptomoneda, moneda]);

    // Mostrar Spinner o resultado
    const componenteCargando = (cargando)? <Spinner />:null;

    return (
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <img
                        src={imagen}
                        alt="Imagen de fondo"
                        className="logotipo"
                    />
                </div>
                <div className="one-half column">
                    <h1>Cotiza Criptomenedas al Instante</h1>

                    <Formulario
                        setMoneda={setMoneda}
                        setCriptomenda={setCriptomenda}
                    />
                    {componenteCargando}
                </div>
            </div>
        </div>
    );
}

export default App;
