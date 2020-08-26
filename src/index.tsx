import React from 'react';
import styled from 'styled-components/native';
import {WebView} from 'react-native-webview';

export default function HomeScreen() {
  return (
    <Wrapper>
      <WebView source={{uri: 'https://pickk.one/'}} style={{flex: 1}} />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView({
  flex: 1,
});
