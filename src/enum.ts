

enum Statuscode {
    success = 200,
    notFound = 404,
    servererror = 500
}

function status_handeler(stat: Statuscode) {

    switch (stat) {

        case Statuscode.success:
            console.log("success")
            break;

        case Statuscode.notFound:
            console.log("this page is not found")
            break;

        case Statuscode.servererror:
            console.log("server error")
            break;

        default:
        console.log("this status code is not found")
        break

    }
}