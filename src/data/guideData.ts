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
    video?: string;
    features?: string[];
}

export interface GuideCategory {
    id: string;
    title: string;
    sections: GuideSection[];
}

const baseUrl = import.meta.env.BASE_URL;

export const guideData: GuideCategory[] = [
    /* Modulo Introduccion */
    {
        id: "introduccion",
        title: "Introducción",
        sections: [
            {
                id: "que-es",
                title: "¿Qué es WorkSchedFlow?",
                content: "WorkSchedFlow es una plataforma de planificación operativa de personal diseñada para empresas con turnos, campañas y alta variabilidad de demanda. No es una herramienta de consulta ni de control de horarios, sino un sistema de diseño estratégico de cuadrantes. Permite construir la planificación óptima de equipos en función de la demanda del negocio, los picos de actividad y los objetivos de cobertura. Su enfoque está en ayudar a tomar decisiones, no solo en visualizar información. A través de su entorno de planificación, facilita el equilibrio entre necesidad operativa, disponibilidad de empleados y presupuesto. Es una herramienta pensada para sentarse a diseñar, optimizar y ajustar la estructura de trabajo, no solo para revisarla.",
                subsections: [

                ],
                video: "https://youtu.be/D1-NKLsTDZ4",
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
    /* Modulo Secciones Principales */
    {
        id: "secciones-principales",
        title: "Funciones Principales",
        sections: [
            /* Roster Page */
            {
                id: "roster-page",
                title: "Roster Page - Elaboración de Cuadrantes",
                content: "La elaboración de cuadrantes se realizará principalmente desde la Roster Page. Esta es nuestra pizarra de visualización del equipo y está dividida en tres partes.",
                subsections: [
                    /* Cabecera ventana */
                    {
                        id: "cabecera-ventana",
                        title: "1. Cabecera de la ventana",
                        content: "En esta cabecera se encuentran algunos elementos indicativos como el número de empleados cargados en el periodo y las horas totales de trabajo de ese periodo.",
                        image: `${baseUrl}/images/guide/cabecera.webp`,
                        features: [
                            "**Selección de fechas a mostrar:** Aquí podrás seleccionar el intervalo de fechas a mostrar en la pizarra. Al hacer clic en obtener, el sistema descargará todos los días comprendidos entre esas dos fechas. Cada día solo contendrá los empleados activos ese día, así como los datos de jornada semanal y equipo de trabajo.",
                            "**Selección de rango horario:** Permite ajustar dinámicamente el tramo horario visible para centrarte en el momento del día que necesitas planificar. Cambia entre distintas vistas según la fase de trabajo y enfoca el cuadrante en horas clave como aperturas, cierres o picos de actividad.",
                            "**Filtro por equipos:** Al trabajar con equipos grandes se requiere de una visualización más ajustada. Mediante esta funcionalidad podrás ver en pantalla solo los equipos seleccionados.",
                            "**Filtrado por nombre:** Si necesitas trabajar solo el horario de un empleado en ese periodo, podrás hacerlo mediante este filtro y solo te aparecerá su línea de trabajo.",
                            "**Resetear los filtros:** La cabecera cuenta con un botón mediante el que resetear todos los filtros y ver de nuevo la ventana completa.",
                            "**Botón de guardar:** Al ir realizando cambios en la planificación se irán añadiendo al stage y será al clicar en el botón de guardar cuando se envíen a la base de datos.",
                            "**Botón de Imprimir:** Con este botón podrás imprimir todos los días del periodo seleccionado en un formato claro para su lectura en papel o PDF."
                        ]
                    },
                    /* Pizarra de Trabajo */
                    {
                        id: "pizarra-trabajo",
                        title: "2. Pizarra de trabajo",
                        content: "La pizarra de trabajo es el espacio donde elaborar la planificación. Está dividida en periodos de 15 minutos, en esta etapa inicial, de 7 de la mañana a 10:30 de la noche. Muestra la información del empleado, horas totales por empleado y horas totales por día.",
                        image: `${baseUrl}/images/guide/roster-board.webp`,
                        features: [
                            "**Inserción de horas mediante ratón o teclado:** Puedes hacer clic en cada celda para rellenarla o clicar y arrastrar para completar toda la sección. También es posible operar desde el teclado, navegando por el panel y marcando las celdas una a una con la barra espaciadora, o seleccionando varias manteniendo pulsada la tecla *Shift* junto con las flechas de dirección.",
                            "**Turnos deshabilitados:** Las celdas marcadas en rojo indican turnos deshabilitados. Esto puede deberse a vacaciones, periodos de no disponibilidad del trabajador o por motivos legales, como que no hayan transcurrido 12 horas desde la finalización del turno anterior.",
                            "**Resolución de conflictos:** Cuando un empleado tiene una solicitud de no disponibilidad y le coincide con un turno de trabajo, aparecerá en amarillo y parpadeando para que podamos resolver el conflicto como sea conveniente.",
                            "**Vista de distribución:** En la última línea del día podemos ver los empleados activos por franja horaria. Se dispone de dos modos de visualización a los que se accede clicando sobre 'Personas'. En el primer modo de visualización se verán los empleados activos totales por franja horaria, mientras que en el segundo modo se verán solo los del equipo seleccionado.",
                            "**Control de zoom:** El sistema permite ajustar el nivel de zoom de la planificación para adaptarla a cada dispositivo y necesidad de visualización. Esto resulta especialmente útil en pantallas pequeñas, donde es importante optimizar el espacio disponible sin perder información relevante."
                        ]
                    },
                    /* Control de filtros  */
                    {
                        id: "control-filtros",
                        title: "3. Control de filtros",
                        content: "La pizarra de trabajo es el espacio donde elaborar la planificación. Está dividida en periodos de 15 minutos, en esta etapa inicial, de 7 de la mañana a 10:30 de la noche. Muestra la información del empleado, horas totales por empleado y horas totales por día.",
                        video: `${baseUrl}/images/guide/filtros.mp4`,
                        features: [
                            "**Filtrado por nombre:** Si necesitas trabajar solo el horario de un empleado en ese periodo, podrás hacerlo mediante este filtro y solo te aparecerá su línea de trabajo.",
                            "**Resetear los filtros:** La cabecera cuenta con un botón mediante el que resetear todos los filtros y ver de nuevo la ventana completa.",
                        ]
                    },
                    /* Vista empleados activos  */
                    {
                        id: "vista-activos",
                        title: "4. Vista de empleados activos",
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
                    /* Control de franja horaria */
                    {
                        id: "control-franja-horaria",
                        title: "5. Control de franja horaria",
                        content: "Esta funcionalidad permite al gestor personalizar la ventana temporal visible en la pizarra de planificación, facilitando el enfoque en periodos específicos del día según las necesidades operativas del equipo.",
                        image: `${baseUrl}/images/guide/control-franja-horaria.webp`,
                        features: [
                            "**Visualización por defecto optimizada:** Al cargar la pizarra, el sistema muestra un rango de 07:30 a 22:30, lo que permite ver la mayor parte de la jornada estándar sin desplazamientos laterales excesivos.",
                            "**Selector de rango flexible:** A través de un menú desplegable, el usuario puede alternar entre ver el día completo (00:00 - 24:00) o franjas específicas de mañana o tarde.",
                            "**Indicador de horas fuera de rango:** Si existen turnos o fracciones trabajadas fuera de la vista seleccionada, aparece una barra vertical de aviso en el lado correspondiente a las horas ocultas para que no se pase por alto ninguna información.",
                            "**Mejora de la claridad visual:** Al trabajar con cuadrantes más limpios y enfocados, se facilita la gestión de turnos complejos en equipos con horarios muy extendidos.",
                            "**Integridad de la planificación:** Aunque se filtre la vista temporal, el sistema mantiene todos los cálculos de horas totales y validaciones de descanso legal de forma global."
                        ]
                    },
                    /* Vista distribucion  */
                    {
                        id: "vista-distribucion",
                        title: "6. Control de empleados por franja horaria",
                        content: "  En la última línea del día podemos ver los empleados activos por franja horaria. Se dispone de dos modos de visualización a los que se accede clicando sobre 'Personas'. En el primer modo de visualización se verán los empleados activos totales por franja horaria, mientras que en el segundo modo se verán solo los del equipo seleccionado.",
                        image: `${baseUrl}/images/guide/distribucion.webp`,
                        features: [
                            "**Activación por clic:** La vista de distribución se activa haciendo clic sobre el texto 'Personas' situado en la parte inferior del día, permitiendo alternar entre los distintos modos de visualización disponibles.",
                            "**Distribución por franja horaria:** En esta vista se muestra el número de empleados activos en cada franja horaria del día, facilitando la detección de picos de carga o posibles carencias de personal.",
                            "**Dos modos de visualización:** El primer modo muestra el total de empleados activos por franja horaria. El segundo modo muestra únicamente los empleados pertenecientes al equipo seleccionado.",
                            "**Análisis rápido de cobertura:** Esta vista permite comprobar de un vistazo si la cobertura de personal es adecuada a lo largo del día, ayudando a tomar decisiones de ajuste en la planificación.",
                        ]
                    },
                    /* Control 12 horas  */
                    {
                        id: "control-12h",
                        title: "7. Control de descanso mínimo de 12 horas",
                        content: "El sistema garantiza el cumplimiento del descanso mínimo legal entre turnos. Al asignar un turno, se comprueba automáticamente que hayan transcurrido al menos 12 horas desde el último turno realizado por el empleado.",
                        image: `${baseUrl}/images/guide/control-12h.webp`,
                        features: [
                            "**Validación automática del descanso:** No se permite asignar un nuevo turno a un empleado si no han transcurrido 12 horas desde la finalización de su último turno.",
                            "**Bloqueo visual de franjas horarias:** Las franjas que incumplen el descanso mínimo aparecen deshabilitadas y sombreadas en rojo.",
                            "**Prevención de errores de planificación:** Las casillas bloqueadas no permiten interacción, evitando asignaciones incorrectas.",
                            "**Cumplimiento legislativo:** Este control asegura el respeto a los tiempos de descanso establecidos por la normativa laboral.",
                            "**Feedback inmediato:** El gestor identifica de forma visual y rápida cuándo un empleado no está disponible por descanso obligatorio."
                        ]
                    },
                    /* resumen del periodo */
                    {
                        id: "resumen-periodo",
                        title: "8. Resumen del periodo",
                        content: "En la parte final de la página encontraremos un resumen del periodo seleccionado, donde podremos consultar información detallada.",
                        image: `${baseUrl}/images/guide/resumen.webp`,
                        features: [
                            "**Jornada laboral:** Horas que el empleado debe realizar durante el periodo. Se calculan en función de su jornada diaria, teniendo en cuenta casos en los que el empleado cambia de jornada a mitad del periodo.",
                            "**Horas trabajadas:** Total de horas efectivamente realizadas durante el periodo.",
                            "**Varianza:** Diferencia entre las horas estipuladas en la jornada y las horas realmente trabajadas.",
                            "**Gráfica del periodo:** En el lateral derecho del resumen se muestra una gráfica visual con los días de trabajo de cada empleado durante el periodo, permitiendo ver de un vistazo la distribución de días trabajados y descansos. También se indican las horas totales por día.",
                            "**Datos totales:** En la última fila de la tabla se presenta el resumen global del periodo, con el total de horas de jornada, horas trabajadas y la desviación acumulada."
                        ]
                    },
                    /* Vista de impresion */
                    {
                        id: "vista-impresion",
                        title: "9. Vista de impresión y exportación a PDF",
                        content: "Clicando en el botón de imprimir tendrás acceso de forma rápida a la vista de impresión, permitiendo generar un resumen claro y profesional de los turnos y jornadas.",
                        image: `${baseUrl}/images/guide/print.webp`,
                        features: [
                            "**Exportación a PDF:** La vista de impresión permite guardar o compartir el resumen en formato PDF, facilitando su archivo o distribución.",
                            "**Optimizada para impresión:** El diseño se ajusta automáticamente para papel, asegurando que todos los datos y gráficos se vean claros y legibles al imprimir."
                        ]
                    }

                ]
            },
            /* Turnos Genericos */
            {
                id: "turnos-genericos",
                title: "Elaboración de cuadrantes mediante turnos genéricos",
                content: "Los turnos genéricos permiten definir patrones de planificación reutilizables que pueden aplicarse posteriormente a semanas concretas. Este enfoque facilita la creación rápida de cuadrantes manteniendo coherencia y consistencia en la asignación de turnos.",
                subsections: [
                    {
                        id: "seleccionar-semana",
                        title: "1. Seleccionar la semana genérica",
                        content: "El sistema permite configurar hasta 6 semanas genéricas distintas. Cada una representa un patrón de planificación reutilizable que podrás aplicar en cualquier momento.",
                        image: `${baseUrl}/images/guide/generic-header.webp`
                    },
                    {
                        id: "disenar-planificacion",
                        title: "2. Diseñar la planificación",
                        content: "En esta fase se define la estructura de turnos para cada día de la semana. Estás configurando el modelo base que servirá como referencia para generar cuadrantes reales.",
                        image: `${baseUrl}/images/guide/generic-roster.webp`,
                        features: [
                            "Definición de turnos por día de la semana.",
                            "Configuración independiente de cada semana genérica (hasta 6 disponibles).",
                            "Base reutilizable para múltiples periodos."
                        ]
                    },
                    {
                        id: "asignar-turnos",
                        title: "3. Asignación de empleados a turnos genéricos",
                        content: "La asignación de empleados es completamente flexible. Puedes trabajar de forma global o individual, adaptando la planificación según tus necesidades sin necesidad de rehacer todo el cuadrante.",
                        image: `${baseUrl}/images/guide/generic-config.webp`,
                        features: [
                            "Asignación manual de empleados mediante desplegable.",
                            "Opción de asignar un empleado por defecto a un turno.",
                            "Activación o desactivación de turnos genéricos (hasta 50 disponibles).",
                            "Los turnos inactivos no aparecen en la fase de diseño.",
                            "Posibilidad de limpiar asignaciones de forma masiva.",
                            "Edición parcial: puedes modificar un único turno sin afectar al resto."
                        ]
                    },
                    {
                        id: "generar-semana",
                        title: "4. Generación y análisis de la semana",
                        content: "Una vez definida la configuración, el sistema genera la semana seleccionada y ejecuta un análisis automático para validar la coherencia del cuadrante antes de su aplicación.",
                        image: `${baseUrl}/images/guide/generic-analize.webp`,
                        features: [
                            "Detección de solapamientos entre turnos.",
                            "Validación frente a ausencias y periodos de no disponibilidad.",
                            "Identificación de conflictos antes de su confirmación.",
                            "Separación entre turnos válidos y turnos conflictivos."
                        ]
                    },
                    {
                        id: "confirmar-semana",
                        title: "5. Confirmación de turnos",
                        content: "Tras el análisis, podrás revisar el resultado antes de confirmar los cambios. La aplicación del cuadrante se realiza de forma controlada para garantizar la integridad de los datos.",
                        image: `${baseUrl}/images/guide/generic-analize-confirm.webp`,
                        features: [
                            "Revisión previa de la planificación generada.",
                            "Confirmación explícita antes de guardar cambios.",
                            "Persistencia segura sin estados intermedios inconsistentes.",
                            "Integración automática en el cuadrante final."
                        ]
                    }
                ]
            },
            /* Insercion de turnos mediante formulario */
            {
                id: "turnos-formulario",
                title: "Inserción de turnos individuales mediante formulario",
                content: "El formulario de registro de turnos permite asignar manualmente un turno concreto a un empleado en una fecha y franja horaria específicas. Esta funcionalidad está pensada para ajustes puntuales, correcciones o asignaciones fuera de la planificación genérica.",
                subsections: [
                    /* Informacion general */
                    {
                        id: "informacion-general",
                        title: "1. Información general del formulario",
                        content: "Desde la vista **Registrar Turno**, el usuario puede seleccionar un empleado, una fecha y un horario de inicio y fin para crear un turno individual. El sistema guía el proceso mediante validaciones visuales y feedback inmediato.",
                        image: `${baseUrl}/images/guide/insertar-turno.webp`,
                        features: [
                            "Selector de empleado integrado para una selección rápida.",
                            "Selección de fecha mediante calendario.",
                            "Definición de hora de inicio y fin en intervalos de 15 minutos.",
                            "Cálculo automático de la duración total del turno antes de guardarlo.",
                            "El formulario se limpia automáticamente tras guardar un turno correctamente."
                        ]
                    },
                    /* Validaciones del formulario  */
                    {
                        id: "validaciones-solapamientos",
                        title: "2. Validaciones y solapamiento de turnos",
                        content: "Antes de guardar el turno, el sistema valida que la información sea correcta. Si el turno se solapa con otro turno existente del mismo empleado, el registro no se completará y se mostrará un mensaje de error.",
                        image: `${baseUrl}/images/guide/consejos.webp`,
                        features: [
                            "Todos los campos son obligatorios.",
                            "La hora de fin debe ser posterior a la hora de inicio.",
                            "Los horarios se ajustan automáticamente al cuarto de hora inferior.",
                            "No se permite registrar turnos solapados para un mismo empleado.",
                            "Mensajes de error claros cuando la validación falla."
                        ]
                    }

                ],
            },
            /* Resolucion de conflictos */
            {
                id: "Resolucion-conflictos",
                title: "Resolución de conflictos entre disponibilidad y cuadrante asignado",
                content: "Cuando se define un periodo de no disponibilidad (vacaciones, ausencias, etc.) sobre un cuadrante ya generado o recuperado, el sistema activa automáticamente el gestor de conflictos. Este detecta cualquier asignación que incumpla la nueva disponibilidad y la marca visualmente para su revisión.",
                subsections: [
                    {
                        id: "resolucion-conflictos",
                        title: "1. Selección de la semana y resolución de conflictos",
                        content: "Tras recuperar un periodo del cuadrante, podrás revisar y resolver los conflictos generados por cambios en la disponibilidad de los empleados. El sistema resaltará automáticamente las asignaciones afectadas para facilitar su identificación y corrección.",
                        image: `${baseUrl}/images/guide/conflicts.webp`,
                        features: [
                            "Las horas en conflicto aparecerán resaltadas y parpadeando en color amarillo.",
                            "Al hacer clic sobre una asignación en conflicto, podrás marcarla como resuelta o ajustarla manualmente.",
                            "Las horas con conflictos no se tienen en cuenta en el cálculo de totales semanales hasta que sean resueltas.",
                            "El objetivo es garantizar que el cuadrante final respete completamente la disponibilidad de cada empleado."
                        ]
                    }
                ]
            },
            /* Gestor de sustituciones*/
            {
                id: "sustituciones-time-fold",
                title: "Sistema de gestión automático de ausencias",
                content: "El sistema dispone de un motor automatizado de resolución de ausencias que analiza cada turno afectado y propone sustituciones óptimas en base a disponibilidad, reglas de negocio y carga de trabajo. Todo el proceso se realiza en memoria hasta su confirmación final, garantizando la integridad del cuadrante.",
                subsections: [
                    {
                        id: "selector-ausencia",
                        title: "1. Introducción de datos",
                        content: "Para iniciar el proceso, selecciona el empleado ausente y el rango de fechas en el que se produce la ausencia. El sistema identificará automáticamente todos los turnos afectados dentro del periodo seleccionado.",
                        image: `${baseUrl}/images/guide/selector-ausencia.webp`,
                    },
                    {
                        id: "proceso-busqueda",
                        title: "2. Proceso de búsqueda de sustituto",
                        content: "El sistema analiza cada turno afectado y ejecuta un proceso de optimización que evalúa todos los posibles candidatos disponibles. Este proceso tiene en cuenta tanto restricciones obligatorias como preferencias para generar la mejor propuesta posible.",
                        image: `${baseUrl}/images/guide/proceso-ausencias.webp`,
                        features: [
                            "Evita solapamientos: ningún empleado puede tener dos turnos en el mismo horario.",
                            "Respeta vacaciones, bajas y periodos de no disponibilidad (bloqueo absoluto).",
                            "Garantiza descansos mínimos entre jornadas.",
                            "Evita asignar más de un turno de sustitución al mismo empleado en el mismo día.",
                            "Tiene en cuenta la carga real de trabajo (turnos existentes + propuestas en curso).",
                            "Aplica reglas de rol: manager, keyholder o employee según el tipo de turno.",
                            "Prioriza candidatos con las habilidades necesarias para el puesto.",
                            "Considera preferencias de turno (mañana/tarde) y fines de semana.",
                            "Balancea la carga de horas entre empleados.",
                            "Excluye automáticamente candidatos previamente rechazados en ese turno."
                        ]
                    },
                    {
                        id: "revision-candidatos",
                        title: "3. Revisión y confirmación de propuestas",
                        content: "Una vez finalizado el proceso, el sistema presenta una propuesta completa de sustituciones. Podrás revisarla, aceptarla o rechazar candidatos individuales para forzar nuevas alternativas. Los cambios no se aplican en el cuadrante hasta su confirmación final.",
                        image: `${baseUrl}/images/guide/confirmacion-ausencias.webp`,
                        features: [
                            "Visualización clara de qué turnos han sido resueltos y cuáles no.",
                            "Posibilidad de rechazar candidatos individuales y relanzar el proceso.",
                            "Las propuestas se mantienen en memoria hasta su confirmación.",
                            "La confirmación aplica todos los cambios de forma atómica (sin estados intermedios).",
                            "El rechazo descarta completamente la propuesta sin afectar al cuadrante actual.",
                            "Garantiza que no se generen duplicidades ni inconsistencias en la base de datos."
                        ]
                    }
                ],
                video: "https://www.youtube.com/watch?v=mZ2rFmt2VUw"
            },
            /* Gestion de usuarios */
            {
                id: "gestion-usuarios",
                title: "Gestión de usuarios",
                content: "La sección de gestión de usuarios permite crear, modificar y eliminar usuarios del sistema, así como administrar toda la información asociada a cada empleado: rol, jornada laboral, equipo de trabajo, ausencias y disponibilidad.",
                subsections: [
                    /* Creacion y gestion de usuarios */
                    {
                        id: "gestion-datos-usuario",
                        title: "1. Creación y gestión de usuarios",
                        content: "Desde esta vista se pueden crear nuevos usuarios o gestionar usuarios existentes. Cada usuario puede tener rol de **administrador** o **usuario**, y está vinculado a un empleado del sistema.",
                        image: `${baseUrl}/images/guide/add-user.webp`,
                        features: [
                            "Creación de nuevos usuarios desde un único formulario.",
                            "Asignación de rol (Administrador o Usuario).",
                            "Búsqueda de usuarios existentes por email.",
                            "Selección directa de empleados desde un desplegable.",
                            "Edición de datos personales y laborales del usuario.",
                            "Eliminación de usuarios existentes.",
                            "Validación visual y mensajes de confirmación o error.",
                            "Establecimiento de preferencias a tener en cuenta en la asignación inteligente de turnos.",
                        ]
                    },
                    /* Gestion de condiciones laborales */
                    {
                        id: "gestion-condiciones-laborales",
                        title: "2. Gestión de condiciones laborales",
                        content: "Una vez seleccionado un empleado, el sistema permite gestionar su información laboral histórica y vigente, manteniendo un registro claro de los cambios.",
                        image: `${baseUrl}/images/guide/user-conditions.webp`,
                        features: [
                            "Gestión de jornadas laborales (horas semanales) con fecha de inicio.",
                            "Histórico de jornadas anteriores del empleado.",
                            "Asignación y cambio de equipo de trabajo con control de fechas.",
                            "Visualización del historial completo de equipos asignados.",
                            "Los cambios no sobrescriben datos anteriores, se registran como históricos."
                        ]
                    },
                    /* Ausencias y disponibilidad */
                    {
                        id: "gestion-ausencias-disponibilidad",
                        title: "3. Ausencias y disponibilidad",
                        content: "El sistema permite registrar tanto ausencias completas como tramos de indisponibilidad horaria para cada empleado.",
                        image: `${baseUrl}/images/guide/ausencias.webp`,
                        features: [
                            "Registro de ausencias con fecha de inicio y fin.",
                            "Asignación de motivo de ausencia.",
                            "Listado de ausencias existentes con opción de eliminación.",
                            "Gestión de disponibilidad horaria por día y franja horaria.",
                            "Registro de indisponibilidades parciales (hora inicio y fin).",
                            "Visualización clara de ausencias y disponibilidades activas."
                        ]
                    },
                    {
                        id: "gestion-preferencias",
                        title: "4. Preferencias de planificación",
                        content: "En este apartado se configuran las preferencias del empleado que el sistema tendrá en cuenta a la hora de generar la planificación y asignación de turnos.",
                        image: `${baseUrl}/images/guide/preferencias.webp`,
                        features: [
                            "Asignación del perfil de acceso del empleado (Manager, Keyholder o Empleado) con sus restricciones horarias asociadas.",
                            "Configuración de disponibilidad para realizar horas extra y límite máximo semanal de horas aceptadas.",
                            "Definición de preferencias de turno, incluyendo franja horaria preferida y restricciones específicas (por ejemplo, solo turno de tarde entre semana).",
                            "Gestión de disponibilidad en fines de semana mediante modalidad rotativa o fija.",
                            "Asignación de habilidades del empleado en tienda (como cobros en caja o departamento asignado) para mejorar la precisión en la planificación.",
                            "Guardado y actualización de preferencias para su aplicación automática en el sistema de planificación."
                        ]
                    }
                ],
            },
            /* Registros de jornada */
            {
                id: "registros-jornada",
                title: "Inserción de registros de jornada (fichajes)",
                content: "El sistema de fichajes permite registrar las entradas y salidas de los empleados y está directamente vinculado a los turnos planificados. Los registros de jornada son utilizados para el control horario, la detección de ausencias y la validación del cumplimiento de los horarios asignados.",
                subsections: [
                    /* Acceso y registro de fichajes */
                    {
                        id: "acceso-fichaje",
                        title: "1. Acceso y registro de fichajes",
                        content: "Los empleados realizan el fichaje mediante su **DNI y contraseña** desde la vista de control horario. El sistema identifica al usuario y registra automáticamente el fichaje asociado.",
                        image: `${baseUrl}/images/guide/timetrack-insert.webp`,
                        features: [
                            "Autenticación del empleado mediante DNI y contraseña.",
                            "Registro automático de fichaje de entrada o salida según el contexto del turno.",
                            "No es necesario seleccionar manualmente el tipo de fichaje.",
                            "El fichaje queda vinculado al turno correspondiente.",
                            "Confirmación visual inmediata tras realizar el fichaje."
                        ]
                    },
                    /* Control horario y validaciones */
                    {
                        id: "control-horario-validaciones",
                        title: "2. Control horario y validaciones automáticas",
                        content: "El sistema supervisa de forma continua los fichajes de los empleados en relación con sus horarios asignados.",
                        image: `${baseUrl}/images/guide/alert.webp`,
                        features: [
                            "Comprobación automática cada 30 minutos del estado de los fichajes.",
                            "Validación de fichajes dentro de una franja de ±15 minutos respecto a la hora de entrada o salida del turno.",
                            "Detección automática de faltas de fichaje.",
                            "Las ausencias se tienen en cuenta para evitar falsos avisos.",
                            "Envío automático de correos electrónicos informando de la incidencia.",
                            "Los fichajes fuera de la franja permitida quedan registrados para su revisión."
                        ]
                    }
                ],
            },
            /* Revision y correccion de fichajes */
            {
                id: "revision-fichajes",
                title: "Revisión y corrección de fichajes",
                content: "La revisión de fichajes permite controlar y corregir los registros de jornada asociados a los turnos. El sistema identifica automáticamente posibles incidencias y facilita su resolución manteniendo la trazabilidad de todas las modificaciones.",
                subsections: [
                    /* Deteccion automatica de fichajes incompletos */
                    {
                        id: "deteccion-incidencias",
                        title: "1. Detección automática de fichajes incompletos",
                        content: "El sistema analiza los registros de jornada y detecta de forma automática si falta algún fichaje de entrada o salida asociado a un turno.",
                        image: `${baseUrl}/images/guide/timetrack-revision.webp`,
                        features: [
                            "Asignación automática de cada fichaje como entrada o salida.",
                            "Detección de turnos con fichaje incompleto.",
                            "Identificación clara de faltas de fichaje.",
                            "Visualización centralizada de las incidencias de jornada.",
                        ]
                    },
                    /* Correccion e insercion manual */
                    {
                        id: "correccion-manual",
                        title: "2. Corrección e inserción manual de fichajes",
                        content: "Los gestores pueden corregir o completar los registros de jornada cuando se detectan errores o ausencias de fichaje.",
                        image: `${baseUrl}/images/guide/timetrack-modify.webp`,
                        features: [
                            "Inserción manual de fichajes de entrada o salida.",
                            "Corrección de horarios ya registrados.",
                            "Asignación directa del fichaje al turno correspondiente.",
                            "Actualización inmediata del estado del turno.",
                            "Control total sobre la coherencia de los registros."
                        ]
                    },
                    /* Notificaciones y trazabilidad */
                    {
                        id: "notificaciones-trazabilidad",
                        title: "3. Notificaciones, trazabilidad y exportación a PDF",
                        content: "Todas las modificaciones manuales quedan registradas y pueden ser consultadas o exportadas para su revisión.",
                        image: `${baseUrl}/images/guide/timetrack-report.webp`,
                        features: [
                            "Notificación por correo electrónico al empleado afectado.",
                            "Notificación por correo electrónico al gestor.",
                            "Registro de cada inserción o modificación manual.",
                            "Descarga de los registros de jornada en formato PDF.",
                            "Facilita auditorías y revisiones posteriores."
                        ]
                    }
                ],
            },
            /* Reportes mensuales */
            {
                id: "reportes",
                title: "Reportes y análisis de horas trabajadas",
                content: "La sección de reportes permite analizar y consolidar la información de jornadas y fichajes en un periodo determinado. Está disponible en dos modos: Ver Previsión, para consultar cualquier rango de fechas libre, y Cierre mes, para gestionar los periodos de liquidación oficiales y la bolsa de horas de cada empleado.",
                subsections: [
                    {
                        id: "modos-reporte",
                        title: "1. Modos de uso: Previsión y Cierre mes",
                        content: "El selector de modo permite alternar entre dos formas de trabajar con los reportes según el objetivo del gestor.",
                        image: `${baseUrl}/images/guide/report-modes.webp`,
                        features: [
                            "**Ver Previsión**: permite seleccionar cualquier rango de fechas mediante el selector de calendario y obtener un análisis instantáneo. Útil para consultas puntuales o análisis comparativos sin comprometer datos de liquidación.",
                            "**Cierre mes**: trabaja sobre periodos de liquidación predefinidos en el sistema. Al seleccionar un periodo, se generan o recuperan automáticamente las bolsas de horas de cada empleado activo en ese periodo.",
                            "Los periodos de liquidación muestran el nombre identificativo y el rango de fechas exacto definido por la empresa, reflejando la lógica de negocio propia de cada organización",
                        ]
                    },
                    {
                        id: "seleccion-periodo",
                        title: "2. Selección del periodo de análisis",
                        content: "Según el modo activo, la selección del periodo se realiza de forma distinta adaptándose al flujo de trabajo del gestor.",
                        image: `${baseUrl}/images/guide/report-datepicker.webp`,
                        features: [
                            "**Modo Previsión**: selector de fecha de inicio y fin mediante calendario. El reporte se genera bajo demanda al pulsar obtener.",
                            "**Modo Cierre mes**: selector de periodo de liquidación predefinido. Al seleccionar un periodo, los datos se cargan automáticamente sin necesidad de confirmar.",
                            "Los periodos de liquidación muestran el nombre del mes y el rango exacto de fechas para facilitar su identificación.",
                            "Análisis basado únicamente en el periodo seleccionado, sin interferir con otros periodos.",
                            "Evita cálculos manuales o consultas externas al sistema."
                        ]
                    },
                    {
                        id: "metricas-globales",
                        title: "3. Métricas globales del periodo",
                        content: "Una vez cargado el reporte, el sistema muestra un panel de métricas con los datos más relevantes del periodo, organizados por orden de importancia. El dato principal es el Total FTE, seguido de la composición FTE y las horas del periodo.",
                        image: `${baseUrl}/images/guide/report-metricas.webp`,
                        features: [
                            "**Total FTE**: capacidad laboral total de la empresa en el mes natural. Es la suma de Base FTE y Extra FTE. Un valor de 1.0 equivale a un empleado a jornada completa activo todo el mes.",
                            "**Base FTE**: correspondiente a las horas de contrato. Se calcula sobre una base de 30 días fijos, proporcional a la jornada de cada empleado y a los días activos en el mes. Un empleado a jornada completa todo el mes siempre representa exactamente 1.0 FTE independientemente de los días que tenga el mes.",
                            "**Extra FTE**: generado por las horas complementarias positivas. Muestra también el total de horas complementarias bajo el valor. Solo acumula empleados con saldo positivo; los negativos no compensan este valor.",
                            "**Horas contrato**: total de horas que el conjunto de empleados debería realizar según sus jornadas en el periodo de liquidación.",
                            "**Horas trabajadas**: total de horas efectivamente fichadas en el periodo.",
                            "**Horas pendientes**: diferencia negativa acumulada de los empleados que no han completado su jornada. Solo refleja los negativos; los positivos se muestran en el Extra FTE.",
                            "**Horas festivas y nocturnas**: mostradas como datos informativos complementarios, sin impacto en el cálculo FTE."
                        ]
                    },
                    {
                        id: "detalle-empleado",
                        title: "4. Detalle de horas por empleado",
                        content: "Bajo las métricas globales se muestra una tabla con el desglose individual de cada empleado incluido en el periodo.",
                        image: `${baseUrl}/images/guide/report-employee.webp`,
                        features: [
                            "**Horas jornada**: horas que el empleado debería realizar según su contrato en el periodo, teniendo en cuenta su fecha de alta, baja y posibles cambios de jornada a mitad de mes.",
                            "Los días de vacaciones (PTO) y festivos se excluyen automáticamente del cálculo de jornada, reduciendo la base proporcional de ese día.",
                            "**Horas trabajadas**: total de horas efectivamente fichadas por el empleado en el periodo.",
                            "**Complementarias**: diferencia entre horas trabajadas y horas de jornada. Puede ser positiva (horas extra realizadas) o negativa (horas pendientes de completar).",
                            "**Festivas**: horas trabajadas por el empleado en días festivos del periodo.",
                            "**Nocturnas**: horas trabajadas en franja nocturna. Solo se acumulan los días en los que el empleado supera 1 hora en franja nocturna.",
                        ]
                    },
                    {
                        id: "bolsa-horas",
                        title: "5. Gestión de la bolsa de horas (modo Cierre mes)",
                        content: "El modo Cierre mes amplía la tabla con columnas adicionales para gestionar la liquidación mensual de cada empleado. Cada empleado tiene una bolsa de horas asociada al periodo que recoge sus horas complementarias y la DI arrastrada del mes anterior.",
                        image: `${baseUrl}/images/guide/report-hourbank.webp`,
                        features: [
                            "**DI arrastrada**: horas de diferencia de imputación arrastradas del cierre del mes anterior. Se incorporan automáticamente al generar la bolsa del periodo.",
                            "**Total bolsa**: suma de las horas complementarias del periodo más la DI arrastrada. Es el total acumulado disponible para liquidar.",
                            "**A pagar**: campo editable donde el gestor introduce las horas que se van a pagar en la liquidación. Se rellena por defecto con el valor de Total bolsa, con un mínimo de 0. No es posible liquidar horas negativas.",
                            "**DI**: horas que quedan en la bolsa sin pagar tras la liquidación. Se arrastran automáticamente al mes siguiente como DI del próximo periodo.",
                            "**Estado**: refleja la situación actual de la bolsa. OPEN indica que está pendiente de cerrar, CLOSED que la liquidación ha sido guardada, y REOPENED que ha sido reabierta para corrección."
                        ]
                    },
                    {
                        id: "cierre-reapertura",
                        title: "6. Cierre y reapertura de bolsas",
                        content: "El cierre de la bolsa mensual congela los datos de liquidación del empleado para ese periodo. Si posteriormente se detectan cambios o errores, el sistema permite reabrirla manteniendo la trazabilidad completa de cada operación.",
                        image: `${baseUrl}/images/guide/report-close-reopen.webp`,
                        features: [
                            "**Cerrar bolsa**: guarda las horas a pagar introducidas, calcula la DI resultante y marca la bolsa como CLOSED. El campo A pagar deja de ser editable y muestra el valor guardado.",
                            "**Reabrir bolsa**: si tras el cierre se detectan cambios en los cuadrantes, indicados por el aviso ⚠️, o es necesario corregir el importe a pagar, el botón Reabrir permite volver al estado editable. La bolsa pasa a estado REOPENED.",
                            "El sistema registra quién realizó el cierre y la reapertura y en qué fecha, garantizando la trazabilidad completa de cada operación.",
                            "Al reabrir una bolsa, las entradas anteriores se invalidan automáticamente y se recalculan con los datos actuales de fichajes.",
                            "No es posible introducir un valor negativo en el campo A pagar. El sistema marca el valor a 0 como mínimo antes de guardar."
                        ]
                    },
                    {
                        id: "calculo-fte",
                        title: "7. Full-Time Equivalent: conceptos clave",
                        content: "El sistema realiza el calculo de FTE de forma que sea comparable entre meses independientemente de su duración, garantizando coherencia en los datos de coste mes a mes.",
                        image: `${baseUrl}/images/guide/report-fte.webp`,
                        features: [
                            "La base siempre es de 30 días fijos por mes, independientemente de si el mes tiene 28, 30 o 31 días. Esto garantiza que un empleado a jornada completa activo todo el mes represente exactamente 1.0 FTE en cualquier mes del año.",
                            "Si un empleado cambia de jornada a mitad de mes, el sistema calcula la proporción exacta de cada tramo y los suma. Por ejemplo, 18 días a 20h y 12 días a 12h generan contribuciones FTE independientes.",
                            "Si un empleado finaliza contrato antes del día 30, solo se computan los días efectivamente activos en la proporción correspondiente.",
                            "El Extra FTE se calcula sobre una base de horas mensual configurable según la lógica de negocio de la empresa, y solo acumula los empleados con horas complementarias positivas. Los empleados en negativo no reducen este valor.",
                            "El Total FTE es la suma directa de Base FTE y Extra FTE, y representa la capacidad laboral real desplegada por la empresa en ese mes natural."
                        ]
                    }
                ]
            },
            /* Vista de empleado */
            {
                id: "vista-empleado",
                title: "Vista de empleado",
                content: "La aplicación gestiona distintos roles de usuario. Cuando un empleado accede a la aplicación, dispone de una vista personalizada en la que puede consultar toda la información relacionada con su jornada laboral y su planificación.",
                subsections: [
                    {
                        id: "acceso-por-rol",
                        title: "1. Acceso y control por roles",
                        content: "El sistema adapta automáticamente la interfaz y las funcionalidades según el rol del usuario autenticado.",
                        image: `${baseUrl}/images/guide/login.webp`,
                        features: [
                            "Gestión de accesos basada en roles.",
                            "El empleado solo puede visualizar información propia.",
                            "Restricción de acceso a vistas de gestión y administración.",
                            "Interfaz simplificada y orientada a la consulta.",
                            "Seguridad y privacidad de los datos garantizadas."
                        ]
                    },
                    {
                        id: "informacion-laboral",
                        title: "2. Consulta de información laboral",
                        content: "Desde la vista de empleado se puede acceder de forma centralizada a toda la información relacionada con su actividad.",
                        image: `${baseUrl}/images/guide/vista-mes.webp`,
                        features: [
                            "Visualización de horarios y turnos asignados.",
                            "Consulta del histórico de fichajes de entrada y salida.",
                            "Acceso a vacaciones planificadas y solicitadas.",
                            "Visualización de ausencias y justificantes asociados.",
                            "Consulta organizada por fechas y periodos."
                        ]
                    },
                ]
            },


        ]
    },
    /* Modulo IA */
    {
        id: "ia",
        title: "Inteligencia Artificial",
        sections: [
            /* Insertar turno IA */
            {
                id: "ia-insert",
                title: "Funciones de IA integradas en la WebApp",
                content: "El sistema cuenta con un asistente de IA integrado en la aplicación que permite insertar turnos utilizando lenguaje natural. A través de un chat interactivo, el gestor puede comunicarse con la planificación sin necesidad de realizar la asignación manual.",
                subsections: [
                    {
                        id: "chat-ia",
                        title: "Chat de planificación con IA (Experimental)",
                        content: "La inserción de turnos mediante IA se realiza desde un chat que interactúa directamente con la página de planificación.",
                        image: `${baseUrl}/images/guide/chat-ia.webp`,
                        features: [
                            "**Interacción en lenguaje natural:** El gestor puede escribir instrucciones como “Añade un turno a Ross Geller este día a esta hora”.",
                            "**Interpretación automática de la instrucción:** La IA identifica al empleado, la fecha y el horario indicados.",
                            "**Inserción directa del turno:** El turno se añade automáticamente a la planificación sin intervención manual.",
                            "**Sincronización inmediata con la Roster Page:** Los cambios realizados mediante IA se reflejan al instante en la pizarra.",
                            "**Reducción del tiempo de planificación:** Permite realizar ajustes rápidos sin navegar por múltiples vistas."
                        ]
                    },
                    {
                        id: "analisis-cuadrante",
                        title: "Analisis de cuadrantes mediante Inteligencia Artificial (Experimental)",
                        content: "Una vez diseñado el cuadrante se puede interactuar con el chat para realizar ciertas consultas como:",
                        features: [
                            "¿Cuantos empleados cierran el dia lunes?",
                            "¿Esta equilibrada la planificacion a lo largo de la semana?",
                            "¿Cuales el proximo dia que coindicen estos dos perfiles?",
                        ]
                    }

                ]
            },

        ]
    },
];
