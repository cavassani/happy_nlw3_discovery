const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async function(db) {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat:"-21.5819173",
        lng: "-50.1570031",
        name:  "lar teste x",
        about: "Descrição 11111111111111111111",
        whatsapp: "11997298110",
        images: [
            "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/flagged/photo-1576042854593-1f6eebfcfb0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha  e se sinta a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até as 8h",
        open_on_weekends: "1"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar apenas um orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE  id ="1"')
    console.log(orphanage)

    //deletar da tabela
    //await db.run("DELETE FROM orphanages WHERE id = '4'")
})