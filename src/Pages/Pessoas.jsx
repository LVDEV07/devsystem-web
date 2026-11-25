import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Pessoas() {

    const [pessoas, setPessoas] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/pessoas").then((res) => {
            setPessoas(res.data)
        })
    }, [])

    useEffect(() => {

    }, [pessoas])

    return (
        <main className='container pessoas'>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                    </tr>
                </thead>

                <tbody>

                    {pessoas.map((pessoa) => (

                        <tr>
                            <td>{pessoa.id} </td>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.email}</td>
                            <td>{pessoa.telefone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </main>


    )
}
