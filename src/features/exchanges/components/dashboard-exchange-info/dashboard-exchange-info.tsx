import {
  Heading,
  VStack,
  Text,
  HStack,
  Box,
} from '@chakra-ui/react';

import { Content } from '@/components/content';

import { Exchange } from '../../types';

export const DashboardExchangeInfo = ({
  exchange,
}: {
  exchange: Exchange;
}) => {
  return (
    <VStack>
      <VStack pt="16" pb="4" spacing="8">
        <Heading size="2xl">{exchange.position}</Heading>
        <HStack spacing="12">
          <Text>{exchange.department}</Text>
          <Text>{exchange.location}</Text>
        </HStack>
      </VStack>
      <Box w="full">
        <Content>{exchange.info}</Content>
      </Box>
    </VStack>
  );
};
