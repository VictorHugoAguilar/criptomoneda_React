import React, { useState, useEffect } from "react";
import axios from "axios";

// Importamos imangen de fondo
import imagen from "./cryptomonedas.png";

// Importamos componentes
import Formulario from "./Components/Formularios";
import Spinner from "./Components/Spinner";
import Cotizacion from "./Components/Cotizacion";

//https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR

function App() {
    const [moneda, setMoneda] = useState("");
    const [criptomoneda, setCriptomenda] = useState("");
    const [cargando, setCargando] = useState(false);
    const [resultado, setResultado] = useState({});

    useEffect(() => {
        // si no hay moneda no se ejecutará
        if (moneda === "") return;

        const cotizarCriptomoneda = async () => {
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

            const resultado = await axios.get(url);

            //console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
            // Mostrar spinner
            setCargando(true);

            // cambiar despues de tres segundo el valor de cargando
            setTimeout(() => {
                setCargando(false);
                setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
            }, 3000);
        };
        cotizarCriptomoneda();
    }, [criptomoneda, moneda]);

    // Mostrar Spinner o resultado
    const componenteCargando = cargando ? (
        <Spinner />
    ) : (
        <Cotizacion resultado={resultado} />
    );

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
                    <h1>Cotizador Criptomonedas</h1>

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
