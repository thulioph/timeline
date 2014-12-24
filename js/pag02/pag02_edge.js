/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag02/',
        aud='media/',
        vid='media/',
        js='js/pag02/',
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
                            type: 'image',
                            rect: ['5px', '7px', '967px', '633px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"borda.png",'0px','0px']
                        },
                        {
                            id: 'titulo02',
                            display: 'none',
                            type: 'text',
                            rect: ['79px', '43px', '841px', '49px', 'auto', 'auto'],
                            opacity: '1',
                            text: "O BRASIL PRÉ-COLONIAL",
                            align: "center",
                            font: ['LithosPro-Black', [39, "px"], "rgba(31,149,5,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto02_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-475px', '135px', '460px', '16px', 'auto', 'auto'],
                            text: "A dispersão indígena por vários territórios do Brasil (Ver mapa de Curt Nimuendaju) pode ser explicada como resistência ao contato com os colonizadores que invariavelmente invadiam suas terras, transmitiam doenças e moléstias e os escravizavam. Inicialmente os europeus nomearam-nos de \"gentios\", \"negros da terra\", \"brasis\", \"Índios\" para os classificarem segundo sua religião e condição social e política. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(31, 149, 5)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'imagem02_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['155px', '124px', '808px', '451px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01.png",'0px','0px']
                        },
                        {
                            id: 'texto02_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['617px', '572px', '264px', '16px', 'auto', 'auto'],
                            text: "Mapa etno-histórico do Brasil ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(154,1,1,1.00)", "400", "none solid rgb(31, 149, 5)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'imagem02_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['40px', '398px', '493px', '188px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02.png",'0px','0px']
                        },
                        {
                            id: 'texto02_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['60px', '451px', '317px', '16px', 'auto', 'auto'],
                            text: "Curt Nimuendajú foi um etnólogo de origem alemã que percorreu o Brasil em meio aos índios por mais de quarenta anos.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(31, 149, 5)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'texto02_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['982px', '134px', '897px', '32px', 'auto', 'auto'],
                            text: "Foram os navegadores, viajantes, missionários, cronistas e nobres portugueses que, através de seus relatos e ilustrações, divulgaram imagens, muitas vezes distorcidas, dos povos habitantes no Brasil. Essas opiniões marcaram negativamente esses povos em relação aos seus costumes como andarem nus, serem politeístas, polígamos, praticarem a antropofagia levando-os a categorizarem como seres inferiores, bárbaros, selvagens, anticivilizados justificando assim a sua subjugação militar e política.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'imagem02_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['13px', '286px', '888px', '306px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem03.png",'0px','0px']
                        },
                        {
                            id: 'texto02_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['564px', '449px', '312px', '32px', 'auto', 'auto'],
                            text: "Desembarque de Cabral em Porto Seguro, óleo sobre tela de Oscar Pereira da Silva, 1922 . Acervo do Museu Histórico Nacional (Rio de Janeiro).",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'voltar',
                            type: 'image',
                            rect: ['22px', '37px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"voltar.png",'0px','0px']
                        },
                        {
                            id: 'avancar',
                            type: 'image',
                            rect: ['932px', '37px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"avancar.png",'0px','0px']
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
                    duration: 8765,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "left",
                            5180,
                            500,
                            "linear",
                            "${texto02_02_01}",
                            '982px',
                            '32px'
                        ],
                        [
                            "eid37",
                            "left",
                            5680,
                            100,
                            "linear",
                            "${texto02_02_01}",
                            '32px',
                            '42px'
                        ],
                        [
                            "eid38",
                            "left",
                            7370,
                            100,
                            "linear",
                            "${texto02_02_01}",
                            '42px',
                            '32px'
                        ],
                        [
                            "eid39",
                            "left",
                            7470,
                            500,
                            "linear",
                            "${texto02_02_01}",
                            '32px',
                            '982px'
                        ],
                        [
                            "eid60",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem02_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "display",
                            4580,
                            0,
                            "linear",
                            "${imagem02_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "linear",
                            "${titulo02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            400,
                            0,
                            "linear",
                            "${titulo02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            8365,
                            0,
                            "linear",
                            "${titulo02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${texto02_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19",
                            "display",
                            4185,
                            0,
                            "linear",
                            "${texto02_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "opacity",
                            5780,
                            400,
                            "linear",
                            "${imagem02_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            6975,
                            400,
                            "linear",
                            "${imagem02_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem02_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            4185,
                            400,
                            "linear",
                            "${imagem02_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid61",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto02_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            5180,
                            0,
                            "linear",
                            "${texto02_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "opacity",
                            2595,
                            400,
                            "linear",
                            "${texto02_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            2995,
                            400,
                            "linear",
                            "${texto02_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            5180,
                            0,
                            "linear",
                            "${texto02_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            7970,
                            0,
                            "linear",
                            "${texto02_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto02_01_01}",
                            '-475px',
                            '45px'
                        ],
                        [
                            "eid23",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto02_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid24",
                            "left",
                            4580,
                            100,
                            "linear",
                            "${texto02_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid25",
                            "left",
                            4680,
                            500,
                            "linear",
                            "${texto02_01_01}",
                            '45px',
                            '-475px'
                        ],
                        [
                            "eid34",
                            "opacity",
                            6180,
                            400,
                            "linear",
                            "${texto02_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            6580,
                            400,
                            "linear",
                            "${texto02_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            5780,
                            0,
                            "linear",
                            "${imagem02_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            7370,
                            0,
                            "linear",
                            "${imagem02_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${borda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            8760,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${imagem02_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11",
                            "display",
                            3790,
                            0,
                            "linear",
                            "${imagem02_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            2595,
                            0,
                            "linear",
                            "${texto02_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            3390,
                            0,
                            "linear",
                            "${texto02_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${imagem02_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            3395,
                            400,
                            "linear",
                            "${imagem02_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${texto02_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            3790,
                            400,
                            "linear",
                            "${texto02_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid48",
                            "opacity",
                            400,
                            400,
                            "linear",
                            "${titulo02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            7970,
                            400,
                            "linear",
                            "${titulo02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid54",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            6180,
                            0,
                            "linear",
                            "${texto02_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            6975,
                            0,
                            "linear",
                            "${texto02_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${borda}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            8365,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag02/pag02_edgeActions.js");
})("EDGE-9589876");
