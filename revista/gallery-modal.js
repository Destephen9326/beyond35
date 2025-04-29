// gallery-modal.js - Funcionalidad para el modal de galería (100% independiente)

document.addEventListener('DOMContentLoaded', function() {
    // Crear elementos del modal y agregarlos al DOM
    function createGalleryModal() {
        // Verificar si el modal ya existe
        if (document.getElementById('galleryModalOverlay')) {
            return;
        }
        
        // Crear el overlay del modal
        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'galleryModalOverlay';
        modalOverlay.className = 'gallery-modal-overlay';
        
        // Por defecto, el modal NO tiene la clase especial ni el HTML especial
        modalOverlay.innerHTML = `
            <div class="gallery-modal-container">
                <button class="gallery-modal-close" id="galleryModalClose">&times;</button>
                <div class="gallery-modal-content" id="galleryModalContent">
                    <div class="gallery-modal-header">
                        <div class="number">01</div>
                        <div class="title">BEYOND</div>
                        <div class="number">35</div>
                    </div>
                    
                    <div class="gallery-modal-image">
                        <img src="" alt="Imagen de Galería" id="galleryModalImg">
                    </div>
                    
                    <div class="gallery-modal-side-label" id="galleryModalSideLabel">NOMBRE</div>
                    
                    <div class="gallery-modal-publish-info" id="galleryModalPublishInfo">
                        <span class="publish-label">PUBLICADO POR:</span>
                        <span class="publish-curve"></span>
                        <span class="publish-date" id="galleryModalDate">ABRIL 06, 2025</span>
                    </div>
                    
                    <div class="gallery-modal-body">
                        <h2 class="gallery-modal-title">Lorem ipsum dolor sit amet, consectetuer adipiscing</h2>
                        
                        <div class="gallery-modal-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </div>
                        
                        <div class="gallery-modal-placeholder"></div>
                        
                        <div class="gallery-modal-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </div>
                        
                        <div class="gallery-modal-placeholder"></div>
                        
                        <div class="gallery-modal-divider"></div>
                        
                        <div class="gallery-modal-text" style="text-transform: uppercase;">
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER
                        </div>
                        
                        <div class="gallery-modal-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </div>
                        
                        <div class="gallery-modal-form">
                            <div class="gallery-modal-text" style="text-transform: uppercase;">
                                LOREM IPSUM DOLOR SIT AMET, CONSECTETUER
                            </div>
                            
                            <div class="gallery-modal-form-title">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            </div>
                            
                            <div class="gallery-modal-form-field">
                                <input type="text" placeholder="FIRST NAME">
                            </div>
                            
                            <div class="gallery-modal-form-field">
                                <input type="text" placeholder="LAST NAME">
                            </div>
                            
                            <div class="gallery-modal-form-field">
                                <input type="email" placeholder="YOUR EMAIL (REQUIRED)">
                            </div>
                        </div>
                    </div>
                    
                    <div class="gallery-modal-nav">
                        <button class="gallery-modal-nav-btn">HOME</button>
                    </div>
                </div>
            </div>
        `;
        
        // Agregar el modal al body
        document.body.appendChild(modalOverlay);
        
        // Configurar eventos para el modal
        setupGalleryModalEvents();
    }
    
    // Configurar eventos para el modal
    function setupGalleryModalEvents() {
        const modalOverlay = document.getElementById('galleryModalOverlay');
        const closeButton = document.getElementById('galleryModalClose');
        const homeButton = document.querySelector('.gallery-modal-nav-btn');
        
        // Cerrar modal al hacer clic en el botón de cierre
        if (closeButton) {
            closeButton.addEventListener('click', closeGalleryModal);
        }
        
        // Cerrar modal al hacer clic en el botón de home
        if (homeButton) {
            homeButton.addEventListener('click', closeGalleryModal);
        }
        
        // Cerrar modal al hacer clic en el overlay (fuera del contenido)
        if (modalOverlay) {
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    closeGalleryModal();
                }
            });
        }
        
        // Cerrar modal con la tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeGalleryModal();
            }
        });
    }
    
    // Abrir el modal con la imagen seleccionada
    function openGalleryModal(imgSrc, title) {
        const modalOverlay = document.getElementById('galleryModalOverlay');
        const modalContent = document.getElementById('galleryModalContent');
        if (modalContent) {
            modalContent.className = 'gallery-modal-content element1';
            modalContent.innerHTML = `
                <div class="gallery-modal-header">
                    <span class="number">01</span>
                    <span class="title">BEYOND</span>
                    <span class="number">35</span>
                </div>
                <div class="gallery-modal-image" style="position:relative;">
                    <span class="gallery-modal-side-label">NOMBRE</span>
                    <img src="${imgSrc}" alt="Imagen de Galería" id="galleryModalImg">
                </div>
                <div class="gallery-modal-publish-info">
                    <span class="publish-label">PUBLICADO POR:</span>
                    <span class="publish-curve">
                      <svg viewBox="0 0 220 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 38 Q110 2 218 38" stroke="white" stroke-width="2" fill="none"/>
                      </svg>
                    </span>
                    <span class="publish-date">ABRIL 06, 2025</span>
                </div>
                <div class="gallery-modal-body" style="padding:0; margin:0;">
                    <!-- Bloque 1: Título grande y párrafo -->
                    <div class="gallery-modal-row titulo-parrafo">
                        <div class="titulo">Lorem ipsum\ndolor sit amet,\nconsectetue r adipiscing</div>
                        <div class="parrafo">sed Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</div>
                    </div>
                    <!-- Bloque 2: Imagen izquierda, párrafo derecha -->
                    <div class="gallery-modal-row imagen-parrafo">
                        <div class="imagen"></div>
                        <div class="parrafo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</div>
                    </div>
                    <!-- Bloque 3: Imagen centrada grande -->
                    <div class="gallery-modal-row imagen-centrada">
                        <div class="imagen-grande"></div>
                    </div>
                    <!-- Bloque 4: Título pequeño+SVG+párrafo -->
                    <div class="gallery-modal-row titulo-svg-parrafo">
                        <div class="titulo-svg">
                            <div class="titulo-chico">LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</div>
                            <span class="svg-curve">
                              <svg viewBox="0 0 220 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:120px; height:22px;">
                                <path d="M2 38 Q110 2 218 38" stroke="white" stroke-width="2" fill="none"/>
                              </svg>
                            </span>
                        </div>
                        <div class="parrafo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait</div>
                    </div>
                    <!-- Bloque 5: Imagen centrada grande -->
                    <div class="gallery-modal-row imagen-centrada">
                        <div class="imagen-grande"></div>
                    </div>
                    <!-- Bloque 6: Título pequeño+SVG+párrafo -->
                    <div class="gallery-modal-row titulo-svg-parrafo">
                        <div class="titulo-svg">
                            <div class="titulo-chico">LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</div>
                            <span class="svg-curve">
                              <svg viewBox="0 0 220 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:120px; height:22px;">
                                <path d="M2 38 Q110 2 218 38" stroke="white" stroke-width="2" fill="none"/>
                              </svg>
                            </span>
                        </div>
                        <div class="parrafo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait</div>
                    </div>
                    <!-- Bloque 7: Imagen centrada grande -->
                    <div class="gallery-modal-row imagen-centrada">
                        <div class="imagen-grande"></div>
                    </div>
                    <!-- Formulario -->
                    <form class="gallery-modal-form" autocomplete="off">
                        <div class="gallery-modal-form-title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</div>
                        <div class="gallery-modal-form-field"><input type="text" placeholder="FIRST NAME"></div>
                        <div class="gallery-modal-form-field"><input type="text" placeholder="LAST NAME"></div>
                        <div class="gallery-modal-form-field"><input type="email" placeholder="YOUR EMAIL (REQUIRED)"></div>
                        <div class="gallery-modal-form-field"><input type="text" placeholder="SIGN"></div>
                        <div class="gallery-modal-form-footer">
                            <button type="button" class="gallery-modal-nav-btn">HOME</button>
                            <span>
                              <svg width="60" height="22" viewBox="0 0 60 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 20 Q30 2 58 20" stroke="white" stroke-width="2" fill="none"/>
                                <path d="M55 18 L58 20 L55 22" stroke="white" stroke-width="2" fill="none"/>
                              </svg>
                            </span>
                        </div>
                    </form>
                </div>
            `;
            // Botón de cierre
            if (!modalContent.querySelector('.gallery-modal-close')) {
                const closeBtn = document.createElement('button');
                closeBtn.className = 'gallery-modal-close';
                closeBtn.id = 'galleryModalClose';
                closeBtn.innerHTML = '&times;';
                closeBtn.onclick = closeGalleryModal;
                modalContent.parentNode.insertBefore(closeBtn, modalContent);
            }
            // Botón HOME funcional
            const homeBtn = modalContent.querySelector('.gallery-modal-nav-btn');
            if (homeBtn) homeBtn.onclick = closeGalleryModal;
        }
        if (modalOverlay) {
            modalOverlay.style.display = 'block';
            setTimeout(function() {
                modalOverlay.classList.add('active');
            }, 10);
            document.body.classList.add('gallery-modal-open');
            const hamburgerBtn = document.getElementById('toggleMenu');
            if (hamburgerBtn && window.innerWidth <= 768) {
                hamburgerBtn.style.display = 'none';
            }
        }
    }
    
    // Cerrar el modal
    function closeGalleryModal() {
        const modalOverlay = document.getElementById('galleryModalOverlay');
        
        if (modalOverlay) {
            // Iniciar animación de cierre
            modalOverlay.classList.remove('active');
            
            // Después de la animación, ocultar el modal
            setTimeout(function() {
                modalOverlay.style.display = 'none';
                
                // Permitir scroll en el body nuevamente
                document.body.classList.remove('gallery-modal-open');
                
                // Mostrar el botón hamburguesa si existe y estamos en móvil
                const hamburgerBtn = document.getElementById('toggleMenu');
                if (hamburgerBtn && window.innerWidth <= 768) {
                    hamburgerBtn.style.display = 'flex';
                }
            }, 300);
        }
    }
    
    // Agregar el modal al DOM
    createGalleryModal();
    
    // Agregar eventos a las imágenes de la galería
    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach(function(img) {
        img.addEventListener('click', function() {
            // Obtener la URL de la imagen
            const imgSrc = this.src;
            
            // Obtener el título si existe (desde el atributo alt o desde un elemento cercano)
            const title = this.alt || this.closest('.gallery-item').querySelector('h5')?.textContent || 'Imagen';
            
            // Abrir el modal
            openGalleryModal(imgSrc, title);
        });
    });
    
    // Hacer funciones disponibles globalmente
    window.openGalleryModal = openGalleryModal;
    window.closeGalleryModal = closeGalleryModal;
});