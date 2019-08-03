import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Importamos componentes
import Criptomoneda from './Criptomoneda';


function Formulario(){
    
    const [criptomonedas, setCriptomonedas] = useState([]);

    useEffect(()=> {
  
      const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD'
  
        const resultado = await axios.get(url);
  
        setCriptomonedas(resultado.data.Data);
      }
      consultarAPI();
  
      console.log(criptomonedas);
    }, []);

    return (

        <form>
            <div className="row">
                <label>Elige tu Moneda</label>
                <select className="u-full-width"> 
                    <option value="">Elige tu moneda</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="GBP">Libra</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>
            <div className="row">
                <label>Elige tu criptomoneda</label>
                <select className="u-full-width">
                    {criptomonedas.map(
                        cripto => (
                            <Criptomoneda 
                                key={cripto.CoinInfo.Id}
                                criptomoneda={cripto}
                            />
                        )
                    )}
                </select>
            </div>
        </form>

    );

}

export default Formulario;