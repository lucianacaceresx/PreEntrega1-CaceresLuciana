const medicamentos = [
    //analgesicos
    {
        id: 1,
        title: "Tafirol",
        description: "Indicado como analgésico, antiinflamatorio y antipirético, en afecciones musculosqueléticas, ginecológicas, otorrinolaringológicas, que manifiestan inflamación, dolor y/o fiebre.",
        type: "Analgesico",
        imageProduct: {
            firstImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.farmaciasvillegas.com.ar%2Fshop%2Fproduct%2Ftafirol-1-g-24-comprimidos-WS1170969&psig=AOvVaw15Unuxw0k36pb4yecgk41D&ust=1694629910919000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKiizMDapYEDFQAAAAAdAAAAABAE",
            secondImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.scribd.com%2Fdocument%2F377336536%2FTafirol1g&psig=AOvVaw0kwCWNqNXcwIXZm_D461H7&ust=1694630037527000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjG7PzapYEDFQAAAAAdAAAAABAE"
        },
        price: 2000

    },
    {
        id: 2,
        title: "Paracetamol Bayer",
        description: ".Analgésico indicado para el alivio de MÚLTIPLES DOLORES: Cabeza Muela Menstrual. Muscular. Alivia estados gripales y /o resfríos.",
        type: "Analgesico",
        imageProduct: {
            firstImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fparacetamol.bayer.com.ar%2Fsites%2Fg%2Ffiles%2Fvrxlpx30376%2Ffiles%2F2022-10%2FPACK%2520PARACETAMOL%2520BAYER.png%3Fimwidth%3D5000&tbnid=0eOuxRvGyEytrM&vet=12ahUKEwjhi4eo26WBAxWAlZUCHZXMCD8QMygAegQIARBa..i&imgrefurl=https%3A%2F%2Fparacetamol.bayer.com.ar%2Fparacetamol%2520bayer&docid=xQZFHpyBoq2_NM&w=2953&h=1954&q=paracetamol%20bayer&hl=es-419&ved=2ahUKEwjhi4eo26WBAxWAlZUCHZXMCD8QMygAegQIARBa",
            secondImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yumpu.com%2Fes%2Fdocument%2Fview%2F49649139%2F345069a-paracetamol-vl-prospecto-p2-raffo&psig=AOvVaw3Y94uuzGHyy2f_VYcSV_oP&ust=1694630203447000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjqjMzbpYEDFQAAAAAdAAAAABAE",
        },
        price: 1500

    },
    {
        id: 3,
        title: "Actron 600",
        description: ".Este medicamento está indicado para el alivio sintomático de dolores (de espalda, de cabeza, musculares, articulares, de dientes, menstruales). También alivia los dolores asociados a estados gripales, resfrío común y para bajar la fiebre.",
        type: "Analgesico",
        imageProduct: {
            firstImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ffarmaciasdaniotti.com%2Fproducts%2Factron-600-rapida-accion-capsula-blanda-10-comprimidos&psig=AOvVaw2cFO12r9MbLBPydGVR5cUF&ust=1694630362560000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIj55JfcpYEDFQAAAAAdAAAAABAE",
            secondImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgv2-1-f.scribdassets.com%2Fimg%2Fdocument%2F396236482%2Foriginal%2F9a485926c7%2F1688828344%3Fv%3D1&tbnid=t_1wo_3hbplVJM&vet=12ahUKEwjzyvau3KWBAxVXlJUCHS9rAGoQMygFegQIARBf..i&imgrefurl=https%3A%2F%2Fes.scribd.com%2Fdocument%2F396236482%2FActron&docid=yz3h24MWW07zvM&w=768&h=1024&q=actron%20600%20prospecto&hl=es-419&ved=2ahUKEwjzyvau3KWBAxVXlJUCHS9rAGoQMygFegQIARBf",
        },
        price: 3000

    },
    {
        id: 4,
        title: "Geniol",
        description: "Geniol se usa para el alivio sintomático de dolores de cabeza, menstruales, musculares, articulares, dentales leves a moderados, alivio de estados gripales y/o resfríos y para reducir la fiebre.",
        type: "Analgesico",
        imageProduct: {
            firstImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Felea.com%2Fwp-content%2Fuploads%2FPack-Geniol-500-1.png&tbnid=lrQKaCmY4pRW0M&vet=12ahUKEwj1n5f23KWBAxXXr5UCHZgIAicQMygAegQIARBV..i&imgrefurl=https%3A%2F%2Felea.com%2Fproductos%2Fgeniol%2F&docid=VzLPYnrdH478AM&w=400&h=400&q=geniol%20propsecto&hl=es-419&ved=2ahUKEwj1n5f23KWBAxXXr5UCHZgIAicQMygAegQIARBV",
            secondImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgv2-1-f.scribdassets.com%2Fimg%2Fdocument%2F544928702%2Foriginal%2F8f1afe64dc%2F1694059410%3Fv%3D1&tbnid=XtFzh3vdTUIayM&vet=12ahUKEwj1n5f23KWBAxXXr5UCHZgIAicQMygBegQIARBX..i&imgrefurl=https%3A%2F%2Fes.scribd.com%2Fdocument%2F544928702%2FGENIOL-1-GR-Prospecto-Informacion-Para-El-Paciente&docid=jPZLmlClmp4MVM&w=768&h=1024&q=geniol%20propsecto&hl=es-419&ved=2ahUKEwj1n5f23KWBAxXXr5UCHZgIAicQMygBegQIARBX",
        },
        price: 2300

    },

]