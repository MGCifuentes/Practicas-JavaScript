const materiasCarrera = {
    //Primer año
    'analisis_matematico_1': { 
      nombre: 'Análisis Matemático I', 
      correlativas: [],
      habilita: ['analisis_matematico_2', 'fisica_1']
    },
    'programacion_inicial': {
      nombre: 'Programación Inicial',
      correlativas: [],
      habilita: ['programacion_estructurada_basica']
    },
    'sistemas_de_numeracion': {
      nombre: 'Sistemas de Numeración',
      correlativas: [],
      habilita: ['fundamentos_de_sistemas_embebidos']
    },
    'algebra_y_geometria_analitica_1': {
      nombre: 'Álgebra y Geometría Analítica I',
      correlativas: [],
      habilita: ['algebra_y_geometria_analitica_2']
    },
    'matematica_discreta': {
      nombre: 'Matemática Discreta',
      correlativas: [],
      habilita: ['topicos_de_programacion', 'bases_de_datos', 'probabilidad_y_estadistica']
    },
    'principios_de_calidad_de_software': {
      nombre: 'Principios de Calidad de Software',
      correlativas: [],
      habilita: ['responsabilidad_social_universitaria', 'principio_de_diseno_de_sistemas']
    },
    'introduccion_a_los_sistemas_de_informacion': {
      nombre: 'Introducción a los Sistemas de Información',
      correlativas: [],
      habilita: ['introduccion_a_la_gestion_de_requisitos']
    },
    'introduccion_a_los_proyectos_informaticos': {
      nombre: 'Introducción a los Proyectos Informáticos',
      correlativas: [],
      habilita: ['gestion_de_las_organizaciones']
    },
    
    // Primer año - Segundo cuatrimestre
    'fisica_1': {
      nombre: 'Física I',
      correlativas: ['analisis_matematico_1'],
      habilita: ['fisica_2']
    },
    'analisis_matematico_2': {
      nombre: 'Análisis Matemático II',
      correlativas: ['analisis_matematico_1'],
      habilita: ['analisis_matematico_3', 'paradigmas_de_programacion']
    },
    'algebra_y_geometria_analitica_2': {
      nombre: 'Álgebra y Geometría Analítica II',
      correlativas: ['algebra_y_geometria_analitica_1'],
      habilita: ['probabilidad_y_estadistica']
    },
    'programacion_estructurada_basica': {
      nombre: 'Programación Estructurada Básica',
      correlativas: ['programacion_inicial'],
      habilita: ['sistemas_operativos', 'topicos_de_programacion', 'bases_de_datos']
    },
    'fundamentos_de_sistemas_embebidos': {
      nombre: 'Fundamentos de Sistemas Embebidos',
      correlativas: ['sistemas_de_numeracion'],
      habilita: ['arquitectura_de_computadoras']
    },
    'introduccion_a_la_gestion_de_requisitos': {
      nombre: 'Introducción a la Gestión de Requisitos',
      correlativas: ['introduccion_a_los_sistemas_de_informacion'],
      habilita: ['analisis_de_sistemas']
    },
    'gestion_de_las_organizaciones': {
      nombre: 'Gestión de las Organizaciones',
      correlativas: ['introduccion_a_los_proyectos_informaticos'],
      habilita: ['gestion_de_proyectos', 'gestion_aplicada_desarrollo_software_1']
    },
    'responsabilidad_social_universitaria': {
      nombre: 'Responsabilidad Social Universitaria',
      correlativas: ['principios_de_calidad_de_software'],
      habilita: []
    },
    
    //Segundo año
    'analisis_matematico_3': {
      nombre: 'Análisis Matemático III',
      correlativas: ['analisis_matematico_2'],
      habilita: ['probabilidad_y_estadistica']
    },
    'fisica_2': {
      nombre: 'Física II',
      correlativas: ['fisica_1'],
      habilita: ['sistemas_operativos_avanzados']
    },
    'arquitectura_de_computadoras': {
      nombre: 'Arquitectura de Computadoras',
      correlativas: ['fundamentos_de_sistemas_embebidos'],   
      habilita: ['sistemas_operativos', 'redes_de_computadoras', 'seguridad_de_la_informacion']
    },
    'topicos_de_programacion': {
      nombre: 'Tópicos de Programación',
      correlativas: ['programacion_estructurada_basica', 'matematica_discreta'],
      habilita: ['algoritmos_y_estructuras_de_datos', 'bases_de_datos_aplicadas', 'seguridad_de_la_informacion']
    },
    'bases_de_datos': {
      nombre: 'Bases de Datos',
      correlativas: ['programacion_estructurada_basica', 'matematica_discreta'],
      habilita: ['bases_de_datos_aplicadas', 'diseno_de_software']
    },
    'analisis_de_sistemas': {
      nombre: 'Análisis de Sistemas',
      correlativas: ['introduccion_a_la_gestion_de_requisitos'],
      habilita: ['principio_de_diseno_de_sistemas']
    },
    
    // Segundo año - Segundo cuatrimestre
    'probabilidad_y_estadistica': {
      nombre: 'Probabilidad y Estadística',
      correlativas: ['algebra_y_geometria_analitica_2', 'matematica_discreta', 'analisis_matematico_3'],
      habilita: ['matematica_aplicada', 'estadistica_aplicada', 'inteligencia_artificial', 'gestion_de_proyectos']
    },
    'sistemas_operativos': {
      nombre: 'Sistemas Operativos',
      correlativas: ['programacion_estructurada_basica', 'arquitectura_de_computadoras'],
      habilita: ['virtualizacion_de_hardware', 'seguridad_aplicada_y_forensia', 'programacion_concurrente']
    },
    'redes_de_computadoras': {
      nombre: 'Redes de Computadoras',
      correlativas: ['arquitectura_de_computadoras'],
      habilita: ['virtualizacion_de_hardware', 'seguridad_de_la_informacion']
    },
    'algoritmos_y_estructuras_de_datos': {
      nombre: 'Algoritmos y Estructuras de Datos',
      correlativas: ['topicos_de_programacion'],
      habilita: ['paradigmas_de_programacion']
    },
    'bases_de_datos_aplicadas': {
      nombre: 'Bases de Datos Aplicadas',
      correlativas: ['topicos_de_programacion', 'bases_de_datos'],
      habilita: ['programacion_avanzada']
    },
    'paradigmas_de_programacion': {
      nombre: 'Paradigmas de Programación',
      correlativas: ['algoritmos_y_estructuras_de_datos', 'analisis_matematico_2'],
      habilita: ['inteligencia_artificial', 'automatas_y_gramaticas', 'programacion_avanzada', 'programacion_concurrente']
    },
    'principio_de_diseno_de_sistemas': {
      nombre: 'Principio de Diseño de Sistemas',
      correlativas: ['analisis_de_sistemas', 'principios_de_calidad_de_software'],
      habilita: ['diseno_de_software', 'requisitos_avanzados', 'practica_profesional_supervisada', 'gestion_de_calidad_procesos']
    },
    
    //Tercer año
    'estadistica_aplicada': {
      nombre: 'Estadística Aplicada',
      correlativas: ['probabilidad_y_estadistica'],
      habilita: ['inteligencia_artificial_aplicada', 'ciencia_de_datos', 'proyecto_final_de_carrera']
    },
    'matematica_aplicada': {
      nombre: 'Matemática Aplicada',
      correlativas: ['probabilidad_y_estadistica'],
      habilita: []
    },
    'virtualizacion_de_hardware': {
      nombre: 'Virtualización de Hardware',
      correlativas: ['sistemas_operativos', 'redes_de_computadoras'],
      habilita: ['sistemas_operativos_avanzados']
    },
    'seguridad_de_la_informacion': {
      nombre: 'Seguridad de la Información',
      correlativas: ['redes_de_computadoras', 'arquitectura_de_computadoras', 'topicos_de_programacion'],
      habilita: ['gestion_de_proyectos', 'auditoria_y_legislacion']
    },
    'inteligencia_artificial': {
      nombre: 'Inteligencia Artificial',
      correlativas: ['probabilidad_y_estadistica', 'paradigmas_de_programacion'],
      habilita: ['inteligencia_artificial_aplicada', 'ciencia_de_datos']
    },
    'automatas_y_gramaticas': {
      nombre: 'Autómatas y Gramáticas',
      correlativas: ['paradigmas_de_programacion'],
      habilita: ['lenguajes_y_compiladores']
    },
    'diseno_de_software': {
      nombre: 'Diseño de Software',
      correlativas: ['topicos_de_programacion', 'bases_de_datos', 'principio_de_diseno_de_sistemas'],
      habilita: ['arquitectura_de_sistemas_software', 'gestion_aplicada_desarrollo_software_1']
    },
    'requisitos_avanzados': {
      nombre: 'Requisitos Avanzados',
      correlativas: ['principio_de_diseno_de_sistemas'],
      habilita: ['gestion_aplicada_desarrollo_software_1']
    },
    'practica_profesional_supervisada': {
      nombre: 'Práctica Profesional Supervisada',
      correlativas: ['principio_de_diseno_de_sistemas'],
      habilita: []
    },
    
    // Tercer año - Segundo cuatrimestre
    'sistemas_operativos_avanzados': {
      nombre: 'Sistemas Operativos Avanzados',
      correlativas: ['fisica_2', 'virtualizacion_de_hardware'],
      habilita: ['proyecto_final_de_carrera']
    },
    'gestion_de_proyectos': {
      nombre: 'Gestión de Proyectos',
      correlativas: ['gestion_de_las_organizaciones', 'probabilidad_y_estadistica', 'seguridad_de_la_informacion'],
      habilita: ['innovacion_y_emprendedorismo', 'vision_artificial', 'redes_moviles_e_iot', 'tecnologias_en_seguridad', 'lenguaje_orientado_a_negocios', 'gestion_de_calidad_procesos']
    },
    'programacion_avanzada': {
      nombre: 'Programación Avanzada',
      correlativas: ['bases_de_datos_aplicadas', 'paradigmas_de_programacion'],
      habilita: ['seguridad_aplicada_y_forensia', 'programacion_concurrente', 'lenguaje_orientado_a_negocios', 'vision_artificial', 'redes_moviles_e_iot', 'tecnologias_en_seguridad']
    },
    'inteligencia_artificial_aplicada': {
      nombre: 'Inteligencia Artificial Aplicada',
      correlativas: ['estadistica_aplicada', 'inteligencia_artificial'],
      habilita: []
    },
    'ciencia_de_datos': {
      nombre: 'Ciencia de Datos',
      correlativas: ['estadistica_aplicada', 'inteligencia_artificial'],
      habilita: []
    },
    'auditoria_y_legislacion': {
      nombre: 'Auditoría y Legislación',
      correlativas: ['seguridad_de_la_informacion'],
      habilita: ['seguridad_aplicada_y_forensia']
    },
    'arquitectura_de_sistemas_software': {
      nombre: 'Arquitectura de Sistemas Software',
      correlativas: ['diseno_de_software'],
      habilita: ['gestion_aplicada_desarrollo_software_2', 'lenguaje_orientado_a_negocios', 'vision_artificial', 'redes_moviles_e_iot', 'tecnologias_en_seguridad']
    },
    'gestion_de_calidad_procesos': {
      nombre: 'Gestión de Calidad en Procesos de Sistemas',
      correlativas: ['principio_de_diseno_de_sistemas', 'gestion_de_proyectos'],
      habilita: ['proyecto_final_de_carrera']
    },
    'gestion_aplicada_desarrollo_software_1': {
      nombre: 'Gestión Aplicada al Desarrollo de Software I',
      correlativas: ['gestion_de_las_organizaciones', 'requisitos_avanzados', 'diseno_de_software'],
      habilita: ['gestion_aplicada_desarrollo_software_2', 'proyecto_final_de_carrera']
    },
    'lenguajes_y_compiladores': {
      nombre: 'Lenguajes y Compiladores',
      correlativas: ['automatas_y_gramaticas'],
      habilita: []
    },
    
    //Cuarto año
    'innovacion_y_emprendedorismo': {
      nombre: 'Innovación y Emprendedorismo',
      correlativas: ['gestion_de_proyectos'],
      habilita: []
    },
    'seguridad_aplicada_y_forensia': {
      nombre: 'Seguridad Aplicada y Forensia',
      correlativas: ['sistemas_operativos', 'auditoria_y_legislacion', 'programacion_avanzada'],
      habilita: []
    },
    'programacion_concurrente': {
      nombre: 'Programación Concurrente',
      correlativas: ['sistemas_operativos', 'paradigmas_de_programacion', 'programacion_avanzada'],
      habilita: []
    },
    'lenguaje_orientado_a_negocios': {
      nombre: 'Lenguaje Orientado a Negocios',
      correlativas: ['gestion_de_proyectos', 'arquitectura_de_sistemas_software', 'programacion_avanzada'],
      habilita: []
    },
    'vision_artificial': {
      nombre: 'Visión Artificial',
      correlativas: ['programacion_avanzada', 'arquitectura_de_sistemas_software', 'gestion_de_proyectos'],
      habilita: []
    },
    'redes_moviles_e_iot': {
      nombre: 'Redes Móviles e IoT',
      correlativas: ['programacion_avanzada', 'arquitectura_de_sistemas_software', 'gestion_de_proyectos'],
      habilita: []
    },
    'tecnologias_en_seguridad': {
      nombre: 'Tecnologías en Seguridad',
      correlativas: ['programacion_avanzada', 'arquitectura_de_sistemas_software', 'gestion_de_proyectos'],
      habilita: []
    },
    'gestion_aplicada_desarrollo_software_2': {
      nombre: 'Gestión Aplicada al Desarrollo de Software II',
      correlativas: ['gestion_aplicada_desarrollo_software_1', 'arquitectura_de_sistemas_software'],
      habilita: []
    },
    
    //Proyecto Final
    'proyecto_final_de_carrera': {
      nombre: 'Proyecto Final de Carrera',
      correlativas: ['gestion_de_calidad_procesos', 'gestion_aplicada_desarrollo_software_1', 'estadistica_aplicada', 'sistemas_operativos_avanzados'],
      habilita: []
    }
};

