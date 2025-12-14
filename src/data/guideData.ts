export interface GuideSection {
    id: string;
    title: string;
    content: string;
    subsections?: GuideSubsection[];
    image?: string;
    video?: string;
    note?: string;
}

export interface GuideSubsection {
    id: string;
    title: string;
    content: string;
    image?: string;
    features?: string[];
}

export interface GuideCategory {
    id: string;
    title: string;
    sections: GuideSection[];
}

const baseUrl = import.meta.env.BASE_URL;

export const guideData: GuideCategory[] = [
    {
        id: "introduccion",
        title: "Introducción",
        sections: [
            {
                id: "que-es",
                title: "¿Qué es WorkSchedFlow?",
                content: "WorkSchedFlow es una prueba de concepto diseñada para facilitar la gestión de turnos de trabajo. Su objetivo principal es cubrir las necesidades de los gestores de equipos, brindando una herramienta que simplifica el diseño de horarios mientras se asegura de cumplir con las normativas laborales y las expectativas de los empleados.",
            },
            {
                id: "puntos-clave",
                title: "Puntos clave de la aplicación",
                content: "WorkSchedFlow ofrece una plataforma integral que centraliza toda la gestión de tu equipo de trabajo.",
                subsections: [
                    {
                        id: "caracteristicas-principales",
                        title: "Características principales",
                        content: "",
                        features: [
                            "Plataforma integral que unifica **gestión de empleados**, **cuadrantes horarios** y **control de fichajes**.",
                            "Totalmente **automatizada**: selecciona un rango de fechas y genera el personal activo, sus jornadas y sus equipos de trabajo.",
                            "Cada empleado dispone de una **vista personal**, con horarios, ausencias, registros de jornada y notificaciones de cualquier modificación.",
                            "Control óptimo de **jornadas** y **equipos**, definiendo fechas de inicio y fin para cada asignación.",
                            "Gestión completa de **ausencias**, vacaciones y horas no disponibles, que se muestran señaladas y quedan excluidas de la planificación.",
                            "Herramientas avanzadas para crear cuadrantes: marcaje automático de descansos, filtros por equipo o empleado, vista diaria solo de activos y vistas globales o por grupos.",
                            "**Resumen automático** por trabajador y totales del periodo seleccionado.",
                            "Control de los **registros de jornada** con alertas por ausencia en el turno o fichaje incorrecto.",
                            "Vista dedicada para **inspección**, con todos los registros accesibles y opción de descargar en PDF.",
                            "Posibilidad de **añadir o corregir fichajes**, generando notificaciones y envío por correo tanto al gestor como al empleado.",
                            "Creación flexible de cuadrantes: desde cero, copiando semanas previas o aplicando **turnos por defecto**.",
                            "Configuración de **semanas genéricas** con empleados ficticios para planificaciones modelo, asignándolos luego a empleados reales. Hasta 6 semanas genéricas disponibles.",
                            "Reporte mensual completo: horas totales, por empleado, horas extra, nocturnas y festivas, incluyendo **cálculo de costes** según la lógica de negocio.",
                            "Impresión directa de cuadrantes en PDF con una vista clara y lista para entregar."
                        ]
                    }
                ]
            },
            {
                id: "vista-general",
                title: "Vista General de la aplicación",
                content: "A continuación se muestran las principales interfaces de la aplicación.",
                subsections: [
                    {
                        id: "ventana-principal",
                        title: "Ventana de Trabajo Principal",
                        content: "La ventana principal es el punto de entrada donde puedes acceder a todas las funcionalidades de la aplicación.",
                        image: `${baseUrl}/images/guide/roster-page.webp`
                    },
                    {
                        id: "panel-administracion",
                        title: "Panel de Administración",
                        content: "Acceso al panel de elaboración de cuadrantes y gestión completa del sistema.",
                        image: `${baseUrl}/images/guide/admin-panel.webp`
                    }
                ]
            }
        ]
    },
    {
        id: "secciones-principales",
        title: "Secciones Principales",
        sections: [
            {
                id: "roster-page",
                title: "Roster Page - Elaboración de Cuadrantes",
                content: "La elaboración de cuadrantes se realizará principalmente desde la Roster Page. Esta es nuestra pizarra de visualización del equipo y está dividida en tres partes.",
                subsections: [
                    {
                        id: "cabecera-ventana",
                        title: "1. Cabecera de la ventana",
                        content: "En esta cabecera se encuentran algunos elementos indicativos como el número de empleados cargados en el periodo y las horas totales de trabajo de ese periodo.",
                        image: `${baseUrl}/images/guide/cabecera.webp`,
                        features: [
                            "**Selección de fechas a mostrar:** Aquí podrás seleccionar el intervalo de fechas a mostrar en la pizarra. Al hacer clic en obtener, el sistema descargará todos los días comprendidos entre esas dos fechas. Cada día solo contendrá los empleados activos ese día, así como los datos de jornada semanal y equipo de trabajo.",
                            "**Filtro por equipos:** Al trabajar con equipos grandes se requiere de una visualización más ajustada. Mediante esta funcionalidad podrás ver en pantalla solo los equipos seleccionados.",
                            "**Filtrado por nombre:** Si necesitas trabajar solo el horario de un empleado en ese periodo, podrás hacerlo mediante este filtro y solo te aparecerá su línea de trabajo.",
                            "**Resetear los filtros:** La cabecera cuenta con un botón mediante el que resetear todos los filtros y ver de nuevo la ventana completa.",
                            "**Botón de guardar:** Al ir realizando cambios en la planificación se irán añadiendo al stage y será al clicar en el botón de guardar cuando se envíen a la base de datos.",
                            "**Botón de Imprimir:** Con este botón podrás imprimir todos los días del periodo seleccionado en un formato claro para su lectura en papel o pdf."
                        ]
                    },
                    {
                        id: "pizarra-trabajo",
                        title: "2. Pizarra de trabajo",
                        content: "La pizarra de trabajo es el espacio donde elaborar la planificación. Está dividida en periodos de 15 minutos, en esta etapa inicial, de 7 de la mañana a 10:30 de la noche. Muestra la información del empleado, horas totales por empleado y horas totales por día.",
                        image: `${baseUrl}/images/guide/roster-board.webp`,
                        features: [
                            "**Inserción de horas mediante ratón o teclado:** Puedes hacer clic en cada celda para rellenarla o clicar y arrastrar para completar toda la sección. También es posible operar desde el teclado, navegando por el panel y marcando las celdas una a una con la barra espaciadora, o seleccionando varias manteniendo pulsada la tecla *Shift* junto con las flechas de dirección.",
                            "**Turnos deshabilitados:** Las celdas marcadas en rojo indican turnos deshabilitados. Esto puede deberse a vacaciones, periodos de no disponibilidad del trabajador o por motivos legales, como que no hayan transcurrido 12 horas desde la finalización del turno anterior.",
                            "**Resolución de conflictos:** Cuando un empleado tiene una solicitud de no disponibilidad y le coincide con un turno de trabajo, aparecerá en amarillo y parpadeando para que podamos resolver el conflicto como sea conveniente.",
                            "**Vista de distribución:** En la última línea del día podemos ver los empleados activos por franja horaria. Se dispone de dos modos de visualización a los que se accede clicando sobre 'Personas'. En el primer modo de visualización se verán los empleados activos totales por franja horaria, mientras que en el segundo modo se verán solo los del equipo seleccionado."
                        ]
                    },
                    {
                        id: "vista-activos",
                        title: "3. Vista de empleados activos",
                        content: " Además del filtrado por equipos y por nombre disponible en la cabecera, desde la pizarra podrás activar una vista que muestra únicamente a los empleados que trabajan ese día, haciendo clic en el icono del reloj.",
                        image: `${baseUrl}/images/guide/filtro-activos.webp`,
                        features: [
                            "**Activación y desactivación por clic:** La vista de empleados activos se activa y desactiva haciendo clic sobre el icono del reloj, permitiendo alternar rápidamente entre la vista completa y la vista filtrada.",
                            "**Filtrado automático por día:** Al activar esta vista, solo se muestran los empleados que tienen turno asignado en el día seleccionado, ocultando automáticamente a quienes no trabajan.",
                            "**Mejora de la claridad visual:** Al eliminar de la pizarra a los empleados inactivos, el cuadrante resulta más limpio y fácil de interpretar, especialmente en días con muchos trabajadores.",
                            "**Optimizada para revisión del cuadrante:** Esta vista es especialmente útil una vez finalizada la planificación, ya que permite revisar la distribución real del personal sin distracciones.",
                            "**Compatible con otros filtros:** La vista de empleados activos funciona de forma combinada con los filtros de equipo y búsqueda por nombre disponibles en la cabecera."
                        ]
                    },
                    {
                        id: "resumen-periodo",
                        title: "3. Resumen del periodo",
                        content: "En la parte final de la página encontraremos un resumen del periodo seleccionado, donde podremos consultar información detallada.",
                        image: "/images/guide/resumen-periodo.png",
                        features: [
                            "**Jornada laboral:** Horas que el empleado debe realizar durante el periodo. Se calculan en función de su jornada diaria, teniendo en cuenta casos en los que el empleado cambia de jornada a mitad del periodo.",
                            "**Horas trabajadas:** Total de horas efectivamente realizadas durante el periodo.",
                            "**Varianza:** Diferencia entre las horas estipuladas en la jornada y las horas realmente trabajadas.",
                            "**Gráfica del periodo:** En el lateral derecho del resumen se muestra una gráfica visual con los días de trabajo de cada empleado durante el periodo, permitiendo ver de un vistazo la distribución de días trabajados y descansos. También se indican las horas totales por día.",
                            "**Datos totales:** En la última fila de la tabla se presenta el resumen global del periodo, con el total de horas de jornada, horas trabajadas y la desviación acumulada."
                        ]
                    }
                ]
            },
            {
                id: "turnos-genericos",
                title: "Elaboración de cuadrantes mediante turnos genéricos",
                content: "A través de la asignación de turnos genéricos, se dispone de otra forma de elaborar cuadrantes. En este caso se realizarán dos partes principales.",
                subsections: [
                    {
                        id: "seleccionar-semana",
                        title: "1. Seleccionar la semana genérica",
                        content: "El sistema admite hasta 6 semanas diferentes para configurar turnos genéricos.",
                        image: "/images/guide/semana-generica.png"
                    },
                    {
                        id: "disenar-planificacion",
                        title: "2. Diseñar la planificación",
                        content: "Diseñar la planificación de los empleados genéricos para todos los días de esa semana.",
                        image: "/images/guide/planificacion-generica.png"
                    },
                    {
                        id: "asignar-turnos",
                        title: "3. Asignar los turnos genéricos",
                        content: "**Asignación flexible de turnos:** No es necesario asignar todos los turnos de la semana de una sola vez. Puedes trabajar empleado por empleado. Si una semana ya está creada, también es posible asignar un turno individualmente a un único empleado sin necesidad de rehacer toda la planificación.",
                        image: "/images/guide/asignar-turnos.png",
                        features: [
                            "Desplegable para asignar el empleado que realizará el turno.",
                            "Botón para asignar el empleado por defecto a ese turno.",
                            "Botón para activar o desactivar el turno genérico. El sistema cuenta con 50 turnos disponibles y solo los turnos activos aparecerán en la ventana de diseño.",
                            "Botón para poner en blanco todos los empleados asignados. Este botón está pensado para cuando solo se quiere añadir una persona al cuadrante."
                        ]
                    },
                    {
                        id: "configuracion-empleados",
                        title: "Configuración de empleados por turno",
                        content: "Al preparar la semana, se selecciona qué empleado realizará cada turno genérico. Para agilizar el proceso, puedes configurar empleados por defecto para cada turno. Aun así, todo está pensado para ser fácilmente editable: puedes modificar la asignación en cualquier momento e incluso asignar el mismo turno genérico a varios empleados si lo necesitas."
                    },
                    {
                        id: "resolucion-conflictos",
                        title: "4. Selección de la semana y resolución de conflictos",
                        content: "Una vez configurados los turnos, deberás elegir la semana genérica y la fecha concreta a la que se aplicarán. Tras asignar los turnos, es necesario cargar la semana en la **Roster Page**, donde podrás revisar y solucionar posibles conflictos derivados de vacaciones, ausencias o periodos de no disponibilidad.",
                        image: "/images/guide/seleccion-semana.png",
                        features: [
                            "Seleccionar la semana asignada. Se rellena la fecha de inicio que siempre debe ser lunes y la fecha de fin se auto completará.",
                            "Seleccionar el ciclo que representa la semana genérica a asignar.",
                            "Botón para enviar la configuración y generar el cuadrante."
                        ]
                    },
                    {
                        id: "conflictos-ejemplo",
                        title: "Ejemplo de resolución de conflictos",
                        content: "Como vimos anteriormente, un empleado puede tener días de vacaciones asignados y franjas horarias en las que no puede trabajar por motivos personales. En el caso de asignarle un turno mediante este proceso, se marcará en amarillo en la planificación para que se pueda solucionar.",
                        image: "/images/guide/conflicto-ejemplo.png",
                        note: "Empleado con periodo de no disponibilidad de 13:00 a 16:30 al que se le ha asignado un turno de trabajo hasta las 14:00. En este punto el sistema nos permitirá modificar la disponibilidad del empleado o eliminar esas horas del cuadrante. Mientras las horas están en amarillo no se tienen en cuenta en términos de cómputo de jornada ni de distribución de la franja horaria."
                    }
                ],
                video: "https://youtu.be/WRrTnhw_hBo"
            },
            {
                id: "insercion-turnos-formulario",
                title: "Inserción de turnos mediante Formulario",
                content: "Próximamente se documentará esta funcionalidad."
            },
            {
                id: "gestion-usuarios",
                title: "Gestión de usuarios",
                content: "Próximamente se documentará esta funcionalidad."
            },
            {
                id: "registros-jornada",
                title: "Inserción de registros de jornada",
                content: "Próximamente se documentará esta funcionalidad."
            },
            {
                id: "gestion-registros",
                title: "Gestión de registros de jornada",
                content: "Próximamente se documentará esta funcionalidad."
            },
            {
                id: "visualizacion-ausencias",
                title: "Visualización de ausencias",
                content: "Próximamente se documentará esta funcionalidad."
            },
            {
                id: "reportes-mensuales",
                title: "Acceso a reportes mensuales",
                content: "Próximamente se documentará esta funcionalidad."
            },
            {
                id: "vista-empleado",
                title: "Vista de empleado",
                content: "Próximamente se documentará esta funcionalidad."
            }
        ]
    }
];
