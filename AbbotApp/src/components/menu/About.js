import React, { Component } from "react";
import { Text, View } from "react-native";
import { MenuButton } from '../styled/MenuButton';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "ABOUT",
      bodyText: "This application from Abbott Construction helps provide \n cost estimates for their clients in a short period of time."
    };
  }

  render() {
    const { navigation } = this.props;
    return (
        <View>
      <Text>
        <Text onPress={this.onPressTitle}>
          {"\n"}
          {this.state.titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText}</Text>
        {"\n"}
          {"\n"}
      </Text>

      <MenuButton
      title="Home"
      onPress={() => navigation.navigate('Home')}/>
      </View>
    );
  }
}