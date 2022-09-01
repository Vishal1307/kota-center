const formatErrors=(errorOfArray)=>{
    return errorOfArray.map((err)=>{
        return {
            message: err.message,
            field:err.path
        }

    })

}