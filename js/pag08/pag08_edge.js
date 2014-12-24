/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag08/',
        aud='media/',
        vid='media/',
        js='js/pag08/',
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
                            rect: ['3px', '5px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'titulo08',
                            type: 'text',
                            rect: ['97px', '35px', '755px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "BRASIL REPÚBLICA NA DITADURA CIVIL-MILITAR-RELIGIOSA.",
                            align: "center",
                            font: ['LithosPro-Black', [34, "px"], "rgba(31,149,5,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto08_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '538px', '25px', 'auto', 'auto'],
                            text: "No que se refere às populações indígenas, durante a ditatura civil-militar , houve uma nova proposta de reformulação e foi criada, pela Lei nº 5.371, de 5 de dezembro de 1967, a FUNAI (Fundação Nacional do Índio). ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem08_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['48px', '370px', '888px', '198px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08_01_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem08_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['35px', '182px', '885px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto08_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['57px', '388px', '516px', '25px', 'auto', 'auto'],
                            text: "Golpe civil-militar no Brasil designa o conjunto de eventos ocorridos em 31 de março de 1964, que culminaram, no dia 1º de abril de 1964, com um golpe de Estado que encerrou o governo do presidente democraticamente eleito João Goulart, também conhecido como Jango.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto08_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '898px', '25px', 'auto', 'auto'],
                            text: "Em 1973 foi sancionada a Lei nº 6.001, conhecida como o Estatuto do Índio, seguindo o princípio estabelecido pelo velho Código Civil brasileiro (de 1916): de que os índios deveriam ser tutelados. Os funcionários da FUNAI tratavam os índios de forma paternalista e no que diz respeito aos índios isolados ou “arredios”, buscavam o contato causando doenças, fome e medo aos índios contatados.  ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem08_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['9px', '338px', '893px', '169px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08_02_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem08_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['17px', '208px', '580px', '390px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto08_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['266px', '372px', '550px', '25px', 'auto', 'auto'],
                            text: "A Fundação Nacional do Índio (Funai) é o órgão do Governo Federal brasileiro que estabelece e executa a política indigenista no Brasil, dando cumprimento ao que determina a Constituição brasileira de 1988.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'avancar',
                            type: 'image',
                            rect: ['936px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"avancar.png",'0px','0px']
                        },
                        {
                            id: 'voltar',
                            type: 'image',
                            rect: ['15px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"voltar.png",'0px','0px']
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
                    duration: 6640,
                    autoPlay: true,
                    data: [
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
                            6240,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "opacity",
                            3995,
                            400,
                            "linear",
                            "${imagem08_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            4990,
                            400,
                            "linear",
                            "${imagem08_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem08_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            2395,
                            400,
                            "linear",
                            "${imagem08_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            3395,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "left",
                            3395,
                            500,
                            "linear",
                            "${texto08_02_01}",
                            '985px',
                            '22px'
                        ],
                        [
                            "eid40",
                            "left",
                            3895,
                            100,
                            "linear",
                            "${texto08_02_01}",
                            '22px',
                            '35px'
                        ],
                        [
                            "eid41",
                            "left",
                            5385,
                            100,
                            "linear",
                            "${texto08_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid42",
                            "left",
                            5485,
                            500,
                            "linear",
                            "${texto08_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid52",
                            "opacity",
                            4295,
                            400,
                            "linear",
                            "${imagem08_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            4695,
                            400,
                            "linear",
                            "${imagem08_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            3395,
                            0,
                            "linear",
                            "${texto08_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            5985,
                            0,
                            "linear",
                            "${texto08_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo08}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            5985,
                            400,
                            "linear",
                            "${titulo08}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid9",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto08_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid10",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto08_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid11",
                            "left",
                            2795,
                            100,
                            "linear",
                            "${texto08_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid12",
                            "left",
                            2895,
                            500,
                            "linear",
                            "${texto08_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${imagem08_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${imagem08_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid61",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${texto08_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            2495,
                            0,
                            "linear",
                            "${texto08_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            6640,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem08_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "display",
                            2790,
                            0,
                            "linear",
                            "${imagem08_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${imagem08_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "display",
                            2495,
                            0,
                            "linear",
                            "${imagem08_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid56",
                            "opacity",
                            4295,
                            400,
                            "linear",
                            "${texto08_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid57",
                            "opacity",
                            4695,
                            400,
                            "linear",
                            "${texto08_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid58",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            4295,
                            0,
                            "linear",
                            "${texto08_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "display",
                            5090,
                            0,
                            "linear",
                            "${texto08_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${texto08_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${texto08_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid59",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            3995,
                            0,
                            "linear",
                            "${imagem08_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${imagem08_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            4295,
                            0,
                            "linear",
                            "${imagem08_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            5090,
                            0,
                            "linear",
                            "${imagem08_02_02}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag08/pag08_edgeActions.js");
})("EDGE-23218156");
