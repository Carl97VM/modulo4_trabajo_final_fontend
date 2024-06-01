import React from 'react'
import './Sectionopinion.css'

function Sectionopinion() {
  return (
    <section className="opinion-section">
      <div className="container-Opinion">
        <h3>Opiniones de nuestros pacientes</h3>
        <div className="opinion-grid">
          <div className="card">
            <div className="card-content">
              <p><i>&quot;Excelente servicio en Brillo Dental. Trato amable, procedimientos indoloros. ¡Mi sonrisa nunca ha estado mejor!&quot; </i></p>
              <p><b>Lucía P.</b></p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
            <p><i>&quot;En Magia Dental me sentí como en casa. Profesionales excepcionales y resultados sorprendentes. ¡Muy recomendado!&quot; </i>
            <br/><b>Jorge E.</b></p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
            <p><i>&quot;Magia Dental transformó mi sonrisa con eficiencia y cuidado. ¡El mejor dentista al que he ido!&quot; </i></p>
              <p><b>Sofía M.</b></p><br/>
            </div>
          </div>          
        </div>
      </div>
    </section>
   
  )
}

export default Sectionopinion
