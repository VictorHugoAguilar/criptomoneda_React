import React from 'react';


function Formulario(){
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
                <select className="u-full-width"></select>
            </div>
        </form>

    );

}

export default Formulario;