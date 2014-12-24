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
                            rect: ['3px', '7px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'titulo06',
                            type: 'text',
                            rect: ['79px', '35px', '841px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "BRASIL NA PRIMEIRA REPÚBLICA.",
                            align: "center",
                            font: ['LithosPro-Black', [39, "px"], "rgba(31,149,5,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto06_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '873px', '25px', 'auto', 'auto'],
                            text: "A Primeira república (1889-1930) manteve uma política indigenista com base no positivismo, pois acreditavam que os índios, mesmo permanecendo na etapa anterior a civilização, eram susceptíveis de progredir. Eles ergueram a bandeira em favor da causa indígena, a partir de seus preceitos comtenos. Surgiu a proposta encaminhada à Assembleia Nacional Constituinte, em 1891, sobre os direitos dos índios que reconhecia a sua soberania e apoiava que as suas nações fossem livres. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem06_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['4px', '182px', '840px', '270px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto06_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['38px', '334px', '774px', '24px', 'auto', 'auto'],
                            text: "O positivismo é uma corrente filosófica que surgiu na França no começo do século XIX. Os principais idealizadores do positivismo foram os pensadores Augusto Comte e John Stuart Mill. É um conceito que possui distintos significados, englobando tanto perspectivas filosóficas e científicas do século XIX quanto outras do século XX.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(31, 149, 5)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['150px', '231px', '790px', '360px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto06_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['163px', '482px', '595px', '24px', 'auto', 'auto'],
                            text: "Isidore Auguste Marie François Xavier Comte foi um filósofo francês, fundador da Sociologia e do Positivismo, trabalhou intensamente na criação de uma filosofia positiva.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto06_02_01',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '134px', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem06_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['125px', '424px', '840px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto06_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['508px', '516px', '429px', '24px', 'auto', 'auto'],
                            text: "Mulheres da tribo dos bororos de Mato Grosso, vestidas como os homens brancos (1929). ",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['477px', '193px', '473px', '306px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_02_02.png",'0px','0px']
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['332px', '462px', '104px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto06_03_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem06_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['13px', '158px', '880px', '420px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto06_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['47px', '578px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Início da demarcação de terras indígenas.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_03_03',
                            display: 'none',
                            type: 'image',
                            rect: ['577px', '326px', '387px', '228px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_03_03.png",'0px','0px']
                        },
                        {
                            id: 'texto06_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['687px', '348px', '262px', '168px', 'auto', 'auto'],
                            text: "Cândido Mariano da Silva Rondon, mais conhecido como Marechal Rondon (Santo Antônio de Leverger, 5 de maio de 1865 — Rio de Janeiro, 19 de janeiro de 1958), foi um militar e sertanista brasileiro.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['433px', '358px', '240px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_03_02.png",'0px','0px']
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['70px', '241px', '104px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                    duration: 10430,
                    autoPlay: true,
                    data: [
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            4495,
                            0,
                            "linear",
                            "${imagem06_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid58",
                            "display",
                            5290,
                            0,
                            "linear",
                            "${imagem06_02_02}",
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
                            10030,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem06_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            2595,
                            400,
                            "linear",
                            "${imagem06_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid55",
                            "opacity",
                            4195,
                            400,
                            "linear",
                            "${texto06_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            5290,
                            400,
                            "linear",
                            "${texto06_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid38",
                            "left",
                            3595,
                            500,
                            "linear",
                            "${texto06_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid39",
                            "left",
                            4095,
                            100,
                            "linear",
                            "${texto06_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid40",
                            "left",
                            5685,
                            100,
                            "linear",
                            "${texto06_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid41",
                            "left",
                            5785,
                            500,
                            "linear",
                            "${texto06_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid84",
                            "opacity",
                            6885,
                            400,
                            "linear",
                            "${imagem06_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            8680,
                            400,
                            "linear",
                            "${imagem06_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid92",
                            "opacity",
                            7285,
                            400,
                            "linear",
                            "${imagem06_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            8285,
                            400,
                            "linear",
                            "${imagem06_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto06_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "display",
                            3595,
                            0,
                            "linear",
                            "${texto06_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            6885,
                            0,
                            "linear",
                            "${imagem06_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            9075,
                            0,
                            "linear",
                            "${imagem06_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            3595,
                            0,
                            "linear",
                            "${texto06_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            6285,
                            0,
                            "linear",
                            "${texto06_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            4195,
                            0,
                            "linear",
                            "${imagem06_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid50",
                            "display",
                            5685,
                            0,
                            "linear",
                            "${imagem06_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid36",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${texto06_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${texto06_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid51",
                            "opacity",
                            4195,
                            400,
                            "linear",
                            "${imagem06_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            5290,
                            400,
                            "linear",
                            "${imagem06_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid113",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            6285,
                            0,
                            "linear",
                            "${texto06_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            9775,
                            0,
                            "linear",
                            "${texto06_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            9775,
                            400,
                            "linear",
                            "${titulo06}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid109",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            7585,
                            0,
                            "linear",
                            "${texto06_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            8380,
                            0,
                            "linear",
                            "${texto06_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            4845,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            4955,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            7285,
                            0,
                            "linear",
                            "${imagem06_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            8680,
                            0,
                            "linear",
                            "${imagem06_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            7585,
                            0,
                            "linear",
                            "${imagem06_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            8380,
                            0,
                            "linear",
                            "${imagem06_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "left",
                            6285,
                            500,
                            "linear",
                            "${texto06_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid73",
                            "left",
                            6785,
                            100,
                            "linear",
                            "${texto06_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid74",
                            "left",
                            9175,
                            100,
                            "linear",
                            "${texto06_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid75",
                            "left",
                            9275,
                            500,
                            "linear",
                            "${texto06_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid115",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            4195,
                            0,
                            "linear",
                            "${texto06_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            5685,
                            0,
                            "linear",
                            "${texto06_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${imagem06_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${imagem06_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid7",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto06_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid8",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto06_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid9",
                            "left",
                            2995,
                            100,
                            "linear",
                            "${texto06_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid10",
                            "left",
                            3095,
                            500,
                            "linear",
                            "${texto06_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid88",
                            "opacity",
                            6885,
                            400,
                            "linear",
                            "${texto06_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            8680,
                            400,
                            "linear",
                            "${texto06_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1",
                            "display",
                            10430,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "opacity",
                            7585,
                            400,
                            "linear",
                            "${texto06_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            7985,
                            400,
                            "linear",
                            "${texto06_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${texto06_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2595,
                            400,
                            "linear",
                            "${texto06_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid96",
                            "opacity",
                            7585,
                            400,
                            "linear",
                            "${imagem06_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid97",
                            "opacity",
                            7985,
                            400,
                            "linear",
                            "${imagem06_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${texto06_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid35",
                            "display",
                            2595,
                            0,
                            "linear",
                            "${texto06_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem06_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            2990,
                            0,
                            "linear",
                            "${imagem06_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "opacity",
                            4495,
                            400,
                            "linear",
                            "${imagem06_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            4895,
                            400,
                            "linear",
                            "${imagem06_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid107",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            7935,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            8045,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            6885,
                            0,
                            "linear",
                            "${texto06_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            9075,
                            0,
                            "linear",
                            "${texto06_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${texto06_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            2990,
                            0,
                            "linear",
                            "${texto06_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${imagem06_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            2595,
                            0,
                            "linear",
                            "${imagem06_01_02}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "imagens07_04_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'justify',
                            id: 'Text',
                            textStyle: ['', '', '27px', ''],
                            text: 'No artigo 64, que tratava das terras devolutas, poderiam ser repassadas para os Estados federados, desde que ficassem reservadas ao governo federal as terras necessárias para a defesa das fronteiras. ',
                            rect: ['0px', '0px', '889px', '25px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'justify',
                            id: 'Text3',
                            textStyle: ['', '', '27px', ''],
                            text: 'Justificando a necessidade de controlar essas fronteiras, o governo instalou em 1910, o SPILTN- Serviço de Proteção ao Índio e Localização de Trabalhadores Nacionais. O programa se por um lado previa a demarcação de terras aos nativos, por outro lado, sugeria que as populações nativas deveriam modificar seus hábitos culturais, assumindo “o asseio, o vestuário, a cultura musical” .',
                            rect: ['0px', '83px', '424px', '125px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            rect: ['385px', '325px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '889px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "texto01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'justify',
                            id: 'Text4Copy',
                            textStyle: ['', '', '27px', ''],
                            text: 'A tentativa de proteger os indígenas dos ataques dos brancos tornou a demarcação de terras limitada para os indígenas. Além disso, “a pacificação também trouxe danos aos povos indígenas: epidemias, gripes, doenças venéreas, restrição do espaço à caça e alimentos, destruição da cultura, costumes, tradições e, também, a varíola” (Bagolin, 2009, p-69)  .',
                            rect: ['0px', '0px', '887px', '226px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', ''],
                            type: 'text',
                            id: '_2',
                            text: '2',
                            align: 'justify',
                            rect: ['121px', '106px', '12px', '18px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '887px', '121px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao06_edgeActions.js");
})("EDGE-13789806");
