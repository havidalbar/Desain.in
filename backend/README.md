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

* [X] /contest/getContestById:contestId
    
    * [X] Create route
    * [X] check parameter (Contestid)
        * [X] if parameter ===       null response with 422
    * [X] getFrom database by contest id
        * [X] return data
        * [X] return error with code 404

* [X] /contest/getContestByUser:idUser
    
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

* [X] Create table for invitation

     * [X] Create table for invitation
     * [X] Column (uuid:primary key, userId,userIdInvited)

* [X] Create table for paket
     * [X] Create table for table
     * [X] Column same as UI 

* [X] /user/invitation/:userInvitedId/create

     * [X] create router
     * [X] check user authenticate
        * [X] 402 not authenticate
     * [X] check user already have designer
        * [X] return error 
     * [X] check invited user are non designer
        * [X] return error
     * [X] create random uuid
     * [X] insert to database (uuid:PK,userId,UserIdInvited)
     * [X] return (uuid, user)

* [X] /user/invitation/accept
     
     * [X] create router
     * [X] check user authenticate
        * [X] return 402 not authenticate
     * [X] check body (uuid, confirmation)
     * [X] check user invited is designer
        * [X] return error 
     * [X] accept confirmation
        * [X] Update User to designer
        * [X] delete invitation by uuid
     * [X] reject confirmation
        * [X] delete invitation by uuid 
    
* [X] /user/invitation/cancel

    * [X] create router
    * [X] check user authenticate
        * [X] return 402 not authenticate
    * [X] check body (invitation uuid)
    * [X] check user authorized
        * [X] return 403 forbidden
    * [X] check uuid invalid
        * [X] return 404 not found
    * [X] check uuid valid
        * [X] delete invitation by uuid

* [ ] /user/update:idUser
    
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

* [X] /user/update_password 

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
  
* [ ] /user/profile:userId

    * [X] create router
    * [X] check param (idUser)
        * [X] user notFound
            * [X] return 404
        * [X] user Found
            * [X] return all column execpt password
            * [ ] join kategori
            * [ ] join tag
            * [ ] join portofolio    

## Transaction 

* [X] /transaction/jual
    
    * [X] create router
    * [X] check user authenticate 
    * [X] check user is authorized
    * [X] check body (kategori, tag[] , deskripsi, paket[] )
    * [X] validate decs (max 400)
    * [X] if all success update user
        * [X] check paket body (nama, deskripsi, harga, logo transparan, kualitas, file_desain, desain_atk, sosmed_kit, revisi, waktu_pengerjaan) 
        * [X] validate paket length (paket min 0 max 3)
        * [X] validate logo transparan, kualitas, file_desain, desain_atk, sosmed_kit, revisi, waktu_pengerjaan (accepted value 0 and 1), (deskripsi) (max 200)
        * [X] insert all to paket
    * [X] if failed
        * [X] return error

* [X] /transaction/beli

    * [X] create router
    * [X] check user authenticate
    * [X] check body (paketId, subject, deskripsi, lampiran)
    * [X] validate deskripsi (max 4000) & lampiran (max 10MB)
        * [X] invalid
            * [X] return error validation
    * [X] validate authorized
    * [X] save into db (transaction)
    * [X] return notif to client

* [X] /transaction/deposit

    * [X] create router
    * [X] check user authenticate
    * [X] check body (transactionId, deposit)
    * [X] check is user authorized
    * [X] validate user if already registered, 
        * [X] deposit > 1 hour
            * [X] delete invoice in db, and image file
            * [X] return 408
        * [X] deposit <= 1 hour
            * [X] update db
            * [X] return 200

* [ ] /transaction/editJasaPaket

    * [ ] create router
    * [ ] check user authenticate
    * [ ] check user authorized
    * [ ] check body (paket) 
    * [ ] validate paket length (paket min 0 max 3)
    * [ ] validate logo transparan, kualitas, file_desain, desain_atk, sosmed_kit, revisi, waktu_pengerjaan (accepted value 0 and 1), (deskripsi) (max 200)
    * [ ] update all to paket

* [ ] /transaction/editJasaDesainer

    * [ ] create router
    * [ ] check user authenticate
    * [ ] check user authorized
    * [ ] check body (kategori, tag[] , deskripsi)
    * [ ] validate deskripsi (max 400)
    * [ ] if all success 
        * [ ] update user
        * [ ] return 200
    * [ ] if failed
        * [ ] return error

* [X] /transaction/kategori
    
    * [X] create router
    * [X] load kategori from db with id 1 - 3
    * [X] validate kategori 
    * [X] return kategori 

* [X] /transaction/tag

    * [X] create router
    * [X] check user authenticate
    * [X] load tag from db with limit 30
    * [X] return tag

* [X] /transaction/tag/:tag

    * [X] create router
    * [X] check user authenticate
    * [X] check params (tags)
    * [X] validate params 
        * [X] tag found 
            * [X] return 200 tags[]
        * [X] tag not found
            * [X] return 404 tags[]

* [X] /transaction/step/:transactionId/create

    * [X] create router
    * [X] check user authenticate
    * [X] check user authorized
    * [X] check body (nama, persen)
    * [X] validate nama (max 100), persen (number)
        * [X] invalid 
            * [X] return 406 message
    * [X] load all step params (transactionId)
    * [X] count all persen, 100 - total_persen (max_persen)
    * [X] validate persen (persen > max_persen) 
        * [X] invalid 
            * [X] return 409 
    * [X] insert into db step
    * [X] return 201

* [X] /transaction/step/:transactionId/update/:stepId

    * [X] create router
    * [X] check user authenticate
    * [X] check user authorized
    * [X] check body (nama, persen)
    * [X] validate nama (max 100), persen (number)
        * [X] invalid
            * [X] return 406 message
    * [X] count all step persen (total_persen)
    * [X] persen > (100 - total_persen)
        * [X] invalid
        * [X] return 409
    * [X] update to db step
    * [X] return 200

* [X] /transaction/step/:transactionId/delete/:stepId

    * [X] create router
    * [X] check user authenticate
    * [X] check user authorized
    * [X] check body (stepId)
    * [X] validate step (stepId)
        * [X] valid 
            * [X] delete step
            * [X] return 200
        * [X] invalid
            * [X] return 406 message

* [X] /transaction/:transactionId/submit/:stepId
    
    `figma : chat-designer-desainer`

    * [X] create router
    * [X] check user authenticate
    * [X] check file (image)
    * [X] validate image
        * [X] valid
            * [X] update to db
            * [X] return 200
        * [X] invalid 
            * [X] return error
    
* [X] /transaction/:transactionId/acceptStep/:stepId

    `figma : chat-designer-pengguna`

    * [X] create router
    * [X] check user authenticate
    * [X] check body (confirmation)
    * [X] validate confirmation
    * [X] check confirmation
        * [X] if 0 
            * [X] return message
        * [X] if 1 
            * [X] update table step
            * [X] return 200

## Portfolio

* [X] /portfolio/:userId

    * [X] create router
    * [X] check params (userId)
        * [X] user not found
            * [X] return 404
        * [X] user found
            * [X] return all portofolio []

* [X] /portfolio/upload_image

    * [X] create router
    * [X] check user authenticate
        * [X] return 402 not authenticate
    * [X] check user designer
        * [X] return 402 not authorized
    * [X] upload 

* [X] /portfolio/upload_data

    * [X] create router
    * [X] check user authenticate
        * [X] return 402 not authenticate
    * [X] check user designer
        * [X] return 402 not authorized
    * [X] check body (file,userId,judul,desc,tag)
        * [X] validate decs max 1500 char
            * [X] return error
        * [X] store to database
    
* [ ] /portfolio/update_data

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

* [X] /portfolio/:portofId/detail

    * [X] create rotuer
    * [X] check body (portofId)
    * [X] check portof doesnt exist
        * [X] return 404 not found
    * [X] check portof exist
        * [X] get portof data
        * [X] return portof detail

* [X] /portfolio/:portofId

    `delete by portof id`

    * [X] create router
    * [X] check user authenticate 
        * [X] return 402 not authenticate
    * [X] check user designer
        * [X] return 402 not authorized
    * [X] check body (portofId)
    * [X] check portof (userid, portofid) doesnt exist 
        * [X] return 404 not found
    * [X] check portof (userid, portofid) exist 
        * [X] delete in database
        * [X] return 200
    
