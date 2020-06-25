import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import { useStateValue } from '../../js/Hooks';
import {
    ContainerView,
    PageTitle,
    Section,
    SectionTitle,
    SectionInput,
} from '../styled/Theme';
import { MenuButton } from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

const Dashboard = (props) => {
    let [
        {
            architecturalStair,
            bTI,
            builtUpRoof,
            concreteStructure,
            contingency,
            coreExteriorDoors,
            coreInteriorDoors,
            janitorCloset,
            coreLobbyMain,
            coreLobbyUpper,
            coreMEPRooms,
            coreRestroom,
            sCPaint,
            coreShaftElevator,
            coreShaftStructure,
            coreStairwell,
            coreVestibules,
            curtWallSys,
            deepFoundation,
            designEng,
            elecServ,
            elevatorPit,
            entryCanopyRoof,
            entryCanopySteel,
            extSkinConcrete,
            extSkinMetal,
            extSkinTrespa,
            fPS,
            fPSUNC,
            fireAlarm,
            genCond,
            gold,
            heavyTimber,
            hVACBoiler,
            hVACDesign,
            hVACPump,
            hVACStandard,
            hydraulicElevator,
            mechScreen,
            metalRoof,
            miscellaneousSteel,
            miscExtWin,
            overheardFee,
            platinum,
            plumbingBuilding,
            plumbingCloset,
            plumbingRestroom,
            roofRelated,
            roughCarp,
            shellBareConcrete,
            shellFinishDrywall,
            shellNoDrywall,
            shellSealConcrete,
            shellUnfinishDrywall,
            shellPolishConcrete,
            silver,
            singlePlyRoof,
            skylights,
            slabPrep,
            sOGHeavy,
            sOGMild,
            sOGMinimal,
            standardFoundation,
            standardStair,
            steelConcrete,
            storeWinSys,
            structuralExcav,
            tIHigh,
            tILow,
            tIMid,
            tINone,
            upgradeElevator,
            upgradedStair,
            waterBelGradeWall,
            waterElevator,
        },
    ] = useStateValue();
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();
    const { navigation } = props;

    return (
        <KeyboardAvoidingView behavior="position">
            <ScrollView>
                <ContainerView>
                    <PageTitle>Pricing Dasboard</PageTitle>
                    <Section>
                        <SectionTitle
                            style={{ fontWeight: 'bold', fontSize: 20 }}
                        >
                            LEED
                        </SectionTitle>
                        <Text>Silver - %</Text>
                        <SectionInput
                            placeholder={silver}
                            onChangeText={(text) => {
                                silver = text;
                            }}
                        />
                        <Text>Gold - %</Text>
                        <SectionInput
                            placeholder={gold}
                            onChangeText={(text) => {
                                gold = text;
                            }}
                        />
                        <Text>Platinum - %</Text>
                        <SectionInput
                            placeholder={platinum}
                            onChangeText={(text) => {
                                platinum = text;
                            }}
                        />
                    </Section>

                    <Section>
                        <SectionTitle
                            style={{ fontWeight: 'bold', fontSize: 20 }}
                        >
                            Substructure
                        </SectionTitle>
                        <Text>Standard Foundation </Text>
                        <SectionInput
                            placeholder={standardFoundation}
                            onChangeText={(text) => {
                                standardFoundation = text;
                            }}
                        />
                        <Text>Deep Foundation </Text>
                        <SectionInput
                            placeholder={deepFoundation}
                            onChangeText={(text) => {
                                deepFoundation = text;
                            }}
                        />
                        <Text>Structural Excavation (Footings & Pad)</Text>
                        <SectionInput
                            placeholder={structuralExcav}
                            onChangeText={(text) => {
                                structuralExcav = text;
                            }}
                        />
                        <Text>SOG Minimal</Text>
                        <SectionInput
                            placeholder={sOGMinimal}
                            onChangeText={(text) => {
                                sOGMinimal = text;
                            }}
                        />
                        <Text>SOG Mild </Text>
                        <SectionInput
                            placeholder={sOGMild}
                            onChangeText={(text) => {
                                sOGMild = text;
                            }}
                        />
                        <Text>SOG Heavy</Text>
                        <SectionInput
                            placeholder={sOGHeavy}
                            onChangeText={(text) => {
                                sOGHeavy = text;
                            }}
                        />
                        <Text>Slab Prep: 4&quot; Crushed Rock</Text>
                        <SectionInput
                            placeholder={slabPrep}
                            onChangeText={(text) => {
                                slabPrep = text;
                            }}
                        />
                        <Text>Elevator Pit Concrete</Text>
                        <SectionInput
                            placeholder={elevatorPit}
                            onChangeText={(text) => {
                                elevatorPit = text;
                            }}
                        />
                    </Section>
                    <Section>
                        <SectionTitle
                            style={{ fontWeight: 'bold', fontSize: 20 }}
                        >
                            Superstructure
                        </SectionTitle>
                        <Text>Steel Structure / Concrete On Metal Deck</Text>
                        <SectionInput
                            placeholder={steelConcrete}
                            onChangeText={(text) => {
                                steelConcrete = text;
                            }}
                        />
                        <Text>Heavy Timber Wood + Gypcrete</Text>
                        <SectionInput
                            placeholder={heavyTimber}
                            onChangeText={(text) => {
                                heavyTimber = text;
                            }}
                        />
                        <Text>Concrete Structure</Text>
                        <SectionInput
                            placeholder={concreteStructure}
                            onChangeText={(text) => {
                                concreteStructure = text;
                            }}
                        />
                        <Text>
                            Entry Canopy Steel (25% of Perimeter x 5&apos; Wide){' '}
                        </Text>
                        <SectionInput
                            placeholder={entryCanopySteel}
                            onChangeText={(text) => {
                                entryCanopySteel = text;
                            }}
                        />
                        <Text>Miscellaneous Steel </Text>
                        <SectionInput
                            placeholder={miscellaneousSteel}
                            onChangeText={(text) => {
                                miscellaneousSteel = text;
                            }}
                        />
                    </Section>
                    <Section>
                        <SectionTitle
                            style={{ fontWeight: 'bold', fontSize: 20 }}
                        >
                            Exterior Enclosure
                        </SectionTitle>
                        <Text>Waterproof Elevator Pit</Text>
                        <SectionInput
                            placeholder={waterElevator}
                            onChangeText={(text) => {
                                waterElevator = text;
                            }}
                        />
                        <Text>Waterproof Below Grade Walls</Text>
                        <SectionInput
                            placeholder={waterBelGradeWall}
                            onChangeText={(text) => {
                                waterBelGradeWall = text;
                            }}
                        />
                        <Text>Exterior Skin - Opaque Surface: Concrete</Text>
                        <SectionInput
                            placeholder={extSkinConcrete}
                            onChangeText={(text) => {
                                extSkinConcrete = text;
                            }}
                        />
                        <Text>Exterior Skin - Opaque Surface: Metal</Text>
                        <SectionInput
                            placeholder={extSkinMetal}
                            onChangeText={(text) => {
                                extSkinMetal = text;
                            }}
                        />
                        <Text>Exterior Skin - Opaque Surface: Trespa</Text>
                        <SectionInput
                            placeholder={extSkinTrespa}
                            onChangeText={(text) => {
                                extSkinTrespa = text;
                            }}
                        />
                        <Text>Misc Exterior Window / Wall Flashings</Text>
                        <SectionInput
                            placeholder={miscExtWin}
                            onChangeText={(text) => {
                                miscExtWin = text;
                            }}
                        />
                        <Text>
                            Storefront Window Systens w/ Intermediate Supports &
                            Flashings
                        </Text>
                        <SectionInput
                            placeholder={storeWinSys}
                            onChangeText={(text) => {
                                storeWinSys = text;
                            }}
                        />
                        <Text>Curtain System - 5%</Text>
                        <SectionInput
                            placeholder={curtWallSys}
                            onChangeText={(text) => {
                                curtWallSys = text;
                            }}
                        />
                        <Text>Entry Canopy Roof / Soffit & Flashings</Text>
                        <SectionInput
                            placeholder={entryCanopyRoof}
                            onChangeText={(text) => {
                                entryCanopyRoof = text;
                            }}
                        />
                        <Text>Rough Carpentry (Bldg SF)</Text>
                        <SectionInput
                            placeholder={roughCarp}
                            onChangeText={(text) => {
                                roughCarp = text;
                            }}
                        />
                        <Text>Roof Related Sheet Materials</Text>
                        <SectionInput
                            placeholder={roofRelated}
                            onChangeText={(text) => {
                                roofRelated = text;
                            }}
                        />
                        <Text>
                            Single Ply 60 Mil TPO Roof Assembly, R=38 w/
                            Coverboard
                        </Text>
                        <SectionInput
                            placeholder={singlePlyRoof}
                            onChangeText={(text) => {
                                singlePlyRoof = text;
                            }}
                        />
                        <Text>Built Up Roofing</Text>
                        <SectionInput
                            placeholder={builtUpRoof}
                            onChangeText={(text) => {
                                builtUpRoof = text;
                            }}
                        />
                        <Text>Metal Roofing</Text>
                        <SectionInput
                            placeholder={metalRoof}
                            onChangeText={(text) => {
                                metalRoof = text;
                            }}
                        />
                        <Text>
                            Skylights - Standard 4x6 Skylights ($3,500/EA) - 1.5
                            of Roof Area
                        </Text>
                        <SectionInput
                            placeholder={skylights}
                            onChangeText={(text) => {
                                skylights = text;
                            }}
                        />
                    </Section>
                    <Section>
                        <SectionTitle
                            style={{ fontWeight: 'bold', fontSize: 20 }}
                        >
                            Interior Finishes
                        </SectionTitle>
                        <Text>Shell Areas - No Drywall - NO COST</Text>
                        <SectionInput
                            placeholder={shellNoDrywall}
                            onChangeText={(text) => {
                                shellNoDrywall = text;
                            }}
                        />
                        <Text>Shell Areas - Unfinished Drywall</Text>
                        <SectionInput
                            placeholder={shellUnfinishDrywall}
                            onChangeText={(text) => {
                                shellUnfinishDrywall = text;
                            }}
                        />
                        <Text>Shell Areas - Finished Drywall (Level 4)</Text>
                        <SectionInput
                            placeholder={shellFinishDrywall}
                            onChangeText={(text) => {
                                shellFinishDrywall = text;
                            }}
                        />
                        <Text>
                            Shell Areas - Bare Concrete (No Sealer) - NO COST
                        </Text>
                        <SectionInput
                            placeholder={shellBareConcrete}
                            onChangeText={(text) => {
                                shellBareConcrete = text;
                            }}
                        />
                        <Text>Shell Areas - Sealed Concrete</Text>
                        <SectionInput
                            placeholder={shellSealConcrete}
                            onChangeText={(text) => {
                                shellSealConcrete = text;
                            }}
                        />
                        <Text>Shell Areas - Polished Concrete</Text>
                        <SectionInput
                            placeholder={shellPolishConcrete}
                            onChangeText={(text) => {
                                shellPolishConcrete = text;
                            }}
                        />
                        <Text>
                            Core Areas - Restroom: Finishes & Walls: Public - 3
                            Toilets & 2 Lavs, Area = 15 x 15 (2 Per Floor = M&W)
                        </Text>
                        <SectionInput
                            placeholder={coreRestroom}
                            onChangeText={(text) => {
                                coreRestroom = text;
                            }}
                        />
                        <Text>
                            Core Areas - Vestibules (80SF + Pair Entry Doors +
                            Pair Vestibule Doors + Framing & WOM)
                        </Text>
                        <SectionInput
                            placeholder={coreVestibules}
                            onChangeText={(text) => {
                                coreVestibules = text;
                            }}
                        />
                        <Text>
                            Core Areas - Lobbies (200 SF) - Upper Floors
                        </Text>
                        <SectionInput
                            placeholder={coreLobbyUpper}
                            onChangeText={(text) => {
                                coreLobbyUpper = text;
                            }}
                        />
                        <Text>Core Areas - Lobbies (400 SF) - Main Floor</Text>
                        <SectionInput
                            placeholder={coreLobbyMain}
                            onChangeText={(text) => {
                                coreLobbyMain = text;
                            }}
                        />
                        <Text>
                            Core Areas - Framed MEP Shaft Walls- To Structure (5
                            x 5 Per Floor) x 2 EA
                        </Text>
                        <SectionInput
                            placeholder={coreShaftStructure}
                            onChangeText={(text) => {
                                coreShaftStructure = text;
                            }}
                        />
                        <Text>
                            Core Areas - Stairwell Walls - GWB Partition Walls
                            (10 x 20) x # of Stair Wells
                        </Text>
                        <SectionInput
                            placeholder={coreShaftElevator}
                            onChangeText={(text) => {
                                coreShaftElevator = text;
                            }}
                        />
                        <Text>
                            Core Areas - Stairwell Walls - GWB Partition Walls
                            (10 x 20) x # of Stair Wells
                        </Text>
                        <SectionInput
                            placeholder={coreStairwell}
                            onChangeText={(text) => {
                                coreStairwell = text;
                            }}
                        />
                        <Text>
                            Core Areas - MEP Rooms: (10 x 10) x 3 Per Floor
                        </Text>
                        <SectionInput
                            placeholder={coreMEPRooms}
                            onChangeText={(text) => {
                                coreMEPRooms = text;
                            }}
                        />
                        <Text>
                            Core Areas - Janitor Closet: 10 x 10 x 1 Per Floor
                        </Text>
                        <SectionInput
                            placeholder={janitorCloset}
                            onChangeText={(text) => {
                                janitorCloset = text;
                            }}
                        />
                        <Text>
                            Core Areas - Interior Doors (Hollow Metal) for Rooms
                            above
                        </Text>
                        <SectionInput
                            placeholder={coreInteriorDoors}
                            onChangeText={(text) => {
                                coreInteriorDoors = text;
                            }}
                        />
                        <Text>Exterior Glass Entry Doors - Single</Text>
                        <SectionInput
                            placeholder={coreExteriorDoors}
                            onChangeText={(text) => {
                                coreExteriorDoors = text;
                            }}
                        />
                        <Text>S&C Painting</Text>
                        <SectionInput
                            placeholder={sCPaint}
                            onChangeText={(text) => {
                                sCPaint = text;
                            }}
                        />
                    </Section>
                    <Section>
                        <SectionTitle
                            style={{ fontWeight: 'bold', fontSize: 20 }}
                        >
                            Vertical Circulation Systems
                        </SectionTitle>
                        <Text>
                            Standard Stair System: Metal Pan - Concrete Filled /
                            Pipe Rails
                        </Text>
                        <SectionInput
                            placeholder={standardStair}
                            onChangeText={(text) => {
                                standardStair = text;
                            }}
                        />
                        <Text>
                            Upgraded Standard Stair System: Metal Pan - Concrete
                            Filled / Pipe Rails / Metal Panel -Infills
                        </Text>
                        <SectionInput
                            placeholder={upgradedStair}
                            onChangeText={(text) => {
                                upgradedStair = text;
                            }}
                        />
                        <Text>
                            Architectural Stair System: Metal Pan - Concrete
                            Filled / Hardwood Handrails / Metal Panel -Infills
                        </Text>
                        <SectionInput
                            placeholder={architecturalStair}
                            onChangeText={(text) => {
                                architecturalStair = text;
                            }}
                        />
                        <Text>3500lbs - Hydraulic Elevators </Text>
                        <SectionInput
                            placeholder={hydraulicElevator}
                            onChangeText={(text) => {
                                hydraulicElevator = text;
                            }}
                        />
                        <Text>Upgrade Elevator Cab Finish</Text>
                        <SectionInput
                            placeholder={upgradeElevator}
                            onChangeText={(text) => {
                                upgradeElevator = text;
                            }}
                        />
                    </Section>

                    <Section>
                        <SectionTitle
                            style={{ fontWeight: 'bold', fontSize: 20 }}
                        >
                            Mechanical Systems
                        </SectionTitle>
                        <Text>Fire Protection System</Text>
                        <SectionInput
                            placeholder={fPS}
                            onChangeText={(text) => {
                                fPS = text;
                            }}
                        />
                        <Text>Fire Protection System Under New Canopies</Text>
                        <SectionInput
                            placeholder={fPSUNC}
                            onChangeText={(text) => {
                                fPSUNC = text;
                            }}
                        />
                        <Text>Plumbing - S&C Building Plumbing</Text>
                        <SectionInput
                            placeholder={plumbingBuilding}
                            onChangeText={(text) => {
                                plumbingBuilding = text;
                            }}
                        />
                        <Text>
                            Plumbing - Restroom Fixtures - S&C Public Only - 5
                            Per RR
                        </Text>
                        <SectionInput
                            placeholder={plumbingRestroom}
                            onChangeText={(text) => {
                                plumbingRestroom = text;
                            }}
                        />
                        <Text>Plumbing - Janitor Closets - 1 Per Floor</Text>
                        <SectionInput
                            placeholder={plumbingCloset}
                            onChangeText={(text) => {
                                plumbingCloset = text;
                            }}
                        />
                        <Text>HVAC - Standard High Efficiency VAV</Text>
                        <SectionInput
                            placeholder={hVACStandard}
                            onChangeText={(text) => {
                                hVACStandard = text;
                            }}
                        />
                        <Text>HVAC - VRF Heat Pump / DOAS</Text>
                        <SectionInput
                            placeholder={hVACPump}
                            onChangeText={(text) => {
                                hVACPump = text;
                            }}
                        />
                        <Text>HVAC - Hyrdonic Boiler / Chiller</Text>
                        <SectionInput
                            placeholder={hVACBoiler}
                            onChangeText={(text) => {
                                hVACBoiler = text;
                            }}
                        />
                        <Text>Mechanical Screening (Bldg SF) </Text>
                        <SectionInput
                            placeholder={mechScreen}
                            onChangeText={(text) => {
                                mechScreen = text;
                            }}
                        />
                        <Text>HVAC Design & Engineering</Text>
                        <SectionInput
                            placeholder={hVACDesign}
                            onChangeText={(text) => {
                                hVACDesign = text;
                            }}
                        />
                    </Section>
                    <Section>
                        <SectionTitle
                            style={{ fontWeight: 'bold', fontSize: 20 }}
                        >
                            Electrical Systems
                        </SectionTitle>
                        <Text>
                            Electrical Service, Lighting Control, Common Areas,
                            MEP Connections
                        </Text>
                        <SectionInput
                            placeholder={elecServ}
                            onChangeText={(text) => {
                                elecServ = text;
                            }}
                        />
                        <Text>Fire Alarm System</Text>
                        <SectionInput
                            placeholder={fireAlarm}
                            onChangeText={(text) => {
                                fireAlarm = text;
                            }}
                        />
                        <Text>Design & Engineering</Text>
                        <SectionInput
                            placeholder={designEng}
                            onChangeText={(text) => {
                                designEng = text;
                            }}
                        />
                    </Section>
                    <Section>
                        <SectionTitle
                            style={{ fontWeight: 'bold', fontSize: 20 }}
                        >
                            Tenant Improvements
                        </SectionTitle>
                        <Text>TI Budget - NONE (S&C Only)</Text>
                        <SectionInput
                            placeholder={tINone}
                            onChangeText={(text) => {
                                tINone = text;
                            }}
                        />
                        <Text>TI Budget - Low</Text>
                        <SectionInput
                            placeholder={tILow}
                            onChangeText={(text) => {
                                tILow = text;
                            }}
                        />
                        <Text>TI Budget - Mid</Text>
                        <SectionInput
                            placeholder={tIMid}
                            onChangeText={(text) => {
                                tIMid = text;
                            }}
                        />
                        <Text>TI Budget - High</Text>
                        <SectionInput
                            placeholder={tIHigh}
                            onChangeText={(text) => {
                                tIHigh = text;
                            }}
                        />
                    </Section>
                    <Section>
                        <SectionTitle
                            style={{ fontWeight: 'bold', fontSize: 20 }}
                        >
                            Subtotal (NO MARKUPS OR GENERAL CONDITIONS)
                        </SectionTitle>
                        <Text>General Conditions</Text>
                        <SectionInput
                            placeholder={genCond}
                            onChangeText={(text) => {
                                genCond = text;
                            }}
                        />
                        <Text>Overhead & Fee</Text>
                        <SectionInput
                            placeholder={overheardFee}
                            onChangeText={(text) => {
                                overheardFee = text;
                            }}
                        />
                        <Text>BT&I</Text>
                        <SectionInput
                            placeholder={bTI}
                            onChangeText={(text) => {
                                bTI = text;
                            }}
                        />
                        <Text>Contingency</Text>
                        <SectionInput
                            placeholder={contingency}
                            onChangeText={(text) => {
                                contingency = text;
                            }}
                        />
                    </Section>

                    <MenuButton
                        title="Update"
                        onPress={() => {
                            navigation.navigate('Home');
                            dispatch({
                                type: 'updateSilver',
                                newSilver: silver,
                            });
                            dispatch({
                                type: 'updateGold',
                                newGold: gold,
                            });
                            dispatch({
                                type: 'updatePlatinum',
                                newPlatinum: platinum,
                            });
                            dispatch({
                                type: 'updateStandardFoundation',
                                newStandardFoundation: standardFoundation,
                            });
                            dispatch({
                                type: 'updateDeepFoundation',
                                newDeepFoundation: deepFoundation,
                            });
                            dispatch({
                                type: 'updateStructuralExcav',
                                newStructuralExcav: structuralExcav,
                            });
                            dispatch({
                                type: 'updateSOGMinimal',
                                newSOGMinimal: sOGMinimal,
                            });
                            dispatch({
                                type: 'updateSOGMild',
                                newSOGMild: sOGMild,
                            });
                            dispatch({
                                type: 'updateSOGHeavy',
                                newSOGHeavy: sOGHeavy,
                            });
                            dispatch({
                                type: 'updateSlabPrep',
                                newSlabPrep: slabPrep,
                            });
                            dispatch({
                                type: 'updateElevatorPit',
                                newElevatorPit: elevatorPit,
                            });
                            dispatch({
                                type: 'updateSteelConcrete',
                                newSteelConcrete: steelConcrete,
                            });
                            dispatch({
                                type: 'updateHeavyTimber',
                                newHeavyTimber: heavyTimber,
                            });
                            dispatch({
                                type: 'updateConcreteStructure',
                                newConcreteStructure: concreteStructure,
                            });
                            dispatch({
                                type: 'updateEntryCanopySteel',
                                newEntryCanopySteel: entryCanopySteel,
                            });
                            dispatch({
                                type: 'updateMiscellaneousSteel',
                                newMiscellaneousSteel: miscellaneousSteel,
                            });
                            dispatch({
                                type: 'updateWaterElevator',
                                newWaterElevator: waterElevator,
                            });
                            dispatch({
                                type: 'updateWaterBelGradeWall',
                                newWaterBelGradeWall: waterBelGradeWall,
                            });
                            dispatch({
                                type: 'updateExtSkinConcrete',
                                newExtSkinConcrete: extSkinConcrete,
                            });
                            dispatch({
                                type: 'updateExtSkinMetal',
                                newExtSkinMetal: extSkinMetal,
                            });
                            dispatch({
                                type: 'updateExtSkinTrespa',
                                newExtSkinTrespa: extSkinTrespa,
                            });
                            dispatch({
                                type: 'updateMiscExtWin',
                                newMiscExtWin: miscExtWin,
                            });
                            dispatch({
                                type: 'updateStoreWinSys',
                                newStoreWinSys: storeWinSys,
                            });
                            dispatch({
                                type: 'updateCurtWallSys',
                                newCurtWallSys: curtWallSys,
                            });
                            dispatch({
                                type: 'updateEntryCanopyRoof',
                                newEntryCanopyRoof: entryCanopyRoof,
                            });
                            dispatch({
                                type: 'updateRoughCarp',
                                newRoughCarp: roughCarp,
                            });
                            dispatch({
                                type: 'updateRoofRelated',
                                newRoofRelated: roofRelated,
                            });
                            dispatch({
                                type: 'updateBuiltUpRoof',
                                newBuiltUpRoof: builtUpRoof,
                            });
                            dispatch({
                                type: 'updateSinglePlyRoof',
                                newSinglePlyRoof: singlePlyRoof,
                            });
                            dispatch({
                                type: 'updateMetalRoof',
                                newMetalRoof: metalRoof,
                            });
                            dispatch({
                                type: 'updateSkylights',
                                newSkylights: skylights,
                            });
                            dispatch({
                                type: 'updateShellNoDrywall',
                                newShellNoDrywall: shellNoDrywall,
                            });
                            dispatch({
                                type: 'updateShellUnfinishDrywall',
                                newShellUnfinishDrywall: shellUnfinishDrywall,
                            });
                            dispatch({
                                type: 'updateShellFinishDrywall',
                                newShellFinishDrywall: shellFinishDrywall,
                            });
                            dispatch({
                                type: 'updateShellBareConcrete',
                                newShellBareConcrete: shellBareConcrete,
                            });
                            dispatch({
                                type: 'updateShellSealConcrete',
                                newShellSealConcrete: shellSealConcrete,
                            });
                            dispatch({
                                type: 'updateShellPolishConcrete',
                                newShellPolishConcrete: shellPolishConcrete,
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
                                type: 'updateCoreLobbyUpper',
                                newCoreLobbyUpper: coreLobbyUpper,
                            });
                            dispatch({
                                type: 'updateCoreLobbyMain',
                                newCoreLobbyMain: coreLobbyMain,
                            });
                            dispatch({
                                type: 'updateCoreShaftStructure',
                                newCoreShaftStructure: coreShaftStructure,
                            });
                            dispatch({
                                type: 'updateCoreShaftElevator',
                                newCoreShaftElevator: coreShaftElevator,
                            });
                            dispatch({
                                type: 'updateCoreStairwell',
                                newCoreStairwell: coreStairwell,
                            });
                            dispatch({
                                type: 'updateCoreMEPRooms',
                                newCoreMEPRooms: coreMEPRooms,
                            });
                            dispatch({
                                type: 'updateJanitorCloset',
                                newJanitorCloset: janitorCloset,
                            });
                            dispatch({
                                type: 'updateCoreInteriorDoors',
                                newCoreInteriorDoors: coreInteriorDoors,
                            });
                            dispatch({
                                type: 'updateCoreExteriorDoors',
                                newCoreExteriorDoors: coreExteriorDoors,
                            });
                            dispatch({
                                type: 'updateSCPaint',
                                newSCPaint: sCPaint,
                            });
                            dispatch({
                                type: 'updateStandardStair',
                                newStandardStair: standardStair,
                            });
                            dispatch({
                                type: 'updateUpgradedStair',
                                newUpgradedStair: upgradedStair,
                            });
                            dispatch({
                                type: 'updateArchitecturalStair',
                                newArchitecturalStair: architecturalStair,
                            });
                            dispatch({
                                type: 'updateHydraulicElevator',
                                newHydraulicElevator: hydraulicElevator,
                            });
                            dispatch({
                                type: 'updateUpgradeElevator',
                                newUpgradeElevator: upgradeElevator,
                            });
                            dispatch({
                                type: 'updateFPS',
                                newFPS: fPS,
                            });
                            dispatch({
                                type: 'updateFPSUNC',
                                newFPSUNC: fPSUNC,
                            });
                            dispatch({
                                type: 'updatePlumbingBuilding',
                                newPlumbingBuilding: plumbingBuilding,
                            });
                            dispatch({
                                type: 'updatePlumbingRestroom',
                                newPlumbingRestroom: plumbingRestroom,
                            });
                            dispatch({
                                type: 'updatePlumbingCloset',
                                newPlumbingCloset: plumbingCloset,
                            });
                            dispatch({
                                type: 'updateHVACStandard',
                                newHVACStandard: hVACStandard,
                            });
                            dispatch({
                                type: 'updateHVACPump',
                                newHVACPump: hVACPump,
                            });
                            dispatch({
                                type: 'updateHVACBoiler',
                                newHVACBoiler: hVACBoiler,
                            });
                            dispatch({
                                type: 'updateMechScreen',
                                newMechScreen: mechScreen,
                            });
                            dispatch({
                                type: 'updateHVACDesign',
                                newHVACDesign: hVACDesign,
                            });
                            dispatch({
                                type: 'updateElecServ',
                                newElecServ: elecServ,
                            });
                            dispatch({
                                type: 'updateFireAlarm',
                                newFireAlarm: fireAlarm,
                            });
                            dispatch({
                                type: 'updateDesignEng',
                                newDesignEng: designEng,
                            });
                            dispatch({
                                type: 'updateTINone',
                                newTINone: tINone,
                            });
                            dispatch({
                                type: 'updateTILow',
                                newTILow: tILow,
                            });
                            dispatch({
                                type: 'updateTIMid',
                                newTIMid: tIMid,
                            });
                            dispatch({
                                type: 'updateTIHigh',
                                newTIHigh: tIHigh,
                            });
                            dispatch({
                                type: 'updateGenCond',
                                newGenCond: genCond,
                            });
                            dispatch({
                                type: 'updateOverheardFee',
                                newOverheardFee: overheardFee,
                            });
                            dispatch({
                                type: 'updateBTI',
                                newBTI: bTI,
                            });
                            dispatch({
                                type: 'updateContingency',
                                newContingency: contingency,
                            });
                        }}
                    />
            <BackButton title="Back" onPress={() => navigation.goBack()} />

                </ContainerView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Dashboard;
