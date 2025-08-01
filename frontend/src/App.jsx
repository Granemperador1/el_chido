import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { COLORS, FONTS } from "./theme/branding/branding";

import Login from "./pages/Login";
import Registro from "./pages/Registro";
import RedireccionPorRol from "./components/RedireccionPorRol";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminCourses from "./pages/AdminCourses";
import ProfesorPanel from "./pages/ProfesorPanel";
import EstudianteDashboard from "./pages/EstudianteDashboard";
import CalificacionesPanel from "./pages/CalificacionesPanel";
import ExamenesPanel from "./pages/ExamenesPanel";
import AsistenciasPanel from "./pages/AsistenciasPanel";
import RecursosPanel from "./pages/RecursosPanel";
import MensajesPanel from "./pages/MensajesPanel";
import RutaConRol from "./components/RutaConRol";
import Bienvenida from "./pages/Bienvenida";
import ProfesorPagos from "./pages/ProfesorPagos";
import EstudianteCursos from "./pages/EstudianteCursos";
import EstudianteInscripciones from "./pages/EstudianteInscripciones";
import EstudianteProgreso from "./pages/EstudianteProgreso";
import ProfesorCursos from "./pages/ProfesorCursos";
import ProfesorDisponibilidad from "./componentes/Asesorias/ProfesorDisponibilidad";
import ListaAsesorias from "./componentes/Asesorias/ListaAsesorias";
import EstudianteReservaAsesoria from "./componentes/Asesorias/EstudianteReservaAsesoria";
import PerfilUsuario from "./pages/PerfilUsuario";
import ProfesorGestionCurso from "./pages/ProfesorGestionCurso";
import ProfesorEstudiantes from "./pages/ProfesorEstudiantes";
import SeleccionTipoUsuario from "./pages/SeleccionTipoUsuario";
import PagoProfesor from "./pages/PagoProfesor";
import PagoEstudiante from "./pages/PagoEstudiante";
import MateriaIndividual from "./pages/MateriaIndividual";
import MateriaEspecialGestion from "./pages/MateriaEspecialGestion";

// Layout base para la aplicación
function AppContent() {
  const location = useLocation();


  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.background,
        fontFamily: FONTS.main,
      }}
    >

      <main>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          {/* Rutas de selección de tipo de usuario y pagos */}
          <Route path="/seleccion-tipo" element={<SeleccionTipoUsuario />} />
          <Route path="/pago-profesor" element={<PagoProfesor />} />
          <Route path="/pago-estudiante" element={<PagoEstudiante />} />

          {/* Página de bienvenida pública */}
          <Route path="/" element={<Bienvenida />} />
          
          {/* Redirección automática según rol */}
          <Route path="/dashboard" element={<RedireccionPorRol />} />

          {/* Rutas de administrador */}
          <Route
            path="/admin/dashboard"
            element={
              <RutaConRol rolesPermitidos={["admin"]}>
                <AdminDashboard />
              </RutaConRol>
            }
          />
          <Route
            path="/admin/usuarios"
            element={
              <RutaConRol rolesPermitidos={["admin"]}>
                <AdminUsers />
              </RutaConRol>
            }
          />
          <Route
            path="/admin/cursos"
            element={
              <RutaConRol rolesPermitidos={["admin"]}>
                <AdminCourses />
              </RutaConRol>
            }
          />
          <Route
            path="/admin/inscripciones"
            element={
              <RutaConRol rolesPermitidos={["admin"]}>
                <div style={{ padding: "30px", textAlign: "center" }}>
                  <h1>Gestión de Inscripciones</h1>
                  <p>Página en desarrollo...</p>
                </div>
              </RutaConRol>
            }
          />

          {/* Rutas compartidas para admin y profesor */}
          <Route
            path="/asistencias"
            element={
              <RutaConRol rolesPermitidos={["admin", "profesor"]}>
                <AsistenciasPanel />
              </RutaConRol>
            }
          />
          <Route
            path="/recursos"
            element={
              <RutaConRol rolesPermitidos={["admin", "profesor", "estudiante"]}>
                <RecursosPanel />
              </RutaConRol>
            }
          />
          <Route
            path="/mensajes"
            element={
              <RutaConRol rolesPermitidos={["admin", "profesor", "estudiante"]}>
                <MensajesPanel />
              </RutaConRol>
            }
          />

          {/* Rutas de profesor */}
          <Route
            path="/profesor/dashboard"
            element={
              <RutaConRol rolesPermitidos={["profesor"]}>
                <ProfesorPanel />
              </RutaConRol>
            }
          />
          <Route
            path="/profesor/cursos"
            element={
              <RutaConRol rolesPermitidos={["profesor"]}>
                <ProfesorCursos />
              </RutaConRol>
            }
          />
          <Route
            path="/profesor/lecciones"
            element={
              <RutaConRol rolesPermitidos={["profesor"]}>
                <div style={{ padding: "30px", textAlign: "center" }}>
                  <h1>Gestión de Lecciones</h1>
                  <p>Página en desarrollo...</p>
                </div>
              </RutaConRol>
            }
          />
          <Route
            path="/profesor/multimedia"
            element={
              <RutaConRol rolesPermitidos={["profesor"]}>
                <div style={{ padding: "30px", textAlign: "center" }}>
                  <h1>Gestión de Multimedia</h1>
                  <p>Página en desarrollo...</p>
                </div>
              </RutaConRol>
            }
          />
          <Route
            path="/profesor/estudiantes"
            element={
              <RutaConRol rolesPermitidos={["profesor"]}>
                <ProfesorEstudiantes />
              </RutaConRol>
            }
          />
          <Route path="/profesor/pagos" element={<ProfesorPagos />} />
          <Route
            path="/profesor/asesorias"
            element={
              <RutaConRol rolesPermitidos={["profesor"]}>
                <ListaAsesorias />
              </RutaConRol>
            }
          />
          <Route
            path="/profesor/disponibilidad"
            element={
              <RutaConRol rolesPermitidos={["profesor"]}>
                <ProfesorDisponibilidad />
              </RutaConRol>
            }
          />
          <Route
            path="/profesor/curso/:id/gestionar"
            element={
              <RutaConRol rolesPermitidos={["profesor"]}>
                <ProfesorGestionCurso />
              </RutaConRol>
            }
          />
          <Route
            path="/profesor/materia/:id/gestionar"
            element={
              <RutaConRol rolesPermitidos={["profesor"]}>
                <MateriaIndividual />
              </RutaConRol>
            }
          />
          <Route
            path="/profesor/materia-especial/:materiaNombre/gestionar"
            element={
              <RutaConRol rolesPermitidos={["profesor"]}>
                <MateriaEspecialGestion />
              </RutaConRol>
            }
          />

          {/* Rutas de estudiante */}
          <Route
            path="/estudiante/dashboard"
            element={
              <RutaConRol rolesPermitidos={["estudiante"]}>
                <EstudianteDashboard />
              </RutaConRol>
            }
          />
          <Route
            path="/estudiante/calificaciones"
            element={
              <RutaConRol rolesPermitidos={["estudiante"]}>
                <CalificacionesPanel />
              </RutaConRol>
            }
          />
          <Route
            path="/estudiante/cursos"
            element={
              <RutaConRol rolesPermitidos={["estudiante"]}>
                <EstudianteCursos />
              </RutaConRol>
            }
          />
          <Route
            path="/estudiante/inscripciones"
            element={
              <RutaConRol rolesPermitidos={["estudiante"]}>
                <EstudianteInscripciones />
              </RutaConRol>
            }
          />
          <Route
            path="/estudiante/progreso"
            element={
              <RutaConRol rolesPermitidos={["estudiante"]}>
                <EstudianteProgreso />
              </RutaConRol>
            }
          />
          <Route
            path="/estudiante/curso/:id"
            element={
              <RutaConRol rolesPermitidos={["estudiante"]}>
                <div style={{ padding: "30px", textAlign: "center" }}>
                  <h1>Detalle del Curso</h1>
                  <p>Página en desarrollo...</p>
                </div>
              </RutaConRol>
            }
          />
          <Route
            path="/estudiante/curso/:id/detalle"
            element={
              <RutaConRol rolesPermitidos={["estudiante"]}>
                <MateriaIndividual />
              </RutaConRol>
            }
          />
          <Route
            path="/estudiante/materia/:id"
            element={
              <RutaConRol rolesPermitidos={["estudiante"]}>
                <MateriaIndividual />
              </RutaConRol>
            }
          />
          <Route
            path="/estudiante/solicitar-asesoria"
            element={
              <RutaConRol rolesPermitidos={["estudiante"]}>
                <EstudianteReservaAsesoria />
              </RutaConRol>
            }
          />
          <Route
            path="/estudiante/asesorias"
            element={
              <RutaConRol rolesPermitidos={["estudiante"]}>
                <ListaAsesorias />
              </RutaConRol>
            }
          />

          {/* Rutas de perfil, configuración y cambio de contraseña */}
          <Route
            path="/perfil"
            element={
              <RutaConRol rolesPermitidos={["admin", "profesor", "estudiante"]}>
                <PerfilUsuario />
              </RutaConRol>
            }
          />
          <Route
            path="/configuracion"
            element={
              <RutaConRol rolesPermitidos={["admin", "profesor", "estudiante"]}>
                <PerfilUsuario />
              </RutaConRol>
            }
          />
          <Route
            path="/cambiar-password"
            element={
              <RutaConRol rolesPermitidos={["admin", "profesor", "estudiante"]}>
                <PerfilUsuario />
              </RutaConRol>
            }
          />

          {/* Ruta por defecto */}
          <Route path="*" element={<RedireccionPorRol />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <>
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
    </>
  );
}

export default App;
