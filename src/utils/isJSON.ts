export default function isJSON(str) {
    if (typeof str == 'string') {
        try {
            JSON.parse(str);
            if (typeof JSON.parse(str) === 'number') {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
}


export function canSubmit(){
    if(typeof window.diyDate === 'undefined'){
        window.diyDate = new Date().getTime();
        return true;
    }else{
        if(new Date().getTime() - window.diyDate < 2000){
            return false;
        }else{
            window.diyDate = new Date().getTime();
            return true;
        }
    }
}
