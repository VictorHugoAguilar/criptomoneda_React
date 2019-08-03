import React, { useState, useEffect } from "react";
import axios from "axios";

// Importamos componentes
import Criptomoneda from "./Criptomoneda";
import Error from "./Error";

function Formulario(props) {

    const {setMoneda, setCriptomenda} = props;

    const [criptomonedas, setCriptomonedas] = useState([]);
    const [monedaCotizar, setMonedaCotizar] = useState("");
    const [criptoCotizar, setCriptoCotizar] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const consultarAPI = async () => {
            const url =
                'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);
            
            // colocar respuesta en el state
            setCriptomonedas(resultado.data.Data);
        };
        consultarAPI();

        // console.log(criptomonedas);
    }, []);

    // Validar que el usuario llene ambos campos
    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar si ambos campos estan lleno
        if (monedaCotizar === "" || criptoCotizar === "") {
            setError(true);
            return;
        }
        setError(false);

        // pasar los datos al componente principal
        setMoneda(monedaCotizar);
        setCriptomenda(criptoCotizar);
    };

    //mostrar el error en caso de que exista
    const componenteError = error ? (
        <Error mensaje="Ambos campos son obligatorios" />
    ) : null;

    return (
        <form onSubmit={cotizarMoneda}>
            {componenteError}
            <div className="row">
                <label>Elige tu Moneda</label>
                <select
                    className="u-full-width"
                    onChange={e => setMonedaCotizar(e.target.value)}
                >
                    <option value=""> -- Elige tu moneda -- </option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="GBP">Libra</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>
            <div className="row">
                <label>Elige tu criptomoneda</label>
                <select
                    className="u-full-width"
                    onChange={e => setCriptoCotizar(e.target.value)}
                >
                    <option value=""> -- Elige tu criptomoneda -- </option>
                    {criptomonedas.map(cripto => (
                        <Criptomoneda
                            key={cripto.CoinInfo.Id}
                            criptomoneda={cripto}
                        />
                    ))}
                </select>
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Calcular"
            />
        </form>
    );
}

export default Formulario;
