# Guía de Uso de WorkSchedFlow

## 📋 Descripción

La guía de uso es una página separada de la landing principal que mantiene el mismo estilo visual. Está diseñada para ser totalmente escalable y permite añadir fácilmente nuevas secciones conforme se expande la documentación.

## 🎯 Características

- **Totalmente escalable**: Añade secciones y subsecciones sin modificar componentes
- **Sidebar con navegación**: Navegación lateral fija en desktop
- **Navegación móvil**: Menú hamburguesa responsive para móviles y tablets
- **Datos centralizados**: Todo el contenido está en `guideData.ts`
- **Resaltado automático**: La sección activa se resalta automáticamente al hacer scroll
- **Soporte para imágenes y videos**: Cada sección puede incluir medios
- **Notas destacadas**: Sistema de notas con icono para información importante
- **Formato markdown**: Soporta negrita (`**texto**`) y cursiva (`*texto*`)

## 📁 Estructura de Archivos

```
src/
├── data/
│   └── guideData.ts                    # Datos de la guía
├── components/
│   └── guide/
│       ├── GuideSidebar.astro          # Sidebar de navegación (desktop)
│       ├── GuideMobileNav.astro        # Navegación móvil
│       └── GuideSection.astro          # Renderizado de secciones
├── layouts/
│   └── GuideLayout.astro               # Layout de la guía
└── pages/
    └── guia.astro                      # Página principal de la guía

public/
└── images/
    └── guide/                           # Imágenes de la guía
```

## 🚀 Cómo Añadir Nuevas Secciones

### 1. Editar el archivo de datos

Abre [`guideData.ts`](src/data/guideData.ts) y añade tu nueva sección:

```typescript
{
  id: "mi-nueva-seccion",
  title: "Mi Nueva Sección",
  content: "Descripción de la sección con **negrita** y *cursiva*.",
  image: "/images/guide/mi-imagen.png",  // Opcional
  video: "https://youtube.com/...",      // Opcional
  note: "Nota importante sobre esta sección", // Opcional
  subsections: [                          // Opcional
    {
      id: "mi-subseccion",
      title: "Mi Subsección",
      content: "Contenido de la subsección.",
      image: "/images/guide/otra-imagen.png",
      features: [                         // Opcional
        "**Característica 1**: Descripción",
        "**Característica 2**: Descripción"
      ]
    }
  ]
}
```

### 2. Añadir imágenes (si las necesitas)

Coloca tus imágenes en `public/images/guide/` y referéncialas así:

```typescript
image: "/images/guide/nombre-imagen.png"
```

### 3. ¡Listo!

No necesitas modificar ningún componente. La guía se actualizará automáticamente.

## 📝 Estructura de Datos

### GuideCategory

```typescript
{
  id: string;           // ID único de la categoría
  title: string;        // Título mostrado en el sidebar
  sections: GuideSection[];
}
```

### GuideSection

```typescript
{
  id: string;           // ID único para anclas (#id)
  title: string;        // Título de la sección
  content: string;      // Contenido principal (soporta markdown básico)
  subsections?: GuideSubsection[];  // Subsecciones opcionales
  image?: string;       // Ruta de imagen opcional
  video?: string;       // URL de video opcional
  note?: string;        // Nota destacada opcional
}
```

### GuideSubsection

```typescript
{
  id: string;           // ID único para anclas
  title: string;        // Título de la subsección
  content: string;      // Contenido
  image?: string;       // Imagen opcional
  features?: string[];  // Lista de características
}
```

## 🎨 Formato de Texto

El sistema soporta markdown básico:

- `**texto**` → **texto en negrita**
- `*texto*` → *texto en cursiva*

Ejemplo:
```typescript
content: "WorkSchedFlow es **totalmente automatizada** y *fácil de usar*."
```

## 🖼️ Trabajar con Imágenes

### Añadir una imagen a una sección:

```typescript
{
  id: "ejemplo",
  title: "Ejemplo con Imagen",
  content: "Descripción...",
  image: "/images/guide/ejemplo.png"
}
```

### Añadir múltiples imágenes con subsecciones:

```typescript
{
  id: "ejemplo-multiple",
  title: "Ejemplo con Varias Imágenes",
  content: "Introducción...",
  subsections: [
    {
      id: "paso-1",
      title: "Paso 1",
      content: "Descripción del paso 1",
      image: "/images/guide/paso1.png"
    },
    {
      id: "paso-2",
      title: "Paso 2",
      content: "Descripción del paso 2",
      image: "/images/guide/paso2.png"
    }
  ]
}
```

## 🎥 Añadir Videos

```typescript
{
  id: "demo-video",
  title: "Demostración en Video",
  content: "Mira cómo funciona...",
  video: "https://youtu.be/WRrTnhw_hBo"
}
```

## 💡 Añadir Notas Destacadas

```typescript
{
  id: "seccion-con-nota",
  title: "Sección con Nota",
  content: "Contenido normal...",
  note: "Esta es una **nota importante** que aparecerá destacada."
}
```

## 📋 Listas de Características

```typescript
{
  id: "caracteristicas",
  title: "Características Principales",
  content: "Descripción...",
  subsections: [
    {
      id: "lista",
      title: "Lista de Funcionalidades",
      content: "",
      features: [
        "**Control de fichajes**: Sistema completo de registro",
        "**Gestión de ausencias**: Vacaciones y permisos",
        "**Reportes automáticos**: Informes mensuales detallados"
      ]
    }
  ]
}
```

## 🔗 Enlaces en el Sitio

La guía está enlazada desde:
- Footer → Sección "Soporte" → "Guía de Uso"

Puedes añadir más enlaces desde otros componentes:

```astro
<a href="/guia">Ver Guía de Uso</a>
```

## 📱 Responsive

La guía es completamente responsive:

- **Desktop (>1024px)**: Sidebar fijo a la izquierda
- **Tablet/Mobile (<1024px)**: Menú hamburguesa flotante
- El contenido se adapta a todos los tamaños de pantalla

## 🎯 Ejemplo Completo

```typescript
{
  id: "gestion-empleados",
  title: "Gestión de Empleados",
  sections: [
    {
      id: "alta-empleados",
      title: "Alta de Empleados",
      content: "En esta sección aprenderás cómo dar de alta nuevos empleados en el sistema.",
      image: "/images/guide/alta-empleados.png",
      subsections: [
        {
          id: "formulario-alta",
          title: "Formulario de Alta",
          content: "Completa todos los campos requeridos.",
          image: "/images/guide/formulario.png",
          features: [
            "**Nombre completo**: Obligatorio",
            "**DNI/NIE**: Único en el sistema",
            "**Email**: Para notificaciones",
            "**Teléfono**: Contacto de emergencia"
          ]
        },
        {
          id: "asignacion-equipo",
          title: "Asignación de Equipo",
          content: "Asigna al empleado a uno o varios equipos de trabajo.",
          image: "/images/guide/equipos.png"
        }
      ],
      note: "Recuerda que el **DNI debe ser único** en el sistema.",
      video: "https://youtu.be/ejemplo"
    }
  ]
}
```

## 🛠️ Mantenimiento

### Para añadir una nueva categoría completa:

```typescript
export const guideData: GuideCategory[] = [
  // ... categorías existentes
  {
    id: "nueva-categoria",
    title: "Nueva Categoría",
    sections: [
      // ... tus secciones
    ]
  }
];
```

### Para modificar el estilo:

Los estilos están en cada componente Astro:
- [`GuideLayout.astro`](src/layouts/GuideLayout.astro) - Layout general
- [`GuideSidebar.astro`](src/components/guide/GuideSidebar.astro) - Sidebar
- [`GuideSection.astro`](src/components/guide/GuideSection.astro) - Secciones
- [`GuideMobileNav.astro`](src/components/guide/GuideMobileNav.astro) - Navegación móvil

## 🎨 Personalización de Colores

Los colores principales están definidos en las variables CSS:
- Color primario: `#7877c6`
- Color hover: `#a5a4e8`
- Fondos: Tonos de `slate` (800, 900, 950)

Para cambiar el esquema de colores, busca y reemplaza estos valores en los componentes.

## 📞 Acceso

- **URL**: `/guia`
- **Título**: "Guía de Uso - WorkSchedFlow"
- **Desde el sitio**: Footer → Soporte → Guía de Uso

---

**¡Listo para expandir!** Solo edita [`guideData.ts`](src/data/guideData.ts) y añade tus imágenes en `public/images/guide/`.
