import { ArrowForwardIcon } from '@chakra-ui/icons';
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
        <Heading size="2xl">{exchange.number}</Heading>
        <HStack spacing="12">
          <Text>{exchange.locationFrom}</Text>
          <ArrowForwardIcon />
          <Text>{exchange.locationTo}</Text>
        </HStack>
      </VStack>
      <Box w="full">
        <Content>{exchange.customerId}</Content>
      </Box>
    </VStack>
  );
};
