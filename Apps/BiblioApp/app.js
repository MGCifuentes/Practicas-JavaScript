(function(){
    const content = document.getElementById('content');
    const header = document.getElementById('header');

    const libros = [
        { id: 1, titulo: 'Introducción a la Gestión de Requisitos', autor: 'Varios', copias: 3, descripcion: 'Breve introducción a técnicas y documentación.' },
        { id: 2, titulo: 'Ingeniería de Software: Un Enfoque Práctico', autor: 'Pressman, R.', copias: 0, descripcion: 'Clásico sobre procesos, métricas y diseño.' },
        { id: 3, titulo: 'UML Gota a Gota', autor: 'Fowler, M.', copias: 1, descripcion: 'Modelado UML y buenas prácticas.' }
    ];

    const salas = [
        { id: 1, nombre: 'Sala Grupal 2', capacidad: 6, reservado: false },
        { id: 2, nombre: 'Sala Grupal 3', capacidad: 6, reservado: false },
        { id: 3, nombre: 'Sala Grupal 5', capacidad: 4, reservado: false }
    ];

    function setHeader() {
        header.innerHTML = `
            <div class="brand">
                <span class="logo-dot"></span>
                <span>BiblioApp - Sistema de Gestión</span>
            </div>
            <div>
                <button class="btn secondary" id="menuBtn">Menú</button>
            </div>
        `;
        document.getElementById('menuBtn').addEventListener('click', renderMenu);
    }

    function notify(message, timeout = 2800){
        const t = document.createElement('div');
        t.className = 'toast';
        t.textContent = message;
        document.body.appendChild(t);
        setTimeout(()=> t.remove(), timeout);
    }

    function renderMenu(){
        content.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <div class="controls">
                <button class="btn" id="catalogBtn">Consultar Catálogo</button>
                <button class="btn" id="roomsBtn">Reservar Sala</button>
                <button class="btn secondary" id="aboutBtn">Acerca</button>
            </div>
            <div class="center small">Seleccione una opción para empezar</div>
        `;
        content.appendChild(wrapper);
        document.getElementById('catalogBtn').addEventListener('click', ()=> mostrarCatalogo());
        document.getElementById('roomsBtn').addEventListener('click', ()=> mostrarSalas());
        document.getElementById('aboutBtn').addEventListener('click', ()=> {
            content.innerHTML = `<div class="small">BiblioApp - Demo interactiva. UI minimal para pruebas.</div>`;
            addBack();
        });
    }

    function addBack(){
        const back = document.createElement('div');
        back.style.marginTop = '12px';
        back.innerHTML = `<button class="btn secondary" id="backBtn">← Volver</button>`;
        content.appendChild(back);
        document.getElementById('backBtn').addEventListener('click', renderMenu);
    }

    function mostrarCatalogo(filter = ''){
        content.innerHTML = '';
        const container = document.createElement('div');

        const controls = document.createElement('div');
        controls.className = 'controls';
        const input = document.createElement('input');
        input.className = 'search-box';
        input.placeholder = 'Buscar título o autor...';
        input.value = filter;
        const btnSearch = document.createElement('button');
        btnSearch.className = 'btn secondary';
        btnSearch.textContent = 'Buscar';
        const btnMenu = document.createElement('button');
        btnMenu.className = 'btn secondary';
        btnMenu.textContent = 'Volver al Menú';

        controls.appendChild(input);
        controls.appendChild(btnSearch);
        controls.appendChild(btnMenu);

        container.appendChild(controls);

        const list = document.createElement('div');
        list.className = 'list';

        const query = (str) => str.trim().toLowerCase();
        const q = query(filter);

        libros.filter(book => {
            if(!q) return true;
            return book.titulo.toLowerCase().includes(q) || book.autor.toLowerCase().includes(q);
        }).forEach(book => {
            const card = document.createElement('div');
            card.className = 'card';
            const meta = document.createElement('div');
            meta.className = 'meta';
            meta.innerHTML = `<div class="title">"${book.titulo}"</div>
                              <div class="subtitle">Autor: ${book.autor}</div>
                              <div class="small">Descripción: ${book.descripcion || 'N/A'}</div>`;

            const actions = document.createElement('div');
            const status = document.createElement('span');
            status.className = `badge ${book.copias > 0 ? 'available' : 'unavailable'}`;
            status.textContent = book.copias > 0 ? `Disponible (${book.copias} copia(s))` : 'No disponible (0)';

            const btnDetails = document.createElement('button');
            btnDetails.className = 'btn secondary';
            btnDetails.textContent = 'Ver detalles';
            btnDetails.addEventListener('click', ()=> verDetalles(book.id));

            const btnLoan = document.createElement('button');
            btnLoan.className = 'btn';
            btnLoan.textContent = 'Solicitar préstamo';
            btnLoan.disabled = (book.copias <= 0);
            btnLoan.addEventListener('click', ()=> solicitarPrestamo(book.id));

            actions.appendChild(status);
            actions.appendChild(document.createElement('br'));
            actions.appendChild(btnDetails);
            actions.appendChild(document.createTextNode(' '));
            actions.appendChild(btnLoan);

            card.appendChild(meta);
            card.appendChild(actions);
            list.appendChild(card);
        });

        container.appendChild(list);
        content.appendChild(container);

        btnSearch.addEventListener('click', ()=> mostrarCatalogo(input.value));
        input.addEventListener('keyup', (e)=> {
            if(e.key === 'Enter') mostrarCatalogo(input.value);
        });
        btnMenu.addEventListener('click', renderMenu);

        addBack();
    }

    function verDetalles(id){
        const book = libros.find(b => b.id === id);
        if(!book) return;
        content.innerHTML = '';
        const card = document.createElement('div');
        card.className = 'card';
        card.style.flexDirection = 'column';
        card.innerHTML = `
            <div class="meta">
                <div class="title">"${book.titulo}"</div>
                <div class="subtitle">Autor: ${book.autor}</div>
                <div class="small" style="margin-top:8px">Descripción: ${book.descripcion || 'N/A'}</div>
                <div class="small" style="margin-top:8px">Copias disponibles: <strong>${book.copias}</strong></div>
            </div>
            <div style="margin-top:10px">
                <button class="btn" id="loanNow">${book.copias>0 ? 'Solicitar préstamo' : 'No disponible'}</button>
                <button class="btn secondary" id="backToCatalog">Volver</button>
            </div>
        `;
        content.appendChild(card);
        document.getElementById('backToCatalog').addEventListener('click', ()=> mostrarCatalogo());
        const loanBtn = document.getElementById('loanNow');
        loanBtn.disabled = (book.copias <= 0);
        loanBtn.addEventListener('click', ()=> solicitarPrestamo(book.id));
    }

    function solicitarPrestamo(id){
        const book = libros.find(b => b.id === id);
        if(!book) return;
        if(book.copias <= 0){
            notify('No hay copias disponibles para préstamo.');
            return;
        }
        book.copias -= 1;
        notify(`Préstamo registrado: "${book.titulo}". Copias restantes: ${book.copias}`);
        mostrarCatalogo();
    }

    function mostrarSalas(){
        content.innerHTML = '';
        const container = document.createElement('div');

        const controls = document.createElement('div');
        controls.className = 'controls';
        const btnRefresh = document.createElement('button');
        btnRefresh.className = 'btn';
        btnRefresh.textContent = 'Actualizar';
        const btnMenu = document.createElement('button');
        btnMenu.className = 'btn secondary';
        btnMenu.textContent = 'Volver al Menú';
        controls.appendChild(btnRefresh);
        controls.appendChild(btnMenu);

        container.appendChild(controls);

        const list = document.createElement('div');
        list.className = 'list';

        salas.forEach(sala => {
            const card = document.createElement('div');
            card.className = 'card';
            const meta = document.createElement('div');
            meta.className = 'meta';
            meta.innerHTML = `<div class="title">${sala.nombre}</div>
                              <div class="subtitle">Capacidad: ${sala.capacidad}</div>`;

            const actions = document.createElement('div');
            const status = document.createElement('span');
            status.className = `badge ${sala.reservado ? 'unavailable' : 'available'}`;
            status.textContent = sala.reservado ? 'Reservada' : 'Disponible';

            const btnReserve = document.createElement('button');
            btnReserve.className = 'btn';
            btnReserve.textContent = sala.reservado ? 'Cancelar reserva' : 'Reservar';
            btnReserve.addEventListener('click', ()=> {
                reservarSala(sala.id);
            });

            actions.appendChild(status);
            actions.appendChild(document.createElement('br'));
            actions.appendChild(btnReserve);

            card.appendChild(meta);
            card.appendChild(actions);
            list.appendChild(card);
        });

        container.appendChild(list);
        content.appendChild(container);

        btnRefresh.addEventListener('click', mostrarSalas);
        btnMenu.addEventListener('click', renderMenu);

        addBack();
    }

    function reservarSala(id){
        const sala = salas.find(s => s.id === id);
        if(!sala) return;
        sala.reservado = !sala.reservado;
        notify(sala.reservado ? `${sala.nombre} reservada.` : `${sala.nombre} reserva cancelada.`);
        mostrarSalas();
    }

    window.buscarLibro = function(term){
        mostrarCatalogo(term || '');
    }

    // Initialize
    setHeader();
    renderMenu();
})();