import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { useStateValue } from '../../js/Hooks';
import { Container, ContainerView, PageTitle, Section, SectionTitle, SectionInput } from '../styled/Theme';
import ApiManager from '../../js/ApiManager';
import { SaveButton } from '../styled/SaveButton';
import { BackButton } from '../styled/BackButton';

/*
var updatedRateProfile = {
    buildingPlumbing:
};
*/
const UpdateDB = (props) => {
    const apiManager = ApiManager.getInstance();

    let [
        {
            buildingPlumbing,
            coreExteriorDoors,
            coreInteriorDoors,
            coreLobbyMain,
            coreLobbyUpper,
            coreRestroom,
            coreVestibules,
            curtainwallSystem,
            designEng,
            elecServ,
            elevatorPitConcrete,
            elevatorShaftWalls,
            entryCanopyRoof,
            entryCanopySteel,
            fireAlarm,
            fireProtectionSystems,
            fireProtectionSystemsUnderCanopies,
            hvacDesign,
            hydraulicElevator,
            janitorClosetPlumbing,
            janitorClosets,
            mechScreen,
            mepRooms,
            mepShaftWalls,
            miscExteriorWindowAndWallFlashings,
            miscellaneousSteel,
            restroomPlumbingFixtures,
            roofRelatedSheetMetals,
            roughCarpentry,
            sCPaint,
            skylights,
            slabPrep,
            stairWellWalls,
            storefrontWindowSystems,
            structuralExcav,
            upgradeElevatorCabFinish,
            waterBelGradeWall,
            waterproofElevatorPit,
            rateProfileId,
            overheadAndFee,
            archEngFee,
            bti,
            contingency,
            generalConditions,
            slabDemolition,
            sogPatching,
            sogPrep,
        },
    ] = useStateValue();

    const [{}, dispatch] = useStateValue();
    // eslint-disable-next-line no-empty-pattern
    const { navigation } = props;
    const [saveResultColor, setSaveResultColor] = useState('#008000');
    const [saveResultMessage, setSaveResultMessage] = useState('');

    return (
        <Container>
            <KeyboardAvoidingView>
                <ScrollView>
                    <ContainerView>
                        <PageTitle>Update DB</PageTitle>
                        <Section>
                            <SectionTitle>Architectural Engineering Fee</SectionTitle>
                            <SectionInput
                                placeholder={archEngFee}
                                onChangeText={(text) => {
                                    archEngFee = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>BTI</SectionTitle>
                            <SectionInput
                                placeholder={bti}
                                onChangeText={(text) => {
                                    bti = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Building Plumbing</SectionTitle>
                            <SectionInput
                                placeholder={buildingPlumbing}
                                onChangeText={(text) => {
                                    buildingPlumbing = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Contingency</SectionTitle>
                            <SectionInput
                                placeholder={contingency}
                                onChangeText={(text) => {
                                    contingency = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Core Exterior Doors</SectionTitle>
                            <SectionInput
                                placeholder={coreExteriorDoors}
                                onChangeText={(text) => {
                                    coreExteriorDoors = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Core Interior Doors</SectionTitle>
                            <SectionInput
                                placeholder={coreInteriorDoors}
                                onChangeText={(text) => {
                                    coreInteriorDoors = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Core Lobby Main</SectionTitle>
                            <SectionInput
                                placeholder={coreLobbyMain}
                                onChangeText={(text) => {
                                    coreLobbyMain = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Core Lobby Upper</SectionTitle>
                            <SectionInput
                                placeholder={coreLobbyUpper}
                                onChangeText={(text) => {
                                    coreLobbyUpper = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Core Restroom</SectionTitle>
                            <SectionInput
                                placeholder={coreRestroom}
                                onChangeText={(text) => {
                                    coreRestroom = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Core Vestibules</SectionTitle>
                            <SectionInput
                                placeholder={coreVestibules}
                                onChangeText={(text) => {
                                    coreVestibules = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Curtainwall System</SectionTitle>
                            <SectionInput
                                placeholder={curtainwallSystem}
                                onChangeText={(text) => {
                                    curtainwallSystem = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Design Engineering</SectionTitle>
                            <SectionInput
                                placeholder={designEng}
                                onChangeText={(text) => {
                                    designEng = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Electrical Services</SectionTitle>
                            <SectionInput
                                placeholder={elecServ}
                                onChangeText={(text) => {
                                    elecServ = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Elevator Pit Concrete</SectionTitle>
                            <SectionInput
                                placeholder={elevatorPitConcrete}
                                onChangeText={(text) => {
                                    elevatorPitConcrete = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Elevator Shaft Walls</SectionTitle>
                            <SectionInput
                                placeholder={elevatorShaftWalls}
                                onChangeText={(text) => {
                                    elevatorShaftWalls = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Entry Canopy Roof</SectionTitle>
                            <SectionInput
                                placeholder={entryCanopyRoof}
                                onChangeText={(text) => {
                                    entryCanopyRoof = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Entry Canopy Steel</SectionTitle>
                            <SectionInput
                                placeholder={entryCanopySteel}
                                onChangeText={(text) => {
                                    entryCanopySteel = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Fire Alarm</SectionTitle>
                            <SectionInput
                                placeholder={fireAlarm}
                                onChangeText={(text) => {
                                    fireAlarm = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Fire Protection Systems</SectionTitle>
                            <SectionInput
                                placeholder={fireProtectionSystems}
                                onChangeText={(text) => {
                                    fireProtectionSystems = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Fire Protection Systems Under Canopies</SectionTitle>
                            <SectionInput
                                placeholder={fireProtectionSystemsUnderCanopies}
                                onChangeText={(text) => {
                                    fireProtectionSystemsUnderCanopies = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>General Conditions Fee (50k - 500k)</SectionTitle>
                            <SectionInput
                                placeholder={generalConditions[0]}
                                onChangeText={(text) => {
                                    generalConditions[0] = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>General Conditions Fee (500k - 1M)</SectionTitle>
                            <SectionInput
                                placeholder={generalConditions[1]}
                                onChangeText={(text) => {
                                    generalConditions[1] = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>General Conditions Fee (1M - 3M)</SectionTitle>
                            <SectionInput
                                placeholder={generalConditions[2]}
                                onChangeText={(text) => {
                                    generalConditions[2] = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>General Conditions Fee (3M - 5M)</SectionTitle>
                            <SectionInput
                                placeholder={generalConditions[3]}
                                onChangeText={(text) => {
                                    generalConditions[3] = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>General Conditions Fee (5M - 10M)</SectionTitle>
                            <SectionInput
                                placeholder={generalConditions[4]}
                                onChangeText={(text) => {
                                    generalConditions[4] = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>General Conditions Fee (10M - 15M)</SectionTitle>
                            <SectionInput
                                placeholder={generalConditions[5]}
                                onChangeText={(text) => {
                                    generalConditions[5] = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>General Conditions Fee (15M - 20M)</SectionTitle>
                            <SectionInput
                                placeholder={generalConditions[6]}
                                onChangeText={(text) => {
                                    generalConditions[6] = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>General Conditions Fee (20M+)</SectionTitle>
                            <SectionInput
                                placeholder={generalConditions[7]}
                                onChangeText={(text) => {
                                    generalConditions[7] = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Hvac Design</SectionTitle>
                            <SectionInput
                                placeholder={hvacDesign}
                                onChangeText={(text) => {
                                    hvacDesign = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Hydraulic Elevator</SectionTitle>
                            <SectionInput
                                placeholder={hydraulicElevator}
                                onChangeText={(text) => {
                                    hydraulicElevator = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Janitor Closet Plumbing</SectionTitle>
                            <SectionInput
                                placeholder={janitorClosetPlumbing}
                                onChangeText={(text) => {
                                    janitorClosetPlumbing = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Janitor Closets</SectionTitle>
                            <SectionInput
                                placeholder={janitorClosets}
                                onChangeText={(text) => {
                                    janitorClosets = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Mechanical Screen</SectionTitle>
                            <SectionInput
                                placeholder={mechScreen}
                                onChangeText={(text) => {
                                    mechScreen = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>MEP Rooms</SectionTitle>
                            <SectionInput
                                placeholder={mepRooms}
                                onChangeText={(text) => {
                                    mepRooms = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>MEP Shaft Walls</SectionTitle>
                            <SectionInput
                                placeholder={mepShaftWalls}
                                onChangeText={(text) => {
                                    mepShaftWalls = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Misc Exterior Window and Wall Flashings</SectionTitle>
                            <SectionInput
                                placeholder={miscExteriorWindowAndWallFlashings}
                                onChangeText={(text) => {
                                    miscExteriorWindowAndWallFlashings = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Miscellaneous Steel</SectionTitle>
                            <SectionInput
                                placeholder={miscellaneousSteel}
                                onChangeText={(text) => {
                                    miscellaneousSteel = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Overhead & Fee</SectionTitle>
                            <SectionInput
                                placeholder={overheadAndFee}
                                onChangeText={(text) => {
                                    overheadAndFee = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Restroom Plumbing Fixtures</SectionTitle>
                            <SectionInput
                                placeholder={restroomPlumbingFixtures}
                                onChangeText={(text) => {
                                    restroomPlumbingFixtures = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Roof-Related Sheet Metals</SectionTitle>
                            <SectionInput
                                placeholder={roofRelatedSheetMetals}
                                onChangeText={(text) => {
                                    roofRelatedSheetMetals = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Rough Carpentry</SectionTitle>
                            <SectionInput
                                placeholder={roughCarpentry}
                                onChangeText={(text) => {
                                    roughCarpentry = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Shell & Core Paint</SectionTitle>
                            <SectionInput
                                placeholder={sCPaint}
                                onChangeText={(text) => {
                                    sCPaint = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Skylights</SectionTitle>
                            <SectionInput
                                placeholder={skylights}
                                onChangeText={(text) => {
                                    skylights = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Slab Demolition</SectionTitle>
                            <SectionInput
                                placeholder={slabDemolition}
                                onChangeText={(text) => {
                                    slabDemolition = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Slab Prep</SectionTitle>
                            <SectionInput
                                placeholder={slabPrep}
                                onChangeText={(text) => {
                                    slabPrep = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>SOG Patching</SectionTitle>
                            <SectionInput
                                placeholder={sogPatching}
                                onChangeText={(text) => {
                                    sogPatching = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>SOG Prep</SectionTitle>
                            <SectionInput
                                placeholder={sogPrep}
                                onChangeText={(text) => {
                                    sogPrep = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Stairwell Walls</SectionTitle>
                            <SectionInput
                                placeholder={stairWellWalls}
                                onChangeText={(text) => {
                                    stairWellWalls = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Storefront Window Systems</SectionTitle>
                            <SectionInput
                                placeholder={storefrontWindowSystems}
                                onChangeText={(text) => {
                                    storefrontWindowSystems = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Structural Excavation</SectionTitle>
                            <SectionInput
                                placeholder={structuralExcav}
                                onChangeText={(text) => {
                                    structuralExcav = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Upgrade Elevator Cab Finish</SectionTitle>
                            <SectionInput
                                placeholder={upgradeElevatorCabFinish}
                                onChangeText={(text) => {
                                    upgradeElevatorCabFinish = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Water Below-Grade Wall</SectionTitle>
                            <SectionInput
                                placeholder={waterBelGradeWall}
                                onChangeText={(text) => {
                                    waterBelGradeWall = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Waterproof Elevator Pit</SectionTitle>
                            <SectionInput
                                placeholder={waterproofElevatorPit}
                                onChangeText={(text) => {
                                    waterproofElevatorPit = Number(text);
                                }}
                                keyboardType="numeric"
                            />
                        </Section>

                        {saveResultMessage !== '' ? (
                            <Text style={{ color: saveResultColor, marginBottom: 20 }}>{saveResultMessage}</Text>
                        ) : null}

                        <SaveButton
                            title="Save"
                            onPress={() => {
                                setSaveResultColor('#0000FF');
                                setSaveResultMessage('Saving. Please wait...');

                                console.log(buildingPlumbing);
                                console.log(`rateprofiles/${rateProfileId}`);
                                console.log(
                                    JSON.stringify({
                                        active: true,
                                        archEngFee,
                                        bti,
                                        buildingPlumbing,
                                        contingency,
                                        coreExteriorDoors,
                                        coreInteriorDoors,
                                        coreLobbyMain,
                                        coreLobbyUpper,
                                        coreRestroom,
                                        coreVestibules,
                                        curtainWallSystem: curtainwallSystem,
                                        designEng,
                                        elecServ,
                                        elevatorPitConcrete,
                                        elevatorShaftWalls,
                                        entryCanopyRoof,
                                        entryCanopySteel,
                                        fireAlarm,
                                        fireProtectionSystems,
                                        fireProtectionSystemsUnderCanopies,
                                        generalConditionDefault: generalConditions[7],
                                        generalConditionOne: generalConditions[0],
                                        generalConditionTwo: generalConditions[1],
                                        generalConditionThree: generalConditions[2],
                                        generalConditionFour: generalConditions[3],
                                        generalConditionFive: generalConditions[4],
                                        generalConditionSix: generalConditions[5],
                                        generalConditionSeven: generalConditions[6],
                                        hvacDesign,
                                        hydraulicElevator,
                                        id: rateProfileId,
                                        janitorClosetPlumbing,
                                        janitorClosets,
                                        mechScreen,
                                        mepRooms,
                                        mepShaftWalls,
                                        miscExteriorWindowAndWallFlashings,
                                        miscellaneousSteel,
                                        overheadAndFee,
                                        restroomPlumbingFixtures,
                                        roofRelatedSheetMetals,
                                        roughCarpentry,
                                        scPaint: sCPaint,
                                        skylights,
                                        slabDemolition,
                                        slabPrep,
                                        sogPatching,
                                        sogPrep,
                                        stairWellWalls,
                                        storefrontWindowSystems,
                                        structuralExcav,
                                        upgradeElevatorCabFinish,
                                        waterBelGradeWall,
                                        waterproofElevatorPit,
                                    })
                                );

                                apiManager.axios
                                    .put(
                                        `rateprofiles/${rateProfileId}`,
                                        JSON.stringify({
                                            active: true,
                                            archEngFee,
                                            bti,
                                            buildingPlumbing,
                                            contingency,
                                            coreExteriorDoors,
                                            coreInteriorDoors,
                                            coreLobbyMain,
                                            coreLobbyUpper,
                                            coreRestroom,
                                            coreVestibules,
                                            curtainWallSystem: curtainwallSystem,
                                            designEng,
                                            elecServ,
                                            elevatorPitConcrete,
                                            elevatorShaftWalls,
                                            entryCanopyRoof,
                                            entryCanopySteel,
                                            fireAlarm,
                                            fireProtectionSystems,
                                            fireProtectionSystemsUnderCanopies,
                                            generalConditionDefault: generalConditions[7],
                                            generalConditionOne: generalConditions[0],
                                            generalConditionTwo: generalConditions[1],
                                            generalConditionThree: generalConditions[2],
                                            generalConditionFour: generalConditions[3],
                                            generalConditionFive: generalConditions[4],
                                            generalConditionSix: generalConditions[5],
                                            generalConditionSeven: generalConditions[6],
                                            hvacDesign,
                                            hydraulicElevator,
                                            id: rateProfileId,
                                            janitorClosetPlumbing,
                                            janitorClosets,
                                            mechScreen,
                                            mepRooms,
                                            mepShaftWalls,
                                            miscExteriorWindowAndWallFlashings,
                                            miscellaneousSteel,
                                            overheadAndFee,
                                            restroomPlumbingFixtures,
                                            roofRelatedSheetMetals,
                                            roughCarpentry,
                                            scPaint: sCPaint,
                                            skylights,
                                            slabDemolition,
                                            slabPrep,
                                            sogPatching,
                                            sogPrep,
                                            stairWellWalls,
                                            storefrontWindowSystems,
                                            structuralExcav,
                                            upgradeElevatorCabFinish,
                                            waterBelGradeWall,
                                            waterproofElevatorPit,
                                        })
                                    )
                                    .then(() => {
                                        console.log('Success!');

                                        setSaveResultColor('#008000');
                                        setSaveResultMessage('DB updated successfully!');

                                        dispatch({
                                            type: 'updateArchEngFee',
                                            newArchEngFee: archEngFee,
                                        });
                                        dispatch({
                                            type: 'updateBti',
                                            newBti: bti,
                                        });
                                        dispatch({
                                            type: 'updateBuildingPlumbing',
                                            newBuildingPlumbing: buildingPlumbing,
                                        });
                                        dispatch({
                                            type: 'updateContingency',
                                            newContingency: contingency,
                                        });
                                        dispatch({
                                            type: 'updateCoreExteriorDoors',
                                            newCoreExteriorDoors: coreExteriorDoors,
                                        });
                                        dispatch({
                                            type: 'updateCoreInteriorDoors',
                                            newCoreInteriorDoors: coreInteriorDoors,
                                        });
                                        dispatch({
                                            type: 'updateCoreLobbyMain',
                                            newCoreLobbyMain: coreLobbyMain,
                                        });
                                        dispatch({
                                            type: 'updateCoreLobbyUpper',
                                            newCoreLobbyUpper: coreLobbyUpper,
                                        });
                                        dispatch({
                                            type: 'updateCoreRestroom',
                                            newCoreRestroom: coreRestroom,
                                        });
                                        dispatch({
                                            type: 'updateCoreVestibules',
                                            newCoreVestibules: coreVestibules,
                                        });
                                        dispatch({
                                            type: 'updateCurtainwallSystem',
                                            newCurtainwallSystem: curtainwallSystem,
                                        });
                                        dispatch({
                                            type: 'updateDesignEng',
                                            newDesignEng: designEng,
                                        });
                                        dispatch({
                                            type: 'updateElecServ',
                                            newElecServ: elecServ,
                                        });
                                        dispatch({
                                            type: 'updateElevatorPitConcrete',
                                            newElevatorPitConcrete: elevatorPitConcrete,
                                        });
                                        dispatch({
                                            type: 'updateElevatorShaftWalls',
                                            newElevatorShaftWalls: elevatorShaftWalls,
                                        });
                                        dispatch({
                                            type: 'updateEntryCanopyRoof',
                                            newEntryCanopyRoof: entryCanopyRoof,
                                        });
                                        dispatch({
                                            type: 'updateEntryCanopySteel',
                                            newEntryCanopySteel: entryCanopySteel,
                                        });
                                        dispatch({
                                            type: 'updateFireAlarm',
                                            newFireAlarm: fireAlarm,
                                        });
                                        dispatch({
                                            type: 'updateFireProtectionSystems',
                                            newFireProtectionSystems: fireProtectionSystems,
                                        });
                                        dispatch({
                                            type: 'updateFireProtectionSystemsUnderCanopies',
                                            newFireProtectionSystemsUnderCanopies: fireProtectionSystemsUnderCanopies,
                                        });
                                        dispatch({
                                            type: 'updateGeneralConditions',
                                            newGeneralConditions: generalConditions,
                                        });
                                        dispatch({
                                            type: 'updateHVACDesign',
                                            newHVACDesign: hvacDesign,
                                        });
                                        dispatch({
                                            type: 'updateHydraulicElevator',
                                            newHydraulicElevator: hydraulicElevator,
                                        });
                                        dispatch({
                                            type: 'updateJanitorClosetPlumbing',
                                            newJanitorClosetPlumbing: janitorClosetPlumbing,
                                        });
                                        dispatch({
                                            type: 'updateJanitorClosets',
                                            newJanitorClosets: janitorClosets,
                                        });
                                        dispatch({
                                            type: 'updateMechScreen',
                                            newMechScreen: mechScreen,
                                        });
                                        dispatch({
                                            type: 'updateMepRooms',
                                            newMepRooms: mepRooms,
                                        });
                                        dispatch({
                                            type: 'updateMepShaftWalls',
                                            newMepShaftWalls: mepShaftWalls,
                                        });
                                        dispatch({
                                            type: 'updateMiscExteriorWindowAndWallFlashings',
                                            newMiscExteriorWindowAndWallFlashings: miscExteriorWindowAndWallFlashings,
                                        });
                                        dispatch({
                                            type: 'updateMiscellaneousSteel',
                                            newMiscellaneousSteel: miscellaneousSteel,
                                        });
                                        dispatch({
                                            type: 'updateOverheadAndFee',
                                            newOverheadAndFee: overheadAndFee,
                                        });
                                        dispatch({
                                            type: 'updateRestroomPlumbingFixtures',
                                            newRestroomPlumbingFixtures: restroomPlumbingFixtures,
                                        });
                                        dispatch({
                                            type: 'updateRoofRelatedSheetMetals',
                                            newRoofRelatedSheetMetals: roofRelatedSheetMetals,
                                        });
                                        dispatch({
                                            type: 'updateRoughCarpentry',
                                            newRoughCarpentry: roughCarpentry,
                                        });
                                        dispatch({
                                            type: 'updateSCPaint',
                                            newSCPaint: sCPaint,
                                        });
                                        dispatch({
                                            type: 'updateSkylights',
                                            newSkylights: skylights,
                                        });
                                        dispatch({
                                            type: 'updateSlabDemolition',
                                            newSlabDemolition: slabDemolition,
                                        });
                                        dispatch({
                                            type: 'updateSlabPrep',
                                            newSlabPrep: slabPrep,
                                        });
                                        dispatch({
                                            type: 'updateSogPatching',
                                            newSogPatching: sogPatching,
                                        });
                                        dispatch({
                                            type: 'updateSogPrep',
                                            newSogPrep: sogPrep,
                                        });
                                        dispatch({
                                            type: 'updateStairWellWalls',
                                            newStairWellWalls: stairWellWalls,
                                        });
                                        dispatch({
                                            type: 'updateStorefrontWindowSystems',
                                            newStorefrontWindowSystems: storefrontWindowSystems,
                                        });
                                        dispatch({
                                            type: 'updateStructuralExcav',
                                            newStructuralExcav: structuralExcav,
                                        });
                                        dispatch({
                                            type: 'updateUpgradeElevatorCabFinish',
                                            newUpgradeElevatorCabFinish: upgradeElevatorCabFinish,
                                        });
                                        dispatch({
                                            type: 'updateWaterBelGradeWall',
                                            newWaterBelGradeWall: waterBelGradeWall,
                                        });
                                        dispatch({
                                            type: 'updateWaterproofElevatorPit',
                                            newWaterproofElevatorPit: waterproofElevatorPit,
                                        });
                                    })
                                    .catch((err) => {
                                        console.log(err);

                                        setSaveResultColor('#bd0e02');
                                        setSaveResultMessage(
                                            'There was an error saving the form. Please make sure input is valid and try again.'
                                        );
                                    });
                            }}
                        />

                        <BackButton
                            title="Home"
                            onPress={() => {
                                navigation.navigate('Home');
                            }}
                        />
                    </ContainerView>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default UpdateDB;
