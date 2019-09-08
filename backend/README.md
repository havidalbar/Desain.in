# BACKEND TODO LIST


## Kontes

* [ ] /contest/create
    
    * [X] Create route
    * [X] Check if user authenticace
        * [X] return 402 not authenticate
    * [X] Check body (desc,deadline,criteria,category,notes,attachment,attachment 2,payment method,payment total,userId,start date,npwp)
    * [X] validate decs (max 400 char)
        * [ ] return error
    * [ ]  validate attachemnt jpeg/png
        * [ ] return error
    * [ ] validate attachment 2 .doc/.pdf
        * [ ] return error
    * [X] check if payment more than 10bills , npwp required
        * [X] return error
    * [X] if all succses insert to db

* [ ] /contest/getContestById:contestId
    
    * [X] Create route
    * [X] check parameter (Contestid)
        * [X] if parameter ===       null response with 422
    * [X] getFrom database by contest id
        * [X] return data
        * [X] return error with code 404

* [ ] /contest/getContestByUser:idUser
    
    * [X] create router
    * [X] check parameter
        * [X] if parameter === null respone with 422
    * [X] getFrom database by userId
        * [X] return data
        * [X] return error with code 404

* [ ] /contest/getHotContest
    
    ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `pending`

* [ ] /contest/joinContest

    * [X] create router
    * [X] check authenticate user
        * [X] return 402 not authenticate
    * [ ] check body (userId,ContestId,Upload)
    
    ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `pending`

## User

* [ ] Create table for invitation

     * [X] Create table for invitation
     * [X] Column (uuid:primary key, userId,userIdInvited)
     * [ ] Create table for package

* [ ] /user/createInvitation

     * [X] create router
     * [ ] check user authenticate
        * [ ] 402 not authenticate
     * [ ] check user already have designer
        * [ ] return error 
     * [ ] check invited user are non designer
        * [ ] return error
     * [ ] create random uuid
     * [ ] insert to database (uuid:PK,userId,UserIdInvited)

* [ ] /user/acceptInvitation
     
     * [ ] create router
     * [ ] check user authenticate
        * [ ] return 402 not authenticate
     * [ ] check body (status,invitation uuId)
     * [ ] check uuid valid
     * [ ] accept
        * [ ] Update User to designer
        * [ ] delete invitation by uuid
     * [ ] reject
        * [ ] delete invitation by uuid 
    
* [ ] /user/cancelInvitation

    * [ ] create router
    * [ ] check user authenticate
        * [ ] return 402 not authenticate
    * [ ] check user authorized
        * [ ] return 402 not authorized
    * [ ] check body (invitation uuid)
    * [ ] check uuid invalid
        * [ ] return 404 not found
    * [ ] check uuid valid
        * [ ] delete invitation by uuid

* [ ] /user/updateUser:idUser
    
    * [ ] create router
    * [ ] check user authenticate
        * [ ] return 402 not authenticate
    * [ ] check parameter (idUser)
        * [ ] user not found
            * [ ] return 404
        * [ ] user found
            * [ ] check body (all user column) 
            * [ ] except password 
            * [ ] validate email 
                * [ ] if email invalid
                    * [ ] return error
            * [ ] update to db

* [X] /user/updatepassword:idUser 

    * [X] create router
    * [X] check user authenticate
        * [X] return 402 not authenticate
    * [x] check parameter (idUser)
        * [x] user Not Found
            * [x] return 404 
        * [X] user found
            * [X] check body (oldPassword,newPassword)
                * [X] return error
            * [X] compare oldPssword
                * [X] return oldPassword not match
            * [X] validate new Password
                * [X] return not validated
            * [X] hash newPassword
            * [X] update Password
  
* [ ] /user/getUserProfile:idUser

    * [ ] create router
    * [ ] check param (idUser)
        * [ ] user notFound
            * [ ] return 404
        * [ ] user Found
            * [ ] return all column execpt password
    
## Transaction 

* [ ] /transaction/jualJasa
    
    * [ ] create router
    * [ ] check user authenticate 
    * [ ] check body (kategori, tag[] , deskripsi, paket[] )
    * [ ] validate decs (max 400)
    * [ ] if all success insert to ...
    
    ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `pending`

* [ ] /transaction/getKategori
    
    ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `pending`

## Portfolio

* [ ] /portfolio/getByUserId:userId

    * [X] create router
    * [ ] check params (userId)
        * [ ] user not found
            * [ ] return 404
        * [ ] user found
            * [ ] return all portofolio []

* [ ] /portfolio/uploadImage

    * [X] create router
    * [X] check user authenticate
        * [X] return 402 not authenticate
    * [ ] check user designer
        * [ ] return 402 not authorized
    * [ ] ... 
        
    ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `pending` 

* [ ] /portfolio/uploadData

    * [X] create router
    * [X] check user authenticate
        * [X] return 402 not authenticate
    * [ ] check user designer
        * [ ] return 402 not authorized
    * [ ] check body (file,userId,judul,desc,tag)
        * [ ] user Id not found
            * [ ] return 404 userNot Found
        * [ ] user found
            * [ ] validate decs max 1500 char
                * [ ] return error
            * [ ] validate file format 
                * [ ] return error
            * [ ] validate file size
                * [ ] return error
            * [ ] store to database
    
* [ ] /portfolio/updateData

    * [X] create router
    * [X] check user authenticate 
        * [X] return 402 not authenticate
    * [ ] check user designer
        * [ ] return 402 not authorized
    * [ ] check body (userId, judul, tag, desc, file)
        * [ ] user id not found
            * [ ] return 404 user not found
        * [ ] user found
            * [ ] validate decs max 1500 char
                * [ ] return error
            * [ ] validate file change 
                * [ ] validate file format
                    * [ ] return error
                * [ ] validate file size
                    * [ ] return error
            * [ ] file doesn't change
                * [ ] skip upload
            * [ ] update to database

* [ ] /portfolio/getDetailById:portofId

    * [X] create rotuer
    * [ ] check body (portofId)
    * [ ] check portof doesnt exist
        * [ ] return 404 not found
    * [ ] check portof exist
        * [ ] get portof data
        * [ ] return portof detail

* [ ] /portfolio/deleteById:portofId

    * [X] create router
    * [X] check user authenticate 
        * [X] return 402 not authenticate
    * [ ] check user designer
        * [ ] return 402 not authorized
    * [ ] check body (portofId)
    * [ ] check portof (userid, portofid) doesnt exist 
        * [ ] return 404 not found
    * [ ] check portof (userid, portofid) exist 
        * [ ] delete in database
        * [ ] return 200
    
