import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
/* const url = 'https://guajolotasejercicio.herokuapp.com/bebidas'
 */

const DivMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
`

const A = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #9A9A9D;
    font-size: 17px;
    font-family: 'Inter';
    line-height: 21px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover {
        color: rgba(250, 74, 12, 1);
        text-decoration: underline;
    }
`

const Card = styled.div`
    width: 90%;
    height: 112px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 7px auto;
`

export const Lista =  () => { 

    

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = (categoria = 'bebidas') => {
        /* const tipo = 'tamales' */
        const url = `https://guajolotasejercicio.herokuapp.com/${categoria}`
        axios.get(url)
        .then(response => {
            setProducto(response.data)
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })


    

    }
    /* console.log(producto) */
    return (
        <div className="mt-4">
            <DivMenu className="mt-4">
                <A onClick={() => getData('guajolotas')}>Guajolotas</A>
                <A onClick={() => getData('bebidas')}>Bebidas</A>
                <A onClick={() => getData('tamales')}>Tamales</A>
            </DivMenu>
            <div className="mt-4 altura" >
                {
                producto.map(p => (
                    <Card key={p.id}>
                        <div className="me-4">
                            <img src={p.imagen} width="80px"  alt=""/>
                        </div>
                        <div className="d-flex flex-column my-auto">
                            <span className="inter" style={{fontSize: "17px"}}>{p.product}</span>
                            <span className="inter mt-1" style={{fontSize: "14px", color: "rgba(250, 74, 12, 1)"}}>${p.precio} MXN</span>
                        </div>

                    </Card>
                    ))
                
                }
                
            </div>
        </div>
    )
};

