import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TextInput, Button, Text } from "react-native-paper";
import { View, ScrollView , KeyboardAvoidingView} from "react-native";
import styles from "./styles";
import { ipayCashout } from "ipay-js-cashout-library";

const Cashout = () => {

    const handleSubmit=async(values)=>{
     const keystring = await  ipayCashout.cashout(
        values.live,
        values.mpesa,
        values.bonga,
        values.airtel,
        values.equity,
        values.mobilebanking,
        values.creditcard,
        values.unionpay,
        values.mvisa,
        values.vooma,
        values.pesalink,
        values.autopay,
        values.oid,
        values.inv,
        values.ttl,
        values.tel,
        values.eml,
        values.vid,
        values.curr,
        values.p1,
        values.p2,
        values.p2,
        values.p4,
        values.cbk,
        values.lbk,
        values.cst,
        values.crl,
        values.hashKey
     );
     console.log(values);
     console.log(keystring);
    }
 return(
    <KeyboardAvoidingView
    style={styles.container} 
    // contentContainerStyle={styles.container}
    >
        <ScrollView>
    <Text style={styles.welcome}>Generate Hash-Key</Text>
    <Formik
      // validationSchema={smsValidationSchema}
      initialValues={{
        live: "1",
        mpesa: "1",
        bonga: "0",
        airtel: "1",
        equity: "1",
        mobilebanking: "0",
        creditcard: "0",
        unionpay: "1",
        mvisa: "1",
        vooma: "0",
        pesalink: "0",
        autopay: "0",
        oid: "112",
        inv: "112020102292999",
        ttl: "900",
        tel: "254712345678",
        eml: "achieng@gmailo.com",
        vid: "demo",
        curr: "KES",
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        cbk: "https://akirachix.com",
        lbk: "",
        cst:"1",
        crl: "2",
        hashKey: "demoCHANGED",
      }}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        ...props
      }) => (
        <>
          <TextInput
            name="live"
            label="Live"
            mode="outlined"
            onChangeText={handleChange("live")}
            onBlur={handleBlur("live")}
            value={values.live}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />

          <TextInput
            name="mpesa"
            label="Mpesa"
            mode="outlined"
            onChangeText={handleChange("mpesa")}
            onBlur={handleBlur("mpesa")}
            value={values.mpesa}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="bonga"
            label="bonga"
            mode="outlined"
            onChangeText={handleChange("bonga")}
            onBlur={handleBlur("bonga")}
            value={values.airtel}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="airtel"
            label="Airtel"
            mode="outlined"
            onChangeText={handleChange("airtel")}
            onBlur={handleBlur("airtel")}
            value={values.airtel}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="equity"
            label="Equity"
            mode="outlined"
            onChangeText={handleChange("equity")}
            onBlur={handleBlur("equity")}
            value={values.equity}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="mobilebanking"
            label="Mobilebanking"
            mode="outlined"
            onChangeText={handleChange("mobilebanking")}
            onBlur={handleBlur("mobilebanking")}
            value={values.mobilebanking}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="creditcard"
            label="Creditcard"
            mode="outlined"
            onChangeText={handleChange("creditcard")}
            onBlur={handleBlur("creditcard")}
            value={values.creditcard}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="unionpay"
            label="Unionpay"
            mode="outlined"
            onChangeText={handleChange("unionpay")}
            onBlur={handleBlur("unionpay")}
            value={values.unionpay}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="mvisa"
            label="Mvisa"
            mode="outlined"
            onChangeText={handleChange("mvisa")}
            onBlur={handleBlur("mvisa")}
            value={values.mvisa}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="vooma"
            label="Vooma"
            mode="outlined"
            onChangeText={handleChange("vooma")}
            onBlur={handleBlur("vooma")}
            value={values.vooma}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="pesalink"
            label="Pesalink"
            mode="outlined"
            onChangeText={handleChange("pesalink")}
            onBlur={handleBlur("pesalink")}
            value={values.pesalink}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="autopay"
            label="Autopay"
            mode="outlined"
            onChangeText={handleChange("autopay")}
            onBlur={handleBlur("autopay")}
            value={values.autopay}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="oid"
            label="Oid"
            mode="outlined"
            onChangeText={handleChange("oid")}
            onBlur={handleBlur("oid")}
            value={values.oid}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
               <TextInput
            name="inv"
            label="Inv"
            mode="outlined"
            onChangeText={handleChange("inv")}
            onBlur={handleBlur("inv")}
            value={values.inv}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
                 <TextInput
            name="ttl"
            label="Ttl"
            mode="outlined"
            onChangeText={handleChange("ttl")}
            onBlur={handleBlur("ttl")}
            value={values.ttl}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
                      <TextInput
            name="tel"
            label="Tel"
            mode="outlined"
            onChangeText={handleChange("tel")}
            onBlur={handleBlur("tel")}
            value={values.tel}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
                       <TextInput
            name="eml"
            label="Eml"
            mode="outlined"
            onChangeText={handleChange("eml")}
            onBlur={handleBlur("eml")}
            value={values.eml}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
          <TextInput
            name="vid"
            label="Vid"
            mode="outlined"
            onChangeText={handleChange("vid")}
            onBlur={handleBlur("vid")}
            value={values.vid}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
             <TextInput
            name="curr"
            label="Curr"
            mode="outlined"
            onChangeText={handleChange("curr")}
            onBlur={handleBlur("curr")}
            value={values.curr}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
             <TextInput
            name="p1"
            label="p1"
            mode="outlined"
            onChangeText={handleChange("p1")}
            onBlur={handleBlur("p1")}
            value={values.p1}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
             <TextInput
            name="p2"
            label="p2"
            mode="outlined"
            onChangeText={handleChange("p2")}
            onBlur={handleBlur("p2")}
            value={values.p2}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
             <TextInput
            name="p3"
            label="p3"
            mode="outlined"
            onChangeText={handleChange("p3")}
            onBlur={handleBlur("p3")}
            value={values.p3}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
             <TextInput
            name="p4"
            label="p4"
            mode="outlined"
            onChangeText={handleChange("p4")}
            onBlur={handleBlur("p4")}
            value={values.p4}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
             <TextInput
            name="cbk"
            label="cbk"
            mode="outlined"
            onChangeText={handleChange("cbk")}
            onBlur={handleBlur("cbk")}
            value={values.cbk}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
             <TextInput
            name="lbk"
            label="lbk"
            mode="outlined"
            onChangeText={handleChange("lbk")}
            onBlur={handleBlur("lbk")}
            value={values.lbk}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
                   <TextInput
            name="cst"
            label="cst"
            mode="outlined"
            onChangeText={handleChange("cst")}
            onBlur={handleBlur("cst")}
            value={values.cst}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
             <TextInput
            name="crl"
            label="crl"
            mode="outlined"
            onChangeText={handleChange("crl")}
            onBlur={handleBlur("crl")}
            value={values.crl}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />
             <TextInput
            name="hashKey"
            label="hashKey"
            mode="outlined"
            onChangeText={handleChange("hashKey")}
            onBlur={handleBlur("hashKey")}
            value={values.hashKey}
            activeOutlineColor="#013F9E"
            outlineColor="#A3A3A3"
            blurOnSubmit
            style={styles.input}
          />

          <Button
            onPress={() => {
              handleSubmit();
            }}
            mode="contained"
            loading={props.isSubmitting}
            uppercase={false}
            style={styles.button}
            disabled={!isValid}
          >
            Send
          </Button>
        </>
      )}
    </Formik>
    </ScrollView>
  </KeyboardAvoidingView>
 )
};
export default Cashout;
