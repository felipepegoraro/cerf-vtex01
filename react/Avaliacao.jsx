const divAva = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFCFC',
    boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
    margin: '0px 10px 15px 10px',
    padding: '30px',
    borderRadius: '9px',
    width: '420px',
    maxWidth: '420px',
    height: '320px',
    maxHeight: '320px'
};

const dateAva = {
    fontFamily: 'Ubuntu',
    fontSize: '12px',
    fontStyle: 'italic',
    fontWeight: '400',
    lineHeight: '25px',
    letterSpacing: '0em',
    margin: '1px'
}

const nameAva = {
    fontFamily: 'Ubuntu',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '25px',
    letterSpacing: '0em',
    textAlign: 'center',
    margin: '1px'
}

// import React from 'react';
const Avaliacao = (props) => {
    const src = props.src || 'Not-Found'
    const name = props.username || 'Usuario'
    const date = props.date || '01/01/2001'

    return (
        <div style={divAva} className="avaliacao">
            <img className="imgProduto" src={src} alt="produto da avaliacao" />
            <p className="textoAvaliacao">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem in temporibus neque iusto. Eius sit error laboriosam
                eaque eos saepe culpa enim accusantium nobis, quia totam,
                delectus incidunt optio architecto!
            </p>
            <p style={nameAva} className="p_username">{name}</p>
            <p style={dateAva} className="p_date">{date}</p>
        </div>
    )
}

Avaliacao.schema = {
    title: 'Avaliação',
    description: 'Componente custom de avaliação',
    type: 'object',
    properties: {
        fonte: {
            type: 'string', 
            fonte: 'src'
        },
        user: {
            type: 'string',
            user: 'username'
        },
        data: {
            type: 'string',
            data: 'date'
        }
    }
}

export default Avaliacao