

export async function convertFileToBase64(file:File){
    return new Promise((resolve, reject)=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
    })
}

export function convertBase64ToImgString(base64:string){
    return `data:image/png;base64,${base64}`
}