import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import Pacotes from "./views/pacotes";
import Voos from "./views/voos";
import Hospedagens from "./views/hospedagens";
import OfertasVoo from "./views/ofertasVoo";
import OfertasPac from "./views/ofertasPac";
import OfertasHos from "./views/ofertasHos";
import Contato from "./views/contato";
import Login from "./views/login";
import Cadastro from "./views/cadastro";
import ADMLogin from "./views/adm/login";
import ADMCliente from "./views/adm/cliente";
import ADMAeroporto from "./views/adm/aeroporto";

const AppRoutes = () => {
  

  return (
    <Router>
      <AuthProvider >
        <Routes>
          <Route path='/' element={<Pacotes />} />
          <Route path='/voos' element={<Voos />} />
          <Route path='/hospedagens' element={<Hospedagens />} />
          <Route path='/ofertas-voo' element={<OfertasVoo />} />
          <Route path='/ofertas-pac' element={<OfertasPac />} />
          <Route path='/ofertas-hos' element={<OfertasHos />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />

          <Route path='/adm' element={<ADMLogin />} />
          <Route path='/adm/cliente' element={<ADMCliente />} />
          <Route path='/adm/aeroporto' element={<ADMAeroporto />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
export default AppRoutes;