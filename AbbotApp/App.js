import React from 'react';
import { SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Navigation from './src/components/menu/Navigation';
import { StateProvider } from './src/js/Hooks';

const AppContainer = createAppContainer(Navigation);

const App = () => {
    const initialState = {
        isLoggedIn: false,
        architecturalStair: 1500,
        bTI: 1.185,
        buildingFloors: 0,
        buildingFootprintArea: 0,
        buildingGrossSqFt: 0,
        builtUpRoof: 20,
        companyName: '',
        concreteStructure: 48.5,
        constructionType: '',
        coreExteriorDoors: 5500,
        coreInteriorDoors: 2500,
        coreLobbyMain: 60000,
        coreLobbyUpper: 30000,
        coreRestroom: 35000,
        sCPaint: 0.65,
        coreVestibules: 40000,
        deepFoundation: 30,
        demolition: '',
        isDemolitionNeeded: '',
        designEng: 0.75,
        elecServ: 21,
        electricalSystems: '',
        electricalSystemsLighting: '',
        elevatorPitConcrete: 6500,
        entryCanopyRoof: 50,
        entryCanopySteel: 30,
        exteriorInterior: '',
        exteriorOrInterior: '',
        exteriorRoofing: 0,
        exteriorSkinGlazing: 0,
        extSG: '',
        extSkinConcrete: 35,
        extSkinMetal: 48,
        extSkinTrespa: 65,
        fireAlarm: 2.5,
        foundation: 0,
        genCond: 80000,
        hasArchEng: false,
        heavyTimber: 38.5,
        hVAC: '',
        hVACBoiler: 35,
        hvacDesign: 0.75,
        hVACPump: 25,
        hVACStandard: 20,
        hydraulicElevator: 55000,
        gold: 10,
        intendedDate: 0,
        isElectricalSystemsStatic: false,
        isInteriorFinishesStatic: false,
        isOccupied: false,
        isTenantImprovement: false,
        leedHasLeed: false,
        leedType: '',
        location: '',
        mechanicalSystemsHvac: '',
        mechScreen: 0.65,
        metalRoof: 35,
        miscellaneousSteel: 1,
        miscExtWin: 1.5,
        occupied: 'No',
        overheardFee: 1.05,
        platinum: 25,
        projectName: '',
        projectType: '',
        roofing: '',
        roofRelated: 2.5,
        roughCarpentry: 0.75,
        shellBareConcrete: 0,
        shellFinishDrywall: 2.25,
        shellNoDrywall: 0,
        shellPolishConcrete: 5,
        shellSealConcrete: 1.5,
        shellUnfinishDrywall: 1.5,
        silver: 3,
        singlePlyRoof: 15,
        skylights: 145,
        slabPrep: 1.5,
        sOG: '',
        sOGMild: 10,
        sOGMinimal: 8,
        sOGHeavy: 12,
        stairSystem: 0,
        standardFoundation: 7.5,
        standardStair: 850,
        steelConcrete: 28.5,
        structuralExcav: 3.5,
        substructureFoundation: 0,
        substructureSog: 0,
        superstructureType: 0,
        tenantImprovementBudget: '',
        tIHigh: 175,
        tILow: 85,
        tIMid: 135,
        tINone: 0,
        upgradedStair: 1000,
        verticalCirculationStairs: '',
        waterBelGradeWall: 8,
        shellDryWall: '',
        buildingPerimeter: 0,
        buildingHeight: 0,
        buildingExteriorEnclosureSqFt: 0,
        shellConcrete: '',
        publicEntrances: 2,
        mepShaftWalls: 16,
        numberOfElevators: 0,
        elevatorShaftWalls: 18,
        numberOfStairWells: 0,
        stairWellWalls: 12,
        mepRooms: 12,
        janitorClosets: 12,
        fireProtectionSystems: 3.5,
        fireProtectionSystemsUnderCanopies: 6,
        buildingPlumbing: 3,
        restroomPlumbingFixtures: 4500,
        janitorClosetPlumbing: 3500,
        hvacSystems: 0,
        upgradeElevatorCabFinish: 10000,
        waterproofElevatorPit: 4500,
        miscExteriorWindowAndWallFlashings: 1.5,
        storefrontWindowSystems: 85,
        curtainwallSystem: 110,
        roofRelatedSheetMetals: 2.5,
        stateTax: 0,
        interiorDemolition: 5,
        slabDemolition: 7.5,
        slabDemolitionCost: 0,
        exteriorDemolition: 2.5,
        roofDemolition: 4,
        sogPatching: 15,
        sogPrep: 1.5,
        superstructureDisplay: '',
        shellDryWallDisplay: '',
        shellConcreteDisplay: '',
        stairSystemDisplay: '',
        tenantImprovementBudgetDisplay: '',
        buildingFloorHeight: 15,
        rateProfileId: '',
        overheadAndFee: 0.05,
        bti: 0.0185,
        contingency: 0.1,
        archEngFee: 0.1,
        generalConditions: [0.1533, 0.1497, 0.1266, 0.1122, 0.1025, 0.0936, 0.068, 0.057],
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'updateIsLoggedIn':
                return {
                    ...state,
                    isLoggedIn: action.newIsLoggedIn,
                };

            case 'updateArchitecturalStair':
                return {
                    ...state,
                    architecturalStair: action.newArchitecturalStair,
                };

            case 'updateGeneralConditions':
                return {
                    ...state,
                    generalConditions: action.newGeneralConditions,
                };

            case 'updateArchEngFee':
                return {
                    ...state,
                    archEngFee: action.newArchEngFee,
                };

            case 'updateBti':
                return {
                    ...state,
                    bti: action.newBti,
                };

            case 'updateOverheadAndFee':
                return {
                    ...state,
                    overheadAndFee: action.newOverheadAndFee,
                };

            case 'updateRateProfileId':
                return {
                    ...state,
                    rateProfileId: action.newRateProfileId,
                };

            case 'updateBuildingFloorHeight':
                return {
                    ...state,
                    buildingFloorHeight: action.newBuildingFloorHeight,
                };

            case 'updateSogPrep':
                return {
                    ...state,
                    sogPrep: action.newSogPrep,
                };

            case 'updateSogPatching':
                return {
                    ...state,
                    sogPatching: action.newSogPatching,
                };

            case 'updateIsDemolitionNeeded':
                return {
                    ...state,
                    isDemolitionNeeded: action.newIsDemolitionNeeded,
                };

            case 'updateRoofDemolition':
                return {
                    ...state,
                    roofDemolition: action.newRoofDemolition,
                };

            case 'updateExteriorDemolition':
                return {
                    ...state,
                    exteriorDemolition: action.newExteriorDemolition,
                };

            case 'updateSlabDemolition':
                return {
                    ...state,
                    slabDemolition: action.newSlabDemolition,
                };

            case 'updateSlabDemolitionCost':
                return {
                    ...state,
                    slabDemolitionCost: action.newSlabDemolitionCost,
                };

            case 'updateInteriorDemolition':
                return {
                    ...state,
                    interiorDemolition: action.newInteriorDemolition,
                };

            case 'updateTenantImprovementBudgetDisplay':
                return {
                    ...state,
                    tenantImprovementBudgetDisplay: action.newTenantImprovementBudgetDisplay,
                };

            case 'updateStairSystemDisplay':
                return {
                    ...state,
                    stairSystemDisplay: action.newStairSystemDisplay,
                };

            case 'updateShellConcreteDisplay':
                return {
                    ...state,
                    shellConcreteDisplay: action.newShellConcreteDisplay,
                };

            case 'updateShellDryWallDisplay':
                return {
                    ...state,
                    shellDryWallDisplay: action.newShellDryWallDisplay,
                };

            case 'updateSuperstructureDisplay':
                return {
                    ...state,
                    superstructureDisplay: action.newSuperstructureDisplay,
                };

            case 'updateStateTax':
                return {
                    ...state,
                    stateTax: action.newStateTax,
                };

            case 'updateRoofRelatedSheetMetals':
                return {
                    ...state,
                    roofRelatedSheetMetals: action.newRoofRelatedSheetMetals,
                };

            case 'updateCurtainwallSystem':
                return {
                    ...state,
                    curtainwallSystem: action.newCurtainwallSystem,
                };

            case 'updateStorefrontWindowSystems':
                return {
                    ...state,
                    storefrontWindowSystems: action.newStorefrontWindowSystems,
                };

            case 'updateMiscExteriorWindowAndWallFlashings':
                return {
                    ...state,
                    miscExteriorWindowAndWallFlashings: action.newMiscExteriorWindowAndWallFlashings,
                };

            case 'updateWaterproofElevatorPit':
                return {
                    ...state,
                    waterproofElevatorPit: action.newWaterproofElevatorPit,
                };

            case 'updateHVACSystems':
                return {
                    ...state,
                    hvacSystems: action.newHVACSystems,
                };

            case 'updateUpgradeElevatorCabFinish':
                return {
                    ...state,
                    upgradeElevatorCabFinish: action.newUpgradeElevatorCabFinish,
                };

            case 'updateJanitorClosetPlumbing':
                return {
                    ...state,
                    janitorClosetPlumbing: action.newJanitorClosetPlumbing,
                };

            case 'updateRestroomPlumbingFixtures':
                return {
                    ...state,
                    restroomPlumbingFixtures: action.newRestroomPlumbingFixtures,
                };

            case 'updateBuildingPlumbing':
                return {
                    ...state,
                    buildingPlumbing: action.newBuildingPlumbing,
                };

            case 'updateFireProtectionSystems':
                return {
                    ...state,
                    fireProtectionSystems: action.newFireProtectionSystems,
                };

            case 'updateFireProtectionSystemsUnderCanopies':
                return {
                    ...state,
                    fireProtectionSystemsUnderCanopies: action.newFireProtectionSystemsUnderCanopies,
                };

            case 'updateMepRooms':
                return {
                    ...state,
                    mepRooms: action.newMepRooms,
                };

            case 'updateJanitorClosets':
                return {
                    ...state,
                    janitorClosets: action.newJanitorClosets,
                };

            case 'updateStairWellWalls':
                return {
                    ...state,
                    stairWellWalls: action.newStairWellWalls,
                };

            case 'updateNumberOfStairWells':
                return {
                    ...state,
                    numberOfStairWells: action.newNumberOfStairWells,
                };

            case 'updateElevatorShaftWalls':
                return {
                    ...state,
                    elevatorShaftWalls: action.newElevatorShaftWalls,
                };

            case 'updatePublicEntrances':
                return {
                    ...state,
                    publicEntrances: action.newPublicEntrances,
                };

            case 'updateNumberOfElevators':
                return {
                    ...state,
                    numberOfElevators: action.newNumberOfElevators,
                };

            case 'updateShellDryWall':
                return {
                    ...state,
                    shellDryWall: action.newShellDryWall,
                };

            case 'updateShellConcrete':
                return {
                    ...state,
                    shellConcrete: action.newShellConcrete,
                };

            case 'updateBuildingFloors':
                return {
                    ...state,
                    buildingFloors: action.newBuildingFloors,
                };

            case 'updateBuildingFootprintArea':
                return {
                    ...state,
                    buildingFootprintArea: action.newBuildingFootprintArea,
                };

            case 'updateBuildingPerimeter':
                return {
                    ...state,
                    buildingPerimeter: action.newBuildingPerimeter,
                };

            case 'updateBuildingHeight':
                return {
                    ...state,
                    buildingHeight: action.newBuildingHeight,
                };

            case 'updateBuildingGrossSqFt':
                return {
                    ...state,
                    buildingGrossSqFt: action.newBuildingGrossSqFt,
                };

            case 'updateBuildingExteriorEnclosureSqFt':
                return {
                    ...state,
                    buildingExteriorEnclosureSqFt: action.newBuildingExteriorEnclosureSqFt,
                };

            case 'updateBuiltUpRoof':
                return {
                    ...state,
                    builtUpRoof: action.newBuiltUpRoof,
                };

            case 'updateBTI':
                return {
                    ...state,
                    bTI: action.newBTI,
                };

            case 'updateCompanyName':
                return {
                    ...state,
                    companyName: action.newCompanyName,
                };

            case 'updateConcreteStructure':
                return {
                    ...state,
                    concreteStructure: action.newConcreteStructure,
                };

            case 'updateConstructionType':
                return {
                    ...state,
                    constructionType: action.newConstructionType,
                };

            case 'updateContingency':
                return {
                    ...state,
                    contingency: action.newContingency,
                };

            case 'updateCoreExteriorDoors':
                return {
                    ...state,
                    coreExteriorDoors: action.newCoreExteriorDoors,
                };

            case 'updateCoreInteriorDoors':
                return {
                    ...state,
                    coreInteriorDoors: action.newCoreInteriorDoors,
                };

            case 'updateCoreLobbyMain':
                return {
                    ...state,
                    coreLobbyMain: action.newCoreLobbyMain,
                };

            case 'updateCoreLobbyUpper':
                return {
                    ...state,
                    coreLobbyUpper: action.newCoreLobbyUpper,
                };

            case 'updateCoreRestroom':
                return {
                    ...state,
                    coreRestroom: action.newCoreRestroom,
                };

            case 'updateSCPaint':
                return {
                    ...state,
                    sCPaint: action.newSCPaint,
                };

            case 'updateMepShaftWalls':
                return {
                    ...state,
                    mepShaftWalls: action.newMepShaftWalls,
                };

            case 'updateCoreVestibules':
                return {
                    ...state,
                    coreVestibules: action.newCoreVestibules,
                };

            case 'updateDeepFoundation':
                return {
                    ...state,
                    deepFoundation: action.newDeepFoundation,
                };

            case 'updateDemolition':
                return {
                    ...state,
                    demolition: action.newDemolition,
                };

            case 'updateDesignEng':
                return {
                    ...state,
                    designEng: action.newDesignEng,
                };

            case 'updateElecServ':
                return {
                    ...state,
                    elecServ: action.newElecServ,
                };

            case 'updateElectricalSystems':
                return {
                    ...state,
                    electricalSystems: action.newElectricalSystems,
                };

            case 'updateElectricalSystemsLighting':
                return {
                    ...state,
                    electricalSystemsLighting: action.newElectricalSystemsLighting,
                };

            case 'updateElevatorPitConcrete':
                return {
                    ...state,
                    elevatorPitConcrete: action.newElevatorPitConcrete,
                };

            case 'updateEntryCanopyRoof':
                return {
                    ...state,
                    entryCanopyRoof: action.newEntryCanopyRoof,
                };

            case 'updateEntryCanopySteel':
                return {
                    ...state,
                    entryCanopySteel: action.newEntryCanopySteel,
                };

            case 'updateExteriorInterior':
                return {
                    ...state,
                    exteriorInterior: action.newExteriorInterior,
                };

            case 'updateExteriorRoofing':
                return {
                    ...state,
                    exteriorRoofing: action.newExteriorRoofing,
                };

            case 'updateExtSG':
                return {
                    ...state,
                    extSG: action.newExtSG,
                };

            case 'updateExteriorSkinGlazing':
                return {
                    ...state,
                    exteriorSkinGlazing: action.newExteriorSkinGlazing,
                };

            case 'updateExtSkinConcrete':
                return {
                    ...state,
                    extSkinConcrete: action.newExtSkinConcrete,
                };

            case 'updateExtSkinMetal':
                return {
                    ...state,
                    extSkinMetal: action.newExtSkinMetal,
                };

            case 'updateExtSkinTrespa':
                return {
                    ...state,
                    extSkinTrespa: action.newExtSkinTrespa,
                };

            case 'updateFireAlarm':
                return {
                    ...state,
                    fireAlarm: action.newFireAlarm,
                };

            case 'updateFoundation':
                return {
                    ...state,
                    foundation: action.newFoundation,
                };

            case 'updateGenCond':
                return {
                    ...state,
                    genCond: action.newGenCond,
                };

            case 'updateGold':
                return {
                    ...state,
                    gold: action.newGold,
                };

            case 'updateHasArchEng':
                return {
                    ...state,
                    hasArchEng: action.newHasArchEng,
                };

            case 'updateHasLeed':
                return {
                    ...state,
                    leedHasLeed: action.newHasLeed,
                };

            case 'updateHeavyTimber':
                return {
                    ...state,
                    heavyTimber: action.newHeavyTimber,
                };

            case 'updateHydraulicElevator':
                return {
                    ...state,
                    hydraulicElevator: action.newHydraulicElevator,
                };

            case 'updateHVAC':
                return {
                    ...state,
                    hVAC: action.newHVAC,
                };

            case 'updateHVACBoiler':
                return {
                    ...state,
                    hVACBoiler: action.newHVACBoiler,
                };

            case 'updateHVACDesign':
                return {
                    ...state,
                    hvacDesign: action.newHVACDesign,
                };

            case 'updateHVACPump':
                return {
                    ...state,
                    hVACPump: action.newHVACPump,
                };

            case 'updateHVACStandard':
                return {
                    ...state,
                    hVACStandard: action.newHVACStandard,
                };

            case 'updateIntendedDate':
                return {
                    ...state,
                    intendedDate: action.newIntendedDate,
                };

            case 'updateLeedType':
                return {
                    ...state,
                    leedType: action.newLeedType,
                };

            case 'updateLocation':
                return {
                    ...state,
                    location: action.newLocation,
                };

            case 'updateMechScreen':
                return {
                    ...state,
                    mechScreen: action.newMechScreen,
                };

            case 'updateMetalRoof':
                return {
                    ...state,
                    metalRoof: action.newMetalRoof,
                };

            case 'updateMiscellaneousSteel':
                return {
                    ...state,
                    miscellaneousSteel: action.newMiscellaneousSteel,
                };

            case 'updateMiscExtWin':
                return {
                    ...state,
                    miscExtWin: action.newMiscExtWin,
                };

            case 'updateOccupied':
                return {
                    ...state,
                    occupied: action.newOccupied,
                };

            case 'updateIsOccupied':
                return {
                    ...state,
                    isOccupied: action.newIsOccupied,
                };

            case 'updateOverheardFee':
                return {
                    ...state,
                    overheardFee: action.newOverheardFee,
                };

            case 'updatePlatinum':
                return {
                    ...state,
                    platinum: action.newPlatinum,
                };

            case 'updateProjectName':
                return {
                    ...state,
                    projectName: action.newProjectName,
                };

            case 'updateProjectType':
                return {
                    ...state,
                    projectType: action.newProjectType,
                };

            case 'updateRoofing':
                return {
                    ...state,
                    roofing: action.newRoofing,
                };

            case 'updateRoofRelated':
                return {
                    ...state,
                    roofRelated: action.newRoofRelated,
                };

            case 'updateRoughCarpentry':
                return {
                    ...state,
                    roughCarpentry: action.newRoughCarpentry,
                };

            case 'updateShellBareConcrete':
                return {
                    ...state,
                    shellBareConcrete: action.newShellBareConcrete,
                };

            case 'updateShellFinishDrywall':
                return {
                    ...state,
                    shellFinishDrywall: action.newShellFinishDrywall,
                };

            case 'updateShellNoDrywall':
                return {
                    ...state,
                    shellNoDrywall: action.newShellNoDrywall,
                };

            case 'updateShellPolishConcrete':
                return {
                    ...state,
                    shellPolishConcrete: action.newShellPolishConcrete,
                };

            case 'updateShellSealConcrete':
                return {
                    ...state,
                    shellSealConcrete: action.newShellSealConcrete,
                };

            case 'updateShellUnfinishDrywall':
                return {
                    ...state,
                    shellUnfinishDrywall: action.newShellUnfinishDrywall,
                };

            case 'updateSilver':
                return {
                    ...state,
                    silver: action.newSilver,
                };

            case 'updateSinglePlyRoof':
                return {
                    ...state,
                    singlePlyRoof: action.newSinglePlyRoof,
                };

            case 'updateSkylights':
                return {
                    ...state,
                    skylights: action.newSkylights,
                };

            case 'updateSlabPrep':
                return {
                    ...state,
                    slabPrep: action.newSlabPrep,
                };

            case 'updateSOG':
                return {
                    ...state,
                    sOG: action.newSOG,
                };

            case 'updateSOGHeavy':
                return {
                    ...state,
                    sOGHeavy: action.newSOGHeavy,
                };

            case 'updateSOGMild':
                return {
                    ...state,
                    sOGMild: action.newSOGMild,
                };

            case 'updateSOGMinimal':
                return {
                    ...state,
                    sOGMinimal: action.newSOGMinimal,
                };

            case 'updateStandardStair':
                return {
                    ...state,
                    standardStair: action.newStandardStair,
                };

            case 'updateStandardFoundation':
                return {
                    ...state,
                    standardFoundation: action.newStandardFoundation,
                };

            case 'updateStairSystem':
                return {
                    ...state,
                    stairSystem: action.newStairSystem,
                };

            case 'updateSteelConcrete':
                return {
                    ...state,
                    steelConcrete: action.newSteelConcrete,
                };

            case 'updateStructuralExcav':
                return {
                    ...state,
                    structuralExcav: action.newStructuralExcav,
                };

            case 'updateSubstructureFoundation':
                return {
                    ...state,
                    substructureFoundation: action.newSubstructureFoundation,
                };

            case 'updateSubstructureSog':
                return {
                    ...state,
                    substructureSog: action.newSubstructureSog,
                };

            case 'updateSuperstructureType':
                return {
                    ...state,
                    superstructureType: action.newSuperstructureType,
                };

            case 'updateTenantImprovementBudget':
                return {
                    ...state,
                    tenantImprovementBudget: action.newTenantImprovementBudget,
                };

            case 'updateTIHigh':
                return {
                    ...state,
                    tIHigh: action.newTIHigh,
                };

            case 'updateTILow':
                return {
                    ...state,
                    tILow: action.newTILow,
                };

            case 'updateTIMid':
                return {
                    ...state,
                    tIMid: action.newTIMid,
                };

            case 'updateTINone':
                return {
                    ...state,
                    tINone: action.newTINone,
                };

            case 'updateUpgradedStair':
                return {
                    ...state,
                    upgradedStair: action.newUpgradedStair,
                };

            case 'updateVerticalFeatureStair':
                return {
                    ...state,
                    verticalFeatureStair: action.newVerticalFeatureStair,
                };

            case 'updateWaterBelGradeWall':
                return {
                    ...state,
                    waterBelGradeWall: action.newWaterBelGradeWall,
                };

            case 'updateIsTenantImprovement':
                return {
                    ...state,
                    isTenantImprovement: action.newIsTenantImprovement,
                };

            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#191919', paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <AppContainer />
            </SafeAreaView>
        </StateProvider>
    );
};

export default App;
