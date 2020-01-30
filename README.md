"# BTPN_TEST_Yhogi_andianggara" 


no.1 

    npx express-generator
    npm install

no.2

    npm install --save sequelize
    npm install --save mysql2

no.3

    npm install --save-dev sequelize-cli
    npx sequelize-cli init


no.4 
    
    buat koneksi pada database di folder config di file config

no.5 
    
    buat model dan migration
    contoh :
    npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
    Kalo ingin di buatkan table pada database gunakan :
    npx sequelize-cli db:migrate
    jika koneksi benar maka database dan tablenya akan terbuat

no.6
    
    buat controller untuk fungsi standart CRUD

no.7
    
    buat routes untuk menangkap fungsi dari controller

no.8 
    
    lakukan import untuk default route pada app.js