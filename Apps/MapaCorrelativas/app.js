const nodeWidth=190;
const nodeHeight=50;
const marginX=250;
const marginY=30;

function calcularNiveles() {
  const niveles = {};

  Object.keys(materiasCarrera).forEach(id => {
    if (materiasCarrera[id].correlativas.length === 0) niveles[id] = 0;
  });

  let cambios=true, iteraciones = 0;
  while (cambios && iteraciones < 20) {
    cambios=false;
    iteraciones++;
    Object.keys(materiasCarrera).forEach(id => {
      const materia = materiasCarrera[id];
      if (niveles[id] === undefined && materia.correlativas.length > 0) {
        const nivelesCorrelativas=materia.correlativas
          .map(corrId => niveles[corrId])
          .filter(n => n !== undefined);

        if (nivelesCorrelativas.length === materia.correlativas.length) {
          niveles[id] = Math.max(...nivelesCorrelativas) + 1;
          cambios = true;
        }
      }
    });
  }

  return niveles;
}

function organizarPorNiveles() {
  const niveles = calcularNiveles();
  const materiasPorNivel = {};

  Object.keys(niveles).forEach(id => {
    const nivel = niveles[id];
    if (!materiasPorNivel[nivel]) materiasPorNivel[nivel] = [];
    materiasPorNivel[nivel].push(id);
  });

  return { niveles, materiasPorNivel };
}

function calcularPosiciones() {
  const { niveles, materiasPorNivel } = organizarPorNiveles();
  const posiciones = {};

  Object.keys(materiasPorNivel).forEach(nivel => {
    const materias = materiasPorNivel[nivel];
    const nivelInt = parseInt(nivel);

    materias.forEach((id, index) => {
      posiciones[id] = {
        x: 20 + nivelInt * marginX,
        y: 20 + index * (nodeHeight + marginY),
        nivel: nivelInt
      };
    });
  });

  return posiciones;
}

function dividirTexto(texto, maxChars = 30) {
  if (texto.length <= maxChars) return [texto];
  const palabras = texto.split(' ');
  let linea1 = '', linea2 = '';

  for (let i = 0; i < palabras.length; i++) {
    if (linea1.length + palabras[i].length < maxChars) linea1 += (linea1 ? ' ' : '') + palabras[i];
    else linea2 += (linea2 ? ' ' : '') + palabras[i];
  }

  return [linea1, linea2].filter(l => l);
}

function crearMapa() {
  const posiciones = calcularPosiciones();
  const networkDiv = document.getElementById('network');

  let maxX = 0, maxY = 0;
  Object.values(posiciones).forEach(pos => {
    maxX = Math.max(maxX, pos.x + nodeWidth);
    maxY = Math.max(maxY, pos.y + nodeHeight);
  });

  const svgWidth = maxX + 40;
  const svgHeight = maxY + 40;

  let svg = `<svg id="mapa-svg" width="${svgWidth}" height="${svgHeight}">`;

  svg += `
    <defs>
      <marker id="arrow-normal" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#ccc" />
      </marker>
      <marker id="arrow-correlativa" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#ff5722" />
      </marker>
      <marker id="arrow-habilita" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#4caf50" />
      </marker>
    </defs>
  `;

  svg += '<g id="conexiones">';
  Object.keys(materiasCarrera).forEach(id => {
    const materia = materiasCarrera[id];
    const pos2 = posiciones[id];

    materia.correlativas.forEach(corrId => {
      const pos1 = posiciones[corrId];
      if (pos1 && pos2) {
        const x1 = pos1.x + nodeWidth;
        const y1 = pos1.y + nodeHeight / 2;
        const x2 = pos2.x;
        const y2 = pos2.y + nodeHeight / 2;

        svg += `<line class="conexion" data-from="${corrId}" data-to="${id}" 
                     x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" 
                     stroke="#e0e0e0" stroke-width="2" marker-end="url(#arrow-normal)" />`;
      }
    });
  });
  svg += '</g>';

  svg += '<g id="nodos">';
  Object.keys(posiciones).forEach(id => {
    const materia = materiasCarrera[id];
    const pos = posiciones[id];
    const lineas = dividirTexto(materia.nombre);

    const colores = ['#bbdefb', '#ffccbc', '#e1bee7', '#c5e1a5', '#ffcdd2', '#b2dfdb', '#f8bbd0', '#dcedc8'];
    const color = colores[pos.nivel % colores.length];

    svg += `<g class="nodo" data-id="${id}">
      <rect x="${pos.x}" y="${pos.y}" width="${nodeWidth}" height="${nodeHeight}" 
            fill="${color}" stroke="#131814ff" stroke-width="2.5" rx="8" class="nodo-rect" />`;

    if (lineas.length === 1) {
      svg += `<text x="${pos.x + nodeWidth/2}" y="${pos.y + nodeHeight/2}" 
              text-anchor="middle" dominant-baseline="middle" 
              font-size="13px" font-weight="600" fill="#1a1a1a" class="nodo-texto">
              ${lineas[0]}
            </text>`;
    } else {
      svg += `<text x="${pos.x + nodeWidth/2}" y="${pos.y + nodeHeight/2 - 8}" 
              text-anchor="middle" dominant-baseline="middle" 
              font-size="13px" font-weight="600" fill="#1a1a1a" class="nodo-texto">
              ${lineas[0]}
            </text>
            <text x="${pos.x + nodeWidth/2}" y="${pos.y + nodeHeight/2 + 10}" 
              text-anchor="middle" dominant-baseline="middle" 
              font-size="13px" font-weight="600" fill="#1a1a1a" class="nodo-texto">
              ${lineas[1]}
            </text>`;
    }

    svg += `</g>`;
  });
  svg += '</g>';

  svg += '</svg>';

  networkDiv.innerHTML = svg;

  agregarEventos();
}

let materiasSeleccionadas = new Set();

function agregarEventos() {
  document.querySelectorAll('.nodo').forEach(nodo => {
    nodo.style.cursor = 'pointer';
    nodo.addEventListener('click', function() {
      const id = this.dataset.id;
      if (materiasSeleccionadas.has(id)) materiasSeleccionadas.delete(id);
      else materiasSeleccionadas.add(id);
      actualizarSeleccion();
    });
  });
}

function actualizarSeleccion() {
  const nodos = document.querySelectorAll('.nodo rect');
  const lineas = document.querySelectorAll('.conexion');

  nodos.forEach(n => { 
    n.dataset.estado = ''; 
    n.setAttribute('stroke', '#000000ff'); 
    n.setAttribute('stroke-width', '2.5'); 
  });
  
  lineas.forEach(l => { 
    l.dataset.estado = ''; 
    l.setAttribute('stroke', '#e0e0e0'); 
    l.setAttribute('stroke-width', '2'); 
    l.setAttribute('marker-end', 'url(#arrow-normal)'); 
  });
  if (materiasSeleccionadas.size === 0) return;
  const nodosSeleccionados = new Set();
  const nodosHabilita = new Set();
  const nodosCorrelativa = new Set();
  materiasSeleccionadas.forEach(id => {
    const materia = materiasCarrera[id];
    nodosSeleccionados.add(id);
    materia.habilita.forEach(habId => {
      nodosHabilita.add(habId);
    });
    materia.correlativas.forEach(corrId => {
      nodosCorrelativa.add(corrId);
    });
  });
  nodos.forEach(n => {
    const id = n.parentElement.dataset.id;
    
    if (nodosSeleccionados.has(id)) {
      n.dataset.estado = 'seleccionado';
      n.setAttribute('stroke', '#2196F3'); 
      n.setAttribute('stroke-width', '4');
    } else if (nodosHabilita.has(id)) {
      n.dataset.estado = 'habilita';
      n.setAttribute('stroke', '#4caf50'); 
      n.setAttribute('stroke-width', '4');
    } else if (nodosCorrelativa.has(id)) {
      n.dataset.estado = 'correlativa';
      n.setAttribute('stroke', '#ff5722'); 
      n.setAttribute('stroke-width', '4');
    }
  });
  lineas.forEach(l => {
    const from = l.dataset.from;
    const to = l.dataset.to;
    
    let esHabilita = false;
    let esCorrelativa = false;
    materiasSeleccionadas.forEach(id => {
      const materia = materiasCarrera[id];
      if (materia.habilita.includes(to) && from === id) {
        esHabilita = true;
      }
      if (materia.correlativas.includes(from) && to === id) {
        esCorrelativa = true;
      }
    });
    if (esHabilita) {
      l.dataset.estado = 'habilita';
      l.setAttribute('stroke', '#4caf50'); 
      l.setAttribute('stroke-width', '3'); 
      l.setAttribute('marker-end', 'url(#arrow-habilita)');
    } else if (esCorrelativa) {
      l.dataset.estado = 'correlativa';
      l.setAttribute('stroke', '#ff5722'); 
      l.setAttribute('stroke-width', '3'); 
      l.setAttribute('marker-end', 'url(#arrow-correlativa)');
    }
  });
}

crearMapa();