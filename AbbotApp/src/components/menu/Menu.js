import React, { useState, useReducer, Fragment } from 'react';
import { SafeAreaView, Linking } from 'react-native';
import { Container } from '../styled/Theme';
import { NavButton } from '../styled/NavButton';
import { useStateValue } from '../../js/Hooks';
import SecureStoreService from '../../js/SecureStoreService';
import ApiManager from '../../js/ApiManager';

const Menu = (props) => {
    const { navigation } = props;
    const apiManager = ApiManager.getInstance();
    const [{ isLoggedIn }, dispatch] = useStateValue();

    // This object will be replaced by the Axios API call. 
    const rates = {
        architecturalStair: 1500,
        bTI: 1.185,
        buildingFloors: 0,
        buildingFootprintArea: 0,
        buildingGrossSqFt: 0,
        builtUpRoof: 20,
        companyName: '',
        concreteStructure: 48.5,
        constructionType: '',
        contingency: 1.1,
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
    };

    const handleOnPressEstimateNewProject = (props) => {
        dispatch({
            type: 'updateProjectName',
            newProjectName: rates.projectName,
        });
        dispatch({
            type: 'updateCompanyName',
            newCompanyName: rates.companyName,
        });
        dispatch({
            type: 'updateStateTax',
            newStateTax: rates.stateTax,
        });
        dispatch({
            type: 'updateHasArchEng',
            newHasArchEng: rates.hasArchEng,
        });
        dispatch({
            type: 'updateBuildingFloors',
            newBuildingFloors: rates.buildingFloors,
        });
        dispatch({
            type: 'updateBuildingFootprintArea',
            newBuildingFootprintArea: rates.buildingFootprintArea,
        });
        dispatch({
            type: 'updateBuildingPerimeter',
            newBuildingPerimeter: rates.buildingPerimeter,
        });
        dispatch({
            type: 'updateBuildingGrossSqFt',
            newBuildingGrossSqFt: rates.buildingGrossSqFt,
        });
        dispatch({
            type: 'updateIsOccupied',
            newIsOccupied: rates.isOccupied,
        });
        dispatch({
            type: 'updateIsDemolitionNeeded',
            newIsDemolitionNeeded: rates.isDemolitionNeeded,
        });

        dispatch({
            type: 'updateSogPatchingCost',
            newSogPatchingCost: rates.sogPatching,
        });

        dispatch({
            type: 'updateSlabDemolitionCost',
            newSlabDemolitionCost: rates.slabDemolitionCost,
        });
        dispatch({
            type: 'updateTenantImprovementBudget',
            newTenantImprovementBudget: rates.tenantImprovementBudget,
        });
        dispatch({
            type: 'updateTenantImprovementBudgetDisplay',
            newTenantImprovementBudgetDisplay: rates.tenantImprovementBudgetDisplay,
        });
        dispatch({
            type: 'updateBuildingHeight',
            newBuildingHeight: rates.buildingHeight,
        });
        dispatch({
            type: 'updateBuildingFloorHeight',
            newBuildingFloorHeight: rates.buildingFloorHeight,
        });
        dispatch({
            type: 'updateBuildingExteriorEnclosureSqFt',
            newBuildingExteriorEnclosureSqFt: rates.buildingExteriorEnclosureSqFt,
        });
        dispatch({
            type: 'updatePublicEntrances',
            newPublicEntrances: rates.publicEntrances,
        });
        dispatch({
            type: 'updateExteriorSkinGlazing',
            newExteriorSkinGlazing: rates.exteriorSkinGlazing,
        });
        dispatch({
            type: 'updateExtSG',
            newExtSG: rates.extSG,
        });
        dispatch({
            type: 'updateExteriorRoofing',
            newExteriorRoofing: rates.exteriorRoofing,
        });
        dispatch({
            type: 'updateRoofing',
            newRoofing: rates.roofing,
        });
        dispatch({
            type: 'updateShellDryWall',
            newShellDryWall: rates.shellDryWall,
        });
        dispatch({
            type: 'updateShellDryWallDisplay',
            newShellDryWallDisplay: rates.shellDryWallDisplay,
        });
        dispatch({
            type: 'updateShellConcrete',
            newShellConcrete: rates.shellConcrete,
        });
        dispatch({
            type: 'updateShellConcreteDisplay',
            newShellConcreteDisplay: rates.shellConcreteDisplay,
        });
        dispatch({
            type: 'updateHasLeed',
            newHasLeed: rates.leedHasLeed,
        });
        dispatch({
            type: 'updateLeedType',
            newLeedType: rates.leedType,
        });
        dispatch({
            type: 'updateHVACSystems',
            newHVACSystems: rates.hvacSystems,
        });
        dispatch({
            type: 'updateHVAC',
            newHVAC: rates.hVAC,
        });
        dispatch({
            type: 'updateSubstructureFoundation',
            newSubstructureFoundation: rates.substructureFoundation,
        });
        dispatch({
            type: 'updateFoundation',
            newFoundation: rates.foundation,
        });
        dispatch({
            type: 'updateSuperstructureType',
            newSuperstructureType: rates.superstructureType,
        });
        dispatch({
            type: 'updateSuperstructureDisplay',
            newSuperstructureDisplay: rates.superstructureDisplay,
        });
        dispatch({
            type: 'updateStairSystem',
            newStairSystem: rates.stairSystem,
        });
        dispatch({
            type: 'updateStairSystemDisplay',
            newStairSystemDisplay: rates.stairSystemDisplay,
        });



        dispatch({
            type: 'updateNumberOfElevators',
            newNumberOfElevators: rates.numberOfElevators,
        });
        dispatch({
            type: 'updateNumberOfStairWells',
            newNumberOfStairWells: rates.numberOfStairWells,
        });
        dispatch({
            type: 'updatePublicEntrances',
            newPublicEntrances: rates.publicEntrances,
        });
        dispatch({
            type: 'updateSubstructureSog',
            newSubstructureSog: rates.substructureSog,
        });
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={{ paddingTop: 20 }} dark>

                <NavButton
                    title="Estimate New Project"
                onPress={() => handleOnPressEstimateNewProject()}
                />
                <NavButton
                    title="Contact Us"
                    onPress={() => navigation.navigate('Contact')}
                />
                <NavButton
                    title="Privacy"
                    onPress={() =>
                        Linking.openURL('https://sites.google.com/view/estimator-app-privacy/home?authuser=0')
                    }
                />
                {isLoggedIn ? (
                    <Fragment>
                        <NavButton title="Update DB" onPress={() => navigation.navigate('UpdateDB')} />

                        <NavButton
                            title="Logout"
                            onPress={async () => {
                                await SecureStoreService.deleteAuthTokenAsync();

                                dispatch({
                                    type: 'updateIsLoggedIn',
                                    newIsLoggedIn: false,
                                });

                                apiManager.clearAuthHeader();

                                navigation.navigate('Home'); // Go to Home to make sure they're not viewing auth-only pages
                            }}
                        />
                    </Fragment>
                ) : (
                    <NavButton title="Login" onPress={() => navigation.navigate('Login')} />
                )}
            </Container>
        </SafeAreaView>
    );
};

export default Menu;
