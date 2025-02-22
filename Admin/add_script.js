$(document).ready(() => 
{
    $('#insertLogButton').click(() => {
        let name = $('#typeField').val();
        let address = $('#severityField').val();
        if (name.trim().length > 0 && address.trim().length) {
            $.ajax({
                type: 'GET',
                url: "http://localhost/Hotel_app/DBUtils.php", 
                data: {
                    action: 'inserthotel',
                    name: name,
                    address: address,  
                },
                success: (data) => {
                    let res = JSON.parse(data);
                    if (res === 0) {
                        alert("Hotel could not be added!");
                    } else {
                        $('.form-control').val("");
                        alert("Hotel added sucessfully!");
                    }
                }
            })
        } else {
            alert("Please enter valid data in all fields!");
        }
    })
})