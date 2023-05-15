import { useState } from "react";

const Questao02 = () => {
    const[turn, setTurn] = useState(true);

    // A função girarPokemon faz a troca do valor do estado 'trun'.
    const girarPokemon = () => {
        if (turn) {
            setTurn(false)
        }
        else {
            setTurn(true)
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', width:'200px', alignItems:'center'}}>
            {
                // O operador ternário abaixo renderiza a imagem correspondente ao valor de 'turn'
                    // true -> Imagem frontal
                    // false -> Imagem traseira 
                turn ? 
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="pokemon" />
                    :
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png" alt="pokemon" />
            }
            {
                // A cada click, o a função 'girarPokemon' é chamada para atualizar o valor da variável estado
            }
            <button onClick={girarPokemon}>Girar Pokemon</button>
        </div>
    );
}

export default Questao02;