/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag05/',
        aud='media/',
        vid='media/',
        js='js/pag05/',
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
                            rect: ['3px', '7px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'titulo05',
                            type: 'text',
                            rect: ['79px', '35px', '841px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "BRASIL IMPÉRIO.",
                            align: "center",
                            font: ['LithosPro-Black', [39, "px"], "rgba(31,149,5,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto05_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '121px', '905px', '25px', 'auto', 'auto'],
                            text: "O indigenismo do séc. XIX que buscou misturar, diluir os povos indígenas aos não-indígenas nas vilas e povoados fazendo com que muitas de suas terras fossem expropriadas e suas sociedades se desorganizassem causando a impressão de “desaparecimento”. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem05_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['204px', '336px', '552px', '232px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_01_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem05_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['16px', '146px', '820px', '380px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto05_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['357px', '526px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Diferentes etnias brasileiras.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto07_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '129px', '899px', '25px', 'auto', 'auto'],
                            text: "O Decreto Imperial n.º 426 tenta recuperar algumas experiências de civilização aos índios já anteriormente implementadas, tais como a obrigatoriedade da catequese, participação das crianças nas escolas públicas e o incentivo ao trabalho por ofícios. \rA novidade era a regulamentação da possibilidade de arrendamento e aforamento das terras indígenas que só podiam ser concedidas aos mesmos, que apresentassem “bom comportamento”. Para os povos indígenas o Regulamento fortaleceu o processo de espoliação de suas terras gerando grandes perdas. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem05_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['395px', '387px', '495px', '143px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_02_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem05_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['73px', '323px', '380px', '270px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto05_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['460px', '412px', '413px', '25px', 'auto', 'auto'],
                            text: "Entre os maiores problemas enfrentados pelos índios no Brasil está a perda da própria identidade para garantir sua inserção na sociedade.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""]
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
                            "eid70",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            3995,
                            0,
                            "linear",
                            "${imagem05_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid58",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${imagem05_02_01}",
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
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            4295,
                            0,
                            "linear",
                            "${texto05_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            5090,
                            0,
                            "linear",
                            "${texto05_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto05_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid10",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto05_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid11",
                            "left",
                            2795,
                            100,
                            "linear",
                            "${texto05_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid12",
                            "left",
                            2895,
                            500,
                            "linear",
                            "${texto05_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid74",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${imagem05_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            2495,
                            0,
                            "linear",
                            "${imagem05_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            5985,
                            400,
                            "linear",
                            "${titulo05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid39",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${texto05_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${texto05_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid63",
                            "opacity",
                            4295,
                            400,
                            "linear",
                            "${imagem05_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            4695,
                            400,
                            "linear",
                            "${imagem05_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid34",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${imagem05_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${imagem05_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${texto05_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            2495,
                            0,
                            "linear",
                            "${texto05_01_02}",
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
                            "eid6",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8",
                            "display",
                            3395,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "opacity",
                            4295,
                            400,
                            "linear",
                            "${texto05_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid68",
                            "opacity",
                            4695,
                            400,
                            "linear",
                            "${texto05_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem05_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            2395,
                            400,
                            "linear",
                            "${imagem05_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            4295,
                            0,
                            "linear",
                            "${imagem05_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            5090,
                            0,
                            "linear",
                            "${imagem05_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem05_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            2790,
                            0,
                            "linear",
                            "${imagem05_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "opacity",
                            3995,
                            400,
                            "linear",
                            "${imagem05_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            4990,
                            400,
                            "linear",
                            "${imagem05_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            3395,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            5985,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "left",
                            3395,
                            500,
                            "linear",
                            "${texto07_02_01}",
                            '985px',
                            '22px'
                        ],
                        [
                            "eid49",
                            "left",
                            3895,
                            100,
                            "linear",
                            "${texto07_02_01}",
                            '22px',
                            '35px'
                        ],
                        [
                            "eid50",
                            "left",
                            5385,
                            100,
                            "linear",
                            "${texto07_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid51",
                            "left",
                            5485,
                            500,
                            "linear",
                            "${texto07_02_01}",
                            '25px',
                            '985px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag05/pag05_edgeActions.js");
})("EDGE-3422133");
