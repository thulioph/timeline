/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag03/',
        aud='media/',
        vid='media/',
        js='js/pag03/',
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
                            rect: ['4px', '7px', '967px', '633px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"borda.png",'0px','0px']
                        },
                        {
                            id: 'titulo03',
                            display: 'none',
                            type: 'text',
                            rect: ['79px', '45px', '841px', '49px', 'auto', 'auto'],
                            opacity: '0',
                            text: "O BRASIL COLONIAL",
                            align: "center",
                            font: ['LithosPro-Black', [39, "px"], "rgba(31,149,5,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto03_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-896px', '124px', '889px', '28px', 'auto', 'auto'],
                            text: "A colonização propriamente dita no Brasil só foi iniciada a partir dos 30 primeiros anos e efetivada quando da chegada dos primeiros governadores-gerais das Capitanias Hereditária e jesuítas. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem03_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['22px', '210px', '945px', '244px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem01.png",'0px','0px']
                        },
                        {
                            id: 'imagem03_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['393px', '320px', '558px', '276px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02.png",'0px','0px']
                        },
                        {
                            id: 'texto03_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['221px', '241px', '704px', '28px', 'auto', 'auto'],
                            text: "Tomé de Sousa foi um militar e político português, primeiro governador-geral do Brasil, quando este atendia por colônia do Brasil, chegado em 1549. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto03_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['171px', '568px', '212px', '28px', 'auto', 'auto'],
                            text: "Chegada de Capitanias",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,40,40,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto03_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '126px', '895px', '27px', 'auto', 'auto'],
                            text: "Várias estratégias foram usadas para introduzir a moral cristã, que variava desde a nova demarcação territorial, uso de vestimenta à moda europeia, direção e sujeição aos trabalhos forçados, obrigação de assistir a cerimônias religiosas e cumprimento da rígida educação aos moldes cristãos, com consequente punição, proteção e assistência.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem03_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['-4px', '206px', '406px', '335px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03.png",'0px','0px']
                        },
                        {
                            id: 'texto03_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['50px', '548px', '297px', '49px', 'auto', 'auto'],
                            text: "Índios forçados a trabalhar na coleta de Pau-Brasil",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,40,40,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem03_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['469px', '206px', '481px', '375px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem04.png",'0px','0px']
                        },
                        {
                            id: 'texto03_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['496px', '547px', '371px', '49px', 'auto', 'auto'],
                            text: "Tentativa de catequização dos índios",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,40,40,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto03_03_01',
                            symbolName: 'imagem03_03_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-902px', '126', '891', '118', 'auto', 'auto']
                        },
                        {
                            id: 'imagem03_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['38px', '341px', '898px', '246px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem05.png",'0px','0px']
                        },
                        {
                            id: 'texto03_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['56px', '448px', '385px', '30px', 'auto', 'auto'],
                            text: "A escravidão indígena no Brasil existiu principalmente no começo da colonização portuguesa, minguando posteriormente pela preferência pelo escravo negro, e por pressão dos lucros do tráfico negreiro.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(153, 40, 40)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['391px', '232px', '68px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'avancar',
                            display: 'none',
                            type: 'image',
                            rect: ['936px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"avancar2.png",'0px','0px']
                        },
                        {
                            id: 'voltar',
                            display: 'none',
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
                    duration: 13150,
                    autoPlay: true,
                    data: [
                        [
                            "eid42",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${borda}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            12750,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid102",
                            "opacity",
                            10555,
                            400,
                            "linear",
                            "${texto03_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            10955,
                            400,
                            "linear",
                            "${texto03_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid113",
                            "opacity",
                            400,
                            400,
                            "linear",
                            "${titulo03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            12350,
                            400,
                            "linear",
                            "${titulo03}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto03_01_01}",
                            '-896px',
                            '54px'
                        ],
                        [
                            "eid24",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto03_01_01}",
                            '54px',
                            '44px'
                        ],
                        [
                            "eid25",
                            "left",
                            4580,
                            100,
                            "linear",
                            "${texto03_01_01}",
                            '44px',
                            '54px'
                        ],
                        [
                            "eid26",
                            "left",
                            4680,
                            500,
                            "linear",
                            "${texto03_01_01}",
                            '54px',
                            '-896px'
                        ],
                        [
                            "eid90",
                            "left",
                            9560,
                            500,
                            "linear",
                            "${texto03_03_01}",
                            '-902px',
                            '52px'
                        ],
                        [
                            "eid91",
                            "left",
                            10060,
                            100,
                            "linear",
                            "${texto03_03_01}",
                            '52px',
                            '42px'
                        ],
                        [
                            "eid92",
                            "left",
                            11750,
                            100,
                            "linear",
                            "${texto03_03_01}",
                            '42px',
                            '52px'
                        ],
                        [
                            "eid93",
                            "left",
                            11850,
                            500,
                            "linear",
                            "${texto03_03_01}",
                            '52px',
                            '-902px'
                        ],
                        [
                            "eid47",
                            "left",
                            5180,
                            500,
                            "linear",
                            "${texto03_02_01}",
                            '985px',
                            '26px'
                        ],
                        [
                            "eid48",
                            "left",
                            5680,
                            100,
                            "linear",
                            "${texto03_02_01}",
                            '26px',
                            '36px'
                        ],
                        [
                            "eid49",
                            "left",
                            8960,
                            100,
                            "linear",
                            "${texto03_02_01}",
                            '36px',
                            '26px'
                        ],
                        [
                            "eid50",
                            "left",
                            9060,
                            500,
                            "linear",
                            "${texto03_02_01}",
                            '26px',
                            '985px'
                        ],
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            6580,
                            0,
                            "linear",
                            "${imagem03_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            8170,
                            0,
                            "linear",
                            "${imagem03_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "opacity",
                            6180,
                            400,
                            "linear",
                            "${texto03_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            8170,
                            400,
                            "linear",
                            "${texto03_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid123",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${imagem03_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "display",
                            4185,
                            0,
                            "linear",
                            "${imagem03_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            0,
                            0,
                            "linear",
                            "${titulo03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            400,
                            0,
                            "linear",
                            "${titulo03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            12750,
                            0,
                            "linear",
                            "${titulo03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${texto03_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            3395,
                            400,
                            "linear",
                            "${texto03_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            5780,
                            0,
                            "linear",
                            "${imagem03_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            8960,
                            0,
                            "linear",
                            "${imagem03_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            5180,
                            0,
                            "linear",
                            "${texto03_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            9560,
                            0,
                            "linear",
                            "${texto03_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem03_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            4185,
                            400,
                            "linear",
                            "${imagem03_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            6980,
                            0,
                            "linear",
                            "${texto03_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            7775,
                            0,
                            "linear",
                            "${texto03_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            6180,
                            0,
                            "linear",
                            "${texto03_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid58",
                            "display",
                            8565,
                            0,
                            "linear",
                            "${texto03_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            2600,
                            0,
                            "linear",
                            "${texto03_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10",
                            "display",
                            3395,
                            0,
                            "linear",
                            "${texto03_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            10905,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            11015,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "opacity",
                            10160,
                            400,
                            "linear",
                            "${imagem03_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid99",
                            "opacity",
                            11355,
                            400,
                            "linear",
                            "${imagem03_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid157",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "display",
                            10955,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem03_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2",
                            "display",
                            4580,
                            0,
                            "linear",
                            "${imagem03_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${texto03_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "display",
                            3790,
                            0,
                            "linear",
                            "${texto03_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid55",
                            "opacity",
                            5780,
                            400,
                            "linear",
                            "${imagem03_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            8565,
                            400,
                            "linear",
                            "${imagem03_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid153",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            7380,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            13150,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "opacity",
                            2600,
                            400,
                            "linear",
                            "${texto03_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            3000,
                            400,
                            "linear",
                            "${texto03_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            10555,
                            0,
                            "linear",
                            "${texto03_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            11350,
                            0,
                            "linear",
                            "${texto03_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid63",
                            "opacity",
                            6580,
                            400,
                            "linear",
                            "${imagem03_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            7775,
                            400,
                            "linear",
                            "${imagem03_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid7",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${imagem03_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8",
                            "opacity",
                            3790,
                            400,
                            "linear",
                            "${imagem03_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid125",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            10160,
                            0,
                            "linear",
                            "${imagem03_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${imagem03_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "opacity",
                            6980,
                            400,
                            "linear",
                            "${texto03_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid68",
                            "opacity",
                            7380,
                            400,
                            "linear",
                            "${texto03_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid27",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto03_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "display",
                            5180,
                            0,
                            "linear",
                            "${texto03_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            9560,
                            0,
                            "linear",
                            "${texto03_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            12350,
                            0,
                            "linear",
                            "${texto03_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            13150,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "texto_03_03_01": {
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
                            id: 'Text',
                            text: 'Povos de várias etnias foram forçados a se ajuntarem nos aldeamentos gerando uma grande reserva de mão-de-obra já adaptada, o que causou a cobiça dos colonos e bandeirantes. A cisão entre “índios mansos”, ou aldeados e “índios bárbaros” ou não cristãos proporcionou aos primeiros a sobrevivência nos aldeamentos e aos últimos o cativeiro, o massacre, a guerra-justa . Na tentativa de punir os indígenas pelas infrações cometidas foram praticadas violências desde castigos corporais a uma pedagogia policiadora, obediente e fiel. ',
                            align: 'justify',
                            rect: ['0px', '0px', '898px', '27px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [14, 'px'], 'rgba(153,40,40,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text2',
                            text: '1',
                            align: 'justify',
                            rect: ['407px', '100px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '898px', '117px']
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
                            id: 'imagem03_03_01',
                            textStyle: ['', '', '27px', ''],
                            text: 'Povos de várias etnias foram forçados a se ajuntarem nos aldeamentos gerando uma grande reserva de mão-de-obra já adaptada, o que causou a cobiça dos colonos e bandeirantes. A cisão entre “índios mansos”, ou aldeados e “índios bárbaros” ou não cristãos proporcionou aos primeiros a sobrevivência nos aldeamentos e aos últimos o cativeiro, o massacre, a guerra-justa . Na tentativa de punir os indígenas pelas infrações cometidas foram praticadas violências desde castigos corporais a uma pedagogia policiadora, obediente e fiel. ',
                            rect: ['0px', '0px', '891px', '30px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text6',
                            text: '1',
                            align: 'justify',
                            rect: ['405px', '106px', 'auto', 'auto', 'auto', 'auto']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag03/pag03_edgeActions.js");
})("EDGE-13578893");
