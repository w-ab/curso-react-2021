import React from "react";

function App(props){
  const modificarNome = () => {
    console.log(props.nome)
  }

  const criaComboBox = () => {
    const opcoes = [ "Fresco", "Curado" ]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )
    
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }
  const MeuComboBox = () => criaComboBox()
  return (
    <>
      <input type="text" className="centralizado" value={props.nome} onChange={modificarNome}/>
      <h1>Olá {props.nome}, você tem {props.idade} anos!</h1>
      <MeuComboBox />
    </>
  )
}

class App2 extends React.Component {
  state = {
    nome : ''
  }

  tituloBacana = () => {
    return (
      <h1>Titulo legal</h1>
    )
  }

  modificarNome = (event) => {
    // nao funciona acessar direto
    // this.state.nome = outro_nome
    let outro_nome = event.target.value;
    this.setState({
      nome: outro_nome
    })
  }

  constructor() {
    super()
    this.criaComboBox = this.criaComboBox.bind(this)
  }
  // pracisa do contrutor acima por nao ser uma arrow function
  // caso contrario o this nao referenciaria a classe e sim a funcao
  // o que gera erro
  criaComboBox(){
    const opcoes = [ "Fresco", "Curado" ]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )
    //opcoes.map( opcao => return {(<option>{opcao}</option>)} )
    
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }
  componentDidMount(){
    console.log('Executou componentDidMount')
  }

  componentDidUpdate(){
    console.log('Executou componentDidUpdate')
  }

  render(){
    console.log('Executou render')
    const MeuTitulo = () => this.tituloBacana()
    
    return (
      <React.Fragment>
        <MeuTitulo />
        <input type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Olá {this.state.nome}, você tem {this.props.idade} anos!</h1>
        {this.criaComboBox()}
      </React.Fragment>
    )
  }
}

export default App;