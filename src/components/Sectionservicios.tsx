import React from 'react'
import './Sectionservicios.css'
import { Typography, colors } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { FormatColorText } from '@mui/icons-material';


function Sectionservicios() {
  return (
    <section className="services-section">
      <div className="container-Services">
        <h3>Nuestros servicios</h3>
        <div className="services-grid">
          <div className="service-card">
            <img src='/recursos/image 4.png' alt='Odontología Cosmética'/>
            <h3>Odontología Cosmética</h3>
            {/* <Typography color={'#006a65'}> */}
              <h4 className='masInfo'>Más información<ArrowOutwardIcon htmlColor="#006a65" fontSize="small" /></h4>
              {/* </Typography> */}
          </div>
          <div className="service-card">
            <img src='/recursos/image 3.png' alt='Odontología Restaurativa'/>
            <h3>Odontología Cosmética</h3>
            {/* <Typography color={'#006a65'}> */}
            <h4 className='masInfo'>Más información<ArrowOutwardIcon htmlColor="#006a65" fontSize="small" /></h4>
              {/* </Typography> */}
          </div>
          <div className="service-card">
            <img src='/recursos/image 6.png' alt='Odontopediatría'/>
            <h3>Odontología Cosmética</h3>
            {/* <Typography color={'#006a65'}> */}
            <h4 className='masInfo'>Más información<ArrowOutwardIcon htmlColor="#006a65" fontSize="small" /></h4>
              {/* </Typography> */}
          </div>
          <div className="service-card">
            <img src='/recursos/image 5.png' alt='Ortodoncia'/>
            <h3>Odontología Cosmética</h3>
            {/* <Typography color={'#006a65'}> */}
            <h4 className='masInfo'>Más información<ArrowOutwardIcon htmlColor="#006a65" fontSize="small" /></h4>
              {/* </Typography> */}
          </div>
        </div>
      </div>
    </section>
   
  )
}

export default Sectionservicios
