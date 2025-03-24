function showModal(message) {
    closeModalBolita();
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

function closeModalBolita() {
    document.getElementById('modalOverlayBolita').style.display = 'none';
}

function confirmContact() {
    window.location.href = "https://wa.me//+50577530939";
}

document.getElementById('university').addEventListener('click', function () {
    showModal('Universidad Nacional Agraria');
});

document.getElementById('members').addEventListener('click', function () {
    showModal('Creado por JenierMods OFC');
});

document.getElementById('members').addEventListener('click', function () {
    showModal('\n•JANER OTONIEL GUIDO MENDOZA•\n•JENIER OSMAN ALVARADO ORTEGA•\n•YANDRI EXEQUIEL WINCHANG LOPÉZ•\n•FRANNER JOSÉ VELAZQUEZ CALDERON•\n•EVERTH JETZE MONTOYA LUQUEZ•\n•EZEQUIEL JOSÉ MEDINA MENDOZA•');
});

function contactCreator() {
    closeModal();
    document.getElementById('modalOverlayBolita').style.display = 'flex';
}
        function toggleMenu() {
            const menuContainer = document.getElementById('menuContainer');
            if (menuContainer.style.display === "none") {
                menuContainer.style.display = "block";
            } else {
                menuContainer.style.display = "none";
            }
        }
        document.querySelectorAll('.section').forEach(section => {
            section.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
            });
            section.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
        const music = document.getElementById('backgroundMusic');
        
        function playMusic() {
            music.play();
        }
        
        function pauseMusic() {
            music.pause();
        }
