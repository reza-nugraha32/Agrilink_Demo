$(document).ready(function () {
    if (sessionStorage.getItem("connected") == "true") {
        $("#status_check").attr("class", "connect")
        $("#connection").attr("class", "connected")
        $("#status_check").html("<i class='fa fa-times'></i>Disconnect")
        $("#connection").html("Device connected")

        $("#N_input").val(66)
        $("#P_input").val(66)
        $("#K_input").val(76)
        $("#resist_input").val(20)
        $("#temp_input").val(36)
        $("#hum_input").val(78)
    }
    else{
        $("#status_check").attr("class", "disconnect")
        $("#connection").attr("class", "not_connected")
        $("#status_check").html("<i class='fa fa-refresh'></i>Connect</div>")
        $("#connection").html("Not connected")
    }

    $("#status_check").click(function(){
        $("#status_check").html("...")

        setTimeout(check_connect, 4000)
    })
    function check_connect(){
        if ($("#status_check").attr("class") == "disconnect"){
            $("#status_check").html("<i class='fa fa-times'></i>Disconnect")
            $("#connection").html("Device connected")

            $("#N_input").val(66)
            $("#P_input").val(66)
            $("#K_input").val(76)
            $("#resist_input").val(20)
            $("#temp_input").val(36)
            $("#hum_input").val(78)

            sessionStorage.setItem("connected", "true")
        }
        else{   
            $("#status_check").html("<i class='fa fa-refresh'></i>Connect</div>")
            $("#connection").html("Not connected")

            sessionStorage.setItem("connected", "false")
        }
        $("#status_check").toggleClass("connect disconnect")
        $("#connection").toggleClass("connected not_connected")

        
        clearTimeout()
    }
})