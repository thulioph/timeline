/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag01/',
        aud='media/',
        vid='media/',
        js='js/pag01/',
        fonts = {
            'LithosPro-Black': '@font-face {    font-family: \'LithosPro-Black\';    src: url(\'font/LithosPro-Black.eot\'), url(\'font/LithosPro-Black.ttf\') format(\'truetype\'), url(\'font/LithosPro-Black.otf\'), url(\'font/LithosPro-Black.woff\');    font-weight: normal;    font-style: normal;}',
            'MS-Reference-Sans-Serif': '@font-face {    font-family: \'MS-Reference-Sans-Serif\';    src: url(\'font/REFSAN.eot\'), url(\'font/REFSAN.ttf\') format(\'truetype\'), url(\'font/REFSAN.otf\'), url(\'font/REFSAN.woff\');    font-weight: normal;    font-style: normal;}'        },
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
                            id: 'borda3',
                            type: 'image',
                            rect: ['4px', '8px', '967px', '633px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"borda.png",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            type: 'text',
                            rect: ['217px', '41px', 'auto', 'auto', 'auto', 'auto'],
                            text: "O BRASIL PRÉ-HISTÓRICO",
                            align: "center",
                            font: ['LithosPro-Black', [40, "px"], "rgba(31,149,5,1.00)", "400", "none solid rgb(46, 112, 159)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'texto01_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-886px', '131px', '886px', '23px', 'auto', 'auto'],
                            text: "Niède Guidon descobriu no Piauí (Serra da Capivara), a prova da existência humana no Brasil, no fim do Paleistoceno, ou seja anterior a 12.000 AP.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(46, 112, 159)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'linha01',
                            display: 'none',
                            type: 'image',
                            rect: ['377px', '158px', '330px', '39px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"linha01.png",'0px','0px']
                        },
                        {
                            id: 'texto01_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['510px', '197px', '422px', '23px', 'auto', 'auto'],
                            text: "O Parque Nacional Serra da Capivara é uma unidade de conservação brasileira de proteção integral à natureza localizada nos municípios piauienses de Canto do Buriti, Coronel José Dias, São João do Piauí e São Raimundo Nonato.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(46, 112, 159)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem01_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['406px', '265px', '559px', '333px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem01.png",'0px','0px']
                        },
                        {
                            id: 'texto01_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['684px', '492px', '252px', '23px', 'auto', 'auto'],
                            text: "O parque nacional foi criado graças, em grande parte, ao trabalho da arqueóloga Niéde Guidon.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(46, 112, 159)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem01_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['176px', '203px', '278px', '124px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem02.png",'0px','0px']
                        },
                        {
                            id: 'imagem01_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['10px', '222px', '429px', '376px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03.png",'0px','0px']
                        },
                        {
                            id: 'texto01_01_04',
                            display: 'none',
                            type: 'text',
                            rect: ['46px', '391px', '370px', '23px', 'auto', 'auto'],
                            text: "Área de maior concentração de sítios pré-históricos do continente americano e Patrimônio Cultural da Humanidade - UNESCO.  Os artefatos encontrados apresentam vestígios do homem há 50.000 anos, os mais antigos registros na América. Contém a maior quantidade de pinturas rupestres do mundo.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(46, 112, 159)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto01_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-680px', '143px', '671px', '32px', 'auto', 'auto'],
                            text: "Estudos de Neves e Piló (2008), em 1989 ganharam notabilidade. Seus estudos revelaram que a brasileira Luzia, primeiro esqueleto humano encontrado  pela missão arqueológica franco-brasileira coordenada por Annette Laming-Emperaire, se parecia, em termos de fisionomia, mais com australianos e africanos do que com os índios e os asiáticos atuais. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem01_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['452px', '141px', '513px', '305px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem04.png",'0px','0px']
                        },
                        {
                            id: 'texto01_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['595px', '383px', '173px', '32px', 'auto', 'auto'],
                            text: "Reconstituição  da face de Luzia",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(154,1,1,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'imagem01_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['495px', '429px', '469px', '175px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem05.png",'0px','0px']
                        },
                        {
                            id: 'texto01_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['987px', '497px', '260px', '32px', 'auto', 'auto'],
                            text: "Crânio de Luzia, encontrado em Minas Gerais, na Lagoa Santa (Gruta do Sumidoro), nos anos 1974 e 1975. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'imagem01_02_03',
                            display: 'none',
                            type: 'image',
                            rect: ['-17px', '249px', '526px', '341px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem06.png",'0px','0px']
                        },
                        {
                            id: 'texto01_02_04',
                            display: 'none',
                            type: 'text',
                            rect: ['-285px', '367px', '270px', '33px', 'auto', 'auto'],
                            text: "Este crânio de uma mulher, com cerca de 20 anos, foi encontrado no início dos anos 70 pela missão arqueológica franco-brasileira, chefiada pela arqueóloga francesa Annette Laming-Emperaire (1917-1977). ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto01_03_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-511px', '143px', '500px', '32px', 'auto', 'auto'],
                            text: "Foi Richard Neave, da Universidade de Manchester, quem fez a reconstituição de suas feições. Tendo sido capa da revista Veja em 25/08/1999, Luzia ganhou visibilidade e o jornalista Teich escreveu artigo detalhando essa reconstituição. Atualmente novas escavações arqueológicas têm sido realizadas em várias regiões do país e segundo Martin (2002), têm mostrado a presença humana a partir de 15.000.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem01_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['307px', '139px', '399px', '206px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem07.png",'0px','0px']
                        },
                        {
                            id: 'imagem01_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['566px', '327px', '220px', '204px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08.png",'0px','0px']
                        },
                        {
                            id: 'imagem01_03_03',
                            display: 'none',
                            type: 'image',
                            rect: ['741px', '162px', '220px', '391px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09.png",'0px','0px']
                        },
                        {
                            id: 'texto01_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['978px', '549px', '288px', '32px', 'auto', 'auto'],
                            text: "Parte do processo de reconstituição do rosto de Luzia",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(154,1,1,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem01_03_04',
                            display: 'none',
                            type: 'image',
                            rect: ['24px', '221px', '527px', '378px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem10.png",'0px','0px']
                        },
                        {
                            id: 'texto01_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['183px', '533px', '360px', '33px', 'auto', 'auto'],
                            text: "Capa da Revista Veja de  25/08/1999, com a reconstituição do rosto de Luzia.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(154,1,1,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'avancar',
                            display: 'none',
                            type: 'image',
                            rect: ['935px', '43px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"avancar.png",'0px','0px']
                        },
                        {
                            id: 'voltar',
                            display: 'none',
                            type: 'image',
                            rect: ['18px', '43px', '20px', '41px', 'auto', 'auto'],
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
                    duration: 19863,
                    autoPlay: true,
                    data: [
                        [
                            "eid552",
                            "left",
                            7814,
                            500,
                            "linear",
                            "${texto01_02_03}",
                            '987px',
                            '667px'
                        ],
                        [
                            "eid553",
                            "left",
                            8314,
                            100,
                            "linear",
                            "${texto01_02_03}",
                            '667px',
                            '677px'
                        ],
                        [
                            "eid554",
                            "left",
                            10600,
                            100,
                            "linear",
                            "${texto01_02_03}",
                            '677px',
                            '667px'
                        ],
                        [
                            "eid555",
                            "left",
                            10700,
                            500,
                            "linear",
                            "${texto01_02_03}",
                            '667px',
                            '987px'
                        ],
                        [
                            "eid642",
                            "display",
                            0,
                            0,
                            "linear",
                            "${linha01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid459",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${linha01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid460",
                            "display",
                            5809,
                            0,
                            "linear",
                            "${linha01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid640",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid470",
                            "display",
                            1824,
                            0,
                            "linear",
                            "${imagem01_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid471",
                            "display",
                            5409,
                            0,
                            "linear",
                            "${imagem01_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid465",
                            "opacity",
                            1250,
                            400,
                            "linear",
                            "${texto01_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid466",
                            "opacity",
                            5409,
                            400,
                            "linear",
                            "${texto01_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid632",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid538",
                            "display",
                            7014,
                            0,
                            "linear",
                            "${texto01_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid539",
                            "display",
                            12195,
                            0,
                            "linear",
                            "${texto01_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid575",
                            "opacity",
                            8414,
                            400,
                            "linear",
                            "${imagem01_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid576",
                            "opacity",
                            10200,
                            400,
                            "linear",
                            "${imagem01_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid628",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid558",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${texto01_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid559",
                            "display",
                            10200,
                            0,
                            "linear",
                            "${texto01_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid597",
                            "opacity",
                            13478,
                            400,
                            "linear",
                            "${imagem01_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid598",
                            "opacity",
                            18263,
                            400,
                            "linear",
                            "${imagem01_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid624",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid603",
                            "display",
                            14278,
                            0,
                            "linear",
                            "${imagem01_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid604",
                            "display",
                            17868,
                            0,
                            "linear",
                            "${imagem01_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid524",
                            "opacity",
                            2624,
                            400,
                            "linear",
                            "${imagem01_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid525",
                            "opacity",
                            4224,
                            400,
                            "linear",
                            "${imagem01_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid625",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid599",
                            "display",
                            13878,
                            0,
                            "linear",
                            "${imagem01_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid600",
                            "display",
                            18263,
                            0,
                            "linear",
                            "${imagem01_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid639",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid480",
                            "display",
                            2224,
                            0,
                            "linear",
                            "${texto01_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid481",
                            "display",
                            5014,
                            0,
                            "linear",
                            "${texto01_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid501",
                            "left",
                            3024,
                            500,
                            "linear",
                            "${texto01_01_04}",
                            '-384px',
                            '56px'
                        ],
                        [
                            "eid512",
                            "left",
                            3524,
                            100,
                            "linear",
                            "${texto01_01_04}",
                            '56px',
                            '46px'
                        ],
                        [
                            "eid514",
                            "left",
                            3624,
                            100,
                            "linear",
                            "${texto01_01_04}",
                            '46px',
                            '56px'
                        ],
                        [
                            "eid504",
                            "left",
                            3724,
                            500,
                            "linear",
                            "${texto01_01_04}",
                            '56px',
                            '-384px'
                        ],
                        [
                            "eid443",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${borda3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid442",
                            "opacity",
                            19463,
                            400,
                            "linear",
                            "${borda3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid631",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid542",
                            "display",
                            7414,
                            0,
                            "linear",
                            "${imagem01_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid543",
                            "display",
                            11695,
                            0,
                            "linear",
                            "${imagem01_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid623",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid587",
                            "display",
                            14678,
                            0,
                            "linear",
                            "${texto01_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid588",
                            "display",
                            17468,
                            0,
                            "linear",
                            "${texto01_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid634",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid528",
                            "display",
                            6414,
                            0,
                            "linear",
                            "${texto01_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid529",
                            "display",
                            12878,
                            0,
                            "linear",
                            "${texto01_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid544",
                            "opacity",
                            7414,
                            400,
                            "linear",
                            "${imagem01_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid545",
                            "opacity",
                            11300,
                            400,
                            "linear",
                            "${imagem01_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid601",
                            "opacity",
                            13878,
                            400,
                            "linear",
                            "${imagem01_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid602",
                            "opacity",
                            17868,
                            400,
                            "linear",
                            "${imagem01_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid461",
                            "opacity",
                            1250,
                            400,
                            "linear",
                            "${linha01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid462",
                            "opacity",
                            5414,
                            400,
                            "linear",
                            "${linha01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid536",
                            "opacity",
                            7014,
                            400,
                            "linear",
                            "${imagem01_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid537",
                            "opacity",
                            11800,
                            400,
                            "linear",
                            "${imagem01_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid469",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${linha01}",
                            '158px',
                            '158px'
                        ],
                        [
                            "eid441",
                            "display",
                            19863,
                            0,
                            "linear",
                            "${borda3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid626",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid595",
                            "display",
                            13478,
                            0,
                            "linear",
                            "${imagem01_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid596",
                            "display",
                            18658,
                            0,
                            "linear",
                            "${imagem01_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid629",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid573",
                            "display",
                            8414,
                            0,
                            "linear",
                            "${imagem01_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid574",
                            "display",
                            10595,
                            0,
                            "linear",
                            "${imagem01_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid649",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid648",
                            "display",
                            3624,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid646",
                            "display",
                            16078,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid472",
                            "opacity",
                            1824,
                            400,
                            "linear",
                            "${imagem01_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid473",
                            "opacity",
                            5014,
                            400,
                            "linear",
                            "${imagem01_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid530",
                            "left",
                            6414,
                            500,
                            "linear",
                            "${texto01_02_01}",
                            '-680px',
                            '49px'
                        ],
                        [
                            "eid531",
                            "left",
                            6914,
                            100,
                            "linear",
                            "${texto01_02_01}",
                            '49px',
                            '39px'
                        ],
                        [
                            "eid532",
                            "left",
                            12278,
                            100,
                            "linear",
                            "${texto01_02_01}",
                            '39px',
                            '49px'
                        ],
                        [
                            "eid533",
                            "left",
                            12378,
                            500,
                            "linear",
                            "${texto01_02_01}",
                            '49px',
                            '-680px'
                        ],
                        [
                            "eid609",
                            "opacity",
                            15278,
                            400,
                            "linear",
                            "${imagem01_03_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid610",
                            "opacity",
                            16473,
                            400,
                            "linear",
                            "${imagem01_03_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid444",
                            "opacity",
                            250,
                            400,
                            "linear",
                            "${titulo}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid445",
                            "opacity",
                            19258,
                            400,
                            "linear",
                            "${titulo}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid621",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid611",
                            "display",
                            15678,
                            0,
                            "linear",
                            "${texto01_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid612",
                            "display",
                            16473,
                            0,
                            "linear",
                            "${texto01_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid643",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid453",
                            "display",
                            650,
                            0,
                            "linear",
                            "${texto01_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid454",
                            "display",
                            6414,
                            0,
                            "linear",
                            "${texto01_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid540",
                            "opacity",
                            7014,
                            400,
                            "linear",
                            "${texto01_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid541",
                            "opacity",
                            11800,
                            400,
                            "linear",
                            "${texto01_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid482",
                            "left",
                            2224,
                            500,
                            "linear",
                            "${texto01_01_03}",
                            '988px',
                            '674px'
                        ],
                        [
                            "eid497",
                            "left",
                            2724,
                            76,
                            "linear",
                            "${texto01_01_03}",
                            '674px',
                            '684px'
                        ],
                        [
                            "eid496",
                            "left",
                            4414,
                            100,
                            "linear",
                            "${texto01_01_03}",
                            '684px',
                            '674px'
                        ],
                        [
                            "eid485",
                            "left",
                            4514,
                            500,
                            "linear",
                            "${texto01_01_03}",
                            '674px',
                            '998px'
                        ],
                        [
                            "eid638",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid518",
                            "display",
                            2224,
                            0,
                            "linear",
                            "${imagem01_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid519",
                            "display",
                            5014,
                            0,
                            "linear",
                            "${imagem01_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid622",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_03_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid607",
                            "display",
                            15278,
                            0,
                            "linear",
                            "${imagem01_03_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid608",
                            "display",
                            16868,
                            0,
                            "linear",
                            "${imagem01_03_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid627",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid581",
                            "display",
                            12878,
                            0,
                            "linear",
                            "${texto01_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid582",
                            "display",
                            19258,
                            0,
                            "linear",
                            "${texto01_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid613",
                            "opacity",
                            15678,
                            400,
                            "linear",
                            "${texto01_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid614",
                            "opacity",
                            16078,
                            400,
                            "linear",
                            "${texto01_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid520",
                            "opacity",
                            2224,
                            400,
                            "linear",
                            "${imagem01_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid521",
                            "opacity",
                            4619,
                            400,
                            "linear",
                            "${imagem01_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid635",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid499",
                            "display",
                            3024,
                            0,
                            "linear",
                            "${texto01_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid500",
                            "display",
                            4224,
                            0,
                            "linear",
                            "${texto01_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid647",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid645",
                            "display",
                            9600,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid650",
                            "display",
                            19863,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid633",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid534",
                            "display",
                            7014,
                            0,
                            "linear",
                            "${imagem01_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid535",
                            "display",
                            12195,
                            0,
                            "linear",
                            "${imagem01_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid636",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid522",
                            "display",
                            2624,
                            0,
                            "linear",
                            "${imagem01_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid523",
                            "display",
                            4619,
                            0,
                            "linear",
                            "${imagem01_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid560",
                            "left",
                            9000,
                            500,
                            "linear",
                            "${texto01_02_04}",
                            '-285px',
                            '175px'
                        ],
                        [
                            "eid561",
                            "left",
                            9500,
                            100,
                            "linear",
                            "${texto01_02_04}",
                            '175px',
                            '165px'
                        ],
                        [
                            "eid562",
                            "left",
                            9600,
                            100,
                            "linear",
                            "${texto01_02_04}",
                            '165px',
                            '175px'
                        ],
                        [
                            "eid563",
                            "left",
                            9700,
                            500,
                            "linear",
                            "${texto01_02_04}",
                            '175px',
                            '-285px'
                        ],
                        [
                            "eid641",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid463",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${texto01_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid464",
                            "display",
                            5804,
                            0,
                            "linear",
                            "${texto01_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid577",
                            "left",
                            12878,
                            500,
                            "linear",
                            "${texto01_03_01}",
                            '-511px',
                            '49px'
                        ],
                        [
                            "eid578",
                            "left",
                            13378,
                            100,
                            "linear",
                            "${texto01_03_01}",
                            '49px',
                            '39px'
                        ],
                        [
                            "eid579",
                            "left",
                            18658,
                            100,
                            "linear",
                            "${texto01_03_01}",
                            '39px',
                            '49px'
                        ],
                        [
                            "eid580",
                            "left",
                            18758,
                            500,
                            "linear",
                            "${texto01_03_01}",
                            '49px',
                            '-511px'
                        ],
                        [
                            "eid455",
                            "left",
                            650,
                            500,
                            "linear",
                            "${texto01_01_01}",
                            '-886px',
                            '51px'
                        ],
                        [
                            "eid456",
                            "left",
                            1150,
                            100,
                            "linear",
                            "${texto01_01_01}",
                            '51px',
                            '42px'
                        ],
                        [
                            "eid457",
                            "left",
                            5814,
                            100,
                            "linear",
                            "${texto01_01_01}",
                            '42px',
                            '54px'
                        ],
                        [
                            "eid458",
                            "left",
                            5914,
                            500,
                            "linear",
                            "${texto01_01_01}",
                            '54px',
                            '-886px'
                        ],
                        [
                            "eid583",
                            "left",
                            14678,
                            500,
                            "linear",
                            "${texto01_03_02}",
                            '978px',
                            '608px'
                        ],
                        [
                            "eid584",
                            "left",
                            15178,
                            100,
                            "linear",
                            "${texto01_03_02}",
                            '608px',
                            '618px'
                        ],
                        [
                            "eid585",
                            "left",
                            16868,
                            100,
                            "linear",
                            "${texto01_03_02}",
                            '618px',
                            '608px'
                        ],
                        [
                            "eid586",
                            "left",
                            16968,
                            500,
                            "linear",
                            "${texto01_03_02}",
                            '608px',
                            '978px'
                        ],
                        [
                            "eid630",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid556",
                            "display",
                            7814,
                            0,
                            "linear",
                            "${texto01_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid557",
                            "display",
                            11200,
                            0,
                            "linear",
                            "${texto01_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid605",
                            "opacity",
                            14278,
                            400,
                            "linear",
                            "${imagem01_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid606",
                            "opacity",
                            17473,
                            400,
                            "linear",
                            "${imagem01_03_03}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag01/pag01_edgeActions.js");
})("EDGE-21969087");
