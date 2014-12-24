/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag04/',
        aud='media/',
        vid='media/',
        js='js/pag04/',
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
                            id: 'titulo04',
                            type: 'text',
                            rect: ['139px', '35px', '686px', '24px', 'auto', 'auto'],
                            opacity: '1',
                            text: "O BRASIL NA CRISE DO SISTEMA COLONIAL",
                            align: "center",
                            font: ['LithosPro-Black', [39, "px"], "rgba(31,149,5,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto04_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-892px', '152px', '881px', '24px', 'auto', 'auto'],
                            text: "A implantação do Diretório dos índios1, em 1755, alterou significativamente à relação entre as políticas indígena e indigenista no Brasil2. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'imagem04_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['25px', '179px', '799px', '358px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem01.png",'0px','0px']
                        },
                        {
                            id: 'texto04_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['241px', '328px', '556px', '24px', 'auto', 'auto'],
                            text: "Diretório dos Índios foi uma lei elaborada em 1755, e tornada pública em 1757, por D. José I, rei de Portugal, através de seu ministro, o Marquês de Pombal, que dispunha sobre os aldeamentos indígenas do Estado do Grão-Pará e Maranhão. Em 1758 um Alvará estendeu estas medidas para o Estado do Brasil. Este diretório extinguiu o trabalho missionário dos religiosos nos aldeamentos, elevando estes à condição de vilas ou aldeias, administradas por um diretor.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'texto04_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['47px', '540px', '166px', '24px', 'auto', 'auto'],
                            text: "Capa do Diretorio dos indios, 1758.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'texto04_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['983px', '134px', '890px', '41px', 'auto', 'auto'],
                            text: "Como forma de resolver os conflitos entre colonos e missionários pelo uso da mão-de-obra indígena, Marquês de Pombal expulsou os jesuítas em 1759 e instituiu o fim da escravidão indígena. Os aldeamentos foram usados como terras de exploração econômica – transformadas em vilas e povoados. O objetivo de Pombal em relação aos índios era utilizá-los como força de trabalho na colonização. Além disso, instigou-se a miscigenação por meio dos casamentos interétnicos, a obrigatoriedade do uso da língua portuguesa, a proibição do uso tanto da língua-geral3 quanto das línguas maternas indígenas e a regulamentação do trabalho que somados a novos itens legais, seria responsável pela civilização dos indígenas aos moldes europeus, acelerando a desarticulação das etnias e extinguindo os seus meios culturais característicos.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(31, 149, 5)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'imagem04_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['25px', '185px', '700px', '415px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02.png",'0px','0px']
                        },
                        {
                            id: 'texto04_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['250px', '464px', '454px', '41px', 'auto', 'auto'],
                            text: "A chamada expulsão dos jesuítas foi um evento da história de Portugal que teve lugar no reinado de D. José I, em 1759, sobre a orientação do seu primeiro-ministro futuro Marquês de Pombal, que foi o primeiro país europeu a expulsar os jesuítas.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(31, 149, 5)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'imagem04_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['47px', '439px', '312px', '164px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem03.png",'0px','0px']
                        },
                        {
                            id: 'imagem04_02_03',
                            display: 'none',
                            type: 'image',
                            rect: ['478px', '415px', '480px', '189px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04.png",'0px','0px']
                        },
                        {
                            id: 'avancar',
                            type: 'image',
                            rect: ['936px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"avancar2.png",'0px','0px']
                        },
                        {
                            id: 'voltar',
                            type: 'image',
                            rect: ['15px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"voltar2.png",'0px','0px']
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
                    duration: 9580,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem04_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            3390,
                            400,
                            "linear",
                            "${imagem04_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem04_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3",
                            "display",
                            3785,
                            0,
                            "linear",
                            "${imagem04_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${borda}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            9180,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid58",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto04_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            4385,
                            0,
                            "linear",
                            "${texto04_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${texto04_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            7790,
                            0,
                            "linear",
                            "${texto04_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            400,
                            0,
                            "linear",
                            "${titulo04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            9180,
                            0,
                            "linear",
                            "${titulo04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "opacity",
                            5385,
                            400,
                            "linear",
                            "${texto04_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            7395,
                            400,
                            "linear",
                            "${texto04_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            6185,
                            0,
                            "linear",
                            "${imagem04_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            6980,
                            0,
                            "linear",
                            "${imagem04_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${texto04_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            2600,
                            400,
                            "linear",
                            "${texto04_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid56",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${texto04_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "display",
                            3390,
                            0,
                            "linear",
                            "${texto04_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${texto04_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            2995,
                            400,
                            "linear",
                            "${texto04_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "linear",
                            "${borda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            9575,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            4385,
                            0,
                            "linear",
                            "${texto04_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            8785,
                            0,
                            "linear",
                            "${texto04_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            4985,
                            0,
                            "linear",
                            "${imagem04_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid35",
                            "display",
                            8185,
                            0,
                            "linear",
                            "${imagem04_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "left",
                            4385,
                            500,
                            "linear",
                            "${texto04_02_01}",
                            '983px',
                            '33px'
                        ],
                        [
                            "eid31",
                            "left",
                            4885,
                            100,
                            "linear",
                            "${texto04_02_01}",
                            '33px',
                            '43px'
                        ],
                        [
                            "eid32",
                            "left",
                            8185,
                            100,
                            "linear",
                            "${texto04_02_01}",
                            '43px',
                            '33px'
                        ],
                        [
                            "eid33",
                            "left",
                            8285,
                            500,
                            "linear",
                            "${texto04_02_01}",
                            '33px',
                            '983px'
                        ],
                        [
                            "eid48",
                            "opacity",
                            6185,
                            400,
                            "linear",
                            "${imagem04_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            6585,
                            400,
                            "linear",
                            "${imagem04_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid44",
                            "opacity",
                            5785,
                            400,
                            "linear",
                            "${imagem04_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            7000,
                            400,
                            "linear",
                            "${imagem04_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid36",
                            "opacity",
                            4985,
                            400,
                            "linear",
                            "${imagem04_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            7790,
                            400,
                            "linear",
                            "${imagem04_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid26",
                            "opacity",
                            400,
                            400,
                            "linear",
                            "${titulo04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            8785,
                            400,
                            "linear",
                            "${titulo04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${texto04_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11",
                            "display",
                            2995,
                            0,
                            "linear",
                            "${texto04_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            5785,
                            0,
                            "linear",
                            "${imagem04_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            7395,
                            0,
                            "linear",
                            "${imagem04_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto04_01_01}",
                            '-892px',
                            '58px'
                        ],
                        [
                            "eid17",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto04_01_01}",
                            '58px',
                            '48px'
                        ],
                        [
                            "eid18",
                            "left",
                            3785,
                            100,
                            "linear",
                            "${texto04_01_01}",
                            '48px',
                            '58px'
                        ],
                        [
                            "eid19",
                            "left",
                            3885,
                            500,
                            "linear",
                            "${texto04_01_01}",
                            '58px',
                            '-892px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag04/pag04_edgeActions.js");
})("EDGE-25094056");
