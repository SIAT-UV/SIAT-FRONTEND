import { Banner } from "../Banner/Banner"
import { Bienvenida } from "../Bienvenida/Bienvenida"
import { PanelSecciones } from "../PanelSecciones/PanelSeccione"
import { PanelSeccionesItem } from "../PanelSeccionesItem/PanelSeccionesItem"
import Ciudad from "../../assets/images/inicio/banner3.jpg"
import Mapa from "../../assets/images/inicio/mapa.png"
import Registro from "../../assets/images/inicio/accidente.png"
import Panel from "../../assets/images/inicio/panel2.png"
import Informacion from "../../assets/images/inicio/informacionVial2.png"

export const Inicio = () => {
  return (
    <>
      <Banner imgUrl={Ciudad} />
      <Bienvenida titulo="SIAT" subtitulo="Sistema de Información sobre Accidentes de Tránsito">
        SIAT es un Sistema de Información sobre accidentes de transito en la ciudad de Tuluá. Aquí puedes consultar los registros de accidentes
        reportados y también registrar un accidente que hayas presenciado para informar a la comunidad. Además, cuentas con otras secciones como un
        mapa de calor que muestra las zonas con mayor riesgo de accidentes, un panel de control con estadísticas detalladas y una sección de
        aprendizaje vial con información clave para una conducción más segura.
      </Bienvenida>
      <Bienvenida titulo="¿Cómo funciona?" subtitulo="Registro de accidente">
        <p>
        Para poder registrar un accidente en la plataforma, es requisito indispensable contar con una cuenta de usuario. Si aún no dispone de una, deberá registrarse a través del formulario de registro correspondiente. En caso de ya contar con una cuenta, podrá iniciar sesión con sus credenciales para acceder a las funcionalidades disponibles.
        </p>
        <p>
        Una vez autenticado, el usuario tendrá la posibilidad de registrar un accidente completando todos los campos requeridos en el formulario de registro de accidentes. Tras el envío del formulario, el accidente quedará registrado en el sistema, pero en estado pendiente, y será visible únicamente en el panel de control dentro de la sección denominada “Accidentes por Aprovar”.
        </p>
        A partir de este momento, otros usuarios de la plataforma podrán revisar el registro y confirmar su veracidad. Cada accidente requiere un mínimo de cinco (5) confirmaciones por parte de diferentes usuarios para cambiar su estado a “Confirmado”.
        <p>
        Una vez alcanzado este umbral, el accidente será considerado válido y se mostrará públicamente en toda la plataforma. Esto incluye su visualización en el mapa general y en todas las tablas de detalle disponibles, garantizando así su inclusión en los análisis y reportes del sistema.
        </p>
      </Bienvenida> 
      <PanelSecciones>
        <PanelSeccionesItem background={Mapa} icon={"/src/assets/images/inicio/iconblanco.png"} href="/mapa">
          Mapa de Calor
        </PanelSeccionesItem>
        <PanelSeccionesItem background={Panel} icon={"/src/assets/images/inicio/iconpanel2.png"} href="/dashboard">
          Panel de Control
        </PanelSeccionesItem>
        <PanelSeccionesItem background={Registro} icon={"/src/assets/images/inicio/iconregistro2.png"} href="/registrar-accidente">
          Registrar Accidente
        </PanelSeccionesItem>
        <PanelSeccionesItem background={Informacion} icon={"/src/assets/images/inicio/iconinformacion2.png"} href="/informacion-vial">
          Informacion Vial
        </PanelSeccionesItem>
      </PanelSecciones>
    </>
  )
}
