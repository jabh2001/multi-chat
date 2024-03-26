

export async function convertFileToBase64(file:File){
    return new Promise((resolve, reject)=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
    })
}