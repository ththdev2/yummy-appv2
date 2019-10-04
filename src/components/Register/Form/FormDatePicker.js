import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  DatePickerIOS,
  Modal,
  TouchableOpacity
} from "react-native";
import { inject, observer } from "mobx-react";
import Colors from "../../../constants/Colors";

@inject("register")
@observer
export default class FormDatePicker extends Component {
  onClose() {
    this.props.parent.modalVisible = false;
    this.props.register.onSubmit();
  }
  render() {
    const { visible, register, onBlur } = this.props;
    const { values, onChange } = register;
    return (
      <Modal visible={visible} transparent={true} animationType="slide">
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.button} onPress={onBlur}>
            <Text style={{ fontSize: 18, color: "white" }}>Done</Text>
          </TouchableOpacity>
          <DatePickerIOS
            date={register.values.birth}
            onDateChange={date => onChange("birth", date)}
            mode={"date"}
            locale={"ko"}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "flex-end"
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.tint,
    justifyContent: "center",
    alignItems: "center"
  }
});
