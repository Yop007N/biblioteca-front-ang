# Sistema de Biblioteca - Frontend

Aplicación web moderna para la gestión integral de bibliotecas, desarrollada con Angular 12 y Angular Material. Interfaz de usuario intuitiva y responsiva que permite administrar libros, autores, clientes, usuarios y préstamos.

## Descripción

Frontend SPA (Single Page Application) que proporciona una experiencia de usuario fluida para gestionar todos los aspectos de una biblioteca. Implementa operaciones CRUD completas para cada módulo, con validaciones en tiempo real, notificaciones de usuario y tablas interactivas con paginación y búsqueda.

## Stack Tecnológico

### Core
- **Angular 12.2** - Framework web progresivo
- **TypeScript 4.3** - Lenguaje tipado para JavaScript
- **RxJS 6.6** - Programación reactiva

### UI Framework
- **Angular Material 12** - Componentes UI Material Design
- **Angular CDK** - Component Development Kit
- **Responsive Design** - Diseño adaptable a dispositivos

### HTTP Client
- **Axios 0.24** - Cliente HTTP para peticiones al backend
- **Angular HttpClient** - Cliente HTTP nativo (disponible)

### Herramientas de Desarrollo
- **Angular CLI 12.2** - Herramientas de línea de comandos
- **Karma + Jasmine** - Framework de testing
- **Webpack** (integrado en Angular CLI) - Module bundler

## Características Principales

### Gestión de Libros
- Listado completo con búsqueda y filtros
- Alta, baja y modificación de libros
- Control de stock y observaciones
- Categorización por tipos

### Gestión de Autores
- Registro de autores
- Vinculación con libros
- Operaciones CRUD completas

### Gestión de Clientes
- Registro de socios de la biblioteca
- Información de contacto y dirección
- Historial de préstamos

### Gestión de Usuarios
- Administración de usuarios del sistema
- Control de acceso (login/password)
- Perfiles diferenciados

### Gestión de Ciudades
- Catálogo de ciudades
- Referencia para datos de clientes

### Gestión de Préstamos
- Registro de préstamos de libros
- Control de fechas de devolución
- Estados de préstamos
- Cálculo automático de valores

## Capturas de Pantalla

> Nota: Agregar capturas de pantalla en el futuro para mostrar:
> - Pantalla de consulta de libros
> - Formulario de edición de libro
> - Gestión de préstamos
> - Dashboard principal

## Requisitos Previos

### Software Requerido
- **Node.js 12.x o 14.x** (LTS recomendado)
- **npm 6.x+** o **yarn 1.x+**
- **Angular CLI 12.x** (opcional, recomendado)

### Backend Requerido
- Backend Java EE ejecutándose en `http://localhost:8080`
- Ver repositorio: [biblioteca-backend](https://github.com/Yop007N/biblioteca-backend)

### Verificación del Sistema
```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Instalar Angular CLI (opcional)
npm install -g @angular/cli@12
```

## Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Yop007N/biblioteca-front-ang.git
cd biblioteca-front-ang
```

### 2. Instalar Dependencias

```bash
# Con npm
npm install

# O con yarn
yarn install
```

### 3. Configurar Conexión al Backend

Las URLs del backend están configuradas directamente en los componentes. Por defecto apuntan a:

```
http://localhost:8080/PROYECTO-REST/rest
```

Si tu backend está en otra URL/puerto, edita los archivos de componentes en `src/app/*/` y actualiza las URLs de axios:

```typescript
// Ejemplo en consultar-libro.component.ts
axios.get<any>("http://localhost:8080/PROYECTO-REST/rest/libro/list")
```

**Mejora recomendada**: Centralizar las URLs en `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/PROYECTO-REST/rest'
};
```

### 4. Iniciar Servidor de Desarrollo

```bash
# Con npm
npm start

# O con Angular CLI
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente al detectar cambios en el código fuente.

### 5. Verificar Funcionalidad

1. Asegúrate de que el backend esté ejecutándose
2. Abre el navegador en `http://localhost:4200`
3. Navega por las secciones del menú:
   - Consultar Ciudad
   - Consultar Libro
   - Consultar Cliente
   - Consultar Autor
   - Consultar Usuario

## Estructura del Proyecto

```
biblioteca-front-ang/
├── src/
│   ├── app/
│   │   ├── app.component.ts           # Componente raíz
│   │   ├── app.component.html         # Template principal con menú
│   │   ├── app-routing.module.ts     # Configuración de rutas
│   │   ├── app.module.ts             # Módulo principal
│   │   │
│   │   ├── consultar-ciudad/         # Módulo de listado de ciudades
│   │   │   ├── consultar-ciudad.component.ts
│   │   │   ├── consultar-ciudad.component.html
│   │   │   └── consultar-ciudad.component.css
│   │   │
│   │   ├── editar-ciudad/            # Módulo de edición de ciudades
│   │   │   ├── editar-ciudad.component.ts
│   │   │   ├── editar-ciudad.component.html
│   │   │   └── editar-ciudad.component.css
│   │   │
│   │   ├── consultar-libro/          # Módulo de listado de libros
│   │   │   ├── consultar-libro.component.ts
│   │   │   ├── consultar-libro.component.html
│   │   │   └── consultar-libro.component.css
│   │   │
│   │   ├── editar-libro/             # Módulo de edición de libros
│   │   │   ├── editar-libro.component.ts
│   │   │   ├── editar-libro.component.html
│   │   │   └── editar-libro.component.css
│   │   │
│   │   ├── consultar-cliente/        # Módulo de listado de clientes
│   │   │   ├── consultar-cliente.component.ts
│   │   │   ├── consultar-cliente.component.html
│   │   │   └── consultar-cliente.component.css
│   │   │
│   │   ├── editar-libro/editar-cliente/  # Módulo de edición de clientes
│   │   │   ├── editar-cliente.component.ts
│   │   │   ├── editar-cliente.component.html
│   │   │   └── editar-cliente.component.css
│   │   │
│   │   ├── consultar-autor/          # Módulo de listado de autores
│   │   │   ├── consultar-autor.component.ts
│   │   │   ├── consultar-autor.component.html
│   │   │   └── consultar-autor.component.css
│   │   │
│   │   ├── editar-autor/             # Módulo de edición de autores
│   │   │   ├── editar-autor.component.ts
│   │   │   ├── editar-autor.component.html
│   │   │   └── editar-autor.component.css
│   │   │
│   │   ├── consultar-usuario/        # Módulo de listado de usuarios
│   │   │   ├── consultar-usuario.component.ts
│   │   │   ├── consultar-usuario.component.html
│   │   │   └── consultar-usuario.component.css
│   │   │
│   │   └── editar-usuario/           # Módulo de edición de usuarios
│   │       ├── editar-usuario.component.ts
│   │       ├── editar-usuario.component.html
│   │       └── editar-usuario.component.css
│   │
│   ├── assets/                       # Recursos estáticos (imágenes, fuentes)
│   ├── environments/                 # Configuraciones de ambiente
│   │   ├── environment.ts           # Desarrollo
│   │   └── environment.prod.ts      # Producción
│   ├── index.html                   # HTML principal
│   ├── main.ts                      # Punto de entrada de la aplicación
│   └── styles.css                   # Estilos globales
│
├── angular.json                     # Configuración de Angular CLI
├── package.json                     # Dependencias y scripts
├── tsconfig.json                    # Configuración de TypeScript
├── karma.conf.js                    # Configuración de tests
└── README.md                        # Este archivo
```

## Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/consultarciudad` | ConsultarCiudadComponent | Lista de ciudades |
| `/editarciudad/:id` | EditarCiudadComponent | Crear/Editar ciudad |
| `/consultarlibro` | ConsultarLibroComponent | Lista de libros |
| `/editarlibro/:id` | EditarLibroComponent | Crear/Editar libro |
| `/consultarcliente` | ConsultarClienteComponent | Lista de clientes |
| `/editarcliente/:id` | EditarClienteComponent | Crear/Editar cliente |
| `/consultarautor` | ConsultarAutorComponent | Lista de autores |
| `/editarautor/:id` | EditarAutorComponent | Crear/Editar autor |
| `/consultarusuario` | ConsultarUsuarioComponent | Lista de usuarios |
| `/editarusuario/:id` | EditarUsuarioComponent | Crear/Editar usuario |

## Componentes Angular Material Utilizados

- **MatTable** - Tablas de datos con ordenamiento y filtros
- **MatPaginator** - Paginación de tablas
- **MatFormField** - Campos de formulario
- **MatInput** - Inputs de texto
- **MatButton** - Botones Material Design
- **MatIcon** - Iconos Material
- **MatSnackBar** - Notificaciones tipo toast
- **MatToolbar** - Barra de navegación
- **MatMenu** - Menús desplegables
- **MatCard** - Tarjetas de contenido

## Scripts Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start
# o
ng serve

# Servidor con puerto específico
ng serve --port 4300

# Servidor con host específico (accesible desde red)
ng serve --host 0.0.0.0
```

### Build

```bash
# Build de desarrollo
npm run build
# o
ng build

# Build de producción (optimizado, minificado)
ng build --configuration production

# Build con reporte de bundle
ng build --stats-json
```

Los archivos de build se generan en el directorio `dist/`.

### Testing

```bash
# Ejecutar tests unitarios
npm test
# o
ng test

# Tests con coverage
ng test --code-coverage

# Tests en modo CI (sin watch)
ng test --watch=false --browsers=ChromeHeadless
```

### Linting

```bash
# Verificar código
ng lint
```

## Conexión con el Backend

La aplicación consume los siguientes endpoints del backend:

### Ciudades
- `GET /ciudad/list` - Listar ciudades
- `GET /ciudad/find/{codigo}` - Obtener ciudad
- `PUT /ciudad/update` - Crear/Actualizar ciudad
- `DELETE /ciudad/delete/{codigo}` - Eliminar ciudad

### Libros
- `GET /libro/list` - Listar libros
- `GET /libro/find/{codigo}` - Obtener libro
- `PUT /libro/update` - Crear/Actualizar libro
- `DELETE /libro/delete/{codigo}` - Eliminar libro

### Clientes
- `GET /cliente/list` - Listar clientes
- `GET /cliente/find/{codigo}` - Obtener cliente
- `PUT /cliente/update` - Crear/Actualizar cliente
- `DELETE /cliente/delete/{codigo}` - Eliminar cliente

### Autores
- `GET /autor/list` - Listar autores
- `GET /autor/find/{codigo}` - Obtener autor
- `PUT /autor/update` - Crear/Actualizar autor
- `DELETE /autor/delete/{codigo}` - Eliminar autor

### Usuarios
- `GET /usuario/list` - Listar usuarios
- `GET /usuario/find/{codigo}` - Obtener usuario
- `PUT /usuario/update` - Crear/Actualizar usuario
- `DELETE /usuario/delete/{codigo}` - Eliminar usuario

### Préstamos
- `GET /prestamo/list` - Listar préstamos
- `GET /prestamo/find/{numero}` - Obtener préstamo
- `PUT /prestamo/update` - Crear/Actualizar préstamo
- `DELETE /prestamo/delete/{numero}` - Eliminar préstamo

## Mejoras Recomendadas

### Arquitectura
1. **Servicios Centralizados**: Crear servicios Angular para cada módulo en lugar de usar axios directamente en componentes
2. **Gestión de Estado**: Implementar NgRx o Akita para estado global
3. **Interceptores HTTP**: Agregar interceptores para manejo de errores y tokens
4. **Environment Variables**: Centralizar URLs en `environment.ts`

### Funcionalidad
1. **Autenticación**: Implementar login con JWT
2. **Guards**: Proteger rutas con guards de autenticación
3. **Validaciones**: Agregar validaciones de formularios con Reactive Forms
4. **Búsqueda**: Implementar búsqueda en tiempo real en tablas
5. **Exportación**: Agregar exportación a PDF/Excel
6. **Reportes**: Dashboard con estadísticas y gráficos

### UX/UI
1. **Loading States**: Indicadores de carga durante peticiones HTTP
2. **Error Handling**: Manejo robusto de errores con mensajes claros
3. **Confirmaciones**: Diálogos de confirmación antes de eliminar
4. **Temas**: Soporte para tema claro/oscuro
5. **Responsive**: Optimización para dispositivos móviles

### Performance
1. **Lazy Loading**: Carga diferida de módulos
2. **OnPush Change Detection**: Mejorar detección de cambios
3. **Virtual Scrolling**: Para listas largas
4. **PWA**: Convertir en Progressive Web App

## Deployment

### Desarrollo Local

```bash
npm start
```

Acceder a: `http://localhost:4200`

### Producción

```bash
# Build de producción
ng build --configuration production

# Los archivos se generan en dist/
# Servir con un servidor HTTP (Apache, Nginx, etc.)
```

### Nginx Ejemplo

```nginx
server {
    listen 80;
    server_name biblioteca.example.com;
    root /var/www/biblioteca-front/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy al backend
    location /PROYECTO-REST/ {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Servicios de Hosting Recomendados

- **Vercel** - Despliegue automático desde GitHub
- **Netlify** - CI/CD integrado
- **Firebase Hosting** - Hosting de Google
- **AWS S3 + CloudFront** - Solución escalable
- **GitHub Pages** - Hosting gratuito para proyectos open source

## Troubleshooting

### Error: Cannot GET /

**Problema**: Al refrescar una ruta distinta a la raíz.

**Solución**: Configurar el servidor para redirigir todas las rutas a `index.html` (Angular routing).

### Error: CORS Policy

**Problema**:
```
Access to XMLHttpRequest at 'http://localhost:8080/...' from origin 'http://localhost:4200' has been blocked by CORS policy
```

**Solución**: Verificar configuración CORS en el backend (`BibliotecaRestApplication.java`).

### Backend no responde

**Problema**: Error de conexión al backend.

**Solución**:
1. Verificar que el backend esté ejecutándose en `http://localhost:8080`
2. Probar endpoints con curl o Postman
3. Revisar logs del servidor WildFly

### Dependencias desactualizadas

**Problema**: Vulnerabilidades en `npm audit`.

**Solución**:
```bash
npm audit fix
# o para mayor nivel
npm audit fix --force
```

### Error de compilación TypeScript

**Problema**: Errores de tipos o imports.

**Solución**:
```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install

# Verificar tsconfig.json
ng serve --verbose
```

## Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear una rama de feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit de cambios: `git commit -m 'feat: agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

### Convenciones de Código

- Seguir Angular Style Guide oficial
- Usar TypeScript strict mode
- Nombrar componentes con sufijo `.component.ts`
- Nombrar servicios con sufijo `.service.ts`
- Usar camelCase para variables y métodos
- Usar PascalCase para clases y componentes

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para reportar bugs, solicitar funcionalidades o contribuir, crear un issue en el repositorio del proyecto.

## Recursos Adicionales

- [Angular Documentation](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
- [Axios Documentation](https://axios-http.com/)
- [Backend Repository](https://github.com/Yop007N/biblioteca-backend)

## Changelog

### Versión Actual (v1.0.0)
- Gestión completa de Ciudades (CRUD)
- Gestión completa de Libros (CRUD)
- Gestión completa de Clientes (CRUD)
- Gestión completa de Autores (CRUD)
- Gestión completa de Usuarios (CRUD)
- Interfaz con Angular Material
- Tablas con paginación y búsqueda
- Notificaciones de usuario con SnackBar

## Próximas Mejoras

- [ ] Implementar autenticación con JWT
- [ ] Agregar módulo de préstamos completo
- [ ] Dashboard con estadísticas
- [ ] Reportes en PDF
- [ ] Búsqueda avanzada y filtros
- [ ] Modo offline con Service Workers
- [ ] Tests unitarios y e2e
- [ ] Internacionalización (i18n)
