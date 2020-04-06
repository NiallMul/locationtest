/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("#dataUpdate").submit(function(e){
    e.preventDefault();

    var formData=new FormData($(this)[0]);
    console.log("made it");
    $.ajax({
        url:"http://wintertech.c1.biz/upload.php",
        type: "POST",
        data: formData,
        async: false,

        success: function(msg){
            console.log("success");
            
        },
        error: function(err){
            console.log(JSON.stringify(err));
            
        },
        cache:false,
        contentType: false,
        processData: false

    });
});
