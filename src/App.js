//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  // 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables
  let [temperatureColor, setColor] = useState('cold');
  let [temperatureValue, setTemperature] = useState(10);

  // 2) Agregar las funciones para manejar los eventos de Click a los botones para que 
  //     cuando se presionen se incremente o decremente el valor de la temperatura. 
  function aumentaTemperatura() {
    if (temperatureValue < 30) {
      setTemperature(temperatureValue + 1);
      actualizaColor();
    }
  }

  function disminuyeTemperatura() {
    if (temperatureValue > 0) {
      setTemperature(temperatureValue - 1);
      actualizaColor();
    }
  }


  // 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
  //    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'
  function actualizaColor() {
    if (temperatureValue >= 20) {
      setColor('hot');
    } else  {
      setColor('cold');
    }
  }

  // Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
  // De igual manera al llegar los valores a 0 no se podrá decrementas más.

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={disminuyeTemperatura}>-</button>
        <button onClick={aumentaTemperatura}>+</button>
      </div>
    </div>
  );
}

export default App;