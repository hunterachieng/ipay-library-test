import WebView from "react-native-webview";
import styles from "./styles";
const CashLink = ({route})=>{
    const {cashoutLink} = route.params
    return(
       <WebView
       style={styles.container}
       source={{uri: cashoutLink}}
       />

    )
}
export default CashLink