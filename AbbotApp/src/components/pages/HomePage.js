import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Menu from '../menu/Menu';
import About from '../menu/About';
import Contact from '../menu/ContactUs';
import Login from '../menu/Login';
import CoreShell from './CoreShell';
import FullyBuiltOut from './FullyBuiltOut';
import TenantImprovement from './TenantImprovement';
import Remodel from './Remodel';
import TypeOfProject from './TypeOfProject';
import Leed from '../shared/Leed';
import ElectricalSystems from '../shared/ElectricalSystems';
import ExteriorInterior from '../shared/ExteriorInterior';
import InteriorFinishes from '../shared/InteriorFinishes';
import MechanicalSystems from '../shared/MechanicalSystems';
import Occupied from '../shared/Occupied';
import VerticalCirculationSystems from '../shared/VerticalCirculationSystems';
import SavePage from '../shared/SavePage';
import SummaryOfCosts from '../shared/SummaryOfCosts';
import SummaryOfCostsTenantImprovement from '../shared/SummaryOfCostsTenantImprovement';
import SummaryOfCostsRemodel from '../shared/SummaryOfCostsRemodel';
import ClientInformation from '../shared/ClientInformation';
import ProjectInformation from '../shared/ProjectInformation';
import EstimatorInformation from '../shared/EstimatorInformation';
import BuildingInformation from '../shared/BuildingInformation';
import Substructure from '../shared/Substructure';
import Superstructure from '../shared/Superstructure';
import ExteriorEnclosure from '../shared/ExteriorEnclosure';
import TenantImprovementBudget from '../shared/TenantImprovementBudget';
import Demolition from '../shared/Demolition';
import { Container, PageTitle } from '../styled/Theme';
import { MenuButton } from '../styled/MenuButton';
import Disclaimer from './Disclaimer';
import Dashboard from './Dashboard';
import UpdateDB from './UpdateDB';
import { useStateValue } from '../../js/Hooks';
import ApiManager from '../../js/ApiManager';
import SecureStoreService from '../../js/SecureStoreService';

let isRateProfileInitialized = false;

const Home = (props) => {
    const apiManager = ApiManager.getInstance();
    const { navigation } = props;
    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue();

    // This API call is asynchronous using Promise.
    if (!isRateProfileInitialized) {
        // Check if user is logged in and update isLoggedIn in global state accordingly
        (async function updateIsLoggedInState() {
            const tokenExists = await SecureStoreService.checkAuthTokenExistsAsync();

            if (tokenExists) {
                const isTokenExpired = await SecureStoreService.checkAuthTokenExpiredAsync();

                if (isTokenExpired) {
                    // If token is expired, clear token data from SecureStore.
                    await SecureStoreService.deleteAuthTokenAsync();

                    apiManager.clearAuthHeader();

                    dispatch({
                        type: 'updateIsLoggedIn',
                        newIsLoggedIn: false,
                    });
                } else {
                    dispatch({
                        type: 'updateIsLoggedIn',
                        newIsLoggedIn: true,
                    });
                }
            }
        })();

        // Get rate profile
        apiManager.axios
            .get('rateprofiles')
            .then((res) => {
                const rates = res.data[0]; // Assume that the first RateProfile returned from the backend is the only one.

                dispatch({
                    type: 'updateRateProfileId',
                    newRateProfileId: rates.id,
                });
                dispatch({
                    type: 'updateArchEngFee',
                    newArchEngFee: rates.archEngFee,
                });
                dispatch({
                    type: 'updateBti',
                    newBti: rates.bti,
                });
                dispatch({
                    type: 'updateBuildingPlumbing',
                    newBuildingPlumbing: rates.buildingPlumbing,
                });
                dispatch({
                    type: 'updateContingency',
                    newContingency: rates.contingency,
                });
                dispatch({
                    type: 'updateCoreExteriorDoors',
                    newCoreExteriorDoors: rates.coreExteriorDoors,
                });
                dispatch({
                    type: 'updateCoreInteriorDoors',
                    newCoreInteriorDoors: rates.coreInteriorDoors,
                });
                dispatch({
                    type: 'updateCoreLobbyMain',
                    newCoreLobbyMain: rates.coreLobbyMain,
                });
                dispatch({
                    type: 'updateCoreLobbyUpper',
                    newCoreLobbyUpper: rates.coreLobbyUpper,
                });
                dispatch({
                    type: 'updateCoreRestroom',
                    newCoreRestroom: rates.coreRestroom,
                });
                dispatch({
                    type: 'updateCoreVestibules',
                    newCoreVestibules: rates.coreVestibules,
                });
                dispatch({
                    type: 'updateCurtainwallSystem',
                    newCurtainwallSystem: rates.curtainWallSystem,
                });
                dispatch({
                    type: 'updateDesignEng',
                    newDesignEng: rates.designEng,
                });
                dispatch({
                    type: 'updateElecServ',
                    newElecServ: rates.elecServ,
                });
                dispatch({
                    type: 'updateElevatorPitConcrete',
                    newElevatorPitConcrete: rates.elevatorPitConcrete,
                });
                dispatch({
                    type: 'updateElevatorShaftWalls',
                    newElevatorShaftWalls: rates.elevatorShaftWalls,
                });
                dispatch({
                    type: 'updateEntryCanopyRoof',
                    newEntryCanopyRoof: rates.entryCanopyRoof,
                });
                dispatch({
                    type: 'updateEntryCanopySteel',
                    newEntryCanopySteel: rates.entryCanopySteel,
                });
                dispatch({
                    type: 'updateFireAlarm',
                    newFireAlarm: rates.fireAlarm,
                });
                dispatch({
                    type: 'updateFireProtectionSystems',
                    newFireProtectionSystems: rates.fireProtectionSystems,
                });
                dispatch({
                    type: 'updateFireProtectionSystemsUnderCanopies',
                    newFireProtectionSystemsUnderCanopies: rates.fireProtectionSystemsUnderCanopies,
                });
                dispatch({
                    type: 'updateGeneralConditions',
                    newGeneralConditions: [
                        rates.generalConditionOne,
                        rates.generalConditionTwo,
                        rates.generalConditionThree,
                        rates.generalConditionFour,
                        rates.generalConditionFive,
                        rates.generalConditionSix,
                        rates.generalConditionSeven,
                        rates.generalConditionDefault
                    ],
                });
                dispatch({
                    type: 'updateHVACDesign',
                    newHVACDesign: rates.hvacDesign,
                });
                dispatch({
                    type: 'updateHydraulicElevator',
                    newHydraulicElevator: rates.hydraulicElevator,
                });
                dispatch({
                    type: 'updateJanitorClosetPlumbing',
                    newJanitorClosetPlumbing: rates.janitorClosetPlumbing,
                });
                dispatch({
                    type: 'updateJanitorClosets',
                    newJanitorClosets: rates.janitorClosets,
                });
                dispatch({
                    type: 'updateMechScreen',
                    newMechScreen: rates.mechScreen,
                });
                dispatch({
                    type: 'updateMepRooms',
                    newMepRooms: rates.mepRooms,
                });
                dispatch({
                    type: 'updateMepShaftWalls',
                    newMepShaftWalls: rates.mepShaftWalls,
                });
                dispatch({
                    type: 'updateMiscExteriorWindowAndWallFlashings',
                    newMiscExteriorWindowAndWallFlashings: rates.miscExteriorWindowAndWallFlashings,
                });
                dispatch({
                    type: 'updateMiscellaneousSteel',
                    newMiscellaneousSteel: rates.miscellaneousSteel,
                });
                dispatch({
                    type: 'updateOverheadAndFee',
                    newOverheadAndFee: rates.overheadAndFee,
                });
                dispatch({
                    type: 'updateRestroomPlumbingFixtures',
                    newRestroomPlumbingFixtures: rates.restroomPlumbingFixtures,
                });
                dispatch({
                    type: 'updateRoofRelatedSheetMetals',
                    newRoofRelatedSheetMetals: rates.roofRelatedSheetMetals,
                });
                dispatch({
                    type: 'updateRoughCarpentry',
                    newRoughCarpentry: rates.roughCarpentry,
                });
                dispatch({
                    type: 'updateSCPaint',
                    newSCPaint: rates.scPaint,
                });
                dispatch({
                    type: 'updateSkylights',
                    newSkylights: rates.skylights,
                });
                dispatch({
                    type: 'updateSlabDemolition',
                    newSlabDemolition: rates.slabDemolition,
                });
                dispatch({
                    type: 'updateSlabPrep',
                    newSlabPrep: rates.slabPrep,
                });
                dispatch({
                    type: 'updateSogPatching',
                    newSogPatching: rates.sogPatching,
                });
                dispatch({
                    type: 'updateSogPrep',
                    newSogPrep: rates.sogPrep,
                });
                dispatch({
                    type: 'updateStairWellWalls',
                    newStairWellWalls: rates.stairWellWalls,
                });
                dispatch({
                    type: 'updateStorefrontWindowSystems',
                    newStorefrontWindowSystems: rates.storefrontWindowSystems,
                });
                dispatch({
                    type: 'updateStructuralExcav',
                    newStructuralExcav: rates.structuralExcav,
                });
                dispatch({
                    type: 'updateUpgradeElevatorCabFinish',
                    newUpgradeElevatorCabFinish: rates.upgradeElevatorCabFinish,
                });
                dispatch({
                    type: 'updateWaterBelGradeWall',
                    newWaterBelGradeWall: rates.waterBelGradeWall,
                });
                dispatch({
                    type: 'updateWaterproofElevatorPit',
                    newWaterproofElevatorPit: rates.waterproofElevatorPit,
                });
                // Example usage.
                console.log(rates);
            })
            .catch((err) => console.log(err));

        isRateProfileInitialized = true;
    }

    const handleChoosingProject = (newState, screen) => {
        dispatch({
            type: 'updateConstructionType',
            newConstructionType: newState,
        });
        navigation.navigate(screen);


    };



    return (

        <Container >
            <PageTitle>Project Estimator</PageTitle>
            <MenuButton
                title="Fully Built Out"
                onPress={() => handleChoosingProject('Fully Built Out', 'TypeOfProject')}

            />

            <MenuButton
                title="Core and Shell"
                onPress={() => handleChoosingProject('Core and Shell', 'TypeOfProject')}
            />

            <MenuButton title="Remodel" onPress={() => handleChoosingProject('Remodel', 'TypeOfProject')} />
            <MenuButton
                title="Tenant Improvement"
                onPress={() => handleChoosingProject('Tenant Improvement', 'TypeOfProject')}
            />
        </Container>


    );
};

const AppStack = createStackNavigator(
    {
        Home: { screen: Home },
        Menu: { screen: Menu },
        About: { screen: About },
        Login: { screen: Login },
        Contact: { screen: Contact },
        CoreShell: { screen: CoreShell },
        FullyBuiltOut: { screen: FullyBuiltOut },
        Remodel: { screen: Remodel },
        TenantImprovement: { screen: TenantImprovement },
        TypeOfProject: { screen: TypeOfProject },
        Leed: { screen: Leed },
        ElectricalSystems: { screen: ElectricalSystems },
        ExteriorInterior: { screen: ExteriorInterior },
        InteriorFinishes: { screen: InteriorFinishes },
        MechanicalSystems: { screen: MechanicalSystems },
        Occupied: { screen: Occupied },
        VerticalCirculationSystems: { screen: VerticalCirculationSystems },
        SavePage: { screen: SavePage },
        SummaryOfCosts: { screen: SummaryOfCosts },
        SummaryOfCostsTenantImprovement: { screen: SummaryOfCostsTenantImprovement },
        SummaryOfCostsRemodel: { screen: SummaryOfCostsRemodel },
        ClientInformation: { screen: ClientInformation },
        ProjectInformation: { screen: ProjectInformation },
        EstimatorInformation: { screen: EstimatorInformation },
        BuildingInformation: { screen: BuildingInformation },
        Substructure: { screen: Substructure },
        Superstructure: { screen: Superstructure },
        ExteriorEnclosure: { screen: ExteriorEnclosure },
        TenantImprovementBudget: { screen: TenantImprovementBudget },
        Disclaimer: { screen: Disclaimer },
        Dashboard: { screen: Dashboard },
        Demolition: { screen: Demolition },
        UpdateDB: { screen: UpdateDB },
    },
    { defaultNavigationOptions: { header: null, gesturesEnabled: false } }
);

const HomePage = createAppContainer(AppStack);

export default HomePage;
