/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { ScrollView, Text, View, Share } from 'react-native';
import { useStateValue } from '../../js/Hooks';
import { Container, PageTitle, BoldedText } from '../styled/Theme';
import { BackButton } from '../styled/BackButton';
import { SaveButton } from '../styled/SaveButton';
import { HistoryButton } from '../styled/HistoryButton';
import { BlankButton } from '../styled/BlankButton';
import genCondCalc from './GeneralConditionCalculator';
import overheadAndFeeCalc from './OverheadAndFeeCalc';

const SummaryOfCosts = (props) => {
    const [
        {
            buildingFloors,
            buildingFootprintArea,
            buildingGrossSqFt,
            constructionType,
            coreExteriorDoors,
            coreInteriorDoors,
            coreLobbyMain,
            coreLobbyUpper,
            coreRestroom,
            coreVestibules,
            designEng,
            elecServ,            
            elevatorPitConcrete,
            entryCanopyRoof,
            entryCanopySteel,
            exteriorRoofing,
            extSG,
            exteriorSkinGlazing,
            fireAlarm,
            foundation,
            hVAC,
            hvacDesign,
            hydraulicElevator,
            mechScreen,
            roofing,
            roughCarpentry,
            sCPaint,
            skylights,
            sOG,
            stairSystem,
            substructureFoundation,
            substructureSog,
            superstructureType,
            waterBelGradeWall,
            shellDryWall,
            buildingPerimeter,
            buildingHeight,
            buildingFloorHeight,
            buildingExteriorEnclosureSqFt,
            shellConcrete,
            publicEntrances,
            mepShaftWalls,
            numberOfElevators,
            elevatorShaftWalls,
            numberOfStairWells,
            stairWellWalls,
            mepRooms,
            janitorClosets,
            fireProtectionSystems,
            fireProtectionSystemsUnderCanopies,
            buildingPlumbing,
            restroomPlumbingFixtures,
            janitorClosetPlumbing,
            hvacSystems,
            upgradeElevatorCabFinish,
            waterproofElevatorPit,
            miscExteriorWindowAndWallFlashings,
            storefrontWindowSystems,
            curtainwallSystem,
            roofRelatedSheetMetals,
            miscellaneousSteel,
            structuralExcav,
            slabPrep,
            tenantImprovementBudget,
            stateTax,
            superstructureDisplay,
            shellDryWallDisplay,
            shellConcreteDisplay,
            stairSystemDisplay,
            tenantImprovementBudgetDisplay,
            hasArchEng,
            overheadAndFee,
            bti,
            contingency,
            archEngFee,
            generalConditions,
            projectName,
            companyName,
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
                    "Number of Floors": `${buildingFloors}`,
                    "Total Footprint": `${buildingFootprintArea}`,
                    "Gross Sq. Ft": `${buildingGrossSqFt}`,
                    "Building Perimeter": `${buildingPerimeter}`,
                    "Building Height": `${buildingHeight}`,
                    "Floor Height": `${buildingFloorHeight}`,
                    "Exterior Enclosure Sq. Ft": `${buildingExteriorEnclosureSqFt}`,
                    "Public Entrances": `${publicEntrances}`,
                    "Number of Elevators": `${calcNumberOfElevators}`,
                    "Number of Stairwells": `${calcNumberOfStairWells}`

                },
                "Substructure": {
                    "Foundation": `${foundation}`,
                    "Slab on Grade": `${sOG}`
                },
                "Superstructure": {
                    "Superstructure Type": `${superstructureDisplay}`
                },
                "Exterior Enclosure": {
                    "Exterior Skin & Glazing": `${extSG}`,
                    "Roofing": `${roofing}`
                },
                "Interior Finishes": {
                    "Shell Drywall": `${shellDryWallDisplay}`,
                    "Shell Concrete": `${shellConcreteDisplay}`
                },
                "Vertical Circulation Systems": {
                    "Stair System": `${stairSystemDisplay}`
                },
                "Mechanical Systems": {
                    "HVAC": `${hVAC}`
                },
                "Tenant Improvements": {
                    "Tenant Improvement Budget": `${tenantImprovementBudgetDisplay === '' ? tenantImprovementBudgetDisplay : 'None'}`

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

    // Initialize these variables with an error string so we know if the calculate method did not get called and update their values

    let calcNumberOfElevators = 'something went wrong';
    let calcNumberOfStairWells = 'something went wrong';

    const calculate = () => {
        let total = 0;

        /*
        So I need to add each selection to the sections and total it up at the end
        Sections:
        - builing information ()
        - substructure (foundation + slab on grade)
        - superstructure (Type of structure)
        - Exterior enclosure (ext skin glazing + roofing)
        - Interior Finishes (int finishing)
        - Vertical Circulation Systems (stair system)
        - Mechanical Systems (hvac)
        - Electrical systems (services +lighting)
        - tenant improvement ()
        - Fees ()

        1 substructure = footprint * substructure foundation + footprint * slab on grade + elevator pit concrete
        2 superstructure = type of struc * building area + miscelaneous steel(bulding area) + entrycanopy(25% of perimeter * 5)
        3 ext enclosure = wp elev pit + waterbelgradwall * perimeter
        */

        /* calcNumberOfElevators is the variable we will use in our calculations based on the number of elevators; this will allow us to manipulate
        the value of the state variable within this function */

        if (numberOfElevators === 'default') {
            // The line below MUST be == and not === or else it will not set the variable to 0 when there is only 1 floor
            if (buildingFloors == 1) {
                calcNumberOfElevators = 0;
            } else if (buildingGrossSqFt >= 50001) {
                calcNumberOfElevators = 3;
            } else if (buildingGrossSqFt <= 30000) {
                calcNumberOfElevators = 1;
            } else {
                calcNumberOfElevators = 2;
            }
        } else {
            calcNumberOfElevators = numberOfElevators;
        }

        if (numberOfStairWells === 'default') {
            // The line below MUST be == and not === or else it will not set the variable to 0 when there is only 1 floor
            if (buildingFloors == 1) {
                calcNumberOfStairWells = 0;
            } else if (buildingGrossSqFt >= 50001) {
                calcNumberOfStairWells = 3;
            } else {
                calcNumberOfStairWells = 2;
            }
        } else {
            calcNumberOfStairWells = numberOfStairWells;
        }

        const canopySqFt = 0.25 * buildingPerimeter * 5;
        const restroomAmount = 2 * buildingFloors;

        const substructure =
            buildingFootprintArea * substructureFoundation +
            structuralExcav * buildingFootprintArea +
            buildingFootprintArea * substructureSog +
            slabPrep * buildingFootprintArea +
            elevatorPitConcrete * calcNumberOfElevators;

        const superstructure =
            superstructureType * buildingGrossSqFt +
            entryCanopySteel * canopySqFt +
            miscellaneousSteel * buildingGrossSqFt;

        const extEnclosure =
            waterproofElevatorPit * calcNumberOfElevators +
            waterBelGradeWall * buildingPerimeter * 2.5 +
            buildingExteriorEnclosureSqFt * 0.7 * exteriorSkinGlazing +
            miscExteriorWindowAndWallFlashings * buildingExteriorEnclosureSqFt +
            storefrontWindowSystems * buildingExteriorEnclosureSqFt * 0.25 +
            curtainwallSystem * buildingExteriorEnclosureSqFt * 0.05 +
            entryCanopyRoof * canopySqFt +
            roughCarpentry * buildingGrossSqFt +
            roofRelatedSheetMetals * buildingFootprintArea +
            exteriorRoofing * buildingFootprintArea +
            skylights * buildingFootprintArea * 0.015;

        /*
        mepShaftWalls -> if dimensions of the shaft walls ever change, from its current dimensions of 5x5, then the static number '20' in the calculation
        below must be changed to match the perimeter of the differently sized shaft (5 + 5 + 5 + 5) = 20
        mepRooms -> does not account for 1 story tall buildings, don't know if 1 story tall buildings have mep rooms
         */

        const intFinishes =
            coreRestroom * (buildingFloors * 2) +
            coreVestibules * publicEntrances +
            coreLobbyMain +
            coreLobbyUpper * (buildingFloors - 1) +
            mepShaftWalls * (20 * (buildingHeight - 4) * 2) +
            elevatorShaftWalls * (32 * calcNumberOfElevators * (buildingHeight - 4)) +
            stairWellWalls * (60 * (buildingHeight - 4) * calcNumberOfStairWells) +
            mepRooms * (40 * (buildingHeight - 4) * 3) +
            janitorClosets * (40 * (buildingHeight - 4)) +
            coreInteriorDoors * 10 * buildingFloors +
            coreExteriorDoors * publicEntrances +
            sCPaint * buildingGrossSqFt +
            shellDryWall * buildingExteriorEnclosureSqFt +
            shellConcrete * buildingGrossSqFt;

        /*
        hydraulicElevator -> this part of the algorithm assumes that 1 count of elevator equals 2 hydraulic elevators. The example this algorithm is  based off of
        had elevator count at 1 however the example listed 2 hydraulic elevators being purchased.
         */

        const vertCircSystems =
            stairSystem * (buildingFloorHeight * calcNumberOfStairWells * buildingFloors) +
            hydraulicElevator * calcNumberOfElevators * buildingFloors +
            upgradeElevatorCabFinish * calcNumberOfElevators;

        const mechSystems =
            fireProtectionSystems * buildingGrossSqFt +
            fireProtectionSystemsUnderCanopies * canopySqFt +
            buildingPlumbing * buildingGrossSqFt +
            restroomPlumbingFixtures * restroomAmount * 5 +
            janitorClosetPlumbing * buildingFloors +
            hvacSystems * buildingGrossSqFt +
            mechScreen * buildingGrossSqFt +
            hvacDesign * buildingGrossSqFt;

        /*
        elecServ -> accounts for the cost per sqFT of Electrical Service, Lighting Control, Common Areas, and MEP connections. The client calculated
        the cost per sqFT for all of these items as one bundle which falls under the elecServ variable
         */

        const elecSystems =
            elecServ * buildingGrossSqFt + fireAlarm * buildingGrossSqFt + designEng * buildingGrossSqFt;

        /*
        The algorithm currently assumes that if you choose to have tenant improvement then you will have it on the entire building's gross sq-ftage
        it does not currently allow for calculating TI on a chosen portion of the gross sq-ftage
         */

        const tenantImprovement = tenantImprovementBudget * buildingGrossSqFt;

        if (constructionType === 'Core and Shell') {
            total =
                substructure +
                superstructure +
                extEnclosure +
                intFinishes +
                vertCircSystems +
                mechSystems +
                elecSystems;
        } else {
            total =
                substructure +
                superstructure +
                extEnclosure +
                intFinishes +
                vertCircSystems +
                mechSystems +
                elecSystems +
                tenantImprovement;
        }

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

        // The replace method won't work correctly if total has any decimal places past 1/1000th since it would also place commas to the right of the decimal point
        const totalArr = [];

        totalArr[0] = totalOver.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        totalArr[1] = subTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        totalArr[2] = totalWithTaxAndFees.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        totalArr[3] = totalUnder.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
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

    if (constructionType === 'Core and Shell') {
        return (
            <Container>
                <ScrollView>
                    <View>
                        <PageTitle>Summary of Costs</PageTitle>
                        <BlankButton title="Total" />
                        <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="7%">
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
                                <BoldedText>General Conditions: </BoldedText>
                                <Text>
                                    {Math.round(genCondCalc(totalArr[4] + Number.EPSILON) * 10000) / 100}%{'\n'}
                                </Text>
                                <BoldedText>Overhead & Fee: </BoldedText>
                                <Text>{Math.round(overheadAndFeeCalc(totalArr[4] + Number.EPSILON) * 10000) / 100}%{'\n'}</Text>
                                <BoldedText>BT&I: </BoldedText>
                                <Text>{Math.round(bti * 100 * 100) / 100}% {'\n'}</Text>
                                <BoldedText>Contingency: </BoldedText>
                                <Text>{contingency * 100}% {'\n'}</Text>
                                <BoldedText>Sales Tax: </BoldedText>
                                <Text>
                                    {Math.round(stateTax * 10000) / 100}%{'\n'}
                                </Text>
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
                            <Text style={{ fontSize: 25, marginBottom: 10 }}>
                                ${totalArr[3]} - ${totalArr[0]}
                            </Text>
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
                                <BoldedText>Building Perimeter: </BoldedText>
                                <Text>
                                    {buildingPerimeter} {'\n'}
                                </Text>
                                <BoldedText>Building Height: </BoldedText>
                                <Text>
                                    {buildingHeight} {'\n'}
                                </Text>
                                <BoldedText>Floor Height: </BoldedText>
                                <Text>
                                    {buildingFloorHeight} {'\n'}
                                </Text>
                                <BoldedText>Exterior Enclosure Sq. Ft: </BoldedText>
                                <Text>
                                    {buildingExteriorEnclosureSqFt} {'\n'}
                                </Text>
                                <BoldedText>Public Entrances: </BoldedText>
                                <Text>
                                    {publicEntrances} {'\n'}
                                </Text>
                                <BoldedText>Number of Elevators: </BoldedText>
                                <Text>
                                    {calcNumberOfElevators} {'\n'}
                                </Text>
                                <BoldedText>Number of Stairwells: </BoldedText>
                                <Text>
                                    {calcNumberOfStairWells} {'\n'}
                                </Text>
                            </Text>
                        </View>

                        <HistoryButton title="Substructure" onPress={() => navigation.navigate('Substructure')} />
                        <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                            <Text>
                                <BoldedText>Foundation: </BoldedText>
                                <Text>
                                    {foundation} {'\n'}
                                </Text>
                                <BoldedText>Slab on Grade: </BoldedText>
                                <Text>
                                    {sOG} {'\n'}
                                </Text>
                            </Text>
                        </View>

                        <HistoryButton title="Superstructure" onPress={() => navigation.navigate('Superstructure')} />
                        <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                            <Text>
                                <BoldedText>Superstructure type: </BoldedText>
                                <Text>
                                    {superstructureDisplay} {'\n'}
                                </Text>
                            </Text>
                        </View>

                        <HistoryButton
                            title="Exterior Enclosure"
                            onPress={() => navigation.navigate('ExteriorEnclosure')}
                        />
                        <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                            <Text>
                                <BoldedText>Exterior Skin & Glazing: </BoldedText>
                                <Text>
                                    {extSG} {'\n'}
                                </Text>
                                <BoldedText>Roofing: </BoldedText>
                                <Text>
                                    {roofing} {'\n'}
                                </Text>
                            </Text>
                        </View>

                        <HistoryButton
                            title="Interior Finishes"
                            onPress={() => navigation.navigate('InteriorFinishes')}
                        />
                        <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                            <Text>
                                <BoldedText>Shell Drywall: </BoldedText>
                                <Text>
                                    {shellDryWallDisplay} {'\n'}
                                </Text>
                                <BoldedText>Shell Concrete: </BoldedText>
                                <Text>
                                    {shellConcreteDisplay} {'\n'}
                                </Text>
                            </Text>
                        </View>

                        <HistoryButton
                            title="Vertical Circulation Systems"
                            onPress={() => navigation.navigate('VerticalCirculationSystems')}
                        />
                        <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                            <Text>
                                <BoldedText>Stair System: </BoldedText>
                                <Text>
                                    {stairSystemDisplay} {'\n'}
                                </Text>
                            </Text>
                        </View>

                        <HistoryButton
                            title="Mechanical Systems"
                            onPress={() => navigation.navigate('MechanicalSystems')}
                        />

                        <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                            <Text>
                                <BoldedText>HVAC: </BoldedText>
                                <Text>
                                    {hVAC} {'\n'}
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
    }

    return (
        <Container>
            <ScrollView>
                <View>
                    <PageTitle>Summary of Costs</PageTitle>
                    <BlankButton title="Total" />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="7%">
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
                            <BoldedText>General Conditions: </BoldedText>
                            <Text>
                                {Math.round(genCondCalc(totalArr[4] + Number.EPSILON) * 10000) / 100}%{'\n'}
                            </Text>
                            <BoldedText>Overhead & Fee: </BoldedText>
                            <Text>{Math.round(overheadAndFeeCalc(totalArr[4] + Number.EPSILON) * 10000) / 100}%{'\n'}</Text>
                            <BoldedText>BT&I: </BoldedText>
                            <Text>1.85% {'\n'}</Text>
                            <BoldedText>Contingency: </BoldedText>
                            <Text>10% {'\n'}</Text>
                            <BoldedText>Sales Tax: </BoldedText>
                            <Text>
                                {Math.round(stateTax * 10000) / 100}%{'\n'}
                            </Text>
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
                        <Text style={{ fontSize: 25, marginBottom: 10 }}>
                            ${totalArr[3]} - ${totalArr[0]}
                        </Text>
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
                            <BoldedText>Building Perimeter: </BoldedText>
                            <Text>
                                {buildingPerimeter} {'\n'}
                            </Text>
                            <BoldedText>Building Height: </BoldedText>
                            <Text>
                                {buildingHeight} {'\n'}
                            </Text>
                            <BoldedText>Floor Height: </BoldedText>
                            <Text>
                                {buildingFloorHeight} {'\n'}
                            </Text>
                            <BoldedText>Exterior Enclosure Sq. Ft: </BoldedText>
                            <Text>
                                {buildingExteriorEnclosureSqFt} {'\n'}
                            </Text>
                            <BoldedText>Public Entrances: </BoldedText>
                            <Text>
                                {publicEntrances} {'\n'}
                            </Text>
                            <BoldedText>Number of Elevators: </BoldedText>
                            <Text>
                                {calcNumberOfElevators} {'\n'}
                            </Text>
                            <BoldedText>Number of Stairwells: </BoldedText>
                            <Text>
                                {calcNumberOfStairWells} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <HistoryButton title="Substructure" onPress={() => navigation.navigate('Substructure')} />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>Foundation: </BoldedText>
                            <Text>
                                {foundation} {'\n'}
                            </Text>
                            <BoldedText>Slab on Grade: </BoldedText>
                            <Text>
                                {sOG} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <HistoryButton title="Superstructure" onPress={() => navigation.navigate('Superstructure')} />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>Superstructure type: </BoldedText>
                            <Text>
                                {superstructureDisplay} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <HistoryButton
                        title="Exterior Enclosure"
                        onPress={() => navigation.navigate('ExteriorEnclosure')}
                    />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>Exterior Skin & Glazing: </BoldedText>
                            <Text>
                                {extSG} {'\n'}
                            </Text>
                            <BoldedText>Roofing: </BoldedText>
                            <Text>
                                {roofing} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <HistoryButton title="Interior Finishes" onPress={() => navigation.navigate('InteriorFinishes')} />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>Shell Drywall: </BoldedText>
                            <Text>
                                {shellDryWallDisplay} {'\n'}
                            </Text>
                            <BoldedText>Shell Concrete: </BoldedText>
                            <Text>
                                {shellConcreteDisplay} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <HistoryButton
                        title="Vertical Circulation Systems"
                        onPress={() => navigation.navigate('VerticalCirculationSystems')}
                    />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>Stair System: </BoldedText>
                            <Text>
                                {stairSystemDisplay} {'\n'}
                            </Text>
                        </Text>
                    </View>

                    <HistoryButton
                        title="Mechanical Systems"
                        onPress={() => navigation.navigate('MechanicalSystems')}
                    />
                    <View height={item.height} backgroundColor="#f8f8f8" paddingHorizontal="10%">
                        <Text>
                            <BoldedText>HVAC: </BoldedText>
                            <Text>
                                {hVAC} {'\n'}
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

export default SummaryOfCosts;
