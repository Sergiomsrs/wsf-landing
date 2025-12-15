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
    /* Modulo Secciones Principales */
    {
        id: "secciones-principales",
        title: "Secciones Principales",
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
                            "**Vista de distribución:** En la última línea del día podemos ver los empleados activos por franja horaria. Se dispone de dos modos de visualización a los que se accede clicando sobre 'Personas'. En el primer modo de visualización se verán los empleados activos totales por franja horaria, mientras que en el segundo modo se verán solo los del equipo seleccionado."
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
                    /* Vista distribucion  */
                    {
                        id: "vista-distribucion",
                        title: "5. Control de empleados por franja horaria",
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
                        title: "6. Control de descanso mínimo de 12 horas",
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
                        title: "7. Resumen del periodo",
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
                    {
                        id: "vista-impresion",
                        title: "8. Vista de impresión y exportación a PDF",
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
                content: "A través de la asignación de turnos genéricos, se dispone de otra forma de elaborar cuadrantes. En este caso se realizarán dos partes principales.",
                subsections: [
                    /* Seleccionar semana */
                    {
                        id: "seleccionar-semana",
                        title: "1. Seleccionar la semana genérica",
                        content: "El sistema admite hasta 6 semanas diferentes para configurar turnos genéricos.",
                        image: `${baseUrl}/images/guide/generic-header.webp`
                    },
                    /* Diseñar planificacion */
                    {
                        id: "disenar-planificacion",
                        title: "2. Diseñar la planificación",
                        content: "Diseñar la planificación de los empleados genéricos para todos los días de esa semana.",
                        image: `${baseUrl}/images/guide/generic-roster.webp`
                    },
                    /* Asignar turnos */
                    {
                        id: "asignar-turnos",
                        title: "3. Asignar los turnos genéricos",
                        content: "**Asignación flexible de turnos:** No es necesario asignar todos los turnos de la semana de una sola vez. Puedes trabajar empleado por empleado. Si una semana ya está creada, también es posible asignar un turno individualmente a un único empleado sin necesidad de rehacer toda la planificación.",
                        image: `${baseUrl}/images/guide/generic-config.webp`,
                        features: [
                            "Desplegable para asignar el empleado que realizará el turno.",
                            "Botón para asignar el empleado por defecto a ese turno.",
                            "Botón para activar o desactivar el turno genérico. El sistema cuenta con 50 turnos disponibles y solo los turnos activos aparecerán en la ventana de diseño.",
                            "Botón para poner en blanco todos los empleados asignados. Este botón está pensado para cuando solo se quiere añadir una persona al cuadrante."
                        ]
                    },
                    /* Configurar semana */
                    {
                        id: "configurar-semana",
                        title: "Configurar los roles y empleados para la semana laboral",
                        content: "Una vez configurados los turnos, deberás elegir la semana genérica y la fecha concreta a la que se aplicarán. Tras asignar los turnos, es necesario cargar la semana en la Roster Page, donde podrás revisar y solucionar posibles conflictos derivados de vacaciones, ausencias o periodos de no disponibilidad. Como mencionamos en el punto 1, estos conflictos aparecerán marcados con un parpadeo amarillo.",
                        image: `${baseUrl}/images/guide/generic-select.webp`
                    },
                    /* Asiganar empleados */
                    {
                        id: "configuracion-empleados",
                        title: "Configuración de empleados por turno",
                        content: "Al preparar la semana, se selecciona qué empleado realizará cada turno genérico. Para agilizar el proceso, puedes configurar empleados por defecto para cada turno. Aun así, todo está pensado para ser fácilmente editable: puedes modificar la asignación en cualquier momento e incluso asignar el mismo turno genérico a varios empleados si lo necesitas."
                    },
                    /* Resolver conflictos */
                    {
                        id: "resolucion-conflictos",
                        title: "4. Selección de la semana y resolución de conflictos",
                        content: "Una vez configurados los turnos, deberás elegir la semana genérica y la fecha concreta a la que se aplicarán. Tras asignar los turnos, es necesario cargar la semana en la **Roster Page**, donde podrás revisar y solucionar posibles conflictos derivados de vacaciones, ausencias o periodos de no disponibilidad.",
                        image: `${baseUrl}/images/guide/conflicts.webp`,
                        features: [
                            "Seleccionar la semana asignada. Se rellena la fecha de inicio que siempre debe ser lunes y la fecha de fin se autocompletará.",
                            "Seleccionar el ciclo que representa la semana genérica a asignar.",
                            "Botón para enviar la configuración y generar el cuadrante."
                        ]
                    },
                    /* Ejemplo resolucion de conflictos */
                    {
                        id: "conflictos-ejemplo",
                        title: "Ejemplo de resolución de conflictos",
                        content: "Como vimos anteriormente, un empleado puede tener días de vacaciones asignados y franjas horarias en las que no puede trabajar por motivos personales. En el caso de asignarle un turno mediante este proceso, se marcará en amarillo en la planificación para que se pueda solucionar.",
                        image: `${baseUrl}/images/guide/generic-roster.webp`,
                    }
                ],
                video: "https://youtu.be/WRrTnhw_hBo"
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
                            "Validación visual y mensajes de confirmación o error."
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

            /* Reportes mensuales */
            {
                id: "reportes",
                title: "Reportes y análisis de horas trabajadas",
                content: "La sección de reportes permite analizar y consolidar la información de jornadas y fichajes en un periodo determinado. Estos reportes están pensados para facilitar el control horario, la planificación y la toma de decisiones.",
                subsections: [
                    {
                        id: "seleccion-periodo",
                        title: "1. Selección del periodo de análisis",
                        content: "El gestor puede generar reportes seleccionando un rango de fechas específico.",
                        image: `${baseUrl}/images/guide/report-datepicker.webp`,
                        features: [
                            "Selección de fecha de inicio y fin mediante calendario.",
                            "Generación del reporte bajo demanda.",
                            "Análisis basado únicamente en el periodo seleccionado.",
                            "Actualización automática de los datos mostrados.",
                            "Evita cálculos manuales o externos."
                        ]
                    },
                    {
                        id: "metricas-globales",
                        title: "2. Métricas globales del periodo",
                        content: "Una vez generado el reporte, el sistema muestra un resumen con las métricas principales del periodo analizado.",
                        image: `${baseUrl}/images/guide/report-metricas.webp`,
                        features: [
                            "Visualización de las horas totales del periodo.",
                            "Desglose entre horas base (FTE) y horas extra.",
                            "Cálculo de horas trabajadas y complementarias.",
                            "Preparado para incluir horas festivas y nocturnas.",
                            "Visión global inmediata del estado del periodo."
                        ]
                    },
                    {
                        id: "detalle-empleado",
                        title: "3. Detalle de horas por empleado",
                        content: "El reporte incluye una tabla detallada con el desglose de horas de cada empleado.",
                        image: `${baseUrl}/images/guide/report-employee.webp`,
                        features: [
                            "Listado de empleados incluidos en el periodo.",
                            "Horas de jornada planificada.",
                            "Horas efectivamente trabajadas.",
                            "Cálculo de horas complementarias.",
                            "Separación de horas festivas y nocturnas.",
                            "Facilita revisiones individuales y comparativas."
                        ]
                    }
                ]
            }


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
                        title: "Chat de planificación con IA",
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
