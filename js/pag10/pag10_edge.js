/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag10/',
        aud='media/',
        vid='media/',
        js='js/pag10/',
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
                            rect: ['134px', '35px', '727px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "BRASIL REPÚBLICA NA HISTÓRIA DO TEMPO PRESENTE",
                            align: "center",
                            font: ['LithosPro-Black', [34, "px"], "rgba(31,149,5,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto10_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '666px', '25px', 'auto', 'auto'],
                            text: "Passados mais de 510 anos de dominação, os povos indígenas no Brasil superaram a assombração dos que acreditavam no seu “desaparecimento” e aparecem, reaparecem e comparecem como sujeitos ativos na sociedade, reafirmando suas identidades étnicas e a reconstrução dos seus projetos socioculturais. Cada vez mais organizados, passaram a reivindicar seus direitos, cobrando um Estado plurinacional, que permita sua autonomia e participação efetiva na vida política, econômica e cultural do país. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem10_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['35px', '360px', '295px', '190px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto10_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['42px', '548px', '280px', '25px', 'auto', 'auto'],
                            text: "Índios participando de audiência pública no Senado.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem10_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['443px', '474px', '517px', '112px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_01_03.png",'0px','0px']
                        },
                        {
                            id: 'imagem10_01_04',
                            display: 'none',
                            type: 'image',
                            rect: ['575px', '132px', '370px', '320px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_01_04.png",'0px','0px']
                        },
                        {
                            id: 'imagem10_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['322px', '373px', '280px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto10_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['606px', '494px', '324px', '25px', 'auto', 'auto'],
                            text: "Na sociedade atual, os índios tem cada vez mais acesso à teconologia e encontram-se conectados. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto10_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '898px', '25px', 'auto', 'auto'],
                            text: "São diversas as contribuições indígenas para a formação da sociedade brasileira atual, como o uso de técnicas de sobrevivência na selva, incorporação de palavras indígenas na língua portuguesa, sua arte culinária, conhecimentos da medicina tradicional, preservação da megabiodiversidade de suas terras, etc.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["0px", "", "27px", ""]
                        },
                        {
                            id: 'imagem10_02_03',
                            display: 'none',
                            type: 'image',
                            rect: ['56px', '398px', '501px', '198px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_02_03.png",'0px','0px']
                        },
                        {
                            id: 'imagem10_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['20px', '211px', '470px', '270px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto10_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['72px', '484px', '200px', '24px', 'auto', 'auto'],
                            text: "Moqueca de camarão é um prato típico originário dos índios da etnia potiguara. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem10_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['282px', '271px', '260px', '210px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto10_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['333px', '484px', '224px', '24px', 'auto', 'auto'],
                            text: "O prato paraense Tacacá é tipicamente indígena.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem10_02_04',
                            display: 'none',
                            type: 'image',
                            rect: ['505px', '211px', '445px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_02_04.png",'0px','0px']
                        },
                        {
                            id: 'texto10_02_04',
                            display: 'none',
                            type: 'text',
                            rect: ['633px', '461px', '241px', '24px', 'auto', 'auto'],
                            text: "Etnia Xucuru tem resgatado o uso de mediciana alternativa com apoio da FUNASA.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
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
                    duration: 9025,
                    autoPlay: true,
                    data: [
                        [
                            "eid79",
                            "opacity",
                            5785,
                            400,
                            "linear",
                            "${imagem10_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            6980,
                            400,
                            "linear",
                            "${imagem10_02_02}",
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
                            8625,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid95",
                            "opacity",
                            6185,
                            400,
                            "linear",
                            "${texto10_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            6585,
                            400,
                            "linear",
                            "${texto10_02_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid49",
                            "left",
                            4785,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid50",
                            "left",
                            5285,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid52",
                            "left",
                            7770,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid53",
                            "left",
                            7870,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${texto10_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            3295,
                            400,
                            "linear",
                            "${texto10_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${texto10_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            3990,
                            400,
                            "linear",
                            "${texto10_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            6185,
                            0,
                            "linear",
                            "${texto10_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            6980,
                            0,
                            "linear",
                            "${texto10_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid83",
                            "opacity",
                            5785,
                            400,
                            "linear",
                            "${texto10_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            6980,
                            400,
                            "linear",
                            "${texto10_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid71",
                            "opacity",
                            5385,
                            400,
                            "linear",
                            "${imagem10_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            7375,
                            400,
                            "linear",
                            "${imagem10_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid39",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${imagem10_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            3295,
                            400,
                            "linear",
                            "${imagem10_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid75",
                            "opacity",
                            5385,
                            400,
                            "linear",
                            "${texto10_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            7375,
                            400,
                            "linear",
                            "${texto10_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem10_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            3990,
                            400,
                            "linear",
                            "${imagem10_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid54",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            4785,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            8370,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "opacity",
                            6185,
                            400,
                            "linear",
                            "${imagem10_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            6585,
                            400,
                            "linear",
                            "${imagem10_02_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto10_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "display",
                            4785,
                            0,
                            "linear",
                            "${texto10_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem10_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "display",
                            4385,
                            0,
                            "linear",
                            "${imagem10_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "opacity",
                            2500,
                            400,
                            "linear",
                            "${imagem10_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2900,
                            400,
                            "linear",
                            "${imagem10_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid103",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${imagem10_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            3295,
                            0,
                            "linear",
                            "${imagem10_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${imagem10_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            3990,
                            0,
                            "linear",
                            "${imagem10_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            5785,
                            0,
                            "linear",
                            "${imagem10_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            7375,
                            0,
                            "linear",
                            "${imagem10_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${texto10_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            4385,
                            0,
                            "linear",
                            "${texto10_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${texto10_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            3690,
                            0,
                            "linear",
                            "${texto10_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            9025,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            5785,
                            0,
                            "linear",
                            "${texto10_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            7375,
                            0,
                            "linear",
                            "${texto10_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${imagem10_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            3595,
                            400,
                            "linear",
                            "${imagem10_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid107",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${imagem10_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            7770,
                            0,
                            "linear",
                            "${imagem10_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${texto10_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid74",
                            "display",
                            7770,
                            0,
                            "linear",
                            "${texto10_02_02}",
                            'block',
                            'none'
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
                            8370,
                            400,
                            "linear",
                            "${titulo09}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${imagem10_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            3690,
                            0,
                            "linear",
                            "${imagem10_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid87",
                            "opacity",
                            5604,
                            400,
                            "linear",
                            "${imagem10_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            7214,
                            400,
                            "linear",
                            "${imagem10_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            6185,
                            0,
                            "linear",
                            "${imagem10_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "display",
                            6980,
                            0,
                            "linear",
                            "${imagem10_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            5604,
                            0,
                            "linear",
                            "${imagem10_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            7609,
                            0,
                            "linear",
                            "${imagem10_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto10_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid9",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto10_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid10",
                            "left",
                            4185,
                            100,
                            "linear",
                            "${texto10_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid11",
                            "left",
                            4285,
                            500,
                            "linear",
                            "${texto10_01_01}",
                            '45px',
                            '-905px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag10/pag10_edgeActions.js");
})("EDGE-16934144");
