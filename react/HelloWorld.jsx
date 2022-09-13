// import React from 'react';

// component
const HelloWorld = (props) => {
    const { title } = props;
    return (
        <div className="hello-world">{title}</div>
    )
}

// default props
HelloWorld.defaultProps = {
    "title": "teste"
}

// site editor
HelloWorld.schema = {
    "title": "Hello, World!",
    "description": "Componente de Hello Wolrd",
    "type": 'object',
    "proprierts": {
        "title": {
            "type": 'string',
            "title": 'Titulo'
        }
    }
}

export default HelloWorld