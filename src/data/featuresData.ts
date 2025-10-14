// Features data for the slider component
export interface Feature {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    theme: 'emerald' | 'blue' | 'purple' | 'orange' | 'red' | 'yellow' | 'green';
    badge: string;
    icon: string; // SVG path data
}

// Get the base URL for proper asset routing
const baseUrl = import.meta.env.BASE_URL;

export const featuresData: Feature[] = [
    {
        id: 1,
        title: "Diseñador de turnos abierto",
        description: "Diseña los horarios de tu equipo con total libertad. Sin plantillas, sin turnos genéricos. Un espacio flexible donde cada jornada se adapta exactamente a tus necesidades.",
        imageSrc: `${baseUrl}general.webp`,
        imageAlt: "Diseñador de turnos abierto",
        theme: "emerald",
        badge: "Diseño Creativo",
        icon: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
    },
    {
        id: 2,
        title: "Control de turnos desactivados",
        description: "Ciertos turnos pueden ser desactivados para garantizar el cumplimiento de las restricciones aplicables. Esto se realiza desactivando las franjas horarias correspondientes, como se ilustra en el siguiente ejemplo. Las franjas horarias que no están disponibles se muestran desactivadas y quedan inhabilitadas para selección. Por ejemplo, las franjas horarias se desactivan automáticamente hasta que se hayan cumplido 12 horas desde la salida del turno de trabajo del día anterior.",
        imageSrc: `${baseUrl}control-doce-horas.webp`,
        imageAlt: "Control de turnos desactivados",
        theme: "red",
        badge: "Control Estricto",
        icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 17m-5.5-5.5l-2-2"
    },
    {
        id: 3,
        title: "Control de Filtros",
        description: "En el encabezado del área de trabajo, se encuentran dos filtros clave: el primero permite seleccionar un rango de fechas para ajustar la visualización según el intervalo deseado, ofreciendo flexibilidad en la gestión del tiempo. El segundo filtro facilita la visualización del personal por equipo de trabajo, simplificando la organización y gestión en grandes equipos.",
        imageSrc: `${baseUrl}control-filtros.webp`,
        imageAlt: "Control de Filtros",
        theme: "blue",
        badge: "Organización Visual",
        icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    },
    {
        id: 4,
        title: "Gestión de disponibilidad",
        description: "Aquí puedes gestionar la disponibilidad de los empleados, ajustando su calendario según vacaciones, permisos u otros tipos de ausencia. Cuando un empleado está de vacaciones o tiene un permiso, los campos correspondientes se deshabilitan automáticamente y se resaltan en rojo para una identificación visual clara, asegurando una planificación precisa y eficiente.",
        imageSrc: `${baseUrl}control-disponibilidad.webp`,
        imageAlt: "Gestión de disponibilidad",
        theme: "orange",
        badge: "Gestión Personal",
        icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-7.5h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    },
    {
        id: 5,
        title: "Pie de zona de trabajo",
        description: "En esta sección, puedes guardar o restablecer fácilmente el área de trabajo según tus necesidades. También se presenta un resumen detallado del intervalo de tiempo seleccionado, ofreciendo una visión clara de las jornadas laborales de los empleados. Este resumen incluye las horas totales trabajadas, la diferencia con las horas contratadas y un desglose visual de las horas trabajadas por día. Además, en la zona de resumen por días, el sistema detecta automáticamente los días festivos y ajusta la base de horas del empleado en consecuencia, asegurando un cálculo preciso y eficiente.",
        imageSrc: `${baseUrl}pie-zona-trabajo.webp`,
        imageAlt: "Pie de zona de trabajo",
        theme: "green",
        badge: "Análisis Inteligente",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
    },
    {
        id: 6,
        title: "Resumen de turnos por empleado",
        description: "Explora un listado detallado de los turnos laborales en un formato claro y estructurado. Esta sección identifica automáticamente los turnos partidos y presenta una vista intuitiva y fácil de entender para cada empleado. Además, ofrece un resumen completo del período seleccionado, incluyendo la base de horas programadas, las horas ya trabajadas y las pendientes por gestionar.",
        imageSrc: `${baseUrl}resumen-semanal.webp`,
        imageAlt: "Resumen de turnos por empleado",
        theme: "yellow",
        badge: "Reportes Detallados",
        icon: "M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2H9m0 0V3m0 2h2m-2 8v2m0 0v2m0-2h2m-2 0H7"
    },
    {
        id: 7,
        title: "Registro de Jornada",
        description: "Registra tus entradas y salidas de forma rápida y sencilla. Una interfaz intuitiva que garantiza fichajes precisos y un control horario fiable para todo el equipo.",
        imageSrc: `${baseUrl}registro-jornada.webp`,
        imageAlt: "Herramienta de Fichajes",
        theme: "red",
        badge: "Control de Asistencia",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
        id: 8,
        title: "Revisión de fichajes",
        description: "Revisa y gestiona todos los fichajes de tus empleados desde un solo lugar. Visualiza entradas y salidas, corrige errores y asegura la precisión de los registros diarios.",
        imageSrc: `${baseUrl}revision-fichajes.webp`,
        imageAlt: "Revisión de fichajes",
        theme: "red",
        badge: "Supervisión Avanzada",
        icon: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
    }
    ,
    {
        id: 9,
        title: "Vista de Planificación Mensual",
        description: "Visualiza de un vistazo tus turnos y ausencias del mes, con una vista clara y organizada de tu horario.",
        imageSrc: `${baseUrl}planificacion-mensual-admin.webp`,
        imageAlt: "Planificación mensual",
        theme: "purple",
        badge: "Vista Panorámica",
        icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    },
    {
        id: 10,
        title: "Configurador Semanal",
        description: "Genera nuevas semanas de trabajo de forma fácil mediante la asignación de turnos genéricos preestablecidos.",
        imageSrc: `${baseUrl}setup-week.webp`,
        imageAlt: "Setup Week",
        theme: "emerald",
        badge: "Automatización Inteligente",
        icon: "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
    }
    ,
    {
        id: 11,
        title: "Inserción de Turnos Puntuales",
        description: "Gestiona facilmente la inserción o modificación de turnos puntuales mediante formulario. Con esta funcionalidad, se facilita la inserción de turnos sin necesidad de abrir el panel gráfico haciendo mas comodo el trabajo en dispositivos moviles.",
        imageSrc: `${baseUrl}turnos-puntuales.webp`,
        imageAlt: "Turnos Puntuales",
        theme: "orange",
        badge: "Gestión Rápida",
        icon: "M12 4.5v15m7.5-7.5h-15"
    }
    ,
    {
        id: 12,
        title: "Elaboración de Reportes",
        description: "Genera informes detallados seleccionando un rango de fechas, con totales de horas y personal del mes, y desglose por empleado y tipo de horas, para un control preciso de la actividad.",
        imageSrc: `${baseUrl}reportes-mensuales.webp`,
        imageAlt: "Elaboración Reportes",
        theme: "yellow",
        badge: "Informes Ejecutivos",
        icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    }
    ,
    {
        id: 13,
        title: "Gestión de Empleados",
        description: "Gestiona todos los datos de los empleados, fechas de alta y baja, equipo de trabajo, periodos de ausencia, gestión de disponibilidad",
        imageSrc: `${baseUrl}gestion-usuarios.webp`,
        imageAlt: "Gestión Empleados",
        theme: "orange",
        badge: "Recursos Humanos",
        icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    }
    ,
    {
        id: 14,
        title: "Gestión de Acceso Mediante Roles",
        description: "Acceso a la aplicación controlado mediante roles que definiran la interfaz grafica y las funcionalidades disponibles.",
        imageSrc: `${baseUrl}login-page.webp`,
        imageAlt: "Login Page",
        theme: "red",
        badge: "Seguridad Avanzada",
        icon: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
    }
];

// Theme configuration for styling
export const themeConfig = {
    emerald: {
        gradient: 'from-emerald-600/20 to-blue-600/20',
        iconBg: 'bg-emerald-500/20',
        iconBorder: 'border-emerald-500/30',
        iconColor: 'text-emerald-400',
        badgeColor: 'text-emerald-400',
        hoverBorder: 'hover:border-emerald-500/30'
    },
    blue: {
        gradient: 'from-blue-600/20 to-purple-600/20',
        iconBg: 'bg-blue-500/20',
        iconBorder: 'border-blue-500/30',
        iconColor: 'text-blue-400',
        badgeColor: 'text-blue-400',
        hoverBorder: 'hover:border-blue-500/30'
    },
    purple: {
        gradient: 'from-purple-600/20 to-pink-600/20',
        iconBg: 'bg-purple-500/20',
        iconBorder: 'border-purple-500/30',
        iconColor: 'text-purple-400',
        badgeColor: 'text-purple-400',
        hoverBorder: 'hover:border-purple-500/30'
    },
    orange: {
        gradient: 'from-orange-600/20 to-red-600/20',
        iconBg: 'bg-orange-500/20',
        iconBorder: 'border-orange-500/30',
        iconColor: 'text-orange-400',
        badgeColor: 'text-orange-400',
        hoverBorder: 'hover:border-orange-500/30'
    },
    red: {
        gradient: 'from-red-600/20 to-pink-600/20',
        iconBg: 'bg-red-500/20',
        iconBorder: 'border-red-500/30',
        iconColor: 'text-red-400',
        badgeColor: 'text-red-400',
        hoverBorder: 'hover:border-red-500/30'
    },
    yellow: {
        gradient: 'from-yellow-600/20 to-orange-600/20',
        iconBg: 'bg-yellow-500/20',
        iconBorder: 'border-yellow-500/30',
        iconColor: 'text-yellow-400',
        badgeColor: 'text-yellow-400',
        hoverBorder: 'hover:border-yellow-500/30'
    },
    green: {
        gradient: 'from-green-600/20 to-emerald-600/20',
        iconBg: 'bg-green-500/20',
        iconBorder: 'border-green-500/30',
        iconColor: 'text-green-400',
        badgeColor: 'text-green-400',
        hoverBorder: 'hover:border-green-500/30'
    }
};

