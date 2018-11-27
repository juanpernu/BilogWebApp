import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import AuthService from '../../services/authService'

const auth = new AuthService('http://localhost:3000')

// **
// import styles
// **
import "./form.scss"

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        bilogUser: '',
        user: '',
        password: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleBilogUserChange = this.handleBilogUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount (ctx) {
    auth.logout(ctx)
    console.log(auth.getLoginData(ctx))
    /**
     * @todo crear un helper para chequear que el objeto de la cookie no está vacio 
     */
    // if (auth.loggedIn(ctx) && !'{}') {
    //   console.log('logeado')
    //   Router.push('/agenda')   // redirect if you're already logged in
    // } else {
    //   console.log('deslogeado')
    // }
  }

  handleBilogUserChange(evt) {
    this.setState({
      bilogUser: evt.target.value
    })
  }

  handleUserChange(evt) {
    this.setState({
      user: evt.target.value
    })
  }

  handlePasswordChange(evt) {
    this.setState({
      password: evt.target.value
    })
  }

  async handleSubmit(evt, ctx) {
    evt.preventDefault()

    await auth.login(
      ctx,
      this.state.bilogUser,
      this.state.user,
      this.state.password
      )
      .then(res => {
        console.log(res)
        // this.props.url.replaceTo('/admin')
      })
      .catch(e => console.log(e))  // you would show/hide error messages with component state here 
  }

  render() {
    return (
      <div className="form-container spacer">
        <h3>Ingresá a Bilog</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>Usuario Bilog</label>
          <input
            type="text"
            name="user-bilog"
            title="Usuario Bilog"
            value={this.state.bilogUser}
            onChange={this.handleBilogUserChange}
          />

          <label>Usuario</label>
          <input
            type="text"
            name="user"
            title="Usuario"
            value={this.state.user}
            onChange={this.handleUserChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            title="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button className="button" type="submit">
            <span>Continuar</span>
          </button>
        </form>
          <p className='sign-up'><Link href='https://www.mercadolibre.com.ar'><a>¿Todavía no sos miembro? Registrate acá</a></Link></p>
      </div>
    )
  }
}

export default Form