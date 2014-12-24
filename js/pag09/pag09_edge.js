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
                            rect: ['3px', '5px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'titulo09',
                            type: 'text',
                            rect: ['54px', '35px', '882px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "BRASIL REPÚBLICA E SUA DEMOCRATIZAÇÃO.",
                            align: "center",
                            font: ['LithosPro-Black', [34, "px"], "rgba(31,149,5,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto09_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '441px', '25px', 'auto', 'auto'],
                            text: "Os direitos garantidos pela Constituição Federal de 1988, afetou todos os brasileiros, incluindo os povos indígenas A tolerância e o respeito às diferenças culturais e o reconhecimento dos saberes transmitidos pelos indígenas passam a ser garantidos pela política nacional. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem09_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['355px', '487px', '297px', '98px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_01_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem09_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['12px', '153px', '470px', '436px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto09_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['384px', '502px', '235px', '25px', 'auto', 'auto'],
                            text: "Sessão de Promulgação da Assembléia Nacional Constituinte.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem09_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['515px', '131px', '403px', '408px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto09_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['787px', '462px', '157px', '24px', 'auto', 'auto'],
                            text: "Terras indígenas no Brasil.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto09_02_01',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '134', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem09_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['9px', '479px', '553px', '103px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto09_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['340px', '492px', '211px', '24px', 'auto', 'auto'],
                            text: "Índio segurando a Constituição de 1988 para exigir direitos.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem09_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['22px', '210px', '780px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_02_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem09_02_03',
                            display: 'none',
                            type: 'image',
                            rect: ['285px', '266px', '660px', '270px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_02_03.png",'0px','0px']
                        },
                        {
                            id: 'texto09_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['676px', '536px', '210px', '24px', 'auto', 'auto'],
                            text: "Conflito entre índios e fazenderos no MS. ",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['668px', '188px', '134px', '25px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['654px', '242px', '74px', '25px', 'auto', 'auto'],
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
                            rect: [undefined, undefined, '974px', '640px'],
                            overflow: 'hidden',
                            fill: ["rgba(243,234,210,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8240,
                    autoPlay: true,
                    data: [
                        [
                            "eid68",
                            "opacity",
                            5490,
                            400,
                            "linear",
                            "${imagem09_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            5890,
                            400,
                            "linear",
                            "${imagem09_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid81",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            5490,
                            0,
                            "linear",
                            "${imagem09_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "display",
                            6285,
                            0,
                            "linear",
                            "${imagem09_02_03}",
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
                            7840,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            5090,
                            0,
                            "linear",
                            "${imagem09_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "display",
                            6685,
                            0,
                            "linear",
                            "${imagem09_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid37",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${texto09_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            2900,
                            400,
                            "linear",
                            "${texto09_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo09}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            7585,
                            400,
                            "linear",
                            "${titulo09}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid79",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            5835,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            5930,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid25",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem09_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            3195,
                            400,
                            "linear",
                            "${imagem09_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            4190,
                            0,
                            "linear",
                            "${texto09_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            7585,
                            0,
                            "linear",
                            "${texto09_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            5835,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            5930,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "left",
                            4190,
                            500,
                            "linear",
                            "${texto09_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid48",
                            "left",
                            4690,
                            100,
                            "linear",
                            "${texto09_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid49",
                            "left",
                            6985,
                            100,
                            "linear",
                            "${texto09_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid50",
                            "left",
                            7085,
                            500,
                            "linear",
                            "${texto09_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${imagem09_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            2895,
                            400,
                            "linear",
                            "${imagem09_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid15",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto09_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid16",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto09_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid17",
                            "left",
                            3590,
                            100,
                            "linear",
                            "${texto09_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid18",
                            "left",
                            3690,
                            500,
                            "linear",
                            "${texto09_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid105",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${texto09_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            3295,
                            0,
                            "linear",
                            "${texto09_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem09_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid24",
                            "display",
                            3590,
                            0,
                            "linear",
                            "${imagem09_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid31",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${imagem09_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid32",
                            "display",
                            3290,
                            0,
                            "linear",
                            "${imagem09_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "display",
                            4190,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "opacity",
                            5490,
                            400,
                            "linear",
                            "${texto09_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            5890,
                            400,
                            "linear",
                            "${texto09_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            5090,
                            0,
                            "linear",
                            "${texto09_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            6685,
                            0,
                            "linear",
                            "${texto09_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "opacity",
                            5090,
                            400,
                            "linear",
                            "${imagem09_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            6290,
                            400,
                            "linear",
                            "${imagem09_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid45",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${texto09_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            2500,
                            400,
                            "linear",
                            "${texto09_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid80",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            5490,
                            0,
                            "linear",
                            "${texto09_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            6285,
                            0,
                            "linear",
                            "${texto09_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${imagem09_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            2895,
                            0,
                            "linear",
                            "${imagem09_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            4790,
                            0,
                            "linear",
                            "${imagem09_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "display",
                            6985,
                            0,
                            "linear",
                            "${imagem09_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid56",
                            "opacity",
                            4790,
                            400,
                            "linear",
                            "${imagem09_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid57",
                            "opacity",
                            6590,
                            400,
                            "linear",
                            "${imagem09_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${imagem09_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            2500,
                            400,
                            "linear",
                            "${imagem09_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid103",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${texto09_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            2895,
                            0,
                            "linear",
                            "${texto09_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            8240,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "opacity",
                            5090,
                            400,
                            "linear",
                            "${texto09_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid65",
                            "opacity",
                            6290,
                            400,
                            "linear",
                            "${texto09_02_02}",
                            '1',
                            '0.000000'
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
                            rect: ['0px', '0px', '889px', '25px', 'auto', 'auto'],
                            textStyle: ['', '', '27px', ''],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', ''],
                            id: 'Text',
                            text: 'É constitucionalmente estabelecida no interesse dos índios para protegê-los. Os direitos dos índios sobre essas terras independem de demarcação. Pelo Censo de 2010, é 505 o número de áreas indígenas e 182 estão ainda em processo de demarcação  .  <br> \rEssa lentidão tem gerado prejuízos aos indígenas que se veem ameaçados por “novos” ocupantes e tem gerado violência, mortes e até suicídios em massa  .\r',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['752px', '51px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['681px', '106px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            id: '_2',
                            text: '2',
                            align: 'justify',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '889px', '64px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao09_edgeActions.js");
})("EDGE-19410110");
