### BACKEND TODO LIST

## Kontes

    /contest/create
    
    * [ ] Create route
    * [ ] Check if user authenticace
        * [ ] return 402 not authenticate
    * [ ] Check body (desc,deadline,criteria,category,notes,attachment,attachment 2,payment method,payment total,userId,start Date,Deadline,npwp)
    * [ ] validate decs (max 400 char)
        * [ ] return error
    * [ ]  validate attachemnt jpeg/png
        * [ ] return error
    * [ ] validate attachment 2 .doc/.pdf
        * [ ] return error
    * [ ] check if payment more than 10bills , npwp required
        * [ ] return error
    * [ ] if all succses insert to db

    /contest/getContestById:contestId
    
    * [ ] Create route
    * [ ] check parameter (Contestid)
        * [ ] if parameter ===       null response with 422
    * [ ] getFrom database by contest id
        * [ ] return data
        * [ ] return error with code 404

    /contest/getContestByUser:idUser
    
    * [ ] create router
    * [ ] check parameter
        * [ ] if parameter === null respone with 422
    * [ ] getFrom database by userId
        * [ ] return data
        * [ ] return error with code 404

    /contest/getHotContest
    
    #### pending

    /contest/joinContest

    * [ ] create router
    * [ ] check authenticate user
        * [ ] return 402 not authenticate
    * [ ] check body (userId,ContestId,Upload)

## User

    Create table for invitation

     * [ ] Create table for invitation
     * [ ] Column (uuid:primary key, userId,userIdInvited)

    /user/createInvitation

     * [ ] create router
     * [ ] check user authenticate
        * [ ] 402 not authenticate
     * [ ] check user already have designer
        * [ ] return error 
     * [ ] check invited user are non designer
        * [ ] return error
     * [ ] create random uuid
     * [ ] insert to database (uuid:PK,userId,UserIdInvited)

    /user/acceptInvitation
     
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
    
    /user/cancelInvitation

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

    /user/updateUser:idUser
    
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

    /user/updatepassword:idUser 

    *[ ] create router
    *[ ] check user authenticate
        * [ ] return 402 not authenticate
    *[ ] check parameter (idUser)
        *[ ] user Not Found
            *[ ] return 404 
        * [ ] user found
                * [ ] check body (oldPassword,newPassword)
                * [ ] compare oldPssword
                * [ ] return oldPassword not match
                * [ ] hash newPassword
                * [ ] update Password
  
    /user/getUserProfile:idUser

    * [ ] create router
    * [ ] check param (idUser)
        * [ ] user notFound
            * [ ] return 404
        * [ ] user Found
            * [ ] return all column execpt password
    
## Transaction 

    /transaction/jualJasa
    
      * [ ] create router
      * [ ] check user authenticate 
      * [ ] check body (kategori, tag[] , deskripsi, paket[] )
      * [ ] validate decs (max 400)
      * [ ] if all success insert to ...
    
    ## pending 

    /transaction/getKategori
      * 

## Portofolio

    /portofolio/getByUserId:userId

    * [ ] create router
    * [ ] check params (userId)
        * [ ] user not found
            * [ ] return 404
        * [ ] user found
            * [ ] return all portofolio []

    /portofolio/uploadImage

    * [ ] create router
    * [ ] check user authenticate
        * [ ] return 402 not authenticate
    * [ ] check user designer
        * [ ] return 402 not authorized
    * [ ] ... 
        
    ## pending 

    /portofolio/uploadData

    * [ ] create router
    * [ ] check user authenticate
        * [ ] return 402 not authenticate
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
    
    /porotoflio/updateData

    * [ ] create router
    * [ ] check user authenticate 
        * [ ] return 402 not authenticate
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

    /portofolio/getPortofDetailById:portofId

    * [ ] create rotuer
    * [ ] check body (portofId)
    * [ ] check portof doesnt exist
        * [ ] return 404 not found
    * [ ] check portof exist
        * [ ] get portof data
        * [ ] return portof detail

    /portofolio/deletePortofById:portofId

    * [ ] create router
    * [ ] check user authenticate 
        * [ ] return 402 not authenticate
    * [ ] check user designer
        * [ ] return 402 not authorized
    * [ ] check body (portofId)
    * [ ] check portof (userid, portofid) doesnt exist 
        * [ ] return 404 not found
    * [ ] check portof (userid, portofid) exist 
        * [ ] delete in database
        * [ ] return 200
    

