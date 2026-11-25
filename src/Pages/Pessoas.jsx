import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Styles/Pessoas.scss'

export default function Pessoas() {

    const [pessoas, setPessoas] = useState([])
    const [pagina, setPagina] = useState(1)

    useEffect(() => {
        axios.get("http://localhost:3000/pessoas").then((res) => {
            setPessoas(res.data)
        })
    }, [])

    useEffect(() => {

    }, [pessoas])

    const itensPorPagina = 4

    const inicio = (pagina - 1) * itensPorPagina

    const fim = inicio + itensPorPagina

    const pessoasPagina = pessoas.slice(inicio,fim)

    const totalPagina = Math.ceil(pessoas.length/ itensPorPagina)




    return (
        <main className='container pessoas'>


            <h1>Lista de pessoas</h1>
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

                    {pessoasPagina.map(({ id, nome, email, telefone }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{nome}</td>
                            <td>{email}</td>
                            <td>{telefone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <section>
                <button onClick={() => setPagina(pagina - 1)}
                    disabled={pagina === 1}
                    >Anterior</button>

                <span>
                    {" "}
                    {pagina} de {totalPagina} {""}
                </span>

                <button onClick={() => setPagina(pagina + 1)}
                     disabled={pagina === totalPagina}
                    >Próximo</button>


            </section>

        </main>


    )
}
