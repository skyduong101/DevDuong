export default function genCondCalc(total) {
    let genCondFee = 0;

    if (total > 500000 && total <= 1000000) {
        genCondFee = generalConditionArray[1];
    } else if (total > 1000000 && total <= 3000000) {
        genCondFee = generalConditionArray[2];
    } else if (total > 3000000 && total <= 5000000) {
        genCondFee = generalConditionArray[3];
    } else if (total > 5000000 && total <= 10000000) {
        genCondFee = generalConditionArray[4];
    } else if (total > 10000000 && total <= 15000000) {
        genCondFee = generalConditionArray[5];
    } else if (total > 15000000 && total <= 20000000) {
        genCondFee = generalConditionArray[6];
    } else if (total > 20000000) {
        genCondFee = generalConditionArray[7];
    } else {
        genCondFee = generalConditionArray[0];
    }
    return genCondFee;
}
