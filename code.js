import ConectDB from "./conecxao";

export default class Crud {
//consulta geral    

    static selectALL(callback){
        let connection = ConectDB.connect()
        let sql = "select id,nome, editora, ano from autor"
        let query = connection.query(sql, function(error, results, fields)
        {
           
             if(error) throw error
            callback()
        })

        connection.end()
    }
//consulta por id
     static selectById(Id, callback){  
   let connection = ConectDB.connect()
   let sql = "select *from autor where id = ?"
   let query = connection.query(sql, Id, function(error, results, fields){
   if(error) throw error
   callback(results)
   })
   connection.end()


 }

 //inserir dados
 static insert(livros, callback){
     let connection = ConectDB.connect()
     let sql = "insert into autor set ?"
     let query = connection.query(sql, livros, function(error, results, fields){
        livros.id = results.insertId
        if(error) throw error
        callback(livros)
     })

     connection.end()
 }

//atualizar
  static upadate(livros, callback){
    let connection = ConectDB.connect()
    let sql = "upadate autor set ? where id = ?"
    let id = livros.id 
    let query = connection.query(sql, [livros,id], function(error, results, fields){
        if(error) throw error
        callback(livros)

    })

    connection.end()

  }

 //apagar
   static deleteById(livros, callback){
     let connection = ConectDB.connect()
     let sql = "delete from autor where id = ?"
     let id = livros.id
     let query = connection.query(sql, id , function(error, results, fields){
        if(error) throw error 
        callback(livros)

     })
     connection.end()
   } 



}//fecha classe



