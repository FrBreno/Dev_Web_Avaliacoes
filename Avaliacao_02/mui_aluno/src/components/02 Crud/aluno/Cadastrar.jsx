import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CadastrarAluno = () => {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState("0.0");
    
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const newAluno = {nome, curso, ira};
        fetch('http://localhost:3001/alunos/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAluno),
        })
        .then(res => {
            console.log('Aluno Cadastrado!');
            navigate('/listar-aluno');
        })
        .catch(error => console.log('Erro ao cadastrar novo aluno!', error));
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Aluno
            </Typography>
            <Box
                sx={{width: "80%"}}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"
                    id="nome"
                    name="nome"
                    onChange={(event) => setNome(event.target.value)}
                    />
                <TextField 
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"
                    id="curso"
                    name="curso"
                    onChange={(event) => setCurso(event.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    label="IRA"
                    name="ira"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}
                    onChange={(e) =>setIra(parseFloat(e.target.value))}
                />
                <Box sx={{display: "flex", justifyContent: "center", mt: 2}}>
                    <Button type="submit" variant="contained">
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default CadastrarAluno;