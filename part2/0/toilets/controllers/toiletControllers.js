// import and initialize express
// initialize Router

// import model

// restful routing =>

// 'get's send the view for inputing data
// 'post's recieve the data from the view for inputing the data

/* ------------------- INDEX -------------------*/
// GET  "/"                     => show all toilet

/* ------------------- CREATE -------------------*/
// GET  "/toilet"                => Create new Toilet
// POST "/toilet"                => Create new Toilet
//                                 Redirect to "/toilet/:id"

/* ------------------- READ -------------------*/
// GET  "/toilet/:id"             => View Toilet Info with id ...

/* ------------------- UPDATE -------------------*/
// GET  "/toilet/:id/update"     => update Toilet with id...
// POST "/toilet/:id/update"     => update Toilet with id...
//                                 Redirect to "/toilet/:id"

/* ------------------- DELETE -------------------*/
// GET  "/toilet/:id/delete"     => delete Toilet with id...
// POST "/toilet/:id/delete"     => delete Toilet with id...
//                                 Redirect to "/"

// export router