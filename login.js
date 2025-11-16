// ========================================
// CONFIGURACIÓN INICIAL
// ========================================

// Usuarios del sistema
const USERS = [
    {
        username: 'Juan',
        password: 'juan123',
        name: 'Juan',
        role: 'admin',
        permissions: {
            dashboard: ['all'],
            menu: ['all'],
            exportar: ['all']
        }
    },
    {
        username: 'Charly',
        password: 'charly123',
        name: 'Charly',
        role: 'limited',
        permissions: {
            dashboard: ['lesionados', 'jugadores'],
            menu: ['dashboard', 'lesionados', 'jugadores', 'exportar'],
            exportar: ['lesionados', 'jugadores']
        }
    },
    {
        username: 'Amelia',
        password: 'amelia123',
        name: 'Amelia',
        role: 'limited',
        permissions: {
            dashboard: ['all'],
            menu: ['dashboard', 'jugadores', 'comedor', 'casaclub', 'permisos', 'lesionados', 'mensualidades', 'altas'],
            exportar: ['jugadores', 'comedor', 'casaclub', 'permisos', 'lesionados', 'mensualidades', 'altas']
        }
    },
    {
        username: 'Hector',
        password: 'hector123',
        name: 'Héctor',
        role: 'limited',
        permissions: {
            dashboard: ['jugadores', 'comedor', 'casaclub', 'permisos', 'lesionados'],
            menu: ['dashboard', 'jugadores', 'comedor', 'casaclub', 'permisos', 'lesionados'],
            exportar: ['jugadores', 'comedor', 'casaclub', 'permisos', 'lesionados']
        }
    }
];

// Frases para el loader
const LOADER_PHRASES = [
    'Preparando el sistema...',
    'Cargando jugadores...',
    'Verificando conexión...',
    'Iniciando aplicación...',
    'Configurando entorno...'
];

// ========================================
// ELEMENTOS DEL DOM
// ========================================
const loader = document.getElementById('loader');
const loaderText = document.getElementById('loaderText');
const loginContainer = document.getElementById('loginContainer');
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const submitBtn = document.getElementById('submitBtn');
const btnLoader = document.getElementById('btnLoader');

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Cambiar frases del loader
    let phraseIndex = 0;
    const phraseInterval = setInterval(() => {
        phraseIndex = (phraseIndex + 1) % LOADER_PHRASES.length;
        loaderText.textContent = LOADER_PHRASES[phraseIndex];
    }, 600);
    
    // Simular carga inicial
    setTimeout(() => {
        clearInterval(phraseInterval);
        hideLoader();
    }, 2000);
    
    // Event Listeners
    setupEventListeners();
    
    // Crear usuario por defecto si no existe
    createDefaultUser();
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Submit del formulario
    loginForm.addEventListener('submit', handleLogin);
    
    // Toggle password visibility
    togglePasswordBtn.addEventListener('click', togglePasswordVisibility);
    
    // Limpiar error al escribir
    usernameInput.addEventListener('input', clearError);
    passwordInput.addEventListener('input', clearError);
    
    // Enter en los inputs
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            passwordInput.focus();
        }
    });
}

// ========================================
// FUNCIONES DE AUTENTICACIÓN
// ========================================

function createDefaultUser() {
    // FORZAR creación de usuarios (sobrescribir cualquier dato anterior)
    localStorage.setItem('teotihuacan_users', JSON.stringify(USERS));
    console.log('✅ Usuarios creados:');
    console.log('📧 Usuario 1: Juan / Password: juan123 (Acceso completo)');
    console.log('📧 Usuario 2: Charly / Password: charly123 (Acceso limitado)');
    console.log('📧 Usuario 3: Amelia / Password: amelia123 (Acceso limitado)');
    console.log('📧 Usuario 4: Héctor / Password: hector123 (Acceso limitado)');
}

function getStoredUsers() {
    const usersData = localStorage.getItem('teotihuacan_users');
    return usersData ? JSON.parse(usersData) : [];
}

function handleLogin(e) {
    e.preventDefault();
    
    // Obtener valores
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    
    // Validar campos vacíos
    if (!username || !password) {
        showError('Por favor, completa todos los campos');
        return;
    }
    
    // Mostrar loader en el botón
    showButtonLoader();
    
    // Simular delay de autenticación (como si fuera una petición al servidor)
    setTimeout(() => {
        authenticateUser(username, password);
    }, 800);
}

function authenticateUser(username, password) {
    const users = getStoredUsers();
    
    // Buscar usuario
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Login exitoso
        loginSuccess(user);
    } else {
        // Login fallido
        loginFailed();
    }
}

function loginSuccess(user) {
    // Guardar sesión
    const session = {
        user: {
            username: user.username,
            name: user.name,
            role: user.role,
            permissions: user.permissions || {}
        },
        timestamp: new Date().getTime(),
        isActive: true
    };
    
    localStorage.setItem('teotihuacan_session', JSON.stringify(session));
    
    // Ocultar loader del botón
    hideButtonLoader();
    
    // Mostrar mensaje de éxito
    showSuccessAnimation();
    
    // Redireccionar después de una breve animación
    setTimeout(() => {
        redirectToDashboard();
    }, 600);
}

function loginFailed() {
    hideButtonLoader();
    showError('Usuario o contraseña incorrectos');
}

function isUserLoggedIn() {
    const session = localStorage.getItem('teotihuacan_session');
    
    if (!session) return false;
    
    try {
        const sessionData = JSON.parse(session);
        return sessionData.isActive === true;
    } catch (error) {
        console.error('❌ Error al verificar sesión:', error);
        return false;
    }
}

function redirectToDashboard() {
    window.location.href = 'dashboard.html';
}

// ========================================
// FUNCIONES DE UI
// ========================================

function showError(message) {
    errorText.textContent = message;
    errorMessage.classList.add('show');
    
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
        clearError();
    }, 5000);
}

function clearError() {
    errorMessage.classList.remove('show');
    errorText.textContent = '';
}

function togglePasswordVisibility() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    
    // Cambiar SVG del ícono
    if (type === 'password') {
        eyeIcon.innerHTML = `
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        `;
    } else {
        eyeIcon.innerHTML = `
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        `;
    }
}

function showButtonLoader() {
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
}

function hideButtonLoader() {
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
}

function hideLoader() {
    loader.classList.add('hidden');
}

function showSuccessAnimation() {
    // Cambiar color del botón
    submitBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20a03d 100%)';
    submitBtn.style.boxShadow = '0 4px 12px rgba(40, 167, 69, 0.3)';
    
    // Cambiar texto
    const btnText = submitBtn.querySelector('.btn-text');
    btnText.textContent = 'Accediendo...';
}

// ========================================
// FUNCIONES PÚBLICAS PARA USO EXTERNO
// ========================================

// Función para cerrar sesión (se usará en otras páginas)
window.logout = function() {
    localStorage.removeItem('teotihuacan_session');
    window.location.href = 'index.html';
};

// Función para verificar sesión (se usará en otras páginas)
window.checkAuth = function() {
    if (!isUserLoggedIn()) {
        window.location.href = 'login.html';
    }
};

// Función para obtener usuario actual
window.getCurrentUser = function() {
    const session = localStorage.getItem('teotihuacan_session');
    if (session) {
        try {
            const sessionData = JSON.parse(session);
            return sessionData.user;
        } catch (error) {
            console.error('❌ Error al obtener usuario:', error);
            return null;
        }
    }
    return null;
};

// ========================================
// CONSOLE INFO
// ========================================
console.log('%c🏆 Panel de Control Casa Club', 'color: #f26522; font-size: 18px; font-weight: bold; padding: 8px 12px; background: #fff5ed; border-radius: 6px;');
console.log('%c👤 Credenciales de acceso', 'color: #1c1c1c; font-weight: bold; font-size: 14px; margin-top: 8px;');
console.log('%cUsuario: Juan / Password: juan123 (Acceso completo)', 'color: #28a745; font-size: 13px;');
console.log('%cUsuario: Charly / Password: charly123 (Acceso limitado)', 'color: #ffc107; font-size: 13px;');
console.log('%cUsuario: Amelia / Password: amelia123 (Acceso limitado)', 'color: #ffc107; font-size: 13px;');
console.log('%cUsuario: Héctor / Password: hector123 (Acceso limitado)', 'color: #ffc107; font-size: 13px;');
