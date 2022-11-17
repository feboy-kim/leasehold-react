export function initialease() {
    return {
        heading: "",                                        // 标题
        lessor: ["", "", ""],                               // 甲方: 姓名，身份证号码， 联系电话
        lessee: ["", "", ""],                               // 乙方: 姓名，身份证号码， 联系电话
        aboutent: { city: "", address: "", cert: "" },      // 城市、详细地址与不动产证
        rentFee: { monthAmount: 0, sinote: "", payPeriod: 3 },  // 月租金、中文大写金额及付款周期（月）
        lateFee: { dailyAmount: 0, sinote: "", laterDays: 7 },  // 滞纳金（日）及中文大写金额、最大延期
        foregift: { amount: 0, sinote: "" },                // 押金及中文大写金额
        tenancy: { start: new Date(), sumonth: 12 },        // 租期（开始日期与时长）
        peopless: 3,                                        // 限住人数
        special: "",                                        // 特殊规定
        remarks: ""                                         // 备注
    }
}