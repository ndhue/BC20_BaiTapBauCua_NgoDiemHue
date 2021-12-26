import { DAT_GHE, HUY_GHE } from "../types/DatVeType";

const stateDefault = {
    danhSachGheDangDat:[
        
    ]
}
const DatVeXemPhim = (state=stateDefault,action)=>{
    switch(action.type){
        case DAT_GHE:{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if(index !== -1){
                //neu ghe da co thi remove
                danhSachGheDangDatUpdate.splice(index,1);
            }else{
                //ghe chua co thi add vao
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat=danhSachGheDangDatUpdate;
            return {...state};
        }
        case HUY_GHE:{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if(index !== -1){
                //neu ghe da co thi remove
                danhSachGheDangDatUpdate.splice(index,1);
            }
            state.danhSachGheDangDat=danhSachGheDangDatUpdate;
            return {...state}
        }
        default: return {...state};
    }
}
export default DatVeXemPhim;