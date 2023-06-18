$("#add_user").submit(function(event){
    alert("Data saved succefully");
})

// delete statement
if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        var request={
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
        }

        if(confirm("Do u really want to delete"))[
            $.ajax(request).done(function(response){
                alert("Data deleted");
                location.reload()
            })
        ]
    })
}