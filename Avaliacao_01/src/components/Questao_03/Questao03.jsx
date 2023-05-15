import { useEffect, useState } from "react";

const Questao03 = () => {
    
    const[maior, setMaior] = useState('');
    const[menor, setMenor] = useState('');

    useEffect(() => {
        pegarDados()  // Chama a fução que conecta à API e recupera os dados
    }, []);

    async function pegarDados() {
        const data = await fetch('https://restcountries.com/v3.1/region/europe?fields=capital,population')
                .then(res => res.json())
                .then(data => {
                    let maiorPop = [0, 0]
                    let menorPop = [999999999999999, 0]

                    data.forEach((country, index) => {

                        // Para cada capital, verifique se sua população é a maior ou a menor no conjunto de dados:
                        if (country.population > maiorPop[0]) {
                            maiorPop[0] = country.population
                            maiorPop[1] = index
                        }
                        if (country.population < menorPop[0]) {
                            menorPop[0] = country.population
                            menorPop[1] = index
                        }

                    })

                    // Retorna um array com duas posições:
                        // Posição 0: Contém o nome da capital com a maior população
                        // Posição 1: Contém o nome da capital com a menor população
                    return [data[maiorPop[1]].capital[0], data[menorPop[1]].capital[0]]
                })
                .catch(err => console.log(err));
        
        setMaior(data[0]) // Set do nome da capital de maior população no estado correspondente
        setMenor(data[1]) // Set do nome da capital de menor população no estado correspondente
        return data
    }

    
    return (
        <div>
            <p>Maior população: {maior}</p>
            <p>Menor população: {menor}</p>
        </div>
    );
}

export default Questao03;