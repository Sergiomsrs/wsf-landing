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
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
        id: 3,
        title: "Control de Filtros",
        description: "En el encabezado del área de trabajo, se encuentran dos filtros clave: el primero permite seleccionar un rango de fechas para ajustar la visualización según el intervalo deseado, ofreciendo flexibilidad en la gestión del tiempo. El segundo filtro facilita la visualización del personal por equipo de trabajo, simplificando la organización y gestión en grandes equipos.",
        imageSrc: `${baseUrl}control-filtros.webp`,
        imageAlt: "Control de Filtros",
        theme: "purple",
        badge: "Organización Eficiente",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    },
    {
        id: 4,
        title: "Gestión de disponibilidad",
        description: "Aquí puedes gestionar la disponibilidad de los empleados, ajustando su calendario según vacaciones, permisos u otros tipos de ausencia. Cuando un empleado está de vacaciones o tiene un permiso, los campos correspondientes se deshabilitan automáticamente y se resaltan en rojo para una identificación visual clara, asegurando una planificación precisa y eficiente.",
        imageSrc: `${baseUrl}favicon.svg`,
        imageAlt: "Gestión de disponibilidad",
        theme: "orange",
        badge: "Organización Eficiente",
        icon: "M15 17h5l-5 5v-5zM4.828 7l10.586 10.586c.781.781 2.047.781 2.828 0l1.414-1.414c.781-.781.781-2.047 0-2.828L9.242 3.828c-.781-.781-2.047-.781-2.828 0L4.828 5.414c-.781.781-.781 2.047 0 2.828z"
    },
    {
        id: 5,
        title: "Pie de zona de trabajo",
        description: "En esta sección, puedes guardar o restablecer fácilmente el área de trabajo según tus necesidades. También se presenta un resumen detallado del intervalo de tiempo seleccionado, ofreciendo una visión clara de las jornadas laborales de los empleados. Este resumen incluye las horas totales trabajadas, la diferencia con las horas contratadas y un desglose visual de las horas trabajadas por día. Además, en la zona de resumen por días, el sistema detecta automáticamente los días festivos y ajusta la base de horas del empleado en consecuencia, asegurando un cálculo preciso y eficiente.",
        imageSrc: `${baseUrl}favicon.svg`,
        imageAlt: "Pie de zona de trabajo",
        theme: "orange",
        badge: "Organización Eficiente",
        icon: "M15 17h5l-5 5v-5zM4.828 7l10.586 10.586c.781.781 2.047.781 2.828 0l1.414-1.414c.781-.781.781-2.047 0-2.828L9.242 3.828c-.781-.781-2.047-.781-2.828 0L4.828 5.414c-.781.781-.781 2.047 0 2.828z"
    },
    {
        id: 6,
        title: "Resumen de turnos por empleado",
        description: "Explora un listado detallado de los turnos laborales en un formato claro y estructurado. Esta sección identifica automáticamente los turnos partidos y presenta una vista intuitiva y fácil de entender para cada empleado. Además, ofrece un resumen completo del período seleccionado, incluyendo la base de horas programadas, las horas ya trabajadas y las pendientes por gestionar.",
        imageSrc: `${baseUrl}resumen-semanal.webp`,
        imageAlt: "Resumen de turnos por empleado",
        theme: "orange",
        badge: "Organización Eficiente",
        icon: "M15 17h5l-5 5v-5zM4.828 7l10.586 10.586c.781.781 2.047.781 2.828 0l1.414-1.414c.781-.781.781-2.047 0-2.828L9.242 3.828c-.781-.781-2.047-.781-2.828 0L4.828 5.414c-.781.781-.781 2.047 0 2.828z"
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

