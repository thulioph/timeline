/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/index/',
        aud='media/',
        vid='media/',
        js='js/index/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'borda',
                            display: 'block',
                            type: 'image',
                            rect: ['3px', '6px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'texto_tela_inicial_afroCopy',
                            symbolName: 'imagem03_03_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-902px', '126', '891', '118', 'auto', 'auto']
                        },
                        {
                            id: 'imagem_tela_inicial_01',
                            display: 'none',
                            type: 'image',
                            rect: ['262px', '23px', '453px', '83px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem_tela_inicial_01.png",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            display: 'none',
                            type: 'text',
                            rect: ['337px', '38px', 'auto', 'auto', 'auto', 'auto'],
                            text: "CULTURA INDÍGENA",
                            align: "justify",
                            font: ['LithosPro-Regular', [28, "px"], "rgba(243,234,210,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '974px', '640px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(243,234,210,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2840,
                    autoPlay: true,
                    data: [
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem_tela_inicial_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            250,
                            0,
                            "linear",
                            "${imagem_tela_inicial_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            2590,
                            0,
                            "linear",
                            "${imagem_tela_inicial_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "opacity",
                            250,
                            400,
                            "linear",
                            "${titulo}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2190,
                            400,
                            "linear",
                            "${titulo}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "linear",
                            "${titulo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            250,
                            0,
                            "linear",
                            "${titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            2590,
                            0,
                            "linear",
                            "${titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "opacity",
                            250,
                            400,
                            "linear",
                            "${imagem_tela_inicial_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2190,
                            400,
                            "linear",
                            "${imagem_tela_inicial_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${borda}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "opacity",
                            2440,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            2840,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            '-902px',
                            '52px'
                        ],
                        [
                            "eid12",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            '52px',
                            '42px'
                        ],
                        [
                            "eid13",
                            "left",
                            1400,
                            100,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            '42px',
                            '52px'
                        ],
                        [
                            "eid14",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${texto_tela_inicial_afroCopy}",
                            '52px',
                            '-902px'
                        ]
                    ]
                }
            },
            "imagem03_03_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'justify',
                            id: 'texto_inicial',
                            textStyle: ['', '', '27px', ''],
                            text: 'Os tópicos apresentados nessa Linha do Tempo  foram fracionados pela cronologia clássica da história do Brasil emoldurando um quadro histórico de ações-intervenções sobre e dos índios, procurando-se apresentar esse painel de formato mais diversificado do que o costumeiramente empregado pela História tradicional. <br>Resgatar as manifestações artísticas, sociais, linguísticas e comportamentais dos nativos é importante para que possam ser apreendidas através das novas interpretações dos acontecimentos e percursos temporais, promovendo debates e a revisão de visões, por vezes, preconceituosas e deformadas. Por outro lado, nos últimos anos, diversos povos afirmaram suas identidades e diferenças apropriando-se de novo lócus político, social e ideológico na sociedade brasileira assegurando a interculturalidade, o processo de aprendizagem na sua globalidade, o uso de suas línguas permitindo não apenas maior visibilidade de sua cultura como a construção alternativa de sua autonomia frente a política do Estado brasileiro. ',
                            rect: ['0px', '0px', '891px', '30px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '891px', '118px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/index/index_edgeActions.js");
})("EDGE-5270443");
