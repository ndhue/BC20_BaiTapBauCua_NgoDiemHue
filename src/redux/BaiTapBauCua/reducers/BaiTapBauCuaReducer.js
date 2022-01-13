const initialState = {
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './baucua/bau.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './baucua/cua.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './baucua/ca.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './baucua/nai.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './baucua/tom.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './baucua/ga.png', diemCuoc: 0 }
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'bau', hinhAnh: './baucua/bau.png' },
        { ma: 'cua', hinhAnh: './baucua/cua.png' },
        { ma: 'ca', hinhAnh: './baucua/ca.png' },
    ]
}

const BaiTapBauCua = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_CUOC_BAU_CUA': {
            //tìm trong danhSachCuoc quân cược nào được click sẽ tăng hoặc giảm điểm
            const danhSachCuocUpdate = [...state.danhSachCuoc];
            const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
            if (index !== -1) {
                if (action.tangGiam) {
                    if(state.tongDiem>0){
                        danhSachCuocUpdate[index].diemCuoc += 100;
                        state.tongDiem -= 100;
                    }
                } else {
                    if (danhSachCuocUpdate[index].diemCuoc > 0) {
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem += 100;
                    }
                }
            }
            state.danhSachCuoc = danhSachCuocUpdate;
            return { ...state };
        }
        case 'PLAY_GAME_BAU_CUA': {
            const mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            //xử lý tăng điểm thưởng
            state.mangXucXac = mangXucXacNgauNhien;
            mangXucXacNgauNhien.forEach(xucXac => {
                const index = state.danhSachCuoc.findIndex(qc => qc.ma === xucXac.ma);
                if(index !== -1){
                    state.tongDiem += state.danhSachCuoc[index].diemCuoc;
                }
            });
            //xử lý honaf tiền
            state.danhSachCuoc.forEach(qc =>{
                let indexXucXacNN = mangXucXacNgauNhien.findIndex(xxnn => xxnn.ma === qc.ma);
                if(indexXucXacNN !== -1){
                    state.tongDiem += qc.diemCuoc;
                }
            })

            state.danhSachCuoc.map(qc=>{
                return {...qc,diemCuoc:0};
            })
            return { ...state };
        }
        case 'CHOI_LAI':{
            state.tongDiem = 1000;
            state.danhSachCuoc.map(qc=>{
                return {...qc,diemCuoc:0};
            })
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default BaiTapBauCua;
