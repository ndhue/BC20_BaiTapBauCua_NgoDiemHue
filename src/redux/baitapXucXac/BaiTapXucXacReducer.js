const stateDefault = {
    taiXiu: true, //true: là tài(3->11) false: là xỉu(>12)
    mangXucXac:[
        {ma:6,hinhAnh:'./img/6.png'},
        {ma:6,hinhAnh:'./img/6.png'},
        {ma:6,hinhAnh:'./img/6.png'},
    ],
    soBanThang:0,
    tongSoBanChoi:0
};

const BaiTapXucXacReducer = (state=stateDefault,action)=>{
    console.log(action);
    switch(action.type){
        case 'DAT_CUOC':{
            state.taiXiu = action.taiXiu;
            return {...state};
        }
        case 'PLAY_GAME':{
            //random xuc xac
            let mangNgauNhien = [];
            for(let i=0;i<3;i++){
                let soNgauNhien = Math.floor(Math.random()*6)+1;
                let xucXacNgauNhien = {ma: soNgauNhien, hinhAnh:`./img/${soNgauNhien}.png`};
                mangNgauNhien.push(xucXacNgauNhien);
            }
            state.mangXucXac = mangNgauNhien;
            state.tongSoBanChoi+=1;
            let tongDiem = mangNgauNhien.reduce((tong,xucXac,index)=>{
                return tong+=xucXac.ma;
            },0);
            if((tongDiem>11 && state.taiXiu===true) || (tongDiem<=11 && state.taiXiu===false)){
                state.soBanThang+=1;
            }
            return {...state};
        }
        default: return {...state};
    }
};

export default BaiTapXucXacReducer;