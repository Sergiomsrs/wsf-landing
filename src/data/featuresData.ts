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
        badge: "Diseño libre de Cuadrantes",
        icon: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
    },
    {
        id: 2,
        title: "Control de turnos desactivados",
        description: "Ciertos turnos pueden ser desactivados para garantizar el cumplimiento de las restricciones aplicables. Esto se realiza desactivando las franjas horarias correspondientes, como se ilustra en el siguiente ejemplo. Las franjas horarias que no están disponibles se muestran desactivadas y quedan inhabilitadas para selección. Por ejemplo, las franjas horarias se desactivan automáticamente hasta que se hayan cumplido 12 horas desde la salida del turno de trabajo del día anterior.",
        imageSrc: `${baseUrl}control-doce-horas.webp`,
        imageAlt: "Control de turnos desactivados",
        theme: "blue",
        badge: "Cumplimiento legislativo",
        icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 17m-5.5-5.5l-2-2"
    },
    {
        id: 3,
        title: "Control de Filtros",
        description: "En el encabezado del área de trabajo, se encuentran dos filtros clave: el primero permite seleccionar un rango de fechas para ajustar la visualización según el intervalo deseado, ofreciendo flexibilidad en la gestión del tiempo. El segundo filtro facilita la visualización del personal por equipo de trabajo, simplificando la organización y gestión en grandes equipos.",
        imageSrc: `${baseUrl}control-filtros.webp`,
        imageAlt: "Control de Filtros",
        theme: "purple",
        badge: "Organización Eficiente",
        icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    },
    {
        id: 4,
        title: "Gestión de disponibilidad",
        description: "Aquí puedes gestionar la disponibilidad de los empleados, ajustando su calendario según vacaciones, permisos u otros tipos de ausencia. Cuando un empleado está de vacaciones o tiene un permiso, los campos correspondientes se deshabilitan automáticamente y se resaltan en rojo para una identificación visual clara, asegurando una planificación precisa y eficiente.",
        imageSrc: `${baseUrl}control-disponibilidad.webp`,
        imageAlt: "Gestión de disponibilidad",
        theme: "orange",
        badge: "Organización Eficiente",
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
        id: 5,
        title: "Pie de zona de trabajo",
        description: "En esta sección, puedes guardar o restablecer fácilmente el área de trabajo según tus necesidades. También se presenta un resumen detallado del intervalo de tiempo seleccionado, ofreciendo una visión clara de las jornadas laborales de los empleados. Este resumen incluye las horas totales trabajadas, la diferencia con las horas contratadas y un desglose visual de las horas trabajadas por día. Además, en la zona de resumen por días, el sistema detecta automáticamente los días festivos y ajusta la base de horas del empleado en consecuencia, asegurando un cálculo preciso y eficiente.",
        imageSrc: `${baseUrl}pie-zona-trabajo.webp`,
        imageAlt: "Pie de zona de trabajo",
        theme: "green",
        badge: "Organización Eficiente",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
    },
    {
        id: 6,
        title: "Resumen de turnos por empleado",
        description: "Explora un listado detallado de los turnos laborales en un formato claro y estructurado. Esta sección identifica automáticamente los turnos partidos y presenta una vista intuitiva y fácil de entender para cada empleado. Además, ofrece un resumen completo del período seleccionado, incluyendo la base de horas programadas, las horas ya trabajadas y las pendientes por gestionar.",
        imageSrc: `${baseUrl}resumen-semanal.webp`,
        imageAlt: "Resumen de turnos por empleado",
        theme: "yellow",
        badge: "Organización Eficiente",
        icon: "M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2H9m0 0V3m0 2h2m-2 8v2m0 0v2m0-2h2m-2 0H7"
    },
    {
        id: 7,
        title: "Registro de Jornada",
        description: "Registra tus entradas y salidas de forma rápida y sencilla. Una interfaz intuitiva que garantiza fichajes precisos y un control horario fiable para todo el equipo.",
        imageSrc: `${baseUrl}registro-jornada.webp`,
        imageAlt: "Herramienta de Fichajes",
        theme: "purple",
        badge: "Cumplimiento legislativo",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
        id: 8,
        title: "Revision de fichajes",
        description: "Revisa y gestiona todos los fichajes de tus empleados desde un solo lugar. Visualiza entradas y salidas, corrige errores y asegura la precisión de los registros diarios.",
        imageSrc: `${baseUrl}revision-fichajes.webp`,
        imageAlt: "Revision de fichajes",
        theme: "purple",
        badge: "Cumplimiento legislativo",
        icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
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

