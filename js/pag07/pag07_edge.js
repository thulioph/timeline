/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
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
                            rect: ['3px', '9px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'titulo07',
                            type: 'text',
                            rect: ['129px', '35px', '710px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "BRASIL REPÚBLICA NO ESTADO NOVO DE VARGAS.",
                            align: "center",
                            font: ['LithosPro-Black', [34, "px"], "rgba(31,149,5,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto08_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '893px', '25px', 'auto', 'auto'],
                            text: "Vargas foi o primeiro presidente do Brasil a visitar uma aldeia indígena, a dos índios Karajá na Ilha do Bananal, no Brasil Central.Nas palavras de Vargas, a Marcha incorporou \"o verdadeiro sentido de brasilidade\", cuja essência seria a fauna, flora e seus primeiros habitantes: os indígenas.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem07_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['174px', '255px', '788px', '322px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem07_01_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem07_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['27px', '247px', '340px', '340px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem07_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto07_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['377px', '281px', '545px', '216px', 'auto', 'auto'],
                            text: "Getúlio Dornelles Vargas foi um advogado e político brasileiro, líder civil da Revolução de 1930, que pôs fim à República Velha, depondo seu 13º e último presidente Washington Luís e impedindo a posse do presidente eleito em 1 de março de 1930, Júlio Prestes.\rFoi presidente do Brasil em dois períodos. O primeiro de 15 anos ininterruptos, de 1930 até 1945.\rNo segundo período, em que foi eleito por voto direto, Getúlio governou o Brasil como presidente da república, por 3 anos e meio: de 31 de janeiro de 1951 até 24 de agosto de 1954, quando suicidou.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'texto07_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '549px', '25px', 'auto', 'auto'],
                            text: "pelo Decreto nº. 1.794, de 22 de novembro de 1939 foi criado o CNPI - Conselho Nacional de Proteção aos Índios cujo objetivo era prezar os índios e seu valor ideológico para o Estado Novo promovendo a conscientização pública sobre a cultura indígena e a política estatal1. Em 1934, consagrando um ícone cultural, Vargas decretou que o dia 19 abril seria o Dia do Índio”. No entanto, grupos indígenas dividiram-se: uns rejeitaram a política governamental (conservando, por exemplo, o nomadismo) e outros colaboraram com os funcionários do governo que lhes ofereciam uma vida com mais benefícios. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem07_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['277px', '536px', '389px', '56px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem07_02_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem07_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['614px', '138px', '320px', '460px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem07_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto07_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['301px', '549px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Getúlio Vargas na alteia Karajá. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
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
                            "eid53",
                            "opacity",
                            4295,
                            400,
                            "linear",
                            "${imagem07_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            4695,
                            400,
                            "linear",
                            "${imagem07_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid66",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem07_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            2790,
                            0,
                            "linear",
                            "${imagem07_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${texto07_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${texto07_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid6",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo07}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            5985,
                            400,
                            "linear",
                            "${titulo07}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid59",
                            "top",
                            4750,
                            0,
                            "linear",
                            "${borda}",
                            '9px',
                            '9px'
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
                            "eid67",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${imagem07_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            2495,
                            0,
                            "linear",
                            "${imagem07_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid49",
                            "opacity",
                            3995,
                            400,
                            "linear",
                            "${imagem07_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid50",
                            "opacity",
                            4990,
                            400,
                            "linear",
                            "${imagem07_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid57",
                            "opacity",
                            4295,
                            400,
                            "linear",
                            "${texto07_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            4695,
                            400,
                            "linear",
                            "${texto07_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid26",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem07_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2395,
                            400,
                            "linear",
                            "${imagem07_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid63",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            3995,
                            0,
                            "linear",
                            "${imagem07_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid48",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${imagem07_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${texto07_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            2495,
                            0,
                            "linear",
                            "${texto07_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            4295,
                            0,
                            "linear",
                            "${texto07_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            5090,
                            0,
                            "linear",
                            "${texto07_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            4295,
                            0,
                            "linear",
                            "${imagem07_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            5090,
                            0,
                            "linear",
                            "${imagem07_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid36",
                            "left",
                            3395,
                            500,
                            "linear",
                            "${texto07_02_01}",
                            '985px',
                            '22px'
                        ],
                        [
                            "eid37",
                            "left",
                            3895,
                            100,
                            "linear",
                            "${texto07_02_01}",
                            '22px',
                            '35px'
                        ],
                        [
                            "eid38",
                            "left",
                            5385,
                            100,
                            "linear",
                            "${texto07_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid39",
                            "left",
                            5485,
                            500,
                            "linear",
                            "${texto07_02_01}",
                            '25px',
                            '985px'
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
                            "eid30",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${imagem07_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${imagem07_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid16",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto08_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid17",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto08_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid18",
                            "left",
                            2795,
                            100,
                            "linear",
                            "${texto08_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid19",
                            "left",
                            2895,
                            500,
                            "linear",
                            "${texto08_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            3395,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            5985,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'block',
                            'none'
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
                            6240,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao07_edgeActions.js");
})("EDGE-28115066");
