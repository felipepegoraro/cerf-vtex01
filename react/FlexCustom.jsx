const f = {
    // backgroundColor: '#f00',
    margin: '30px 12% 30px 12%',
    display: 'flex',
    flexDirection: 'column',
    padding: '3px'
}
const ff = { margin: '10px 10px 0px 10px' }

const g = {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px'
}
const gg = { 
    margin: '0px 5px 0px 0px',
}
const h = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignITems: 'center',
    gap: '10px',
    marginLeft: '5px'
}

const FlexCustom = (props) => {
    const img1 = props.src1
    const img2 = props.src2
    const img3 = props.src3
    const img4 = props.src4

    return (
        <div style={f} className="flex-custom">
            <img style={ff} src={img1} alt="imagem 1"/>
            <div style={g} className="flex-custom2">
                <img style={gg} src={img2} alt="imagem 2"/>
                <div style={h} className="flex-custom3">
                    <img src={img3} alt="imagem 3"/>
                    <img src={img4} alt="imagem 4"/>
                </div>
            </div>
        </div>
    )
}

FlexCustom.schema = {
    title: 'FlexCustom',
    description: 'Componente custom para grade de fotos',
    type: 'object',
    properties: {
        img1: { type: 'string', img1: 'src1' },
        img2: { type: 'string', img2: 'src2' },
        img3: { type: 'string', img3: 'src3' },
        img4: { type: 'string', img4: 'src4' },
    }
}

export default FlexCustom