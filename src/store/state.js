let account = localStorage.getItem('token');
const state = {
    token: '',
    userInfo: '',
    publicKey:'',
    logDtail:'',//流水详情
    popup:{
        data:null,
        type:null
    },
    logTypeArr:null//流水类型
}
export default state;