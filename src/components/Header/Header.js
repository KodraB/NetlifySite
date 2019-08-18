import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Box, Flex, Text } from 'rebass'
import {default as H1} from '../Heading/Heading1/Heading1'


const Outer = styled(Box)`
  background: ${({ theme }) => theme.color.primary.main};
  margin-bottom: 1.45rem;
  margin-top: 1.45rem;
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12), 
  `
const StyledLink = styled(Link)`
color: ${({ theme }) => theme.color.text.contrastText};
text-decoration: none;
`

const ScriptLink = styled.span`
  color: ${({ theme }) => theme.color.primary.contrastText};
  cursor: pointer;
`

const Header = ({ siteTitle, currentUser, login, logout }) => ( 
  <Outer mb={4}>
    <Flex my={0} mx="auto" px={3} py={4}>
    <H1 width={2 / 3}>
      <StyledLink to="/">{siteTitle}</StyledLink>
    </H1>
      <Flex justifyContent="flex-end" width={1 / 3}>
        <Text my="auto" mr={3}>
          <StyledLink to="../../about/">About</StyledLink>
        </Text>
        <Text my="auto" mr={3}>
          <StyledLink to="contact">Contact</StyledLink>
        </Text>
        <Text my="auto" mr={3}>
        {currentUser ? (
          <ScriptLink onClick={logout}>Logout</ScriptLink>
        ) : (
          <ScriptLink onClick={login}>Login</ScriptLink>
        )}
        </Text>
      </Flex>
    </Flex>
  </Outer>
)

export default Header