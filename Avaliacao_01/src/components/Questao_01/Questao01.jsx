import { useEffect, useState } from "react";

function Questao01X() {
    const alunos = [
        {nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4}},
        {nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5}},
        {nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2}},
    ];

    // Recebe o retorno do elemento filho e printa os nomes dos alunos com média maior ou igual a 7:
    const receberRetorno = (med) => {
        return (
            <>
                {
                    med.forEach(elem => {
                        return (<p>{elem.nome}</p>)
                    })
                }
            </>
        );
    }

    return (
        <div>
            <h3>Questao01X</h3>
            <Questao01Y 
                alunos={alunos}
                retorno={receberRetorno}
            />
            {receberRetorno}
        </div>
    );
}

const Questao01Y = ({alunos, retorno}) => {
    const[medias, setMedias] = useState([])

    // Calcula a média dos dados recebido pela prop 'alunos' e armazena essas médias no estado 'medias' que consiste em um array, junto com o nome de cada aluno.
    useEffect(() => {
        alunos.forEach(elem => {
            const media = (elem.notas.ap1 + elem.notas.ap2)/2.0
            setMedias(prev => prev.concat({nome: elem.nome, media: media}))
        })
    }, []);

    const retornar = () => {
        retorno(medias.slice(0,3)) // Retorna um array de 3 posições contendo a média para o elemento pai.
    }

    
    retornar();
    return (
        <>
            <h3>Questao01Y</h3> 
        </>
    )
}

export default Questao01X;