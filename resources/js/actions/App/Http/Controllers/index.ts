import PrincipalController from './PrincipalController'
import ContatoController from './ContatoController'
import SobreNosController from './SobreNosController'
import LoginController from './LoginController'
import HomeController from './HomeController'
import ClienteController from './ClienteController'
import FornecedorController from './FornecedorController'
import TesteController from './TesteController'
import Settings from './Settings'
import Auth from './Auth'

const Controllers = {
    PrincipalController: Object.assign(PrincipalController, PrincipalController),
    ContatoController: Object.assign(ContatoController, ContatoController),
    SobreNosController: Object.assign(SobreNosController, SobreNosController),
    LoginController: Object.assign(LoginController, LoginController),
    HomeController: Object.assign(HomeController, HomeController),
    ClienteController: Object.assign(ClienteController, ClienteController),
    FornecedorController: Object.assign(FornecedorController, FornecedorController),
    TesteController: Object.assign(TesteController, TesteController),
    Settings: Object.assign(Settings, Settings),
    Auth: Object.assign(Auth, Auth),
}

export default Controllers