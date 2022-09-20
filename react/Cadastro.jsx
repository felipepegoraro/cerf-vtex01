const cad = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#F76161',
    paddingTop: 20, paddingBottom: 30,
    marginTop: 30 //marginBottom: 30
}

const pfiq = {
    fontFamily: 'Ubuntu',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '28px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'white',
}

const sub = {
    color: 'white',
    backgroundColor: '#23475E',
    padding: '5px',
    borderRadius: '10px',
    marginLeft: '5px',
    marginRight: '5px'
}

const inp = {
    padding: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    borderRadius: '10px'
}

const Cadastro = () => {
    return (
        <div style={cad} className="cadastro-novidades">
            <p style={pfiq}> Fique por dentro de todas as nossas novidades!</p>
            <form>
                <input style={inp} type="text" name="name" placeholder="Seu Nome"/>
                <input style={inp} type="text" name="name" placeholder="Seu Email"/>
                <input style={sub} type="submit" value="CADASTRAR" />
            </form>
        </div>
    )
}

export default Cadastro;