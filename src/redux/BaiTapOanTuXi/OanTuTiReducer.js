const stateDefault = {
    mangDatCuoc:[
        {ma:'keo',hinhAnh:'./OanTuTi/keo.png',datCuoc:true},
        {ma:'bua',hinhAnh:'./OanTuTi/bua.png',datCuoc:false},
        {ma:'bao',hinhAnh:'./OanTuTi/bao.png',datCuoc:false},
    ],
    ketQua:"I'm iron man, I love you 3000 !!!",
    soBanThang:0,
    soBanChoi:0,
    computer: {ma:'keo',hinhAnh:'./OanTuTi/bua.png',datCuoc:false}
}

const OanTuTiReducer = (state=stateDefault,action)=>{
    switch(action.type){
        case 'CHON_KEO_BUA_BAO':{
            //reset ma cuoc
            let mangCuocUpdate = [...state.mangDatCuoc];
            // tạo mảng cược mới từ player truyền vào
            mangCuocUpdate = mangCuocUpdate.map((item,index)=>{
                if(item.ma === action.maCuoc){
                    return {...item,datCuoc:true};
                }
                return {...item,datCuoc:false};
            });
            state.mangDatCuoc = mangCuocUpdate;
            return {...state};
        }
        case 'RAN_DOM':{
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return{...state};
        }
        case 'END_GAME':{
            state.soBanChoi+=1;
            let player = state.mangDatCuoc.find(item=>item.datCuoc===true);
            let computer = state.computer;
            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo')
                        state.ketQua = 'Hòa nhau !!!';
                    else if(computer.ma === 'bua')
                        state.ketQua = 'Thua !!!';
                    else{
                        state.ketQua = "I'm iron man, I love you 3000 !!!";
                        state.soBanThang+=1;
                    }
                    break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.ketQua = "I'm iron man, I love you 3000 !!!";
                        state.soBanThang+=1;
                    }
                    else if(computer.ma === 'bua')
                        state.ketQua = 'Hòa nhau !!!';
                    else{
                        state.ketQua = "Thua !!!";
                    }
                    break;
                case 'bao':
                    if(computer.ma === 'keo')
                        state.ketQua = "Thua !!!";
                    else if(computer.ma === 'bua'){
                        state.ketQua = "I'm iron man, I love you 3000 !!!";
                        state.soBanThang+=1;
                    }
                    else{
                        state.ketQua = "Hòa nhau !!!";
                    }
                    break;
                default:state.ketQua = "I'm iron man, I love you 3000 !!!";
            }
            return{...state};
        }
        default: return{...state};
    }
}
export default OanTuTiReducer;