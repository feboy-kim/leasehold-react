export function initialease() {
    return {
        heading: "",    // 标题
        lessor: {
            name: "", 
            identity: "", 
            contact: "", 
            payment: '',
            maint: ""
        },     // 甲方: 姓名，身份证号码， 联系电话以及负责维修的设施、负责支付的款项。
        lessee: {
            name: "", 
            identity: "", 
            contact: "", 
            payment: '',
            maint: ""
        },     // 乙方: 姓名，身份证号码， 联系电话以及负责维修的设施、负责支付的款项。
        aboutent: { city: "", address: "", cert: "" },      // 城市、详细地址与不动产证
        rentFee: { monthAmount: 1, sinote: "", payPeriod: 3 },  // 月租金、中文大写金额及付款周期（月）
        lateFee: { dailyAmount: 1, sinote: "", laterDays: 7 },  // 滞纳金（日）及中文大写金额、最大延期
        foregift: { amount: 1, sinote: "" },                // 押金及中文大写金额
        tenancy: { start: new Date(), sumonth: 12 },        // 租期（开始日期与时长）
        peopless: 3,                                        // 限住人数
        special: "",    // 特殊要求
        remarks: ""     // 附加备注
    }
}