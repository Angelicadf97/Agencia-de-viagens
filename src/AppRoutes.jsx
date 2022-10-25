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
import LoginADM from "./views/adm/login";
import ClienteADM from "./views/adm/cliente";
import AeroportoADM from "./views/adm/aeroporto";
import CompanhiaADM from "./views/adm/companhia";
import HospedagemADM from "./views/adm/hospedagem";
import PacoteADM from "./views/adm/pacote";
import ReservaADM from "./views/adm/reserva";
import VooADM from "./views/adm/voo";

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

          <Route path='/adm' element={<LoginADM />} />
          <Route path='/adm/cliente' element={<ClienteADM />} />
          <Route path='/adm/aeroporto' element={<AeroportoADM />} />
          <Route path='/adm/companhia' element={<CompanhiaADM />} />
          <Route path='/adm/pacote' element={<PacoteADM />} />
          <Route path='/adm/reserva' element={<ReservaADM />} />
          <Route path='/adm/hospedagem' element={<HospedagemADM />} />
          <Route path='/adm/voo' element={<VooADM />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
export default AppRoutes;