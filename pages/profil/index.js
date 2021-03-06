import React from 'react';
import NavLoggedIn from '../../components/Navigations/NavLoggedIn';
import Footer from '../../components/Footer';
import MinaAnnonser from '../../components/Profil/MinaAnnonser';
import ProfilMeny from '../../components/Profil/ProfilMeny';

function Profil() {
  return (
    <div>
      <NavLoggedIn name="Marianne W" />
      <div className='flex'>
        <ProfilMeny></ProfilMeny>
        <MinaAnnonser></MinaAnnonser>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profil
