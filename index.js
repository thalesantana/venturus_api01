const configExpress = require('./config/configExpress');
const conexao = require('./infra/db');
const Tables = require('./infra/Tables');

conexao.connect(error =>{
    if(error){
        throw error;
    }
    
    Tables.init(conexao)

    app = configExpress();

    
    app.listen(3000, () => {
        console.log('O pai ta ON')
    });
});


