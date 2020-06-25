/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { ScrollView, Text, Share, View } from 'react-native';
import { useStateValue } from '../../js/Hooks';
import { BackButton } from '../styled/BackButton';
import { SaveButton } from '../styled/SaveButton';
import { HistoryButton } from '../styled/HistoryButton';
import { BlankButton } from '../styled/BlankButton';
import { BoldedText, Container, PageTitle } from '../styled/Theme';
import genCondCalc from './GeneralConditionCalculator';
import overheadAndFeeCalc from './OverheadAndFeeCalc';

const SummaryOfCostsTenantImprovement = (props) => {
    const [
        {
            buildingFloors,
            buildingFootprintArea,
            buildingGrossSqFt,
            constructionType,
            isDemolitionNeeded,
            slabDemolitionCost,
            isOccupied,
            tenantImprovementBudget,
            stateTax,
            sogPatching,
            sogPrep,
            hasArchEng,
            tenantImprovementBudgetDisplay,
            overheadAndFee,
            bti,
            contingency,
            archEngFee,
            generalConditions,
            companyName,
            projectName,
            location
        },
    ] = useStateValue();

    const exportFile = async () => {

        let JSONSummary = {
            "Summary of Costs": {
                "Total": {
                    "Subtotal Before Tax": `$${totalArr[1]}`,
                    "Tax And Fees": {
                        "Sales Tax": `${Math.round(stateTax * 10000) / 100}%`,
                        "Occupied": isOccupied ? "50%" : "0%",
                        "General Conditions": `${Math.round(genCondCalc(totalArr[4] + Number.EPSILON) * 10000) / 100}%`,
                        "Overhead & Fee": "5%",
                        "BT&I": "1.85%",
                        "Contingency": "10%",
                    },
                    "Sub-Total After Tax and Fees": {
                        "Sub Total": `$${totalArr[2]}`,
                        "Per Sqft": `$${totalArr[7]}/sqft`,
                    },
                    "Grand Total": {
                        "Total": `$${totalArr[3]} - $${totalArr[0]}`,
                        "Per Sqft": ` $${totalArr[6]}/sqft - $${totalArr[5]}/sqft`
                    }
                },
                "Project Information": {
                    "Project Name": `${projectName}`,
                    "Company Name": `${companyName}`,
                    "Location": `${location}`,
                    "Include Architectural Services": `${hasArchEng ? 'Yes' : 'No'}`
                },
                "Building Information": {
                    "Type of Construction": `${constructionType}`,
                    "Building Occupied": `${isOccupied ? 'Yes' : 'No'}`,
                    "Number of Floors": `${buildingFloors}`,
                    "Total Footprint": `${buildingFootprintArea}`,
                    "Gross Sq. Ft": `${buildingGrossSqFt}`
                },
                "Demolition": {
                    "Demolition Needed": `${isDemolitionNeeded ? 'Yes' : 'No'}`
                },
                "Substructure": {
                    "Slab Area for Prep": `${slabArea}`
                },
                "Tenant Improvements": {
                    "Tenant Improvement Budget": `${tenantImprovementBudgetDisplay}`

                },
                "List of Exclusions": {
                    "General Exclusions": {
                        "1": 'Site improvements & site utility costs (costs are for building & pad only)',
                        "2": 'Existing building demolition',
                        "3": 'Architectural & engineering fees (unless selected above)',
                        "4": 'Pre-construction services (typically 0.8% to 1.1% of direct construction costs',
                        "5": 'Owner contingencies (pricing above includes design contingency as indicated)',
                        "6": 'Project phasing ',
                        "7": 'Prevailing wages',
                        "8": 'Overtime, night work and accelerated schedules',
                        "9": 'Hazardous material / contaminated soils / abatement / survey / testing',
                        "10": 'Performance, labor and material payment bonds',
                        "11": 'System development fees, utility connection fees, impact fees, assessments or easements',
                        "12": 'Utility company charges for storm, sewer, water, gas and power services',
                        "13": 'Right of Way Work & Use Permits (i.e. "Street Use Permits")',
                        "14": 'Soil consultants & soil testing',
                        "15": 'Special testing and inspection',
                        "16": 'Building permit and plan check fees',
                        "17": 'Builder\'s "All Risk" property insurance including deductible',
                        "18": 'Owner Furniture, Fixtures, Equipment (FFE)',
                        "19": 'Owner Audio/Visual Systems',
                        "20": 'Owner Security Systems',
                        "21": 'Escalation'
                    }
                }
            }
        };

        let humanInterfaceJSON = JSON.stringify(JSONSummary, null, 2)
            .replace(/}|{|"/g, '')
            .replace(/,\n/g, '\n')
            .replace(/(?:\\[r]|[\r]+)+/g, "");

        try {
            const result = await Share.share({
                title: "Summary Of Costs",
                message: humanInterfaceJSON
            }, {
                //Android only:
                dialogTitle: 'Summary Of Costs',
                //iOS only:
                excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter']
            });

            /*The following can be used in future development */
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // Shared with activitity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        }
        catch (error) {
            alert(error.message);
        }
    };

    // eslint-disable-next-line prefer-const
    let item = {
        open: false,
        height: 'auto',
        message: 'Test',
    };

    function genCondCalc(total) {
        let genCondFee = 0;

        if (total > 500000 && total <= 1000000) {
            genCondFee = generalConditions[1];
        } else if (total > 1000000 && total <= 3000000) {
            genCondFee = generalConditions[2];
        } else if (total > 3000000 && total <= 5000000) {
            genCondFee = generalConditions[3];
        } else if (total > 5000000 && total <= 10000000) {
            genCondFee = generalConditions[4];
        } else if (total > 10000000 && total <= 15000000) {
            genCondFee = generalConditions[5];
        } else if (total > 15000000 && total <= 20000000) {
            genCondFee = generalConditions[6];
        } else if (total > 20000000) {
            genCondFee = generalConditions[7];
        } else {
            genCondFee = generalConditions[0];
        }
        return genCondFee;
    }

    const slabArea = buildingFootprintArea * .25;

    const calculate = () => {
        let total = 0;
        let sogPatchingCost = 0;

        const sogPrepCost = (buildingGrossSqFt * sogPrep);

        if (isDemolitionNeeded) {
            sogPatchingCost = (slabArea * sogPatching);
        };

        const substructure = sogPatchingCost + sogPrepCost;
        const tenantImprovement = tenantImprovementBudget * buildingGrossSqFt;

        total =
            substructure +
            slabDemolitionCost +
            tenantImprovement;
        
        let subTotal = total;
        let totalOver;
        let totalOverSqFt;
        let totalUnder;
        let totalUnderSqFt;
        let totalWithTaxAndFees;
        let totalWithTaxAndFeesSqFt;

        total += total * genCondCalc(total);
        if (hasArchEng) {
            total += total * archEngFee;
        }
        total += total * overheadAndFeeCalc(total);
        total += total * bti;
        total += total * contingency;
        if (isOccupied) {
            total = total * 1.5;
        }
        total += total * stateTax;
        totalOver = total * 1.1;
        totalUnder = total * 0.9;

        // Round total to the nearest thousand away from zero for the displayed result
        totalOver = Math.round(totalOver / 1000) * 1000;
        totalOverSqFt = Math.round((totalOver / buildingGrossSqFt) * 100) / 100;
        totalUnder = Math.round(totalUnder / 1000) * 1000;
        totalUnderSqFt = Math.round((totalUnder / buildingGrossSqFt) * 100) / 100;
        subTotal = Math.round(subTotal / 1000) * 1000;
        totalWithTaxAndFees = Math.round(total / 1000) * 1000;
        totalWithTaxAndFeesSqFt = Math.round((totalWithTaxAndFees / buildingGrossSqFt) * 100) / 100;

        // The replace method won't work correctly if total has any decimal places past 
        // 1/1000th since it would also place commas to the right of the decimal point
        const totalArr = [];

        totalArr[0] = totalOver
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        totalArr[1] = subTotal
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        totalArr[2] = totalWithTaxAndFees
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        totalArr[3] = totalUnder
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        totalArr[4] = subTotal;
        totalArr[5] = totalOverSqFt.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        totalArr[6] = totalUnderSqFt.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        totalArr[7] = totalWithTaxAndFeesSqFt.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

        return totalArr;
    };

    // eslint-disable-next-line no-shadow
    const showItem = (item) => {
        // eslint-disable-next-line no-param-reassign
        item.open = !item.open;
        if (item.open === true) {
            // eslint-disable-next-line no-param-reassign
            item.height = 'auto';
        } else {
            // eslint-disable-next-line no-param-reassign
            item.height = 0;
        }
        // alert(item.height);
    };

    const totalArr = calculate();

    const { navigation } = props;

    return (
        <Container>
            <ScrollView>
                <View>
                    <PageTitle>Summary of Costs</PageTitle>
                    <BlankButton title="Total" />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text
                            style={{
                                fontSize: 20,
                                marginBottom: 10,
                                fontWeight: 'bold',
                            }}
                        >
                            Sub-Total Before Markups & Sales Tax:
                            </Text>
                        <Text style={{ fontSize: 20, marginBottom: 10 }}>${totalArr[1]}</Text>
                        <Text
                            style={{
                                fontSize: 20,
                                marginBottom: 10,
                                fontWeight: 'bold',
                            }}
                        >
                            Tax & Fees:
                            </Text>
                        <Text>
                            <BoldedText>Occupied: </BoldedText>
                            <Text>{isOccupied ? '50%' : '0%'}{'\n'}</Text>
                            <BoldedText>General Conditions: </BoldedText>
                            <Text>{Math.round(genCondCalc(totalArr[4] + Number.EPSILON) * 10000) / 100}%{'\n'}</Text>
                            <BoldedText>Overhead & Fee: </BoldedText>
                            <Text>{Math.round(overheadAndFeeCalc(totalArr[4] + Number.EPSILON) * 10000) / 100}%{'\n'}</Text>
                            <BoldedText>BT&I: </BoldedText>
                            <Text>1.85% {'\n'}</Text>
                            <BoldedText>Contingency: </BoldedText>
                            <Text>10% {'\n'}</Text>
                            <BoldedText>Sales Tax: </BoldedText>
                            <Text>{Math.round(stateTax * 10000) / 100}%{'\n'}</Text>
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                marginBottom: 10,
                                fontWeight: 'bold',
                            }}
                        >
                            Sub-Total After Tax and Fees:
                            </Text>
                        <Text style={{ fontSize: 20, marginBottom: 10 }}>${totalArr[2]}</Text>
                        <Text style={{ fontSize: 16, marginBottom: 10 }}>${totalArr[7]}/sqft</Text>
                        <Text
                            style={{
                                fontSize: 25,
                                marginBottom: 10,
                                fontWeight: 'bold',
                            }}
                        >
                            Grand Total:
                            </Text>
                        <Text style={{ fontSize: 25, marginBottom: 10 }}>${totalArr[3]} - ${totalArr[0]}</Text>
                        <Text style={{ fontSize: 16, marginBottom: 10 }}>
                            ${totalArr[6]}/sqft - ${totalArr[5]}/sqft
                            </Text>
                    </View>

                    <HistoryButton title="Project Information" onPress={() => navigation.navigate('ProjectInformation')} />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>Project Name: </BoldedText>
                            <Text>
                                {projectName} {'\n'}
                            </Text>
                            <BoldedText>Company Name: </BoldedText>
                            <Text>
                                {companyName} {'\n'}
                            </Text>
                            <BoldedText>Location: </BoldedText>
                            <Text>
                                {location} {'\n'}
                            </Text>
                            <BoldedText>Include Architectural Services: </BoldedText>
                            <Text>
                                {hasArchEng ? 'Yes' : 'No'} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <HistoryButton
                        title="Building Information"
                        onPress={() => navigation.navigate('BuildingInformation')}
                    />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>Type of Construction: </BoldedText>
                            <Text>
                                {constructionType} {'\n'}
                            </Text>
                            <BoldedText>Building Occupied: </BoldedText>
                            <Text>
                                {isOccupied ? 'Yes' : 'No'} {'\n'}
                            </Text>
                            <BoldedText>Number of Floors: </BoldedText>
                            <Text>
                                {buildingFloors} {'\n'}
                            </Text>
                            <BoldedText>Total Footprint: </BoldedText>
                            <Text>
                                {buildingFootprintArea} {'\n'}
                            </Text>
                            <BoldedText>Gross Sq. Ft: </BoldedText>
                            <Text>
                                {buildingGrossSqFt} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <HistoryButton
                        title="Demolition"
                        onPress={() => navigation.navigate('Demolition')}
                    />
                    <View
                        height={item.height}
                        backgroundColor="#f8f8f8"
                        paddingHorizontal="10%"
                    >
                        <Text>
                            <BoldedText>Demolition Needed: </BoldedText>
                            <Text>
                                {isDemolitionNeeded ? 'Yes' : 'No'} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <BlankButton title="Substructure" />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>Slab Area for Prep: </BoldedText>
                            <Text>
                                {slabArea} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <HistoryButton
                        title="Tenant Improvements"
                        onPress={() => navigation.navigate('TenantImprovementBudget')}
                    />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>Tenant Improvement Budget: </BoldedText>
                            <Text>
                                {tenantImprovementBudgetDisplay} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <BlankButton title="List of Exclusions" />

                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>General Exclusions: {'\n'}</BoldedText>
                            <Text>
                                1. Site improvements & site utility costs (costs are for building & pad only) {'\n'}
                                    2. Existing building demolition {'\n'}
                                    3. Architectural & engineering fees (unless selected above) {'\n'}
                                    4. Pre-construction services (typically 0.8% to 1.1% of direct construction costs {'\n'}
                                    5. Owner contingencies (pricing above includes design contingency as indicated) {'\n'}
                                    6. Project phasing {'\n'}
                                    7. Prevailing wages {'\n'}
                                    8. Overtime, night work and accelerated schedules {'\n'}
                                    9. Hazardous material / contaminated soils / abatement / survey / testing {'\n'}
                                    10. Performance, labor and material payment bonds {'\n'}
                                    11. System development fees, utility connection fees, impact fees, assessments or easements {'\n'}
                                    12. Utility company charges for storm, sewer, water, gas and power services {'\n'}
                                    13. Right of Way Work & Use Permits (i.e. "Street Use Permits") {'\n'}
                                    14. Soil consultants & soil testing {'\n'}
                                    15. Special testing and inspection {'\n'}
                                    16. Building permit and plan check fees {'\n'}
                                    17. Builder's "All Risk" property insurance including deductible {'\n'}
                                    18. Owner Furniture, Fixtures, Equipment (FFE) {'\n'}
                                    19. Owner Audio/Visual Systems {'\n'}
                                    20. Owner Security Systems {'\n'}
                                    21. Escalation {'\n'}
                            </Text>
                        </Text>
                    </View>
                </View>
                <SaveButton title="Save or Share" onPress={() => exportFile()} />
                <BackButton title="Back" onPress={() => navigation.goBack()} />
            </ScrollView>
        </Container>
    );
};

export default SummaryOfCostsTenantImprovement;
