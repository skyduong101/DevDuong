export default function overheadAndFeeCalc(total) {
    let overHeadAndFee = 0;

    if (total > 500000 && total <= 1000000) {
        overHeadAndFee = 0.08;
    } else if (total > 1000000 && total <= 3000000) {
        overHeadAndFee = 0.05;
    } else if (total > 3000000 && total <= 5000000) {
        overHeadAndFee = 0.045;
    } else if (total > 5000000 && total <= 10000000) {
        overHeadAndFee = 0.043;
    } else if (total > 10000000 && total <= 15000000) {
        overHeadAndFee = 0.0385;
    } else if (total > 15000000 && total <= 20000000) {
        overHeadAndFee = 0.036;
    } else if (total > 20000000 && total <= 30000000) {
        overHeadAndFee = 0.035;
    } else if(total > 30000000 && total <= 50000000) {
        overHeadAndFee = 0.034;
    } else if(total > 50000000 && total <= 75000000) {
        overHeadAndFee = 0.03;
    } else if(total > 75000000 && total <= 120000000) {
        overHeadAndFee = 0.0275;
    } else {
        overHeadAndFee = 0.12;
    }
    return overHeadAndFee;
}
