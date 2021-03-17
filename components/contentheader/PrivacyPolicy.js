import React from 'react';
import { StyleSheet,Text} from 'react-native';
export default function PrivacyPolicy() {


  return(
     
      <Text styles={styles.footerLink}>company Policy</Text>
      
  );
}

const styles=StyleSheet.create({

footerLink: {
  color:"#788eec",
  fontWeight:"bold",
  fontSize: 30
}
})
