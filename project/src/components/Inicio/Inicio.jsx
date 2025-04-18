import { Banner } from "../Banner/Banner"
import { Bienvenida } from "../Bienvenida/Bienvenida"
import { PanelSecciones } from "../PanelSecciones/PanelSeccione"
import { PanelSeccionesItem } from "../PanelSeccionesItem/PanelSeccionesItem"
import Ciudad from "../../assets/images/inicio/banner2.jpg"
import Mapa from "../../assets/images/inicio/mapa.jpg"
import Registro from "../../assets/images/inicio/jum.webp"
import Panel from "../../assets/images/inicio/panel.png"
import Informacion from "../../assets/images/inicio/informacionVial.jpg"

export const Inicio = () => {
  return (
    <>
      <Banner imgUrl={Ciudad} />
      <Bienvenida>
        SIAT es un Sistema de Información sobre accidentes de transito en la ciudad de Tuluá. Aquí puedes consultar los registros de accidentes
        reportados y también registrar un accidente que hayas presenciado para informar a la comunidad. Además, cuentas con otras secciones como un
        mapa de calor que muestra las zonas con mayor riesgo de accidentes, un panel de control con estadísticas detalladas y una sección de
        aprendizaje vial con información clave para una conducción más segura.
      </Bienvenida>
      <PanelSecciones>
        <PanelSeccionesItem background={Mapa} icon={"/src/assets/images/inicio/iconblanco.png"} href="/mapa">
          Mapa de Calor
        </PanelSeccionesItem>
        <PanelSeccionesItem background={Panel} icon={"/src/assets/images/inicio/iconpanel.png"} href="/dashboard">
          Panel de Control
        </PanelSeccionesItem>
        <PanelSeccionesItem background={Registro} icon={"/src/assets/images/inicio/iconregistro.png"} href="/registrar-accidente">
          Registrar Accidente
        </PanelSeccionesItem>
        <PanelSeccionesItem background={Informacion} icon={"/src/assets/images/inicio/iconinformacion.png"} href="/informacion-vial">
          Informacion Vial
        </PanelSeccionesItem>
      </PanelSecciones>
    </>
  )
}
