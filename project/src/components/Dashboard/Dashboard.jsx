import React from 'react';
import './Dashboard.css';
import { Button } from '../Buttons';
import { RecentAccidents } from '../RecentAccidents/RecentAccidents';


export const Dashboard = () => {

  const cards = [
    { title: 'Total de Accidentes', value: '156 incidentes este mes', button: 'Ver Detalles' },
    { title: 'Casos Críticos', value: '23 casos críticos este mes', button: 'Ver casos' },
    { title: 'Área de Alto Riesgo', value: '12 zonas identificadas', button: 'Ver Mapa' },
  ];

  return (
    <div className="dashboard">
        
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <p>{card.value}</p>
            <Button onClick={card.button} > {card.button} </Button>
          </div>
        ))}
      </div>

      <RecentAccidents />

      <div className="quick-actions">
        <h3>Acciones Rápidas</h3>
        <div className="action-buttons">
            <Button>Reportar accidente</Button>
            <Button>Ver estadísticas</Button>
        </div>    
      </div>
    </div>
  );
};

