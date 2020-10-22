const app = require('./src/app');
const PORT = 5555;
const mongoose = require('mongoose')
const config = require('./src/config/keys.config')

mongoose.connect(config.mongodbUri, { useNewUrlParser: true })
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error on connection', err))
mongoose.set('useFindAndModify', false)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});