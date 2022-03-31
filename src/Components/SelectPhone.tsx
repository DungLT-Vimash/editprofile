import React, { useState } from "react";
import { Text, View, StyleSheet, Modal } from 'react-native';
interface SelectPhoneProps {}

const SelectPhone = (props: SelectPhoneProps) => {
    const [SelectPhone, setSelectPhone] = useState(false);
    const show = () => {
        setSelectPhone(true);
    };
    const close = () => {
        setSelectPhone(true);
    }
  return (
    <Modal
        animationType={'fade'}
        transparent={true}
        visible={true}
        onRequestClose={close}
    >

    </Modal>
  );
};

export default SelectPhone;

const styles = StyleSheet.create({
  container: {}
});
