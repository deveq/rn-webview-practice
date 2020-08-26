import React from 'react';
import styled from 'styled-components/native';

import {SafeAreaView, Pressable, Text} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Wrapper>
        <StyledPressable android_ripple={null}>
          <Text>안녕</Text>
        </StyledPressable>
      </Wrapper>
    </SafeAreaView>
  );
}

const Wrapper = styled.ScrollView({
  width: '100%',
  minHeight: '100%',
});

const StyledPressable = styled(Pressable)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100%',
  backgroundColor: '#FFF',
  alignItems: 'center',
});
