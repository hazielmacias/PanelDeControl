// ========================================
// FIREBASE (Cargar dinámicamente)
// ========================================
let db = null;
let dbComedor = null; // Base de datos del comedor
let collection = null;
let getDocs = null;
let getFirestore = null;

// Cargar Firebase cuando sea necesario
async function initFirebase() {
    if (db) return;
    
    try {
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js");
        const firebaseFirestore = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        
        getFirestore = firebaseFirestore.getFirestore;
        collection = firebaseFirestore.collection;
        getDocs = firebaseFirestore.getDocs;
        if (!addDocRef) addDocRef = firebaseFirestore.addDoc;
        if (!docRefFn) docRefFn = firebaseFirestore.doc;
        if (!updateDocFn) updateDocFn = firebaseFirestore.updateDoc;
        if (!deleteFieldFn) deleteFieldFn = firebaseFirestore.deleteField;
        if (!TimestampFn) TimestampFn = firebaseFirestore.Timestamp;
        
        const firebaseConfig = {
            apiKey: "AIzaSyBK4m_EV2ldfruVnDHlXPsJ1oDc2kkMBDo",
            authDomain: "formularioaltas-e5fda.firebaseapp.com",
            projectId: "formularioaltas-e5fda",
            storageBucket: "formularioaltas-e5fda.firebasestorage.app",
            messagingSenderId: "1007788070619",
            appId: "1:1007788070619:web:d39e370d287ae32c331efe"
        };
        
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        console.log('✅ Firebase inicializado');
    } catch (error) {
        console.error('❌ Error al inicializar Firebase:', error);
    }
}

// Inicializar Firebase para el comedor
async function initFirebaseComedor() {
    if (dbComedor) return; // Ya está inicializado
    
    try {
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js");
        const firebaseFirestore = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        
        const getFirestoreComedor = firebaseFirestore.getFirestore;
        
        const firebaseConfigComedor = {
            apiKey: "AIzaSyB3iO06idWUZ5j0bJ5YfibLD8-20ihXEOc",
            authDomain: "formulariocomedor.firebaseapp.com",
            projectId: "formulariocomedor",
            storageBucket: "formulariocomedor.firebasestorage.app",
            messagingSenderId: "401960742592",
            appId: "1:401960742592:web:137bc2b1dc84e502458725"
        };
        
        const appComedor = initializeApp(firebaseConfigComedor, 'comedor');
        dbComedor = getFirestoreComedor(appComedor);
        console.log('✅ Firebase Comedor inicializado');
    } catch (error) {
        console.error('❌ Error al inicializar Firebase Comedor:', error);
    }
}

// Inicializar Firebase para Casa Club
let dbCasaClub = null;
async function initFirebaseCasaClub() {
    if (dbCasaClub) return; // Ya está inicializado
    
    try {
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js");
        const firebaseFirestore = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        
        const getFirestoreCasaClub = firebaseFirestore.getFirestore;
        
        const firebaseConfigCasaClub = {
            apiKey: "AIzaSyAziif28i11Qn0RyRjhXvnmdFYpeaTJvGU",
            authDomain: "formulariocasaclub.firebaseapp.com",
            projectId: "formulariocasaclub",
            storageBucket: "formulariocasaclub.firebasestorage.app",
            messagingSenderId: "590792586665",
            appId: "1:590792586665:web:6cfdd9b44cbd88112600b8"
        };
        
        const appCasaClub = initializeApp(firebaseConfigCasaClub, 'casaclub');
        dbCasaClub = getFirestoreCasaClub(appCasaClub);
        console.log('✅ Firebase Casa Club inicializado');
    } catch (error) {
        console.error('❌ Error al inicializar Firebase Casa Club:', error);
    }
}

// Inicializar Firebase para Permisos
let dbPermisos = null;
async function initFirebasePermisos() {
    if (dbPermisos) return; // Ya está inicializado
    
    try {
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js");
        const firebaseFirestore = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        
        const getFirestorePermisos = firebaseFirestore.getFirestore;
        
        const firebaseConfigPermisos = {
            apiKey: "AIzaSyAke6YWTAZxnQE5u5GT232IftXQFF6P6QQ",
            authDomain: "formulariopermisos.firebaseapp.com",
            projectId: "formulariopermisos",
            storageBucket: "formulariopermisos.firebasestorage.app",
            messagingSenderId: "1022315683273",
            appId: "1:1022315683273:web:f52d530214f8df34285c18"
        };
        
        const appPermisos = initializeApp(firebaseConfigPermisos, 'permisos');
        dbPermisos = getFirestorePermisos(appPermisos);
        console.log('✅ Firebase Permisos inicializado');
    } catch (error) {
        console.error('❌ Error al inicializar Firebase Permisos:', error);
    }
}

// Inicializar Firebase para Lesionados
let dbLesionados = null;
async function initFirebaseLesionados() {
    if (dbLesionados) return; // Ya está inicializado
    
    try {
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js");
        const firebaseFirestore = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        
        const getFirestoreLesionados = firebaseFirestore.getFirestore;
        
        const firebaseConfigLesionados = {
            apiKey: "AIzaSyCzRZgwZzvrBJUMoj6FFRMwcltOyfUxrzM",
            authDomain: "formulariolesionados-e7607.firebaseapp.com",
            projectId: "formulariolesionados-e7607",
            storageBucket: "formulariolesionados-e7607.firebasestorage.app",
            messagingSenderId: "473631286727",
            appId: "1:473631286727:web:e8823a66e0c7ab9c6965e2"
        };
        
        const appLesionados = initializeApp(firebaseConfigLesionados, 'lesionados');
        dbLesionados = getFirestoreLesionados(appLesionados);
        console.log('✅ Firebase Lesionados inicializado');
    } catch (error) {
        console.error('❌ Error al inicializar Firebase Lesionados:', error);
    }
}

// Inicializar Firebase para Mensualidades
let dbMensualidades = null;
async function initFirebaseMensualidades() {
    if (dbMensualidades) return; // Ya está inicializado
    
    try {
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js");
        const firebaseFirestore = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        
        const getFirestoreMensualidades = firebaseFirestore.getFirestore;
        
        const firebaseConfigMensualidades = {
            apiKey: "AIzaSyBeY6ricPR3I3aHXgsR13src-q3eULS4A0",
            authDomain: "formulariomensualidad.firebaseapp.com",
            projectId: "formulariomensualidad",
            storageBucket: "formulariomensualidad.firebasestorage.app",
            messagingSenderId: "145595734950",
            appId: "1:145595734950:web:24152db2aa45fb32bf0d67"
        };
        
        const appMensualidades = initializeApp(firebaseConfigMensualidades, 'mensualidades');
        dbMensualidades = getFirestoreMensualidades(appMensualidades);
        console.log('✅ Firebase Mensualidades inicializado');
    } catch (error) {
        console.error('❌ Error al inicializar Firebase Mensualidades:', error);
    }
}

async function initFirebaseStorage() {
    if (storage) return;

    await initFirebase();

    const firebaseStorage = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js');
    storageRefFn = firebaseStorage.ref;
    uploadBytesFn = firebaseStorage.uploadBytes;
    getDownloadURLFn = firebaseStorage.getDownloadURL;
    deleteObjectFn = firebaseStorage.deleteObject;
    if (!getStorageFn) getStorageFn = firebaseStorage.getStorage;

    storage = getStorageFn();
}

function sanitizeFileName(name) {
    return name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
}

async function uploadJugadorPhoto(jugadorId, file) {
    await initFirebaseStorage();
    if (!storage || !storageRefFn || !uploadBytesFn || !getDownloadURLFn) {
        throw new Error('Firebase Storage no está disponible');
    }

    const cleanName = sanitizeFileName(file.name || 'foto.jpg');
    const storagePath = `jugadores/${jugadorId}/${Date.now()}_${cleanName}`;
    const refStorage = storageRefFn(storage, storagePath);

    await uploadBytesFn(refStorage, file);
    const url = await getDownloadURLFn(refStorage);

    return { url, path: storagePath };
}

async function deleteJugadorPhotoFromStorage(path) {
    if (!path) return;
    await initFirebaseStorage();
    if (!storage || !storageRefFn || !deleteObjectFn) return;

    try {
        const refStorage = storageRefFn(storage, path);
        await deleteObjectFn(refStorage);
    } catch (error) {
        console.warn('⚠️ No se pudo eliminar la foto del almacenamiento:', error);
    }
}

function extractStoragePathFromUrl(url) {
    try {
        const decoded = decodeURIComponent(url);
        const start = decoded.indexOf('/o/');
        if (start === -1) return null;
        const pathWithParams = decoded.substring(start + 3);
        const end = pathWithParams.indexOf('?');
        return end === -1 ? pathWithParams : pathWithParams.substring(0, end);
    } catch (error) {
        console.warn('⚠️ No se pudo extraer la ruta de la foto:', error);
        return null;
    }
}

// ========================================
// ELEMENTOS DEL DOM
// ========================================
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const btnMenu = document.getElementById('btnMenu');
const btnLogout = document.getElementById('btnLogout');
const themeBtn = document.getElementById('themeBtn');
const themeDropdown = document.getElementById('themeDropdown');
const themeOptions = document.querySelectorAll('.theme-option');
const navItems = document.querySelectorAll('.nav-item');
const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');
const userName = document.getElementById('userName');
const jugadoresGrid = document.getElementById('jugadoresGrid');
const jugadoresTotal = document.getElementById('jugadoresTotal');
const jugadoresSearchInput = document.getElementById('jugadoresSearch');
const jugadoresCategoryFilter = document.getElementById('jugadoresCategoryFilter');
const sectionJugadores = document.getElementById('section-jugadores');

// Elementos de contadores
const adeudosCount = document.getElementById('adeudosCount');
const lesionadosCount = document.getElementById('lesionadosCount');
const permisosCount = document.getElementById('permisosCount');
const comedorCount = document.getElementById('comedorCount');

let addDocRef = null;
let docRefFn = null;
let updateDocFn = null;
let deleteFieldFn = null;
let TimestampFn = null;

let storage = null;
let storageRefFn = null;
let uploadBytesFn = null;
let getDownloadURLFn = null;
let deleteObjectFn = null;
let getStorageFn = null;

let jugadoresData = [];
let jugadoresFiltered = [];
let currentJugador = null;

// Modal
const playerModal = document.getElementById('playerModal');
const modalClose = document.getElementById('modalClose');
const modalBtnClose = document.getElementById('modalBtnClose');
const modalBtnAction = document.getElementById('modalBtnAction');
const modalPlayerName = document.getElementById('modalPlayerName');
const modalPlayerCategory = document.getElementById('modalPlayerCategory');
const modalAvatar = document.getElementById('modalAvatar');
const modalAvatarText = document.getElementById('modalAvatarText');
const modalBody = document.getElementById('modalBody');

// ========================================
// DATOS DE EJEMPLO
// ========================================
const mockData = {
    adeudos: [
        {
            id: 1,
            nombre: "Juan Pérez García",
            categoria: "Sub-17",
            foto: null,
            monto: 4500,
            meses: 3,
            prioridad: "critico",
            ultimoPago: "15/07/2024"
        },
        {
            id: 2,
            nombre: "Carlos Rodríguez",
            categoria: "Sub-15",
            foto: null,
            monto: 3000,
            meses: 2,
            prioridad: "alto",
            ultimoPago: "20/08/2024"
        },
        {
            id: 3,
            nombre: "Miguel Hernández",
            categoria: "Sub-16",
            foto: null,
            monto: 1500,
            meses: 1,
            prioridad: "medio",
            ultimoPago: "10/09/2024"
        },
        {
            id: 4,
            nombre: "Roberto Sánchez",
            categoria: "Sub-14",
            foto: null,
            monto: 3000,
            meses: 2,
            prioridad: "alto",
            ultimoPago: "25/08/2024"
        },
        {
            id: 5,
            nombre: "Diego Martínez",
            categoria: "Sub-17",
            foto: null,
            monto: 6000,
            meses: 4,
            prioridad: "critico",
            ultimoPago: "01/07/2024"
        },
        {
            id: 6,
            nombre: "Fernando López",
            categoria: "Sub-15",
            foto: null,
            monto: 1500,
            meses: 1,
            prioridad: "medio",
            ultimoPago: "05/09/2024"
        },
        {
            id: 7,
            nombre: "Javier Torres",
            categoria: "Sub-16",
            foto: null,
            monto: 4500,
            meses: 3,
            prioridad: "critico",
            ultimoPago: "18/07/2024"
        },
        {
            id: 8,
            nombre: "Antonio Ramírez",
            categoria: "Sub-14",
            foto: null,
            monto: 3000,
            meses: 2,
            prioridad: "alto",
            ultimoPago: "22/08/2024"
        }
    ],
    lesionados: [
        {
            id: 1,
            nombre: "Pedro González",
            categoria: "Sub-17",
            foto: null,
            tipoLesion: "Esguince de tobillo",
            fechaLesion: "15/09/2024",
            recuperacion: "2-3 semanas",
            estado: "En tratamiento"
        },
        {
            id: 2,
            nombre: "Luis Morales",
            categoria: "Sub-16",
            foto: null,
            tipoLesion: "Desgarro muscular",
            fechaLesion: "20/09/2024",
            recuperacion: "4-6 semanas",
            estado: "Recuperándose"
        },
        {
            id: 3,
            nombre: "Andrés Vega",
            categoria: "Sub-15",
            foto: null,
            tipoLesion: "Fractura de brazo",
            fechaLesion: "10/09/2024",
            recuperacion: "6-8 semanas",
            estado: "En tratamiento"
        }
    ],
    permisos: [
        {
            id: 1,
            nombre: "Ricardo Castro",
            categoria: "Sub-16",
            foto: null,
            motivo: "Viaje familiar",
            fecha: "25/10/2024",
            duracion: "3 días",
            estado: "Pendiente"
        },
        {
            id: 2,
            nombre: "Daniel Flores",
            categoria: "Sub-15",
            foto: null,
            motivo: "Exámenes escolares",
            fecha: "28/10/2024",
            duracion: "1 día",
            estado: "Aprobado"
        },
        {
            id: 3,
            nombre: "Jorge Mendoza",
            categoria: "Sub-17",
            foto: null,
            motivo: "Cita médica",
            fecha: "30/10/2024",
            duracion: "1 día",
            estado: "Pendiente"
        },
        {
            id: 4,
            nombre: "Sergio Ortiz",
            categoria: "Sub-14",
            foto: null,
            motivo: "Compromiso familiar",
            fecha: "02/11/2024",
            duracion: "2 días",
            estado: "Pendiente"
        },
        {
            id: 5,
            nombre: "Raúl Jiménez",
            categoria: "Sub-16",
            foto: null,
            motivo: "Torneo escolar",
            fecha: "05/11/2024",
            duracion: "2 días",
            estado: "Aprobado"
        }
    ],
    comedor: [
        {
            id: 1,
            nombre: "Eduardo Silva",
            categoria: "Sub-15",
            foto: null,
            fecha: "28/10/2024",
            hora: "14:30"
        },
        {
            id: 2,
            nombre: "Manuel Ruiz",
            categoria: "Sub-16",
            foto: null,
            fecha: "28/10/2024",
            hora: "14:30"
        }
    ]
};

// ========================================
// CARRUSELES - Estado
// ========================================
const carouselStates = {
    adeudos: { currentIndex: 0, itemsPerView: 5 },
    lesionados: { currentIndex: 0, itemsPerView: 5 },
    permisos: { currentIndex: 0, itemsPerView: 5 },
    comedor: { currentIndex: 0, itemsPerView: 5 },
    'comedor-no-pasaron': { currentIndex: 0, itemsPerView: 5 },
    'comedor-pasaron': { currentIndex: 0, itemsPerView: 5 }
};

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Verificar autenticación
    checkAuth();
    
    // Cargar datos del usuario
    loadUserData();
    
    // Mostrar banner de bienvenida
    showWelcomeBanner();
    
    // Cargar tema guardado
    loadTheme();
    
    // Asegurar que se muestre el resumen del dashboard al cargar
    showPageContent('dashboard');
    
    // Cargar datos del dashboard
    loadDashboardData();
    
    // Event Listeners
    setupEventListeners();
    
    // Aplicar filtros de permisos en Exportar
    applyExportarPermissions();
    
    // Cargar carruseles
    loadAllCarousels();
    
    // Configurar responsive
    updateCarouselItemsPerView();
    window.addEventListener('resize', updateCarouselItemsPerView);
});

// ========================================
// VERIFICAR AUTENTICACIÓN
// ========================================
// ========================================
// SISTEMA DE PERMISOS
// ========================================
let currentUser = null;

function checkAuth() {
    const session = localStorage.getItem('teotihuacan_session');
    
    if (!session) {
        window.location.href = 'index.html';
        return;
    }
    
    try {
        const sessionData = JSON.parse(session);
        if (!sessionData.isActive) {
            window.location.href = 'index.html';
            return;
        }
        
        currentUser = sessionData.user;
        console.log('✅ Usuario autenticado:', currentUser.name);
        console.log('🔐 Permisos:', currentUser.permissions);
        
        // Aplicar permisos
        applyUserPermissions();
    } catch (error) {
        console.error('❌ Error al verificar sesión:', error);
        window.location.href = 'index.html';
    }
}

function applyUserPermissions() {
    if (!currentUser || !currentUser.permissions) {
        console.warn('⚠️ Usuario sin permisos definidos');
        return;
    }
    
    const menuPermissions = currentUser.permissions.menu || [];
    
    // Si tiene acceso completo, no ocultar nada
    if (menuPermissions.includes('all')) {
        console.log('✅ Usuario con acceso completo');
        return;
    }
    
    // Mapeo de páginas a data-page
    const pageMap = {
        'dashboard': 'dashboard',
        'jugadores': 'jugadores',
        'comedor': 'comedor',
        'casaclub': 'casaclub',
        'permisos': 'permisos',
        'lesionados': 'lesionados',
        'mensualidades': 'mensualidades',
        'exportar': 'exportar',
        'balance': 'balance',
        'altas': 'altas',
        'bajas': 'bajas'
    };
    
    // Ocultar elementos del menú que no están permitidos
    Object.keys(pageMap).forEach(pageKey => {
        const pageValue = pageMap[pageKey];
        if (!menuPermissions.includes(pageKey)) {
            const navItem = document.querySelector(`.nav-item[data-page="${pageValue}"]`);
            if (navItem) {
                navItem.style.display = 'none';
                console.log(`🚫 Ocultando menú: ${pageKey}`);
            }
        }
    });
    
    console.log('✅ Permisos aplicados correctamente');
}

function hasPermission(area, item) {
    if (!currentUser || !currentUser.permissions) {
        return false;
    }
    
    const areaPermissions = currentUser.permissions[area] || [];
    
    // Si tiene acceso completo
    if (areaPermissions.includes('all')) {
        return true;
    }
    
    // Verificar si tiene permiso específico
    return areaPermissions.includes(item);
}

function hasPagePermission(page) {
    if (!currentUser || !currentUser.permissions) {
        return false;
    }
    
    const menuPermissions = currentUser.permissions.menu || [];
    
    // Si tiene acceso completo
    if (menuPermissions.includes('all')) {
        return true;
    }
    
    // Mapeo de páginas
    const pageMap = {
        'dashboard': 'dashboard',
        'jugadores': 'jugadores',
        'comedor': 'comedor',
        'casaclub': 'casaclub',
        'permisos': 'permisos',
        'lesionados': 'lesionados',
        'mensualidades': 'mensualidades',
        'exportar': 'exportar',
        'balance': 'balance',
        'altas': 'altas',
        'bajas': 'bajas'
    };
    
    const pageKey = Object.keys(pageMap).find(key => pageMap[key] === page);
    return pageKey ? menuPermissions.includes(pageKey) : false;
}

function applyExportarPermissions() {
    const exportarSelect = document.getElementById('exportarTipo');
    if (!exportarSelect) return;
    
    const exportarPermissions = currentUser?.permissions?.exportar || [];
    const hasFullAccess = exportarPermissions.includes('all');
    
    if (hasFullAccess) {
        // Juan: mostrar todas las opciones
        return;
    }
    
    // Charly: solo mostrar Lesionados y Jugadores
    const options = exportarSelect.querySelectorAll('option');
    options.forEach(option => {
        const value = option.value;
        if (value === '' || value === 'lesionados' || value === 'jugadores') {
            // Mantener opción vacía y las permitidas
            return;
        }
        // Ocultar opciones no permitidas
        option.style.display = 'none';
    });
    
    console.log('✅ Permisos de Exportar aplicados');
}

// ========================================
// CARGAR DATOS DEL USUARIO
// ========================================
function loadUserData() {
    if (currentUser) {
        userName.textContent = currentUser.name || 'Usuario';
    } else {
        const session = localStorage.getItem('teotihuacan_session');
        if (session) {
            try {
                const sessionData = JSON.parse(session);
                currentUser = sessionData.user;
                userName.textContent = currentUser.name || 'Usuario';
            } catch (error) {
                console.error('❌ Error al cargar datos del usuario:', error);
            }
        }
    }
}

// ========================================
// BANNER DE BIENVENIDA
// ========================================
let timeUpdateInterval = null;

function showWelcomeBanner() {
    const welcomeBanner = document.getElementById('welcomeBanner');
    const welcomeUserName = document.getElementById('welcomeUserName');
    const timeHours = document.getElementById('timeHours');
    const timeMinutes = document.getElementById('timeMinutes');
    const timePeriod = document.getElementById('timePeriod');
    
    if (!welcomeBanner || !welcomeUserName || !timeHours || !timeMinutes || !timePeriod) {
        return;
    }
    
    // Mostrar nombre del usuario
    if (currentUser) {
        welcomeUserName.textContent = currentUser.name || 'Usuario';
    } else {
        const session = localStorage.getItem('teotihuacan_session');
        if (session) {
            try {
                const sessionData = JSON.parse(session);
                currentUser = sessionData.user;
                welcomeUserName.textContent = currentUser.name || 'Usuario';
            } catch (error) {
                console.error('❌ Error al cargar nombre del usuario:', error);
            }
        }
    }
    
    // Limpiar intervalo anterior si existe
    if (timeUpdateInterval) {
        clearInterval(timeUpdateInterval);
    }
    
    // Función para formatear números con ceros a la izquierda
    function padZero(num) {
        return num.toString().padStart(2, '0');
    }
    
    // Función para actualizar la hora en tiempo real
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = padZero(now.getMinutes());
        const period = hours >= 12 ? 'PM' : 'AM';
        
        // Convertir a formato de 12 horas
        hours = hours % 12;
        hours = hours ? hours : 12; // Si es 0, mostrar 12
        hours = padZero(hours);
        
        if (timeHours) timeHours.textContent = hours;
        if (timeMinutes) timeMinutes.textContent = minutes;
        if (timePeriod) timePeriod.textContent = period;
    }
    
    // Actualizar hora inmediatamente
    updateTime();
    
    // Actualizar hora cada segundo
    timeUpdateInterval = setInterval(updateTime, 1000);
    
    // Mostrar banner solo en dashboard
    const currentPage = document.querySelector('.nav-item.active')?.dataset.page || 'dashboard';
    if (currentPage === 'dashboard') {
        welcomeBanner.style.display = 'block';
    } else {
        welcomeBanner.style.display = 'none';
        // Limpiar intervalo cuando se oculta el banner
        if (timeUpdateInterval) {
            clearInterval(timeUpdateInterval);
            timeUpdateInterval = null;
        }
    }
}

// ========================================
// CARGAR DATOS DEL DASHBOARD
// ========================================
function loadDashboardData() {
    // Verificar permisos del dashboard
    const dashboardPermissions = currentUser?.permissions?.dashboard || [];
    const hasFullAccess = dashboardPermissions.includes('all');
    
    // Ocultar tarjetas según permisos
    const cardsGrid = document.getElementById('cardsGrid');
    if (cardsGrid) {
        const adeudosCard = cardsGrid.querySelector('.card-adeudos');
        const permisosCard = cardsGrid.querySelector('.card-permisos');
        const comedorCard = cardsGrid.querySelector('.card-comedor');
        
        if (!hasFullAccess) {
            // Para Charly, solo mostrar Lesionados y Jugadores
            if (adeudosCard) adeudosCard.style.display = 'none';
            if (permisosCard) permisosCard.style.display = 'none';
            if (comedorCard) comedorCard.style.display = 'none';
        }
    }
    
    // Ocultar balance compacto (ingresos del mes) si no tiene acceso completo
    const dashboardBalanceCompact = document.getElementById('dashboardBalanceCompact');
    if (dashboardBalanceCompact) {
        dashboardBalanceCompact.style.display = hasFullAccess ? 'block' : 'none';
    }
    
    // Cargar datos según permisos
    if (hasFullAccess) {
        // Cargar todos los datos
        loadAllDashboardData();
    } else {
        // Cargar solo datos permitidos
        loadLimitedDashboardData(dashboardPermissions);
    }
}

async function loadAllDashboardData() {
    // Cargar datos completos (para Juan)
    try {
        await Promise.all([
            loadMensualidades(),
            loadLesionados(),
            loadPermisos(),
            loadComedor(),
            loadBalance()
        ]);
        
        // Actualizar contadores con validación para evitar NaN
        const dashboardData = {
            adeudos: (mensualidadesData?.adeudos?.length) || 0,
            lesionados: (lesionadosData?.registros?.length || lesionadosData?.length) || 0,
            permisos: (permisosData?.registros?.length || permisosData?.length) || 0,
            comedor: (comedorData?.noPasaron?.length) || 0
        };
        
        if (adeudosCount) animateCounter(adeudosCount, dashboardData.adeudos, 1000);
        if (lesionadosCount) animateCounter(lesionadosCount, dashboardData.lesionados, 1000);
        if (permisosCount) animateCounter(permisosCount, dashboardData.permisos, 1000);
        if (comedorCount) animateCounter(comedorCount, dashboardData.comedor, 1000);
        
        // Configurar navegación en las tarjetas de estadísticas
        setupStatsCardsNavigation();
    } catch (error) {
        console.error('❌ Error al cargar datos del dashboard:', error);
        // En caso de error, mostrar 0 en todos los contadores
        if (adeudosCount) animateCounter(adeudosCount, 0, 1000);
        if (lesionadosCount) animateCounter(lesionadosCount, 0, 1000);
        if (permisosCount) animateCounter(permisosCount, 0, 1000);
        if (comedorCount) animateCounter(comedorCount, 0, 1000);
    }
}

// ========================================
// CONFIGURAR NAVEGACIÓN DESDE TARJETAS DE ESTADÍSTICAS
// ========================================
function setupStatsCardsNavigation() {
    // Mapeo de tarjetas a páginas
    const cardPageMap = {
        'card-adeudos': 'mensualidades',
        'card-lesionados': 'lesionados',
        'card-permisos': 'permisos',
        'card-comedor': 'comedor'
    };
    
    // Agregar event listeners a cada tarjeta
    Object.keys(cardPageMap).forEach(cardClass => {
        const card = document.querySelector(`.${cardClass}`);
        if (card) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const page = cardPageMap[cardClass];
                navigateToPage(page);
            });
        }
    });
}

// ========================================
// CARGAR RESUMEN DEL DASHBOARD
// ========================================
async function loadDashboardSummary(dashboardPermissions, hasFullAccess) {
    try {
        // Cargar datos si no están cargados
        if (hasFullAccess) {
            await Promise.all([
                loadMensualidades(),
                loadLesionados(),
                loadPermisos(),
                loadComedor(),
                loadCasaClub(),
                loadBalance()
            ]);
        } else {
            const promises = [];
            if (dashboardPermissions.includes('lesionados')) {
                promises.push(loadLesionados());
            }
            await Promise.all(promises);
        }
        
        // Cargar resumen de Adeudos (solo si tiene acceso completo)
        if (hasFullAccess) {
            loadSummaryAdeudos();
        }
        
        // Cargar resumen de Lesionados
        if (hasFullAccess || dashboardPermissions.includes('lesionados')) {
            loadSummaryLesionados();
        }
        
        // Cargar resumen de Permisos (solo si tiene acceso completo)
        if (hasFullAccess) {
            loadSummaryPermisos();
        }
        
        // Cargar resumen de Comedor (solo si tiene acceso completo)
        if (hasFullAccess) {
            loadSummaryComedor();
        }
        
        // Cargar resumen de Casa Club (solo si tiene acceso completo)
        if (hasFullAccess) {
            loadSummaryCasaClub();
        }
        
        // Cargar resumen de Balance (solo si tiene acceso completo)
        // Nota: El balance ahora se muestra arriba, no en el resumen
        if (hasFullAccess) {
            loadSummaryBalance();
        }
        
        // Configurar event listeners para navegación desde las secciones del resumen
        setupSummarySectionNavigation();
    } catch (error) {
        console.error('❌ Error al cargar resumen del dashboard:', error);
    }
}

// ========================================
// CONFIGURAR NAVEGACIÓN DESDE SECCIONES DEL RESUMEN
// ========================================
function setupSummarySectionNavigation() {
    // Mapeo de secciones a páginas
    const sectionPageMap = {
        'summary-comedor': 'comedor',
        'summary-casaclub': 'casaclub',
        'summary-permisos': 'permisos',
        'summary-lesionados': 'lesionados',
        'summary-adeudos': 'mensualidades',
        'summary-balance': 'balance'
    };
    
    // Agregar event listeners a cada sección
    Object.keys(sectionPageMap).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Hacer la sección clickeable
            section.style.cursor = 'pointer';
            section.addEventListener('click', (e) => {
                // Evitar navegación si se hace clic en las tarjetas de jugadores
                if (e.target.closest('.summary-cards-grid') || e.target.closest('.player-card')) {
                    return;
                }
                
                const page = sectionPageMap[sectionId];
                navigateToPage(page);
            });
            
        }
    });
}

function loadSummaryAdeudos() {
    const container = document.getElementById('summaryAdeudosCards');
    const countElement = document.getElementById('summaryAdeudosCount');
    
    if (!container) return;
    
    const adeudos = mensualidadesData?.adeudos || [];
    const count = adeudos.length;
    
    if (countElement) {
        countElement.textContent = `${count} ${count === 1 ? 'jugador' : 'jugadores'}`;
    }
    
    if (adeudos.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px; grid-column: 1 / -1;">No hay jugadores con adeudos</p>';
        return;
    }
    
    container.innerHTML = adeudos.map(player => createPlayerCard(player, 'mensualidades')).join('');
    
    // Agregar event listeners a las tarjetas
    container.querySelectorAll('.player-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            openPlayerModal(adeudos[index], 'mensualidades');
        });
    });
}

function loadSummaryLesionados() {
    const container = document.getElementById('summaryLesionadosCards');
    const countElement = document.getElementById('summaryLesionadosCount');
    
    if (!container) return;
    
    const lesionados = lesionadosData?.registros || [];
    const count = lesionados.length;
    
    if (countElement) {
        countElement.textContent = `${count} ${count === 1 ? 'jugador' : 'jugadores'}`;
    }
    
    if (lesionados.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px; grid-column: 1 / -1;">No hay jugadores lesionados</p>';
        return;
    }
    
    container.innerHTML = lesionados.map(player => createPlayerCard(player, 'lesionados')).join('');
    
    // Agregar event listeners a las tarjetas
    container.querySelectorAll('.player-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            openPlayerModal(lesionados[index], 'lesionados');
        });
    });
}

function loadSummaryPermisos() {
    const container = document.getElementById('summaryPermisosCards');
    const countElement = document.getElementById('summaryPermisosCount');
    
    if (!container) return;
    
    const permisos = permisosData?.registros || [];
    const count = permisos.length;
    
    if (countElement) {
        countElement.textContent = `${count} ${count === 1 ? 'jugador' : 'jugadores'}`;
    }
    
    if (permisos.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px; grid-column: 1 / -1;">No hay permisos activos</p>';
        return;
    }
    
    container.innerHTML = permisos.map(player => createPlayerCard(player, 'permisos')).join('');
    
    // Agregar event listeners a las tarjetas
    container.querySelectorAll('.player-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            openPlayerModal(permisos[index], 'permisos');
        });
    });
}

function loadSummaryComedor() {
    const container = document.getElementById('summaryComedorCards');
    const countElement = document.getElementById('summaryComedorCount');
    
    if (!container) return;
    
    // Solo mostrar los que NO pasaron al comedor
    const noPasaron = comedorData?.noPasaron || [];
    const count = noPasaron.length;
    
    console.log('📊 loadSummaryComedor - Datos:', {
        total: noPasaron.length,
        primerJugador: noPasaron[0] ? {
            nombre: noPasaron[0].nombreCompleto,
            tieneRegistrosHoy: noPasaron[0].registrosHoy !== undefined,
            registrosHoy: noPasaron[0].registrosHoy,
            totalRegistrosHoy: noPasaron[0].totalRegistrosHoy,
            comidasFaltantes: noPasaron[0].comidasFaltantes
        } : null
    });
    
    if (countElement) {
        countElement.textContent = `${count} ${count === 1 ? 'jugador' : 'jugadores'}`;
    }
    
    if (noPasaron.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px; grid-column: 1 / -1;">Todos los jugadores pasaron al comedor</p>';
        return;
    }
    
    // Asegurar que todos los jugadores tengan la información necesaria
    const jugadoresConInfo = noPasaron.map(player => {
        // Si el jugador no tiene registrosHoy definido, asegurar que esté como array vacío
        if (player.registrosHoy === undefined) {
            return {
                ...player,
                registrosHoy: [],
                totalRegistrosHoy: 0,
                comidasFaltantes: ['Desayuno', 'Comida', 'Cena']
            };
        }
        return player;
    });
    
    container.innerHTML = jugadoresConInfo.map(player => createPlayerCard(player, 'comedor')).join('');
    
    // Agregar event listeners a las tarjetas
    container.querySelectorAll('.player-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            openPlayerModal(jugadoresConInfo[index], 'comedor');
        });
    });
}

function loadSummaryCasaClub() {
    const container = document.getElementById('summaryCasaClubCards');
    const countElement = document.getElementById('summaryCasaClubCount');
    
    if (!container) return;
    
    // Filtrar registros que NO tienen horaSalida (no completados)
    const registros = casaClubData?.registros || [];
    const noCompletados = registros.filter(registro => !registro.horaSalida);
    const count = noCompletados.length;
    
    if (countElement) {
        countElement.textContent = `${count} ${count === 1 ? 'jugador' : 'jugadores'}`;
    }
    
    if (noCompletados.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px; grid-column: 1 / -1;">Todos los registros están completados</p>';
        return;
    }
    
    // Convertir registros a formato de jugador para usar createPlayerCard
    const jugadores = noCompletados.map(registro => ({
        id: registro.id,
        nombreCompleto: registro.nombre || 'Sin nombre',
        categoria: registro.categoria || 'Sin categoría',
        celular: registro.celular || 'Sin contacto',
        motivo: registro.motivo || 'Sin destino',
        horaEntrada: registro.horaEntrada || null,
        horaSalida: registro.horaSalida || null,
        timestamp: registro.timestamp || null,
        fecha: registro.fecha || null
    }));
    
    container.innerHTML = jugadores.map(player => createPlayerCard(player, 'casaclub')).join('');
    
    // Agregar event listeners a las tarjetas
    container.querySelectorAll('.player-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            openPlayerModal(jugadores[index], 'casaclub');
        });
    });
}

function loadSummaryBalance() {
    // Obtener mes actual
    const ahora = new Date();
    const mesActual = String(ahora.getMonth() + 1).padStart(2, '0');
    const añoActual = ahora.getFullYear();
    
    // Filtrar registros del mes actual
    const todosLosRegistros = balanceData?.todosLosRegistros || balanceDataOriginal?.todosLosRegistros || [];
    
    // Si no hay datos aún, mostrar mensaje de carga
    if (!todosLosRegistros || todosLosRegistros.length === 0) {
        const balanceCompactValue = document.getElementById('balanceCompactValue');
        const balanceCompactDetails = document.getElementById('balanceCompactDetails');
        
        if (balanceCompactValue) {
            balanceCompactValue.textContent = '$0.00';
        }
        if (balanceCompactDetails) {
            balanceCompactDetails.innerHTML = '<span class="balance-compact-period">Cargando datos...</span>';
        }
        return;
    }
    
    const registrosMesActual = todosLosRegistros.filter(reg => {
        let fechaRegistro = null;
        
        // Intentar obtener fecha del registro
        if (reg.mes) {
            // Si tiene campo mes, comparar directamente
            const meses = {
                'Enero': '01', 'Febrero': '02', 'Marzo': '03', 'Abril': '04',
                'Mayo': '05', 'Junio': '06', 'Julio': '07', 'Agosto': '08',
                'Septiembre': '09', 'Octubre': '10', 'Noviembre': '11', 'Diciembre': '12'
            };
            const mesRegistro = meses[reg.mes] || reg.mes;
            if (mesRegistro === mesActual) {
                // Verificar también el año
                if (reg.fechaPago) {
                    const fecha = new Date(reg.fechaPago);
                    return fecha.getFullYear() === añoActual;
                }
                return true;
            }
            return false;
        }
        
        // Si no tiene campo mes, extraer de fecha
        if (reg.fechaPago) {
            fechaRegistro = new Date(reg.fechaPago);
        } else if (reg.timestamp) {
            fechaRegistro = reg.timestamp.toDate ? reg.timestamp.toDate() : new Date(reg.timestamp);
        } else if (reg.fechaCreacion) {
            fechaRegistro = new Date(reg.fechaCreacion);
        }
        
        if (!fechaRegistro) return false;
        
        const mesRegistro = String(fechaRegistro.getMonth() + 1).padStart(2, '0');
        const añoRegistro = fechaRegistro.getFullYear();
        
        return mesRegistro === mesActual && añoRegistro === añoActual;
    });
    
    // Calcular total de ingresos del mes actual
    const totalIngresosMes = registrosMesActual.reduce((total, reg) => {
        return total + (reg.monto || 0);
    }, 0);
    
    // Actualizar monto en el balance compacto (arriba)
    const balanceCompactValue = document.getElementById('balanceCompactValue');
    if (balanceCompactValue) {
        balanceCompactValue.textContent = `$${totalIngresosMes.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    
    // Mostrar información adicional en el balance compacto
    const nombreMes = ahora.toLocaleString('es-MX', { month: 'long' });
    const nombreMesCapitalizado = nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);
    const balanceCompactDetails = document.getElementById('balanceCompactDetails');
    
    if (balanceCompactDetails) {
        balanceCompactDetails.innerHTML = `
            <span class="balance-compact-period">${nombreMesCapitalizado} ${añoActual} • ${registrosMesActual.length} ${registrosMesActual.length === 1 ? 'pago' : 'pagos'}</span>
        `;
    }
    
    // Mostrar el balance compacto solo si tiene acceso completo
    const dashboardBalanceCompact = document.getElementById('dashboardBalanceCompact');
    if (dashboardBalanceCompact) {
        const dashboardPermissions = currentUser?.permissions?.dashboard || [];
        const hasFullAccess = dashboardPermissions.includes('all');
        dashboardBalanceCompact.style.display = hasFullAccess ? 'block' : 'none';
    }
}

async function loadLimitedDashboardData(permissions) {
    // Cargar solo datos permitidos (para Charly)
    const promises = [];
    
    if (permissions.includes('lesionados')) {
        promises.push(loadLesionados());
    }
    
    if (permissions.includes('jugadores')) {
        promises.push(loadJugadores());
    }
    
    try {
        await Promise.all(promises);
        
        // Actualizar solo contadores permitidos
        if (permissions.includes('lesionados') && lesionadosCount) {
            const lesionadosCountValue = (lesionadosData?.registros?.length || lesionadosData?.length) || 0;
            animateCounter(lesionadosCount, lesionadosCountValue, 1000);
        }
        
        // Jugadores no tiene contador en las tarjetas, se muestra en su sección
    } catch (error) {
        console.error('❌ Error al cargar datos limitados del dashboard:', error);
    }
}

// ========================================
// ANIMAR CONTADORES
// ========================================
function animateCounter(element, target, duration) {
    // Validar que target sea un número válido, si no, usar 0
    const validTarget = (typeof target === 'number' && !isNaN(target) && isFinite(target)) ? target : 0;
    
    let start = 0;
    const increment = validTarget / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= validTarget) {
            element.textContent = validTarget;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// CARGAR TODOS LOS CARRUSELES
// ========================================
function loadAllCarousels() {
    loadCarousel('adeudos', mockData.adeudos);
    loadCarousel('lesionados', mockData.lesionados);
    loadCarousel('permisos', mockData.permisos);
    // El comedor se carga desde Firebase, no desde mockData
}

// ========================================
// CARGAR CARRUSEL
// ========================================
function loadCarousel(type, data) {
    const carousel = document.getElementById(`carousel-${type}`);
    const totalElement = document.getElementById(`${type}Total`);
    
    if (!carousel || !data || data.length === 0) {
        if (carousel) {
            carousel.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">No hay datos disponibles</p>';
        }
        return;
    }
    
    // Actualizar contador total solo si existe el elemento
    if (totalElement) {
        totalElement.textContent = `${data.length} ${data.length === 1 ? 'jugador' : 'jugadores'}`;
    }
    
    // Crear tarjetas
    carousel.innerHTML = data.map(player => createPlayerCard(player, type)).join('');
    
    // Crear indicadores
    createIndicators(type, data.length);
    
    // Configurar botones
    setupCarouselButtons(type, data.length);
    
    // Agregar event listeners a las tarjetas
    carousel.querySelectorAll('.player-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            // Normalizar el tipo para comedor (puede ser 'comedor-pasaron' o 'comedor-no-pasaron')
            let tipoNormalizado = type.startsWith('comedor') ? 'comedor' : type;
            if (type === 'adeudos' || type.startsWith('mensualidades')) {
                tipoNormalizado = 'mensualidades';
            }
            console.log('🖱️ Click en tarjeta:', { tipoOriginal: type, tipoNormalizado, index, player: data[index] });
            openPlayerModal(data[index], tipoNormalizado);
        });
    });
}

// ========================================
// DETERMINAR TIPO DE COMIDA POR HORA
// ========================================
function determinarTipoComidaPorHora(hora) {
    if (!hora) return 'Comida';
    
    // Convertir hora a número para comparar
    let horaNum = 0;
    
    if (typeof hora === 'string') {
        // Manejar formato "12:24 p.m." o "12:24 PM" o "12:24"
        const horaLimpia = hora.trim().toLowerCase();
        
        // Extraer la hora y si es AM/PM
        const match = horaLimpia.match(/(\d{1,2}):?(\d{0,2})\s*(a\.?m\.?|p\.?m\.?|am|pm)?/);
        
        if (match) {
            horaNum = parseInt(match[1]);
            const esPM = match[3] && (match[3].includes('p') || match[3].includes('pm'));
            
            // Convertir a formato 24 horas
            if (esPM && horaNum !== 12) {
                horaNum += 12;
            } else if (!esPM && horaNum === 12) {
                horaNum = 0;
            }
        } else {
            // Si no hay match, intentar parsear directamente
            const partes = hora.split(':');
            horaNum = parseInt(partes[0]) || 0;
        }
    } else {
        horaNum = hora;
    }
    
    // Desayuno: 6:00 - 10:00
    if (horaNum >= 6 && horaNum < 10) {
        return 'Desayuno';
    }
    // Comida: 12:00 - 16:00
    else if (horaNum >= 12 && horaNum < 16) {
        return 'Comida';
    }
    // Cena: 18:00 - 22:00
    else if (horaNum >= 18 && horaNum < 22) {
        return 'Cena';
    }
    // Por defecto
    return 'Comida';
}

// ========================================
// FORMATEAR FECHA DEL TIMESTAMP
// ========================================
function formatearFechaComedor(timestamp, fechaString) {
    let fecha = null;
    
    // Intentar obtener la fecha del timestamp
    if (timestamp) {
        if (timestamp.toDate && typeof timestamp.toDate === 'function') {
            // Es un Timestamp de Firestore
            fecha = timestamp.toDate();
        } else if (timestamp instanceof Date) {
            // Ya es un objeto Date
            fecha = timestamp;
        } else if (typeof timestamp === 'string' || typeof timestamp === 'number') {
            // Es un string o número, intentar convertirlo
            fecha = new Date(timestamp);
        }
    }
    
    // Si no se pudo obtener del timestamp, intentar con fechaString
    if ((!fecha || isNaN(fecha.getTime())) && fechaString) {
        fecha = new Date(fechaString);
    }
    
    if (!fecha || isNaN(fecha.getTime())) {
        console.warn('⚠️ No se pudo formatear la fecha:', { timestamp, fechaString });
        return 'Fecha no disponible';
    }
    
    // Días de la semana en español
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    const diaSemana = diasSemana[fecha.getDay()];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    
    return `${diaSemana}, ${dia} de ${mes} de ${año}`;
}

// ========================================
// FORMATEAR NOMBRE EN DOS LÍNEAS
// ========================================
function formatearNombreDosLineas(player) {
    // Si tiene campos separados, usarlos directamente
    if (player.nombres && (player.apellidoPaterno || player.apellidoMaterno)) {
        const nombres = player.nombres.trim();
        const apellidos = `${player.apellidoPaterno || ''} ${player.apellidoMaterno || ''}`.trim();
        return {
            nombres: nombres || 'Sin nombre',
            apellidos: apellidos || '',
            nombreCompleto: `${nombres} ${apellidos}`.trim() || 'Sin nombre'
        };
    }
    
    // Si solo tiene nombreCompleto, intentar extraer nombres y apellidos
    const nombreCompleto = player.nombreCompleto || player.nombre || 'Sin nombre';
    const partes = nombreCompleto.trim().split(/\s+/).filter(p => p.length > 0);
    
    if (partes.length === 0) {
        return {
            nombres: 'Sin nombre',
            apellidos: '',
            nombreCompleto: 'Sin nombre'
        };
    }
    
    // Si tiene 1 parte, es solo nombre
    if (partes.length === 1) {
        return {
            nombres: partes[0],
            apellidos: '',
            nombreCompleto: partes[0]
        };
    }
    
    // Si tiene 2 partes, primera es nombre, segunda es apellido
    if (partes.length === 2) {
        return {
            nombres: partes[0],
            apellidos: partes[1],
            nombreCompleto: nombreCompleto
        };
    }
    
    // Si tiene 3 o más partes:
    // - Primera parte: primer nombre
    // - Segunda parte: segundo nombre (si existe) o primer apellido
    // - Resto: apellidos
    
    // Estrategia: asumir que los últimos 2 son apellidos y el resto son nombres
    if (partes.length >= 3) {
        const apellidos = partes.slice(-2).join(' '); // Últimos 2 son apellidos
        const nombres = partes.slice(0, -2).join(' '); // El resto son nombres
        return {
            nombres: nombres,
            apellidos: apellidos,
            nombreCompleto: nombreCompleto
        };
    }
    
    // Fallback
    return {
        nombres: partes[0] || 'Sin nombre',
        apellidos: partes.slice(1).join(' ') || '',
        nombreCompleto: nombreCompleto
    };
}

// ========================================
// CREAR TARJETA DE JUGADOR
// ========================================
function createPlayerCard(player, type) {
    // Formatear nombre en dos líneas
    const nombreFormateado = formatearNombreDosLineas(player);
    const nombreCompleto = nombreFormateado.nombreCompleto;
    
    // Generar iniciales de forma segura
    const initials = nombreCompleto.split(' ').map(n => n && n[0] ? n[0] : '').join('').substring(0, 2).toUpperCase() || '??';
    
    let avatarClass = '';
    let specificInfo = '';
    
    // Normalizar el tipo: si viene con prefijo 'mensualidades-' o es 'adeudos', tratarlo como mensualidades
    // Si viene con prefijo 'comedor-' o es 'comedor', tratarlo como comedor
    let tipoParaSwitch = type;
    if (type.startsWith('mensualidades-') || type === 'adeudos') {
        tipoParaSwitch = 'mensualidades';
    } else if (type.startsWith('comedor-') || type === 'comedor') {
        tipoParaSwitch = 'comedor';
    }
    
    switch(tipoParaSwitch) {
        case 'mensualidades':
            // Para mensualidades, TODAS las tarjetas muestran estado de adeudo de manera simétrica
            avatarClass = 'adeudo';
            
            // Calcular meses pagados (manejar Set o Array)
            let mesesPagadosCount = 0;
            if (player.mesesPagados) {
                if (player.mesesPagados instanceof Set) {
                    mesesPagadosCount = player.mesesPagados.size;
                } else if (Array.isArray(player.mesesPagados)) {
                    mesesPagadosCount = player.mesesPagados.length;
                }
            }
            
            // Calcular meses adeudados (siempre 12 meses requeridos)
            const mesesAdeudados = 12 - mesesPagadosCount;
            
            // Obtener el monto de la mensualidad del jugador (de su alta)
            const montoMensualidad = player.mensualidad?.monto || 0;
            const montoAdeudado = mesesAdeudados * montoMensualidad;
            
            // Todas las tarjetas muestran el mismo formato de adeudo
            specificInfo = `
                <div class="info-row">
                    <span class="info-label">Estado:</span>
                    <span class="status-badge" style="background: #EF4444; color: white;">ADEUDO</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Meses adeudados:</span>
                    <span class="info-value" style="color: #EF4444; font-weight: 600;">${mesesAdeudados}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Monto adeudado:</span>
                    <span class="info-value" style="color: #EF4444; font-weight: 600;">$${montoAdeudado.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Categoría:</span>
                    <span class="info-value" style="font-size: 12px;">${player.categoria || 'N/A'}</span>
                </div>
            `;
            break;
        case 'lesionados':
            avatarClass = 'lesion';
            specificInfo = `
                <div class="info-row">
                    <span class="info-label">Lesión:</span>
                    <span class="info-value" style="font-size: 12px;">${player.tipoLesion || 'N/A'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Recuperación:</span>
                    <span class="info-value" style="font-size: 12px;">${player.recuperacion || 'N/A'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Estado:</span>
                    <span class="status-badge alto">${player.estado || 'N/A'}</span>
                </div>
            `;
            break;
        case 'permisos':
            avatarClass = 'permiso';
            specificInfo = `
                <div class="info-row">
                    <span class="info-label">Motivo:</span>
                    <span class="info-value" style="font-size: 12px;">${player.motivo || 'N/A'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Fecha:</span>
                    <span class="info-value" style="font-size: 12px;">${player.fecha || 'N/A'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Estado:</span>
                    <span class="status-badge ${(player.estado || '').toLowerCase()}">${player.estado || 'N/A'}</span>
                </div>
            `;
            break;
        case 'comedor':
            avatarClass = 'comedor';
            
            // Si el jugador tiene información de registros de hoy (no pasaron), mostrar esa info
            // Verificar si tiene la propiedad registrosHoy (puede ser array vacío o con datos)
            if (player.registrosHoy !== undefined || player.totalRegistrosHoy !== undefined || player.comidasFaltantes !== undefined) {
                // Jugador que NO pasó (tiene menos de 3 comidas)
                const totalRegistros = player.totalRegistrosHoy || 0;
                const comidasFaltantes = player.comidasFaltantes || [];
                
                // Mostrar registros de hoy si los tiene
                let registrosHTML = '';
                if (player.registrosHoy && player.registrosHoy.length > 0) {
                    const ordenComidas = { 'Desayuno': 1, 'Comida': 2, 'Cena': 3 };
                    player.registrosHoy.sort((a, b) => {
                        const ordenA = ordenComidas[a.tipoComida] || 99;
                        const ordenB = ordenComidas[b.tipoComida] || 99;
                        return ordenA - ordenB;
                    });
                    
                    registrosHTML = player.registrosHoy.map(registro => {
                        const tipoComida = registro.tipoComida || 'Comida';
                        return `
                            <div class="info-row" style="margin-bottom: 4px; font-size: 11px; display: flex; align-items: center;">
                                <span class="info-label">${tipoComida}:</span>
                                <span class="info-value" style="font-size: 11px; color: #10B981; font-weight: 600; margin-left: auto;">${registro.hora || 'N/A'}</span>
                            </div>
                        `;
                    }).join('');
                }
                
                // Mostrar comidas faltantes
                let faltantesHTML = '';
                if (comidasFaltantes.length > 0) {
                    faltantesHTML = `
                        <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #E1E8ED;">
                            <div class="info-row" style="font-size: 10px; color: var(--gris-label); margin-bottom: 4px; font-weight: 600;">
                                Faltantes:
                            </div>
                            ${comidasFaltantes.map(comida => {
                                return `
                                    <div class="info-row" style="margin-bottom: 2px; font-size: 11px; color: #DC2626;">
                                        <span>${comida}</span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `;
                }
                
                specificInfo = `
                    <div class="info-row" style="margin-bottom: 8px; font-size: 11px; font-weight: 600; color: var(--negro);">
                        <span>Registros hoy: <span style="color: ${totalRegistros === 0 ? '#DC2626' : totalRegistros < 3 ? '#F59E0B' : '#10B981'};">${totalRegistros}/3</span></span>
                    </div>
                    ${registrosHTML}
                    ${faltantesHTML}
                `;
            } else {
                // Jugador que SÍ pasó (tiene ingresos agrupados) - mostrar historial
                const fechaFormateada = formatearFechaComedor(player.timestamp, player.fecha);
                
                // Obtener todos los ingresos del día (Desayuno, Comida, Cena)
                const ingresos = player.ingresos || [];
                
                // Ordenar ingresos por tipo de comida (Desayuno, Comida, Cena)
                const ordenComidas = { 'Desayuno': 1, 'Comida': 2, 'Cena': 3 };
                ingresos.sort((a, b) => {
                    const ordenA = ordenComidas[a.tipoComida] || 99;
                    const ordenB = ordenComidas[b.tipoComida] || 99;
                    return ordenA - ordenB;
                });
                
                // Crear HTML para mostrar todos los ingresos agrupados por fecha
                let ingresosHTML = '';
                if (ingresos.length > 0) {
                    // Agrupar ingresos por fecha
                    const ingresosPorFecha = {};
                    ingresos.forEach(ingreso => {
                        const fechaIngreso = ingreso.fecha || player.fecha;
                        if (!ingresosPorFecha[fechaIngreso]) {
                            ingresosPorFecha[fechaIngreso] = [];
                        }
                        ingresosPorFecha[fechaIngreso].push(ingreso);
                    });
                    
                    // Ordenar fechas (más recientes primero)
                    const fechasOrdenadas = Object.keys(ingresosPorFecha).sort((a, b) => b.localeCompare(a));
                    
                    // Mostrar solo las últimas 2 fechas en la tarjeta para no sobrecargarla
                    const fechasAMostrar = fechasOrdenadas.slice(0, 2);
                    
                    ingresosHTML = fechasAMostrar.map(fecha => {
                        const ingresosFecha = ingresosPorFecha[fecha];
                        const fechaFormateadaIngreso = formatearFechaComedor(
                            ingresosFecha[0]?.timestamp || null, 
                            fecha
                        );
                        
                        // Ordenar ingresos por tipo de comida
                        const ordenComidas = { 'Desayuno': 1, 'Comida': 2, 'Cena': 3 };
                        ingresosFecha.sort((a, b) => {
                            const ordenA = ordenComidas[a.tipoComida] || 99;
                            const ordenB = ordenComidas[b.tipoComida] || 99;
                            return ordenA - ordenB;
                        });
                        
                        const ingresosFechaHTML = ingresosFecha.map(ingreso => {
                            const tipoComida = ingreso.tipoComida || 'Comida';
                            return `
                                <div class="info-row" style="margin-bottom: 2px; margin-left: 12px; font-size: 11px; display: flex; align-items: center;">
                                    <span class="info-label">${tipoComida}:</span>
                                    <span class="info-value" style="font-size: 11px; margin-left: auto;">${ingreso.hora || 'N/A'}</span>
                                </div>
                            `;
                        }).join('');
                        
                        return `
                            <div style="margin-bottom: 6px;">
                                <div class="info-row" style="font-weight: 600; margin-bottom: 2px; font-size: 11px;">
                                    <span class="info-label">${fechaFormateadaIngreso}:</span>
                                </div>
                                ${ingresosFechaHTML}
                            </div>
                        `;
                    }).join('');
                    
                    // Si hay más fechas, mostrar indicador
                    if (fechasOrdenadas.length > 2) {
                        ingresosHTML += `
                            <div class="info-row" style="font-size: 10px; color: var(--gris-texto); margin-top: 4px;">
                                <span>+${fechasOrdenadas.length - 2} fecha(s) más</span>
                            </div>
                        `;
                    }
                } else {
                    // Si no hay ingresos agrupados, mostrar el ingreso único (compatibilidad hacia atrás)
                    const horaUnica = player.hora || player.horaEntrada || 'N/A';
                    const tipoComidaUnica = determinarTipoComidaPorHora(horaUnica);
                    ingresosHTML = `
                        <div class="info-row" style="display: flex; align-items: center;">
                            <span class="info-label">${tipoComidaUnica}:</span>
                            <span class="info-value" style="margin-left: auto;">${horaUnica}</span>
                        </div>
                    `;
                }
                
                specificInfo = ingresosHTML;
            }
            break;
        case 'casaclub':
            avatarClass = 'casaclub';
            const estadoCasaClub = player.horaSalida ? 'Completado' : 'Fuera de Casa Club';
            const estadoColorCasaClub = player.horaSalida ? '#10B981' : '#FCD34D';
            const estadoBgCasaClub = player.horaSalida ? '#D1FAE5' : '#FEF3C7';
            specificInfo = `
                <div class="info-row">
                    <span class="info-label">Destino:</span>
                    <span class="info-value" style="font-size: 12px;">${player.motivo || 'N/A'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Entrada:</span>
                    <span class="info-value" style="font-size: 12px;">${player.horaEntrada || 'N/A'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Salida:</span>
                    <span class="info-value" style="font-size: 12px;">${player.horaSalida || 'Pendiente'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Estado:</span>
                    <span class="status-badge" style="background: ${estadoBgCasaClub}; color: ${estadoColorCasaClub};">${estadoCasaClub}</span>
                </div>
            `;
            break;
    }
    
    return `
        <div class="player-card" data-player-id="${player.id || ''}">
            <div class="player-card-header">
                <div class="player-avatar ${avatarClass}">
                    <span>${initials}</span>
                </div>
                <div class="player-name-container">
                    <div class="player-name-line">${nombreFormateado.nombres}</div>
                    ${nombreFormateado.apellidos ? `<div class="player-name-line player-name-line-apellidos">${nombreFormateado.apellidos}</div>` : ''}
                </div>
                <p class="player-category">${player.categoria || 'Sin categoría'}</p>
            </div>
            <div class="player-info">
                ${specificInfo}
            </div>
        </div>
    `;
}

// ========================================
// CREAR INDICADORES
// ========================================
function createIndicators(type, totalItems) {
    const indicatorsContainer = document.getElementById(`indicators-${type}`);
    
    // Inicializar estado del carousel si no existe
    if (!carouselStates[type]) {
        carouselStates[type] = { currentIndex: 0, itemsPerView: 5 };
    }
    
    // Si no hay contenedor de indicadores, salir silenciosamente
    if (!indicatorsContainer) {
        return;
    }
    
    const itemsPerView = carouselStates[type].itemsPerView;
    const totalPages = Math.ceil(totalItems / itemsPerView);
    
    if (totalPages <= 1) {
        indicatorsContainer.innerHTML = '';
        return;
    }
    
    indicatorsContainer.innerHTML = Array(totalPages)
        .fill(0)
        .map((_, i) => `<div class="indicator ${i === 0 ? 'active' : ''}" data-page="${i}"></div>`)
        .join('');
    
    // Event listeners
    indicatorsContainer.querySelectorAll('.indicator').forEach(indicator => {
        indicator.addEventListener('click', () => {
            const page = parseInt(indicator.dataset.page);
            goToCarouselPage(type, page);
        });
    });
}

// ========================================
// CONFIGURAR BOTONES DEL CARRUSEL
// ========================================
function setupCarouselButtons(type, totalItems) {
    const prevBtn = document.querySelector(`.carousel-btn-prev[data-carousel="${type}"]`);
    const nextBtn = document.querySelector(`.carousel-btn-next[data-carousel="${type}"]`);
    
    if (!prevBtn || !nextBtn) return;
    
    // Remover event listeners anteriores
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    
    // Agregar nuevos event listeners
    newPrevBtn.addEventListener('click', () => moveCarousel(type, -1));
    newNextBtn.addEventListener('click', () => moveCarousel(type, 1));
    
    // Actualizar estado inicial
    updateCarouselButtons(type, totalItems);
}

// ========================================
// MOVER CARRUSEL
// ========================================
function moveCarousel(type, direction) {
    // Inicializar estado del carousel si no existe
    if (!carouselStates[type]) {
        carouselStates[type] = { currentIndex: 0, itemsPerView: 5 };
    }
    
    const state = carouselStates[type];
    const carousel = document.getElementById(`carousel-${type}`);
    if (!carousel) return;
    
    const totalCards = carousel.querySelectorAll('.player-card').length;
    const totalPages = Math.ceil(totalCards / state.itemsPerView);
    
    state.currentIndex += direction;
    
    if (state.currentIndex < 0) {
        state.currentIndex = 0;
    } else if (state.currentIndex >= totalPages) {
        state.currentIndex = totalPages - 1;
    }
    
    updateCarousel(type, totalCards);
}

// ========================================
// IR A PÁGINA DEL CARRUSEL
// ========================================
function goToCarouselPage(type, page) {
    // Inicializar estado del carousel si no existe
    if (!carouselStates[type]) {
        carouselStates[type] = { currentIndex: 0, itemsPerView: 5 };
    }
    
    const state = carouselStates[type];
    const carousel = document.getElementById(`carousel-${type}`);
    if (!carousel) return;
    
    const totalCards = carousel.querySelectorAll('.player-card').length;
    
    state.currentIndex = page;
    updateCarousel(type, totalCards);
}

// ========================================
// ACTUALIZAR CARRUSEL
// ========================================
function updateCarousel(type, totalCards) {
    const carousel = document.getElementById(`carousel-${type}`);
    if (!carousel) return;
    
    // Inicializar estado del carousel si no existe
    if (!carouselStates[type]) {
        carouselStates[type] = { currentIndex: 0, itemsPerView: 5 };
    }
    
    const state = carouselStates[type];
    const offset = state.currentIndex * state.itemsPerView * (100 / state.itemsPerView + 20 / state.itemsPerView);
    
    carousel.style.transform = `translateX(-${offset}%)`;
    
    // Actualizar botones
    updateCarouselButtons(type, totalCards);
    
    // Actualizar indicadores
    updateCarouselIndicators(type);
}

// ========================================
// ACTUALIZAR BOTONES DEL CARRUSEL
// ========================================
function updateCarouselButtons(type, totalCards) {
    const prevBtn = document.querySelector(`.carousel-btn-prev[data-carousel="${type}"]`);
    const nextBtn = document.querySelector(`.carousel-btn-next[data-carousel="${type}"]`);
    
    // Inicializar estado del carousel si no existe
    if (!carouselStates[type]) {
        carouselStates[type] = { currentIndex: 0, itemsPerView: 5 };
    }
    
    const state = carouselStates[type];
    const totalPages = Math.ceil(totalCards / state.itemsPerView);
    
    if (prevBtn) {
        prevBtn.disabled = state.currentIndex === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = state.currentIndex >= totalPages - 1;
    }
}

// ========================================
// ACTUALIZAR INDICADORES DEL CARRUSEL
// ========================================
function updateCarouselIndicators(type) {
    const indicators = document.querySelectorAll(`#indicators-${type} .indicator`);
    if (indicators.length === 0) return;
    
    // Inicializar estado del carousel si no existe
    if (!carouselStates[type]) {
        carouselStates[type] = { currentIndex: 0, itemsPerView: 5 };
    }
    
    const state = carouselStates[type];
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === state.currentIndex);
    });
}

// ========================================
// ACTUALIZAR ITEMS POR VISTA (RESPONSIVE)
// ========================================
function updateCarouselItemsPerView() {
    const width = window.innerWidth;
    let itemsPerView;
    
    if (width <= 480) {
        itemsPerView = 1;
    } else if (width <= 768) {
        itemsPerView = 1;
    } else if (width <= 1024) {
        itemsPerView = 3;
    } else if (width <= 1400) {
        itemsPerView = 4;
    } else {
        itemsPerView = 5; // Cambiado de 6 a 5
    }
    
    Object.keys(carouselStates).forEach(type => {
        carouselStates[type].itemsPerView = itemsPerView;
        carouselStates[type].currentIndex = 0;
        
        const carousel = document.getElementById(`carousel-${type}`);
        if (carousel) {
            const totalCards = carousel.querySelectorAll('.player-card').length;
            updateCarousel(type, totalCards);
            createIndicators(type, totalCards);
        }
    });
}

// ========================================
// ABRIR MODAL DEL JUGADOR
// ========================================
function openPlayerModal(player, type) {
    modalBtnAction.style.display = '';
    modalBtnAction.onclick = null;

    // Manejar tanto 'nombre' como 'nombreCompleto'
    const nombre = player.nombre || player.nombreCompleto || 'Sin nombre';
    const initials = nombre.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    
    // Actualizar header del modal
    modalPlayerName.textContent = nombre;
    modalPlayerCategory.textContent = player.categoria || 'Sin categoría';
    modalAvatarText.textContent = initials;
    
    // Actualizar clase del avatar
    modalAvatar.className = 'modal-avatar';
    modalAvatarText.style.display = 'flex';
    switch(type) {
        case 'adeudos':
            modalAvatar.classList.add(`priority-${player.prioridad}`);
            break;
        case 'lesionados':
            modalAvatar.classList.add('lesion');
            break;
        case 'permisos':
            modalAvatar.classList.add('permiso');
            break;
        case 'comedor':
            modalAvatar.classList.add('comedor');
            break;
        case 'casaclub':
            modalAvatar.classList.add('casaclub');
            break;
    }
    
    // Crear contenido específico del modal
    modalBody.innerHTML = createModalContent(player, type);
    
    // Configurar botón de acción
    configureModalActionButton(player, type);
    
    // Agregar event listeners para editar meses (solo para mensualidades)
    if (type === 'mensualidades' || type === 'adeudos') {
        setupPaymentMonthEditors(player);
    }
    
    // Mostrar modal
    playerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========================================
// GENERAR HISTORIAL DE PAGOS
// ========================================
// Constantes globales para meses
const mesesNombres = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const mesesCortos = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

function generatePaymentHistory(player) {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth();
    const añoActual = fechaActual.getFullYear();
    
    const historial = [];
    
    // Obtener el monto de la mensualidad del jugador (de su alta)
    const montoMensualidad = player.mensualidad?.monto || 0;
    
    // Obtener meses pagados del jugador (si tiene pagos)
    // Convertir Set a Array si es necesario
    let mesesPagados = player.mesesPagados || [];
    if (mesesPagados instanceof Set) {
        mesesPagados = Array.from(mesesPagados);
    } else if (!Array.isArray(mesesPagados)) {
        mesesPagados = [];
    }
    
    const pagos = player.pagos || [];
    
    // Crear mapa de pagos por mes para obtener fecha y tipo de pago
    const pagosPorMes = {};
    pagos.forEach(pago => {
        if (pago.mes) {
            pagosPorMes[pago.mes] = {
                fechaPago: pago.fechaPago || null,
                tipoPago: pago.tipoPago || 'N/A'
            };
        }
    });
    
    // Generar últimos 12 meses
    for (let i = 11; i >= 0; i--) {
        let mes = mesActual - i;
        let año = añoActual;
        
        // Ajustar si el mes es negativo (año anterior)
        if (mes < 0) {
            mes += 12;
            año -= 1;
        }
        
        const nombreMesCompleto = mesesNombres[mes];
        const nombreMesCorto = mesesCortos[mes];
        
        // Verificar si este mes está pagado (ahora mesesPagados es siempre un Array)
        const estaPagado = mesesPagados.includes(nombreMesCompleto);
        const infoPago = pagosPorMes[nombreMesCompleto];
        
        historial.push({
            nombre: nombreMesCorto,
            nombreCompleto: nombreMesCompleto,
            año: año,
            // Usar el monto de la mensualidad del jugador (de su alta)
            monto: estaPagado ? montoMensualidad : 0,
            pagado: estaPagado,
            estado: estaPagado ? 'Pagado' : 'Adeudo',
            fechaPago: infoPago ? infoPago.fechaPago : null,
            tipoPago: infoPago ? infoPago.tipoPago : null
        });
    }
    
    return historial;
}

// ========================================
// CONFIGURAR EDITORES DE MESES DE PAGO
// ========================================
function setupPaymentMonthEditors(player) {
    console.log('🔧 Configurando editores de meses para:', player.nombreCompleto || player.nombre);
    const editableMonths = document.querySelectorAll('.editable-month');
    console.log('📅 Recuadros editables encontrados:', editableMonths.length);
    
    editableMonths.forEach((monthElement, index) => {
        console.log(`📝 Configurando recuadro ${index + 1}:`, {
            mes: monthElement.dataset.mesNombre,
            pagado: monthElement.dataset.mesPagado
        });
        monthElement.addEventListener('click', async () => {
            const mesNombre = monthElement.dataset.mesNombre;
            const mesPagado = monthElement.dataset.mesPagado === 'true';
            const playerId = monthElement.dataset.playerId;
            const playerNombre = monthElement.dataset.playerNombre;
            
            // Cambiar estado
            const nuevoEstado = !mesPagado;
            
            // Actualizar UI inmediatamente
            monthElement.dataset.mesPagado = nuevoEstado.toString();
            if (nuevoEstado) {
                monthElement.classList.remove('adeudo');
                monthElement.classList.add('pagado');
                monthElement.querySelector('.payment-month-icon').innerHTML = 
                    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                // Obtener el monto de la mensualidad del jugador
                const montoMensualidad = player.mensualidad?.monto || 0;
                monthElement.querySelector('.payment-month-monto').textContent = `$${montoMensualidad.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                monthElement.title = 'Click para marcar como adeudo';
            } else {
                monthElement.classList.remove('pagado');
                monthElement.classList.add('adeudo');
                monthElement.querySelector('.payment-month-icon').innerHTML = 
                    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
                monthElement.querySelector('.payment-month-monto').textContent = '—';
                monthElement.title = 'Click para marcar como pagado';
            }
            
            // Guardar en Firebase
            try {
                await actualizarEstadoPagoMes(playerId, playerNombre, mesNombre, nuevoEstado);
                
                // Actualizar datos locales
                // Asegurar que mesesPagados sea un Array
                if (!player.mesesPagados) {
                    player.mesesPagados = [];
                } else if (player.mesesPagados instanceof Set) {
                    player.mesesPagados = Array.from(player.mesesPagados);
                } else if (!Array.isArray(player.mesesPagados)) {
                    player.mesesPagados = [];
                }
                
                if (nuevoEstado) {
                    // Agregar mes a pagados si no existe
                    if (!player.mesesPagados.includes(mesNombre)) {
                        player.mesesPagados.push(mesNombre);
                    }
                } else {
                    // Remover mes de pagados
                    player.mesesPagados = player.mesesPagados.filter(m => m !== mesNombre);
                }
                
                // Recargar datos de mensualidades para actualizar toda la UI
                await loadMensualidades();
                
                // Obtener el jugador actualizado de los datos recargados
                const jugadorActualizado = mensualidadesData.pagosPorJugador[playerNombre] || 
                                         mensualidadesData.adeudos.find(j => (j.nombreCompleto || j.nombre) === playerNombre) ||
                                         mensualidadesData.pagaron.find(j => (j.nombreCompleto || j.nombre) === playerNombre) ||
                                         player;
                
                // Actualizar el modal con los nuevos datos
                const modalBody = document.querySelector('.modal-body');
                if (modalBody) {
                    // Combinar datos del jugador original con los datos actualizados
                    // Asegurar que mesesPagados sea un Array
                    let mesesPagadosActualizado = jugadorActualizado.mesesPagados || player.mesesPagados || [];
                    if (mesesPagadosActualizado instanceof Set) {
                        mesesPagadosActualizado = Array.from(mesesPagadosActualizado);
                    } else if (!Array.isArray(mesesPagadosActualizado)) {
                        mesesPagadosActualizado = [];
                    }
                    
                    const playerCompleto = {
                        ...player,
                        ...jugadorActualizado,
                        mesesPagados: mesesPagadosActualizado,
                        pagos: jugadorActualizado.pagos || player.pagos || []
                    };
                    modalBody.innerHTML = createModalContent(playerCompleto, 'mensualidades');
                    setupPaymentMonthEditors(playerCompleto);
                }
                
                mostrarNotificacionMensualidad(
                    nuevoEstado ? `Mes ${mesNombre} marcado como pagado` : `Mes ${mesNombre} marcado como adeudo`,
                    'success'
                );
            } catch (error) {
                console.error('❌ Error al actualizar estado de pago:', error);
                mostrarNotificacionMensualidad('Error al actualizar el estado de pago', 'error');
                
                // Revertir cambio en UI
                monthElement.dataset.mesPagado = mesPagado.toString();
                if (mesPagado) {
                    monthElement.classList.remove('adeudo');
                    monthElement.classList.add('pagado');
                    monthElement.querySelector('.payment-month-icon').innerHTML = 
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                } else {
                    monthElement.classList.remove('pagado');
                    monthElement.classList.add('adeudo');
                    monthElement.querySelector('.payment-month-icon').innerHTML = 
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
                }
            }
        });
    });
}

// ========================================
// ACTUALIZAR ESTADO DE PAGO DE UN MES
// ========================================
async function actualizarEstadoPagoMes(playerId, playerNombre, mesNombre, pagado) {
    await initFirebaseMensualidades();
    
    if (!dbMensualidades) {
        throw new Error('Firebase Mensualidades no está inicializado');
    }
    
    try {
        const { collection, query, where, getDocs, addDoc, Timestamp, doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const mensualidadesRef = collection(dbMensualidades, 'mensualidadesRegistros');
        
        // Buscar todos los registros del jugador con conceptoPago = 'Mensualidad'
        // Hacer la consulta más simple para evitar problemas con índices compuestos
        const q = query(
            mensualidadesRef,
            where('nombreCompleto', '==', playerNombre),
            where('conceptoPago', '==', 'Mensualidad')
        );
        
        const snapshot = await getDocs(q);
        
        // Filtrar en memoria por mes
        const registrosDelMes = [];
        snapshot.forEach((document) => {
            const data = document.data();
            // Verificar si el registro corresponde al mes (puede estar en 'mes' o extraerse de 'fechaPago')
            const mesRegistro = data.mes || (data.fechaPago ? extraerMesDeFecha(data.fechaPago) : null);
            if (mesRegistro === mesNombre) {
                registrosDelMes.push({ id: document.id, data });
            }
        });
        
        if (pagado) {
            // Si se marca como pagado, crear un registro de pago si no existe
            if (registrosDelMes.length === 0) {
                // No existe registro, crear uno nuevo
                const fechaActual = new Date();
                await addDoc(mensualidadesRef, {
                    nombreCompleto: playerNombre,
                    categoria: mensualidadesData.pagosPorJugador[playerNombre]?.categoria || 'Sin categoría',
                    ciudad: 'N/A',
                    contacto: 'N/A',
                    tipoPago: 'Manual',
                    conceptoPago: 'Mensualidad',
                    conceptoPagoOriginal: 'Mensualidad',
                    mes: mesNombre,
                    monto: 0,
                    fechaPago: fechaActual.toISOString().split('T')[0],
                    folioComprobante: 'N/A',
                    cantidadEfectivo: 0,
                    recibio: 'N/A',
                    fechaCreacion: new Date().toISOString(),
                    timestamp: Timestamp.now(),
                    editadoManual: true
                });
                console.log(`✅ Registro de pago creado para ${mesNombre}`);
            } else {
                console.log(`ℹ️ Ya existe un registro de pago para ${mesNombre}`);
            }
        } else {
            // Si se marca como adeudo, eliminar registros de pago para ese mes (solo los editados manualmente)
            const deletePromises = [];
            registrosDelMes.forEach(({ id, data }) => {
                // Eliminar solo los registros editados manualmente
                if (data.editadoManual) {
                    const docRef = doc(dbMensualidades, 'mensualidadesRegistros', id);
                    deletePromises.push(deleteDoc(docRef));
                }
            });
            
            if (deletePromises.length > 0) {
                await Promise.all(deletePromises);
                console.log(`✅ ${deletePromises.length} registro(s) eliminado(s) para ${mesNombre}`);
            } else {
                console.log(`ℹ️ No se pueden eliminar registros que no fueron editados manualmente`);
            }
        }
        
        console.log(`✅ Estado de pago actualizado: ${mesNombre} - ${pagado ? 'Pagado' : 'Adeudo'}`);
    } catch (error) {
        console.error('❌ Error al actualizar estado de pago:', error);
        console.error('Detalles del error:', {
            playerNombre,
            mesNombre,
            pagado,
            errorMessage: error.message,
            errorStack: error.stack
        });
        throw error;
    }
}

// Función auxiliar para extraer el mes de una fecha
function extraerMesDeFecha(fechaPago) {
    try {
        const fecha = new Date(fechaPago);
        const mesesNombres = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return mesesNombres[fecha.getMonth()];
    } catch (error) {
        console.warn('⚠️ Error al extraer mes de fecha:', fechaPago);
        return null;
    }
}

// ========================================
// MOSTRAR NOTIFICACIÓN PARA MENSUALIDADES
// ========================================
function mostrarNotificacionMensualidad(mensaje, tipo = 'success') {
    const notif = document.createElement('div');
    notif.className = `notification ${tipo}`;
    notif.style.position = 'fixed';
    notif.style.top = '20px';
    notif.style.right = '20px';
    notif.style.padding = '16px 24px';
    notif.style.borderRadius = '8px';
    notif.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    notif.style.zIndex = '10001';
    notif.style.color = 'white';
    notif.style.fontWeight = '600';
    notif.style.fontSize = '14px';
    notif.style.background = tipo === 'success' ? '#10B981' : '#EF4444';
    notif.textContent = mensaje;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.3s';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ========================================
// CREAR CONTENIDO DEL MODAL
// ========================================
function createModalContent(player, type) {
    console.log('📝 createModalContent llamado:', { type, player: player?.nombreCompleto || 'sin nombre' });
    switch(type) {
        case 'adeudos':
        case 'mensualidades':
            // Generar historial de meses (últimos 12 meses)
            const historialMeses = generatePaymentHistory(player);
            const pagos = player.pagos || [];
            
            // Obtener el monto de la mensualidad del jugador (de su alta)
            const montoMensualidad = player.mensualidad?.monto || 0;
            
            // Calcular totales
            const mesesPagados = historialMeses.filter(m => m.pagado).length;
            const mesesAdeudados = historialMeses.filter(m => !m.pagado).length;
            const totalPagado = historialMeses.filter(m => m.pagado).reduce((sum, m) => sum + (m.monto || 0), 0);
            const ultimoPago = historialMeses.filter(m => m.pagado && m.fechaPago).sort((a, b) => {
                const fechaA = a.fechaPago ? new Date(a.fechaPago).getTime() : 0;
                const fechaB = b.fechaPago ? new Date(b.fechaPago).getTime() : 0;
                return fechaB - fechaA;
            })[0];
            
            return `
                <div class="modal-section">
                    <h4 class="modal-section-title">Información de Pagos</h4>
                    <div class="modal-info-grid">
                        <div class="modal-info-item">
                            <p class="modal-info-label">Total Pagado</p>
                            <p class="modal-info-value">$${totalPagado.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                        <div class="modal-info-item">
                            <p class="modal-info-label">Meses Pagados</p>
                            <p class="modal-info-value">${mesesPagados} de 12</p>
                        </div>
                        <div class="modal-info-item">
                            <p class="modal-info-label">Meses Adeudados</p>
                            <p class="modal-info-value" style="color: #EF4444; font-weight: 700;">${mesesAdeudados}</p>
                        </div>
                        <div class="modal-info-item">
                            <p class="modal-info-label">Último Pago</p>
                            <p class="modal-info-value" style="font-size: 14px;">${ultimoPago ? (ultimoPago.fechaPago ? new Date(ultimoPago.fechaPago).toLocaleDateString('es-MX') : 'N/A') : 'Sin pagos'}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-section">
                    <h4 class="modal-section-title">Historial de Pagos (Últimos 12 Meses) - Click para editar</h4>
                    <p style="font-size: 0.85rem; color: var(--gris-label); margin-bottom: 15px;">Haz click en cualquier mes para cambiar su estado de pago</p>
                    <div class="payment-history" id="paymentHistoryContainer">
                        ${historialMeses.map((mes, index) => `
                            <div class="payment-month ${mes.pagado ? 'pagado' : 'adeudo'} editable-month" 
                                 data-mes-nombre="${mes.nombreCompleto}" 
                                 data-mes-index="${index}"
                                 data-mes-pagado="${mes.pagado}"
                                 data-player-id="${player.id || ''}"
                                 data-player-nombre="${player.nombreCompleto || ''}"
                                 title="Click para ${mes.pagado ? 'marcar como adeudo' : 'marcar como pagado'}">
                                <div class="payment-month-name">${mes.nombre}</div>
                                <div class="payment-month-year">${mes.año}</div>
                                <div class="payment-month-icon">
                                    ${mes.pagado ? 
                                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' : 
                                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
                                    }
                                </div>
                                <div class="payment-month-monto">${mes.pagado ? `$${(mes.monto || 0).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '—'}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="payment-summary">
                        <div class="payment-summary-item">
                            <span class="payment-summary-icon pagado-icon">✓</span>
                            <span>Pagados: ${mesesPagados} meses</span>
                        </div>
                        <div class="payment-summary-item">
                            <span class="payment-summary-icon adeudo-icon">✕</span>
                            <span>Adeudos: ${mesesAdeudados} meses</span>
                        </div>
                    </div>
                </div>
                ${pagos.length > 0 ? `
                <div class="modal-section">
                    <h4 class="modal-section-title">Detalle de Pagos Registrados</h4>
                    <div style="max-height: 300px; overflow-y: auto;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <thead>
                                <tr style="background: #F9FAFB; border-bottom: 2px solid #E1E8ED;">
                                    <th style="padding: 10px; text-align: left; font-weight: 600; color: var(--negro);">Mes</th>
                                    <th style="padding: 10px; text-align: left; font-weight: 600; color: var(--negro);">Monto</th>
                                    <th style="padding: 10px; text-align: left; font-weight: 600; color: var(--negro);">Fecha Pago</th>
                                    <th style="padding: 10px; text-align: left; font-weight: 600; color: var(--negro);">Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${pagos.sort((a, b) => {
                                    const mesA = mesesNombres.indexOf(a.mes || '');
                                    const mesB = mesesNombres.indexOf(b.mes || '');
                                    return mesB - mesA;
                                }).map(pago => `
                                    <tr style="border-bottom: 1px solid #F0F3F5;">
                                        <td style="padding: 10px; font-weight: 600;">${pago.mes || 'N/A'}</td>
                                        <td style="padding: 10px;">$${montoMensualidad.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                        <td style="padding: 10px; color: var(--gris-label);">${pago.fechaPago ? new Date(pago.fechaPago).toLocaleDateString('es-MX') : 'N/A'}</td>
                                        <td style="padding: 10px;">
                                            <span style="padding: 4px 8px; background: #E0F2FE; color: #0369A1; border-radius: 6px; font-size: 0.8rem; font-weight: 600;">
                                                ${pago.tipoPago || 'N/A'}
                                            </span>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                ` : ''}
            `;
        
        case 'lesionados':
            return `
                <div class="modal-section">
                    <h4 class="modal-section-title">Detalles de la Lesión</h4>
                    <div class="modal-info-grid">
                        <div class="modal-info-item">
                            <p class="modal-info-label">Tipo de Lesión</p>
                            <p class="modal-info-value" style="font-size: 14px;">${player.tipoLesion}</p>
                        </div>
                        <div class="modal-info-item">
                            <p class="modal-info-label">Fecha de Lesión</p>
                            <p class="modal-info-value" style="font-size: 14px;">${player.fechaLesion}</p>
                        </div>
                        <div class="modal-info-item">
                            <p class="modal-info-label">Tiempo de Recuperación</p>
                            <p class="modal-info-value" style="font-size: 14px;">${player.recuperacion}</p>
                        </div>
                        <div class="modal-info-item">
                            <p class="modal-info-label">Estado Actual</p>
                            <p class="modal-info-value">
                                <span class="status-badge alto">${player.estado}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="modal-section">
                    <h4 class="modal-section-title">Seguimiento</h4>
                    <p style="color: var(--gris-texto); line-height: 1.6;">
                        El jugador se encuentra en proceso de recuperación. 
                        Se debe realizar seguimiento médico continuo y evaluación antes de reincorporar a entrenamientos.
                    </p>
                </div>
            `;
        
        case 'permisos':
            return `
                <div class="modal-section">
                    <h4 class="modal-section-title">Detalles del Permiso</h4>
                    <div class="modal-info-grid">
                        <div class="modal-info-item">
                            <p class="modal-info-label">Motivo</p>
                            <p class="modal-info-value" style="font-size: 14px;">${player.motivo}</p>
                        </div>
                        <div class="modal-info-item">
                            <p class="modal-info-label">Fecha</p>
                            <p class="modal-info-value" style="font-size: 14px;">${player.fecha}</p>
                        </div>
                        <div class="modal-info-item">
                            <p class="modal-info-label">Duración</p>
                            <p class="modal-info-value">${player.duracion}</p>
                        </div>
                        <div class="modal-info-item">
                            <p class="modal-info-label">Estado</p>
                            <p class="modal-info-value">
                                <span class="status-badge ${player.estado.toLowerCase()}">${player.estado}</span>
                            </p>
                        </div>
                    </div>
                </div>
                ${player.estado === 'Pendiente' ? `
                <div class="modal-section">
                    <h4 class="modal-section-title">Acción Requerida</h4>
                    <p style="color: var(--gris-texto); line-height: 1.6;">
                        Este permiso está pendiente de aprobación. 
                        Revise la solicitud y tome una decisión lo antes posible.
                    </p>
                </div>
                ` : ''}
            `;
        
        case 'comedor':
            // Debug: verificar datos antes de procesar
            console.log('🔍 Modal - Datos recibidos:', {
                nombre: player.nombreCompleto,
                tieneIngresos: !!(player.ingresos && player.ingresos.length > 0),
                ingresos: player.ingresos,
                hora: player.hora,
                horaEntrada: player.horaEntrada,
                timestamp: player.timestamp,
                fecha: player.fecha,
                playerCompleto: player
            });
            
            const fechaFormateadaModal = formatearFechaComedor(player.timestamp, player.fecha);
            
            // Obtener todos los ingresos del día (Desayuno, Comida, Cena)
            const ingresosModal = player.ingresos || [];
            
            // Ordenar ingresos por tipo de comida (Desayuno, Comida, Cena)
            const ordenComidasModal = { 'Desayuno': 1, 'Comida': 2, 'Cena': 3 };
            ingresosModal.sort((a, b) => {
                const ordenA = ordenComidasModal[a.tipoComida] || 99;
                const ordenB = ordenComidasModal[b.tipoComida] || 99;
                return ordenA - ordenB;
            });
            
            // Crear HTML para mostrar todos los ingresos en el modal agrupados por fecha
            let ingresosModalHTML = '';
            if (ingresosModal.length > 0) {
                // Agrupar ingresos por fecha
                const ingresosPorFecha = {};
                ingresosModal.forEach(ingreso => {
                    const fechaIngreso = ingreso.fecha || player.fecha;
                    if (!ingresosPorFecha[fechaIngreso]) {
                        ingresosPorFecha[fechaIngreso] = [];
                    }
                    ingresosPorFecha[fechaIngreso].push(ingreso);
                });
                
                // Ordenar fechas (más recientes primero)
                const fechasOrdenadas = Object.keys(ingresosPorFecha).sort((a, b) => b.localeCompare(a));
                
                ingresosModalHTML = fechasOrdenadas.map(fecha => {
                    const ingresosFecha = ingresosPorFecha[fecha];
                    const fechaFormateadaIngreso = formatearFechaComedor(
                        ingresosFecha[0]?.timestamp || null, 
                        fecha
                    );
                    
                    // Ordenar ingresos por tipo de comida
                    const ordenComidas = { 'Desayuno': 1, 'Comida': 2, 'Cena': 3 };
                    ingresosFecha.sort((a, b) => {
                        const ordenA = ordenComidas[a.tipoComida] || 99;
                        const ordenB = ordenComidas[b.tipoComida] || 99;
                        return ordenA - ordenB;
                    });
                    
                    const ingresosFechaHTML = ingresosFecha.map(ingreso => {
                        const tipoComida = ingreso.tipoComida || 'Comida';
                        const iconoComida = tipoComida === 'Desayuno' ? '🌅' : 
                                           tipoComida === 'Comida' ? '🍽️' : '🌙';
                        return `
                            <div class="modal-info-item" style="margin-left: 20px; padding-top: 8px;">
                                <p class="modal-info-label">${iconoComida} ${tipoComida}</p>
                                <p class="modal-info-value">${ingreso.hora || 'N/A'}</p>
                            </div>
                        `;
                    }).join('');
                    
                    return `
                        <div class="modal-info-item" style="border-bottom: 1px solid var(--gris-borde); padding-bottom: 12px; margin-bottom: 12px;">
                            <p class="modal-info-label" style="font-weight: 600; font-size: 14px; margin-bottom: 8px;">${fechaFormateadaIngreso}</p>
                            ${ingresosFechaHTML}
                        </div>
                    `;
                }).join('');
            } else {
                // Si no hay ingresos agrupados, mostrar el ingreso único (compatibilidad hacia atrás)
                const horaUnica = player.hora || player.horaEntrada || 'N/A';
                const tipoComidaUnica = determinarTipoComidaPorHora(horaUnica);
                const iconoUnico = tipoComidaUnica === 'Desayuno' ? '🌅' : 
                                  tipoComidaUnica === 'Comida' ? '🍽️' : '🌙';
                ingresosModalHTML = `
                    <div class="modal-info-item">
                        <p class="modal-info-label">${iconoUnico} ${tipoComidaUnica}</p>
                        <p class="modal-info-value">${horaUnica}</p>
                    </div>
                `;
            }
            
            const htmlResultado = `
                <div class="modal-section">
                    <h4 class="modal-section-title">Información de Asistencia</h4>
                    <div class="modal-info-grid">
                        ${ingresosModalHTML}
                    </div>
                </div>
            `;
            
            console.log('✅ HTML generado para modal:', htmlResultado);
            return htmlResultado;
        
        case 'casaclub':
            const estadoCasaClubModal = player.horaSalida ? 'Completado' : 'Fuera de Casa Club';
            const estadoColorCasaClubModal = player.horaSalida ? '#10B981' : '#FCD34D';
            const estadoBgCasaClubModal = player.horaSalida ? '#D1FAE5' : '#FEF3C7';
            return `
                <div class="modal-section">
                    <h4>Información de Casa Club</h4>
                    <div class="info-row">
                        <span class="info-label">Destino:</span>
                        <span class="info-value">${player.motivo || 'N/A'}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Hora de Entrada:</span>
                        <span class="info-value">${player.horaEntrada || 'N/A'}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Hora de Salida:</span>
                        <span class="info-value">${player.horaSalida || 'Pendiente'}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Estado:</span>
                        <span class="status-badge" style="background: ${estadoBgCasaClubModal}; color: ${estadoColorCasaClubModal};">${estadoCasaClubModal}</span>
                    </div>
                    ${player.celular ? `
                    <div class="info-row">
                        <span class="info-label">Contacto:</span>
                        <span class="info-value">${player.celular}</span>
                    </div>
                    ` : ''}
                </div>
            `;
        default:
            console.warn('⚠️ Tipo de modal no reconocido:', type);
            return '<div class="modal-section"><p>Información no disponible</p></div>';
    }
}

// ========================================
// CONFIGURAR BOTÓN DE ACCIÓN DEL MODAL
// ========================================
function configureModalActionButton(player, type) {
    switch(type) {
        case 'adeudos':
        case 'mensualidades':
            // Ocultar el botón de acción para mensualidades, solo mostrar cerrar
            modalBtnAction.style.display = 'none';
            break;
        case 'lesionados':
            modalBtnAction.textContent = 'Ver Historial Médico';
            modalBtnAction.onclick = () => {
                alert(`Abrir historial médico de ${player.nombre}`);
                closePlayerModal();
            };
            break;
        case 'permisos':
            if (player.estado === 'Pendiente') {
                modalBtnAction.textContent = 'Aprobar Permiso';
                modalBtnAction.onclick = () => {
                    alert(`Permiso aprobado para ${player.nombre}`);
                    closePlayerModal();
                };
            } else {
                modalBtnAction.textContent = 'Ver Detalles';
                modalBtnAction.onclick = () => {
                    alert(`Ver más detalles de ${player.nombre}`);
                    closePlayerModal();
                };
            }
            break;
        case 'comedor':
            // Ocultar el botón de acción, solo mostrar cerrar
            modalBtnAction.style.display = 'none';
            break;
        case 'casaclub':
            // Ocultar el botón de acción, solo mostrar cerrar
            modalBtnAction.style.display = 'none';
            break;
    }
}

// ========================================
// CERRAR MODAL
// ========================================
function closePlayerModal() {
    playerModal.classList.remove('active');
    document.body.style.overflow = '';
    if (modalAvatarText) {
        modalAvatarText.style.display = 'flex';
    }
    modalBtnAction.style.display = '';
    modalBtnAction.onclick = null;
    currentJugador = null;
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Menú hamburguesa (móvil)
    btnMenu.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);
    
    // Cerrar sesión
    btnLogout.addEventListener('click', handleLogout);
    
    // Selector de tema
    themeBtn.addEventListener('click', toggleThemeDropdown);
    themeOptions.forEach(option => {
        option.addEventListener('click', () => changeTheme(option.dataset.theme));
    });
    
    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!themeBtn.contains(e.target) && !themeDropdown.contains(e.target)) {
            themeDropdown.classList.remove('active');
        }
    });
    
    // Navegación entre páginas
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            navigateToPage(page);
        });
    });
    
    if (jugadoresSearchInput) {
        jugadoresSearchInput.addEventListener('input', handleJugadoresSearch);
    }

    if (jugadoresCategoryFilter) {
        jugadoresCategoryFilter.addEventListener('change', handleJugadoresCategoryChange);
    }
    
    // Filtros del comedor
    const comedorCategoryFilter = document.getElementById('comedorCategoryFilter');
    if (comedorCategoryFilter) {
        comedorCategoryFilter.addEventListener('change', (e) => {
            currentComedorCategoria = e.target.value;
            applyComedorFilters();
        });
    }
    
    // Buscador del comedor
    const comedorSearchInput = document.getElementById('comedorSearchInput');
    if (comedorSearchInput) {
        comedorSearchInput.addEventListener('input', (e) => {
            currentComedorBusqueda = e.target.value;
            applyComedorFilters();
        });
    }
    
    // Filtro de fecha del comedor
    const comedorDateFilter = document.getElementById('comedorDateFilter');
    if (comedorDateFilter) {
        comedorDateFilter.addEventListener('change', (e) => {
            currentComedorFecha = e.target.value || null;
            applyComedorFilters();
        });
    }
    
    // Selector de límite del comedor
    const comedorViewLimit = document.getElementById('comedorViewLimit');
    if (comedorViewLimit) {
        comedorViewLimit.addEventListener('change', (e) => {
            // Recargar datos con el nuevo límite
            loadComedor();
        });
    }
    
    // Modal
    modalClose.addEventListener('click', closePlayerModal);
    modalBtnClose.addEventListener('click', closePlayerModal);
    document.querySelector('.modal-overlay').addEventListener('click', closePlayerModal);
    
    // Cerrar sidebar en móvil al hacer click en un item
    if (window.innerWidth <= 768) {
        navItems.forEach(item => {
            item.addEventListener('click', closeSidebar);
        });
    }
}

// ========================================
// FUNCIONES DEL SIDEBAR
// ========================================
function toggleSidebar() {
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// FUNCIONES DE TEMA
// ========================================
function toggleThemeDropdown() {
    themeDropdown.classList.toggle('active');
}

function changeTheme(theme) {
    // Guardar tema en localStorage
    localStorage.setItem('teotihuacan_theme', theme);
    
    // Aplicar tema
    applyTheme(theme);
    
    // Actualizar botones activos
    themeOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.theme === theme) {
            option.classList.add('active');
        }
    });
    
    // Cerrar dropdown
    themeDropdown.classList.remove('active');
    
    console.log('🎨 Tema cambiado a:', theme);
}

function applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
        html.setAttribute('data-theme', 'light');
    } else if (theme === 'auto') {
        // Detectar preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            html.setAttribute('data-theme', 'dark');
        } else {
            html.setAttribute('data-theme', 'light');
        }
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('teotihuacan_theme') || 'auto';
    
    // Aplicar tema
    applyTheme(savedTheme);
    
    // Actualizar botones
    themeOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.theme === savedTheme) {
            option.classList.add('active');
        }
    });
}

// Detectar cambios en preferencia del sistema (solo si está en auto)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const currentTheme = localStorage.getItem('teotihuacan_theme') || 'auto';
    if (currentTheme === 'auto') {
        applyTheme('auto');
    }
});

// ========================================
// MOSTRAR/OCULTAR CONTENIDO DE PÁGINAS
// ========================================
function showPageContent(page) {
    // Obtener referencia a las tarjetas de estadísticas
    const cardsGrid = document.getElementById('cardsGrid');
    
    // Ocultar todas las secciones
    const allSections = document.querySelectorAll('.dashboard-section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Mostrar/ocultar banner de bienvenida y tarjetas de estadísticas solo en dashboard
    const welcomeBanner = document.getElementById('welcomeBanner');
    if (welcomeBanner) {
        if (page === 'dashboard') {
            welcomeBanner.style.display = 'block';
        } else {
            welcomeBanner.style.display = 'none';
        }
    }
    
    if (cardsGrid) {
        if (page === 'dashboard') {
            cardsGrid.style.display = 'grid';
        } else {
            cardsGrid.style.display = 'none';
        }
    }
    
    // Mostrar sección según la página
    if (page === 'dashboard') {
        // Verificar permisos del dashboard
        const dashboardPermissions = currentUser?.permissions?.dashboard || [];
        const hasFullAccess = dashboardPermissions.includes('all');
        
        // Ocultar todas las secciones detalladas
        document.getElementById('section-adeudos').style.display = 'none';
        document.getElementById('section-lesionados').style.display = 'none';
        document.getElementById('section-permisos').style.display = 'none';
        document.getElementById('section-comedor').style.display = 'none';
        
        // Mostrar balance compacto solo si tiene acceso completo
        const dashboardBalanceCompact = document.getElementById('dashboardBalanceCompact');
        if (dashboardBalanceCompact) {
            dashboardBalanceCompact.style.display = hasFullAccess ? 'block' : 'none';
        }
        
        // Mostrar resumen general del dashboard
        const dashboardSummary = document.getElementById('dashboardSummary');
        if (dashboardSummary) {
            dashboardSummary.style.display = 'block';
            // Ocultar secciones del resumen según permisos
            const summaryAdeudos = document.getElementById('summary-adeudos');
            const summaryPermisos = document.getElementById('summary-permisos');
            const summaryComedor = document.getElementById('summary-comedor');
            const summaryCasaClub = document.getElementById('summary-casaclub');
            const summaryBalance = document.getElementById('summary-balance');
            
            if (summaryAdeudos) {
                summaryAdeudos.style.display = hasFullAccess ? 'block' : 'none';
            }
            if (summaryPermisos) {
                summaryPermisos.style.display = hasFullAccess ? 'block' : 'none';
            }
            if (summaryComedor) {
                summaryComedor.style.display = hasFullAccess ? 'block' : 'none';
            }
            if (summaryCasaClub) {
                summaryCasaClub.style.display = hasFullAccess ? 'block' : 'none';
            }
            if (summaryBalance) {
                summaryBalance.style.display = hasFullAccess ? 'block' : 'none';
            }
            
            // Cargar resumen del dashboard
            loadDashboardSummary(dashboardPermissions, hasFullAccess);
        }
    } else {
        // Ocultar balance compacto y resumen cuando se navega a otra página
        const dashboardBalanceCompact = document.getElementById('dashboardBalanceCompact');
        if (dashboardBalanceCompact) {
            dashboardBalanceCompact.style.display = 'none';
        }
        
        const dashboardSummary = document.getElementById('dashboardSummary');
        if (dashboardSummary) {
            dashboardSummary.style.display = 'none';
        }
        
        if (page === 'adeudos' || page === 'mensualidades') {
            const sectionAdeudos = document.getElementById('section-adeudos');
            if (sectionAdeudos) {
                sectionAdeudos.style.display = 'block';
                console.log('📄 Navegando a: mensualidades');
                if (!sectionAdeudos.dataset.loaded) {
                    console.log('🔄 Cargando datos de Mensualidades...');
                    loadMensualidades();
                    sectionAdeudos.dataset.loaded = 'true';
                } else {
                    updateMensualidadesUI();
                }
            } else {
                console.error('❌ No se encontró la sección section-adeudos');
            }
        } else if (page === 'comedor') {
            // Mostrar sección del comedor y cargar datos
            const sectionComedor = document.getElementById('section-comedor');
            if (sectionComedor) {
                sectionComedor.style.display = 'block';
                if (!sectionComedor.dataset.loaded) {
                    loadComedor();
                    sectionComedor.dataset.loaded = 'true';
                }
            }
        } else if (page === 'casaclub') {
            // Mostrar sección de Casa Club y cargar datos
            const sectionCasaClub = document.getElementById('section-casaclub');
            if (sectionCasaClub) {
                sectionCasaClub.style.display = 'block';
                console.log('📄 Navegando a: casaclub');
                if (!sectionCasaClub.dataset.loaded) {
                    console.log('🔄 Cargando datos de Casa Club...');
                    loadCasaClub();
                    sectionCasaClub.dataset.loaded = 'true';
                } else {
                    // Si ya se cargó antes, actualizar la UI
                    updateCasaClubUI();
                }
            } else {
                console.error('❌ No se encontró la sección section-casaclub');
            }
        } else if (page === 'permisos') {
            // Mostrar sección de Permisos y cargar datos
            const sectionPermisos = document.getElementById('section-permisos');
            if (sectionPermisos) {
                sectionPermisos.style.display = 'block';
                console.log('📄 Navegando a: permisos');
                if (!sectionPermisos.dataset.loaded) {
                    console.log('🔄 Cargando datos de Permisos...');
                    loadPermisos();
                    sectionPermisos.dataset.loaded = 'true';
                } else {
                    // Si ya se cargó antes, actualizar la UI
                    updatePermisosUI();
                }
            } else {
                console.error('❌ No se encontró la sección section-permisos');
            }
        } else if (page === 'lesionados') {
            // Mostrar sección de Lesionados y cargar datos
            const sectionLesionados = document.getElementById('section-lesionados');
            if (sectionLesionados) {
                sectionLesionados.style.display = 'block';
                console.log('📄 Navegando a: lesionados');
                if (!sectionLesionados.dataset.loaded) {
                    console.log('🔄 Cargando datos de Lesionados...');
                    loadLesionados();
                    sectionLesionados.dataset.loaded = 'true';
                } else {
                    // Si ya se cargó antes, actualizar la UI
                    updateLesionadosUI();
                }
            } else {
                console.error('❌ No se encontró la sección section-lesionados');
            }
        } else if (page === 'jugadores') {
            if (sectionJugadores) {
                sectionJugadores.style.display = 'block';
                if (!sectionJugadores.dataset.loaded) {
                    loadJugadores();
                } else {
                    applyJugadoresFilters();
                }
            }
        } else if (page === 'altas') {
            // Mostrar formulario de altas
            const sectionAltas = document.getElementById('section-altas');
            if (sectionAltas) {
                sectionAltas.style.display = 'block';
            }
        } else if (page === 'bajas') {
            // Mostrar sección de Bajas
            const sectionBajas = document.getElementById('section-bajas');
            if (sectionBajas) {
                sectionBajas.style.display = 'block';
                console.log('📄 Navegando a: bajas');
                if (!sectionBajas.dataset.loaded) {
                    console.log('🔄 Cargando datos de Bajas...');
                    loadBajas();
                    sectionBajas.dataset.loaded = 'true';
                } else {
                    updateBajasUI();
                }
            }
        } else if (page === 'exportar') {
            // Mostrar sección de Exportar
            const sectionExportar = document.getElementById('section-exportar');
            if (sectionExportar) {
                sectionExportar.style.display = 'block';
                console.log('📄 Navegando a: exportar');
                // Establecer fechas por defecto (último mes)
                const fechaFin = new Date();
                const fechaInicio = new Date();
                fechaInicio.setMonth(fechaInicio.getMonth() - 1);
                
                const fechaInicioInput = document.getElementById('exportarFechaInicio');
                const fechaFinInput = document.getElementById('exportarFechaFin');
                
                if (fechaInicioInput && !fechaInicioInput.value) {
                    fechaInicioInput.value = fechaInicio.toISOString().split('T')[0];
                }
                if (fechaFinInput && !fechaFinInput.value) {
                    fechaFinInput.value = fechaFin.toISOString().split('T')[0];
                }
            }
        } else if (page === 'balance') {
            // Mostrar sección de Balance
            const sectionBalance = document.getElementById('section-balance');
            if (sectionBalance) {
                sectionBalance.style.display = 'block';
                console.log('📄 Navegando a: balance');
                if (!sectionBalance.dataset.loaded) {
                    console.log('🔄 Cargando datos de Balance...');
                    loadBalance();
                    sectionBalance.dataset.loaded = 'true';
                } else {
                    updateBalanceUI();
                }
            }
        }
    }
}

// ========================================
// NAVEGACIÓN
// ========================================
function navigateToPage(page) {
    // Verificar permisos antes de navegar
    if (!hasPagePermission(page)) {
        mostrarNotificacion('No tienes permiso para acceder a esta sección', 'error');
        return;
    }
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
    
    const pageTitles = {
        dashboard: {
            title: 'Dashboard',
            subtitle: 'Resumen general del sistema'
        },
        jugadores: {
            title: 'Jugadores',
            subtitle: 'Gestión de jugadores'
        },
        comedor: {
            title: 'Comedor',
            subtitle: 'Control de asistencia al comedor'
        },
        casaclub: {
            title: 'Casa Club',
            subtitle: 'Gestión de la casa club'
        },
        permisos: {
            title: 'Permisos',
            subtitle: 'Gestión de solicitudes de permisos'
        },
        lesionados: {
            title: 'Lesionados',
            subtitle: 'Registro de jugadores lesionados'
        },
        mensualidades: {
            title: 'Mensualidades',
            subtitle: 'Control de pagos mensuales'
        },
        altas: {
            title: 'Altas',
            subtitle: 'Registro de nuevos jugadores'
        },
        bajas: {
            title: 'Bajas',
            subtitle: 'Registro de jugadores dados de baja'
        },
        exportar: {
            title: 'Exportar',
            subtitle: 'Exportar datos del sistema'
        },
        balance: {
            title: 'Balance',
            subtitle: 'Balance financiero y reportes'
        }
    };
    
    if (pageTitles[page]) {
        pageTitle.textContent = pageTitles[page].title;
        pageSubtitle.textContent = pageTitles[page].subtitle;
    }
    
    // Mostrar/ocultar secciones según la página
    showPageContent(page);
    
    console.log('📄 Navegando a:', page);
}

// ========================================
// CARGAR JUGADORES DESDE FIREBASE
// ========================================
async function loadJugadores() {
    if (!jugadoresGrid) return;

    await initFirebase();

    if (!db) {
        jugadoresGrid.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">Error al conectar con la base de datos</p>';
        return;
    }

    jugadoresGrid.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">Cargando jugadores...</p>';

    try {
        const jugadoresRef = collection(db, 'jugadores');
        const snapshot = await getDocs(jugadoresRef);

        jugadoresData = [];
        snapshot.forEach((docSnapshot) => {
            const data = docSnapshot.data();
            // Solo incluir jugadores activos (activo !== false)
            if (data.activo !== false) {
                jugadoresData.push({
                    id: docSnapshot.id,
                    ...data
                });
            }
        });

        jugadoresData.sort((a, b) => {
            const nombreA = (a.nombreCompleto || '').toLowerCase();
            const nombreB = (b.nombreCompleto || '').toLowerCase();
            return nombreA.localeCompare(nombreB);
        });

        populateJugadoresCategoryFilter();
        applyJugadoresFilters();

        if (sectionJugadores) {
            sectionJugadores.dataset.loaded = 'true';
        }
    } catch (error) {
        console.error('❌ Error al cargar jugadores:', error);
        jugadoresGrid.innerHTML = '<p style="text-align: center; color: var(--rojo); padding: 40px;">Error al cargar jugadores. Intenta de nuevo.</p>';
    }
}

// ========================================
// CARGAR DATOS DEL COMEDOR
// ========================================
let comedorData = {
    pasaron: [],
    noPasaron: []
};

async function loadComedor() {
    await initFirebase();
    await initFirebaseComedor();

    if (!db || !dbComedor) {
        console.error('❌ Error: No se pudo inicializar Firebase');
        return;
    }

    try {
        // Cargar jugadores registrados
        const jugadoresRef = collection(db, 'jugadores');
        const jugadoresSnapshot = await getDocs(jugadoresRef);
        
        const jugadoresRegistrados = [];
        jugadoresSnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.activo !== false) { // Solo jugadores activos
                jugadoresRegistrados.push({
                    id: doc.id,
                    nombreCompleto: data.nombreCompleto || `${data.nombres || ''} ${data.apellidoPaterno || ''} ${data.apellidoMaterno || ''}`.trim(),
                    categoria: data.categoria || 'Sin categoría',
                    ...data
                });
            }
        });

        // Obtener fecha de hoy
        const hoy = new Date();
        const fechaHoy = hoy.toISOString().split('T')[0]; // YYYY-MM-DD

        // Cargar registros del comedor con límite
        const comedorViewLimit = document.getElementById('comedorViewLimit');
        const limit = comedorViewLimit ? parseInt(comedorViewLimit.value) || 100 : 100;
        
        // El formulario guarda en la colección 'comedorRegistros'
        const comedorRef = collection(dbComedor, 'comedorRegistros');
        let comedorSnapshot;
        
        try {
            const { query, orderBy, limit: limitFn } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
            const comedorQuery = query(comedorRef, orderBy('timestamp', 'desc'), limitFn(limit));
            comedorSnapshot = await getDocs(comedorQuery);
        } catch (orderError) {
            // Si falla el ordenamiento (puede ser que no haya índice), cargar sin ordenar
            console.warn('⚠️ No se pudo ordenar por timestamp, cargando sin orden:', orderError.message);
            const { query, limit: limitFn } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
            const comedorQuery = query(comedorRef, limitFn(limit));
            comedorSnapshot = await getDocs(comedorQuery);
        }
        
        const todosLosRegistros = [];
        const jugadoresQuePasaronHoy = [];
        const idsQuePasaronHoy = new Set();
        
        comedorSnapshot.forEach((doc) => {
            const data = doc.data();
            // Obtener fecha del registro - Priorizar timestamp (más confiable)
            let fechaRegistro = null;
            let fechaRegistroDate = null;
            
            // Primero intentar con timestamp (campo automático de Firestore)
            if (data.timestamp) {
                if (data.timestamp.toDate && typeof data.timestamp.toDate === 'function') {
                    // Es un Timestamp de Firestore
                    fechaRegistroDate = data.timestamp.toDate();
                    fechaRegistro = fechaRegistroDate.toISOString().split('T')[0];
                } else if (data.timestamp instanceof Date) {
                    // Ya es un Date
                    fechaRegistroDate = data.timestamp;
                    fechaRegistro = fechaRegistroDate.toISOString().split('T')[0];
                } else if (typeof data.timestamp === 'string' || typeof data.timestamp === 'number') {
                    // Es string o número
                    fechaRegistroDate = new Date(data.timestamp);
                    fechaRegistro = fechaRegistroDate.toISOString().split('T')[0];
                }
            }
            
            // Si no se obtuvo fecha del timestamp, intentar con el campo fecha
            if (!fechaRegistro && data.fecha) {
                // Si no hay timestamp, usar el campo fecha
                if (typeof data.fecha === 'string') {
                    fechaRegistro = data.fecha.split('T')[0];
                    fechaRegistroDate = new Date(data.fecha);
                } else if (data.fecha.toDate) {
                    // Si fecha es un Timestamp
                    fechaRegistroDate = data.fecha.toDate();
                    fechaRegistro = fechaRegistroDate.toISOString().split('T')[0];
                }
            }
            
            // El formulario guarda 'nombre', no 'nombreCompleto'
            const nombreCompleto = data.nombre || data.nombreCompleto || '';
            
            // Si no se pudo obtener la fecha, saltar este registro
            if (!fechaRegistro) {
                console.warn('⚠️ Registro sin fecha válida:', doc.id, data);
                return;
            }
            
            // Detectar tipo de comida (Desayuno, Comida, Cena)
            // Buscar en diferentes campos posibles
            const horaRegistro = data.horaEntrada || data.hora || '';
            const tipoComida = data.tipoComida || data.tipo || data.comida || 
                              (horaRegistro ? determinarTipoComidaPorHora(horaRegistro) : 'Comida');
            
            const registro = {
                id: doc.id,
                nombreCompleto: nombreCompleto,
                categoria: data.categoria || 'Sin categoría',
                hora: horaRegistro || 'Sin hora',
                tipoComida: tipoComida,
                fecha: fechaRegistro, // Formato YYYY-MM-DD para comparación
                timestamp: data.timestamp || fechaRegistroDate || null, // Guardar timestamp original para formateo
                ...data
            };
            
            // Guardar todos los registros
            todosLosRegistros.push(registro);
            
            // Si es de hoy, agregarlo a la lista de quienes pasaron hoy
            if (fechaRegistro === fechaHoy) {
                idsQuePasaronHoy.add(nombreCompleto.toLowerCase().trim());
                jugadoresQuePasaronHoy.push(registro);
            }
        });

        // Determinar quiénes NO pasaron
        // Un jugador NO pasó si no tiene 3 registros (Desayuno, Comida, Cena) en el día de hoy
        // Mejorar la comparación de nombres (normalizar espacios y mayúsculas)
        const normalizarNombre = (nombre) => {
            return nombre.toLowerCase().trim().replace(/\s+/g, ' ');
        };
        
        // Agrupar registros de hoy por jugador para contar cuántas comidas tiene cada uno
        const registrosHoyPorJugador = {};
        jugadoresQuePasaronHoy.forEach(registro => {
            const nombreNormalizado = normalizarNombre(registro.nombreCompleto);
            if (!registrosHoyPorJugador[nombreNormalizado]) {
                registrosHoyPorJugador[nombreNormalizado] = {
                    nombreCompleto: registro.nombreCompleto,
                    categoria: registro.categoria,
                    registros: []
                };
            }
            registrosHoyPorJugador[nombreNormalizado].registros.push({
                tipoComida: registro.tipoComida || determinarTipoComidaPorHora(registro.hora || registro.horaEntrada),
                hora: registro.hora || registro.horaEntrada,
                timestamp: registro.timestamp
            });
        });
        
        const jugadoresNoPasaron = jugadoresRegistrados.map(jugador => {
            const nombreJugador = normalizarNombre(jugador.nombreCompleto);
            const registrosHoy = registrosHoyPorJugador[nombreJugador];
            
            // Contar tipos de comida únicos (Desayuno, Comida, Cena)
            const tiposComida = registrosHoy ? new Set(registrosHoy.registros.map(r => r.tipoComida)) : new Set();
            const tiene3Comidas = tiposComida.size >= 3;
            
            // Si no tiene 3 comidas, está en la lista de "no pasaron"
            if (!tiene3Comidas) {
                return {
                    ...jugador,
                    registrosHoy: registrosHoy ? registrosHoy.registros : [],
                    comidasFaltantes: ['Desayuno', 'Comida', 'Cena'].filter(comida => !tiposComida.has(comida)),
                    totalRegistrosHoy: registrosHoy ? registrosHoy.registros.length : 0
                };
            }
            return null;
        }).filter(j => j !== null);
        
        console.log('📊 Comedor - Resumen:', {
            jugadoresRegistrados: jugadoresRegistrados.length,
            jugadoresQuePasaronHoy: jugadoresQuePasaronHoy.length,
            jugadoresNoPasaron: jugadoresNoPasaron.length,
            todosLosRegistros: todosLosRegistros.length,
            fechaHoy: fechaHoy,
            ejemploRegistros: todosLosRegistros.slice(0, 3).map(r => ({
                nombre: r.nombreCompleto,
                fecha: r.fecha,
                tieneTimestamp: !!r.timestamp
            }))
        });

        // Agrupar registros solo por nombre del jugador (sin considerar fecha)
        // Esto permite mostrar todos los ingresos del jugador en una sola tarjeta
        const registrosAgrupados = {};
        todosLosRegistros.forEach(registro => {
            // Normalizar el nombre para agrupar correctamente
            const nombreNormalizado = registro.nombreCompleto.toLowerCase().trim();
            const clave = nombreNormalizado;
            
            if (!registrosAgrupados[clave]) {
                registrosAgrupados[clave] = {
                    id: registro.id, // Usar el primer ID encontrado
                    nombreCompleto: registro.nombreCompleto, // Mantener el nombre original
                    categoria: registro.categoria,
                    fecha: registro.fecha, // Fecha más reciente (se actualizará)
                    timestamp: registro.timestamp, // Timestamp más reciente
                    ingresos: [] // Array de todos los ingresos del jugador
                };
            }
            // Agregar este ingreso al array con su fecha
            registrosAgrupados[clave].ingresos.push({
                tipoComida: registro.tipoComida || 'Comida',
                hora: registro.hora,
                fecha: registro.fecha, // Guardar la fecha de cada ingreso
                timestamp: registro.timestamp
            });
            
            // Actualizar fecha y timestamp si este registro es más reciente
            if (registro.timestamp && registrosAgrupados[clave].timestamp) {
                const fechaRegistro = registro.timestamp.toDate ? registro.timestamp.toDate() : new Date(registro.timestamp);
                const fechaActual = registrosAgrupados[clave].timestamp.toDate ? registrosAgrupados[clave].timestamp.toDate() : new Date(registrosAgrupados[clave].timestamp);
                if (fechaRegistro > fechaActual) {
                    registrosAgrupados[clave].fecha = registro.fecha;
                    registrosAgrupados[clave].timestamp = registro.timestamp;
                }
            }
        });
        
        // Convertir el objeto agrupado a array para mostrar
        const registrosAgrupadosArray = Object.values(registrosAgrupados);
        
        // Organizar los que pasaron por categoría (usando registros agrupados)
        // Un jugador "pasó" si tiene al menos un ingreso de hoy
        const pasaronPorCategoria = {};
        registrosAgrupadosArray.forEach(jugador => {
            // Verificar si tiene al menos un ingreso de hoy
            const tieneIngresoHoy = jugador.ingresos.some(ingreso => ingreso.fecha === fechaHoy);
            if (tieneIngresoHoy) {
                const cat = jugador.categoria || 'Sin categoría';
                if (!pasaronPorCategoria[cat]) {
                    pasaronPorCategoria[cat] = [];
                }
                pasaronPorCategoria[cat].push(jugador);
            }
        });

        comedorData = {
            pasaron: jugadoresQuePasaronHoy, // Para mostrar en "quienes NO pasaron"
            todosLosRegistros: todosLosRegistros, // Todos los registros individuales para filtrar
            registrosAgrupados: registrosAgrupadosArray, // Registros agrupados por jugador y fecha
            noPasaron: jugadoresNoPasaron,
            pasaronPorCategoria: pasaronPorCategoria
        };

        // Actualizar la UI
        updateComedorUI();
        
        // Actualizar contador en el dashboard
        if (comedorCount) {
            const comedorCountValue = (jugadoresNoPasaron?.length) || 0;
            animateCounter(comedorCount, comedorCountValue, 1000);
        }

    } catch (error) {
        console.error('❌ Error al cargar datos del comedor:', error);
        console.error('Detalles del error:', {
            message: error.message,
            stack: error.stack,
            db: !!db,
            dbComedor: !!dbComedor
        });
        
        // Mostrar mensaje de error en la UI
        const carouselNoPasaron = document.getElementById('carousel-comedor-no-pasaron');
        const carouselPasaron = document.getElementById('carousel-comedor-pasaron');
        if (carouselNoPasaron) {
            carouselNoPasaron.innerHTML = '<p style="text-align: center; color: var(--rojo); padding: 40px;">Error al cargar datos del comedor. Verifica la consola para más detalles.</p>';
        }
        if (carouselPasaron) {
            carouselPasaron.innerHTML = '<p style="text-align: center; color: var(--rojo); padding: 40px;">Error al cargar datos del comedor. Verifica la consola para más detalles.</p>';
        }
    }
}

function updateComedorUI() {
    // Inicializar filtros
    currentComedorFecha = null;
    currentComedorBusqueda = '';
    currentComedorCategoria = 'all';
    
    // Actualizar contador total
    const comedorTotal = document.getElementById('comedorTotal');
    const comedorViewLimit = document.getElementById('comedorViewLimit');
    if (comedorTotal) {
        const totalRegistros = comedorData.todosLosRegistros?.length || 0;
        const limit = comedorViewLimit ? parseInt(comedorViewLimit.value) || 100 : 100;
        comedorTotal.textContent = `${totalRegistros} ${totalRegistros === 1 ? 'registro' : 'registros'}`;
    }
    
    // Aplicar filtros a ambas secciones
    applyComedorFilters();
}

let currentComedorCategoria = 'all';
let currentComedorFecha = null;
let currentComedorBusqueda = '';

// ========================================
// CARGAR DATOS DE MENSUALIDADES
// ========================================
let mensualidadesData = {
    adeudos: [],
    pagaron: [],
    pagosPorJugador: {},
    pagosPorCategoria: {}
};

let currentMensualidadesBusqueda = '';
let currentMensualidadesCategoria = 'all';
let currentMensualidadesMes = 'all';

async function loadMensualidades() {
    await initFirebase();
    await initFirebaseMensualidades();

    if (!db || !dbMensualidades) {
        console.error('❌ Error: No se pudo inicializar Firebase');
        return;
    }

    try {
        const { collection, getDocs } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const jugadoresRef = collection(db, 'jugadores');
        const jugadoresSnapshot = await getDocs(jugadoresRef);
        
        const jugadoresRegistrados = [];
        jugadoresSnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.activo !== false) {
                jugadoresRegistrados.push({
                    id: doc.id,
                    nombreCompleto: data.nombreCompleto || `${data.nombres || ''} ${data.apellidoPaterno || ''} ${data.apellidoMaterno || ''}`.trim(),
                    categoria: data.categoria || 'Sin categoría',
                    ...data
                });
            }
        });

        const mensualidadesRef = collection(dbMensualidades, 'mensualidadesRegistros');
        const mensualidadesSnapshot = await getDocs(mensualidadesRef);
        
        const pagosMensualidades = [];
        const pagosPorJugador = {};
        const mesesPagadosPorJugador = {};
        
        mensualidadesSnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.conceptoPago === 'Mensualidad' || data.conceptoPagoOriginal === 'Mensualidad') {
                const nombreCompleto = data.nombreCompleto || 'Sin nombre';
                const mes = data.mes || null;
                
                pagosMensualidades.push({
                    id: doc.id,
                    nombreCompleto: nombreCompleto,
                    categoria: data.categoria || 'Sin categoría',
                    mes: mes,
                    monto: data.monto || 0,
                    fechaPago: data.fechaPago || null,
                    tipoPago: data.tipoPago || 'N/A',
                    folioComprobante: data.folioComprobante || 'N/A',
                    timestamp: data.timestamp || null,
                    fechaCreacion: data.fechaCreacion || null
                });
                
                // Normalizar el nombre para evitar problemas de comparación
                const nombreNormalizado = nombreCompleto.trim();
                
                if (!pagosPorJugador[nombreNormalizado]) {
                    pagosPorJugador[nombreNormalizado] = {
                        pagos: [],
                        categoria: data.categoria || 'Sin categoría',
                        mesesPagados: new Set()
                    };
                    mesesPagadosPorJugador[nombreNormalizado] = new Set();
                }
                pagosPorJugador[nombreNormalizado].pagos.push({
                    id: doc.id,
                    mes: mes,
                    monto: data.monto || 0,
                    fechaPago: data.fechaPago || null,
                    tipoPago: data.tipoPago || 'N/A',
                    folioComprobante: data.folioComprobante || 'N/A',
                    timestamp: data.timestamp || null
                });
                
                if (mes) {
                    mesesPagadosPorJugador[nombreNormalizado].add(mes);
                    pagosPorJugador[nombreNormalizado].mesesPagados.add(mes);
                }
            }
        });

        // Función auxiliar para normalizar nombres (eliminar espacios extra, convertir a minúsculas)
        const normalizarNombre = (nombre) => {
            if (!nombre) return '';
            return nombre.trim().toLowerCase().replace(/\s+/g, ' ');
        };
        
        // Crear un mapa de pagos normalizado por nombre normalizado
        const pagosPorJugadorNormalizado = {};
        Object.keys(pagosPorJugador).forEach(nombre => {
            const nombreNormalizado = normalizarNombre(nombre);
            if (!pagosPorJugadorNormalizado[nombreNormalizado]) {
                pagosPorJugadorNormalizado[nombreNormalizado] = {
                    ...pagosPorJugador[nombre],
                    nombresOriginales: [nombre] // Guardar nombres originales para referencia
                };
                // Asegurar que mesesPagados sea un Set
                if (!pagosPorJugadorNormalizado[nombreNormalizado].mesesPagados) {
                    pagosPorJugadorNormalizado[nombreNormalizado].mesesPagados = new Set();
                }
            } else {
                // Si hay múltiples variaciones del nombre, combinar los pagos
                pagosPorJugadorNormalizado[nombreNormalizado].pagos.push(...pagosPorJugador[nombre].pagos);
                if (pagosPorJugador[nombre].mesesPagados) {
                    pagosPorJugador[nombre].mesesPagados.forEach(mes => {
                        pagosPorJugadorNormalizado[nombreNormalizado].mesesPagados.add(mes);
                    });
                }
                if (!pagosPorJugadorNormalizado[nombreNormalizado].nombresOriginales) {
                    pagosPorJugadorNormalizado[nombreNormalizado].nombresOriginales = [];
                }
                if (!pagosPorJugadorNormalizado[nombreNormalizado].nombresOriginales.includes(nombre)) {
                    pagosPorJugadorNormalizado[nombreNormalizado].nombresOriginales.push(nombre);
                }
            }
        });
        
        const jugadoresConAdeudos = [];
        const jugadoresQuePagaron = [];
        const pagosPorCategoria = {};
        
        // Solo considerar jugadores que están registrados en Altas (base de datos de jugadores)
        console.log(`📊 Procesando ${jugadoresRegistrados.length} jugadores registrados en Altas`);
        
        // Generar lista de los últimos 12 meses que deben pagarse
        const fechaActual = new Date();
        const mesActual = fechaActual.getMonth();
        const añoActual = fechaActual.getFullYear();
        const mesesRequeridos = [];
        
        for (let i = 11; i >= 0; i--) {
            let mes = mesActual - i;
            let año = añoActual;
            
            // Ajustar si el mes es negativo (año anterior)
            if (mes < 0) {
                mes += 12;
                año -= 1;
            }
            
            const nombreMesCompleto = mesesNombres[mes];
            mesesRequeridos.push(nombreMesCompleto);
        }
        
        jugadoresRegistrados.forEach(jugador => {
            const nombreCompleto = jugador.nombreCompleto;
            const nombreNormalizado = normalizarNombre(nombreCompleto);
            
            // Buscar pagos por nombre normalizado
            const infoPagos = pagosPorJugadorNormalizado[nombreNormalizado];
            const tienePagos = infoPagos && infoPagos.pagos.length > 0;
            
            if (!tienePagos) {
                // Jugador sin ningún pago de mensualidad registrado = ADEUDO
                jugadoresConAdeudos.push({
                    ...jugador,
                    mesesPagados: [],
                    pagos: [],
                    totalPagos: 0
                });
            } else {
                // Obtener meses pagados del jugador
                const mesesPagados = infoPagos.mesesPagados ? 
                    Array.from(infoPagos.mesesPagados) : 
                    Array.from(new Set(infoPagos.pagos.map(p => p.mes).filter(Boolean)));
                
                // Verificar si el jugador pagó TODOS los meses requeridos
                const todosLosMesesPagados = mesesRequeridos.every(mes => mesesPagados.includes(mes));
                
                if (todosLosMesesPagados) {
                    // Jugador que pagó TODOS los meses = NO ADEUDO
                    jugadoresQuePagaron.push({
                        ...jugador,
                        mesesPagados: mesesPagados,
                        pagos: infoPagos.pagos,
                        totalPagos: infoPagos.pagos.length
                    });
                    
                    // Agrupar por categoría
                    const categoria = jugador.categoria || 'Sin categoría';
                    if (!pagosPorCategoria[categoria]) {
                        pagosPorCategoria[categoria] = [];
                    }
                    pagosPorCategoria[categoria].push({
                        ...jugador,
                        mesesPagados: mesesPagados,
                        pagos: infoPagos.pagos,
                        totalPagos: infoPagos.pagos.length
                    });
                } else {
                    // Jugador que tiene pagos pero NO pagó todos los meses = ADEUDO
                    jugadoresConAdeudos.push({
                        ...jugador,
                        mesesPagados: mesesPagados,
                        pagos: infoPagos.pagos,
                        totalPagos: infoPagos.pagos.length
                    });
                }
            }
        });
        
        console.log(`✅ Procesamiento completado: ${jugadoresConAdeudos.length} con adeudos, ${jugadoresQuePagaron.length} que pagaron`);

        mensualidadesData = {
            adeudos: jugadoresConAdeudos,
            pagaron: jugadoresQuePagaron,
            pagosPorJugador: pagosPorJugador,
            pagosPorCategoria: pagosPorCategoria,
            todosLosPagos: pagosMensualidades
        };

        console.log('📊 Mensualidades - Resumen:', {
            totalJugadores: jugadoresRegistrados.length,
            conAdeudos: jugadoresConAdeudos.length,
            quePagaron: jugadoresQuePagaron.length,
            totalPagos: pagosMensualidades.length
        });

        updateMensualidadesUI();
        
        const adeudosCount = document.getElementById('adeudosCount');
        if (adeudosCount) {
            const adeudosCountValue = (jugadoresConAdeudos?.length) || 0;
            animateCounter(adeudosCount, adeudosCountValue, 1000);
        }

    } catch (error) {
        console.error('❌ Error al cargar datos de Mensualidades:', error);
    }
}

function updateMensualidadesUI() {
    console.log('🔄 Actualizando UI de Mensualidades...');
    applyMensualidadesFilters();
}

function applyMensualidadesFilters() {
    let adeudosFiltrados = [...mensualidadesData.adeudos];
    
    if (currentMensualidadesBusqueda.trim()) {
        const busqueda = currentMensualidadesBusqueda.toLowerCase().trim();
        adeudosFiltrados = adeudosFiltrados.filter(jugador => {
            const nombre = (jugador.nombreCompleto || '').toLowerCase();
            return nombre.includes(busqueda);
        });
    }
    
    if (currentMensualidadesCategoria !== 'all') {
        adeudosFiltrados = adeudosFiltrados.filter(jugador => jugador.categoria === currentMensualidadesCategoria);
    }
    
    const carouselAdeudos = document.getElementById('carousel-adeudos');
    const totalAdeudos = document.getElementById('adeudosTotal');
    
    if (carouselAdeudos && totalAdeudos) {
        if (adeudosFiltrados.length === 0) {
            carouselAdeudos.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">No se encontraron jugadores con adeudos con los filtros aplicados</p>';
            totalAdeudos.textContent = '0 jugadores';
        } else {
            loadCarousel('adeudos', adeudosFiltrados);
            totalAdeudos.textContent = `${adeudosFiltrados.length} ${adeudosFiltrados.length === 1 ? 'jugador' : 'jugadores'}`;
        }
    }
    
    let pagaronFiltrados = [...mensualidadesData.pagaron];
    
    if (currentMensualidadesBusqueda.trim()) {
        const busqueda = currentMensualidadesBusqueda.toLowerCase().trim();
        pagaronFiltrados = pagaronFiltrados.filter(jugador => {
            const nombre = (jugador.nombreCompleto || '').toLowerCase();
            return nombre.includes(busqueda);
        });
    }
    
    if (currentMensualidadesCategoria !== 'all') {
        pagaronFiltrados = pagaronFiltrados.filter(jugador => jugador.categoria === currentMensualidadesCategoria);
    }
    
    if (currentMensualidadesMes !== 'all') {
        pagaronFiltrados = pagaronFiltrados.filter(jugador => {
            return jugador.mesesPagados && jugador.mesesPagados.includes(currentMensualidadesMes);
        });
    }
    
    const containerPagaron = document.getElementById('mensualidadesPagaronContainer');
    if (containerPagaron) {
        const pagaronPorCategoria = {};
        pagaronFiltrados.forEach(jugador => {
            const categoria = jugador.categoria || 'Sin categoría';
            if (!pagaronPorCategoria[categoria]) {
                pagaronPorCategoria[categoria] = [];
            }
            pagaronPorCategoria[categoria].push(jugador);
        });
        
        const categorias = Object.keys(pagaronPorCategoria).sort();
        
        if (categorias.length === 0) {
            containerPagaron.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">No se encontraron jugadores con los filtros aplicados</p>';
        } else {
            containerPagaron.innerHTML = categorias.map(categoria => {
                const jugadores = pagaronPorCategoria[categoria];
                const carouselId = `mensualidades-${categoria.replace(/\s+/g, '-').toLowerCase()}`;
                
                return `
                    <div class="mensualidades-categoria-section" style="margin-bottom: 30px;">
                        <div class="section-subheader" style="margin-bottom: 15px;">
                            <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--negro); margin-bottom: 5px;">
                                ${categoria}
                            </h4>
                            <span style="display: inline-block; padding: 4px 12px; background: #D1FAE5; color: #059669; border-radius: 8px; font-size: 0.85rem; font-weight: 600;">
                                ${jugadores.length} ${jugadores.length === 1 ? 'jugador' : 'jugadores'}
                            </span>
                        </div>
                        <div class="carousel-container">
                            <button class="carousel-btn carousel-btn-prev" data-carousel="${carouselId}">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <div class="carousel-wrapper">
                                <div class="carousel" id="carousel-${carouselId}">
                                </div>
                            </div>
                            <button class="carousel-btn carousel-btn-next" data-carousel="${carouselId}">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                        <div class="carousel-indicators" id="indicators-${carouselId}"></div>
                    </div>
                `;
            }).join('');
            
            categorias.forEach(categoria => {
                const jugadores = pagaronPorCategoria[categoria];
                const carouselId = `mensualidades-${categoria.replace(/\s+/g, '-').toLowerCase()}`;
                loadCarousel(carouselId, jugadores);
            });
        }
    }
}

function applyComedorFilters() {
    // Aplicar filtros a "quienes SÍ pasaron" (mostrar en tabla)
    const tableBody = document.getElementById('comedorTableBody');
    const totalPasaron = document.getElementById('comedorPasaronTotal');
    
    // Usar todos los registros individuales (no agrupados) para la tabla
    let registrosFiltrados = [...(comedorData.todosLosRegistros || [])];
    
    // Filtrar por fecha
    if (currentComedorFecha) {
        const fechaFiltro = currentComedorFecha.split('T')[0]; // Normalizar formato YYYY-MM-DD
        registrosFiltrados = registrosFiltrados.filter(reg => {
            if (!reg.fecha) {
                // Intentar obtener fecha del timestamp
                if (reg.timestamp) {
                    const fecha = reg.timestamp.toDate ? reg.timestamp.toDate() : new Date(reg.timestamp);
                    const fechaRegistro = fecha.toISOString().split('T')[0];
                    return fechaRegistro === fechaFiltro;
                }
                return false;
            }
            const fechaRegistro = reg.fecha.split('T')[0];
            return fechaRegistro === fechaFiltro;
        });
    }
    
    // Filtrar por categoría
    if (currentComedorCategoria !== 'all') {
        registrosFiltrados = registrosFiltrados.filter(reg => reg.categoria === currentComedorCategoria);
    }
    
    // Filtrar por búsqueda
    if (currentComedorBusqueda.trim()) {
        const busqueda = currentComedorBusqueda.toLowerCase().trim();
        registrosFiltrados = registrosFiltrados.filter(reg => {
            const nombre = (reg.nombreCompleto || reg.nombre || '').toLowerCase();
            return nombre.includes(busqueda);
        });
    }
    
    // Ordenar por fecha y hora (más recientes primero)
    registrosFiltrados.sort((a, b) => {
        let fechaA = null;
        let fechaB = null;
        
        if (a.timestamp) {
            fechaA = a.timestamp.toDate ? a.timestamp.toDate() : new Date(a.timestamp);
        } else if (a.fecha) {
            fechaA = new Date(a.fecha);
        }
        
        if (b.timestamp) {
            fechaB = b.timestamp.toDate ? b.timestamp.toDate() : new Date(b.timestamp);
        } else if (b.fecha) {
            fechaB = new Date(b.fecha);
        }
        
        if (fechaA && fechaB) {
            const diff = fechaB.getTime() - fechaA.getTime();
            if (diff !== 0) return diff;
        }
        
        // Si las fechas son iguales, ordenar por hora
        const horaA = a.hora || a.horaEntrada || '';
        const horaB = b.hora || b.horaEntrada || '';
        return horaB.localeCompare(horaA);
    });
    
    // Actualizar contador
    if (totalPasaron) {
        totalPasaron.textContent = `${registrosFiltrados.length} ${registrosFiltrados.length === 1 ? 'jugador' : 'jugadores'}`;
    }
    
    // Renderizar tabla
    if (tableBody) {
        if (registrosFiltrados.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="4" class="table-empty">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <p>No se encontraron registros con los filtros aplicados</p>
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = registrosFiltrados.map(registro => {
                const nombreCompleto = registro.nombreCompleto || registro.nombre || 'Sin nombre';
                const categoria = registro.categoria || 'Sin categoría';
                
                // Formatear hora de entrada
                let horaEntrada = 'N/A';
                if (registro.hora || registro.horaEntrada) {
                    // Si ya tiene formato de hora, usarlo directamente
                    horaEntrada = registro.hora || registro.horaEntrada;
                } else if (registro.timestamp) {
                    const fecha = registro.timestamp.toDate ? registro.timestamp.toDate() : new Date(registro.timestamp);
                    const horas = fecha.getHours();
                    const minutos = fecha.getMinutes();
                    const periodo = horas >= 12 ? 'p.m.' : 'a.m.';
                    const horas12 = horas % 12 || 12;
                    horaEntrada = `${horas12}:${minutos.toString().padStart(2, '0')} ${periodo}`;
                }
                
                return `
                    <tr>
                        <td style="font-weight: 600;">${nombreCompleto}</td>
                        <td>
                            <span style="display: inline-block; padding: 4px 12px; background: #D1FAE5; color: #059669; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                                ${categoria}
                            </span>
                        </td>
                        <td>${horaEntrada}</td>
                        <td>
                            <button class="btn-icon-danger" onclick="deleteComedorRegistro('${registro.id}')" title="Eliminar registro">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        </td>
                    </tr>
                `;
            }).join('');
        }
    }

    // Aplicar filtros a "quienes NO pasaron"
    const carouselNoPasaron = document.getElementById('carousel-comedor-no-pasaron');
    const totalNoPasaron = document.getElementById('comedorNoPasaronTotal');
    
    let jugadoresNoPasaronFiltrados = comedorData.noPasaron || [];
    
    // Filtrar por categoría
    if (currentComedorCategoria !== 'all') {
        jugadoresNoPasaronFiltrados = jugadoresNoPasaronFiltrados.filter(j => j.categoria === currentComedorCategoria);
    }
    
    // Filtrar por búsqueda
    if (currentComedorBusqueda.trim()) {
        const busqueda = currentComedorBusqueda.toLowerCase().trim();
        jugadoresNoPasaronFiltrados = jugadoresNoPasaronFiltrados.filter(j => {
            const nombre = (j.nombreCompleto || '').toLowerCase();
            return nombre.includes(busqueda);
        });
    }
    
    // Nota: No filtramos por fecha en "quienes NO pasaron" porque siempre son de hoy

    if (carouselNoPasaron && totalNoPasaron) {
        if (jugadoresNoPasaronFiltrados.length === 0) {
            carouselNoPasaron.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">No se encontraron jugadores con los filtros aplicados</p>';
            totalNoPasaron.textContent = '0 jugadores';
        } else {
            // Usar loadCarousel que ya maneja todo (HTML, indicadores, botones, etc.)
            loadCarousel('comedor-no-pasaron', jugadoresNoPasaronFiltrados);
            // Actualizar el contador manualmente ya que loadCarousel no encontrará el elemento con ese ID
            totalNoPasaron.textContent = `${jugadoresNoPasaronFiltrados.length} ${jugadoresNoPasaronFiltrados.length === 1 ? 'jugador' : 'jugadores'}`;
        }
    }
}

function updateComedorPasaronUI(categoria) {
    currentComedorCategoria = categoria;
    applyComedorFilters();
}

// ========================================
// ELIMINAR REGISTRO DEL COMEDOR
// ========================================
async function deleteComedorRegistro(registroId) {
    if (!confirm('¿Estás seguro de eliminar este registro del comedor?')) {
        return;
    }
    
    await initFirebaseComedor();
    
    if (!dbComedor) {
        mostrarNotificacion('Error al conectar con la base de datos', 'error');
        return;
    }
    
    try {
        const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const registroRef = doc(dbComedor, 'comedorRegistros', registroId);
        
        await deleteDoc(registroRef);
        
        console.log('✅ Registro eliminado correctamente');
        mostrarNotificacion('Registro eliminado correctamente', 'success');
        
        // Recargar datos del comedor
        await loadComedor();
        
    } catch (error) {
        console.error('❌ Error al eliminar registro:', error);
        mostrarNotificacion('Error al eliminar el registro', 'error');
    }
}

// ========================================
// CREAR TARJETA DE JUGADOR
// ========================================
function createJugadorCard(jugador) {
    const nombreCompleto = jugador.nombreCompleto || `${jugador.nombres || ''} ${jugador.apellidoPaterno || ''} ${jugador.apellidoMaterno || ''}`.trim();
    const iniciales = nombreCompleto.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const categoria = jugador.categoria || 'Sin categoría';
    const posicion = jugador.posicion || 'Sin posición';
    const edad = jugador.edadCompleta || `${jugador.edad || 0} años`;
    const telefono = jugador.telefono || 'Sin teléfono';
    const fotoUrl = jugador.fotoUrl || null;
    
    return `
        <div class="jugador-card" data-jugador-id="${jugador.id}">
            <div class="jugador-card-header">
                <div class="jugador-card-avatar">
                    ${fotoUrl ? `<img src="${fotoUrl}" alt="${nombreCompleto}">` : `<span>${iniciales}</span>`}
                </div>
                <div class="jugador-card-info">
                    <h3 class="jugador-card-nombre">${nombreCompleto}</h3>
                    <p class="jugador-card-categoria">${categoria}</p>
                </div>
            </div>
            <div class="jugador-card-details">
                <div class="jugador-card-detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 6 L8 20 C8 20.5 8.5 21 9 21 H15 C15.5 21 16 20.5 16 20 V6"/>
                    </svg>
                    <span class="jugador-card-detail-label">Posición:</span>
                    <span class="jugador-card-detail-value">${posicion}</span>
                </div>
                <div class="jugador-card-detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span class="jugador-card-detail-label">Edad:</span>
                    <span class="jugador-card-detail-value">${edad}</span>
                </div>
                <div class="jugador-card-detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span class="jugador-card-detail-label">Teléfono:</span>
                    <span class="jugador-card-detail-value">${telefono}</span>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// ABRIR MODAL DE JUGADOR
// ========================================
function openJugadorModal(jugador) {
    currentJugador = { ...jugador };

    const nombreCompleto = jugador.nombreCompleto || `${jugador.nombres || ''} ${jugador.apellidoPaterno || ''} ${jugador.apellidoMaterno || ''}`.trim();
    const iniciales = nombreCompleto.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    modalPlayerName.textContent = nombreCompleto;
    modalPlayerCategory.textContent = jugador.categoria || 'Sin categoría';
    modalAvatarText.textContent = iniciales;

    modalAvatar.className = 'modal-avatar';
    const existingImg = modalAvatar.querySelector('img');
    if (existingImg) {
        existingImg.remove();
    }

    if (jugador.fotoUrl) {
        const img = document.createElement('img');
        img.src = jugador.fotoUrl;
        img.alt = nombreCompleto;
        modalAvatar.appendChild(img);
        modalAvatarText.style.display = 'none';
    } else {
        modalAvatarText.style.display = 'flex';
    }

    modalBody.innerHTML = `
        <div class="modal-section">
            <h4 class="modal-section-title">Información Personal</h4>
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <p class="modal-info-label">Nombre Completo</p>
                    <p class="modal-info-value">${nombreCompleto}</p>
                </div>
                <div class="modal-info-item">
                    <p class="modal-info-label">Edad</p>
                    <p class="modal-info-value">${jugador.edadCompleta || `${jugador.edad || 0} años`}</p>
                </div>
                <div class="modal-info-item">
                    <p class="modal-info-label">Lugar de Nacimiento</p>
                    <p class="modal-info-value">${jugador.lugarNacimiento || 'No especificado'}</p>
                </div>
                <div class="modal-info-item">
                    <p class="modal-info-label">Teléfono</p>
                    <p class="modal-info-value">${jugador.telefono || 'No especificado'}</p>
                </div>
            </div>
        </div>
        <div class="modal-section">
            <h4 class="modal-section-title">Información Deportiva</h4>
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <p class="modal-info-label">Categoría</p>
                    <p class="modal-info-value">${jugador.categoria || 'No especificada'}</p>
                </div>
                <div class="modal-info-item">
                    <p class="modal-info-label">Posición</p>
                    <p class="modal-info-value">${jugador.posicion || 'No especificada'}</p>
                </div>
            </div>
        </div>
        <div class="modal-section">
            <h4 class="modal-section-title">Información Administrativa</h4>
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <p class="modal-info-label">Fecha de Registro</p>
                    <p class="modal-info-value">${jugador.fechaRegistro || 'No especificada'}</p>
                </div>
                <div class="modal-info-item">
                    <p class="modal-info-label">Días en el Club</p>
                    <p class="modal-info-value">${jugador.diasEnClub || 0} días</p>
                </div>
                ${jugador.mensualidad ? `
                <div class="modal-info-item">
                    <p class="modal-info-label">Mensualidad</p>
                    <p class="modal-info-value">$${jugador.mensualidad.monto?.toLocaleString() || '0'}</p>
                </div>
                <div class="modal-info-item">
                    <p class="modal-info-label">Día de Pago</p>
                    <p class="modal-info-value">${jugador.mensualidad.diaPagoTexto || 'No especificado'}</p>
                </div>
                ` : ''}
            </div>
        </div>
    `;

    // Configurar botones del modal
    if (modalBtnAction) {
        modalBtnAction.style.display = 'flex';
        modalBtnAction.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
            <span>Dar de Baja</span>
        `;
        modalBtnAction.className = 'btn btn-danger';
        modalBtnAction.onclick = async () => {
            if (confirm(`¿Estás seguro de que deseas dar de baja a ${jugador.nombreCompleto || 'este jugador'}?`)) {
                try {
                    await darDeBajaJugador(jugador.id, jugador);
                    closePlayerModal();
                } catch (error) {
                    console.error('Error al dar de baja:', error);
                }
            }
        };
    }
    if (modalBtnClose) {
        modalBtnClose.style.display = 'block';
        modalBtnClose.textContent = 'Cerrar';
    }

    playerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ========================================
// CERRAR SESIÓN
// ========================================
function handleLogout() {
    if (confirm('¿Estás seguro que deseas cerrar sesión?')) {
        localStorage.removeItem('teotihuacan_session');
        window.location.href = 'index.html';
        console.log('👋 Sesión cerrada');
    }
}

// ========================================
// FORMULARIO DE ALTAS - FUNCIONALIDAD
// ========================================

// Funciones de cálculo
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let años = hoy.getFullYear() - nacimiento.getFullYear();
    let meses = hoy.getMonth() - nacimiento.getMonth();
    
    if (meses < 0) {
        años--;
        meses += 12;
    }
    
    return { años, meses };
}

function calcularDiasEnClub(fechaRegistro) {
    const hoy = new Date();
    const registro = new Date(fechaRegistro);
    const diferencia = Math.floor((hoy - registro) / (1000 * 60 * 60 * 24));
    return diferencia >= 0 ? diferencia : 0;
}

// Notificación simple
function mostrarNotificacion(mensaje, tipo = 'success') {
    // Crear notificación simple
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 18px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
        animation: slideIn 0.3s ease;
        min-width: 280px;
        background: ${tipo === 'success' ? 'linear-gradient(135deg, #27AE60 0%, #229954 100%)' : 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)'};
        color: white;
    `;
    notif.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            ${tipo === 'success' 
                ? '<polyline points="20 6 9 17 4 12"></polyline>' 
                : '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
            }
        </svg>
        <span>${mensaje}</span>
    `;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3500);
}

// Validar teléfono
function validarTelefono(telefono) {
    return /^[0-9]{10}$/.test(telefono);
}

// Validar formulario
function validarFormularioAltas() {
    const apellidoPaterno = document.getElementById('apellidoPaterno')?.value.trim();
    const apellidoMaterno = document.getElementById('apellidoMaterno')?.value.trim();
    const nombres = document.getElementById('nombres')?.value.trim();
    const lugarNacimiento = document.getElementById('lugarNacimiento')?.value.trim();
    const telefono = document.getElementById('telefono')?.value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento')?.value;
    const fechaRegistro = document.getElementById('fechaRegistro')?.value;
    const categoria = document.getElementById('categoria')?.value;
    const posicion = document.getElementById('posicion')?.value.trim();
    const fechaPago = document.getElementById('fechaPago')?.value;
    const montoMensualidad = document.getElementById('montoMensualidad')?.value;

    if (!apellidoPaterno || apellidoPaterno.length < 2) {
        mostrarNotificacion('El apellido paterno debe tener al menos 2 caracteres', 'error');
        return false;
    }

    if (!apellidoMaterno || apellidoMaterno.length < 2) {
        mostrarNotificacion('El apellido materno debe tener al menos 2 caracteres', 'error');
        return false;
    }

    if (!nombres || nombres.length < 2) {
        mostrarNotificacion('El nombre debe tener al menos 2 caracteres', 'error');
        return false;
    }

    if (!lugarNacimiento || lugarNacimiento.length < 3) {
        mostrarNotificacion('El lugar de nacimiento debe tener al menos 3 caracteres', 'error');
        return false;
    }

    if (!validarTelefono(telefono)) {
        mostrarNotificacion('El teléfono debe tener exactamente 10 dígitos', 'error');
        return false;
    }

    if (!fechaNacimiento) {
        mostrarNotificacion('Debes ingresar la fecha de nacimiento', 'error');
        return false;
    }

    if (!fechaRegistro) {
        mostrarNotificacion('Debes ingresar la fecha de registro', 'error');
        return false;
    }

    if (!categoria) {
        mostrarNotificacion('Debes seleccionar una categoría', 'error');
        return false;
    }

    if (!posicion || posicion.length < 3) {
        mostrarNotificacion('La posición debe tener al menos 3 caracteres', 'error');
        return false;
    }

    if (!fechaPago) {
        mostrarNotificacion('Debes seleccionar la fecha de pago mensual', 'error');
        return false;
    }

    if (!montoMensualidad || parseFloat(montoMensualidad) <= 0) {
        mostrarNotificacion('El monto de mensualidad debe ser mayor a 0', 'error');
        return false;
    }

    return true;
}

// Guardar jugador en Firestore
async function guardarJugadorAltas(registro) {
    await initFirebase();
    
    if (!db) {
        throw new Error('Firebase no está inicializado');
    }
    
    try {
        const firebaseFirestore = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const { collection, addDoc, Timestamp } = firebaseFirestore;
        
        const jugadoresRef = collection(db, 'jugadores');
        const docRef = await addDoc(jugadoresRef, {
            ...registro,
            timestamp: Timestamp.now()
        });
        console.log('✅ Jugador registrado con ID:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('❌ Error al guardar jugador:', error);
        throw error;
    }
}

// Inicializar formulario de altas
function initAltasForm() {
    const altasForm = document.getElementById('altasForm');
    if (!altasForm) return;
    
    // Establecer fecha de registro actual por defecto
    const fechaRegistroInput = document.getElementById('fechaRegistro');
    if (fechaRegistroInput && !fechaRegistroInput.value) {
        const hoy = new Date().toISOString().split('T')[0];
        fechaRegistroInput.value = hoy;
        const dias = calcularDiasEnClub(hoy);
        const diasClubInput = document.getElementById('diasClub');
        if (diasClubInput) diasClubInput.value = dias;
    }
    
    // Calcular edad automáticamente
    const fechaNacimientoInput = document.getElementById('fechaNacimiento');
    if (fechaNacimientoInput) {
        fechaNacimientoInput.addEventListener('change', function() {
            if (this.value) {
                const edad = calcularEdad(this.value);
                const edadInput = document.getElementById('edad');
                const mesesInput = document.getElementById('meses');
                if (edadInput) edadInput.value = edad.años;
                if (mesesInput) mesesInput.value = edad.meses;
            }
        });
    }
    
    // Calcular días en el club
    if (fechaRegistroInput) {
        fechaRegistroInput.addEventListener('change', function() {
            if (this.value) {
                const dias = calcularDiasEnClub(this.value);
                const diasClubInput = document.getElementById('diasClub');
                if (diasClubInput) diasClubInput.value = dias;
            }
        });
    }
    
    // Submit del formulario
    altasForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validarFormularioAltas()) {
            return;
        }
        
        const btnRegistrar = document.getElementById('btnRegistrar');
        if (btnRegistrar) {
            btnRegistrar.disabled = true;
            btnRegistrar.textContent = 'Registrando...';
        }
        
        try {
            // Obtener valores calculados
            const edad = calcularEdad(document.getElementById('fechaNacimiento').value);
            const diasClub = calcularDiasEnClub(document.getElementById('fechaRegistro').value);
            
            // Obtener valores del formulario
            const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
            const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
            const nombres = document.getElementById('nombres').value.trim();
            const lugarNacimiento = document.getElementById('lugarNacimiento').value.trim();
            const fechaNacimiento = document.getElementById('fechaNacimiento').value;
            const telefono = document.getElementById('telefono').value.trim();
            const categoria = document.getElementById('categoria').value;
            const posicion = document.getElementById('posicion').value.trim();
            const fechaRegistro = document.getElementById('fechaRegistro').value;
            const fechaPago = document.getElementById('fechaPago').value;
            const montoMensualidad = parseFloat(document.getElementById('montoMensualidad').value);
            
            // Crear objeto de registro
            const registro = {
                apellidoPaterno,
                apellidoMaterno,
                nombres,
                nombreCompleto: `${nombres} ${apellidoPaterno} ${apellidoMaterno}`,
                lugarNacimiento,
                fechaNacimiento,
                edad: edad.años,
                meses: edad.meses,
                edadCompleta: `${edad.años} años, ${edad.meses} meses`,
                telefono,
                categoria,
                posicion,
                fechaRegistro,
                diasEnClub: diasClub,
                mensualidad: {
                    monto: montoMensualidad,
                    diaPago: parseInt(fechaPago),
                    diaPagoTexto: fechaPago === "1" ? "Día 1 de cada mes" : "Día 15 de cada mes",
                    activo: true,
                    ultimoPagoRegistrado: null
                },
                fechaCreacion: new Date().toISOString(),
                activo: true,
                historialPagos: [],
                notas: ""
            };
            
            // Guardar en Firestore
            await guardarJugadorAltas(registro);
            
            // Mostrar notificación de éxito
            mostrarNotificacion('¡Jugador registrado exitosamente!');
            
            // Resetear formulario
            altasForm.reset();
            
            // Restablecer fecha de registro actual
            const hoy = new Date().toISOString().split('T')[0];
            if (fechaRegistroInput) fechaRegistroInput.value = hoy;
            const diasClubInput = document.getElementById('diasClub');
            if (diasClubInput) diasClubInput.value = '0';
            
            // Recargar jugadores si estamos en esa vista
            const sectionJugadores = document.getElementById('section-jugadores');
            if (sectionJugadores && sectionJugadores.style.display !== 'none') {
                sectionJugadores.dataset.loaded = 'false';
                loadJugadores();
            }
            
        } catch (error) {
            console.error('❌ Error al registrar:', error);
            mostrarNotificacion('Error al registrar jugador. Intenta de nuevo.', 'error');
        } finally {
            if (btnRegistrar) {
                btnRegistrar.disabled = false;
                const btnRegistrarSpan = btnRegistrar.querySelector('span');
                if (btnRegistrarSpan) {
                    btnRegistrarSpan.textContent = 'Registrar Alta';
                } else {
                    btnRegistrar.innerHTML = `
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                            <polyline points="7 3 7 8 15 8"></polyline>
                        </svg>
                        <span>Registrar Alta</span>
                    `;
                }
            }
        }
    });
}

// Modificar showPageContent para inicializar el formulario
const originalShowPageContent = showPageContent;
function showPageContentWithAltas(page) {
    originalShowPageContent(page);
    if (page === 'altas') {
        setTimeout(() => {
            initAltasForm();
        }, 100);
    }
}
showPageContent = showPageContentWithAltas;

function populateJugadoresCategoryFilter() {
    if (!jugadoresCategoryFilter) return;

    // Todas las categorías posibles (definidas en el formulario de altas)
    const todasLasCategorias = [
        'Alebrijes TDP',
        'Soles TDP',
        'Sub-18',
        'Sub-16',
        'Sub-14'
    ];

    const currentValue = jugadoresCategoryFilter.value || 'all';

    // Mostrar todas las categorías, incluso si no hay jugadores con esa categoría
    jugadoresCategoryFilter.innerHTML = '<option value="all">Todas las categorías</option>' +
        todasLasCategorias.map(cat => `<option value="${cat}">${cat}</option>`).join('');

    if (todasLasCategorias.includes(currentValue)) {
        jugadoresCategoryFilter.value = currentValue;
    } else {
        jugadoresCategoryFilter.value = 'all';
    }
}

function applyJugadoresFilters() {
    if (!jugadoresGrid) return;

    const searchTerm = jugadoresSearchInput ? jugadoresSearchInput.value.trim().toLowerCase() : '';
    const category = jugadoresCategoryFilter ? jugadoresCategoryFilter.value : 'all';

    jugadoresFiltered = jugadoresData.filter(jugador => {
        const matchesCategory = category === 'all' || (jugador.categoria && jugador.categoria === category);
        const matchesSearch = !searchTerm || (jugador.nombreCompleto && jugador.nombreCompleto.toLowerCase().includes(searchTerm));
        return matchesCategory && matchesSearch;
    });

    if (jugadoresTotal) {
        jugadoresTotal.textContent = `${jugadoresFiltered.length} ${jugadoresFiltered.length === 1 ? 'jugador' : 'jugadores'}`;
    }

    renderJugadores(jugadoresFiltered);
}

function renderJugadores(list) {
    if (!jugadoresGrid) return;

    if (!list || list.length === 0) {
        jugadoresGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--gris-label); padding: 40px;">No se encontraron jugadores</p>';
        return;
    }

    jugadoresGrid.innerHTML = list.map(jugador => createJugadorCard(jugador)).join('');

    jugadoresGrid.querySelectorAll('.jugador-card').forEach(card => {
        const jugadorId = card.dataset.jugadorId;
        const jugador = list.find(j => j.id === jugadorId);
        if (jugador) {
            card.addEventListener('click', () => openJugadorModal(jugador));
        }
    });
}

function updateLocalJugadorData(updatedJugador) {
    if (!updatedJugador) return;

    jugadoresData = jugadoresData.map(jugador => jugador.id === updatedJugador.id ? { ...jugador, ...updatedJugador } : jugador);
    applyJugadoresFilters();
}

function handleJugadoresSearch() {
    applyJugadoresFilters();
}

// ========================================
// CARGAR DATOS DE CASA CLUB
// ========================================
let casaClubData = {
    registros: []
};

let currentCasaClubBusqueda = '';
let currentCasaClubCategoria = 'all';
let currentCasaClubLimit = 100;

async function loadCasaClub() {
    await initFirebaseCasaClub();
    
    if (!dbCasaClub) {
        console.error('❌ Error: No se pudo inicializar Firebase Casa Club');
        return;
    }
    
    try {
        const { collection, getDocs, query, orderBy, limit } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        
        console.log('🔍 Iniciando carga de registros de Casa Club...');
        
        // Cargar registros de casaClubRegistros, ordenados por timestamp descendente
        const casaClubRef = collection(dbCasaClub, 'casaClubRegistros');
        
        let snapshot;
        try {
            // Intentar con ordenamiento por timestamp
            const q = query(casaClubRef, orderBy('timestamp', 'desc'), limit(currentCasaClubLimit));
            snapshot = await getDocs(q);
        } catch (orderError) {
            // Si falla el ordenamiento (puede ser que no haya índice), cargar sin ordenar
            console.warn('⚠️ No se pudo ordenar por timestamp, cargando sin orden:', orderError.message);
            const q = query(casaClubRef, limit(currentCasaClubLimit));
            snapshot = await getDocs(q);
        }
        
        const registros = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            registros.push({
                id: doc.id,
                nombre: data.nombre || 'Sin nombre',
                categoria: data.categoria || 'Sin categoría',
                celular: data.celular || 'Sin contacto',
                motivo: data.motivo || 'Sin destino',
                horaEntrada: data.horaEntrada || null,
                horaSalida: data.horaSalida || null,
                timestamp: data.timestamp || null,
                fecha: data.fecha || null
            });
        });
        
        // Ordenar manualmente si no se pudo ordenar en la consulta
        if (registros.length > 0 && registros[0].timestamp) {
            registros.sort((a, b) => {
                const timestampA = a.timestamp?.toDate ? a.timestamp.toDate().getTime() : (a.timestamp ? new Date(a.timestamp).getTime() : 0);
                const timestampB = b.timestamp?.toDate ? b.timestamp.toDate().getTime() : (b.timestamp ? new Date(b.timestamp).getTime() : 0);
                return timestampB - timestampA; // Más recientes primero
            });
        }
        
        casaClubData.registros = registros;
        
        console.log('📊 Casa Club - Registros cargados:', {
            total: registros.length,
            primeros: registros.slice(0, 3).map(r => ({
                nombre: r.nombre,
                categoria: r.categoria,
                horaEntrada: r.horaEntrada,
                horaSalida: r.horaSalida
            }))
        });
        
        // Actualizar la UI
        updateCasaClubUI();
        
    } catch (error) {
        console.error('❌ Error al cargar datos de Casa Club:', error);
        console.error('Detalles del error:', {
            message: error.message,
            stack: error.stack,
            dbCasaClub: !!dbCasaClub
        });
        const tableBody = document.getElementById('casaclubTableBody');
        if (tableBody) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="table-empty">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <p>Error al cargar registros. Verifica la consola para más detalles.</p>
                        <p style="font-size: 0.85rem; margin-top: 8px; color: var(--gris-label);">${error.message}</p>
                    </td>
                </tr>
            `;
        }
    }
}

function updateCasaClubUI() {
    console.log('🔄 Actualizando UI de Casa Club...');
    applyCasaClubFilters();
}

function applyCasaClubFilters() {
    const tableBody = document.getElementById('casaclubTableBody');
    const totalElement = document.getElementById('casaclubTotal');
    
    console.log('🔍 Aplicando filtros de Casa Club:', {
        registros: casaClubData.registros.length,
        busqueda: currentCasaClubBusqueda,
        categoria: currentCasaClubCategoria,
        tieneTableBody: !!tableBody,
        tieneTotalElement: !!totalElement
    });
    
    if (!tableBody) {
        console.error('❌ No se encontró casaclubTableBody');
        return;
    }
    
    let registrosFiltrados = [...casaClubData.registros];
    
    // Filtrar por búsqueda
    if (currentCasaClubBusqueda.trim()) {
        const busqueda = currentCasaClubBusqueda.toLowerCase().trim();
        registrosFiltrados = registrosFiltrados.filter(registro => {
            const nombre = (registro.nombre || '').toLowerCase();
            return nombre.includes(busqueda);
        });
    }
    
    // Filtrar por categoría
    if (currentCasaClubCategoria !== 'all') {
        registrosFiltrados = registrosFiltrados.filter(registro => registro.categoria === currentCasaClubCategoria);
    }
    
    // Actualizar contador
    if (totalElement) {
        totalElement.textContent = `${registrosFiltrados.length} ${registrosFiltrados.length === 1 ? 'registro' : 'registros'} (mostrando últimos ${currentCasaClubLimit})`;
    }
    
    // Renderizar tabla
    if (registrosFiltrados.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="8" class="table-empty">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p>No se encontraron registros con los filtros aplicados</p>
                </td>
            </tr>
        `;
    } else {
        tableBody.innerHTML = registrosFiltrados.map(registro => {
            // Determinar estado
            const estado = registro.horaSalida ? 'Completado' : 'Fuera de Casa Club';
            const estadoClass = registro.horaSalida ? 'completado' : 'fuera';
            const estadoColor = registro.horaSalida ? '#10B981' : '#FCD34D';
            const estadoBg = registro.horaSalida ? '#D1FAE5' : '#FEF3C7';
            
            return `
                <tr>
                    <td style="font-weight: 600;">${registro.nombre}</td>
                    <td>
                        <span style="display: inline-block; padding: 4px 12px; background: #FFF5E6; color: #E67E22; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                            ${registro.categoria}
                        </span>
                    </td>
                    <td>${registro.celular}</td>
                    <td>${registro.motivo}</td>
                    <td>${registro.horaEntrada || '—'}</td>
                    <td>${registro.horaSalida || '—'}</td>
                    <td>
                        <span style="display: inline-block; padding: 4px 12px; background: ${estadoBg}; color: ${estadoColor}; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                            ${estado}
                        </span>
                    </td>
                    <td>
                        <button class="btn-delete" data-registro-id="${registro.id}" style="background: transparent; border: none; cursor: pointer; padding: 8px; color: #E74C3C; transition: all 0.2s;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
        
        // Agregar event listeners a los botones de eliminar
        tableBody.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const registroId = e.currentTarget.dataset.registroId;
                if (confirm('¿Estás seguro de eliminar este registro?')) {
                    await eliminarRegistroCasaClub(registroId);
                }
            });
        });
    }
}

async function eliminarRegistroCasaClub(registroId) {
    try {
        const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const registroRef = doc(dbCasaClub, 'casaClubRegistros', registroId);
        await deleteDoc(registroRef);
        
        // Recargar datos
        await loadCasaClub();
        
        console.log('✅ Registro eliminado correctamente');
    } catch (error) {
        console.error('❌ Error al eliminar registro:', error);
        alert('Error al eliminar el registro. Intenta de nuevo.');
    }
}

// Event listeners para filtros de Casa Club
document.addEventListener('DOMContentLoaded', () => {
    const casaclubSearchInput = document.getElementById('casaclubSearchInput');
    const casaclubCategoryFilter = document.getElementById('casaclubCategoryFilter');
    const casaclubViewLimit = document.getElementById('casaclubViewLimit');
    
    if (casaclubSearchInput) {
        casaclubSearchInput.addEventListener('input', (e) => {
            currentCasaClubBusqueda = e.target.value;
            applyCasaClubFilters();
        });
    }
    
    if (casaclubCategoryFilter) {
        casaclubCategoryFilter.addEventListener('change', (e) => {
            currentCasaClubCategoria = e.target.value;
            applyCasaClubFilters();
        });
    }
    
    if (casaclubViewLimit) {
        casaclubViewLimit.addEventListener('change', async (e) => {
            currentCasaClubLimit = parseInt(e.target.value);
            await loadCasaClub();
        });
    }
});

function handleJugadoresCategoryChange() {
    applyJugadoresFilters();
}

// ========================================
// CARGAR DATOS DE PERMISOS
// ========================================
let permisosData = {
    registros: []
};

let currentPermisosBusqueda = '';
let currentPermisosCategoria = 'all';
let currentPermisosEstado = 'all';
let currentPermisosLimit = 100;

async function loadPermisos() {
    await initFirebasePermisos();
    
    if (!dbPermisos) {
        console.error('❌ Error: No se pudo inicializar Firebase Permisos');
        return;
    }
    
    try {
        const { collection, getDocs, query, orderBy, limit } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        
        console.log('🔍 Iniciando carga de permisos...');
        
        // Cargar permisos de la colección 'permisos', ordenados por timestamp descendente
        const permisosRef = collection(dbPermisos, 'permisos');
        
        let snapshot;
        try {
            // Intentar con ordenamiento por timestamp
            const q = query(permisosRef, orderBy('timestamp', 'desc'), limit(currentPermisosLimit));
            snapshot = await getDocs(q);
        } catch (orderError) {
            // Si falla el ordenamiento (puede ser que no haya índice), cargar sin ordenar
            console.warn('⚠️ No se pudo ordenar por timestamp, cargando sin orden:', orderError.message);
            const q = query(permisosRef, limit(currentPermisosLimit));
            snapshot = await getDocs(q);
        }
        
        const registros = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            
            // Determinar estado basado en fechas
            let estado = data.estado || 'activo';
            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);
            
            if (data.fechaFin) {
                const fechaFin = new Date(data.fechaFin);
                fechaFin.setHours(0, 0, 0, 0);
                if (fechaFin < hoy) {
                    estado = 'finalizado';
                }
            }
            
            registros.push({
                id: doc.id,
                nombre: data.nombre || 'Sin nombre',
                categoria: data.categoria || 'Sin categoría',
                celular: data.celular || 'Sin contacto',
                motivo: data.motivo || 'Sin motivo',
                fechaInicio: data.fechaInicio || null,
                fechaFin: data.fechaFin || null,
                diasPermiso: data.diasPermiso || 0,
                diasPermisoTexto: data.diasPermisoTexto || `${data.diasPermiso || 0} día(s)`,
                descripcion: data.descripcion || '',
                estado: estado,
                aprobado: data.aprobado !== undefined ? data.aprobado : null, // null, true, o false
                notas: data.notas || '',
                timestamp: data.timestamp || null,
                fechaRegistro: data.fechaRegistro || null
            });
        });
        
        // Ordenar manualmente si no se pudo ordenar en la consulta
        if (registros.length > 0 && registros[0].timestamp) {
            registros.sort((a, b) => {
                const timestampA = a.timestamp?.toDate ? a.timestamp.toDate().getTime() : (a.timestamp ? new Date(a.timestamp).getTime() : 0);
                const timestampB = b.timestamp?.toDate ? b.timestamp.toDate().getTime() : (b.timestamp ? new Date(b.timestamp).getTime() : 0);
                return timestampB - timestampA; // Más recientes primero
            });
        }
        
        permisosData.registros = registros;
        
        console.log('📊 Permisos - Registros cargados:', {
            total: registros.length,
            primeros: registros.slice(0, 3).map(r => ({
                nombre: r.nombre,
                categoria: r.categoria,
                motivo: r.motivo,
                estado: r.estado
            }))
        });
        
        // Actualizar la UI
        updatePermisosUI();
        
    } catch (error) {
        console.error('❌ Error al cargar datos de Permisos:', error);
        console.error('Detalles del error:', {
            message: error.message,
            stack: error.stack,
            dbPermisos: !!dbPermisos
        });
        const tableBody = document.getElementById('permisosTableBody');
        if (tableBody) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="10" class="table-empty">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <p>Error al cargar permisos. Verifica la consola para más detalles.</p>
                        <p style="font-size: 0.85rem; margin-top: 8px; color: var(--gris-label);">${error.message}</p>
                    </td>
                </tr>
            `;
        }
    }
}

function updatePermisosUI() {
    console.log('🔄 Actualizando UI de Permisos...');
    applyPermisosFilters();
}

function applyPermisosFilters() {
    const tableBody = document.getElementById('permisosTableBody');
    const totalElement = document.getElementById('permisosTotal');
    
    console.log('🔍 Aplicando filtros de Permisos:', {
        registros: permisosData.registros.length,
        busqueda: currentPermisosBusqueda,
        categoria: currentPermisosCategoria,
        estado: currentPermisosEstado,
        tieneTableBody: !!tableBody,
        tieneTotalElement: !!totalElement
    });
    
    if (!tableBody) {
        console.error('❌ No se encontró permisosTableBody');
        return;
    }
    
    let registrosFiltrados = [...permisosData.registros];
    
    // Filtrar por búsqueda
    if (currentPermisosBusqueda.trim()) {
        const busqueda = currentPermisosBusqueda.toLowerCase().trim();
        registrosFiltrados = registrosFiltrados.filter(registro => {
            const nombre = (registro.nombre || '').toLowerCase();
            return nombre.includes(busqueda);
        });
    }
    
    // Filtrar por categoría
    if (currentPermisosCategoria !== 'all') {
        registrosFiltrados = registrosFiltrados.filter(registro => registro.categoria === currentPermisosCategoria);
    }
    
    // Filtrar por estado
    if (currentPermisosEstado !== 'all') {
        registrosFiltrados = registrosFiltrados.filter(registro => registro.estado === currentPermisosEstado);
    }
    
    // Actualizar contador
    if (totalElement) {
        totalElement.textContent = `${registrosFiltrados.length} ${registrosFiltrados.length === 1 ? 'permiso' : 'permisos'} (mostrando últimos ${currentPermisosLimit})`;
    }
    
    // Renderizar tabla
    if (registrosFiltrados.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="10" class="table-empty">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p>No se encontraron permisos con los filtros aplicados</p>
                </td>
            </tr>
        `;
    } else {
        tableBody.innerHTML = registrosFiltrados.map(permiso => {
            // Formatear fechas
            const fechaInicioFormateada = permiso.fechaInicio ? new Date(permiso.fechaInicio).toLocaleDateString('es-MX', { 
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric' 
            }) : '—';
            
            const fechaFinFormateada = permiso.fechaFin ? new Date(permiso.fechaFin).toLocaleDateString('es-MX', { 
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric' 
            }) : '—';
            
            // Determinar color y estilo del estado
            const estado = permiso.estado || 'activo';
            const estadoColor = estado === 'activo' ? '#3B82F6' : '#6B7280';
            const estadoBg = estado === 'activo' ? '#DBEAFE' : '#F3F4F6';
            const estadoTexto = estado === 'activo' ? 'Activo' : 'Finalizado';
            
            // Determinar estado de aprobación
            const aprobado = permiso.aprobado;
            let aprobacionTexto = 'Pendiente';
            let aprobacionColor = '#6B7280';
            let aprobacionBg = '#F3F4F6';
            
            if (aprobado === true) {
                aprobacionTexto = 'Aprobado';
                aprobacionColor = '#10B981';
                aprobacionBg = '#D1FAE5';
            } else if (aprobado === false) {
                aprobacionTexto = 'No Aprobado';
                aprobacionColor = '#EF4444';
                aprobacionBg = '#FEE2E2';
            }
            
            return `
                <tr>
                    <td style="font-weight: 600;">${permiso.nombre}</td>
                    <td>
                        <span style="display: inline-block; padding: 4px 12px; background: #FFF5E6; color: #E67E22; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                            ${permiso.categoria}
                        </span>
                    </td>
                    <td>${permiso.celular}</td>
                    <td>${permiso.motivo}</td>
                    <td>${fechaInicioFormateada}</td>
                    <td>${fechaFinFormateada}</td>
                    <td style="font-weight: 600;">${permiso.diasPermisoTexto}</td>
                    <td>
                        <span style="display: inline-block; padding: 4px 12px; background: ${estadoBg}; color: ${estadoColor}; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                            ${estadoTexto}
                        </span>
                    </td>
                    <td>
                        <span style="display: inline-block; padding: 4px 12px; background: ${aprobacionBg}; color: ${aprobacionColor}; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                            ${aprobacionTexto}
                        </span>
                    </td>
                    <td>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <button class="btn-approve" data-permiso-id="${permiso.id}" title="Aprobar permiso">
                                ✓ Aprobar
                            </button>
                            <button class="btn-reject" data-permiso-id="${permiso.id}" title="No aprobar permiso">
                                ✗ No Aprobar
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
        
        // Agregar event listeners a los botones de aprobación
        tableBody.querySelectorAll('.btn-approve').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const permisoId = e.currentTarget.dataset.permisoId;
                await actualizarAprobacionPermiso(permisoId, true);
            });
        });
        
        tableBody.querySelectorAll('.btn-reject').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const permisoId = e.currentTarget.dataset.permisoId;
                await actualizarAprobacionPermiso(permisoId, false);
            });
        });
    }
}

async function actualizarAprobacionPermiso(permisoId, aprobado) {
    try {
        const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const permisoRef = doc(dbPermisos, 'permisos', permisoId);
        
        await updateDoc(permisoRef, {
            aprobado: aprobado
        });
        
        // Actualizar el dato local
        const permisoIndex = permisosData.registros.findIndex(p => p.id === permisoId);
        if (permisoIndex !== -1) {
            permisosData.registros[permisoIndex].aprobado = aprobado;
        }
        
        // Recargar la UI
        updatePermisosUI();
        
        const estadoTexto = aprobado ? 'aprobado' : 'no aprobado';
        console.log(`✅ Permiso ${estadoTexto} correctamente`);
        
        // Mostrar notificación
        mostrarNotificacionPermiso(`Permiso ${estadoTexto} correctamente`, aprobado ? 'success' : 'info');
        
    } catch (error) {
        console.error('❌ Error al actualizar aprobación del permiso:', error);
        alert('Error al actualizar el permiso. Intenta de nuevo.');
    }
}

function mostrarNotificacionPermiso(mensaje, tipo = 'success') {
    const notif = document.createElement('div');
    notif.className = `notification ${tipo}`;
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${tipo === 'success' ? '#10B981' : '#3B82F6'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    notif.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            ${tipo === 'success' 
                ? '<polyline points="20 6 9 17 4 12"></polyline>' 
                : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>'
            }
        </svg>
        <span>${mensaje}</span>
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ========================================
// CARGAR DATOS DE LESIONADOS
// ========================================
let lesionadosData = {
    registros: []
};

let currentLesionadosBusqueda = '';
let currentLesionadosCategoria = 'all';
let currentLesionadosEstado = 'all';
let currentLesionadosAtendido = 'all';
let currentLesionadosLimit = 100;

async function loadLesionados() {
    await initFirebaseLesionados();
    
    if (!dbLesionados) {
        console.error('❌ Error: No se pudo inicializar Firebase Lesionados');
        return;
    }
    
    try {
        const { collection, getDocs, query, orderBy, limit } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        
        console.log('🔍 Iniciando carga de lesiones...');
        
        // Cargar lesiones de la colección 'lesiones', ordenados por timestamp descendente
        const lesionesRef = collection(dbLesionados, 'lesiones');
        
        let snapshot;
        try {
            // Intentar con ordenamiento por timestamp
            const q = query(lesionesRef, orderBy('timestamp', 'desc'), limit(currentLesionadosLimit));
            snapshot = await getDocs(q);
        } catch (orderError) {
            // Si falla el ordenamiento (puede ser que no haya índice), cargar sin ordenar
            console.warn('⚠️ No se pudo ordenar por timestamp, cargando sin orden:', orderError.message);
            const q = query(lesionesRef, limit(currentLesionadosLimit));
            snapshot = await getDocs(q);
        }
        
        const registros = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            
            registros.push({
                id: doc.id,
                nombre: data.nombre || 'Sin nombre',
                categoria: data.categoria || 'Sin categoría',
                celular: data.celular || 'Sin contacto',
                tipoLesion: data.tipoLesion || 'Sin tipo',
                zonaAfectada: data.zonaAfectada || 'Sin zona',
                nivelDolor: data.nivelDolor || 0,
                nivelDolorTexto: data.nivelDolorTexto || '0/10',
                descripcion: data.descripcion || '',
                estado: data.estado || 'activa',
                atendido: data.atendido !== undefined ? data.atendido : null, // null, true, o false
                notas: data.notas || '',
                tratamiento: data.tratamiento || '',
                fechaRecuperacion: data.fechaRecuperacion || null,
                timestamp: data.timestamp || null,
                fechaRegistro: data.fechaRegistro || null
            });
        });
        
        // Ordenar manualmente si no se pudo ordenar en la consulta
        if (registros.length > 0 && registros[0].timestamp) {
            registros.sort((a, b) => {
                const timestampA = a.timestamp?.toDate ? a.timestamp.toDate().getTime() : (a.timestamp ? new Date(a.timestamp).getTime() : 0);
                const timestampB = b.timestamp?.toDate ? b.timestamp.toDate().getTime() : (b.timestamp ? new Date(b.timestamp).getTime() : 0);
                return timestampB - timestampA; // Más recientes primero
            });
        }
        
        lesionadosData.registros = registros;
        
        console.log('📊 Lesionados - Registros cargados:', {
            total: registros.length,
            primeros: registros.slice(0, 3).map(r => ({
                nombre: r.nombre,
                categoria: r.categoria,
                tipoLesion: r.tipoLesion,
                estado: r.estado,
                atendido: r.atendido
            }))
        });
        
        // Actualizar la UI
        updateLesionadosUI();
        
    } catch (error) {
        console.error('❌ Error al cargar datos de Lesionados:', error);
        console.error('Detalles del error:', {
            message: error.message,
            stack: error.stack,
            dbLesionados: !!dbLesionados
        });
        const tableBody = document.getElementById('lesionadosTableBody');
        if (tableBody) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="11" class="table-empty">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <p>Error al cargar lesiones. Verifica la consola para más detalles.</p>
                        <p style="font-size: 0.85rem; margin-top: 8px; color: var(--gris-label);">${error.message}</p>
                    </td>
                </tr>
            `;
        }
    }
}

function updateLesionadosUI() {
    console.log('🔄 Actualizando UI de Lesionados...');
    applyLesionadosFilters();
}

function applyLesionadosFilters() {
    const tableBody = document.getElementById('lesionadosTableBody');
    const totalElement = document.getElementById('lesionadosTotal');
    
    console.log('🔍 Aplicando filtros de Lesionados:', {
        registros: lesionadosData.registros.length,
        busqueda: currentLesionadosBusqueda,
        categoria: currentLesionadosCategoria,
        estado: currentLesionadosEstado,
        atendido: currentLesionadosAtendido,
        tieneTableBody: !!tableBody,
        tieneTotalElement: !!totalElement
    });
    
    if (!tableBody) {
        console.error('❌ No se encontró lesionadosTableBody');
        return;
    }
    
    let registrosFiltrados = [...lesionadosData.registros];
    
    // Filtrar por búsqueda
    if (currentLesionadosBusqueda.trim()) {
        const busqueda = currentLesionadosBusqueda.toLowerCase().trim();
        registrosFiltrados = registrosFiltrados.filter(registro => {
            const nombre = (registro.nombre || '').toLowerCase();
            return nombre.includes(busqueda);
        });
    }
    
    // Filtrar por categoría
    if (currentLesionadosCategoria !== 'all') {
        registrosFiltrados = registrosFiltrados.filter(registro => registro.categoria === currentLesionadosCategoria);
    }
    
    // Filtrar por estado
    if (currentLesionadosEstado !== 'all') {
        registrosFiltrados = registrosFiltrados.filter(registro => registro.estado === currentLesionadosEstado);
    }
    
    // Filtrar por atención
    if (currentLesionadosAtendido !== 'all') {
        if (currentLesionadosAtendido === 'atendido') {
            registrosFiltrados = registrosFiltrados.filter(registro => registro.atendido === true);
        } else if (currentLesionadosAtendido === 'no_atendido') {
            registrosFiltrados = registrosFiltrados.filter(registro => registro.atendido !== true);
        }
    }
    
    // Actualizar contador
    if (totalElement) {
        totalElement.textContent = `${registrosFiltrados.length} ${registrosFiltrados.length === 1 ? 'lesión' : 'lesiones'} (mostrando últimos ${currentLesionadosLimit})`;
    }
    
    // Renderizar tabla
    if (registrosFiltrados.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="11" class="table-empty">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p>No se encontraron lesiones con los filtros aplicados</p>
                </td>
            </tr>
        `;
    } else {
        tableBody.innerHTML = registrosFiltrados.map(lesion => {
            // Determinar color y estilo del estado
            const estado = lesion.estado || 'activa';
            const estadoColor = estado === 'activa' ? '#EF4444' : '#10B981';
            const estadoBg = estado === 'activa' ? '#FEE2E2' : '#D1FAE5';
            const estadoTexto = estado === 'activa' ? 'Activa' : 'Recuperada';
            
            // Determinar estado de atención
            const atendido = lesion.atendido;
            let atencionTexto = 'No Atendido';
            let atencionColor = '#EF4444';
            let atencionBg = '#FEE2E2';
            
            if (atendido === true) {
                atencionTexto = 'Atendido';
                atencionColor = '#10B981';
                atencionBg = '#D1FAE5';
            }
            
            // Mostrar comentarios (notas) truncados si son muy largos
            const comentarios = lesion.notas || '';
            const comentariosTruncados = comentarios.length > 50 ? comentarios.substring(0, 50) + '...' : comentarios;
            
            return `
                <tr>
                    <td style="font-weight: 600;">${lesion.nombre}</td>
                    <td>
                        <span style="display: inline-block; padding: 4px 12px; background: #FFF5E6; color: #E67E22; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                            ${lesion.categoria}
                        </span>
                    </td>
                    <td>${lesion.celular}</td>
                    <td>${lesion.tipoLesion}</td>
                    <td>${lesion.zonaAfectada}</td>
                    <td style="font-weight: 600; color: ${lesion.nivelDolor >= 7 ? '#EF4444' : lesion.nivelDolor >= 4 ? '#F59E0B' : '#10B981'};">
                        ${lesion.nivelDolorTexto}
                    </td>
                    <td>
                        <span style="display: inline-block; padding: 4px 12px; background: ${estadoBg}; color: ${estadoColor}; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                            ${estadoTexto}
                        </span>
                    </td>
                    <td>
                        <span style="display: inline-block; padding: 4px 12px; background: ${atencionBg}; color: ${atencionColor}; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                            ${atencionTexto}
                        </span>
                    </td>
                    <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${comentarios}">
                        ${comentariosTruncados || 'Sin comentarios'}
                    </td>
                    <td>
                        <div style="display: flex; flex-direction: column; gap: 6px; align-items: stretch;">
                            <button class="btn-approve" data-lesion-id="${lesion.id}" style="padding: 6px 10px; background: #10B981; color: white; border: none; border-radius: 6px; font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: all 0.2s; width: 100%;" title="Marcar como atendido">
                                ✓ Atendido
                            </button>
                            <button class="btn-reject" data-lesion-id="${lesion.id}" style="padding: 6px 10px; background: #EF4444; color: white; border: none; border-radius: 6px; font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: all 0.2s; width: 100%;" title="Marcar como no atendido">
                                ✗ No Atendido
                            </button>
                            <button class="btn-comment" data-lesion-id="${lesion.id}" style="padding: 6px 10px; background: #3B82F6; color: white; border: none; border-radius: 6px; font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: all 0.2s; width: 100%;" title="Agregar/editar comentarios">
                                💬 Comentarios
                            </button>
                            ${lesion.estado === 'activa' ? `
                            <button class="btn-cured" data-lesion-id="${lesion.id}" style="padding: 6px 10px; background: #059669; color: white; border: none; border-radius: 6px; font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: all 0.2s; width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px;" title="Marcar como recuperado">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Recuperado
                            </button>
                            ` : ''}
                        </div>
                    </td>
                    <td style="text-align: center;">
                        <button class="btn-delete-lesion" data-lesion-id="${lesion.id}" style="background: transparent; border: none; cursor: pointer; padding: 8px; color: #E74C3C; transition: all 0.2s;" title="Eliminar lesión">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            `;
        }).join('');
        
        // Agregar event listeners a los botones
        tableBody.querySelectorAll('.btn-approve[data-lesion-id]').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const lesionId = e.currentTarget.dataset.lesionId;
                await actualizarAtencionLesion(lesionId, true);
            });
        });
        
        tableBody.querySelectorAll('.btn-reject[data-lesion-id]').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const lesionId = e.currentTarget.dataset.lesionId;
                await actualizarAtencionLesion(lesionId, false);
            });
        });
        
        tableBody.querySelectorAll('.btn-comment[data-lesion-id]').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const lesionId = e.currentTarget.dataset.lesionId;
                const lesion = lesionadosData.registros.find(l => l.id === lesionId);
                if (lesion) {
                    abrirModalComentarios(lesion);
                }
            });
        });
        
        tableBody.querySelectorAll('.btn-cured[data-lesion-id]').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const lesionId = e.currentTarget.dataset.lesionId;
                await marcarComoCurado(lesionId);
            });
        });
        
        tableBody.querySelectorAll('.btn-delete-lesion[data-lesion-id]').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const lesionId = e.currentTarget.dataset.lesionId;
                await eliminarLesion(lesionId);
            });
        });
    }
}

async function actualizarAtencionLesion(lesionId, atendido) {
    try {
        const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const lesionRef = doc(dbLesionados, 'lesiones', lesionId);
        
        await updateDoc(lesionRef, {
            atendido: atendido
        });
        
        // Actualizar el dato local
        const lesionIndex = lesionadosData.registros.findIndex(l => l.id === lesionId);
        if (lesionIndex !== -1) {
            lesionadosData.registros[lesionIndex].atendido = atendido;
        }
        
        // Recargar la UI
        updateLesionadosUI();
        
        const estadoTexto = atendido ? 'atendido' : 'no atendido';
        console.log(`✅ Lesión marcada como ${estadoTexto} correctamente`);
        
        // Mostrar notificación
        mostrarNotificacionLesionado(`Lesión marcada como ${estadoTexto} correctamente`, atendido ? 'success' : 'info');
        
    } catch (error) {
        console.error('❌ Error al actualizar atención de la lesión:', error);
        alert('Error al actualizar la lesión. Intenta de nuevo.');
    }
}

async function marcarComoCurado(lesionId) {
    try {
        const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const lesionRef = doc(dbLesionados, 'lesiones', lesionId);
        
        // Confirmar acción
        const confirmar = confirm('¿Estás seguro de marcar esta lesión como recuperada? El estado cambiará a "Recuperada".');
        if (!confirmar) {
            return;
        }
        
        // Obtener fecha actual
        const fechaRecuperacion = new Date().toISOString();
        
        await updateDoc(lesionRef, {
            estado: 'recuperada',
            fechaRecuperacion: fechaRecuperacion
        });
        
        // Actualizar el dato local
        const lesionIndex = lesionadosData.registros.findIndex(l => l.id === lesionId);
        if (lesionIndex !== -1) {
            lesionadosData.registros[lesionIndex].estado = 'recuperada';
            lesionadosData.registros[lesionIndex].fechaRecuperacion = fechaRecuperacion;
        }
        
        // Recargar la UI
        updateLesionadosUI();
        
        console.log('✅ Lesión marcada como recuperada correctamente');
        
        // Mostrar notificación
        mostrarNotificacionLesionado('Lesión marcada como recuperada correctamente', 'success');
        
    } catch (error) {
        console.error('❌ Error al marcar lesión como recuperada:', error);
        alert('Error al actualizar la lesión. Intenta de nuevo.');
    }
}

async function eliminarLesion(lesionId) {
    try {
        const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const lesionRef = doc(dbLesionados, 'lesiones', lesionId);
        
        // Buscar la lesión para mostrar el nombre en la confirmación
        const lesion = lesionadosData.registros.find(l => l.id === lesionId);
        const nombreLesion = lesion ? lesion.nombre : 'esta lesión';
        
        // Confirmar acción
        const confirmar = confirm(`¿Estás seguro de eliminar la lesión de ${nombreLesion}? Esta acción no se puede deshacer.`);
        if (!confirmar) {
            return;
        }
        
        await deleteDoc(lesionRef);
        
        // Eliminar del array local
        lesionadosData.registros = lesionadosData.registros.filter(l => l.id !== lesionId);
        
        // Recargar la UI
        updateLesionadosUI();
        
        console.log('✅ Lesión eliminada correctamente');
        
        // Mostrar notificación
        mostrarNotificacionLesionado('Lesión eliminada correctamente', 'success');
        
    } catch (error) {
        console.error('❌ Error al eliminar lesión:', error);
        alert('Error al eliminar la lesión. Intenta de nuevo.');
    }
}

function abrirModalComentarios(lesion) {
    // Crear modal para comentarios
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div class="modal-content" style="background: white; border-radius: 12px; padding: 30px; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--negro);">Comentarios - ${lesion.nombre}</h3>
                <button class="btn-close-modal" style="background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--gris-label);">×</button>
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; font-size: 0.9rem; font-weight: 600; color: var(--negro); margin-bottom: 8px;">Comentarios/Notas:</label>
                <textarea id="modalComentariosText" style="width: 100%; padding: 12px; border: 1px solid var(--borde); border-radius: 8px; font-size: 0.95rem; font-family: inherit; min-height: 150px; resize: vertical;" placeholder="Agrega comentarios sobre el seguimiento de la lesión...">${lesion.notas || ''}</textarea>
            </div>
            <div style="display: flex; gap: 12px; justify-content: flex-end;">
                <button class="btn-cancel-comment" style="padding: 10px 20px; background: var(--gris-light); color: var(--negro); border: none; border-radius: 8px; font-size: 0.9rem; font-weight: 600; cursor: pointer;">Cancelar</button>
                <button class="btn-save-comment" data-lesion-id="${lesion.id}" style="padding: 10px 20px; background: #3B82F6; color: white; border: none; border-radius: 8px; font-size: 0.9rem; font-weight: 600; cursor: pointer;">Guardar</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Event listeners del modal
    modal.querySelector('.btn-close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.btn-cancel-comment').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.querySelector('.btn-save-comment').addEventListener('click', async () => {
        const comentarios = document.getElementById('modalComentariosText').value.trim();
        const lesionId = modal.querySelector('.btn-save-comment').dataset.lesionId;
        await guardarComentariosLesion(lesionId, comentarios);
        modal.remove();
    });
    
    // Cerrar al hacer clic fuera del modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

async function guardarComentariosLesion(lesionId, comentarios) {
    try {
        const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const lesionRef = doc(dbLesionados, 'lesiones', lesionId);
        
        await updateDoc(lesionRef, {
            notas: comentarios
        });
        
        // Actualizar el dato local
        const lesionIndex = lesionadosData.registros.findIndex(l => l.id === lesionId);
        if (lesionIndex !== -1) {
            lesionadosData.registros[lesionIndex].notas = comentarios;
        }
        
        // Recargar la UI
        updateLesionadosUI();
        
        console.log('✅ Comentarios guardados correctamente');
        mostrarNotificacionLesionado('Comentarios guardados correctamente', 'success');
        
    } catch (error) {
        console.error('❌ Error al guardar comentarios:', error);
        alert('Error al guardar los comentarios. Intenta de nuevo.');
    }
}

function mostrarNotificacionLesionado(mensaje, tipo = 'success') {
    const notif = document.createElement('div');
    notif.className = `notification ${tipo}`;
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${tipo === 'success' ? '#10B981' : '#3B82F6'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    notif.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            ${tipo === 'success' 
                ? '<polyline points="20 6 9 17 4 12"></polyline>' 
                : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>'
            }
        </svg>
        <span>${mensaje}</span>
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// Event listeners para filtros de Lesionados y Permisos
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners para Lesionados
    const lesionadosSearchInput = document.getElementById('lesionadosSearchInput');
    const lesionadosCategoryFilter = document.getElementById('lesionadosCategoryFilter');
    const lesionadosEstadoFilter = document.getElementById('lesionadosEstadoFilter');
    const lesionadosAtendidoFilter = document.getElementById('lesionadosAtendidoFilter');
    const lesionadosViewLimit = document.getElementById('lesionadosViewLimit');
    
    if (lesionadosSearchInput) {
        lesionadosSearchInput.addEventListener('input', (e) => {
            currentLesionadosBusqueda = e.target.value;
            applyLesionadosFilters();
        });
    }
    
    if (lesionadosCategoryFilter) {
        lesionadosCategoryFilter.addEventListener('change', (e) => {
            currentLesionadosCategoria = e.target.value;
            applyLesionadosFilters();
        });
    }
    
    if (lesionadosEstadoFilter) {
        lesionadosEstadoFilter.addEventListener('change', (e) => {
            currentLesionadosEstado = e.target.value;
            applyLesionadosFilters();
        });
    }
    
    if (lesionadosAtendidoFilter) {
        lesionadosAtendidoFilter.addEventListener('change', (e) => {
            currentLesionadosAtendido = e.target.value;
            applyLesionadosFilters();
        });
    }
    
    if (lesionadosViewLimit) {
        lesionadosViewLimit.addEventListener('change', async (e) => {
            currentLesionadosLimit = parseInt(e.target.value);
            await loadLesionados();
        });
    }
    
    // Event listeners para Permisos
    const permisosSearchInput = document.getElementById('permisosSearchInput');
    const permisosCategoryFilter = document.getElementById('permisosCategoryFilter');
    const permisosEstadoFilter = document.getElementById('permisosEstadoFilter');
    const permisosViewLimit = document.getElementById('permisosViewLimit');
    
    if (permisosSearchInput) {
        permisosSearchInput.addEventListener('input', (e) => {
            currentPermisosBusqueda = e.target.value;
            applyPermisosFilters();
        });
    }
    
    if (permisosCategoryFilter) {
        permisosCategoryFilter.addEventListener('change', (e) => {
            currentPermisosCategoria = e.target.value;
            applyPermisosFilters();
        });
    }
    
    if (permisosEstadoFilter) {
        permisosEstadoFilter.addEventListener('change', (e) => {
            currentPermisosEstado = e.target.value;
            applyPermisosFilters();
        });
    }
    
    if (permisosViewLimit) {
        permisosViewLimit.addEventListener('change', async (e) => {
            currentPermisosLimit = parseInt(e.target.value);
            await loadPermisos();
        });
    }
    
    // Event listeners para filtros de Mensualidades
    const mensualidadesSearchInput = document.getElementById('mensualidadesSearchInput');
    const mensualidadesCategoryFilter = document.getElementById('mensualidadesCategoryFilter');
    const mensualidadesMesFilter = document.getElementById('mensualidadesMesFilter');
    
    if (mensualidadesSearchInput) {
        mensualidadesSearchInput.addEventListener('input', (e) => {
            currentMensualidadesBusqueda = e.target.value;
            applyMensualidadesFilters();
        });
    }
    
    if (mensualidadesCategoryFilter) {
        mensualidadesCategoryFilter.addEventListener('change', (e) => {
            currentMensualidadesCategoria = e.target.value;
            applyMensualidadesFilters();
        });
    }
    
    if (mensualidadesMesFilter) {
        mensualidadesMesFilter.addEventListener('change', (e) => {
            currentMensualidadesMes = e.target.value;
            applyMensualidadesFilters();
        });
    }
    
    // Event listeners para filtros de Bajas
    const bajasSearchInput = document.getElementById('bajasSearch');
    const bajasCategoryFilter = document.getElementById('bajasCategoryFilter');
    
    if (bajasSearchInput) {
        bajasSearchInput.addEventListener('input', () => {
            applyBajasFilters();
        });
    }
    
    if (bajasCategoryFilter) {
        bajasCategoryFilter.addEventListener('change', () => {
            applyBajasFilters();
        });
    }
    
    // Configurar listeners de Exportar
    setupExportarListeners();
});

// ========================================
// FUNCIONALIDAD DE BAJAS
// ========================================
let bajasData = [];
let bajasFiltered = [];

// Cargar jugadores dados de baja
async function loadBajas() {
    const bajasGrid = document.getElementById('bajasGrid');
    const bajasTotal = document.getElementById('bajasTotal');
    
    if (!bajasGrid) return;
    
    await initFirebase();
    
    if (!db) {
        bajasGrid.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">Error al conectar con la base de datos</p>';
        return;
    }
    
    bajasGrid.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">Cargando jugadores dados de baja...</p>';
    
    try {
        const { collection, getDocs, query, where } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const jugadoresRef = collection(db, 'jugadores');
        
        // Cargar solo jugadores con activo: false
        const q = query(jugadoresRef, where('activo', '==', false));
        const snapshot = await getDocs(q);
        
        bajasData = [];
        snapshot.forEach((docSnapshot) => {
            bajasData.push({
                id: docSnapshot.id,
                ...docSnapshot.data()
            });
        });
        
        bajasData.sort((a, b) => {
            const nombreA = (a.nombreCompleto || '').toLowerCase();
            const nombreB = (b.nombreCompleto || '').toLowerCase();
            return nombreA.localeCompare(nombreB);
        });
        
        populateBajasCategoryFilter();
        applyBajasFilters();
        
        const sectionBajas = document.getElementById('section-bajas');
        if (sectionBajas) {
            sectionBajas.dataset.loaded = 'true';
        }
    } catch (error) {
        console.error('❌ Error al cargar bajas:', error);
        bajasGrid.innerHTML = '<p style="text-align: center; color: var(--rojo); padding: 40px;">Error al cargar jugadores dados de baja. Intenta de nuevo.</p>';
    }
}

// Poblar filtro de categorías para Bajas
function populateBajasCategoryFilter() {
    const bajasCategoryFilter = document.getElementById('bajasCategoryFilter');
    if (!bajasCategoryFilter) return;
    
    const todasLasCategorias = [
        'Alebrijes TDP',
        'Soles TDP',
        'Sub-18',
        'Sub-16',
        'Sub-14'
    ];
    
    const currentValue = bajasCategoryFilter.value || 'all';
    
    bajasCategoryFilter.innerHTML = '<option value="all" style="font-weight: 600; color: var(--naranja);">✓ Todas las categorías</option>' +
        todasLasCategorias.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    
    if (todasLasCategorias.includes(currentValue)) {
        bajasCategoryFilter.value = currentValue;
    } else {
        bajasCategoryFilter.value = 'all';
    }
}

// Aplicar filtros de Bajas
function applyBajasFilters() {
    const bajasGrid = document.getElementById('bajasGrid');
    const bajasTotal = document.getElementById('bajasTotal');
    
    if (!bajasGrid) return;
    
    const bajasSearchInput = document.getElementById('bajasSearch');
    const bajasCategoryFilter = document.getElementById('bajasCategoryFilter');
    
    const searchTerm = bajasSearchInput ? bajasSearchInput.value.trim().toLowerCase() : '';
    const category = bajasCategoryFilter ? bajasCategoryFilter.value : 'all';
    
    bajasFiltered = bajasData.filter(jugador => {
        const matchesCategory = category === 'all' || (jugador.categoria && jugador.categoria === category);
        const matchesSearch = !searchTerm || (jugador.nombreCompleto && jugador.nombreCompleto.toLowerCase().includes(searchTerm));
        return matchesCategory && matchesSearch;
    });
    
    if (bajasTotal) {
        bajasTotal.textContent = `${bajasFiltered.length} ${bajasFiltered.length === 1 ? 'jugador' : 'jugadores'}`;
    }
    
    renderBajas(bajasFiltered);
}

// Renderizar jugadores dados de baja
function renderBajas(list) {
    const bajasGrid = document.getElementById('bajasGrid');
    if (!bajasGrid) return;
    
    if (!list || list.length === 0) {
        bajasGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--gris-label); padding: 40px;">No se encontraron jugadores dados de baja</p>';
        return;
    }
    
    bajasGrid.innerHTML = list.map(jugador => createBajaCard(jugador)).join('');
    
    // Agregar event listeners a los botones
    bajasGrid.querySelectorAll('.baja-card').forEach(card => {
        const jugadorId = card.dataset.jugadorId;
        const jugador = list.find(j => j.id === jugadorId);
        if (jugador) {
            // Botón de recuperar
            const btnRecuperar = card.querySelector('.btn-recuperar');
            if (btnRecuperar) {
                btnRecuperar.addEventListener('click', (e) => {
                    e.stopPropagation();
                    recuperarJugador(jugador);
                });
            }
            
            // Botón de eliminar permanentemente
            const btnEliminar = card.querySelector('.btn-eliminar');
            if (btnEliminar) {
                btnEliminar.addEventListener('click', (e) => {
                    e.stopPropagation();
                    eliminarPermanentemente(jugador);
                });
            }
            
            // Click en la tarjeta para ver detalles
            card.addEventListener('click', () => {
                openJugadorModal(jugador);
            });
        }
    });
}

// Crear tarjeta de jugador dado de baja
function createBajaCard(jugador) {
    const nombreCompleto = jugador.nombreCompleto || `${jugador.nombres || ''} ${jugador.apellidoPaterno || ''} ${jugador.apellidoMaterno || ''}`.trim();
    const iniciales = nombreCompleto.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const categoria = jugador.categoria || 'Sin categoría';
    
    return `
        <div class="jugador-card baja-card" data-jugador-id="${jugador.id}">
            <div class="jugador-card-header">
                <div class="jugador-card-avatar" style="background: #FEE2E2; color: #DC2626;">
                    <span>${iniciales}</span>
                </div>
                <div class="jugador-card-info">
                    <h3 class="jugador-card-nombre">${nombreCompleto}</h3>
                    <p class="jugador-card-categoria">${categoria}</p>
                </div>
            </div>
            <div class="jugador-card-details">
                <div class="baja-actions" style="display: flex; gap: 10px; margin-top: 12px;">
                    <button class="btn btn-success btn-recuperar" style="flex: 1; padding: 10px; font-size: 14px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Recuperar</span>
                    </button>
                    <button class="btn btn-danger btn-eliminar" style="flex: 1; padding: 10px; font-size: 14px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                        <span>Eliminar</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Actualizar UI de Bajas
function updateBajasUI() {
    applyBajasFilters();
}

// Dar de baja a un jugador (cambiar activo: false)
async function darDeBajaJugador(jugadorId, jugadorData) {
    await initFirebase();
    
    if (!db) {
        throw new Error('Firebase no está inicializado');
    }
    
    try {
        const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const jugadorRef = doc(db, 'jugadores', jugadorId);
        
        await updateDoc(jugadorRef, {
            activo: false,
            fechaBaja: new Date().toISOString()
        });
        
        console.log('✅ Jugador dado de baja:', jugadorId);
        mostrarNotificacion('Jugador dado de baja exitosamente', 'success');
        
        // Recargar jugadores si estamos en esa vista (para que desaparezca de la lista)
        const sectionJugadores = document.getElementById('section-jugadores');
        if (sectionJugadores && sectionJugadores.style.display !== 'none') {
            sectionJugadores.dataset.loaded = 'false';
            loadJugadores();
        }
        
        // Recargar bajas si estamos en esa vista
        const sectionBajas = document.getElementById('section-bajas');
        if (sectionBajas && sectionBajas.style.display !== 'none') {
            sectionBajas.dataset.loaded = 'false';
            loadBajas();
        }
        
        return true;
    } catch (error) {
        console.error('❌ Error al dar de baja:', error);
        mostrarNotificacion('Error al dar de baja al jugador', 'error');
        throw error;
    }
}

// Recuperar jugador (cambiar activo: true)
async function recuperarJugador(jugador) {
    if (!confirm(`¿Estás seguro de que deseas recuperar a ${jugador.nombreCompleto || 'este jugador'}?`)) {
        return;
    }
    
    await initFirebase();
    
    if (!db) {
        mostrarNotificacion('Error al conectar con la base de datos', 'error');
        return;
    }
    
    try {
        const { doc, updateDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const jugadorRef = doc(db, 'jugadores', jugador.id);
        
        await updateDoc(jugadorRef, {
            activo: true,
            fechaRecuperacion: new Date().toISOString()
        });
        
        console.log('✅ Jugador recuperado:', jugador.id);
        mostrarNotificacion('Jugador recuperado exitosamente', 'success');
        
        // Recargar bajas
        const sectionBajas = document.getElementById('section-bajas');
        if (sectionBajas) {
            sectionBajas.dataset.loaded = 'false';
            loadBajas();
        }
        
        // Recargar jugadores si estamos en esa vista
        const sectionJugadores = document.getElementById('section-jugadores');
        if (sectionJugadores && sectionJugadores.style.display !== 'none') {
            sectionJugadores.dataset.loaded = 'false';
            loadJugadores();
        }
    } catch (error) {
        console.error('❌ Error al recuperar jugador:', error);
        mostrarNotificacion('Error al recuperar al jugador', 'error');
    }
}

// Eliminar permanentemente
async function eliminarPermanentemente(jugador) {
    if (!confirm(`¿Estás SEGURO de que deseas ELIMINAR PERMANENTEMENTE a ${jugador.nombreCompleto || 'este jugador'}?\n\nEsta acción NO se puede deshacer.`)) {
        return;
    }
    
    // Confirmación adicional
    if (!confirm('Esta es tu última oportunidad. ¿Realmente deseas eliminar este jugador de forma permanente?')) {
        return;
    }
    
    await initFirebase();
    
    if (!db) {
        mostrarNotificacion('Error al conectar con la base de datos', 'error');
        return;
    }
    
    try {
        const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const jugadorRef = doc(db, 'jugadores', jugador.id);
        
        await deleteDoc(jugadorRef);
        
        console.log('✅ Jugador eliminado permanentemente:', jugador.id);
        mostrarNotificacion('Jugador eliminado permanentemente', 'success');
        
        // Recargar bajas
        const sectionBajas = document.getElementById('section-bajas');
        if (sectionBajas) {
            sectionBajas.dataset.loaded = 'false';
            loadBajas();
        }
    } catch (error) {
        console.error('❌ Error al eliminar jugador:', error);
        mostrarNotificacion('Error al eliminar al jugador', 'error');
    }
}

// ========================================
// FUNCIONALIDAD DE EXPORTAR
// ========================================
function setupExportarListeners() {
    const btnGenerarPDF = document.getElementById('btnGenerarPDF');
    if (btnGenerarPDF) {
        btnGenerarPDF.addEventListener('click', async () => {
            const tipo = document.getElementById('exportarTipo')?.value;
            const fechaInicio = document.getElementById('exportarFechaInicio')?.value;
            const fechaFin = document.getElementById('exportarFechaFin')?.value;
            
            if (!tipo) {
                mostrarNotificacion('Por favor selecciona un tipo de reporte', 'error');
                return;
            }
            
            if (!fechaInicio || !fechaFin) {
                mostrarNotificacion('Por favor selecciona ambas fechas', 'error');
                return;
            }
            
            if (new Date(fechaInicio) > new Date(fechaFin)) {
                mostrarNotificacion('La fecha inicial no puede ser mayor que la fecha final', 'error');
                return;
            }
            
            btnGenerarPDF.disabled = true;
            btnGenerarPDF.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Generando PDF...</span>
            `;
            
            try {
                await generarPDF(tipo, fechaInicio, fechaFin);
                mostrarNotificacion('PDF generado exitosamente', 'success');
            } catch (error) {
                console.error('Error al generar PDF:', error);
                mostrarNotificacion('Error al generar el PDF', 'error');
            } finally {
                btnGenerarPDF.disabled = false;
                btnGenerarPDF.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>Generar PDF</span>
                `;
            }
        });
    }
}

// Función auxiliar para agregar marca de agua con logo
function addWatermark(doc, pageWidth, pageHeight) {
    return new Promise((resolve) => {
        const logoUrl = 'https://cdn.shopify.com/s/files/1/0763/5392/9451/files/03_TEOTIHUACAN_-_Fuerzas_Basicas.png?v=1749841591';
        
        // Crear imagen para marca de agua
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            try {
                // Agregar logo como marca de agua (centrado, semi-transparente)
                const logoWidth = 80;
                const logoHeight = 80;
                const xPos = (pageWidth - logoWidth) / 2;
                const y = (pageHeight - logoHeight) / 2;
                
                // Convertir imagen a base64 y agregar con opacidad
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.globalAlpha = 0.08; // Muy transparente para marca de agua
                ctx.drawImage(img, 0, 0);
                
                const imgData = canvas.toDataURL('image/png');
                doc.addImage(imgData, 'PNG', xPos, y, logoWidth, logoHeight, undefined, 'FAST');
                resolve();
            } catch (error) {
                console.warn('No se pudo agregar marca de agua:', error);
                resolve(); // Continuar aunque falle la marca de agua
            }
        };
        img.onerror = () => {
            console.warn('No se pudo cargar el logo para marca de agua');
            resolve(); // Continuar aunque falle
        };
        img.src = logoUrl;
    });
}

async function generarPDF(tipo, fechaInicio, fechaFin) {
    // Verificar permisos de exportar
    const exportarPermissions = currentUser?.permissions?.exportar || [];
    const hasFullAccess = exportarPermissions.includes('all');
    
    if (!hasFullAccess) {
        // Charly: solo puede exportar Lesionados y Jugadores
        if (!exportarPermissions.includes(tipo)) {
            throw new Error('No tienes permiso para exportar este tipo de reporte');
        }
    }
    
    if (!window.jspdf) {
        throw new Error('jsPDF no está cargado');
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const headerHeight = 60;
    let yPos = margin;
    
    // Colores
    const colorNaranja = [242, 101, 34];
    const colorGris = [107, 114, 128];
    const colorNegro = [28, 28, 28];
    const colorGrisClaro = [245, 247, 250];
    
    // Función para agregar marca de agua en cada página
    const addWatermarkToPage = async (pageNum) => {
        doc.setPage(pageNum);
        await addWatermark(doc, pageWidth, pageHeight);
    };
    
    // Encabezado mejorado con gradiente
    doc.setFillColor(...colorNaranja);
    doc.rect(0, 0, pageWidth, headerHeight, 'F');
    
    // Línea decorativa
    doc.setFillColor(255, 255, 255);
    doc.setGState(doc.GState({opacity: 0.1}));
    doc.rect(0, headerHeight - 5, pageWidth, 3, 'F');
    doc.setGState(doc.GState({opacity: 1}));
    
    // Título principal
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('Panel de Control', margin, 25);
    
    // Subtítulo
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const tipoTitulo = tipo.charAt(0).toUpperCase() + tipo.slice(1).replace(/([A-Z])/g, ' $1').trim();
    doc.text('Casa Club - Reporte de ' + tipoTitulo, margin, 35);
    
    // Período
    const fechaInicioFormateada = new Date(fechaInicio).toLocaleDateString('es-MX', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    const fechaFinFormateada = new Date(fechaFin).toLocaleDateString('es-MX', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    doc.setFontSize(10);
    doc.text(`Período: ${fechaInicioFormateada} - ${fechaFinFormateada}`, margin, 45);
    
    // Fecha de generación (más corta para que no se corte)
    const fechaGeneracion = new Date().toLocaleDateString('es-MX', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    doc.setFontSize(9);
    const fechaGenText = fechaGeneracion;
    const fechaGenWidth = doc.getTextWidth(fechaGenText);
    doc.text(fechaGenText, pageWidth - margin - fechaGenWidth, 45);
    
    yPos = headerHeight + 15;
    
    // Cargar datos según el tipo
    let datos = [];
    let estadisticas = {};
    
    console.log('📊 Cargando datos para PDF - Tipo:', tipo);
    
    try {
        switch(tipo) {
            case 'adeudos':
                await initFirebase();
                await initFirebaseMensualidades();
                if (db && dbMensualidades) {
                    console.log('🔄 Cargando mensualidades...');
                    await loadMensualidades();
                    console.log('✅ Mensualidades cargadas:', mensualidadesData);
                    datos = mensualidadesData.adeudos || [];
                    console.log('📋 Datos de adeudos:', datos.length);
                    estadisticas = {
                        total: datos.length,
                        totalAdeudado: datos.reduce((sum, j) => {
                            const mesesAdeudados = 12 - (j.mesesPagados ? (j.mesesPagados instanceof Set ? j.mesesPagados.size : j.mesesPagados.length) : 0);
                            const montoMensualidad = j.mensualidad?.monto || 0;
                            return sum + (mesesAdeudados * montoMensualidad);
                        }, 0)
                    };
                } else {
                    console.error('❌ No se pudo inicializar Firebase para adeudos');
                }
                break;
            case 'jugadores':
                await initFirebase();
                if (db) {
                    console.log('🔄 Cargando jugadores...');
                    await loadJugadores();
                    console.log('✅ Jugadores cargados:', jugadoresData.length);
                    // Filtrar por fecha de registro si existe
                    datos = jugadoresData.filter(j => {
                        if (!j.fechaRegistro && !j.fechaCreacion && !j.timestamp) return true;
                        const fechaReg = j.fechaRegistro ? new Date(j.fechaRegistro) : 
                                        (j.fechaCreacion ? new Date(j.fechaCreacion) : 
                                        (j.timestamp ? (j.timestamp.toDate ? j.timestamp.toDate() : new Date(j.timestamp)) : null));
                        if (!fechaReg) return true;
                        const fechaInicioObj = new Date(fechaInicio);
                        fechaInicioObj.setHours(0, 0, 0, 0);
                        const fechaFinObj = new Date(fechaFin);
                        fechaFinObj.setHours(23, 59, 59, 999);
                        return fechaReg >= fechaInicioObj && fechaReg <= fechaFinObj;
                    });
                    console.log('📋 Datos filtrados:', datos.length);
                    estadisticas = {
                        total: datos.length,
                        porCategoria: {}
                    };
                    datos.forEach(j => {
                        const cat = j.categoria || 'Sin categoría';
                        estadisticas.porCategoria[cat] = (estadisticas.porCategoria[cat] || 0) + 1;
                    });
                } else {
                    console.error('❌ No se pudo inicializar Firebase para jugadores');
                }
                break;
            case 'permisos':
                await initFirebasePermisos();
                if (dbPermisos) {
                    console.log('🔄 Cargando permisos...');
                    await loadPermisos();
                    console.log('✅ Permisos cargados:', permisosData);
                    const todosPermisos = permisosData.registros || [];
                    datos = todosPermisos.filter(p => {
                        if (!p.fecha && !p.timestamp) return false;
                        const fecha = p.fecha ? new Date(p.fecha) : 
                                     (p.timestamp ? (p.timestamp.toDate ? p.timestamp.toDate() : new Date(p.timestamp)) : null);
                        if (!fecha) return false;
                        const fechaInicioObj = new Date(fechaInicio);
                        fechaInicioObj.setHours(0, 0, 0, 0);
                        const fechaFinObj = new Date(fechaFin);
                        fechaFinObj.setHours(23, 59, 59, 999);
                        return fecha >= fechaInicioObj && fecha <= fechaFinObj;
                    });
                    console.log('📋 Datos filtrados:', datos.length);
                    estadisticas = {
                        total: datos.length,
                        aprobados: datos.filter(p => p.estado === 'Aprobado').length,
                        pendientes: datos.filter(p => p.estado === 'Pendiente' || !p.estado).length,
                        rechazados: datos.filter(p => p.estado === 'Rechazado').length
                    };
                } else {
                    console.error('❌ No se pudo inicializar Firebase para permisos');
                }
                break;
            case 'lesionados':
                await initFirebaseLesionados();
                if (dbLesionados) {
                    console.log('🔄 Cargando lesionados...');
                    await loadLesionados();
                    console.log('✅ Lesionados cargados:', lesionadosData);
                    const todosLesionados = lesionadosData.registros || [];
                    datos = todosLesionados.filter(l => {
                        if (!l.fechaLesion && !l.timestamp) return false;
                        const fecha = l.fechaLesion ? new Date(l.fechaLesion) : 
                                     (l.timestamp ? (l.timestamp.toDate ? l.timestamp.toDate() : new Date(l.timestamp)) : null);
                        if (!fecha) return false;
                        const fechaInicioObj = new Date(fechaInicio);
                        fechaInicioObj.setHours(0, 0, 0, 0);
                        const fechaFinObj = new Date(fechaFin);
                        fechaFinObj.setHours(23, 59, 59, 999);
                        return fecha >= fechaInicioObj && fecha <= fechaFinObj;
                    });
                    console.log('📋 Datos filtrados:', datos.length);
                    estadisticas = {
                        total: datos.length,
                        atendidos: datos.filter(l => l.atendido === true).length,
                        noAtendidos: datos.filter(l => l.atendido !== true).length,
                        recuperados: datos.filter(l => l.estado === 'Recuperado').length
                    };
                } else {
                    console.error('❌ No se pudo inicializar Firebase para lesionados');
                }
                break;
            case 'comedor':
                await initFirebase();
                await initFirebaseComedor();
                if (db && dbComedor) {
                    console.log('🔄 Cargando comedor...');
                    await loadComedor();
                    console.log('✅ Comedor cargado:', comedorData);
                    const todosRegistros = comedorData.registrosAgrupados || [];
                    datos = todosRegistros.filter(c => {
                        if (!c.ingresos || c.ingresos.length === 0) return false;
                        return c.ingresos.some(i => {
                            const fecha = i.fecha ? new Date(i.fecha) : 
                                        (i.timestamp ? (i.timestamp.toDate ? i.timestamp.toDate() : new Date(i.timestamp)) : null);
                            if (!fecha) return false;
                            const fechaInicioObj = new Date(fechaInicio);
                            fechaInicioObj.setHours(0, 0, 0, 0);
                            const fechaFinObj = new Date(fechaFin);
                            fechaFinObj.setHours(23, 59, 59, 999);
                            return fecha >= fechaInicioObj && fecha <= fechaFinObj;
                        });
                    });
                    console.log('📋 Datos filtrados:', datos.length);
                    estadisticas = {
                        total: datos.length,
                        totalIngresos: datos.reduce((sum, c) => sum + (c.ingresos?.length || 0), 0)
                    };
                } else {
                    console.error('❌ No se pudo inicializar Firebase para comedor');
                }
                break;
            case 'casaclub':
                await initFirebaseCasaClub();
                if (dbCasaClub) {
                    console.log('🔄 Cargando casa club...');
                    await loadCasaClub();
                    console.log('✅ Casa Club cargado:', casaClubData);
                    const todosRegistros = casaClubData.registros || [];
                    console.log('📋 Total registros antes de filtrar:', todosRegistros.length);
                    
                    // Mapear y procesar los datos correctamente
                    datos = todosRegistros.map(c => {
                        // Determinar tipo basado en horaEntrada o horaSalida
                        let tipo = 'N/A';
                        if (c.horaEntrada && !c.horaSalida) {
                            tipo = 'Entrada';
                        } else if (c.horaSalida && !c.horaEntrada) {
                            tipo = 'Salida';
                        } else if (c.horaEntrada && c.horaSalida) {
                            tipo = 'Entrada/Salida';
                        }
                        
                        // Obtener fecha del timestamp o fecha
                        let fechaRegistro = null;
                        if (c.timestamp) {
                            fechaRegistro = c.timestamp.toDate ? c.timestamp.toDate() : new Date(c.timestamp);
                        } else if (c.fecha) {
                            fechaRegistro = new Date(c.fecha);
                        }
                        
                        return {
                            ...c,
                            nombreCompleto: c.nombre || 'Sin nombre',
                            tipo: tipo,
                            hora: c.horaEntrada || c.horaSalida || 'N/A',
                            fecha: fechaRegistro ? fechaRegistro.toISOString().split('T')[0] : (c.fecha || null)
                        };
                    }).filter(c => {
                        // Filtrar por rango de fechas
                        if (!c.fecha && !c.timestamp) return true; // Incluir si no tiene fecha
                        const fecha = c.timestamp ? (c.timestamp.toDate ? c.timestamp.toDate() : new Date(c.timestamp)) : 
                                     (c.fecha ? new Date(c.fecha) : null);
                        if (!fecha) return true;
                        const fechaInicioObj = new Date(fechaInicio);
                        fechaInicioObj.setHours(0, 0, 0, 0);
                        const fechaFinObj = new Date(fechaFin);
                        fechaFinObj.setHours(23, 59, 59, 999);
                        return fecha >= fechaInicioObj && fecha <= fechaFinObj;
                    });
                    
                    console.log('📋 Datos procesados y filtrados:', datos.length);
                    console.log('📋 Primeros datos:', datos.slice(0, 3));
                    
                    estadisticas = {
                        total: datos.length,
                        entradas: datos.filter(c => c.tipo === 'Entrada' || c.tipo === 'Entrada/Salida').length,
                        salidas: datos.filter(c => c.tipo === 'Salida' || c.tipo === 'Entrada/Salida').length
                    };
                } else {
                    console.error('❌ No se pudo inicializar Firebase para casa club');
                }
                break;
        }
    } catch (error) {
        console.error('❌ Error al cargar datos para PDF:', error);
        throw error;
    }
    
    console.log('📊 Datos finales para PDF:', { tipo, total: datos.length, estadisticas });
    
    // Sección de Estadísticas mejorada (más espacio después del header)
    yPos += 10;
    
    // Fondo para estadísticas
    const statsBoxHeight = 35;
    doc.setFillColor(...colorGrisClaro);
    doc.roundedRect(margin, yPos, pageWidth - (margin * 2), statsBoxHeight, 3, 3, 'F');
    
    // Título de estadísticas
    doc.setTextColor(...colorNegro);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Estadísticas Generales', margin + 5, yPos + 8);
    
    // Línea decorativa
    doc.setDrawColor(...colorNaranja);
    doc.setLineWidth(0.5);
    doc.line(margin + 5, yPos + 10, margin + 60, yPos + 10);
    
    yPos += 15;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colorGris);
    
    // Mostrar estadísticas según el tipo en formato mejorado
    if (tipo === 'adeudos') {
        doc.setTextColor(...colorNegro);
        doc.setFont('helvetica', 'bold');
        doc.text(`Total de jugadores con adeudos:`, margin + 5, yPos);
        doc.setTextColor(...colorNaranja);
        doc.text(`${estadisticas.total || 0}`, margin + 65, yPos);
        yPos += 7;
        doc.setTextColor(...colorNegro);
        doc.setFont('helvetica', 'bold');
        doc.text(`Monto total adeudado:`, margin + 5, yPos);
        doc.setTextColor(...colorNaranja);
        doc.text(`$${(estadisticas.totalAdeudado || 0).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, margin + 50, yPos);
    } else if (tipo === 'jugadores') {
        doc.setTextColor(...colorNegro);
        doc.setFont('helvetica', 'bold');
        doc.text(`Total de jugadores:`, margin + 5, yPos);
        doc.setTextColor(...colorNaranja);
        doc.text(`${estadisticas.total || 0}`, margin + 45, yPos);
        yPos += 7;
        if (estadisticas.porCategoria && Object.keys(estadisticas.porCategoria).length > 0) {
            doc.setFontSize(9);
            doc.setTextColor(...colorGris);
            doc.text('Por categoría:', margin + 5, yPos);
            yPos += 5;
            const categorias = Object.keys(estadisticas.porCategoria);
            for (let i = 0; i < categorias.length; i++) {
                const cat = categorias[i];
                if (yPos > margin + statsBoxHeight - 5) {
                    yPos += 10; // Continuar después del box
                    break;
                }
                doc.text(`  • ${cat}: ${estadisticas.porCategoria[cat]}`, margin + 8, yPos);
                yPos += 4;
            }
        }
    } else if (tipo === 'permisos') {
        doc.setTextColor(...colorNegro);
        doc.setFont('helvetica', 'bold');
        doc.text(`Total de permisos:`, margin + 5, yPos);
        doc.setTextColor(...colorNaranja);
        doc.text(`${estadisticas.total || 0}`, margin + 45, yPos);
        yPos += 7;
        doc.setFontSize(9);
        doc.setTextColor(...colorGris);
        doc.text(`Aprobados: ${estadisticas.aprobados || 0}`, margin + 5, yPos);
        yPos += 5;
        doc.text(`Pendientes: ${estadisticas.pendientes || 0}`, margin + 5, yPos);
        yPos += 5;
        doc.text(`Rechazados: ${estadisticas.rechazados || 0}`, margin + 5, yPos);
    } else if (tipo === 'lesionados') {
        doc.setTextColor(...colorNegro);
        doc.setFont('helvetica', 'bold');
        doc.text(`Total de lesiones:`, margin + 5, yPos);
        doc.setTextColor(...colorNaranja);
        doc.text(`${estadisticas.total || 0}`, margin + 45, yPos);
        yPos += 7;
        doc.setFontSize(9);
        doc.setTextColor(...colorGris);
        doc.text(`Atendidos: ${estadisticas.atendidos || 0}`, margin + 5, yPos);
        yPos += 5;
        doc.text(`No atendidos: ${estadisticas.noAtendidos || 0}`, margin + 5, yPos);
        yPos += 5;
        doc.text(`Recuperados: ${estadisticas.recuperados || 0}`, margin + 5, yPos);
    } else if (tipo === 'comedor') {
        doc.setTextColor(...colorNegro);
        doc.setFont('helvetica', 'bold');
        doc.text(`Total de jugadores:`, margin + 5, yPos);
        doc.setTextColor(...colorNaranja);
        doc.text(`${estadisticas.total || 0}`, margin + 45, yPos);
        yPos += 7;
        doc.setTextColor(...colorNegro);
        doc.setFont('helvetica', 'bold');
        doc.text(`Total de ingresos:`, margin + 5, yPos);
        doc.setTextColor(...colorNaranja);
        doc.text(`${estadisticas.totalIngresos || 0}`, margin + 40, yPos);
    } else if (tipo === 'casaclub') {
        doc.setTextColor(...colorNegro);
        doc.setFont('helvetica', 'bold');
        doc.text(`Total de registros:`, margin + 5, yPos);
        doc.setTextColor(...colorNaranja);
        doc.text(`${estadisticas.total || 0}`, margin + 45, yPos);
        yPos += 7;
        doc.setFontSize(9);
        doc.setTextColor(...colorGris);
        doc.text(`Entradas: ${estadisticas.entradas || 0}`, margin + 5, yPos);
        yPos += 5;
        doc.text(`Salidas: ${estadisticas.salidas || 0}`, margin + 5, yPos);
    }
    
    yPos = margin + statsBoxHeight + 15;
    
    // Tabla de datos
    if (datos.length > 0) {
        if (yPos > pageHeight - 40) {
            doc.addPage();
            yPos = margin;
        }
        
        doc.setTextColor(...colorNegro);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Detalle de Registros', margin, yPos);
        yPos += 8;
        
        // Encabezado de tabla mejorado
        doc.setFillColor(...colorNaranja);
        doc.roundedRect(margin, yPos - 6, pageWidth - (margin * 2), 9, 2, 2, 'F');
        
        doc.setFontSize(9);
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        
        let colWidths = [];
        let headers = [];
        
        if (tipo === 'adeudos') {
            headers = ['Nombre', 'Categoría', 'Meses Adeudados', 'Monto Adeudado'];
            colWidths = [60, 40, 40, 40];
        } else if (tipo === 'jugadores') {
            headers = ['Nombre', 'Categoría', 'Posición', 'Edad'];
            colWidths = [70, 40, 40, 30];
        } else if (tipo === 'permisos') {
            headers = ['Nombre', 'Categoría', 'Motivo', 'Fecha', 'Estado'];
            colWidths = [50, 30, 40, 30, 30];
        } else if (tipo === 'lesionados') {
            headers = ['Nombre', 'Categoría', 'Tipo Lesión', 'Fecha', 'Estado'];
            colWidths = [50, 30, 40, 30, 30];
        } else if (tipo === 'comedor') {
            headers = ['Nombre', 'Categoría', 'Ingresos'];
            colWidths = [70, 50, 60];
        } else if (tipo === 'casaclub') {
            headers = ['Nombre', 'Categoría', 'Tipo', 'Fecha', 'Hora'];
            colWidths = [50, 35, 25, 35, 25];
        }
        
        // Calcular posiciones centradas para headers
        let xPos = margin;
        headers.forEach((header, idx) => {
            const headerWidth = doc.getTextWidth(header);
            const colCenter = xPos + (colWidths[idx] / 2);
            doc.text(header, colCenter - (headerWidth / 2), yPos);
            xPos += colWidths[idx];
        });
        
        yPos += 8;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(...colorGris);
        
        // Filas de datos
        datos.slice(0, 50).forEach((item, index) => {
            if (yPos > pageHeight - 30) {
                doc.addPage();
                yPos = margin;
                // Reimprimir encabezados
                doc.setFillColor(...colorNaranja);
                doc.roundedRect(margin, yPos - 6, pageWidth - (margin * 2), 9, 2, 2, 'F');
                doc.setFontSize(9);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(255, 255, 255);
                xPos = margin;
                headers.forEach((header, idx) => {
                    const headerWidth = doc.getTextWidth(header);
                    const colCenter = xPos + (colWidths[idx] / 2);
                    doc.text(header, colCenter - (headerWidth / 2), yPos);
                    xPos += colWidths[idx];
                });
                yPos += 8;
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(8);
                doc.setTextColor(...colorGris);
            }
            
            // Alternar color de fondo para filas
            if (index % 2 === 0) {
                doc.setFillColor(250, 250, 250);
                doc.rect(margin, yPos - 4, pageWidth - (margin * 2), 5, 'F');
            }
            
            xPos = margin;
            let rowData = [];
            
            if (tipo === 'adeudos') {
                const mesesAdeudados = 12 - (item.mesesPagados ? (item.mesesPagados instanceof Set ? item.mesesPagados.size : item.mesesPagados.length) : 0);
                const montoMensualidad = item.mensualidad?.monto || 0;
                const montoAdeudado = mesesAdeudados * montoMensualidad;
                rowData = [
                    (item.nombreCompleto || 'N/A').substring(0, 25),
                    (item.categoria || 'N/A').substring(0, 15),
                    mesesAdeudados.toString(),
                    `$${montoAdeudado.toLocaleString('es-MX', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
                ];
            } else if (tipo === 'jugadores') {
                rowData = [
                    (item.nombreCompleto || 'N/A').substring(0, 30),
                    (item.categoria || 'N/A').substring(0, 15),
                    (item.posicion || 'N/A').substring(0, 15),
                    (item.edadCompleta || `${item.edad || 0} años`).substring(0, 10)
                ];
            } else if (tipo === 'permisos') {
                rowData = [
                    (item.nombreCompleto || 'N/A').substring(0, 20),
                    (item.categoria || 'N/A').substring(0, 12),
                    (item.motivo || 'N/A').substring(0, 18),
                    item.fecha ? new Date(item.fecha).toLocaleDateString('es-MX') : 'N/A',
                    (item.estado || 'N/A').substring(0, 12)
                ];
            } else if (tipo === 'lesionados') {
                rowData = [
                    (item.nombreCompleto || 'N/A').substring(0, 20),
                    (item.categoria || 'N/A').substring(0, 12),
                    (item.tipoLesion || 'N/A').substring(0, 18),
                    item.fechaLesion ? new Date(item.fechaLesion).toLocaleDateString('es-MX') : 'N/A',
                    (item.estado || 'N/A').substring(0, 12)
                ];
            } else if (tipo === 'comedor') {
                const totalIngresos = item.ingresos?.length || 0;
                rowData = [
                    (item.nombreCompleto || 'N/A').substring(0, 30),
                    (item.categoria || 'N/A').substring(0, 20),
                    `${totalIngresos} ingreso(s)`
                ];
            } else if (tipo === 'casaclub') {
                // Obtener fecha formateada
                let fechaFormateada = 'N/A';
                if (item.timestamp) {
                    const fecha = item.timestamp.toDate ? item.timestamp.toDate() : new Date(item.timestamp);
                    fechaFormateada = fecha.toLocaleDateString('es-MX');
                } else if (item.fecha) {
                    fechaFormateada = new Date(item.fecha).toLocaleDateString('es-MX');
                }
                
                rowData = [
                    (item.nombreCompleto || item.nombre || 'N/A').substring(0, 20),
                    (item.categoria || 'N/A').substring(0, 12),
                    (item.tipo || 'N/A').substring(0, 10),
                    fechaFormateada.substring(0, 12),
                    (item.hora || item.horaEntrada || item.horaSalida || 'N/A').substring(0, 10)
                ];
            }
            
            // Alinear datos a la izquierda con padding
            rowData.forEach((cell, idx) => {
                const cellText = cell || 'N/A';
                const cellX = xPos + 2; // Pequeño padding izquierdo
                doc.text(cellText, cellX, yPos);
                xPos += colWidths[idx];
            });
            
            yPos += 6;
            
            // Línea separadora
            if (index < datos.length - 1) {
                doc.setDrawColor(225, 232, 237);
                doc.line(margin, yPos - 2, pageWidth - margin, yPos - 2);
            }
        });
        
        if (datos.length > 50) {
            yPos += 5;
            doc.setFontSize(9);
            doc.setTextColor(...colorGris);
            doc.text(`Nota: Se muestran los primeros 50 registros de ${datos.length} totales`, margin, yPos);
        }
    } else {
        yPos += 10;
        doc.setTextColor(...colorGris);
        doc.setFontSize(11);
        doc.text('No se encontraron registros para el período seleccionado', margin, yPos);
    }
    
    // Agregar marca de agua y pie de página en todas las páginas
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        
        // Agregar marca de agua
        await addWatermark(doc, pageWidth, pageHeight);
        
        // Línea separadora del pie de página
        doc.setDrawColor(225, 232, 237);
        doc.line(margin, pageHeight - 15, pageWidth - margin, pageHeight - 15);
        
        // Pie de página con información mejorado
        const footerY = pageHeight - 12;
        doc.setFontSize(7);
        doc.setTextColor(...colorGris);
        
        // Copyright (centrado)
        const copyrightText = `© ${new Date().getFullYear()} Panel de Control - Casa Club. Todos los derechos reservados.`;
        const copyrightWidth = doc.getTextWidth(copyrightText);
        doc.text(copyrightText, (pageWidth - copyrightWidth) / 2, footerY);
        
        // Número de página (derecha)
        const paginaText = `Página ${i} de ${totalPages}`;
        const paginaWidth = doc.getTextWidth(paginaText);
        doc.text(paginaText, pageWidth - margin - paginaWidth, footerY);
        
        // Fecha de generación (izquierda, más corta)
        const fechaGen = new Date().toLocaleDateString('es-MX', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        doc.text(`Gen: ${fechaGen}`, margin, footerY);
    }
    
    // Descargar PDF
    const nombreArchivo = `Reporte_${tipo}_${fechaInicio}_${fechaFin}.pdf`;
    doc.save(nombreArchivo);
}

// ========================================
// FUNCIONALIDAD DE BALANCE
// ========================================
let balanceData = {
    todosLosRegistros: [],
    porTipoPago: {},
    porConceptoPago: {},
    porCategoria: {},
    totalIngresos: 0,
    totalRegistros: 0
};

let balanceDataOriginal = {
    todosLosRegistros: [],
    porTipoPago: {},
    porConceptoPago: {},
    porCategoria: {},
    totalIngresos: 0,
    totalRegistros: 0
};

let balanceCharts = {
    tipoPago: null,
    conceptoPago: null,
    categorias: null
};

let balanceFiltros = {
    fecha: null,
    mes: 'all'
};

async function loadBalance() {
    console.log('📊 Cargando datos de Balance...');
    
    await initFirebaseMensualidades();
    
    if (!dbMensualidades) {
        console.error('❌ Error: No se pudo inicializar Firebase Mensualidades');
        const balanceTipoPago = document.getElementById('balanceTipoPago');
        const balanceConceptoPago = document.getElementById('balanceConceptoPago');
        const balanceCategorias = document.getElementById('balanceCategorias');
        
        if (balanceTipoPago) balanceTipoPago.innerHTML = '<p style="text-align: center; color: var(--rojo); padding: 40px;">Error al conectar con la base de datos</p>';
        if (balanceConceptoPago) balanceConceptoPago.innerHTML = '<p style="text-align: center; color: var(--rojo); padding: 40px;">Error al conectar con la base de datos</p>';
        if (balanceCategorias) balanceCategorias.innerHTML = '<p style="text-align: center; color: var(--rojo); padding: 40px;">Error al conectar con la base de datos</p>';
        return;
    }
    
    try {
        const { collection, getDocs } = await import('https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js');
        const mensualidadesRef = collection(dbMensualidades, 'mensualidadesRegistros');
        const mensualidadesSnapshot = await getDocs(mensualidadesRef);
        
        const todosLosRegistros = [];
        const porTipoPago = {};
        const porConceptoPago = {};
        const porCategoria = {};
        let totalIngresos = 0;
        
        mensualidadesSnapshot.forEach((doc) => {
            const data = doc.data();
            const registro = {
                id: doc.id,
                nombreCompleto: data.nombreCompleto || 'Sin nombre',
                categoria: data.categoria || 'Sin categoría',
                tipoPago: data.tipoPago || 'N/A',
                conceptoPago: data.conceptoPago || data.conceptoPagoOriginal || 'N/A',
                monto: data.monto || 0,
                fechaPago: data.fechaPago || null,
                mes: data.mes || null,
                folioComprobante: data.folioComprobante || 'N/A',
                timestamp: data.timestamp || null,
                fechaCreacion: data.fechaCreacion || null
            };
            
            todosLosRegistros.push(registro);
            totalIngresos += registro.monto;
            
            // Agrupar por Tipo de Pago
            const tipoPago = registro.tipoPago;
            if (!porTipoPago[tipoPago]) {
                porTipoPago[tipoPago] = {
                    total: 0,
                    cantidad: 0,
                    registros: []
                };
            }
            porTipoPago[tipoPago].total += registro.monto;
            porTipoPago[tipoPago].cantidad += 1;
            porTipoPago[tipoPago].registros.push(registro);
            
            // Agrupar por Concepto de Pago
            const conceptoPago = registro.conceptoPago;
            if (!porConceptoPago[conceptoPago]) {
                porConceptoPago[conceptoPago] = {
                    total: 0,
                    cantidad: 0,
                    registros: []
                };
            }
            porConceptoPago[conceptoPago].total += registro.monto;
            porConceptoPago[conceptoPago].cantidad += 1;
            porConceptoPago[conceptoPago].registros.push(registro);
            
            // Agrupar por Categoría
            const categoria = registro.categoria;
            if (!porCategoria[categoria]) {
                porCategoria[categoria] = {
                    total: 0,
                    cantidad: 0,
                    registros: []
                };
            }
            porCategoria[categoria].total += registro.monto;
            porCategoria[categoria].cantidad += 1;
            porCategoria[categoria].registros.push(registro);
        });
        
        // Filtrar registros con tipoPago === 'Manual'
        const registrosFiltrados = todosLosRegistros.filter(reg => reg.tipoPago !== 'Manual');
        
        // Recalcular datos sin "Manual"
        const porTipoPagoFiltrado = {};
        const porConceptoPagoFiltrado = {};
        const porCategoriaFiltrado = {};
        let totalIngresosFiltrado = 0;
        
        registrosFiltrados.forEach(registro => {
            totalIngresosFiltrado += registro.monto;
            
            // Agrupar por Tipo de Pago (sin Manual)
            const tipoPago = registro.tipoPago;
            if (!porTipoPagoFiltrado[tipoPago]) {
                porTipoPagoFiltrado[tipoPago] = {
                    total: 0,
                    cantidad: 0,
                    registros: []
                };
            }
            porTipoPagoFiltrado[tipoPago].total += registro.monto;
            porTipoPagoFiltrado[tipoPago].cantidad += 1;
            porTipoPagoFiltrado[tipoPago].registros.push(registro);
            
            // Agrupar por Concepto de Pago
            const conceptoPago = registro.conceptoPago;
            if (!porConceptoPagoFiltrado[conceptoPago]) {
                porConceptoPagoFiltrado[conceptoPago] = {
                    total: 0,
                    cantidad: 0,
                    registros: []
                };
            }
            porConceptoPagoFiltrado[conceptoPago].total += registro.monto;
            porConceptoPagoFiltrado[conceptoPago].cantidad += 1;
            porConceptoPagoFiltrado[conceptoPago].registros.push(registro);
            
            // Agrupar por Categoría
            const categoria = registro.categoria;
            if (!porCategoriaFiltrado[categoria]) {
                porCategoriaFiltrado[categoria] = {
                    total: 0,
                    cantidad: 0,
                    registros: []
                };
            }
            porCategoriaFiltrado[categoria].total += registro.monto;
            porCategoriaFiltrado[categoria].cantidad += 1;
            porCategoriaFiltrado[categoria].registros.push(registro);
        });
        
        balanceDataOriginal = {
            todosLosRegistros: registrosFiltrados,
            porTipoPago: porTipoPagoFiltrado,
            porConceptoPago: porConceptoPagoFiltrado,
            porCategoria: porCategoriaFiltrado,
            totalIngresos: totalIngresosFiltrado,
            totalRegistros: registrosFiltrados.length
        };
        
        // Aplicar filtros iniciales (ninguno)
        aplicarFiltrosBalance();
        
        // Actualizar el balance compacto del dashboard
        loadSummaryBalance();
        
        console.log('✅ Balance cargado:', balanceData);
        
        updateBalanceUI();
        setupBalanceFilters();
    } catch (error) {
        console.error('❌ Error al cargar datos de Balance:', error);
        const balanceTipoPago = document.getElementById('balanceTipoPago');
        const balanceConceptoPago = document.getElementById('balanceConceptoPago');
        const balanceCategorias = document.getElementById('balanceCategorias');
        
        if (balanceTipoPago) balanceTipoPago.innerHTML = `<p style="text-align: center; color: var(--rojo); padding: 40px;">Error: ${error.message}</p>`;
        if (balanceConceptoPago) balanceConceptoPago.innerHTML = `<p style="text-align: center; color: var(--rojo); padding: 40px;">Error: ${error.message}</p>`;
        if (balanceCategorias) balanceCategorias.innerHTML = `<p style="text-align: center; color: var(--rojo); padding: 40px;">Error: ${error.message}</p>`;
    }
}

function aplicarFiltrosBalance() {
    let registrosFiltrados = [...balanceDataOriginal.todosLosRegistros];
    
    // Filtrar por fecha
    if (balanceFiltros.fecha) {
        const fechaFiltro = new Date(balanceFiltros.fecha);
        fechaFiltro.setHours(0, 0, 0, 0);
        
        registrosFiltrados = registrosFiltrados.filter(reg => {
            if (!reg.fechaPago && !reg.timestamp && !reg.fechaCreacion) return false;
            
            let fechaRegistro = null;
            if (reg.fechaPago) {
                fechaRegistro = new Date(reg.fechaPago);
            } else if (reg.timestamp) {
                fechaRegistro = reg.timestamp.toDate ? reg.timestamp.toDate() : new Date(reg.timestamp);
            } else if (reg.fechaCreacion) {
                fechaRegistro = new Date(reg.fechaCreacion);
            }
            
            if (!fechaRegistro) return false;
            fechaRegistro.setHours(0, 0, 0, 0);
            
            return fechaRegistro.getTime() === fechaFiltro.getTime();
        });
    }
    
    // Filtrar por mes
    if (balanceFiltros.mes !== 'all') {
        registrosFiltrados = registrosFiltrados.filter(reg => {
            if (reg.mes) {
                // Si tiene campo mes, comparar directamente
                const meses = {
                    'Enero': '01', 'Febrero': '02', 'Marzo': '03', 'Abril': '04',
                    'Mayo': '05', 'Junio': '06', 'Julio': '07', 'Agosto': '08',
                    'Septiembre': '09', 'Octubre': '10', 'Noviembre': '11', 'Diciembre': '12'
                };
                const mesRegistro = meses[reg.mes] || reg.mes;
                return mesRegistro === balanceFiltros.mes;
            }
            
            // Si no tiene campo mes, extraer de fecha
            let fechaRegistro = null;
            if (reg.fechaPago) {
                fechaRegistro = new Date(reg.fechaPago);
            } else if (reg.timestamp) {
                fechaRegistro = reg.timestamp.toDate ? reg.timestamp.toDate() : new Date(reg.timestamp);
            } else if (reg.fechaCreacion) {
                fechaRegistro = new Date(reg.fechaCreacion);
            }
            
            if (!fechaRegistro) return false;
            const mesRegistro = String(fechaRegistro.getMonth() + 1).padStart(2, '0');
            return mesRegistro === balanceFiltros.mes;
        });
    }
    
    // Recalcular datos filtrados
    const porTipoPagoFiltrado = {};
    const porConceptoPagoFiltrado = {};
    const porCategoriaFiltrado = {};
    let totalIngresosFiltrado = 0;
    
    registrosFiltrados.forEach(registro => {
        totalIngresosFiltrado += registro.monto;
        
        // Agrupar por Tipo de Pago
        const tipoPago = registro.tipoPago;
        if (!porTipoPagoFiltrado[tipoPago]) {
            porTipoPagoFiltrado[tipoPago] = {
                total: 0,
                cantidad: 0,
                registros: []
            };
        }
        porTipoPagoFiltrado[tipoPago].total += registro.monto;
        porTipoPagoFiltrado[tipoPago].cantidad += 1;
        porTipoPagoFiltrado[tipoPago].registros.push(registro);
        
        // Agrupar por Concepto de Pago
        const conceptoPago = registro.conceptoPago;
        if (!porConceptoPagoFiltrado[conceptoPago]) {
            porConceptoPagoFiltrado[conceptoPago] = {
                total: 0,
                cantidad: 0,
                registros: []
            };
        }
        porConceptoPagoFiltrado[conceptoPago].total += registro.monto;
        porConceptoPagoFiltrado[conceptoPago].cantidad += 1;
        porConceptoPagoFiltrado[conceptoPago].registros.push(registro);
        
        // Agrupar por Categoría
        const categoria = registro.categoria;
        if (!porCategoriaFiltrado[categoria]) {
            porCategoriaFiltrado[categoria] = {
                total: 0,
                cantidad: 0,
                registros: []
            };
        }
        porCategoriaFiltrado[categoria].total += registro.monto;
        porCategoriaFiltrado[categoria].cantidad += 1;
        porCategoriaFiltrado[categoria].registros.push(registro);
    });
    
    balanceData = {
        todosLosRegistros: registrosFiltrados,
        porTipoPago: porTipoPagoFiltrado,
        porConceptoPago: porConceptoPagoFiltrado,
        porCategoria: porCategoriaFiltrado,
        totalIngresos: totalIngresosFiltrado,
        totalRegistros: registrosFiltrados.length
    };
}

function setupBalanceFilters() {
    const filtroFecha = document.getElementById('balanceFiltroFecha');
    const filtroMes = document.getElementById('balanceFiltroMes');
    const limpiarFiltros = document.getElementById('balanceLimpiarFiltros');
    
    if (filtroFecha) {
        filtroFecha.addEventListener('change', (e) => {
            balanceFiltros.fecha = e.target.value || null;
            aplicarFiltrosBalance();
            updateBalanceUI();
        });
    }
    
    if (filtroMes) {
        filtroMes.addEventListener('change', (e) => {
            balanceFiltros.mes = e.target.value;
            aplicarFiltrosBalance();
            updateBalanceUI();
        });
    }
    
    if (limpiarFiltros) {
        limpiarFiltros.addEventListener('click', () => {
            balanceFiltros.fecha = null;
            balanceFiltros.mes = 'all';
            
            if (filtroFecha) filtroFecha.value = '';
            if (filtroMes) filtroMes.value = 'all';
            
            aplicarFiltrosBalance();
            updateBalanceUI();
        });
    }
}

function updateBalanceUI() {
    console.log('🔄 Actualizando UI de Balance...');
    
    // Actualizar resumen general
    const balanceTotalIngresos = document.getElementById('balanceTotalIngresos');
    const balanceTotalRegistros = document.getElementById('balanceTotalRegistros');
    const balancePromedio = document.getElementById('balancePromedio');
    
    if (balanceTotalIngresos) {
        balanceTotalIngresos.textContent = `$${balanceData.totalIngresos.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    
    if (balanceTotalRegistros) {
        balanceTotalRegistros.textContent = balanceData.totalRegistros.toLocaleString('es-MX');
    }
    
    if (balancePromedio) {
        const promedio = balanceData.totalRegistros > 0 ? balanceData.totalIngresos / balanceData.totalRegistros : 0;
        balancePromedio.textContent = `$${promedio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    
    // Renderizar gráficas interactivas
    renderBalanceCharts();
    
    // Renderizar desglose detallado por Tipo de Pago
    renderBalanceTipoPago();
    
    // Renderizar desglose detallado por Concepto de Pago
    renderBalanceConceptoPago();
    
    // Renderizar desglose detallado por Categorías
    renderBalanceCategorias();
}

function renderBalanceCharts() {
    if (!window.Chart) {
        console.warn('Chart.js no está cargado');
        return;
    }
    
    // Destruir gráficas anteriores si existen
    if (balanceCharts.tipoPago) balanceCharts.tipoPago.destroy();
    if (balanceCharts.conceptoPago) balanceCharts.conceptoPago.destroy();
    if (balanceCharts.categorias) balanceCharts.categorias.destroy();
    
    // Colores para las gráficas
    const colorNaranja = '#f26522';
    const colorNaranjaOscuro = '#e0561d';
    const colorVerde = '#10B981';
    const colorAzul = '#3B82F6';
    const colorAmarillo = '#F59E0B';
    const colorMorado = '#8B5CF6';
    const colorRosa = '#EC4899';
    const colorCyan = '#06B6D4';
    
    const colores = [colorNaranja, colorVerde, colorAzul, colorAmarillo, colorMorado, colorRosa, colorCyan, colorNaranjaOscuro];
    
    // Gráfica de Tipo de Pago (Doughnut)
    const ctxTipoPago = document.getElementById('chartTipoPago');
    if (ctxTipoPago) {
        const tiposPago = Object.keys(balanceData.porTipoPago);
        const labels = tiposPago;
        const data = tiposPago.map(tipo => balanceData.porTipoPago[tipo].total);
        const backgroundColors = tiposPago.map((_, i) => colores[i % colores.length]);
        
        balanceCharts.tipoPago = new Chart(ctxTipoPago, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColors,
                    borderWidth: 0,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12,
                                weight: '600'
                            },
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: $${value.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Gráfica de Concepto de Pago (Pie)
    const ctxConceptoPago = document.getElementById('chartConceptoPago');
    if (ctxConceptoPago) {
        const conceptosPago = Object.keys(balanceData.porConceptoPago);
        const labels = conceptosPago;
        const data = conceptosPago.map(concepto => balanceData.porConceptoPago[concepto].total);
        const backgroundColors = conceptosPago.map((_, i) => colores[i % colores.length]);
        
        balanceCharts.conceptoPago = new Chart(ctxConceptoPago, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColors,
                    borderWidth: 0,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12,
                                weight: '600'
                            },
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: $${value.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Gráfica de Categorías (Bar)
    const ctxCategorias = document.getElementById('chartCategorias');
    if (ctxCategorias) {
        const categorias = Object.keys(balanceData.porCategoria);
        categorias.sort((a, b) => balanceData.porCategoria[b].total - balanceData.porCategoria[a].total);
        const labels = categorias;
        const data = categorias.map(cat => balanceData.porCategoria[cat].total);
        const backgroundColors = categorias.map((_, i) => colores[i % colores.length]);
        
        balanceCharts.categorias = new Chart(ctxCategorias, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Ingresos por Categoría',
                    data: data,
                    backgroundColor: backgroundColors,
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed.y || 0;
                                const total = balanceData.totalIngresos;
                                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                                return `Total: $${value.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${percentage}%)`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString('es-MX');
                            },
                            font: {
                                size: 11
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 11,
                                weight: '600'
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

function renderBalanceTipoPago() {
    const container = document.getElementById('balanceTipoPago');
    if (!container) return;
    
    const tiposPago = Object.keys(balanceData.porTipoPago);
    
    if (tiposPago.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">No hay registros de pagos</p>';
        return;
    }
    
    // Ordenar por total descendente
    tiposPago.sort((a, b) => balanceData.porTipoPago[b].total - balanceData.porTipoPago[a].total);
    
    const colores = ['#f26522', '#10B981', '#3B82F6', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4'];
    
    let html = '<div style="display: grid; gap: 16px;">';
    
    tiposPago.forEach((tipoPago, index) => {
        const data = balanceData.porTipoPago[tipoPago];
        const porcentaje = balanceData.totalIngresos > 0 ? ((data.total / balanceData.totalIngresos) * 100).toFixed(1) : 0;
        const color = colores[index % colores.length];
        
        html += `
            <div style="background: linear-gradient(135deg, ${color}15 0%, ${color}05 100%); border-radius: var(--radius); padding: 24px; border: 2px solid ${color}30; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 12px; height: 12px; border-radius: 50%; background: ${color};"></div>
                        <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--negro); margin: 0;">${tipoPago}</h4>
                    </div>
                    <span style="font-size: 0.9rem; font-weight: 700; color: ${color}; background: ${color}15; padding: 6px 14px; border-radius: 20px; border: 1px solid ${color}30;">${porcentaje}%</span>
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 16px;">
                    <div style="background: var(--blanco); border-radius: var(--radius-sm); padding: 16px; border-left: 3px solid ${color};">
                        <p style="font-size: 0.8rem; color: var(--gris-label); margin: 0 0 8px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Total</p>
                        <p style="font-size: 1.6rem; font-weight: 800; color: var(--negro); margin: 0;">$${data.total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div style="background: var(--blanco); border-radius: var(--radius-sm); padding: 16px; border-left: 3px solid ${color};">
                        <p style="font-size: 0.8rem; color: var(--gris-label); margin: 0 0 8px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Registros</p>
                        <p style="font-size: 1.6rem; font-weight: 800; color: var(--negro); margin: 0;">${data.cantidad.toLocaleString('es-MX')}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function renderBalanceConceptoPago() {
    const container = document.getElementById('balanceConceptoPago');
    if (!container) return;
    
    const conceptosPago = Object.keys(balanceData.porConceptoPago);
    
    if (conceptosPago.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">No hay registros de conceptos de pago</p>';
        return;
    }
    
    // Ordenar por total descendente
    conceptosPago.sort((a, b) => balanceData.porConceptoPago[b].total - balanceData.porConceptoPago[a].total);
    
    const colores = ['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4', '#f26522'];
    
    let html = '<div style="display: grid; gap: 16px;">';
    
    conceptosPago.forEach((conceptoPago, index) => {
        const data = balanceData.porConceptoPago[conceptoPago];
        const porcentaje = balanceData.totalIngresos > 0 ? ((data.total / balanceData.totalIngresos) * 100).toFixed(1) : 0;
        const color = colores[index % colores.length];
        
        html += `
            <div style="background: linear-gradient(135deg, ${color}15 0%, ${color}05 100%); border-radius: var(--radius); padding: 24px; border: 2px solid ${color}30; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 12px; height: 12px; border-radius: 50%; background: ${color};"></div>
                        <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--negro); margin: 0;">${conceptoPago}</h4>
                    </div>
                    <span style="font-size: 0.9rem; font-weight: 700; color: ${color}; background: ${color}15; padding: 6px 14px; border-radius: 20px; border: 1px solid ${color}30;">${porcentaje}%</span>
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 16px;">
                    <div style="background: var(--blanco); border-radius: var(--radius-sm); padding: 16px; border-left: 3px solid ${color};">
                        <p style="font-size: 0.8rem; color: var(--gris-label); margin: 0 0 8px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Total</p>
                        <p style="font-size: 1.6rem; font-weight: 800; color: var(--negro); margin: 0;">$${data.total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div style="background: var(--blanco); border-radius: var(--radius-sm); padding: 16px; border-left: 3px solid ${color};">
                        <p style="font-size: 0.8rem; color: var(--gris-label); margin: 0 0 8px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Registros</p>
                        <p style="font-size: 1.6rem; font-weight: 800; color: var(--negro); margin: 0;">${data.cantidad.toLocaleString('es-MX')}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function renderBalanceCategorias() {
    const container = document.getElementById('balanceCategorias');
    if (!container) return;
    
    const categorias = Object.keys(balanceData.porCategoria);
    
    if (categorias.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gris-label); padding: 40px;">No hay registros por categorías</p>';
        return;
    }
    
    // Ordenar por total descendente
    categorias.sort((a, b) => balanceData.porCategoria[b].total - balanceData.porCategoria[a].total);
    
    const colores = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4', '#f26522', '#EF4444'];
    
    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">';
    
    categorias.forEach((categoria, index) => {
        const data = balanceData.porCategoria[categoria];
        const porcentaje = balanceData.totalIngresos > 0 ? ((data.total / balanceData.totalIngresos) * 100).toFixed(1) : 0;
        const color = colores[index % colores.length];
        
        html += `
            <div style="background: linear-gradient(135deg, ${color}15 0%, ${color}05 100%); border-radius: var(--radius); padding: 24px; border: 2px solid ${color}30; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 12px; height: 12px; border-radius: 50%; background: ${color};"></div>
                        <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--negro); margin: 0;">${categoria}</h4>
                    </div>
                    <span style="font-size: 0.85rem; font-weight: 700; color: ${color}; background: ${color}15; padding: 5px 12px; border-radius: 20px; border: 1px solid ${color}30;">${porcentaje}%</span>
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 16px;">
                    <div style="background: var(--blanco); border-radius: var(--radius-sm); padding: 14px; border-left: 3px solid ${color};">
                        <p style="font-size: 0.75rem; color: var(--gris-label); margin: 0 0 6px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Total</p>
                        <p style="font-size: 1.4rem; font-weight: 800; color: var(--negro); margin: 0;">$${data.total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div style="background: var(--blanco); border-radius: var(--radius-sm); padding: 14px; border-left: 3px solid ${color};">
                        <p style="font-size: 0.75rem; color: var(--gris-label); margin: 0 0 6px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Registros</p>
                        <p style="font-size: 1.4rem; font-weight: 800; color: var(--negro); margin: 0;">${data.cantidad.toLocaleString('es-MX')}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// ========================================
// RESPONSIVE
// ========================================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});

// ========================================
// CONSOLE INFO
// ========================================
console.log('%c🏆 Dashboard - Panel de Control Mejorado', 'color: #f26522; font-size: 18px; font-weight: bold; padding: 8px 12px; background: #fff5ed; border-radius: 6px;');
console.log('%c✅ Sistema con carruseles cargado correctamente', 'color: #28a745; font-weight: bold; font-size: 14px;');
console.log('%c📊 Datos de ejemplo cargados', 'color: #555; font-size: 13px;');
console.log('%c🎠 Carruseles activos (5 tarjetas por vista):', 'color: #f26522; font-weight: bold;');
console.log('  - Adeudos:', mockData.adeudos.length, 'jugadores');
console.log('  - Lesionados:', mockData.lesionados.length, 'jugadores');
console.log('  - Permisos:', mockData.permisos.length, 'jugadores');
console.log('  - Comedor:', mockData.comedor.length, 'jugadores');
