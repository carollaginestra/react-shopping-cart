import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

class Method extends React.Component {
    render() {
        return (
            <div className="container">
                <Header title="Select the payment method" />

                <div className="w-100">
                    <Link to="#" className="btn btn-primary btn-lg">
                        <i className="fas fa-barcode"></i> Payment slip
                    </Link>
                </div>

                <div className="w-100">
                    <Link to="/insert-card" className="btn btn-primary btn-lg">
                        <i className="far fa-credit-card"></i> Credit card
                    </Link>
                </div>



                <h2>Rules:</h2>
                <p>
                    ó, gerou o boleto é para pagar hein. se você gera o boleto e não paga,
                    você atrapalha a loja e fica impossibilitado de comprar novamente
                    com essa forma de pagamento. ai, ai, ai.
                </p>
                <p>
                    Apos finalizar, não será possível trocar a forma de pagamento.
                </p>

                <p>
                    Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar,
                    então é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro.
                    -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10 mil
                    por mês. -Dilma: O que que é R$10 mil?
                </p>

                <p>
                    A população ela precisa da Zona Franca de Manaus,
                    porque na Zona franca de Manaus, não é uma zona de exportação,
                    é uma zona para o Brasil. Portanto ela tem um objetivo,
                    ela evita o desmatamento, que é altamente lucravito.
                    Derrubar arvores da natureza é muito lucrativo!
                </p>

            </div>
        );

    }
}

export default Method;
