import React, { useState, useEffect } from 'react';
import { Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useStateValue } from '../../js/Hooks';
import { ContainerView, Container, PageTitle, Section, SectionTitle, SectionInput } from '../styled/Theme';
import { RadioButtonGroup, Radio } from '../styled/RadioButtonGroup';
import { MenuButton} from '../styled/MenuButton';
import { BackButton } from '../styled/BackButton';

const BuildingInformation = (props) => {
    // eslint-disable-next-line no-empty-pattern
    const [
        {
            numberOfElevators,
            numberOfStairWells,
            buildingFloors,
            buildingFootprintArea,
            isOccupied,
            buildingPerimeter,
            buildingFloorHeight,
            publicEntrances,
            buildingGrossSqFt,
        },
        dispatch,
    ] = useStateValue();

    const [inputBuildingFloors, setBuildingFloors] = useState(buildingFloors);
    const [isInputBuildingFloorsEmpty, setIsInputBuildingFloorsEmpty] = useState(false);
    const [inputBuildingFootprintArea, setBuildingFootprintArea] = useState(buildingFootprintArea);
    const [isInputBuildingFootprintAreaEmpty, setIsInputBuildingFootprintAreaEmpty] = useState(false);
    const [inputPerimeter, setPerimeter] = useState(buildingPerimeter);
    const [inputFloorHeight, setFloorHeight] = useState(buildingFloorHeight);
    const [inputPublicEntrances, setPublicEntrances] = useState(publicEntrances);
    const [inputElevators, setElevators] = useState(numberOfElevators);
    const [inputStairs, setStairs] = useState(numberOfStairWells);
    const grossBuildingHeight = inputFloorHeight * inputBuildingFloors + 4;
    const [buttonIsOccupied, setButtonIsOccupied] = useState(isOccupied);
    const [inputGrossBuildingSqFt, setGrossBuildingSqFt] = useState(buildingGrossSqFt);

    /*
        The perimeter calculation allows us to get gross perimeter from the building footprint area.
        The square root of the footprint area = the length of one side and then is multiplied by 4 (4 sides of a building).
        It is then multiplied by 1.1 which is our grossing factor provided by Abbott and then multiplied by 100 and divided by the same
        which is how we round it to the hundredths place.
     */

    const perimeter = Math.round(Math.sqrt(inputBuildingFootprintArea) * 4 * 1.1);

    const updatePerimeter = (pInputBuildingFootprintArea) => {
        let updatedPerimeter;

        updatedPerimeter = Math.round(Math.sqrt(pInputBuildingFootprintArea) * 4 * 1.1);

        setPerimeter(updatedPerimeter);

        return updatedPerimeter.toString();
    };

    const exteriorEnclosureSqFtCalc = () => {
        let exteriorEnclosureSqFt;

        if (inputPerimeter === '') {
            exteriorEnclosureSqFt = Math.round(perimeter * grossBuildingHeight * 100) / 100;
        } else {
            exteriorEnclosureSqFt = Math.round(inputPerimeter * grossBuildingHeight * 100) / 100;
        }

        return exteriorEnclosureSqFt;
    };

    const { navigation } = props;

    const [{ constructionType }] = useStateValue();

    const updateNumberOfElevators = (pInputBuildingFloors, pGrossBuildingSqFt) => {
        let updatedNumberOfElevators;

        if (pInputBuildingFloors == 1) {
            updatedNumberOfElevators = 0;
        } else if (pGrossBuildingSqFt >= 50001) {
            updatedNumberOfElevators = 3;
        } else if (pGrossBuildingSqFt <= 30000) {
            updatedNumberOfElevators = 1;
        } else {
            updatedNumberOfElevators = 2;
        }

        setElevators(updatedNumberOfElevators);

        return updatedNumberOfElevators;
    };

    const updateNumberOfStairs = (pInputBuildingFloors, pGrossBuildingSqFt) => {
        let updatedNumberOfStairs;

        if (pInputBuildingFloors == 1) {
            updatedNumberOfStairs = 0;
        } else if (pGrossBuildingSqFt >= 50001) {
            updatedNumberOfStairs = 3;
        } else {
            updatedNumberOfStairs = 2;
        }

        setStairs(updatedNumberOfStairs);

        return updatedNumberOfStairs;
    };

    const updateGrossBuildingSqFt = (pInputBuildingFloors, pInputBuildingFootprintArea) => {
        const updatedGrossBuildingSqFt = pInputBuildingFloors * pInputBuildingFootprintArea;

        setGrossBuildingSqFt(updatedGrossBuildingSqFt);

        return updatedGrossBuildingSqFt;
    };

    useEffect(() => {
        updateNumberOfElevators(inputBuildingFloors, inputGrossBuildingSqFt);
        updateNumberOfStairs(inputBuildingFloors, inputGrossBuildingSqFt);
    }, [inputGrossBuildingSqFt]);

    const handleOnPressNext = (props) => {
        switch (constructionType) {
            case 'Tenant Improvement':
                navigation.navigate('Demolition');
                break;
            case "Remodel":
                navigation.navigate('ExteriorEnclosure');
                break;
            default:
                navigation.navigate('Substructure');
                break;
        }
    };

    const RadioButtonOccupied = () => {
        const RadioButton = ({ title, value, first, last, disabled, selected, button }) => {
            const handleOnPress = () => {
                setButtonIsOccupied(value);
                dispatch({
                    type: 'updateIsOccupied',
                    newIsOccupied: value,
                });
            };

            return (
                <Radio
                    onPress={handleOnPress}
                    button={button}
                    title={title}
                    first={first}
                    last={last}
                    value={value}
                    disabled={disabled}
                    selected={selected}
                />
            );
        };

        return (
            <RadioButtonGroup>
                <RadioButton title="Yes" value button={isOccupied} first />
                <RadioButton title="No" value={false} button={isOccupied} />
            </RadioButtonGroup>
        );
    };

    if (constructionType === 'Tenant Improvement') {
        return (
            <Container>
                <KeyboardAvoidingView>
                    <ScrollView>
                        <ContainerView>
                            <PageTitle>Building Information</PageTitle>
                            <Section>
                                <SectionTitle>Number of Floors*</SectionTitle>
                                <SectionInput
                                    placeholder="Insert Number of Floors"
                                    onChangeText={(text) => {
                                        setBuildingFloors(text);
                                        updateGrossBuildingSqFt(text, inputBuildingFootprintArea);
                                        setIsInputBuildingFloorsEmpty(false);
                                    }}
                                    keyboardType="number-pad"
                                    error={isInputBuildingFloorsEmpty}
                                    value={inputBuildingFloors ? inputBuildingFloors.toString() : ''}
                                />
                            </Section>
                            <Section>
                                <SectionTitle>Footprint Area (sq. ft.)*</SectionTitle>
                                <SectionInput
                                    placeholder="Insert Footprint Area"
                                    onChangeText={(text) => {
                                        setBuildingFootprintArea(text);
                                        updateGrossBuildingSqFt(inputBuildingFloors, text);
                                        setIsInputBuildingFootprintAreaEmpty(false);
                                    }}
                                    keyboardType="number-pad"
                                    error={isInputBuildingFootprintAreaEmpty}
                                    value={inputBuildingFootprintArea ? inputBuildingFootprintArea.toString() : ''}
                                />
                            </Section>
                            <Section>
                                <SectionTitle>Gross Building Square Foot</SectionTitle>
                                <Text>{inputGrossBuildingSqFt.toString()}</Text>
                            </Section>
                            <Section>
                                <SectionTitle>Building Occupied</SectionTitle>
                                <RadioButtonOccupied />
                            </Section>
                            <MenuButton
                                title="Next"
                                onPress={() => {
                                    if (inputBuildingFloors !== 0 && inputBuildingFootprintArea !== 0 && inputBuildingFloors !== '' && inputBuildingFootprintArea !== '') {
                                        // navigation.navigate('Leed');
                                        handleOnPressNext();
                                        dispatch({
                                            type: 'updateBuildingFloors',
                                            newBuildingFloors: inputBuildingFloors,
                                        });
                                        dispatch({
                                            type: 'updateBuildingFootprintArea',
                                            newBuildingFootprintArea: inputBuildingFootprintArea,
                                        });
                                        dispatch({
                                            type: 'updateBuildingGrossSqFt',
                                            newBuildingGrossSqFt: inputGrossBuildingSqFt,
                                        });
                                    }
                                    if (inputBuildingFloors === 0 || inputBuildingFloors === '') {
                                        setIsInputBuildingFloorsEmpty(true);
                                    }
                                    if (inputBuildingFootprintArea === 0 || inputBuildingFootprintArea === '') {
                                        setIsInputBuildingFootprintAreaEmpty(true);
                                    }
                                }}
                            />
                            <BackButton title="Back" onPress={() => navigation.goBack()} />
                        </ContainerView>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Container>
        );
    }

    if (constructionType === 'Remodel') {
        return (
            <Container>
                <KeyboardAvoidingView>
                    <ScrollView>
                        <ContainerView>
                            <PageTitle>Building Information</PageTitle>
                            <Section>
                                <SectionTitle>Number of Floors*</SectionTitle>
                                <SectionInput
                                    placeholder="Insert Number of Floors"
                                    onChangeText={(text) => {
                                        setBuildingFloors(text);
                                        updateGrossBuildingSqFt(text, inputBuildingFootprintArea);
                                        setIsInputBuildingFloorsEmpty(false);
                                    }}
                                    keyboardType="number-pad"
                                    error={isInputBuildingFloorsEmpty}
                                    value={inputBuildingFloors ? inputBuildingFloors.toString() : ''}
                                />
                            </Section>
                            <Section>
                                <SectionTitle>Footprint Area (sq. ft.)*</SectionTitle>
                                <SectionInput
                                    placeholder="Insert Footprint Area"
                                    onChangeText={(text) => {
                                        setBuildingFootprintArea(text);
                                        updatePerimeter(text);
                                        updateGrossBuildingSqFt(inputBuildingFloors, text);
                                        setIsInputBuildingFootprintAreaEmpty(false);
                                    }}
                                    keyboardType="number-pad"
                                    error={isInputBuildingFootprintAreaEmpty}
                                    value={inputBuildingFootprintArea ? inputBuildingFootprintArea.toString() : ''}
                                />
                            </Section>
                            <Section>
                                <SectionTitle>Building Occupied</SectionTitle>
                                <RadioButtonOccupied />
                            </Section>
                            <Section>
                                <SectionTitle>Gross Building Square Foot</SectionTitle>
                                <Text>{inputGrossBuildingSqFt.toString()}</Text>
                            </Section>
                            <Section>
                                <SectionTitle>Perimeter (ft.) - Edit if known</SectionTitle>
                                <SectionInput
                                    onChangeText={(text) => {
                                        setPerimeter(text);
                                    }}
                                    keyboardType="number-pad"
                                    value={inputPerimeter.toString()}
                                />
                            </Section>
                            <Section>
                                <SectionTitle>Floor Height (ft.) - Edit if known</SectionTitle>
                                <SectionInput
                                    onChangeText={(text) => {
                                        setFloorHeight(text);
                                    }}
                                    keyboardType="number-pad"
                                    value={inputFloorHeight.toString()}
                                />
                            </Section>
                            <Section>
                                <SectionTitle>Gross Building Height</SectionTitle>
                                <Text>{grossBuildingHeight}</Text>
                            </Section>
                            <Section>
                                <SectionTitle>Exterior Enclosure Square Foot</SectionTitle>
                                <Text>{exteriorEnclosureSqFtCalc()}</Text>
                            </Section>

                            <Section>
                                <SectionTitle>Number of Public Entrances - Edit if known</SectionTitle>
                                <SectionInput
                                    onChangeText={(text) => {
                                        setPublicEntrances(text);
                                    }}
                                    keyboardType="number-pad"
                                    value={inputPublicEntrances.toString()}
                                />
                            </Section>

                            <Section>
                                <SectionTitle>Number of Elevators - Edit if known</SectionTitle>
                                <SectionInput
                                    onChangeText={(text) => {
                                        setElevators(text);
                                    }}
                                    keyboardType="number-pad"
                                    value={inputElevators.toString()}
                                />
                            </Section>

                            <Section>
                                <SectionTitle>Number of Stair Wells - Edit if known</SectionTitle>
                                <SectionInput
                                    onChangeText={(text) => {
                                        setStairs(text);
                                    }}
                                    keyboardType="number-pad"
                                    value={inputStairs.toString()}
                                />
                            </Section>
                            <MenuButton
                                title="Next"
                                onPress={() => {
                                    if (inputBuildingFloors !== 0 && inputBuildingFootprintArea !== 0 && inputBuildingFloors !== '' && inputBuildingFootprintArea !== '') {
                                        // navigation.navigate('Leed');
                                        handleOnPressNext();
                                        dispatch({
                                            type: 'updateBuildingFloors',
                                            newBuildingFloors: inputBuildingFloors,
                                        });
                                        dispatch({
                                            type: 'updateBuildingFootprintArea',
                                            newBuildingFootprintArea: inputBuildingFootprintArea,
                                        });
                                        dispatch({
                                            type: 'updateBuildingGrossSqFt',
                                            newBuildingGrossSqFt: inputGrossBuildingSqFt,
                                        });
                                        if (inputPerimeter === '') {
                                            dispatch({
                                                type: 'updateBuildingPerimeter',
                                                newBuildingPerimeter: perimeter,
                                            });
                                        } else {
                                            dispatch({
                                                type: 'updateBuildingPerimeter',
                                                newBuildingPerimeter: inputPerimeter,
                                            });
                                        }
                                        dispatch({
                                            type: 'updateBuildingHeight',
                                            newBuildingHeight: grossBuildingHeight,
                                        });
                                        dispatch({
                                            type: 'updateBuildingFloorHeight',
                                            newBuildingFloorHeight: inputFloorHeight,
                                        });
                                        dispatch({
                                            type: 'updateBuildingExteriorEnclosureSqFt',
                                            newBuildingExteriorEnclosureSqFt: exteriorEnclosureSqFtCalc(),
                                        });
                                        if (inputPublicEntrances !== '') {
                                            dispatch({
                                                type: 'updatePublicEntrances',
                                                newPublicEntrances: inputPublicEntrances,
                                            });
                                        }
                                        if (inputElevators !== '') {
                                            dispatch({
                                                type: 'updateNumberOfElevators',
                                                newNumberOfElevators: inputElevators,
                                            });
                                        }
                                        if (inputStairs !== '') {
                                            dispatch({
                                                type: 'updateNumberOfStairWells',
                                                newNumberOfStairWells: inputStairs,
                                            });
                                        }
                                    }
                                    if (inputBuildingFloors === 0 || inputBuildingFloors === '') {
                                        setIsInputBuildingFloorsEmpty(true);
                                    }
                                    if (inputBuildingFloors === 0 || inputBuildingFloors === '') {
                                        setIsInputBuildingFootprintAreaEmpty(true);
                                    }
                                }}
                            />
                            <BackButton title="Back" onPress={() => navigation.goBack()} />
                        </ContainerView>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Container>
        );
    }

    return (
        <Container>
            <KeyboardAvoidingView>
                <ScrollView>
                    <ContainerView>
                        <PageTitle>Building Information</PageTitle>
                        <Section>
                            <SectionTitle>Number of Floors*</SectionTitle>
                            <SectionInput
                                placeholder="Insert Number of Floors"
                                onChangeText={(text) => {
                                    setBuildingFloors(text);
                                    updateGrossBuildingSqFt(text, inputBuildingFootprintArea);
                                    setIsInputBuildingFloorsEmpty(false);
                                }}
                                keyboardType="number-pad"
                                error={isInputBuildingFloorsEmpty}
                                value={inputBuildingFloors ? inputBuildingFloors.toString() : ''}
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Footprint Area (sq. ft.)*</SectionTitle>
                            <SectionInput
                                placeholder="Insert Footprint Area"
                                onChangeText={(text) => {
                                    setBuildingFootprintArea(text);
                                    updatePerimeter(text);
                                    updateGrossBuildingSqFt(inputBuildingFloors, text);
                                    setIsInputBuildingFootprintAreaEmpty(false);
                                }}
                                keyboardType="number-pad"
                                error={isInputBuildingFootprintAreaEmpty}
                                value={inputBuildingFootprintArea ? inputBuildingFootprintArea.toString() : ''}
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Gross Building Square Foot</SectionTitle>
                            <Text>{inputGrossBuildingSqFt}</Text>
                        </Section>
                        <Section>
                            <SectionTitle>Perimeter (ft.) - Edit if known</SectionTitle>
                            <SectionInput
                                onChangeText={(text) => {
                                    setPerimeter(text);
                                }}
                                keyboardType="number-pad"
                                value={inputPerimeter.toString()}
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Floor Height (ft.) - Edit if known</SectionTitle>
                            <SectionInput
                                onChangeText={(text) => {
                                    setFloorHeight(text);
                                }}
                                keyboardType="number-pad"
                                value={inputFloorHeight.toString()}
                            />
                        </Section>
                        <Section>
                            <SectionTitle>Gross Building Height</SectionTitle>
                            <Text>{grossBuildingHeight}</Text>
                        </Section>
                        <Section>
                            <SectionTitle>Exterior Enclosure Square Foot</SectionTitle>
                            <Text>{exteriorEnclosureSqFtCalc()}</Text>
                        </Section>

                        <Section>
                            <SectionTitle>Number of Public Entrances - Edit if known</SectionTitle>
                            <SectionInput
                                onChangeText={(text) => {
                                    setPublicEntrances(text);
                                }}
                                keyboardType="number-pad"
                                value={inputPublicEntrances.toString()}
                            />
                        </Section>

                        <Section>
                            <SectionTitle>Number of Elevators - Edit if known</SectionTitle>
                            <SectionInput
                                onChangeText={(text) => {
                                    setElevators(text);
                                }}
                                keyboardType="number-pad"
                                value={inputElevators.toString()}
                            />
                        </Section>

                        <Section>
                            <SectionTitle>Number of Stair Wells - Edit if known</SectionTitle>
                            <SectionInput
                                onChangeText={(text) => {
                                    setStairs(text);
                                }}
                                keyboardType="number-pad"
                                value={inputStairs.toString()}
                            />
                        </Section>
                        <MenuButton
                            title="Next"
                            onPress={() => {
                                if (inputBuildingFloors !== 0 && inputBuildingFootprintArea !== 0 && inputBuildingFloors !== '' && inputBuildingFootprintArea !== '') {
                                    // navigation.navigate('Leed');
                                    handleOnPressNext();
                                    dispatch({
                                        type: 'updateBuildingFloors',
                                        newBuildingFloors: inputBuildingFloors,
                                    });
                                    dispatch({
                                        type: 'updateBuildingFootprintArea',
                                        newBuildingFootprintArea: inputBuildingFootprintArea,
                                    });
                                    dispatch({
                                        type: 'updateBuildingGrossSqFt',
                                        newBuildingGrossSqFt: inputGrossBuildingSqFt,
                                    });
                                    if (inputPerimeter === '') {
                                        dispatch({
                                            type: 'updateBuildingPerimeter',
                                            newBuildingPerimeter: perimeter,
                                        });
                                    } else {
                                        dispatch({
                                            type: 'updateBuildingPerimeter',
                                            newBuildingPerimeter: inputPerimeter,
                                        });
                                    }
                                    dispatch({
                                        type: 'updateBuildingHeight',
                                        newBuildingHeight: grossBuildingHeight,
                                    });
                                    dispatch({
                                        type: 'updateBuildingFloorHeight',
                                        newBuildingFloorHeight: inputFloorHeight,
                                    });
                                    dispatch({
                                        type: 'updateBuildingExteriorEnclosureSqFt',
                                        newBuildingExteriorEnclosureSqFt: exteriorEnclosureSqFtCalc(),
                                    });
                                    if (inputPublicEntrances !== '') {
                                        dispatch({
                                            type: 'updatePublicEntrances',
                                            newPublicEntrances: inputPublicEntrances,
                                        });
                                    }
                                    if (inputElevators !== '') {
                                        dispatch({
                                            type: 'updateNumberOfElevators',
                                            newNumberOfElevators: inputElevators,
                                        });
                                    }
                                    if (inputStairs !== '') {
                                        dispatch({
                                            type: 'updateNumberOfStairWells',
                                            newNumberOfStairWells: inputStairs,
                                        });
                                    }
                                }
                                if (inputBuildingFloors === 0 || inputBuildingFloors === '') {
                                    setIsInputBuildingFloorsEmpty(true);
                                }
                                if (inputBuildingFloors === 0 || inputBuildingFloors === '') {
                                    setIsInputBuildingFootprintAreaEmpty(true);
                                }
                            }}
                        />
                        <BackButton title="Back" onPress={() => navigation.goBack()} />
                    </ContainerView>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default BuildingInformation;
