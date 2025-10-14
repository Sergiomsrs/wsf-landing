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
        description: "Diseña los horarios de tu equipo con total libertad. Sin plantillas ni turnos genéricos, cada jornada se adapta exactamente a tus necesidades, permitiéndote crear, mover o ajustar franjas horarias según la realidad de tu equipo y los imprevistos diarios.",
        imageSrc: `${baseUrl}general.webp`,
        imageAlt: "Diseñador de turnos abierto",
        theme: "emerald",
        badge: "Diseño Creativo",
        icon: "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
    },
    {
        id: 2,
        title: "Control de turnos desactivados",
        description: "Permite desactivar franjas horarias para asegurar que los turnos cumplan con todas las restricciones de descanso y normativa interna. Las franjas no disponibles se muestran inhabilitadas y se actualizan automáticamente según los turnos anteriores, evitando errores en la planificación y facilitando una gestión eficiente de los horarios.",
        imageSrc: `${baseUrl}control-doce-horas.webp`,
        imageAlt: "Control de turnos desactivados",
        theme: "red",
        badge: "Control Estricto",
        icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 17m-5.5-5.5l-2-2"
    },
    {
        id: 3,
        title: "Control de Filtros",
        description: "Ofrece filtros avanzados en el encabezado del área de trabajo para seleccionar rangos de fechas y visualizar al personal por equipos. Esto permite ajustar la información que se muestra, facilitando la gestión de grandes equipos y proporcionando una visión clara y personalizada del calendario laboral según necesidades específicas.",
        imageSrc: `${baseUrl}control-filtros.webp`,
        imageAlt: "Control de Filtros",
        theme: "blue",
        badge: "Organización Visual",
        icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    },
    {
        id: 4,
        title: "Gestión de disponibilidad",
        description: "Permite ajustar la disponibilidad de cada empleado, marcando vacaciones, permisos o cualquier tipo de ausencia. Las franjas no disponibles se resaltan visualmente, evitando conflictos de planificación y facilitando una vista clara de los días en los que cada miembro del equipo puede trabajar, asegurando una programación eficiente y realista.",
        imageSrc: `${baseUrl}control-disponibilidad.webp`,
        imageAlt: "Gestión de disponibilidad",
        theme: "orange",
        badge: "Gestión Personal",
        icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-7.5h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    },
    {
        id: 5,
        title: "Pie de zona de trabajo",
        description: "Proporciona un resumen completo del área de trabajo, permitiendo guardar o restablecer configuraciones y mostrando totales de horas, diferencias con las horas contratadas y un desglose diario. Además, ajusta automáticamente los días festivos, ofreciendo un control preciso y visual de la actividad laboral de todo el equipo.",
        imageSrc: `${baseUrl}pie-zona-trabajo.webp`,
        imageAlt: "Pie de zona de trabajo",
        theme: "green",
        badge: "Análisis Inteligente",
        icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V9a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
    },
    {
        id: 6,
        title: "Resumen de turnos por empleado",
        description: "Muestra un listado completo y detallado de todos los turnos de cada empleado, identificando automáticamente los partidos y ofreciendo un resumen completo del período seleccionado, incluyendo base de horas, horas trabajadas y pendientes por gestionar, facilitando la toma de decisiones y la planificación del equipo.",
        imageSrc: `${baseUrl}resumen-semanal.webp`,
        imageAlt: "Resumen de turnos por empleado",
        theme: "yellow",
        badge: "Reportes Detallados",
        icon: "M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2H9m0 0V3m0 2h2m-2 8v2m0 0v2m0-2h2m-2 0H7"
    },
    {
        id: 7,
        title: "Registro de Jornada",
        description: "Permite a los empleados registrar entradas y salidas de forma rápida y precisa mediante una interfaz intuitiva, manteniendo un control horario fiable para todo el equipo y asegurando que cada jornada quede correctamente documentada.",
        imageSrc: `${baseUrl}registro-jornada.webp`,
        imageAlt: "Herramienta de Fichajes",
        theme: "red",
        badge: "Control de Asistencia",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
        id: 8,
        title: "Revisión de fichajes",
        description: "Permite revisar y gestionar todos los fichajes de los empleados desde un único lugar. Se pueden visualizar entradas y salidas, corregir errores y validar registros, garantizando la exactitud de la información diaria y ofreciendo un control fiable de la asistencia y actividad del personal.",
        imageSrc: `${baseUrl}revision-fichajes.webp`,
        imageAlt: "Revisión de fichajes",
        theme: "red",
        badge: "Supervisión Avanzada",
        icon: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5"
    },
    {
        id: 9,
        title: "Vista de Planificación Mensual",
        description: "Ofrece una visión completa del mes, mostrando turnos y ausencias de cada empleado de manera clara y organizada. Facilita la planificación a largo plazo y permite identificar rápidamente los días con conflictos, ausencias o disponibilidad limitada, asegurando un control detallado de la programación mensual.",
        imageSrc: `${baseUrl}planificacion-mensual-admin.webp`,
        imageAlt: "Planificación mensual",
        theme: "purple",
        badge: "Vista Panorámica",
        icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    },
    {
        id: 10,
        title: "Configurador Semanal",
        description: "Permite generar nuevas semanas de trabajo mediante la asignación de turnos genéricos preestablecidos, agilizando la planificación y facilitando la creación de horarios consistentes. La función permite modificar los turnos si es necesario, garantizando flexibilidad y ahorro de tiempo en la gestión semanal del personal.",
        imageSrc: `${baseUrl}setup-week.webp`,
        imageAlt: "Setup Week",
        theme: "emerald",
        badge: "Automatización Inteligente",
        icon: "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
    },
    {
        id: 11,
        title: "Inserción de Turnos Puntuales",
        description: "Facilita la inserción o modificación de turnos puntuales mediante un formulario sencillo, sin necesidad de abrir el panel gráfico. Esto permite gestionar cambios rápidos, ajustes inesperados y organizar el trabajo de manera eficiente, especialmente desde dispositivos móviles o tabletas.",
        imageSrc: `${baseUrl}turnos-puntuales.webp`,
        imageAlt: "Turnos Puntuales",
        theme: "orange",
        badge: "Gestión Rápida",
        icon: "M12 4.5v15m7.5-7.5h-15"
    },
    {
        id: 12,
        title: "Elaboración de Reportes",
        description: "Genera informes detallados de cualquier período seleccionado, incluyendo totales de horas, ausencias y desglose por empleado y tipo de horas. Esta funcionalidad permite un control exhaustivo de la actividad laboral, facilita la toma de decisiones y ofrece datos claros y visuales para análisis internos o informes ejecutivos.",
        imageSrc: `${baseUrl}reportes-mensuales.webp`,
        imageAlt: "Elaboración Reportes",
        theme: "yellow",
        badge: "Informes Ejecutivos",
        icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    },
    {
        id: 13,
        title: "Gestión de Empleados",
        description: "Permite administrar todos los datos de los empleados incluyendo fechas de alta y baja, asignación a equipos de trabajo, periodos de ausencia y disponibilidad. Facilita la gestión integral de recursos humanos y asegura que toda la información relevante esté centralizada y siempre actualizada para la planificación de turnos y análisis interno.",
        imageSrc: `${baseUrl}gestion-usuarios.webp`,
        imageAlt: "Gestión Empleados",
        theme: "orange",
        badge: "Recursos Humanos",
        icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    },
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

