import { Introduction } from "./components/Introduction"
import { TrafficSign } from "./components/TrafficSign/TrafficSign"
import { TrafficSigns } from "./components/TrafficSigns"
import preventImg from "../../assets/images/signs/preventivas_page-0001_crop1654644744001.jpg_864619919.webp"
import ruleImg from "../../assets/images/signs/reglamentarias_page-0001_crop1654644553211.jpg_1259879939.webp"
import infoImg from "../../assets/images/signs/informativas_page-0001_crop1654645015111.jpg_2144309606.webp"
import tranImg from "../../assets/images/signs/SEÑALES-DE-OBRA-400x517.jpg"

export const RoadInformation = () => {
  return (
    <>
      <Introduction title="Señalizaciones de Tránsito">
        <article>
          <p>
            ¿Alguna vez te has preguntado cómo sería la circulación vial sin señales de tránsito? Sin duda, el caos dominaría las calles y carreteras,
            poniendo en peligro la vida de conductores y peatones. Las señales de tránsito son esenciales para el orden y la seguridad en las vías, ya
            que regulan el tráfico, previenen accidentes y facilitan la movilidad de todos los usuarios.
          </p>
          <p>
            Estas cumplen diversas funciones: informan sobre direcciones y restricciones, advierten sobre posibles peligros y establecen normas claras
            para el comportamiento de los conductores. Su correcta interpretación permite tomar decisiones adecuadas al volante, reduciendo
            infracciones y minimizando riesgos.
          </p>
          <p>
            Además, la educación vial juega un papel clave en la concienciación de todos los actores del tráfico. Conocer y respetar las señales no
            solo es una obligación, sino una responsabilidad compartida que contribuye a una convivencia más segura y eficiente en las vías.
          </p>
          <p>Por lo cual acontinuacion te enseñaremos los distintos tipos de señalizacion que existen en Colombia:</p>
        </article>
      </Introduction>
      <TrafficSigns>
        <TrafficSign title="Preventivas" img={preventImg}>
          <p>
            Su objetivo es advertir sobre posibles peligros en la vía y condiciones que requieren precaución por parte de conductores y peatones. Se
            caracterizan por su forma generalmente rectangular o en forma de rombo, con fondo amarillo y símbolos negros.
          </p>
          <p>Algunas de las más comunes son:</p>
          <ul>
            <li>Resalto.</li>
            <li>Zona de derrumbe.</li>
            <li>Curva peligrosa a la derecha/izquierda.</li>
            <li>Intersección.</li>
            <li>Puente angosto.</li>
          </ul>
        </TrafficSign>
        <TrafficSign title="Reglamentarias" img={ruleImg}>
          <p>
            Su objetivo es regular la circulación vehicular y garantizar la seguridad vial. Se caracterizan por su forma generalmente circular, con
            fondo blanco, bordes rojos y símbolos negro.
          </p>
          <p>Las señales de tránsito reglamentarias tienen una particularidad: tienen que cumplirse obligatoriamente.</p>
          <p>Algunas de las más comunes son:</p>
          <ul>
            <li>No pase.</li>
            <li>Pare.</li>
            <li>Prohibido girar a la izquierda/derecha.</li>
            <li>Prohibido parquear.</li>
            <li>Velocidad máxima</li>
          </ul>
        </TrafficSign>
        <TrafficSign title="Informativas" img={infoImg}>
          <p>
            Su objetivo es brindan datos útiles sobre direcciones, servicios y lugares de interés en la vía. Se caracterizan por su forma rectangular
            y colores variados según su función, como el azul para servicios, el verde para destinos y el marrón para sitios turísticos.
          </p>
          <p>Algunas de las más comunes son:</p>
          <ul>
            <li>Restaurantes.</li>
            <li>Hospital.</li>
            <li>Nomenclatura urbana.</li>
            <li>Transporte ferroviario.</li>
            <li>Museo.</li>
          </ul>
        </TrafficSign>
        <TrafficSign title="Transitorias" img={tranImg}>
          <p>
            Advierten sobre cambios temporales en la vía debido a obras, mantenimientos o situaciones especiales. Se caracterizan por su forma
            generalmente rectangular o en rombo, con fondo naranja y símbolos o letras negras.
          </p>
          <p>Algunas de las más comunes son:</p>
          <ul>
            <li>Obra en vía a 100 m.</li>
            <li>Carril izquierdo cerrado.</li>
            <li>Inicio de obra y fin de obra.</li>
          </ul>
        </TrafficSign>
      </TrafficSigns>
    </>
  )
}
